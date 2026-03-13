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
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-[160px] lg:pt-[180px] pb-16 lg:pb-24 px-6 lg:px-20" style={{ background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 50%, #EFF6FF 100%)" }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <div
              className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold tracking-[0.12em] uppercase mb-6"
              style={{
                background: "rgba(0,102,204,0.1)",
                border: "1px solid rgba(0,102,204,0.25)",
                color: "#0066CC",
              }}
            >
              ABOUT US
            </div>
            <h1 className="text-[38px] lg:text-[64px] font-extrabold leading-tight mb-6" style={{ color: "#0F172A" }}>
              Building the Future of
              <br />
              <span className="bg-gradient-to-r from-[#0066CC] to-[#00A86B] bg-clip-text text-transparent">Trade Compliance</span>
            </h1>
            <p className="text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: "#475569" }}>
              We're on a mission to eliminate document errors that cost Indian exporters crores every year. 
              Using cutting-edge AI, we're transforming how businesses handle trade compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-16 lg:py-24 px-6 lg:px-20" style={{ background: "#FFFFFF" }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div
                className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold tracking-[0.12em] uppercase mb-6"
                style={{
                  background: "rgba(0,102,204,0.1)",
                  border: "1px solid rgba(0,102,204,0.25)",
                  color: "#0066CC",
                }}
              >
                OUR MISSION
              </div>
              <h2 className="text-3xl lg:text-[44px] font-bold leading-tight mb-6" style={{ color: "#0F172A" }}>
                Recover Every Rupee Lost to <span className="text-[#0066CC]">Document Mismatches</span>
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#475569" }}>
                Indian exporters lose 3-7% of their FOB value every month to document mismatches between 
                Shipping Bills and Invoices. These aren't obvious errors — they're subtle discrepancies 
                that slip through manual checks and only surface 8-12 months later when refund claims get rejected.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#475569" }}>
                We built Liquidmind to catch every single one of these errors before they cost you money. 
                Our AI doesn't just extract data — it understands context, maps fields semantically, 
                and verifies every answer against the source document.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "99.9%", label: "Accuracy Rate" },
                { value: "5min", label: "Average Processing" },
                { value: "40+", label: "Fields Extracted" },
                { value: "Cr+", label: "Money Protected" },
              ].map((stat, idx) => (
                <div key={idx} className="p-6 rounded-2xl card-hover" style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}>
                  <div className="text-4xl font-mono font-bold mb-2 bg-gradient-to-r from-[#0066CC] to-[#00A86B] bg-clip-text text-transparent">{stat.value}</div>
                  <p className="text-sm font-medium" style={{ color: "#0F172A" }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 px-6 lg:px-20" style={{ background: "#F8FAFC" }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-[44px] font-bold mb-4" style={{ color: "#0F172A" }}>Our Values</h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#475569" }}>
              The principles that guide everything we build
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Accuracy First",
                description: "We don't guess. Every answer is pixel-verified against the source document. Zero hallucinations, zero assumptions.",
                color: "#0066CC",
              },
              {
                title: "Speed Matters",
                description: "Time is money in trade. What takes hours manually should take minutes with AI. That's the standard we hold ourselves to.",
                color: "#00A86B",
              },
              {
                title: "Real Impact",
                description: "We measure success in rupees recovered, not features shipped. If it doesn't save our customers money, it doesn't matter.",
                color: "#F59E0B",
              },
            ].map((value, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl card-hover"
                style={{ 
                  background: "#FFFFFF", 
                  border: "1px solid #E2E8F0",
                  borderTop: `4px solid ${value.color}`,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.05)"
                }}
              >
                <h3 className="text-xl font-bold mb-4" style={{ color: "#0F172A" }}>{value.title}</h3>
                <p className="text-[15px] leading-relaxed" style={{ color: "#475569" }}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="py-16 lg:py-24 px-6 lg:px-20" style={{ background: "#FFFFFF" }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-[44px] font-bold mb-4" style={{ color: "#0F172A" }}>Recognition & <span className="text-[#0066CC]">Awards</span></h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#475569" }}>
              Validated by industry experts and government programs
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            <div
              className="rounded-2xl overflow-hidden card-hover"
              style={{
                background: "#FFFFFF",
                border: "1px solid #E2E8F0",
                boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
              }}
            >
              <div className="relative h-[280px] overflow-hidden">
                <Image
                  src="/images/aegis-award.jpg"
                  alt="Aegis Graham Bell Award"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div
                    className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold tracking-[0.12em] uppercase mb-2"
                    style={{ background: "rgba(245,158,11,0.9)", color: "#FFFFFF" }}
                  >
                    FEBRUARY 2026
                  </div>
                  <h3 className="text-white text-xl font-bold">Aegis Graham Bell Award</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-[15px] font-medium mb-2" style={{ color: "#0F172A" }}>Gen AI: CX Sales GTM Intelligence Category</p>
                <p className="text-sm italic" style={{ color: "#64748B" }}>
                  "Recognised for transforming international trade through Generative AI"
                </p>
              </div>
            </div>
            <div
              className="rounded-2xl overflow-hidden card-hover"
              style={{
                background: "#FFFFFF",
                border: "1px solid #E2E8F0",
                boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
              }}
            >
              <div className="relative h-[280px] overflow-hidden">
                <Image
                  src="/images/elevate-award.jpg"
                  alt="Karnataka Elevate Award"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div
                    className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold tracking-[0.12em] uppercase mb-2"
                    style={{ background: "rgba(245,158,11,0.9)", color: "#FFFFFF" }}
                  >
                    NOVEMBER 2025
                  </div>
                  <h3 className="text-white text-xl font-bold">Karnataka Elevate 2025 — Winner</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-[15px] font-medium mb-2" style={{ color: "#0F172A" }}>Selected from 1,474+ applicants across all sectors</p>
                <p className="text-sm italic" style={{ color: "#64748B" }}>
                  "Non-dilutive grant awarded for innovation in trade compliance"
                </p>
              </div>
            </div>
          </div>
          
          {/* Partners */}
          <div className="mt-12 text-center">
            <p className="text-sm mb-6" style={{ color: "#64748B" }}>Backed by leading technology partners</p>
            <div className="flex flex-wrap justify-center gap-4">
              {["NVIDIA Inception Program", "Powered by AWS", "Microsoft for Startups"].map((partner, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-[#F8FAFC]"
                  style={{ background: "transparent", border: "1px solid #E2E8F0", color: "#475569" }}
                >
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24 px-6 lg:px-20" style={{ background: "linear-gradient(135deg, #0066CC 0%, #00A86B 100%)" }}>
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-3xl lg:text-[44px] font-bold text-white mb-6">Get in Touch</h2>
          <p className="text-lg mb-8 text-white/80">
            Have questions? Want to learn more about how we can help your business?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:support@liquidmind.ai"
              className="px-8 py-4 rounded-[10px] text-base font-bold transition-all duration-300 hover:scale-105"
              style={{ background: "#FFFFFF", color: "#0066CC" }}
            >
              Email Us
            </a>
            <a
              href="/#demo"
              className="px-8 py-4 rounded-[10px] text-base font-semibold transition-all duration-300 hover:bg-white/10"
              style={{ background: "transparent", border: "2px solid #FFFFFF", color: "#FFFFFF" }}
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
