"use client"

import { Navigation } from "@/components/navigation"
import { PatramHero } from "@/components/products-hero"
import { ROICalculator } from "@/components/roi-calculator"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { FooterLinks } from "@/components/footer-links"
import { WhatsAppButton } from "@/components/whatsapp-button"
import Image from "next/image"
import Link from "next/link"
import React, { useEffect, useRef, useState } from "react"
import { Shield, Globe, Calculator, ArrowRight } from "lucide-react"
import { trackBookDemoCTAClick, trackWatchDemoClick, trackJourneyStepViewed, trackPartnerInteracted, trackVideoPlayed, trackAwardInteracted, trackProductCTAClick } from "@/lib/amplitude"

export default function LiquidmindLanding() {
  useEffect(() => {
    // Handle initial hash on mount or back button navigation
    const hash = window.location.hash
    if (hash) {
      const id = hash.replace("#", "")
      const element = document.getElementById(id)
      if (element) {
        // Small delay to ensure layout is stable
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" })
        }, 100)
      }
    }
  }, [])

  return (
    <main className="bg-white">

      <Navigation />
      <PatramHero />
      <ProblemSection />
      <ProductShowcase />
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
   PRODUCT SHOWCASE — Apple-style premium cards
======================== */
function ProductShowcase() {
  const { ref, isInView } = useInView()

  const products = [
    {
      name: "TradeGuard",
      tagline: "Document audit in seconds, not hours.",
      description: "Upload Shipping Bill and Invoice. TradeGuard cross-matches 40+ fields and flags the discrepancies that would cost you at customs.",
      stat: "40+",
      statLabel: "Fields checked",
      speed: "<5s",
      speedLabel: "Per audit",
      href: "/products/tradeguard",
      color: "#0066CC",
      icon: Shield,
    },
    {
      name: "Patram AI",
      tagline: "Ask anything. Get sourced answers.",
      description: "Regulations, certifications, restrictions — for 190+ countries. Patram reads the policy documents so your team doesn't have to.",
      stat: "190+",
      statLabel: "Countries",
      speed: "1.5s",
      speedLabel: "Response time",
      href: "/products/patram",
      color: "#00A86B",
      icon: Globe,
    },
    {
      name: "TariffIQ",
      tagline: "Right HSN code. Maximum incentive.",
      description: "Duty rates, drawback eligibility, RoDTEP claims — resolved in seconds. No guesswork. No missed refunds.",
      stat: "95%",
      statLabel: "Accuracy",
      speed: "<3s",
      speedLabel: "Classification",
      href: "/products/tariffiq",
      color: "#1B4F8A",
      icon: Calculator,
    },
  ]

  return (
    <section
      ref={ref}
      id="products"
      className="py-10 lg:py-14 px-5 lg:px-8"
      style={{ background: "#FFFFFF", scrollMarginTop: "80px" }}
    >
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className={`text-center mb-8 lg:mb-10 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)" }} />
            <span className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#94A3B8" }}>Our Products</span>
            <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(270deg, #0066CC, #00A86B)" }} />
          </div>
          <h2 className="text-[26px] sm:text-[30px] lg:text-[40px] font-extrabold leading-[1.1] tracking-[-0.02em]" style={{ color: "#0F172A" }}>
            Purpose-built for{" "}
            <span className="bg-gradient-to-r from-[#0066CC] to-[#00A86B] bg-clip-text text-transparent">every stage of export.</span>
          </h2>
          <p className="text-[14px] sm:text-[15px] mt-3 max-w-[460px] mx-auto" style={{ color: "#64748B" }}>
            Classification. Compliance. Intelligence. Each one solves a real bottleneck.
          </p>
        </div>

        {/* Cards — stacked on mobile, grid on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {products.map((product, idx) => {
            const Icon = product.icon
            return (
              <Link
                key={product.name}
                href={product.href}
                onClick={() => trackProductCTAClick(product.name, "Product Showcase")}
                className={`group product-card-apple card-shimmer-on-hover rounded-2xl flex flex-col transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                  transitionDelay: `${idx * 120}ms`,
                }}
              >
                {/* Gradient top accent */}
                <div className="h-1 rounded-t-2xl" style={{ background: `linear-gradient(90deg, ${product.color}, ${product.color}88)` }} />

                <div className="p-6 lg:p-8 flex flex-col flex-1">
                  {/* Icon + Name row */}
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-[-3deg]"
                      style={{
                        background: `linear-gradient(135deg, ${product.color}, ${product.color}bb)`,
                        boxShadow: `0 8px 24px ${product.color}30`,
                      }}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-[20px] sm:text-[22px] font-extrabold" style={{ color: "#0F172A" }}>
                        {product.name}
                      </h3>
                      <p className="text-[12px] font-semibold" style={{ color: product.color }}>{product.tagline}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-[13px] sm:text-[14px] leading-relaxed mb-6 flex-1" style={{ color: "#475569" }}>
                    {product.description}
                  </p>

                  {/* Stats row */}
                  <div className="flex items-center gap-4 mb-6 pb-6" style={{ borderBottom: "1px solid #E2E8F0" }}>
                    <div className="flex-1 text-center py-3 rounded-xl" style={{ background: `${product.color}08` }}>
                      <div className="text-[22px] font-black" style={{ color: product.color }}>{product.stat}</div>
                      <div className="text-[11px] font-medium" style={{ color: "#94A3B8" }}>{product.statLabel}</div>
                    </div>
                    <div className="flex-1 text-center py-3 rounded-xl" style={{ background: `${product.color}08` }}>
                      <div className="text-[22px] font-black" style={{ color: product.color }}>{product.speed}</div>
                      <div className="text-[11px] font-medium" style={{ color: "#94A3B8" }}>{product.speedLabel}</div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 font-bold text-[14px] transition-all duration-300 group-hover:gap-4" style={{ color: product.color }}>
                    Explore {product.name}
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ========================
   PROBLEM SECTION — 4 Apple-style premium cards
======================== */
function ProblemSection() {
  const { ref, isInView } = useInView()

  const problems = [
    {
      number: "50%",
      title: "Data Mismatches",
      body: "Half of all trade documents contain errors. One discrepancy stalls your shipment.",
      citation: "ADB Report",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
        </svg>
      ),
      accentColor: "#0066CC",
    },
    {
      number: "3-7%",
      title: "FOB Value Lost",
      body: "Drawback and refund claims rejected because documents don't match.",
      citation: "CBIC Analysis",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      accentColor: "#00A86B",
    },
    {
      number: "30%",
      title: "Critical Errors",
      body: "Even experienced teams miss discrepancies that trigger customs holds.",
      citation: "World Bank LPI",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
        </svg>
      ),
      accentColor: "#0066CC",
    },
    {
      number: "3,000+",
      title: "New Policies Yearly",
      body: "Regulations change faster than any team can track manually.",
      citation: "World Economic Forum",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      accentColor: "#1B4F8A",
    },
  ]

  return (
    <section
      ref={ref}
      className="py-10 lg:py-14 px-5 lg:px-8 relative overflow-hidden"
    >
      {/* Blurred map layer */}
      <div className="absolute inset-0 scale-110 pointer-events-none" style={{
        backgroundImage: `url('/images/world-map-bg.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'blur(3px)',
      }} />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'linear-gradient(180deg, rgba(255,255,255,0.85) 0%, rgba(248,250,252,0.92) 100%)',
      }} />

      <div className="w-full max-w-[1100px] mx-auto relative">
        {/* Header */}
        <div className={`text-center mb-8 lg:mb-10 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 flex-shrink-0 rounded-full" style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)" }} />
            <span className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#94A3B8" }}>
              The Cost of Doing Nothing
            </span>
            <div className="h-px w-8 flex-shrink-0 rounded-full" style={{ background: "linear-gradient(270deg, #0066CC, #00A86B)" }} />
          </div>
          <h2 className="text-[22px] sm:text-[30px] lg:text-[40px] font-extrabold leading-[1.1] tracking-[-0.02em] mb-3" style={{ color: "#0F172A" }}>
            The cost of{" "}
            <span className="bg-gradient-to-r from-[#0066CC] to-[#00A86B] bg-clip-text text-transparent">doing nothing.</span>
          </h2>
          <p className="text-[14px] sm:text-[15px] max-w-[420px] mx-auto" style={{ color: "#64748B" }}>
            What your shipments lose before they leave the port.
          </p>
        </div>

        {/* 4 Premium cards — 2x2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5 mb-8">
          {problems.map((problem, idx) => (
            <ProblemCardItem key={idx} problem={problem} idx={idx} isInView={isInView} />
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a
            href="#products"
            className="group btn-magnetic btn-shine inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-white font-bold text-[15px] overflow-hidden"
            style={{ background: "linear-gradient(135deg, #0066CC, #00A86B)", boxShadow: "0 8px 32px rgba(0,102,204,0.35)" }}
          >
            See How We Fix This
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/20 group-hover:bg-white/30 transition-all duration-300">
              <ArrowRight className="w-4 h-4" />
            </span>
          </a>
          <p className="text-[12px] mt-3" style={{ color: "#94A3B8" }}>
            Works on your actual documents
          </p>
        </div>
      </div>
    </section>
  )
}

/* ========================
   PROBLEM CARD — Premium glass morphism with mouse tracking
======================== */
function ProblemCardItem({ problem, idx, isInView }: {
  problem: { icon: React.ReactNode; number: string; title: string; body: string; citation: string; accentColor: string }
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
      className={`problem-card-premium relative rounded-2xl overflow-hidden cursor-default ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{
        background: "rgba(255,255,255,0.78)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: spotOn ? `1px solid ${problem.accentColor}40` : "1px solid rgba(226,232,240,0.8)",
        transitionDelay: `${idx * 100}ms`,
        transitionDuration: "0.6s",
        boxShadow: spotOn
          ? `0 16px 48px ${problem.accentColor}18, 0 1px 0 rgba(255,255,255,0.9) inset`
          : "0 4px 20px rgba(0,0,0,0.06), 0 1px 0 rgba(255,255,255,0.9) inset",
      }}
    >
      {/* Gradient top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] transition-all duration-500"
        style={{
          background: spotOn
            ? `linear-gradient(90deg, ${problem.accentColor}, ${problem.accentColor}88)`
            : `linear-gradient(90deg, ${problem.accentColor}40, ${problem.accentColor}20)`,
        }} />

      {/* Mouse-tracking spotlight */}
      <div className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: spotOn ? 1 : 0,
          background: `radial-gradient(350px circle at ${spotPos.x}px ${spotPos.y}px, ${problem.accentColor}12, transparent 65%)`
        }}
      />

      <div className="p-6 lg:p-7 relative">
        <div className="flex items-start gap-5">
          {/* Left: Icon + Number */}
          <div className="flex flex-col items-center flex-shrink-0">
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center mb-3 transition-all duration-500"
              style={{
                background: spotOn ? `${problem.accentColor}15` : `${problem.accentColor}08`,
                color: problem.accentColor,
                boxShadow: spotOn ? `0 4px 16px ${problem.accentColor}20` : 'none',
              }}
            >
              {problem.icon}
            </div>
            <div
              className="text-[32px] lg:text-[38px] font-black tracking-tight leading-none stat-number-glow"
              style={{ color: problem.accentColor }}
            >
              {problem.number}
            </div>
          </div>

          {/* Right: Text */}
          <div className="flex-1 pt-1">
            <h3 className="font-bold text-[15px] lg:text-[16px] leading-snug mb-2" style={{ color: "#0F172A" }}>
              {problem.title}
            </h3>
            <p className="text-[13px] leading-relaxed mb-3" style={{ color: "#475569" }}>
              {problem.body}
            </p>
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full" style={{ background: problem.accentColor }} />
              <span className="text-[11px] font-semibold tracking-wider uppercase" style={{ color: "#94A3B8" }}>
                {problem.citation}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ========================
   HOW IT WORKS — Premium 4-step Apple-style
======================== */
function HowItWorks() {
  const { ref, isInView } = useInView()
  const [activeIdx, setActiveIdx] = useState(0)
  const trackedStepsRef = useRef<Set<number>>(new Set())

  const steps = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "The PO Lands",
      story: "Purchase order in. Deadline: 48 hours. Every document must be perfect.",
      metric: "Day 0",
      agent: null,
      color: "#64748B",
      accent: "#94A3B8",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      title: "Documents Go In",
      story: "Upload Shipping Bill and Invoice. 40+ fields extracted and cross-matched instantly.",
      metric: "40+ fields",
      agent: "TradeGuard",
      color: "#0066CC",
      accent: "#60A5FA",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Mismatches Caught",
      story: "FOB discrepancy, port conflict, HSN error — flagged in seconds, not at customs.",
      metric: "< 5 sec",
      agent: "TradeGuard",
      color: "#0066CC",
      accent: "#60A5FA",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: "Ship with Confidence",
      story: "Clean documents. Maximized incentives. Customs cleared. You focus on the deal.",
      metric: "100% clean",
      agent: "All Three",
      color: "#00A86B",
      accent: "#34D399",
    },
  ]

  // Auto-advance
  useEffect(() => {
    if (!isInView) return
    const timer = setInterval(() => {
      setActiveIdx(prev => (prev + 1) % 4)
    }, 4000)
    return () => clearInterval(timer)
  }, [isInView])

  useEffect(() => {
    if (!trackedStepsRef.current.has(activeIdx)) {
      trackedStepsRef.current.add(activeIdx)
      trackJourneyStepViewed(activeIdx + 1, steps[activeIdx].title)
    }
  }, [activeIdx])

  return (
    <section
      ref={ref}
      className="py-10 lg:py-14 px-5 lg:px-8 relative"
      style={{ background: "#F8FAFC" }}
    >
      <div className="w-full max-w-[1100px] mx-auto">
        {/* Header */}
        <div className={`text-center mb-8 lg:mb-10 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)" }} />
            <span className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#94A3B8" }}>The Journey</span>
            <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(270deg, #0066CC, #00A86B)" }} />
          </div>
          <h2 className="text-[22px] sm:text-[30px] lg:text-[40px] font-extrabold leading-[1.1] tracking-[-0.02em] mb-2" style={{ color: "#0F172A" }}>
            From purchase order to{" "}
            <span className="bg-gradient-to-r from-[#0066CC] to-[#00A86B] bg-clip-text text-transparent">
              cleared shipment.
            </span>
          </h2>
          <p className="text-[14px] sm:text-[15px] max-w-[400px] mx-auto" style={{ color: "#64748B" }}>
            The entire compliance workflow, in under five minutes.
          </p>
        </div>

        {/* Timeline connector + cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 mb-8">
          {steps.map((step, idx) => {
            const active = activeIdx === idx
            return (
              <div
                key={idx}
                onClick={() => setActiveIdx(idx)}
                onMouseEnter={() => setActiveIdx(idx)}
                className={`journey-card card-shimmer-on-hover relative rounded-2xl p-6 cursor-pointer ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{
                  transitionDelay: `${idx * 120}ms`,
                  transitionDuration: '0.6s',
                  background: active ? '#FFFFFF' : '#FFFFFF',
                  border: active ? `2px solid ${step.color}50` : '1px solid #E2E8F0',
                  boxShadow: active
                    ? `0 16px 48px ${step.color}18, 0 4px 12px rgba(0,0,0,0.05)`
                    : '0 2px 8px rgba(0,0,0,0.04)',
                }}
              >
                {/* Gradient accent top */}
                <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl transition-all duration-500"
                  style={{
                    background: active
                      ? `linear-gradient(90deg, ${step.color}, ${step.accent})`
                      : `linear-gradient(90deg, ${step.color}20, ${step.color}10)`,
                  }} />

                {/* Step number badge */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-all duration-500"
                  style={{
                    background: active ? `linear-gradient(135deg, ${step.color}, ${step.accent})` : '#F1F5F9',
                    color: active ? '#FFFFFF' : '#94A3B8',
                    boxShadow: active ? `0 6px 20px ${step.color}35` : 'none',
                    transform: active ? 'scale(1.1)' : 'scale(1)',
                  }}
                >
                  {active ? step.icon : (
                    <span className="text-[14px] font-black">{String(idx + 1).padStart(2, '0')}</span>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-bold text-[16px] lg:text-[17px] mb-2 leading-snug transition-colors duration-300"
                  style={{ color: active ? '#0F172A' : '#64748B' }}>
                  {step.title}
                </h3>

                {/* Story */}
                <p className="text-[13px] leading-relaxed mb-4 transition-colors duration-300"
                  style={{ color: active ? '#475569' : '#94A3B8' }}>
                  {step.story}
                </p>

                {/* Metric + Agent row */}
                <div className="flex items-center justify-between mt-auto">
                  <span
                    className="inline-flex items-center px-3 py-1.5 rounded-full text-[12px] font-bold transition-all duration-300"
                    style={{
                      background: active ? `${step.color}12` : '#F8FAFC',
                      color: active ? step.color : '#CBD5E1',
                      border: `1px solid ${active ? step.color + '30' : '#E2E8F0'}`,
                    }}
                  >
                    {step.metric}
                  </span>
                  {step.agent && (
                    <span className="text-[11px] font-bold tracking-[0.12em] uppercase transition-colors duration-300"
                      style={{ color: active ? step.color : '#CBD5E1' }}>
                      {step.agent}
                    </span>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Progress dots */}
        <div className="flex justify-center items-center gap-2 mb-8">
          {steps.map((step, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              aria-label={`Step ${idx + 1}: ${step.title}`}
              className="transition-all duration-500"
              style={{
                width: activeIdx === idx ? '32px' : '8px',
                height: '8px',
                borderRadius: '4px',
                background: activeIdx === idx ? step.color : '#CBD5E1',
                boxShadow: activeIdx === idx ? `0 0 0 3px ${step.color}20` : 'none',
              }}
            />
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center transition-all duration-700 delay-400 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Link
            href="/book-demo"
            className="group btn-magnetic btn-glow-pulse btn-shine inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-[15px] text-white overflow-hidden"
            style={{ background: "linear-gradient(135deg, #0066CC, #00A86B)" }}
          >
            Watch It Happen Live
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/20 group-hover:bg-white/30 transition-all duration-300">
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
          <p className="text-[12px] font-mono tracking-wider mt-3 uppercase" style={{ color: '#94A3B8' }}>
            Entire journey under 5 minutes
          </p>
        </div>
      </div>
    </section>
  )
}


/* ========================
   AWARDS SECTION - Clean: photo top, text bottom, no overlay
======================== */
function AwardsSection() {
  const { ref, isInView } = useInView()

  const awards = [
    {
      date: "FEBRUARY 2026",
      title: "Aegis Graham Bell Award",
      subtitle: "16th AGBA Innovation in Gen AI — CX, Sales & GTM Intelligence Category Winner",
      image: "/images/aegis-award.jpg",
      objectPosition: "object-center object-cover",
      logo: "/images/Aegis_award_logo.jpg",
      logoAlt: "Aegis Graham Bell Award",
      accent: "#0066CC",
    },
    {
      date: "JANUARY 2026",
      title: "Karnataka Elevate 2025",
      subtitle: "Selected from 1,474+ applicants — Non-dilutive grant of up to ₹50 Lakhs",
      image: "/images/elevate-felicitation.png",
      objectPosition: "object-top object-contain sm:object-cover",
      logo: "/images/karnataka_itbt_department_logo.png",
      logoAlt: "Karnataka Elevate",
      accent: "#00A86B",
    },
  ]

  return (
    <section ref={ref} className="page-snap flex flex-col justify-center py-8 lg:py-10 px-4 lg:px-8" style={{ background: "#FFFFFF" }}>
      <div className="w-full max-w-[1100px] mx-auto">
        <div className={`flex items-center justify-center gap-3 mb-3 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)" }} />
          <span className="text-[13px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#94A3B8" }}>Recognition</span>
          <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(270deg, #0066CC, #00A86B)" }} />
        </div>
        <h2 className={`text-[26px] sm:text-[30px] lg:text-[40px] font-extrabold text-center leading-[1.1] tracking-[-0.02em] mb-6 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ color: "#0F172A" }}>
          Backed by the{" "}
          <span className="bg-gradient-to-r from-[#0066CC] to-[#00A86B] bg-clip-text text-transparent">best in the industry.</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-5 mb-6">
          {awards.map((award, idx) => (
            <div key={idx}
              onMouseEnter={() => trackAwardInteracted(award.title)}
              className={`relative rounded-2xl group transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              {/* Gradient border shell — 2px gradient edge */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none z-10 transition-opacity duration-500"
                style={{
                  padding: '2px',
                  background: `linear-gradient(135deg, ${award.accent}, #0066CC, #00A86B)`,
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                }}
              />

              {/* Card body */}
              <div
                className="rounded-2xl overflow-hidden relative w-full h-[460px] sm:h-[500px]"
                style={{ background: "#0F172A" }}
              >
                {/* Full Bleed Image */}
                <Image
                  src={award.image}
                  alt={award.title}
                  fill
                  priority
                  className={`${award.objectPosition}`}
                />

                {/* Gradient for text contrast */}
                <div className={`absolute inset-x-0 bottom-0 pointer-events-none z-10 ${idx === 0 ? 'h-[50%] bg-gradient-to-t from-[#0F172A] via-[#0F172A]/95 to-transparent' : 'h-[35%] bg-gradient-to-t from-[#0F172A]/90 to-transparent'}`} />

                {/* Date badge */}
                <div className="absolute top-4 right-4 z-20">
                  <div
                    className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase backdrop-blur-sm"
                    style={{
                      background: award.accent,
                      color: "#FFFFFF",
                      boxShadow: `0 2px 12px ${award.accent}80`,
                    }}
                  >
                    {award.date}
                  </div>
                </div>

                {/* Overlaid Card footer */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-20 flex items-end gap-4">
                  {/* Logo Thumbnail */}
                  <div className="flex-shrink-0 w-[64px] h-[64px] sm:w-[76px] sm:h-[76px] bg-white rounded-xl flex items-center justify-center p-2" 
                        style={{ border: `1px solid ${award.accent}40`, boxShadow: "0 4px 16px rgba(0,0,0,0.2)" }}>
                    <div className="relative w-full h-full">
                      <Image
                        src={award.logo}
                        alt={award.logoAlt}
                        fill
                        className="object-contain"
                        sizes="76px"
                      />
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0 flex flex-col justify-end" style={{ textShadow: "0 2px 10px rgba(0,0,0,0.8)" }}>
                    <div className="h-[2px] w-8 rounded-full mb-2" style={{ background: `linear-gradient(90deg, ${award.accent}, transparent)` }} />
                    <h3 className="text-[16px] sm:text-[19px] font-extrabold mb-1 leading-tight truncate text-white">
                      {award.title}
                    </h3>
                    <p className="text-[13px] sm:text-[14px] leading-snug line-clamp-4 sm:line-clamp-2 text-white">
                      {award.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Backed By - Partner Logos Marquee */}
      <div className="w-full py-5" style={{ background: "#F8FAFC", borderTop: "1px solid #E2E8F0" }}>
        <div className="w-full text-center px-4 relative flex flex-col items-center">
          <p className="text-[13px] font-semibold mb-4 tracking-[0.1em] uppercase" style={{ color: "#94A3B8" }}>Backed by</p>
          <div className="w-full max-w-[1200px] overflow-hidden relative h-20 sm:h-32">
            <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-40 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #F8FAFC, transparent)' }} />
            <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-40 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #F8FAFC, transparent)' }} />

            <div className="flex items-center justify-start gap-8 sm:gap-12 w-max h-full" style={{ animation: 'marquee 40s linear infinite' }}>
              {[
                { src: "/images/nvidia-inception.png", alt: "NVIDIA Inception", w: 360 },
                { src: "/images/aws-powered.png", alt: "AWS Powered", w: 280 },
                { src: "/images/microsoft-startups.png", alt: "Microsoft for Startups", w: 360, css: "scale-[1.35] mix-blend-multiply origin-center" },
                { src: "/images/karnataka_itbt_department_logo.png", alt: "Karnataka Elevate", w: 300 },
                { src: "/images/Aegis_award_logo.jpg", alt: "Aegis Award", w: 280 },
              ].map((logo, i) => (
                <div key={i} onMouseEnter={() => trackPartnerInteracted(logo.alt)} className="flex-shrink-0 h-16 sm:h-24 lg:h-28 relative transition-all duration-300 hover:scale-105" style={{ width: logo.w }}>
                  <Image src={logo.src} alt={logo.alt} fill className={`object-contain ${logo.css || ''}`} />
                </div>
              ))}
              <div className="contents">
                {[
                  { src: "/images/nvidia-inception.png", alt: "NVIDIA Inception", w: 360 },
                  { src: "/images/aws-powered.png", alt: "AWS Powered", w: 280 },
                  { src: "/images/microsoft-startups.png", alt: "Microsoft for Startups", w: 360, css: "scale-[1.35] mix-blend-multiply origin-center" },
                  { src: "/images/karnataka_itbt_department_logo.png", alt: "Karnataka Elevate", w: 300 },
                  { src: "/images/Aegis_award_logo.jpg", alt: "Aegis Award", w: 280 },
                ].map((logo, i) => (
                  <div key={`dup-${i}`} onMouseEnter={() => trackPartnerInteracted(logo.alt)} className="flex-shrink-0 h-16 sm:h-24 lg:h-28 relative transition-all duration-300 hover:scale-105" style={{ width: logo.w }}>
                    <Image src={logo.src} alt={logo.alt} fill className={`object-contain ${logo.css || ''}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


/* ========================
   DEMO VIDEO SECTION
======================== */
function MicroConversionSection() {
  const { ref, isInView } = useInView()
  const hasTrackedRef = useRef(false)

  useEffect(() => {
    if (isInView && !hasTrackedRef.current) {
      hasTrackedRef.current = true
      trackVideoPlayed("Liquidmind AI Demo Section")
    }
  }, [isInView])

  return (
    <section id="video-demo" ref={ref} className="page-snap flex flex-col justify-center py-6 lg:py-8 px-4 lg:px-8" style={{ background: "#F8FAFC" }}>
      <div className="w-full max-w-[800px] mx-auto">

        {/* Header */}
        <div className={`text-center mb-4 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-3 mb-1.5">
            <div className="h-px w-6 rounded-full" style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)" }} />
            <span className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#94A3B8" }}>See It Live</span>
            <div className="h-px w-6 rounded-full" style={{ background: "linear-gradient(270deg, #0066CC, #00A86B)" }} />
          </div>
          <h2 className="text-[20px] sm:text-[26px] lg:text-[32px] font-extrabold leading-[1.1] tracking-[-0.02em] mb-1" style={{ color: "#0F172A" }}>
            See it{" "}
            <span className="bg-gradient-to-r from-[#0066CC] to-[#00A86B] bg-clip-text text-transparent">
              in action.
            </span>
          </h2>
          <p className="text-[13px] sm:text-[14px]" style={{ color: "#64748B" }}>
            A real document audit. No slides, no fluff.
          </p>
        </div>

        {/* Video embed — 16:9 responsive on all screens */}
        <div
          className={`relative rounded-2xl overflow-hidden transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ border: "1px solid #E2E8F0", boxShadow: "0 8px 40px rgba(0,102,204,0.12)" }}
        >
          <div style={{ position: "relative", width: "100%", paddingBottom: "56.25%", height: 0 }}>
            <iframe
              src="https://www.youtube.com/embed/OBuNapaXt2I"
              title="Liquidmind AI Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
            />
          </div>
        </div>

        {/* CTA below video */}
        <div className={`text-center mt-4 transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Link
            href="/book-demo"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-[13px] font-bold btn-shine transition-all hover:scale-105"
            style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)", color: "#FFFFFF", boxShadow: "0 4px 20px rgba(0,102,204,0.3)" }}
          >
            Book a Live Demo
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  )
}
