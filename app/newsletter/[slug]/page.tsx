import { notFound } from "next/navigation"
import Link from "next/link"
import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FooterLinks } from "@/components/footer-links"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { getPostBySlug } from "../lib/notion"

export const revalidate = 300

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)
  if (!post) return {}

  return {
    title: `${post.title} | Liquidmind AI`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)
  if (!post) notFound()

  return (
    <main className="min-h-screen" style={{ background: "#FFFFFF" }}>
      <Navigation />

      {/* ── Article Header ── */}
      <section className="pt-[140px] pb-8 px-5 lg:px-8" style={{ background: "#FFFFFF" }}>
        <div className="max-w-[780px] mx-auto">

          {/* Back link */}
          <Link
            href="/newsletter"
            className="inline-flex items-center gap-1.5 text-[14px] font-semibold mb-8 transition-all hover:opacity-70"
            style={{ color: "#0066CC" }}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to Newsletter
          </Link>

          {/* Section label */}
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 flex-shrink-0 rounded-full" style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)" }} />
            <span className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#94A3B8" }}>
              Newsletter
            </span>
          </div>

          {/* Title */}
          <h1 className="text-[26px] sm:text-[36px] lg:text-[48px] font-extrabold leading-tight mb-6" style={{ color: "#0F172A" }}>
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex items-center gap-3">
            <span className="text-[14px]" style={{ color: "#94A3B8" }}>{formatDate(post.date)}</span>
            <span
              className="text-[13px] px-2.5 py-0.5 rounded-full font-medium"
              style={{ background: "rgba(0,102,204,0.08)", color: "#0066CC" }}
            >
              {post.read_time}
            </span>
          </div>
        </div>
      </section>

      {/* ── Article Body ── */}
      <section className="py-10 lg:py-14 px-5 lg:px-8" style={{ background: "#FFFFFF" }}>
        <div className="max-w-[780px] mx-auto">
          <style>{`
            .article-content h1 {
              font-size: 26px;
              font-weight: 700;
              color: #0F172A;
              margin: 2.5rem 0 0.75rem;
              line-height: 1.3;
            }
            .article-content h2 {
              font-size: 22px;
              font-weight: 700;
              color: #0F172A;
              margin: 2rem 0 0.75rem;
              line-height: 1.3;
            }
            .article-content h3 {
              font-size: 18px;
              font-weight: 700;
              color: #0F172A;
              margin: 1.5rem 0 0.5rem;
              line-height: 1.4;
            }
            .article-content p {
              margin: 0 0 1.25rem;
              line-height: 1.75;
            }
            .article-content ul,
            .article-content ol {
              margin: 0 0 1.25rem;
              padding-left: 1.5rem;
            }
            .article-content li {
              margin-bottom: 0.4rem;
              line-height: 1.7;
            }
            .article-content ul li {
              list-style-type: disc;
            }
            .article-content ol li {
              list-style-type: decimal;
            }
            .article-content a {
              color: #0066CC;
              font-weight: 600;
              text-decoration: underline;
              text-underline-offset: 2px;
            }
            .article-content a:hover {
              opacity: 0.75;
            }
            .article-content strong {
              font-weight: 700;
              color: #0F172A;
            }
            .article-content blockquote {
              border-left: 3px solid #0066CC;
              margin: 1.5rem 0;
              padding: 0.75rem 1.25rem;
              background: #EFF6FF;
              border-radius: 0 8px 8px 0;
              color: #1B4F8A;
              font-style: italic;
            }
            .article-content hr {
              border: none;
              border-top: 1px solid #E2E8F0;
              margin: 2rem 0;
            }
            .article-content pre {
              background: #F8FAFC;
              border: 1px solid #E2E8F0;
              border-radius: 8px;
              padding: 1rem 1.25rem;
              overflow-x: auto;
              margin: 0 0 1.25rem;
            }
            .article-content pre code {
              font-family: 'JetBrains Mono', monospace;
              font-size: 14px;
              color: #0F172A;
              background: none;
              padding: 0;
            }
            .article-content code {
              font-family: 'JetBrains Mono', monospace;
              font-size: 14px;
              background: #F1F5F9;
              padding: 0.15rem 0.4rem;
              border-radius: 4px;
              color: #0F172A;
            }
            .article-content img {
              max-width: 100%;
              height: auto;
              border-radius: 8px;
              margin: 1.5rem 0;
            }
            .article-content figure {
              margin: 1.5rem 0;
            }
            .article-content figcaption {
              text-align: center;
              font-size: 13px;
              color: #94A3B8;
              margin-top: 0.5rem;
            }
            .article-content table {
              width: 100%;
              border-collapse: collapse;
              margin: 1.5rem 0;
              font-size: 14px;
            }
            .article-content th,
            .article-content td {
              border: 1px solid #E2E8F0;
              padding: 0.6rem 0.75rem;
              text-align: left;
            }
            .article-content th {
              background: #F8FAFC;
              font-weight: 700;
              color: #0F172A;
            }
            .article-content td {
              color: #475569;
            }
            .article-content details {
              margin: 1.25rem 0;
              border: 1px solid #E2E8F0;
              border-radius: 8px;
              overflow: hidden;
            }
            .article-content summary {
              padding: 0.75rem 1rem;
              font-weight: 600;
              color: #0F172A;
              cursor: pointer;
              background: #F8FAFC;
            }
            .article-content details[open] summary {
              border-bottom: 1px solid #E2E8F0;
            }
            .article-content details > :not(summary) {
              padding: 0.75rem 1rem;
            }
          `}</style>
          <div
            className="article-content text-[15px] sm:text-[16px] leading-relaxed"
            style={{ color: "#475569" }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>

      {/* ── Bottom Navigation ── */}
      <section className="py-10 px-5 lg:px-8" style={{ borderTop: "1px solid #E2E8F0", background: "#F8FAFC" }}>
        <div className="max-w-[780px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/newsletter"
            className="inline-flex items-center gap-1.5 text-[14px] font-semibold transition-all hover:opacity-70"
            style={{ color: "#0066CC" }}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to Newsletter
          </Link>
          <Link
            href="/newsletter"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-[14px] font-bold btn-shine transition-all hover:scale-105"
            style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)", color: "#FFFFFF" }}
          >
            Subscribe for more insights
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>

      <FooterLinks />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
