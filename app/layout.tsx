import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
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
  },
}

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakarta.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
