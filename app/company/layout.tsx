import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Liquidmind AI — India's AI Trade Compliance Company",
  description: "Learn about Liquidmind AI — our mission to eliminate trade compliance errors for Indian exporters, our team, and why we built Patram AI, TariffIQ and TradeGuard.",
  keywords: "Liquidmind AI company, about, trade compliance startup India, AI export compliance company, Bangalore",
  openGraph: {
    title: "About Liquidmind AI — Eliminating Trade Compliance Errors in India",
    description: "Meet the team building AI tools that protect Indian exporters from customs errors, wrong HSN codes, and sanctions risks.",
    type: "website",
    url: "https://liquidmind.ai/company",
  },
  alternates: { canonical: "https://liquidmind.ai/company" },
}

export default function CompanyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
