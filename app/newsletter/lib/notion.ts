import { Client } from "@notionhq/client"
import { NotionToMarkdown } from "notion-to-md"
import { marked } from "marked"

// ── Notion client ──────────────────────────────────────────────────────────────

const notionKey = process.env.NOTION_API_KEY
const databaseId = process.env.NOTION_BLOG_DATABASE_ID

const notion = notionKey ? new Client({ auth: notionKey }) : null
const n2m = notion ? new NotionToMarkdown({ notionClient: notion }) : null

// ── Types ──────────────────────────────────────────────────────────────────────

export type BlogPost = {
  title: string
  slug: string
  excerpt: string
  date: string
  read_time: string
}

export type BlogPostFull = BlogPost & {
  content: string
}

// ── Helpers ────────────────────────────────────────────────────────────────────

function getPlainText(property: any): string {
  if (!property) return ""
  if (property.type === "title" && property.title) {
    return property.title.map((t: any) => t.plain_text).join("")
  }
  if (property.type === "rich_text" && property.rich_text) {
    return property.rich_text.map((t: any) => t.plain_text).join("")
  }
  if (property.type === "date" && property.date) {
    return property.date.start || ""
  }
  return ""
}

function extractPost(page: any): BlogPost {
  const props = page.properties
  return {
    title: getPlainText(props.Title || props.title || props.Name || props.name),
    slug: getPlainText(props.Slug || props.slug),
    excerpt: getPlainText(props.Excerpt || props.excerpt),
    date: getPlainText(props.Date || props.date),
    read_time: getPlainText(props["Read Time"] || props["read_time"] || props.ReadTime),
  }
}

// ── Public API ─────────────────────────────────────────────────────────────────

export async function getPublishedPosts(): Promise<BlogPost[]> {
  if (!notion || !databaseId) return []

  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: "Published",
        checkbox: { equals: true },
      },
      sorts: [{ property: "Date", direction: "descending" }],
      page_size: 6,
    })

    return response.results.map(extractPost)
  } catch (err) {
    console.error("[notion] Failed to fetch posts:", err)
    return []
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPostFull | null> {
  if (!notion || !databaseId || !n2m) return null

  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        and: [
          { property: "Slug", rich_text: { equals: slug } },
          { property: "Published", checkbox: { equals: true } },
        ],
      },
      page_size: 1,
    })

    if (response.results.length === 0) return null

    const page = response.results[0]
    const post = extractPost(page)

    // Convert Notion blocks → markdown → HTML
    const mdBlocks = await n2m.pageToMarkdown(page.id)
    const mdString = n2m.toMarkdownString(mdBlocks).parent
    const htmlContent = await marked(mdString)

    return { ...post, content: htmlContent }
  } catch (err) {
    console.error("[notion] Failed to fetch post by slug:", err)
    return null
  }
}
