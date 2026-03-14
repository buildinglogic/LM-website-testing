"use client"

import { Navigation } from "@/components/navigation"
import { HeroMockup } from "@/components/hero-mockup"
import { ProductsSection } from "@/components/products-section"
import { ROICalculator } from "@/components/roi-calculator"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export default function LiquidmindLanding() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <ProductsSection />
      <HowItWorks />
      <ROICalculator />
      <AwardsSection />
      <MicroConversionSection />
      <FAQSection />
      <CTASection />
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
      className="min-h-screen pt-[120px] pb-8 px-4 lg:px-8 flex items-center"
      style={{ background: "#FFFFFF" }}
    >
      <div className="w-full max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column */}
          <div>
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
              className="text-[32px] lg:text-[56px] font-extrabold leading-[1.1] tracking-[-0.03em] mb-4 animate-fade-in-up stagger-1"
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
              className="text-[15px] lg:text-[17px] leading-[1.6] max-w-[480px] mb-4 animate-fade-in-up stagger-2"
              style={{ color: "#475569" }}
            >
              Indian exporters lose 3-7% of FOB value every month to document mismatches between
              Shipping Bills and Invoices. Liquidmind AI catches every error before customs does.
            </p>

            {/* Stat pills */}
            <div className="flex flex-wrap gap-2 mb-6 animate-fade-in-up stagger-3">
              {statPills.map((stat, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full text-[11px] font-medium transition-all duration-300 hover:scale-105"
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
            <div className="flex flex-wrap gap-3 animate-fade-in-up stagger-4">
              <a
                href="#demo"
                className="px-6 py-3 rounded-lg text-sm font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl btn-shine"
                style={{
                  background: "linear-gradient(90deg, #0066CC, #00A86B)",
                  color: "#FFFFFF",
                  boxShadow: "0 4px 25px rgba(0,102,204,0.35)",
                }}
              >
                Book Free Demo
              </a>
              <button
                className="px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 hover:border-[#0066CC] hover:text-[#0066CC] hover:bg-[#EFF6FF]"
                style={{
                  background: "transparent",
                  border: "1.5px solid #CBD5E1",
                  color: "#0F172A",
                }}
              >
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="animate-slide-in-right">
            <HeroMockup animated={true} />
          </div>
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
      numberColor: "#0F172A",
      title: "Mismatches in Trade Data",
      body: "Every second export-import document has errors that trigger customs delays, penalty orders, or blocked IGST refunds.",
      citation: "— ADB Report",
    },
    {
      number: "30%",
      numberColor: "#0066CC",
      title: "Documents Contain Critical Errors",
      body: "One digit wrong in an HSN code. One wrong port abbreviation. Your drawback claim for the entire shipment is rejected.",
      citation: "— World Bank Logistics Performance Index",
      featured: true,
    },
    {
      number: "3-7%",
      numberColor: "#0F172A",
      title: "Of FOB Value Lost Per Shipment",
      body: "Drawback, IGST refunds, RODTEP scrips. The money is owed to you. It doesn't come back because a field didn't match.",
      citation: "— CBIC Drawback Rejection Analysis",
    },
  ]

  return (
    <section ref={ref} className="min-h-screen py-12 lg:py-16 px-4 lg:px-8 flex items-center" style={{ background: "#FFFFFF" }}>
      <div className="w-full max-w-[1400px] mx-auto">
        {/* Header */}
        <div className={`text-center mb-10 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div
            className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold tracking-[0.12em] uppercase mb-4"
            style={{
              background: "rgba(220,38,38,0.08)",
              border: "1px solid rgba(220,38,38,0.2)",
              color: "#DC2626",
            }}
          >
            THE COST OF DOING NOTHING
          </div>
          <h2 className="text-[28px] lg:text-[44px] font-bold leading-tight mb-4" style={{ color: "#0F172A" }}>
            Your Trade Documents Are
            <br className="hidden lg:block" /> <span className="text-[#DC2626]">Bleeding Money</span> Right Now.
          </h2>
          <p className="text-sm lg:text-base max-w-[600px] mx-auto leading-relaxed" style={{ color: "#475569" }}>
            {"Every mismatch, every wrong HSN code, every port code typo — the refund just doesn't arrive."}
          </p>
        </div>

        {/* Problem cards - Modern Glass Design */}
        <div className="grid lg:grid-cols-3 gap-4 lg:gap-6 mb-10">
          {problems.map((problem, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 transition-all duration-500 card-hover relative overflow-hidden ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{
                background: problem.featured ? "linear-gradient(135deg, #0066CC 0%, #0052A3 100%)" : "#FFFFFF",
                border: problem.featured ? "none" : "2px solid #E2E8F0",
                boxShadow: problem.featured ? "0 20px 60px rgba(0,102,204,0.3)" : "0 4px 20px rgba(0,0,0,0.05)",
                transitionDelay: `${idx * 100}ms`
              }}
            >
              {/* Decorative element */}
              {problem.featured && (
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2" />
              )}
              
              <div
                className="font-mono font-bold mb-3"
                style={{
                  fontSize: "48px",
                  lineHeight: 1,
                  color: problem.featured ? "#FFFFFF" : problem.numberColor,
                }}
              >
                {problem.number}
              </div>
              <h3 className="text-lg font-bold mb-3" style={{ color: problem.featured ? "#FFFFFF" : "#0F172A" }}>{problem.title}</h3>
              <p className="text-[14px] leading-relaxed mb-3" style={{ color: problem.featured ? "rgba(255,255,255,0.8)" : "#475569" }}>{problem.body}</p>
              <p className="text-[11px] italic" style={{ color: problem.featured ? "rgba(255,255,255,0.6)" : "#94A3B8" }}>{problem.citation}</p>
            </div>
          ))}
        </div>

        {/* Quote and CTA */}
        <div className={`text-center transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-lg lg:text-xl italic mb-6" style={{ color: "#0F172A" }}>
            {"\"This isn't a technology problem. It's a money problem with a technology solution.\""}
          </p>
          <a
            href="#products"
            className="inline-block px-6 py-3 rounded-lg text-sm font-bold transition-all duration-300 hover:scale-105 btn-shine"
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
    { number: 1, title: "Upload", description: "Drag & drop PDFs" },
    { number: 2, title: "Extract", description: "AI reads key fields" },
    { number: 3, title: "Map", description: "Smart field matching" },
    { number: 4, title: "Verify", description: "Cross-check sources" },
    { number: 5, title: "Report", description: "Results in 5 min" },
  ]

  return (
    <section ref={ref} className="min-h-screen py-12 lg:py-16 px-4 lg:px-8 flex items-center" style={{ background: "#F8FAFC" }}>
      <div className="w-full max-w-[1400px] mx-auto">
        {/* Header */}
        <div className={`text-center mb-10 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div
            className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold tracking-[0.12em] uppercase mb-4"
            style={{
              background: "rgba(0,102,204,0.1)",
              border: "1px solid rgba(0,102,204,0.25)",
              color: "#0066CC",
            }}
          >
            THE PROCESS
          </div>
          <h2 className="text-[28px] lg:text-[44px] font-bold leading-tight" style={{ color: "#0F172A" }}>
            Upload to Report in <span className="text-[#0066CC]">5 Minutes</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="relative mb-10">
          {/* Connecting line (desktop) */}
          <div
            className="hidden lg:block absolute top-6 left-[10%] right-[10%] h-0.5"
            style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)", opacity: 0.3 }}
          />

          <div className="grid grid-cols-5 gap-2 lg:gap-4 relative z-10">
            {steps.map((step, idx) => (
              <div 
                key={step.number} 
                className={`text-center transition-all duration-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div
                  className="w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center mx-auto mb-2 transition-all duration-300 hover:scale-110"
                  style={{ background: "linear-gradient(135deg, #0066CC, #00A86B)" }}
                >
                  <span className="text-white font-mono text-sm lg:text-lg font-bold">{step.number}</span>
                </div>
                <h3 className="font-bold text-xs lg:text-sm mb-1" style={{ color: "#0F172A" }}>{step.title}</h3>
                <p className="text-[10px] lg:text-xs leading-relaxed" style={{ color: "#64748B" }}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Proof boxes */}
        <div className="grid lg:grid-cols-2 gap-4">
          <div
            className={`p-6 rounded-xl transition-all duration-500 card-hover ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
            style={{
              background: "#FFFFFF",
              border: "2px solid #0066CC",
              boxShadow: "0 8px 40px rgba(0,102,204,0.12)",
            }}
          >
            <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-[#0066CC] to-[#00A86B] bg-clip-text text-transparent">99.9% Accuracy</div>
            <p className="text-sm leading-relaxed" style={{ color: "#475569" }}>
              Multi-layer verification means every answer is cross-checked against the source pixel.
            </p>
          </div>
          <div
            className={`p-6 rounded-xl transition-all duration-500 delay-100 card-hover ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
            style={{
              background: "#FFFFFF",
              border: "2px solid #00A86B",
              boxShadow: "0 8px 40px rgba(0,168,107,0.12)",
            }}
          >
            <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-[#00A86B] to-[#0066CC] bg-clip-text text-transparent">{"< 5 Minutes"}</div>
            <p className="text-sm leading-relaxed" style={{ color: "#475569" }}>
              From document upload to full mismatch report. Not hours. Not days.
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
      title: "Karnataka Elevate 2025",
      subtitle: "Selected from 1,474+ applicants across all sectors",
      quote: "Non-dilutive grant awarded for innovation in trade compliance",
      image: "/images/elevate-award.jpg",
    },
  ]

  return (
    <section ref={ref} className="min-h-screen py-12 lg:py-16 px-4 lg:px-8 flex flex-col justify-center" style={{ background: "#FFFFFF" }}>
      <div className="w-full max-w-[1400px] mx-auto">
        <h2 className={`text-[28px] lg:text-[44px] font-bold text-center mb-8 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ color: "#0F172A" }}>
          Recognised. <span className="gold-text">Validated.</span> Trusted.
        </h2>

        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {awards.map((award, idx) => (
            <div
              key={idx}
              className={`rounded-2xl overflow-hidden transition-all duration-500 card-hover ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{
                background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
                border: "2px solid #D4AF37",
                boxShadow: "0 20px 60px rgba(212,175,55,0.2)",
                transitionDelay: `${idx * 150}ms`
              }}
            >
              {/* Award Image */}
              <div className="relative h-[220px] lg:h-[260px] overflow-hidden">
                <Image
                  src={award.image}
                  alt={award.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div
                    className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.12em] uppercase mb-2"
                    style={{ background: "linear-gradient(90deg, #D4AF37, #F5D061)", color: "#0F172A" }}
                  >
                    {award.date}
                  </div>
                  <h3 className="text-white text-lg lg:text-xl font-bold gold-text">{award.title}</h3>
                </div>
              </div>
              
              {/* Award Content */}
              <div className="p-5">
                <p className="text-[14px] font-medium mb-2" style={{ color: "#D4AF37" }}>{award.subtitle}</p>
                <p className="text-sm italic" style={{ color: "#94A3B8" }}>{`"${award.quote}"`}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Full-width Partner logos - Animated Marquee */}
      <div 
        className={`w-full py-6 overflow-hidden transition-all duration-700 delay-300 ${isInView ? 'opacity-100' : 'opacity-0'}`}
        style={{ background: "#0F172A" }}
      >
        <div className="flex items-center">
          <div className="animate-marquee flex items-center">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center gap-16 mx-8">
                <span className="text-[12px] font-semibold uppercase tracking-wider text-white/50">Backed by:</span>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kIHJ4Istxh4YAnVoqXoE4QT6aYLPqW.png"
                  alt="NVIDIA Inception, AWS, Microsoft for Startups"
                  width={600}
                  height={80}
                  className="h-16 lg:h-20 w-auto object-contain"
                />
              </div>
            ))}
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
      badge: "FREE — NO EMAIL",
      badgeColor: "#0066CC",
      title: "Watch Tradeguard in Action",
      body: "A real document audit, live on screen. No slides. No fluff. Just the AI working.",
      cta: "Watch Now",
    },
    {
      badge: "FREE — INSTANT",
      badgeColor: "#0066CC",
      title: "Calculate Your Annual Exposure",
      body: "Enter your shipment volume. Get your personal rupee risk number immediately.",
      cta: "Use Calculator",
    },
    {
      badge: "FREE RESOURCE",
      badgeColor: "#00A86B",
      title: "Trade Compliance Guide",
      body: "Everything about avoiding document mismatches and maximizing your refunds.",
      cta: "Download",
    },
    {
      badge: "30 MINUTES",
      badgeColor: "#0066CC",
      title: "Talk to a Specialist",
      body: "We'll calculate your exact exposure on your real documents.",
      cta: "Book a Call",
      featured: true,
    },
  ]

  return (
    <section ref={ref} className="min-h-screen py-12 lg:py-16 px-4 lg:px-8 flex items-center" style={{ background: "#F8FAFC" }}>
      <div className="w-full max-w-[1400px] mx-auto">
        {/* Header */}
        <div className={`text-center mb-8 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div
            className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold tracking-[0.12em] uppercase mb-4"
            style={{ background: "rgba(0,102,204,0.1)", border: "1px solid rgba(0,102,204,0.25)", color: "#0066CC" }}
          >
            START WHERE YOU ARE
          </div>
          <h2 className="text-[28px] lg:text-[44px] font-bold leading-tight mb-3" style={{ color: "#0F172A" }}>
            Not Ready for a Demo? <span className="text-[#0066CC]">Start Here.</span>
          </h2>
          <p className="text-sm lg:text-base max-w-xl mx-auto" style={{ color: "#475569" }}>
            Every path leads to knowing exactly how much money your documents are at risk of losing.
          </p>
        </div>

        {/* Cards grid - Modern Glass Design */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-xl transition-all duration-500 card-hover relative overflow-hidden ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{
                background: card.featured ? "linear-gradient(135deg, #0066CC 0%, #0052A3 100%)" : "#FFFFFF",
                border: card.featured ? "none" : "1px solid #E2E8F0",
                boxShadow: card.featured ? "0 20px 60px rgba(0,102,204,0.3)" : "0 4px 20px rgba(0,0,0,0.05)",
                transitionDelay: `${idx * 100}ms`
              }}
            >
              {card.featured && (
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2" />
              )}
              
              <div
                className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold tracking-[0.1em] uppercase mb-3"
                style={{
                  background: card.featured ? "rgba(255,255,255,0.2)" : `${card.badgeColor}15`,
                  border: card.featured ? "1px solid rgba(255,255,255,0.3)" : `1px solid ${card.badgeColor}40`,
                  color: card.featured ? "#FFFFFF" : card.badgeColor,
                }}
              >
                {card.badge}
              </div>
              <h3 className="text-base font-bold mb-2" style={{ color: card.featured ? "#FFFFFF" : "#0F172A" }}>{card.title}</h3>
              <p className="text-[13px] leading-relaxed mb-4" style={{ color: card.featured ? "rgba(255,255,255,0.8)" : "#475569" }}>{card.body}</p>
              {card.featured ? (
                <a
                  href="#demo"
                  className="inline-block px-4 py-2 rounded-lg text-sm font-bold transition-all duration-300 hover:scale-105"
                  style={{ background: "#FFFFFF", color: "#0066CC" }}
                >
                  {card.cta}
                </a>
              ) : (
                <a href="#" className="text-sm font-semibold hover:underline transition-colors" style={{ color: "#0066CC" }}>
                  {card.cta} →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


