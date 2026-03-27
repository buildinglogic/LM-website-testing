import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Book a Demo — See Liquidmind AI in Action",
  description: "See how Patram AI, TariffIQ and TradeGuard can cut your trade compliance errors to zero. Book a personalised demo with our trade compliance experts.",
  openGraph: {
    title: "Book a Demo — See Liquidmind AI's Trade Compliance Platform",
    description: "A personalised walkthrough of Patram AI, TariffIQ and TradeGuard for your export business.",
    type: "website",
    url: "https://liquidmind.ai/book-demo",
  },
  alternates: { canonical: "https://liquidmind.ai/book-demo" },
}

export default function BookDemoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
