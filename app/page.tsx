"use client"

import { Navigation } from "@/components/navigation"
import { HeroMockup } from "@/components/hero-mockup"
import { ProductsSection } from "@/components/products-section"
import { ROICalculator } from "@/components/roi-calculator"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import Image from "next/image"

export default function LiquidmindLanding() {
  return (
    <main className="min-h-screen" style={{ background: "#050A14" }}>
      <Navigation />
      <HeroSection />
      <StatsTicker />
      <ProblemSection />
      <ProductsSection />
      <HowItWorks />
      <ROICalculator />
      <AwardsSection />
      <MicroConversionSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}

/* ========================
   HERO SECTION
======================== */
function HeroSection() {
  const statPills = [
    "50% mismatch rate globally",
    "30% docs have critical errors",
    "3-7% FOB at risk per shipment",
  ]

  return (
    <section
      className="min-h-screen pt-[140px] lg:pt-[150px] pb-16 lg:pb-24 px-6 lg:px-20 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #050A14 0%, #0D1526 60%, #0A1F3D 100%)",
      }}
    >
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 70% 50%, rgba(0,229,180,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-[1280px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Column */}
          <div className="lg:pr-8">
            {/* Eyebrow */}
            <div
              className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold tracking-[0.12em] uppercase mb-4"
              style={{
                background: "rgba(0,229,180,0.1)",
                border: "1px solid rgba(0,229,180,0.25)",
                color: "#00E5B4",
              }}
            >
              {"INDIA'S #1 AI TRADE COMPLIANCE PLATFORM"}
            </div>

            {/* H1 */}
            <h1
              className="text-[38px] lg:text-[72px] font-extrabold leading-[1.1] tracking-[-0.03em] mb-6"
              style={{ color: "#FFFFFF" }}
            >
              Stop Losing
              <br />
              <span style={{ color: "#00E5B4" }}>Crores</span> to Trade
              <br />
              Document Errors.
            </h1>

            {/* Subheadline */}
            <p
              className="text-[17px] lg:text-[20px] leading-[1.6] max-w-[520px] mb-6"
              style={{ color: "#94A3B8" }}
            >
              Indian exporters lose 3-7% of FOB value every month to document mismatches between
              Shipping Bills and Invoices. Liquidmind AI catches every error before customs does.
            </p>

            {/* Stat pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {statPills.map((stat, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-full text-[12px] font-medium"
                  style={{
                    background: "rgba(255,68,68,0.1)",
                    border: "1px solid rgba(255,68,68,0.2)",
                    color: "#FF4444",
                  }}
                >
                  {stat}
                </span>
              ))}
            </div>

            {/* CTA Row */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#demo"
                className="px-7 py-3.5 rounded-[10px] text-base font-bold transition-all hover:brightness-110 hover:scale-[1.02]"
                style={{
                  background: "linear-gradient(90deg, #00E5B4, #00B8D9)",
                  color: "#050A14",
                  boxShadow: "0 0 30px rgba(0,229,180,0.25)",
                }}
              >
                Book Free Demo
              </a>
              <button
                className="px-7 py-3.5 rounded-[10px] text-base font-semibold transition-all hover:border-[#00E5B4] hover:text-[#00E5B4]"
                style={{
                  background: "transparent",
                  border: "1.5px solid rgba(255,255,255,0.25)",
                  color: "#FFFFFF",
                }}
              >
                Watch 2-Min Demo
              </button>
            </div>

            {/* Partner logos strip - Backed by */}
            <div className="flex flex-col gap-2">
              <span className="text-[13px]" style={{ color: "#64748B" }}>
                Backed by:
              </span>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kIHJ4Istxh4YAnVoqXoE4QT6aYLPqW.png"
                alt="Backed by NVIDIA Inception, AWS, Microsoft for Startups Founders Hub"
                width={600}
                height={80}
                className="h-14 lg:h-16 w-auto object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:pl-4">
            <HeroMockup animated={true} />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ========================
   STATS TICKER STRIP
======================== */
function StatsTicker() {
  const stats = [
    { number: "3-7%", label: "of FOB at risk per shipment" },
    { number: "50%", label: "mismatch rate globally" },
    { number: "30%", label: "docs with critical errors" },
    { number: "$1.5T", label: "lost to trade inefficiency" },
  ]

  return (
    <section
      className="w-full py-6 lg:py-0 lg:h-20 flex items-center overflow-x-auto lg:overflow-visible"
      style={{ background: "#0D1526", borderTop: "1px solid #1E3557", borderBottom: "1px solid #1E3557" }}
    >
      <div className="max-w-[1280px] mx-auto w-full px-6 lg:px-20">
        <div className="flex items-center justify-between gap-8 lg:gap-0 min-w-max lg:min-w-0">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex items-center">
              <div className="text-center px-4 lg:px-8">
                <div className="text-[#00E5B4] font-mono text-2xl lg:text-[32px] font-semibold">{stat.number}</div>
                <div className="text-[#64748B] text-[11px] lg:text-[12px] font-medium mt-1">{stat.label}</div>
              </div>
              {idx < stats.length - 1 && (
                <div className="w-px h-12 hidden lg:block" style={{ background: "#1E3557" }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ========================
   PROBLEM SECTION
======================== */
function ProblemSection() {
  const problems = [
    {
      number: "50%",
      numberColor: "#FF4444",
      borderColor: "#FF4444",
      title: "Mismatches in Trade Data",
      body: "Every second export-import document has errors that trigger customs delays, penalty orders, or blocked IGST refunds. Most exporters don't find out until it's too late.",
      citation: "— ADB Report",
      featured: false,
    },
    {
      number: "30%",
      numberColor: "#00E5B4",
      borderColor: "#00E5B4",
      title: "Documents Contain Critical Errors",
      body: "One digit wrong in an HSN code. One wrong port abbreviation. Your drawback claim for the entire shipment is rejected. You find out 8–12 months later.",
      citation: "— World Bank Logistics Performance Index",
      featured: true,
    },
    {
      number: "3-7%",
      numberColor: "#F4B942",
      borderColor: "#F4B942",
      title: "Of FOB Value Lost Per Shipment",
      body: "Drawback, IGST refunds, RODTEP scrips. The money is owed to you. It doesn't come back because a field on your Shipping Bill didn't match your Invoice.",
      citation: "— CBIC Drawback Rejection Analysis",
      featured: false,
    },
  ]

  return (
    <section className="py-20 lg:py-30 px-6 lg:px-20" style={{ background: "#050A14" }}>
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div
            className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold tracking-[0.12em] uppercase mb-6"
            style={{
              background: "rgba(0,229,180,0.1)",
              border: "1px solid rgba(0,229,180,0.25)",
              color: "#00E5B4",
            }}
          >
            THE COST OF DOING NOTHING
          </div>
          <h2 className="text-[32px] lg:text-[52px] font-bold text-white leading-tight mb-6">
            Your Trade Documents Are
            <br className="hidden lg:block" /> Bleeding Money Right Now.
          </h2>
          <p className="text-[#94A3B8] text-base lg:text-lg max-w-[640px] mx-auto leading-relaxed">
            {"Not dramatically. Quietly. Every mismatch, every wrong HSN code, every port code typo — it doesn't announce itself. The refund just doesn't arrive."}
          </p>
        </div>

        {/* Problem cards */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {problems.map((problem, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 lg:p-8 transition-all hover:-translate-y-0.5 ${problem.featured ? "lg:scale-105" : ""}`}
              style={{
                background: problem.featured ? "#121E33" : "#121E33",
                border: problem.featured ? "1.5px solid #00E5B4" : "1px solid #1E3557",
                borderTop: `4px solid ${problem.borderColor}`,
                boxShadow: problem.featured ? "0 0 40px rgba(0,229,180,0.12)" : "none",
              }}
            >
              <div
                className="font-mono font-semibold mb-4"
                style={{
                  fontSize: problem.number === "3-7%" ? "56px" : "64px",
                  lineHeight: 1,
                  color: problem.numberColor,
                }}
              >
                {problem.number}
              </div>
              <h3 className="text-white text-xl lg:text-2xl font-bold mb-4">{problem.title}</h3>
              <p className="text-[#94A3B8] text-[15px] leading-relaxed mb-4">{problem.body}</p>
              <p className="text-[#64748B] text-[12px] italic">{problem.citation}</p>
            </div>
          ))}
        </div>

        {/* Quote and CTA */}
        <div className="text-center">
          <p className="text-white text-xl lg:text-2xl italic mb-8">
            {"\"This isn't a technology problem. It's a money problem with a technology solution.\""}
          </p>
          <a
            href="#products"
            className="inline-block px-8 py-4 rounded-[10px] text-base font-bold transition-all hover:brightness-110 hover:scale-[1.02]"
            style={{
              background: "linear-gradient(90deg, #00E5B4, #00B8D9)",
              color: "#050A14",
              boxShadow: "0 0 30px rgba(0,229,180,0.25)",
            }}
          >
            See How Liquidmind Solves This
          </a>
        </div>
      </div>
    </section>
  )
}

/* ========================
   HOW IT WORKS
======================== */
function HowItWorks() {
  const steps = [
    { number: 1, title: "Upload Documents", description: "Drag & drop your PDF documents" },
    { number: 2, title: "AI Extraction", description: "Our AI reads and extracts key fields" },
    { number: 3, title: "Smart Mapping", description: "Intelligent field matching across documents" },
    { number: 4, title: "Multi-Layer Verification", description: "Cross-checks every answer against source" },
    { number: 5, title: "Report Ready", description: "Excel + PDF in under 5 minutes" },
  ]

  return (
    <section className="py-20 lg:py-30 px-6 lg:px-20" style={{ background: "#050A14" }}>
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div
            className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold tracking-[0.12em] uppercase mb-6"
            style={{
              background: "rgba(0,229,180,0.1)",
              border: "1px solid rgba(0,229,180,0.25)",
              color: "#00E5B4",
            }}
          >
            THE PROCESS
          </div>
          <h2 className="text-[32px] lg:text-[52px] font-bold text-white leading-tight">
            From Document Upload to
            <br className="hidden lg:block" /> Compliance Report in 5 Minutes
          </h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div
            className="hidden lg:block absolute top-6 left-[10%] right-[10%] h-0.5"
            style={{
              borderTop: "2px dashed #1E3557",
            }}
          />

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                {/* Number circle */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{
                    background: "rgba(0,229,180,0.15)",
                    border: "1.5px solid #00E5B4",
                  }}
                >
                  <span className="text-[#00E5B4] font-mono text-lg font-bold">{step.number}</span>
                </div>
                <h3 className="text-white font-bold text-base mb-2">{step.title}</h3>
                <p className="text-[#64748B] text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Proof boxes */}
        <div className="grid lg:grid-cols-2 gap-6 mt-16">
          <div
            className="p-8 rounded-2xl"
            style={{
              background: "#121E33",
              border: "1.5px solid #00E5B4",
              boxShadow: "0 0 40px rgba(0,229,180,0.12)",
            }}
          >
            <div className="text-[#00E5B4] text-4xl font-bold mb-3">99.9% Accuracy</div>
            <p className="text-[#94A3B8] text-base leading-relaxed">
              Our multi-layer verification means every answer is cross-checked against the source pixel. Not just
              extracted — confirmed.
            </p>
          </div>
          <div
            className="p-8 rounded-2xl"
            style={{
              background: "#121E33",
              border: "1.5px solid #00E5B4",
              boxShadow: "0 0 40px rgba(0,229,180,0.12)",
            }}
          >
            <div className="text-[#00E5B4] text-4xl font-bold mb-3">{"< 5 Minutes"}</div>
            <p className="text-[#94A3B8] text-base leading-relaxed">
              From document upload to full mismatch report. Not hours. Not days. Five minutes, every time.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ========================
   AWARDS SECTION
======================== */
function AwardsSection() {
  const awards = [
    {
      date: "FEBRUARY 2026",
      title: "Aegis Graham Bell Award",
      subtitle: "Gen AI: CX Sales GTM Intelligence Category",
      quote: "Recognised for transforming international trade through Generative AI",
      image: null,
    },
    {
      date: "NOVEMBER 2025",
      title: "Karnataka Elevate 2025 — Winner",
      subtitle: "Selected from 1,474+ applicants across all sectors",
      quote: "Non-dilutive grant awarded for innovation in trade compliance",
      image: null,
    },
  ]

  const partners = ["NVIDIA Inception Program", "Powered by AWS", "Microsoft for Startups"]

  return (
    <section className="py-16 lg:py-20 px-6 lg:px-20" style={{ background: "#050A14" }}>
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-3xl lg:text-[52px] font-bold text-white text-center mb-12">
          Recognised. Validated. Trusted.
        </h2>

        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {awards.map((award, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl"
              style={{
                background: "#121E33",
                border: "1.5px solid #00E5B4",
                borderTop: "4px solid #F4B942",
                boxShadow: "0 0 40px rgba(0,229,180,0.12)",
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
                {award.date}
              </div>
              <h3 className="text-white text-xl lg:text-[22px] font-bold mb-2">{award.title}</h3>
              <p className="text-[#94A3B8] text-base mb-4">{award.subtitle}</p>
              <p className="text-[#94A3B8] text-sm italic">{`"${award.quote}"`}</p>
            </div>
          ))}
        </div>
        
        {/* Partner logos with actual image */}
        <div className="flex justify-center mt-8">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kIHJ4Istxh4YAnVoqXoE4QT6aYLPqW.png"
            alt="Backed by NVIDIA Inception, AWS, Microsoft for Startups Founders Hub"
            width={800}
            height={100}
            className="h-16 lg:h-20 w-auto object-contain rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}

/* ========================
   MICRO CONVERSION SECTION
======================== */
function MicroConversionSection() {
  const cards = [
    {
      icon: "📄",
      badge: "FREE — NO EMAIL",
      badgeColor: "#00E5B4",
      title: "Watch Tradeguard in Action",
      body: "A real document audit, live on screen. No slides. No fluff. Just the AI working.",
      cta: "Watch Now",
      featured: false,
    },
    {
      icon: "📊",
      badge: "FREE — INSTANT",
      badgeColor: "#00E5B4",
      title: "Calculate Your Exact Annual Exposure",
      body: "Enter your shipment volume. Get your personal rupee risk number immediately.",
      cta: "Use the Calculator",
      featured: false,
    },
    {
      icon: "📘",
      badge: "FREE RESOURCE",
      badgeColor: "#00E5B4",
      title: "Download Our Trade Compliance Guide",
      body: "Everything you need to know about avoiding document mismatches and maximizing your refunds.",
      cta: "Download Guide",
      featured: false,
    },
    {
      icon: "📅",
      badge: "30 MINUTES",
      badgeColor: "#F4B942",
      title: "Talk to a Trade Compliance Specialist",
      body: "We'll calculate your exact exposure and show you what Liquidmind finds on your real documents.",
      cta: "Book a Demo Call",
      featured: true,
    },
  ]

  return (
    <section className="py-20 lg:py-30 px-6 lg:px-20" style={{ background: "#0D1526" }}>
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold tracking-[0.12em] uppercase mb-6"
            style={{
              background: "rgba(0,229,180,0.1)",
              border: "1px solid rgba(0,229,180,0.25)",
              color: "#00E5B4",
            }}
          >
            START WHERE YOU ARE
          </div>
          <h2 className="text-3xl lg:text-[52px] font-bold text-white leading-tight mb-4">
            Not Ready for a Full Demo? Start Here.
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
            Choose your starting point. Every path leads to the same result: knowing exactly how much money your
            documents are at risk of losing.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="p-6 lg:p-8 rounded-2xl transition-all hover:-translate-y-0.5"
              style={{
                background: "#121E33",
                border: card.featured ? "1.5px solid #00E5B4" : "1px solid #1E3557",
                boxShadow: card.featured ? "0 0 40px rgba(0,229,180,0.12)" : "none",
              }}
            >
              <div className="text-5xl mb-4">{card.icon}</div>
              <div
                className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold tracking-[0.1em] uppercase mb-4"
                style={{
                  background: `${card.badgeColor}15`,
                  border: `1px solid ${card.badgeColor}40`,
                  color: card.badgeColor,
                }}
              >
                {card.badge}
              </div>
              <h3 className="text-white text-lg lg:text-[22px] font-bold mb-3">{card.title}</h3>
              <p className="text-[#94A3B8] text-[15px] leading-relaxed mb-4">{card.body}</p>
              {card.featured ? (
                <a
                  href="#demo"
                  className="inline-block px-6 py-3 rounded-[10px] text-sm font-bold transition-all hover:brightness-110"
                  style={{
                    background: "linear-gradient(90deg, #00E5B4, #00B8D9)",
                    color: "#050A14",
                  }}
                >
                  {card.cta}
                </a>
              ) : (
                <a href="#" className="text-[#00E5B4] font-semibold text-sm hover:underline">
                  {card.cta}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ========================
   FINAL CTA SECTION
======================== */
function FinalCTASection() {
  return (
    <section
      id="demo"
      className="py-20 lg:py-24 px-6 lg:px-20"
      style={{ background: "linear-gradient(135deg, #00E5B4 0%, #0891B2 100%)" }}
    >
      <div className="max-w-[900px] mx-auto text-center">
        <h2 className="text-[32px] lg:text-[52px] font-bold leading-tight mb-6" style={{ color: "#050A14" }}>
          Every Shipment Without Liquidmind Is Money You Might Not Recover.
        </h2>
        <p className="text-lg lg:text-xl mb-8" style={{ color: "rgba(5,10,20,0.7)" }}>
          {
            "Book a 30-minute call. We'll calculate your exact exposure and show you what our AI finds on your real documents. No slides. Just your numbers."
          }
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#book"
            className="px-8 py-4 rounded-[10px] text-base font-bold transition-all hover:brightness-95"
            style={{ background: "#050A14", color: "#FFFFFF" }}
          >
            Book Your Free Demo
          </a>
          <button
            className="px-8 py-4 rounded-[10px] text-base font-semibold transition-all hover:bg-[rgba(5,10,20,0.1)]"
            style={{ background: "transparent", border: "2px solid #050A14", color: "#050A14" }}
          >
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  )
}
