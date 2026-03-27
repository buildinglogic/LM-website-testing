import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Karnataka Elevate 2025 — Liquidmind AI Selected Top 100 Startup",
  description: "Liquidmind AI selected among Karnataka's top 100 startups in the Elevate 2025 programme — the state's flagship startup accelerator.",
  keywords: "Karnataka Elevate 2025, top 100 startups Karnataka, Liquidmind AI startup award, Elevate programme India",
  openGraph: {
    title: "Liquidmind AI — Karnataka Elevate 2025 Top 100 Startup",
    description: "Selected among the top 100 startups in Karnataka's flagship Elevate 2025 accelerator programme.",
    type: "website",
    url: "https://liquidmind.ai/awards/karnataka-elevate",
  },
  alternates: { canonical: "https://liquidmind.ai/awards/karnataka-elevate" },
}

export default function ElevateLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
