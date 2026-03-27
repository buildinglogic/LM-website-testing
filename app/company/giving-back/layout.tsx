import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Giving Back — Liquidmind AI Community Initiatives",
  description: "How Liquidmind AI gives back to the trade and export community in India — education, mentorship, and open resources for SME exporters.",
  openGraph: {
    title: "Giving Back — Liquidmind AI Community Initiatives",
    description: "Our commitment to supporting Indian SME exporters through education and community programs.",
    type: "website",
    url: "https://liquidmind.ai/company/giving-back",
  },
  alternates: { canonical: "https://liquidmind.ai/company/giving-back" },
}

export default function GivingBackLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
