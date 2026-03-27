import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Trade Compliance Newsletter — Liquidmind AI Insights",
  description: "Get actionable trade compliance insights for Indian exporters delivered to your inbox. HSN updates, RoDTEP changes, customs circulars, and AI tips.",
  keywords: "trade compliance newsletter, export compliance India, RoDTEP updates, HSN code updates, customs India newsletter",
  openGraph: {
    title: "Trade Compliance Newsletter by Liquidmind AI",
    description: "Stay ahead of RoDTEP changes, HSN updates and customs circulars. Free newsletter for Indian exporters.",
    type: "website",
    url: "https://liquidmind.ai/newsletter",
  },
  alternates: { canonical: "https://liquidmind.ai/newsletter" },
}

export default function NewsletterLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
