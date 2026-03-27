import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "TradeGuard — Export Compliance & Sanctions Screening | Liquidmind AI",
  description: "Screen every shipment against global sanctions lists, denied party databases and trade restrictions in real time. Stay compliant, ship with confidence.",
  keywords: "export compliance, sanctions screening, denied party list, trade restrictions, OFAC screening, TradeGuard, export controls India",
  openGraph: {
    title: "TradeGuard — Real-Time Export Compliance & Sanctions Screening",
    description: "Screen shipments against global sanctions and denied party lists instantly. Built for Indian exporters navigating complex trade regulations.",
    type: "website",
    url: "https://liquidmind.ai/products/tradeguard",
  },
  alternates: { canonical: "https://liquidmind.ai/products/tradeguard" },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "TradeGuard",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "INR", availability: "https://schema.org/InStock" },
  description: "Real-time export compliance and sanctions screening platform. Screen every shipment against global denied party lists and trade restrictions.",
  url: "https://liquidmind.ai/products/tradeguard",
  creator: { "@type": "Organization", name: "Liquidmind AI", url: "https://liquidmind.ai" },
  featureList: [
    "Sanctions list screening",
    "Denied party database check",
    "Real-time trade restriction alerts",
    "OFAC and global export controls",
    "Bulk shipment compliance screening",
  ],
}

export default function TradeGuardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  )
}
