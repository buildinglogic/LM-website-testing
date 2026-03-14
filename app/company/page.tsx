import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FooterLinks } from "@/components/footer-links"
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
      <section className="pt-[140px] lg:pt-[160px] pb-12 lg:pb-16 px-4 lg:px-6" style={{ background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 50%, #EFF6FF 100%)" }}>
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold tracking-[0.12em] uppercase mb-4"
            style={{ background: "rgba(0,102,204,0.1)", border: "1px solid rgba(0,102,204,0.25)", color: "#0066CC" }}>
            ABOUT US
          </div>
          <h1 className="text-[32px] lg:text-[52px] font-extrabold leading-tight mb-4" style={{ color: "#0F172A" }}>
            Building the Future of<br />
            <span className="bg-gradient-to-r from-[#0066CC] to-[#00A86B] bg-clip-text text-transparent">Trade Compliance</span>
          </h1>
          <p className="text-base lg:text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: "#475569" }}>
            We're on a mission to eliminate document errors that cost Indian exporters crores every year.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-12 lg:py-16 px-4 lg:px-6" style={{ background: "#FFFFFF" }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-square max-w-[400px] mx-auto lg:mx-0">
              <Image
                src="/images/elevate-award.jpg"
                alt="Harmanpreet Singh - Founder & CEO"
                fill
                className="object-cover rounded-2xl"
              />
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl" style={{ background: "rgba(0,0,0,0.8)", backdropFilter: "blur(10px)" }}>
                <h3 className="text-white font-bold text-lg">Harmanpreet Singh</h3>
                <p className="text-white/70 text-sm">Founder & CEO</p>
              </div>
            </div>
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold tracking-[0.12em] uppercase mb-4"
                style={{ background: "rgba(0,102,204,0.1)", border: "1px solid rgba(0,102,204,0.25)", color: "#0066CC" }}>
                OUR FOUNDER
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold mb-4" style={{ color: "#0F172A" }}>
                A Vision Born from <span className="text-[#0066CC]">Real Pain</span>
              </h2>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: "#475569" }}>
                Harmanpreet Singh founded Liquidmind after witnessing firsthand how document mismatches were 
                costing Indian exporters billions in lost refunds annually. With a background in AI and 
                deep tech, he assembled a team to build the most accurate document verification system 
                for international trade.
              </p>
              <p className="text-[15px] leading-relaxed" style={{ color: "#475569" }}>
                Today, Liquidmind protects crores in annual refunds for exporters across India, with 
                recognition from the Karnataka government, NVIDIA, AWS, and Microsoft.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-12 lg:py-16 px-4 lg:px-6" style={{ background: "#F8FAFC" }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold tracking-[0.12em] uppercase mb-4"
                style={{ background: "rgba(0,102,204,0.1)", border: "1px solid rgba(0,102,204,0.25)", color: "#0066CC" }}>
                OUR MISSION
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold mb-4" style={{ color: "#0F172A" }}>
                Recover Every Rupee Lost to <span className="text-[#0066CC]">Document Mismatches</span>
              </h2>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: "#475569" }}>
                Indian exporters lose 3-7% of their FOB value every month to document mismatches between 
                Shipping Bills and Invoices. These aren't obvious errors — they're subtle discrepancies 
                that slip through manual checks and only surface 8-12 months later when refund claims get rejected.
              </p>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: "#475569" }}>
                We built Liquidmind to catch every single one of these errors before they cost you money. 
                Our AI doesn't just extract data — it understands context, maps fields semantically, 
                and verifies every answer against the source document.
              </p>
              <p className="text-[15px] leading-relaxed" style={{ color: "#475569" }}>
                The goal is simple: zero money lost to preventable document errors. Every exporter, 
                every shipment, every rupee protected.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { value: "99.9%", label: "Accuracy Rate" },
                { value: "5min", label: "Average Processing" },
                { value: "40+", label: "Fields Extracted" },
                { value: "Cr+", label: "Money Protected" },
              ].map((stat, idx) => (
                <div key={idx} className="p-5 rounded-xl card-hover" style={{ background: "#FFFFFF", border: "1px solid #E2E8F0" }}>
                  <div className="text-3xl font-mono font-bold mb-1 bg-gradient-to-r from-[#0066CC] to-[#00A86B] bg-clip-text text-transparent">{stat.value}</div>
                  <p className="text-sm font-medium" style={{ color: "#0F172A" }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 lg:py-16 px-4 lg:px-6" style={{ background: "#FFFFFF" }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold mb-3" style={{ color: "#0F172A" }}>Our Values</h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: "#475569" }}>The principles that guide everything we build</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: "Accuracy First", description: "We don't guess. Every answer is pixel-verified against the source document. Zero hallucinations, zero assumptions.", color: "#0066CC" },
              { title: "Speed Matters", description: "Time is money in trade. What takes hours manually should take minutes with AI. That's the standard we hold ourselves to.", color: "#00A86B" },
              { title: "Real Impact", description: "We measure success in rupees recovered, not features shipped. If it doesn't save our customers money, it doesn't matter.", color: "#F59E0B" },
            ].map((value, idx) => (
              <div key={idx} className="p-6 rounded-xl card-hover"
                style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", borderTop: `4px solid ${value.color}` }}>
                <h3 className="text-lg font-bold mb-3" style={{ color: "#0F172A" }}>{value.title}</h3>
                <p className="text-[14px] leading-relaxed" style={{ color: "#475569" }}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="py-12 lg:py-16 px-4 lg:px-6" style={{ background: "#F8FAFC" }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold mb-3" style={{ color: "#0F172A" }}>Recognition & <span className="text-[#0066CC]">Awards</span></h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden card-hover" style={{ background: "#FFFFFF", border: "1px solid #E2E8F0" }}>
              <div className="relative h-[220px] overflow-hidden">
                <Image src="/images/aegis-award.jpg" alt="Aegis Graham Bell Award" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase mb-1"
                    style={{ background: "rgba(255,215,0,0.9)", color: "#0F172A" }}>FEBRUARY 2026</div>
                  <h3 className="text-white text-lg font-bold">Aegis Graham Bell Award</h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-[14px] font-medium mb-1" style={{ color: "#0F172A" }}>Gen AI: CX Sales GTM Intelligence Category</p>
                <p className="text-[13px] italic" style={{ color: "#64748B" }}>"Recognised for transforming international trade through Generative AI"</p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden card-hover" style={{ background: "#FFFFFF", border: "1px solid #E2E8F0" }}>
              <div className="relative h-[220px] overflow-hidden">
                <Image src="/images/elevate-award.jpg" alt="Karnataka Elevate Award" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase mb-1"
                    style={{ background: "rgba(255,215,0,0.9)", color: "#0F172A" }}>NOVEMBER 2025</div>
                  <h3 className="text-white text-lg font-bold">Karnataka Elevate 2025 — Winner</h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-[14px] font-medium mb-1" style={{ color: "#0F172A" }}>Selected from 1,474+ applicants</p>
                <p className="text-[13px] italic" style={{ color: "#64748B" }}>"Non-dilutive grant awarded for innovation in trade compliance"</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-sm mb-4" style={{ color: "#64748B" }}>Backed by leading technology partners</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Image src="/images/nvidia-inception.png" alt="NVIDIA Inception" width={140} height={35} className="h-8 w-auto object-contain" />
              <Image src="/images/aws-powered.png" alt="Powered by AWS" width={80} height={35} className="h-8 w-auto object-contain" />
              <Image src="/images/microsoft-startups.png" alt="Microsoft for Startups" width={150} height={35} className="h-8 w-auto object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 lg:py-16 px-4 lg:px-6" style={{ background: "linear-gradient(135deg, #0066CC 0%, #00A86B 100%)" }}>
        <div className="max-w-[700px] mx-auto text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-base mb-6 text-white/80">Have questions? Want to learn more about how we can help your business?</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="mailto:support@liquidmind.ai" className="px-6 py-3 rounded-lg text-sm font-bold transition-all hover:scale-105" style={{ background: "#FFFFFF", color: "#0066CC" }}>Email Us</a>
            <a href="/#demo" className="px-6 py-3 rounded-lg text-sm font-semibold transition-all hover:bg-white/10" style={{ background: "transparent", border: "2px solid #FFFFFF", color: "#FFFFFF" }}>Book a Demo</a>
          </div>
        </div>
      </section>

      <FooterLinks />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
