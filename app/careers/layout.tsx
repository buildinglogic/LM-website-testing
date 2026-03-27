import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Careers at Liquidmind AI — Join India's AI Trade Compliance Team",
  description: "We're hiring engineers, product managers, and trade compliance specialists. Build AI that transforms how India trades with the world.",
  keywords: "Liquidmind AI jobs, careers, hiring, AI startup Bangalore, trade compliance jobs India",
  openGraph: {
    title: "Careers at Liquidmind AI — Build the Future of Indian Trade",
    description: "Join our team in Bangalore. We're building AI that eliminates trade compliance errors for Indian exporters.",
    type: "website",
    url: "https://liquidmind.ai/careers",
  },
  alternates: { canonical: "https://liquidmind.ai/careers" },
}

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
