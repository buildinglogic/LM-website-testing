import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Patram AI — Intelligent Trade Document Verification | Liquidmind AI",
  description: "Patram AI reads your shipping bills, invoices, packing lists and BLs in seconds. Catch every mismatch before customs does. Reduce document rejections by 90%.",
  keywords: "trade document verification, shipping bill, invoice mismatch, customs document AI, export document check, Patram AI",
  openGraph: {
    title: "Patram AI — Catch Every Trade Document Error Before Customs Does",
    description: "AI-powered document verification for shipping bills, invoices, packing lists and BLs. Built for Indian exporters.",
    type: "website",
    url: "https://liquidmind.ai/products/patram",
  },
  alternates: { canonical: "https://liquidmind.ai/products/patram" },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Patram AI",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "INR", availability: "https://schema.org/InStock" },
  description: "AI-powered trade document verification that catches every mismatch between shipping bills, invoices, packing lists and BLs before customs does.",
  url: "https://liquidmind.ai/products/patram",
  creator: { "@type": "Organization", name: "Liquidmind AI", url: "https://liquidmind.ai" },
  featureList: [
    "Shipping bill vs invoice cross-check",
    "Packing list verification",
    "Bill of lading validation",
    "Instant mismatch detection",
    "Export compliance checks",
  ],
}

export default function PatramLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  )
}
