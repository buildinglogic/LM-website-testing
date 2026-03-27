import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Naveen Athresh — Founder & CEO, Liquidmind AI",
  description: "Naveen Athresh founded Liquidmind AI to solve the trade compliance crisis facing Indian exporters. Read about his journey and vision for AI-powered trade intelligence.",
  openGraph: {
    title: "Naveen Athresh — Founder & CEO of Liquidmind AI",
    description: "The story behind Liquidmind AI and why Naveen Athresh set out to eliminate trade document errors for Indian exporters.",
    type: "profile",
    url: "https://liquidmind.ai/company/founder",
  },
  alternates: { canonical: "https://liquidmind.ai/company/founder" },
}

export default function FounderLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
