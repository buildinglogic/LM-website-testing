import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Aegis Graham Bell Award 2024 — Liquidmind AI Wins Best AI in Trade",
  description: "Liquidmind AI wins the prestigious Aegis Graham Bell Award 2024 for Innovation in Artificial Intelligence — recognising our AI-powered trade compliance platform.",
  keywords: "Aegis Graham Bell Award, Liquidmind AI award, AI innovation award India 2024, trade compliance AI award",
  openGraph: {
    title: "Liquidmind AI Wins Aegis Graham Bell Award 2024",
    description: "India's most prestigious telecom & IT innovation award recognises Liquidmind AI for excellence in AI-powered trade compliance.",
    type: "website",
    url: "https://liquidmind.ai/awards/aegis-graham-bell",
  },
  alternates: { canonical: "https://liquidmind.ai/awards/aegis-graham-bell" },
}

export default function AegisLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
