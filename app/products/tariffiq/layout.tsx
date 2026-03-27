import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "TariffIQ — HSN Code Lookup & RoDTEP/Drawback Calculator | Liquidmind AI",
  description: "Find the right HSN code instantly and calculate your maximum RoDTEP or Drawback benefit. AI-powered tariff classification for Indian exporters.",
  keywords: "HSN code lookup, RoDTEP calculator, drawback calculator, tariff classification, HS code India, export duty drawback, TariffIQ",
  openGraph: {
    title: "TariffIQ — HSN Lookup & RoDTEP/Drawback Calculator",
    description: "AI-powered HSN code classification and benefit optimisation for Indian exporters. Find the right code, claim the maximum refund.",
    type: "website",
    url: "https://liquidmind.ai/products/tariffiq",
  },
  alternates: { canonical: "https://liquidmind.ai/products/tariffiq" },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "TariffIQ",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "INR", availability: "https://schema.org/InStock" },
  description: "AI-powered HSN code lookup and RoDTEP/Drawback calculator for Indian exporters. Classify products accurately and maximise your duty refund.",
  url: "https://liquidmind.ai/products/tariffiq",
  creator: { "@type": "Organization", name: "Liquidmind AI", url: "https://liquidmind.ai" },
  featureList: [
    "HSN code classification",
    "RoDTEP rate lookup",
    "Duty Drawback calculator",
    "Benefit comparison — RoDTEP vs Drawback",
    "AI product description to HSN mapping",
  ],
}

export default function TariffIQLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  )
}
