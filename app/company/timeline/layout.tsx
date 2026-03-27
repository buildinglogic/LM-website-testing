import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Journey — Liquidmind AI Timeline",
  description: "From founding to award-winning AI trade compliance platform — the Liquidmind AI story milestone by milestone.",
  openGraph: {
    title: "Liquidmind AI — Company Timeline & Milestones",
    description: "Our journey from a trade compliance idea to India's leading AI export platform.",
    type: "website",
    url: "https://liquidmind.ai/company/timeline",
  },
  alternates: { canonical: "https://liquidmind.ai/company/timeline" },
}

export default function TimelineLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
