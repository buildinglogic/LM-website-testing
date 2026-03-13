import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import Image from "next/image"

export const metadata = {
  title: "About Us | Liquidmind AI",
  description: "Learn about Liquidmind AI - India's #1 AI Trade Compliance Platform",
}

export default function CompanyPage() {
  return (
    <main className="min-h-screen" style={{ background: "#050A14" }}>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-[160px] lg:pt-[180px] pb-16 lg:pb-24 px-6 lg:px-20">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <div
              className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold tracking-[0.12em] uppercase mb-6"
              style={{
                background: "rgba(0,229,180,0.1)",
                border: "1px solid rgba(0,229,180,0.25)",
                color: "#00E5B4",
              }}
            >
              ABOUT US
            </div>
            <h1 className="text-[38px] lg:text-[64px] font-extrabold text-white leading-tight mb-6">
              Building the Future of
              <br />
              <span style={{ color: "#00E5B4" }}>Trade Compliance</span>
            </h1>
            <p className="text-[#94A3B8] text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
              We're on a mission to eliminate document errors that cost Indian exporters crores every year. 
              Using cutting-edge AI, we're transforming how businesses handle trade compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-16 lg:py-24 px-6 lg:px-20" style={{ background: "#0D1526" }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div
                className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold tracking-[0.12em] uppercase mb-6"
                style={{
                  background: "rgba(0,229,180,0.1)",
                  border: "1px solid rgba(0,229,180,0.25)",
                  color: "#00E5B4",
                }}
              >
                OUR MISSION
              </div>
              <h2 className="text-3xl lg:text-[44px] font-bold text-white leading-tight mb-6">
                Recover Every Rupee Lost to Document Mismatches
              </h2>
              <p className="text-[#94A3B8] text-base leading-relaxed mb-6">
                Indian exporters lose 3-7% of their FOB value every month to document mismatches between 
                Shipping Bills and Invoices. These aren't obvious errors — they're subtle discrepancies 
                that slip through manual checks and only surface 8-12 months later when refund claims get rejected.
              </p>
              <p className="text-[#94A3B8] text-base leading-relaxed">
                We built Liquidmind to catch every single one of these errors before they cost you money. 
                Our AI doesn't just extract data — it understands context, maps fields semantically, 
                and verifies every answer against the source document.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl" style={{ background: "#121E33", border: "1px solid #1E3557" }}>
                <div className="text-[#00E5B4] text-4xl font-mono font-bold mb-2">99.9%</div>
                <p className="text-white text-sm font-medium">Accuracy Rate</p>
              </div>
              <div className="p-6 rounded-2xl" style={{ background: "#121E33", border: "1px solid #1E3557" }}>
                <div className="text-[#00E5B4] text-4xl font-mono font-bold mb-2">5min</div>
                <p className="text-white text-sm font-medium">Average Processing</p>
              </div>
              <div className="p-6 rounded-2xl" style={{ background: "#121E33", border: "1px solid #1E3557" }}>
                <div className="text-[#00E5B4] text-4xl font-mono font-bold mb-2">40+</div>
                <p className="text-white text-sm font-medium">Fields Extracted</p>
              </div>
              <div className="p-6 rounded-2xl" style={{ background: "#121E33", border: "1px solid #1E3557" }}>
                <div className="text-[#00E5B4] text-4xl font-mono font-bold mb-2">Cr+</div>
                <p className="text-white text-sm font-medium">Money Protected</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 px-6 lg:px-20" style={{ background: "#050A14" }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-[44px] font-bold text-white mb-4">Our Values</h2>
            <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
              The principles that guide everything we build
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Accuracy First",
                description: "We don't guess. Every answer is pixel-verified against the source document. Zero hallucinations, zero assumptions.",
                color: "#00E5B4",
              },
              {
                title: "Speed Matters",
                description: "Time is money in trade. What takes hours manually should take minutes with AI. That's the standard we hold ourselves to.",
                color: "#4DA6FF",
              },
              {
                title: "Real Impact",
                description: "We measure success in rupees recovered, not features shipped. If it doesn't save our customers money, it doesn't matter.",
                color: "#F4B942",
              },
            ].map((value, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl"
                style={{ 
                  background: "#121E33", 
                  border: "1px solid #1E3557",
                  borderTop: `4px solid ${value.color}`,
                }}
              >
                <h3 className="text-white text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-[#94A3B8] text-[15px] leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="py-16 lg:py-24 px-6 lg:px-20" style={{ background: "#0D1526" }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-[44px] font-bold text-white mb-4">Recognition & Awards</h2>
            <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
              Validated by industry experts and government programs
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            <div
              className="p-8 rounded-2xl"
              style={{
                background: "#121E33",
                border: "1.5px solid #00E5B4",
                borderTop: "4px solid #F4B942",
              }}
            >
              <div
                className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold tracking-[0.12em] uppercase mb-4"
                style={{
                  background: "rgba(244,185,66,0.1)",
                  border: "1px solid rgba(244,185,66,0.25)",
                  color: "#F4B942",
                }}
              >
                FEBRUARY 2026
              </div>
              <h3 className="text-white text-xl font-bold mb-2">Aegis Graham Bell Award</h3>
              <p className="text-[#94A3B8] text-base mb-4">Gen AI: CX Sales GTM Intelligence Category</p>
              <p className="text-[#94A3B8] text-sm italic">
                "Recognised for transforming international trade through Generative AI"
              </p>
            </div>
            <div
              className="p-8 rounded-2xl"
              style={{
                background: "#121E33",
                border: "1.5px solid #00E5B4",
                borderTop: "4px solid #F4B942",
              }}
            >
              <div
                className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold tracking-[0.12em] uppercase mb-4"
                style={{
                  background: "rgba(244,185,66,0.1)",
                  border: "1px solid rgba(244,185,66,0.25)",
                  color: "#F4B942",
                }}
              >
                NOVEMBER 2025
              </div>
              <h3 className="text-white text-xl font-bold mb-2">Karnataka Elevate 2025 — Winner</h3>
              <p className="text-[#94A3B8] text-base mb-4">Selected from 1,474+ applicants across all sectors</p>
              <p className="text-[#94A3B8] text-sm italic">
                "Non-dilutive grant awarded for innovation in trade compliance"
              </p>
            </div>
          </div>
          
          {/* Partners */}
          <div className="mt-12 text-center">
            <p className="text-[#64748B] text-sm mb-6">Backed by leading technology partners</p>
            <div className="flex flex-wrap justify-center gap-4">
              {["NVIDIA Inception Program", "Powered by AWS", "Microsoft for Startups"].map((partner, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-lg text-sm font-medium"
                  style={{ background: "transparent", border: "1px solid #1E3557", color: "#64748B" }}
                >
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24 px-6 lg:px-20" style={{ background: "#050A14" }}>
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-3xl lg:text-[44px] font-bold text-white mb-6">Get in Touch</h2>
          <p className="text-[#94A3B8] text-lg mb-8">
            Have questions? Want to learn more about how we can help your business?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:support@liquidmind.ai"
              className="px-8 py-4 rounded-[10px] text-base font-bold transition-all hover:brightness-110"
              style={{
                background: "linear-gradient(90deg, #00E5B4, #00B8D9)",
                color: "#050A14",
              }}
            >
              Email Us
            </a>
            <a
              href="/#demo"
              className="px-8 py-4 rounded-[10px] text-base font-semibold transition-all hover:border-[#00E5B4] hover:text-[#00E5B4]"
              style={{ background: "transparent", border: "1.5px solid rgba(255,255,255,0.25)", color: "#FFFFFF" }}
            >
              Book a Demo
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
