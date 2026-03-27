import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { PHProvider } from './providers'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans'
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  weight: ['400', '600'],
  variable: '--font-mono'
})

export const metadata: Metadata = {
  title: 'Liquidmind AI — India\'s #1 AI Trade Compliance Platform',
  description: 'Stop losing crores to trade document errors. Liquidmind AI catches every mismatch between Shipping Bills and Invoices before customs does. Tradeguard, Patram AI, TariffIQ.',
  keywords: 'trade compliance, AI document verification, shipping bill, customs, drawback, IGST refund, HSN code, export compliance, India trade',
  authors: [{ name: 'Liquidmind AI' }],
  openGraph: {
    title: 'Liquidmind AI — Stop Losing Crores to Trade Document Errors',
    description: 'India\'s #1 AI Trade Compliance Platform. Tradeguard catches every document mismatch before customs does.',
    type: 'website',
    url: 'https://liquidmind.ai',
  },
  alternates: { canonical: 'https://liquidmind.ai' },
}

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Liquidmind AI",
  url: "https://liquidmind.ai",
  logo: "https://liquidmind.ai/images/liquidmind-logo.png",
  sameAs: [
    "https://www.linkedin.com/company/liquid-mind-product-consulting-inc./",
    "https://www.youtube.com/@LIQUIDMIND_AI",
  ],
  contactPoint: { "@type": "ContactPoint", email: "support@liquidmind.ai", contactType: "customer support" },
  description: "India's #1 AI Trade Compliance Platform — Patram AI, TariffIQ and TradeGuard for Indian exporters.",
}

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      </head>
      <body className={`${plusJakarta.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <PHProvider>
          {children}
        </PHProvider>
        <Analytics />
      </body>
    </html>
  )
}
