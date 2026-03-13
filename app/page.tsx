"use client"

import { Navigation } from "@/components/navigation"
import { HeroMockup } from "@/components/hero-mockup"
import { ProductsSection } from "@/components/products-section"
import { ROICalculator } from "@/components/roi-calculator"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export default function LiquidmindLanding() {
  return (
    <main className="min-h-screen bg-white">
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
   INTERSECTION OBSERVER HOOK
======================== */
function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold])

  return { ref, isInView }
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
        background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 50%, #EFF6FF 100%)",
      }}
    >
      {/* Subtle decorative elements */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(0,102,204,0.1) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(0,168,107,0.15) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1280px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Column */}
          <div className="lg:pr-8">
            {/* Eyebrow */}
            <div
              className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold tracking-[0.12em] uppercase mb-4 animate-fade-in-up"
              style={{
                background: "rgba(0,102,204,0.1)",
                border: "1px solid rgba(0,102,204,0.25)",
                color: "#0066CC",
              }}
            >
              {"INDIA'S #1 AI TRADE COMPLIANCE PLATFORM"}
            </div>

            {/* H1 */}
            <h1
              className="text-[38px] lg:text-[72px] font-extrabold leading-[1.1] tracking-[-0.03em] mb-6 animate-fade-in-up stagger-1"
              style={{ color: "#0F172A" }}
            >
              Stop Losing
              <br />
              <span className="bg-gradient-to-r from-[#0066CC] to-[#00A86B] bg-clip-text text-transparent">Crores</span> to Trade
              <br />
              Document Errors.
            </h1>

            {/* Subheadline */}
            <p
              className="text-[17px] lg:text-[20px] leading-[1.6] max-w-[520px] mb-6 animate-fade-in-up stagger-2"
              style={{ color: "#475569" }}
            >
              Indian exporters lose 3-7% of FOB value every month to document mismatches between
              Shipping Bills and Invoices. Liquidmind AI catches every error before customs does.
            </p>

            {/* Stat pills */}
            <div className="flex flex-wrap gap-2 mb-8 animate-fade-in-up stagger-3">
              {statPills.map((stat, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-full text-[12px] font-medium transition-all duration-300 hover:scale-105"
                  style={{
                    background: "rgba(220,38,38,0.08)",
                    border: "1px solid rgba(220,38,38,0.2)",
                    color: "#DC2626",
                  }}
                >
                  {stat}
                </span>
              ))}
            </div>

            {/* CTA Row */}
            <div className="flex flex-wrap gap-4 mb-10 animate-fade-in-up stagger-4">
              <a
                href="#demo"
                className="px-7 py-3.5 rounded-[10px] text-base font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl btn-shine"
                style={{
                  background: "linear-gradient(90deg, #0066CC, #00A86B)",
                  color: "#FFFFFF",
                  boxShadow: "0 4px 25px rgba(0,102,204,0.35)",
                }}
              >
                Book Free Demo
              </a>
              <button
                className="px-7 py-3.5 rounded-[10px] text-base font-semibold transition-all duration-300 hover:border-[#0066CC] hover:text-[#0066CC] hover:bg-[#EFF6FF]"
                style={{
                  background: "transparent",
                  border: "1.5px solid #CBD5E1",
                  color: "#0F172A",
                }}
              >
                Watch 2-Min Demo
              </button>
            </div>

          </div>

          {/* Right Column */}
          <div className="lg:pl-4 animate-slide-in-right">
            <HeroMockup animated={true} />
          </div>
        </div>
      </div>
      
      {/* Full-width Partner logos strip */}
      <div 
        className="w-full mt-12 lg:mt-16 py-6 lg:py-8 animate-fade-in-up stagger-5"
        style={{ 
          background: "#0F172A",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          borderBottom: "1px solid rgba(255,255,255,0.1)"
        }}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8">
            <span className="text-[13px] font-semibold uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.6)" }}>
              Backed by:
            </span>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kIHJ4Istxh4YAnVoqXoE4QT6aYLPqW.png"
              alt="Backed by NVIDIA Inception, AWS, Microsoft for Startups Founders Hub"
              width={900}
              height={120}
              className="h-16 lg:h-24 w-auto max-w-full object-contain"
            />
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
      style={{ background: "#0066CC", borderTop: "1px solid rgba(255,255,255,0.1)", borderBottom: "1px solid rgba(255,255,255,0.1)" }}
    >
      <div className="max-w-[1280px] mx-auto w-full px-6 lg:px-20">
        <div className="flex items-center justify-between gap-8 lg:gap-0 min-w-max lg:min-w-0">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex items-center">
              <div className="text-center px-4 lg:px-8">
                <div className="text-white font-mono text-2xl lg:text-[32px] font-semibold">{stat.number}</div>
                <div className="text-white/70 text-[11px] lg:text-[12px] font-medium mt-1">{stat.label}</div>
              </div>
              {idx < stats.length - 1 && (
                <div className="w-px h-12 hidden lg:block" style={{ background: "rgba(255,255,255,0.2)" }} />
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
  const { ref, isInView } = useInView()
  
  const problems = [
    {
      number: "50%",
      numberColor: "#DC2626",
      borderColor: "#DC2626",
      title: "Mismatches in Trade Data",
      body: "Every second export-import document has errors that trigger customs delays, penalty orders, or blocked IGST refunds. Most exporters don't find out until it's too late.",
      citation: "— ADB Report",
      featured: false,
    },
    {
      number: "30%",
      numberColor: "#0066CC",
      borderColor: "#0066CC",
      title: "Documents Contain Critical Errors",
      body: "One digit wrong in an HSN code. One wrong port abbreviation. Your drawback claim for the entire shipment is rejected. You find out 8–12 months later.",
      citation: "— World Bank Logistics Performance Index",
      featured: true,
    },
    {
      number: "3-7%",
      numberColor: "#F59E0B",
      borderColor: "#F59E0B",
      title: "Of FOB Value Lost Per Shipment",
      body: "Drawback, IGST refunds, RODTEP scrips. The money is owed to you. It doesn't come back because a field on your Shipping Bill didn't match your Invoice.",
      citation: "— CBIC Drawback Rejection Analysis",
      featured: false,
    },
  ]

  return (
    <section ref={ref} className="py-20 lg:py-30 px-6 lg:px-20" style={{ background: "#FFFFFF" }}>
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className={`text-center mb-12 lg:mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div
            className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold tracking-[0.12em] uppercase mb-6"
            style={{
              background: "rgba(220,38,38,0.08)",
              border: "1px solid rgba(220,38,38,0.2)",
              color: "#DC2626",
            }}
          >
            THE COST OF DOING NOTHING
          </div>
          <h2 className="text-[32px] lg:text-[52px] font-bold leading-tight mb-6" style={{ color: "#0F172A" }}>
            Your Trade Documents Are
            <br className="hidden lg:block" /> <span className="text-[#DC2626]">Bleeding Money</span> Right Now.
          </h2>
          <p className="text-base lg:text-lg max-w-[640px] mx-auto leading-relaxed" style={{ color: "#475569" }}>
            {"Not dramatically. Quietly. Every mismatch, every wrong HSN code, every port code typo — it doesn't announce itself. The refund just doesn't arrive."}
          </p>
        </div>

        {/* Problem cards */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {problems.map((problem, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 lg:p-8 transition-all duration-500 card-hover ${problem.featured ? "lg:scale-105" : ""} ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{
                background: problem.featured ? "#F8FAFC" : "#FFFFFF",
                border: problem.featured ? "2px solid #0066CC" : "1px solid #E2E8F0",
                borderTop: `4px solid ${problem.borderColor}`,
                boxShadow: problem.featured ? "0 8px 40px rgba(0,102,204,0.15)" : "0 4px 20px rgba(0,0,0,0.05)",
                transitionDelay: `${idx * 100}ms`
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
              <h3 className="text-xl lg:text-2xl font-bold mb-4" style={{ color: "#0F172A" }}>{problem.title}</h3>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: "#475569" }}>{problem.body}</p>
              <p className="text-[12px] italic" style={{ color: "#94A3B8" }}>{problem.citation}</p>
            </div>
          ))}
        </div>

        {/* Quote and CTA */}
        <div className={`text-center transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-xl lg:text-2xl italic mb-8" style={{ color: "#0F172A" }}>
            {"\"This isn't a technology problem. It's a money problem with a technology solution.\""}
          </p>
          <a
            href="#products"
            className="inline-block px-8 py-4 rounded-[10px] text-base font-bold transition-all duration-300 hover:scale-105 btn-shine"
            style={{
              background: "linear-gradient(90deg, #0066CC, #00A86B)",
              color: "#FFFFFF",
              boxShadow: "0 4px 25px rgba(0,102,204,0.35)",
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
  const { ref, isInView } = useInView()
  
  const steps = [
    { number: 1, title: "Upload Documents", description: "Drag & drop your PDF documents" },
    { number: 2, title: "AI Extraction", description: "Our AI reads and extracts key fields" },
    { number: 3, title: "Smart Mapping", description: "Intelligent field matching across documents" },
    { number: 4, title: "Multi-Layer Verification", description: "Cross-checks every answer against source" },
    { number: 5, title: "Report Ready", description: "Excel + PDF in under 5 minutes" },
  ]

  return (
    <section ref={ref} className="py-20 lg:py-30 px-6 lg:px-20" style={{ background: "#F8FAFC" }}>
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className={`text-center mb-12 lg:mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div
            className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold tracking-[0.12em] uppercase mb-6"
            style={{
              background: "rgba(0,102,204,0.1)",
              border: "1px solid rgba(0,102,204,0.25)",
              color: "#0066CC",
            }}
          >
            THE PROCESS
          </div>
          <h2 className="text-[32px] lg:text-[52px] font-bold leading-tight" style={{ color: "#0F172A" }}>
            From Document Upload to
            <br className="hidden lg:block" /> Compliance Report in <span className="text-[#0066CC]">5 Minutes</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div
            className="hidden lg:block absolute top-6 left-[10%] right-[10%] h-0.5"
            style={{
              background: "linear-gradient(90deg, #0066CC, #00A86B)",
              opacity: 0.3
            }}
          />

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
            {steps.map((step, idx) => (
              <div 
                key={step.number} 
                className={`text-center transition-all duration-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {/* Number circle */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:scale-110 animate-pulse-glow"
                  style={{
                    background: "linear-gradient(135deg, #0066CC, #00A86B)",
                  }}
                >
                  <span className="text-white font-mono text-lg font-bold">{step.number}</span>
                </div>
                <h3 className="font-bold text-base mb-2" style={{ color: "#0F172A" }}>{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#64748B" }}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Proof boxes */}
        <div className="grid lg:grid-cols-2 gap-6 mt-16">
          <div
            className={`p-8 rounded-2xl transition-all duration-500 card-hover ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
            style={{
              background: "#FFFFFF",
              border: "2px solid #0066CC",
              boxShadow: "0 8px 40px rgba(0,102,204,0.12)",
            }}
          >
            <div className="text-4xl font-bold mb-3 bg-gradient-to-r from-[#0066CC] to-[#00A86B] bg-clip-text text-transparent">99.9% Accuracy</div>
            <p className="text-base leading-relaxed" style={{ color: "#475569" }}>
              Our multi-layer verification means every answer is cross-checked against the source pixel. Not just
              extracted — confirmed.
            </p>
          </div>
          <div
            className={`p-8 rounded-2xl transition-all duration-500 delay-100 card-hover ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
            style={{
              background: "#FFFFFF",
              border: "2px solid #00A86B",
              boxShadow: "0 8px 40px rgba(0,168,107,0.12)",
            }}
          >
            <div className="text-4xl font-bold mb-3 bg-gradient-to-r from-[#00A86B] to-[#0066CC] bg-clip-text text-transparent">{"< 5 Minutes"}</div>
            <p className="text-base leading-relaxed" style={{ color: "#475569" }}>
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
  const { ref, isInView } = useInView()
  
  const awards = [
    {
      date: "FEBRUARY 2026",
      title: "Aegis Graham Bell Award",
      subtitle: "16th AGBA Innovation in Gen AI - CX, Sales & GTM Intelligence Category Winner",
      quote: "Recognised for transforming international trade through Generative AI",
      image: "/images/aegis-award.jpg",
    },
    {
      date: "NOVEMBER 2025",
      title: "Karnataka Elevate 2025 — Winner",
      subtitle: "Selected from 1,474+ applicants across all sectors",
      quote: "Non-dilutive grant awarded for innovation in trade compliance",
      image: "/images/elevate-award.jpg",
    },
  ]

  return (
    <section ref={ref} className="py-16 lg:py-24 px-6 lg:px-20" style={{ background: "#FFFFFF" }}>
      <div className="max-w-[1280px] mx-auto">
        <h2 className={`text-3xl lg:text-[52px] font-bold text-center mb-12 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ color: "#0F172A" }}>
          Recognised. <span className="text-[#0066CC]">Validated.</span> Trusted.
        </h2>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {awards.map((award, idx) => (
            <div
              key={idx}
              className={`rounded-2xl overflow-hidden transition-all duration-500 card-hover ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{
                background: "#FFFFFF",
                border: "1px solid #E2E8F0",
                boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
                transitionDelay: `${idx * 150}ms`
              }}
            >
              {/* Award Image */}
              <div className="relative h-[280px] lg:h-[320px] overflow-hidden">
                <Image
                  src={award.image}
                  alt={award.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div
                    className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold tracking-[0.12em] uppercase mb-2"
                    style={{
                      background: "rgba(245,158,11,0.9)",
                      color: "#FFFFFF",
                    }}
                  >
                    {award.date}
                  </div>
                  <h3 className="text-white text-xl lg:text-2xl font-bold">{award.title}</h3>
                </div>
              </div>
              
              {/* Award Content */}
              <div className="p-6">
                <p className="text-[15px] font-medium mb-3" style={{ color: "#0F172A" }}>{award.subtitle}</p>
                <p className="text-sm italic" style={{ color: "#64748B" }}>{`"${award.quote}"`}</p>
              </div>
            </div>
          ))}
        </div>
        
        </div>
      
      {/* Full-width Partner logos strip */}
      <div 
        className={`w-full py-8 lg:py-10 transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        style={{ 
          background: "#0F172A",
        }}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8">
            <span className="text-[14px] font-semibold uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.6)" }}>
              Backed by:
            </span>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kIHJ4Istxh4YAnVoqXoE4QT6aYLPqW.png"
              alt="Backed by NVIDIA Inception, AWS, Microsoft for Startups Founders Hub"
              width={1000}
              height={140}
              className="h-20 lg:h-28 w-auto max-w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ========================
   MICRO CONVERSION SECTION
======================== */
function MicroConversionSection() {
  const { ref, isInView } = useInView()
  
  const cards = [
    {
      icon: "📄",
      badge: "FREE — NO EMAIL",
      badgeColor: "#0066CC",
      title: "Watch Tradeguard in Action",
      body: "A real document audit, live on screen. No slides. No fluff. Just the AI working.",
      cta: "Watch Now",
      featured: false,
    },
    {
      icon: "📊",
      badge: "FREE — INSTANT",
      badgeColor: "#0066CC",
      title: "Calculate Your Exact Annual Exposure",
      body: "Enter your shipment volume. Get your personal rupee risk number immediately.",
      cta: "Use the Calculator",
      featured: false,
    },
    {
      icon: "📘",
      badge: "FREE RESOURCE",
      badgeColor: "#00A86B",
      title: "Download Our Trade Compliance Guide",
      body: "Everything you need to know about avoiding document mismatches and maximizing your refunds.",
      cta: "Download Guide",
      featured: false,
    },
    {
      icon: "📅",
      badge: "30 MINUTES",
      badgeColor: "#F59E0B",
      title: "Talk to a Trade Compliance Specialist",
      body: "We'll calculate your exact exposure and show you what Liquidmind finds on your real documents.",
      cta: "Book a Demo Call",
      featured: true,
    },
  ]

  return (
    <section ref={ref} className="py-20 lg:py-30 px-6 lg:px-20" style={{ background: "#F8FAFC" }}>
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div
            className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold tracking-[0.12em] uppercase mb-6"
            style={{
              background: "rgba(0,102,204,0.1)",
              border: "1px solid rgba(0,102,204,0.25)",
              color: "#0066CC",
            }}
          >
            START WHERE YOU ARE
          </div>
          <h2 className="text-3xl lg:text-[52px] font-bold leading-tight mb-4" style={{ color: "#0F172A" }}>
            Not Ready for a Full Demo? <span className="text-[#0066CC]">Start Here.</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#475569" }}>
            Choose your starting point. Every path leads to the same result: knowing exactly how much money your
            documents are at risk of losing.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={`p-6 lg:p-8 rounded-2xl transition-all duration-500 card-hover ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{
                background: "#FFFFFF",
                border: card.featured ? "2px solid #0066CC" : "1px solid #E2E8F0",
                boxShadow: card.featured ? "0 8px 40px rgba(0,102,204,0.15)" : "0 4px 20px rgba(0,0,0,0.05)",
                transitionDelay: `${idx * 100}ms`
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
              <h3 className="text-lg lg:text-[22px] font-bold mb-3" style={{ color: "#0F172A" }}>{card.title}</h3>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: "#475569" }}>{card.body}</p>
              {card.featured ? (
                <a
                  href="#demo"
                  className="inline-block px-6 py-3 rounded-[10px] text-sm font-bold transition-all duration-300 hover:scale-105 btn-shine"
                  style={{
                    background: "linear-gradient(90deg, #0066CC, #00A86B)",
                    color: "#FFFFFF",
                  }}
                >
                  {card.cta}
                </a>
              ) : (
                <a href="#" className="text-sm font-semibold hover:underline transition-colors" style={{ color: "#0066CC" }}>
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
  const { ref, isInView } = useInView()
  
  return (
    <section
      ref={ref}
      id="demo"
      className="py-20 lg:py-24 px-6 lg:px-20 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0066CC 0%, #00A86B 100%)" }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
      </div>
      
      <div className={`max-w-[900px] mx-auto text-center relative z-10 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-[32px] lg:text-[52px] font-bold leading-tight mb-6 text-white">
          Every Shipment Without Liquidmind Is Money You Might Not Recover.
        </h2>
        <p className="text-lg lg:text-xl mb-8 text-white/80">
          {
            "Book a 30-minute call. We'll calculate your exact exposure and show you what our AI finds on your real documents. No slides. Just your numbers."
          }
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#book"
            className="px-8 py-4 rounded-[10px] text-base font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{ background: "#FFFFFF", color: "#0066CC" }}
          >
            Book Your Free Demo
          </a>
          <button
            className="px-8 py-4 rounded-[10px] text-base font-semibold transition-all duration-300 hover:bg-white/10"
            style={{ background: "transparent", border: "2px solid #FFFFFF", color: "#FFFFFF" }}
          >
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  )
}
