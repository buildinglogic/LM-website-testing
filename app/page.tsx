"use client"

import { Navigation } from "@/components/navigation"
import { HeroMockup } from "@/components/hero-mockup"
import { ProductsSection } from "@/components/products-section"
import { ROICalculator } from "@/components/roi-calculator"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { FooterLinks } from "@/components/footer-links"
import { WhatsAppButton } from "@/components/whatsapp-button"
import Image from "next/image"
import Link from "next/link"
import React, { useEffect, useRef, useState } from "react"

export default function LiquidmindLanding() {
  return (
    <main className="bg-white">
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <ProductsSection />
      <HowItWorks />
      <div className="page-snap"><ROICalculator /></div>
      <AwardsSection />
      <MicroConversionSection />
      <div className="page-snap"><FAQSection /></div>
      <CTASection />
      <FooterLinks />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsInView(true) },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, isInView }
}

/* ========================
   ANIMATED COUNTER
======================== */
function AnimatedCount({ to }: { to: number }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    let frame: number
    const t0 = performance.now()
    const dur = 1600
    const tick = (now: number) => {
      const p = Math.min((now - t0) / dur, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setCount(Math.floor(eased * to))
      if (p < 1) frame = requestAnimationFrame(tick)
      else setCount(to)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [started, to])

  return <span ref={ref}>{count}</span>
}

/* ========================
   HERO SECTION
======================== */
function HeroSection() {
  const stats = [
    { to: 50, suffix: "%", line1: "trade data", line2: "mismatches" },
    { to: 30, suffix: "%", line1: "docs with", line2: "critical errors" },
    { to: 7,  suffix: "%", prefix: "3–", line1: "FOB value", line2: "at risk" },
  ] as { to: number; suffix: string; line1: string; line2: string; prefix?: string }[]

  return (
    <section
      className="page-snap min-h-screen pt-[120px] pb-6 px-4 lg:px-8 flex items-center"
      style={{
        backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/white%20textured%20background-VTbHzt4lKA0rxfUKqNSLETf6lAlqjC.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="w-full max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">

          <div className="lg:pl-8 xl:pl-16">

            {/* Plain label — gradient rule + small caps */}
            <div className="flex items-center gap-3 mb-5 animate-fade-in">
              <div className="h-px w-8 flex-shrink-0 rounded-full" style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)" }} />
              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#94A3B8" }}>
                India's #1 AI Trade Compliance Platform
              </span>
            </div>

            <h1 className="text-[32px] lg:text-[56px] font-extrabold leading-[1.1] tracking-[-0.03em] mb-4 animate-fade-in-up stagger-1" style={{ color: "#0F172A" }}>
              Stop Losing<br />
              <span className="bg-gradient-to-r from-[#0066CC] to-[#00A86B] bg-clip-text text-transparent">Crores</span> to Trade<br />
              Document Errors.
            </h1>

            <p className="text-[15px] lg:text-[17px] leading-[1.6] max-w-[460px] mb-8 animate-fade-in-up stagger-2" style={{ color: "#475569" }}>
              Indian exporters lose 3–7% of FOB value every month to document mismatches.
              Liquidmind AI catches every error before customs does.
            </p>

            {/* Compact inline stats */}
            <div className="flex items-start gap-0 mb-8 animate-fade-in-up stagger-3">
              {stats.map((stat, idx) => (
                <React.Fragment key={idx}>
                  <div className="flex flex-col">
                    <span className="text-[30px] lg:text-[34px] font-black tracking-tight leading-none tabular-nums" style={{ color: "#0066CC" }}>
                      {stat.prefix}<AnimatedCount to={stat.to} />{stat.suffix}
                    </span>
                    <span className="text-[10px] font-medium leading-[1.3] mt-1.5" style={{ color: "#94A3B8" }}>
                      {stat.line1}<br />{stat.line2}
                    </span>
                  </div>
                  {idx < 2 && (
                    <div className="w-px mx-6 mt-1" style={{ height: "44px", background: "#E2E8F0" }} />
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 animate-fade-in-up stagger-4">
              <Link href="/book-demo"
                className="px-6 py-3 rounded-xl text-sm font-bold btn-shine haptic-btn inline-flex items-center gap-2"
                style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)", color: "#FFFFFF", boxShadow: "0 4px 25px rgba(0,102,204,0.35)" }}>
                Book Free Demo
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>

              <button className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all hover:bg-slate-50 haptic-btn"
                style={{ border: "1.5px solid #E2E8F0" }}>
                <div className="relative w-8 h-8 flex-shrink-0 flex items-center justify-center">
                  <span className="absolute inset-0 rounded-full play-ring-1" style={{ background: "rgba(0,102,204,0.12)" }} />
                  <span className="absolute inset-0 rounded-full play-ring-2" style={{ background: "rgba(0,102,204,0.07)" }} />
                  <span className="relative w-full h-full rounded-full flex items-center justify-center"
                    style={{ background: "rgba(0,102,204,0.1)", border: "1px solid rgba(0,102,204,0.2)" }}>
                    <svg className="w-3 h-3 ml-0.5" fill="#0066CC" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </div>
                <span className="text-sm font-semibold" style={{ color: "#0F172A" }}>Watch Demo</span>
              </button>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <HeroMockup animated={true} />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ========================
   PROBLEM SECTION - 6 Cards with background image
======================== */
function ProblemSection() {
  const { ref, isInView } = useInView()
  
  const problems = [
    { 
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      number: "3,000+", 
      title: "New Policies Raise Costs by 20%", 
      body: "Rising trade policies increase operational expenses by 20% annually.", 
      citation: "World Economic Forum"
    },
    { 
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
        </svg>
      ),
      number: "50%", 
      title: "Mismatches in Trade Data", 
      body: "Export-import data errors exceed 50%, distorting global trade figures.", 
      citation: "ADB Report"
    },
    { 
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
        </svg>
      ),
      number: "$1.5T", 
      title: "Lost to Trade Inefficiencies", 
      body: "This have led to a $1.5 trillion contraction, driven by changing geopolitical relations and reduced demand.", 
      citation: "UNCTAD Report"
    },
    { 
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
        </svg>
      ),
      number: "30%", 
      title: "Documents Contain Critical Errors", 
      body: "This high error rate can lead to significant delays and increased costs in global supply chains.", 
      citation: "World Bank Logistics Performance Index"
    },
    { 
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      number: "3-7%", 
      title: "Of FOB Value Lost Per Shipment", 
      body: "Drawback, IGST refunds, RODTEP scrips. The money is owed to you but doesn't come back.", 
      citation: "CBIC Analysis"
    },
    { 
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>
      ),
      number: "99.9%", 
      title: "Accuracy Needed for Compliance", 
      body: "One wrong digit in HSN code or port abbreviation can reject your entire drawback claim.", 
      citation: "Industry Standard"
    },
  ]

  return (
    <section
      ref={ref}
      className="page-snap min-h-screen flex flex-col justify-center py-6 px-4 lg:px-8 relative"
      style={{
        background: `linear-gradient(180deg, rgba(255,255,255,0.88) 0%, rgba(248,250,252,0.92) 100%), url('/images/world-map-bg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="w-full max-w-[1000px] mx-auto">
        <div className={`text-center mb-5 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 flex-shrink-0 rounded-full" style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)" }} />
            <span className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#94A3B8" }}>
              The Cost of Doing Nothing
            </span>
            <div className="h-px w-8 flex-shrink-0 rounded-full" style={{ background: "linear-gradient(270deg, #0066CC, #00A86B)" }} />
          </div>
          <h2 className="text-[22px] lg:text-[36px] font-bold leading-tight" style={{ color: "#0F172A" }}>
            Your Trade Documents Are{" "}
            <span className="bg-gradient-to-r from-[#0066CC] to-[#00A86B] bg-clip-text text-transparent">Bleeding Money</span>{" "}
            Right Now.
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 mb-5">
          {problems.map((problem, idx) => (
            <ProblemCardItem key={idx} problem={problem} idx={idx} isInView={isInView} />
          ))}
        </div>

        <div className={`flex flex-col items-center gap-3 transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3">
            <div className="h-px w-12 rounded-full" style={{ background: "linear-gradient(90deg, transparent, #CBD5E1)" }} />
            <span className="text-[10px] font-mono font-semibold tracking-[0.15em] uppercase" style={{ color: "#94A3B8" }}>
              ₹2,40,000+ at risk in an average shipment
            </span>
            <div className="h-px w-12 rounded-full" style={{ background: "linear-gradient(270deg, transparent, #CBD5E1)" }} />
          </div>

          <a href="#products"
            className="group btn-cta-glow btn-shine haptic-btn relative inline-flex items-center gap-3 px-9 py-4 rounded-2xl text-white font-extrabold text-[15px] tracking-tight overflow-hidden"
            style={{ background: "linear-gradient(90deg, #0066CC 0%, #00A86B 100%)" }}>
            <span className="absolute left-0 right-0 h-px top-0 opacity-40" style={{ background: "linear-gradient(90deg, transparent, #ffffff, transparent)", animation: "shimmer 2s linear infinite" }} />
            <span className="relative">Stop Losing Money. See Tradeguard in Action</span>
            <span className="relative inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors">
              <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
              </svg>
            </span>
          </a>

          <span className="text-[10px]" style={{ color: "#94A3B8" }}>
            Works on your actual documents · Results in under 5 minutes
          </span>
        </div>
      </div>
    </section>
  )
}

/* ========================
   PROBLEM CARD — dark, high-contrast
======================== */
function ProblemCardItem({ problem, idx, isInView }: {
  problem: { icon: React.ReactNode; number: string; title: string; body: string; citation: string }
  idx: number
  isInView: boolean
}) {
  const divRef = useRef<HTMLDivElement>(null)
  const [spotPos, setSpotPos] = useState({ x: 0, y: 0 })
  const [spotOn, setSpotOn] = useState(false)

  return (
    <div
      ref={divRef}
      onMouseMove={(e) => {
        if (!divRef.current) return
        const rect = divRef.current.getBoundingClientRect()
        setSpotPos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
      }}
      onMouseEnter={() => setSpotOn(true)}
      onMouseLeave={() => setSpotOn(false)}
      className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{
        background: "rgba(255,255,255,0.72)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        border: spotOn ? "1px solid rgba(0,102,204,0.35)" : "1px solid rgba(255,255,255,0.9)",
        transitionDelay: `${idx * 60}ms`,
        boxShadow: spotOn
          ? "0 8px 32px rgba(0,102,204,0.18), 0 1px 0 rgba(255,255,255,0.8) inset"
          : "0 2px 16px rgba(0,0,0,0.06), 0 1px 0 rgba(255,255,255,0.8) inset",
      }}
    >
      {/* Gradient top accent bar */}
      <div className="absolute top-0 left-4 right-4 h-[2px] rounded-b-full"
        style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)" }} />

      {/* Brand blue mouse-tracking spotlight */}
      <div className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: spotOn ? 1 : 0,
          background: `radial-gradient(circle at ${spotPos.x}px ${spotPos.y}px, rgba(0,102,204,0.09), transparent 65%)`
        }}
      />

      <div className="p-4 pt-5">
        {/* Icon */}
        <div className="mb-2.5" style={{ color: "rgba(0,102,204,0.45)" }}>
          {React.cloneElement(problem.icon as React.ReactElement, { className: "w-4 h-4" })}
        </div>

        {/* Big number */}
        <div className="text-[28px] lg:text-[30px] font-black tracking-tight leading-none mb-1.5"
          style={{ color: "#0066CC" }}>
          {problem.number}
        </div>

        {/* Title */}
        <div className="font-semibold text-[11px] lg:text-[12px] leading-snug mb-2" style={{ color: "#0F172A" }}>
          {problem.title}
        </div>

        {/* Body */}
        <div className="text-[10px] leading-relaxed line-clamp-2 mb-2" style={{ color: "#64748B" }}>
          {problem.body}
        </div>

        {/* Citation */}
        <div className="text-[9px] font-mono uppercase tracking-wider" style={{ color: "#94A3B8" }}>
          {problem.citation}
        </div>
      </div>
    </div>
  )
}

/* ========================
   HOW IT WORKS - Process Timeline
======================== */
function HowItWorks() {
  const { ref, isInView } = useInView()
  const steps = [
    { number: 1, title: "ERP Integration", description: "Auto-fetch from your ERP systems", color: "#0066CC" },
    { number: 2, title: "AI Extraction", description: "Our AI reads and extracts key fields", color: "#0077DD" },
    { number: 3, title: "Smart Mapping", description: "Intelligent field matching across documents", color: "#0088AA" },
    { number: 4, title: "Multi-Layer Verification", description: "Cross-checks every answer against source", color: "#00A86B" },
    { number: 5, title: "Report Ready", description: "Excel + PDF in under 5 minutes", color: "#00B87C" },
  ]

  return (
    <section ref={ref} className="page-snap min-h-screen flex flex-col justify-center py-16 px-4 lg:px-8" style={{ background: "#F8FAFC" }}>
      <div className="w-full max-w-[1100px] mx-auto">
        <div className={`text-center mb-12 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Gradient container badge */}
          <div className="gradient-container inline-block mb-4">
            <div className="px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.12em] uppercase" 
              style={{ background: "#FFFFFF", color: "#0066CC" }}>
              THE PROCESS
            </div>
          </div>
          <h2 className="text-[30px] lg:text-[48px] font-bold leading-tight text-balance" style={{ color: "#0F172A" }}>
            From Document to Compliance Report in <span className="text-[#0066CC]">5 Minutes</span>
          </h2>
        </div>

        {/* Process Timeline */}
        <div className="relative mb-12">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-6 left-[10%] right-[10%] h-1 rounded-full" 
            style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)" }} />
          
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 relative z-10">
            {steps.map((step, idx) => (
              <div 
                key={step.number} 
                className={`text-center transition-all duration-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 transition-all hover:scale-110 shadow-lg"
                  style={{ background: step.color, boxShadow: `0 4px 20px ${step.color}40` }}
                >
                  <span className="text-white font-mono text-lg font-bold">{step.number}</span>
                </div>
                <h3 className="font-bold text-sm lg:text-base mb-1" style={{ color: "#0F172A" }}>{step.title}</h3>
                <p className="text-xs lg:text-sm leading-relaxed" style={{ color: "#64748B" }}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid lg:grid-cols-2 gap-4 max-w-[800px] mx-auto">
          <div 
            className={`p-6 rounded-xl transition-all duration-500 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
            style={{ background: "#FFFFFF", border: "2px solid #0066CC", boxShadow: "0 4px 20px rgba(0,102,204,0.1)" }}
          >
            <div className="text-3xl lg:text-4xl font-bold mb-2 bg-gradient-to-r from-[#0066CC] to-[#00A86B] bg-clip-text text-transparent">
              99.9% Accuracy
            </div>
            <p className="text-sm" style={{ color: "#475569" }}>
              Our multi-layer verification means every answer is cross-checked against the source pixel. Not just extracted — confirmed.
            </p>
          </div>
          <div 
            className={`p-6 rounded-xl transition-all duration-500 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
            style={{ background: "#FFFFFF", border: "2px solid #00A86B", boxShadow: "0 4px 20px rgba(0,168,107,0.1)", transitionDelay: "100ms" }}
          >
            <div className="text-3xl lg:text-4xl font-bold mb-2 bg-gradient-to-r from-[#00A86B] to-[#0066CC] bg-clip-text text-transparent">
              {"< 5 Minutes"}
            </div>
            <p className="text-sm" style={{ color: "#475569" }}>
              From document upload to full mismatch report. Not hours. Not days. Five minutes, every time.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ========================
   AWARDS SECTION - High contrast colors
======================== */
function AwardsSection() {
  const { ref, isInView } = useInView()
  
  const awards = [
    {
      date: "FEBRUARY 2026",
      title: "Aegis Graham Bell Award",
      subtitle: "16th AGBA Innovation in Gen AI - CX, Sales & GTM Intelligence Category Winner",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Aegis%20graham%20bell%20award-Io0nVjDGHyxbMH3GUnh9D2M8PtIHjM.jpg",
    },
    {
      date: "NOVEMBER 2025",
      title: "Karnataka Elevate 2025",
      subtitle: "Selected from 1,474+ applicants across all sectors",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/karnataka%20elevate%20award-6VQmT2ahCZSsynysJCRN0mwxbYjAZp.jpg",
    },
  ]

  return (
    <section ref={ref} className="page-snap min-h-screen flex flex-col justify-center py-16 px-4 lg:px-8" style={{ background: "#FFFFFF" }}>
      <div className="w-full max-w-[1100px] mx-auto">
        <h2 className={`text-[28px] lg:text-[44px] font-bold text-center mb-10 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ color: "#0F172A" }}>
          Recognised. <span className="text-[#0066CC]">Validated.</span> Trusted.
        </h2>

        <div className="grid lg:grid-cols-2 gap-6 mb-10">
          {awards.map((award, idx) => (
            <div key={idx}
              className={`rounded-2xl overflow-hidden group transition-all duration-500 hover:scale-[1.02] ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ 
                background: "#0F172A", 
                border: "3px solid #0066CC",
                boxShadow: "0 20px 60px rgba(0,102,204,0.2)",
                transitionDelay: `${idx * 150}ms`,
              }}>
              <div className="relative h-[280px] lg:h-[340px] overflow-hidden">
                <Image src={award.image} alt={award.title} fill className="object-cover object-center group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/30 to-transparent" />
                <div className="absolute top-3 right-3">
                  <div className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase"
                    style={{ background: "#0066CC", color: "#FFFFFF" }}>
                    {award.date}
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2 text-white">{award.title}</h3>
                <p className="text-[14px] font-medium text-white/90">{award.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Backed By - Partner Logos */}
      <div className={`w-full py-8 transition-all duration-700 delay-300 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ background: "#F1F5F9" }}>
        <div className="max-w-[900px] mx-auto text-center px-4">
          <p className="text-base font-semibold mb-6 tracking-wide" style={{ color: "#64748B" }}>Backed by leading technology partners</p>
          <div className="flex justify-center items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-03-14%20133550-DW8iyYo9sqjlGDVnoCBNdZDhoLi2E4.png"
              alt="Partner Logos - NVIDIA Inception, AWS, Microsoft for Startups"
              width={800}
              height={120}
              className="w-full max-w-[700px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ========================
   MICRO CARD WITH SPOTLIGHT
======================== */
function MicroCardItem({ card, idx, isInView }: {
  card: { badge: string; title: string; body: string; cta: string; featured?: boolean }
  idx: number
  isInView: boolean
}) {
  const divRef = useRef<HTMLDivElement>(null)
  const [spotPos, setSpotPos] = useState({ x: 0, y: 0 })
  const [spotOn, setSpotOn] = useState(false)

  return (
    <div
      ref={divRef}
      onMouseMove={(e) => {
        if (!divRef.current) return
        const rect = divRef.current.getBoundingClientRect()
        setSpotPos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
      }}
      onMouseEnter={() => setSpotOn(true)}
      onMouseLeave={() => setSpotOn(false)}
      className={`micro-card group relative rounded-xl p-5 transition-all duration-500 cursor-pointer overflow-hidden ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{
        background: card.featured ? "#0066CC" : "linear-gradient(to bottom, #e8f4f8, #d4eef5)",
        transitionDelay: `${idx * 100}ms`,
      }}
    >
      {!card.featured && (
        <>
          {/* Mouse-tracking spotlight */}
          <div className="pointer-events-none absolute inset-0 rounded-xl transition-opacity duration-300 group-hover:opacity-0"
            style={{
              opacity: spotOn ? 1 : 0,
              background: `radial-gradient(circle at ${spotPos.x}px ${spotPos.y}px, rgba(0,102,204,0.13), transparent 65%)`
            }}
          />
          <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ background: "linear-gradient(135deg, #0F172A, #1e3a5f)" }} />
          <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: "linear-gradient(135deg, #0066CC, #0F172A)" }}>
            <span className="absolute top-1 right-1.5 text-white text-xs font-bold">→</span>
          </div>
        </>
      )}

      <div className="relative z-10">
        <div className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold tracking-[0.1em] uppercase mb-3 ${
          card.featured ? 'bg-white/20 text-white' : 'bg-[#0066CC]/10 text-[#0066CC] group-hover:bg-white/20 group-hover:text-white'
        } transition-colors duration-500`}>
          {card.badge}
        </div>
        <h3 className={`text-base font-bold mb-2 ${
          card.featured ? 'text-white' : 'text-[#0F172A] group-hover:text-white'
        } transition-colors duration-500`}>{card.title}</h3>
        <p className={`text-sm leading-relaxed mb-4 ${
          card.featured ? 'text-white/80' : 'text-[#475569] group-hover:text-white/80'
        } transition-colors duration-500`}>{card.body}</p>
        {card.featured ? (
          <Link href="/book-demo" className="inline-block px-4 py-2 rounded-lg text-sm font-bold bg-white text-[#0066CC] hover:scale-105 transition-transform">
            {card.cta}
          </Link>
        ) : (
          <span className="text-sm font-semibold text-[#0066CC] group-hover:text-white transition-colors duration-500">
            {card.cta} →
          </span>
        )}
      </div>
    </div>
  )
}

/* ========================
   MICRO CONVERSION SECTION - Better card layout
======================== */
function MicroConversionSection() {
  const { ref, isInView } = useInView()
  
  const cards = [
    { badge: "FREE", title: "Watch Tradeguard in Action", body: "A real document audit, live on screen. No slides. No fluff.", cta: "Watch Now" },
    { badge: "FREE", title: "Calculate Your Annual Exposure", body: "Enter your shipment volume. Get your personal rupee risk number.", cta: "Use Calculator" },
    { badge: "FREE RESOURCE", title: "Trade Compliance Guide", body: "Everything about avoiding document mismatches and maximizing refunds.", cta: "Download" },
    { badge: "30 MINUTES", title: "Talk to a Specialist", body: "We'll calculate your exact exposure on your real documents.", cta: "Book a Call", featured: true },
  ]

  return (
    <section ref={ref} className="page-snap min-h-screen flex flex-col justify-center py-16 px-4 lg:px-8" style={{ background: "#F8FAFC" }}>
      <div className="w-full max-w-[900px] mx-auto">
        <div className={`text-center mb-10 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Gradient container badge */}
          <div className="gradient-container inline-block mb-4">
            <div className="px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.12em] uppercase" 
              style={{ background: "#FFFFFF", color: "#0066CC" }}>
              START WHERE YOU ARE
            </div>
          </div>
          <h2 className="text-[30px] lg:text-[48px] font-bold leading-tight text-balance" style={{ color: "#0F172A" }}>
            Not Ready for a Demo? <span className="text-[#0066CC]">Start Here.</span>
          </h2>
        </div>

        {/* Cards with spotlight + hover effects */}
        <div className="grid md:grid-cols-2 gap-4">
          {cards.map((card, idx) => (
            <MicroCardItem key={idx} card={card} idx={idx} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}
