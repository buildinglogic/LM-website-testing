"use client"

import { Navigation } from "@/components/navigation"
import { HeroMockup } from "@/components/hero-mockup"
import { ProductsSection } from "@/components/products-section"
import { ProductsHero } from "@/components/products-hero"
import { ROICalculator } from "@/components/roi-calculator"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { FooterLinks } from "@/components/footer-links"
import { WhatsAppButton } from "@/components/whatsapp-button"
import Image from "next/image"
import Link from "next/link"
import React, { useEffect, useRef, useState } from "react"
import { trackBookDemoCTAClick, trackWatchDemoClick, trackJourneyStepViewed, trackPartnerInteracted, trackVideoPlayed, trackAwardInteracted } from "@/lib/amplitude"

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
      <ProductsHero />
      <HeroSection />
      <ProductsSection />
      <ProblemSection />
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
    { to: 7, suffix: "%", prefix: "3–", line1: "FOB value", line2: "at risk" },
  ] as { to: number; suffix: string; line1: string; line2: string; prefix?: string }[]

  return (
    <section
      className="page-snap lg:min-h-[100svh] pt-[130px] lg:pt-[124px] pb-20 lg:pb-10 px-4 lg:px-8 flex items-start lg:items-center relative overflow-hidden"
    >
      {/* Blurred world map background */}
      <div className="absolute inset-0 scale-110 pointer-events-none" style={{
        backgroundImage: `url('/images/world-map-bg.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'blur(3px)',
      }} />
      {/* White overlay — light enough to see map, strong enough to keep text crisp */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'rgba(255,255,255,0.78)',
      }} />

      <div className="w-full max-w-[1400px] mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-10 lg:items-center">

          <div className="lg:pl-8 xl:pl-16">

            {/* Label */}
            <div className="flex items-center gap-2 mb-3 lg:mb-5 animate-fade-in">
              <div className="h-px w-6 flex-shrink-0 rounded-full" style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)" }} />
              <span className="text-[13px] lg:text-[13px] font-semibold tracking-[0.16em] uppercase" style={{ color: "#94A3B8" }}>
                <span className="sm:hidden">India's #1 AI Platform</span>
                <span className="hidden sm:inline">India's #1 AI Trade Compliance Platform</span>
              </span>
            </div>

            <h1 className="text-[32px] lg:text-[60px] font-extrabold leading-[1.1] tracking-[-0.03em] mb-2 lg:mb-4 animate-fade-in-up stagger-1" style={{ color: "#0F172A" }}>
              Stop Losing<br />
              <span className="bg-gradient-to-r from-[#0066CC] to-[#00A86B] bg-clip-text text-transparent">Crores</span> to Trade<br />
              Document Errors.
            </h1>

            <p className="text-[15px] lg:text-[18px] leading-[1.55] max-w-[460px] mb-3 lg:mb-8 animate-fade-in-up stagger-2" style={{ color: "#475569" }}>
              Indian exporters lose 3–7% of FOB value every month to document mismatches.
              Liquidmind AI catches every error before customs does.
            </p>

            {/* Compact inline stats */}
            <div className="flex items-start gap-0 mb-3 lg:mb-8 animate-fade-in-up stagger-3">
              {stats.map((stat, idx) => (
                <React.Fragment key={idx}>
                  <div className="flex flex-col">
                    <span className="text-[26px] lg:text-[36px] font-black tracking-tight leading-none tabular-nums whitespace-nowrap" style={{ color: "#0066CC" }}>
                      {stat.prefix}<AnimatedCount to={stat.to} />{stat.suffix}
                    </span>
                    <span className="text-[13px] lg:text-[12px] font-medium leading-[1.3] mt-1" style={{ color: "#94A3B8" }}>
                      {stat.line1}<br />{stat.line2}
                    </span>
                  </div>
                  {idx < 2 && (
                    <div className="w-px mx-3 lg:mx-6 mt-1" style={{ height: "36px", background: "#E2E8F0" }} />
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* CTAs — stacked on mobile, row on sm+ */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 lg:gap-3 animate-fade-in-up stagger-4">
              <Link href="/book-demo"
                onClick={() => trackBookDemoCTAClick('Hero')}
                className="px-5 py-2.5 lg:px-6 lg:py-3 rounded-xl text-[15px] font-bold btn-shine haptic-btn inline-flex items-center justify-center gap-2"
                style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)", color: "#FFFFFF", boxShadow: "0 4px 25px rgba(0,102,204,0.35)" }}>
                Book Free Demo
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>

              <button
                onClick={() => {
                  trackWatchDemoClick('Hero')
                  document.getElementById('video-demo')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 lg:px-6 lg:py-3 rounded-xl transition-all hover:scale-105 haptic-btn"
                style={{ background: "#FFFFFF", border: "2px solid #0066CC", boxShadow: "0 4px 20px rgba(0,102,204,0.18)" }}>
                <div className="relative flex-shrink-0 w-5 h-5">
                  <span className="absolute inset-0 rounded-full animate-ping opacity-25" style={{ background: "#0066CC" }} />
                  <span className="relative w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #0066CC, #00A86B)" }}>
                    <svg className="w-2.5 h-2.5 ml-px" fill="white" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </div>
                <span className="text-[15px] font-bold bg-gradient-to-r from-[#0066CC] to-[#00A86B] bg-clip-text text-transparent">Watch Demo</span>
              </button>
            </div>
          </div>

          <div className="mt-3 lg:mt-0 animate-slide-in-right">
            <div className="hidden lg:block">
              <HeroMockup animated={true} />
            </div>
            <div className="block lg:hidden">
              <HeroMockup animated={false} />
            </div>
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
      number: "95%",
      title: "Accuracy Needed for Compliance",
      body: "One wrong digit in HSN code or port abbreviation can reject your entire drawback claim.",
      citation: "Industry Standard"
    },
  ]

  return (
    <section
      ref={ref}
      className="page-snap py-10 lg:min-h-screen lg:flex lg:flex-col lg:justify-center lg:py-6 px-4 lg:px-8 relative overflow-hidden"
    >
      {/* Blurred map layer — scale-110 prevents blur from showing edges */}
      <div className="absolute inset-0 scale-110 pointer-events-none" style={{
        backgroundImage: `url('/images/world-map-bg.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'blur(3px)',
      }} />
      {/* White gradient overlay on top of blurred map */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'linear-gradient(180deg, rgba(255,255,255,0.82) 0%, rgba(248,250,252,0.90) 100%)',
      }} />

      <div className="w-full max-w-[1000px] mx-auto relative">
        <div className={`text-center mb-5 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 flex-shrink-0 rounded-full" style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)" }} />
            <span className="text-[13px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#94A3B8" }}>
              The Cost of Doing Nothing
            </span>
            <div className="h-px w-8 flex-shrink-0 rounded-full" style={{ background: "linear-gradient(270deg, #0066CC, #00A86B)" }} />
          </div>
          <h2 className="text-[26px] lg:text-[40px] font-bold leading-tight" style={{ color: "#0F172A" }}>
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
            <span className="text-[13px] lg:text-[12px] font-mono font-semibold tracking-[0.08em] lg:tracking-[0.15em] uppercase text-center" style={{ color: "#94A3B8" }}>
              ₹2,40,000+ at risk in an average shipment
            </span>
            <div className="h-px w-12 rounded-full" style={{ background: "linear-gradient(270deg, transparent, #CBD5E1)" }} />
          </div>

          <a href="#products"
            className="group btn-cta-glow btn-shine haptic-btn relative inline-flex items-center gap-3 px-6 py-3 lg:px-9 lg:py-4 rounded-2xl text-white font-extrabold text-[15px] lg:text-[17px] tracking-tight overflow-hidden"
            style={{ background: "linear-gradient(90deg, #0066CC 0%, #00A86B 100%)" }}>
            <span className="absolute left-0 right-0 h-px top-0 opacity-40" style={{ background: "linear-gradient(90deg, transparent, #ffffff, transparent)", animation: "shimmer 2s linear infinite" }} />
            <span className="relative">
              <span className="lg:hidden">See Tradeguard in Action</span>
              <span className="hidden lg:inline">Stop Losing Money. See Tradeguard in Action</span>
            </span>
            <span className="relative inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors">
              <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
              </svg>
            </span>
          </a>

          <span className="text-[13px]" style={{ color: "#94A3B8" }}>
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
          {React.cloneElement(problem.icon as React.ReactElement<{ className?: string }>, { className: "w-4 h-4" })}
        </div>

        {/* Big number */}
        <div className="text-[28px] lg:text-[30px] font-black tracking-tight leading-none mb-1.5"
          style={{ color: "#0066CC" }}>
          {problem.number}
        </div>

        {/* Title */}
        <div className="font-semibold text-[14px] lg:text-[14px] leading-snug mb-2" style={{ color: "#0F172A" }}>
          {problem.title}
        </div>

        {/* Body */}
        <div className="text-[12px] leading-relaxed line-clamp-2 mb-2" style={{ color: "#64748B" }}>
          {problem.body}
        </div>

        {/* Citation */}
        <div className="text-[11px] font-mono uppercase tracking-wider" style={{ color: "#94A3B8" }}>
          {problem.citation}
        </div>
      </div>
    </div>
  )
}

/* ========================
   HOW IT WORKS - Exporter Journey
======================== */
function HowItWorks() {
  const { ref, isInView } = useInView()
  const [activeIdx, setActiveIdx] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)
  const isUserScrolling = useRef(false)
  const autoTimerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const trackedStepsRef = useRef<Set<number>>(new Set())

  // Sync dot to whichever card is ≥60% visible in the scroll container
  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    const cards = Array.from(container.children) as HTMLElement[]

    const observers = cards.map((card, idx) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
            setActiveIdx(idx)
            if (!trackedStepsRef.current.has(idx)) {
              trackedStepsRef.current.add(idx)
              trackJourneyStepViewed(idx + 1, steps[idx].title)
            }
          }
        },
        {
          root: container,
          threshold: 0.6,
        }
      )
      observer.observe(card)
      return observer
    })

    return () => observers.forEach(o => o.disconnect())
  }, [])

  // Auto-advance when in view and user isn't dragging
  useEffect(() => {
    if (!isInView) return
    autoTimerRef.current = setInterval(() => {
      if (isUserScrolling.current) return
      setActiveIdx(prev => {
        const next = (prev + 1) % 5
        scrollToCard(next)
        return next
      })
    }, 5000)
    return () => { if (autoTimerRef.current) clearInterval(autoTimerRef.current) }
  }, [isInView])

  const scrollToCard = (idx: number) => {
    const container = scrollRef.current
    if (!container) return
    const cards = Array.from(container.children) as HTMLElement[]
    const card = cards[idx]
    if (!card) return
    const targetLeft = card.offsetLeft - (container.offsetWidth - card.offsetWidth) / 2
    container.scrollTo({ left: targetLeft, behavior: 'smooth' })
  }

  const goToCard = (idx: number) => {
    setActiveIdx(idx)
    scrollToCard(idx)
  }

  const handleTouchStart = () => { isUserScrolling.current = true }
  const handleTouchEnd = () => {
    // Small delay to let IntersectionObserver fire after scroll settles
    setTimeout(() => { isUserScrolling.current = false }, 500)
  }

  const steps = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "The PO lands.",
      story: "A purchase order hits your inbox. Export deadline: 48 hours. Every document must be perfect — or the refund disappears.",
      metric: "Day 0",
      agent: null,
      color: "#64748B",
      accent: "#94A3B8",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Classify in 10 sec.",
      story: "What's the HSN? What duty applies? Wrong code = blocked drawback. TariffIQ answers in 10 seconds. No guesswork. No customs roulette.",
      metric: "< 10 sec",
      agent: "TariffIQ",
      color: "#2563EB",
      accent: "#93C5FD",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      title: "Docs go in.",
      story: "Shipping Bill. Commercial Invoice. Both uploaded. Tradeguard extracts 40+ fields and begins cross-matching them automatically.",
      metric: "40+ fields",
      agent: "Tradeguard",
      color: "#0066CC",
      accent: "#60A5FA",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Mismatch? Caught.",
      story: "FOB value off by $700. Port abbreviation conflict. Flagged in 4 seconds — not at the customs gate where it costs you ₹58,000.",
      metric: "₹58K protected",
      agent: "Tradeguard",
      color: "#0066CC",
      accent: "#60A5FA",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: "Ship with confidence.",
      story: "Documents clean. Drawback filed. Patram confirms no export restrictions on your lane. Customs cleared. You focus on what's next.",
      metric: "100% clean",
      agent: "All Three",
      color: "#00A86B",
      accent: "#34D399",
    },
  ]

  return (
    <section
      ref={ref}
      className="page-snap py-8 lg:min-h-screen lg:flex lg:flex-col lg:justify-center lg:py-10 px-4 lg:px-8 relative"
      style={{ background: "#FFFFFF" }}
    >
      {/* Header */}
      <div className={`text-center mb-8 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)" }} />
          <span className="text-[13px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#94A3B8" }}>The Journey</span>
          <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(270deg, #0066CC, #00A86B)" }} />
        </div>
        <h2 className="text-[30px] lg:text-[46px] font-extrabold leading-tight mb-2" style={{ color: "#0F172A" }}>
          You focus on the deal.{" "}
          <span className="bg-gradient-to-r from-[#0066CC] to-[#00A86B] bg-clip-text text-transparent">
            We handle the compliance.
          </span>
        </h2>
        <p className="text-[15px]" style={{ color: "#64748B" }}>Five moments. One exporter. Zero stress.</p>
      </div>

      {/* Step cards */}
      <div className="w-full max-w-[1300px] mx-auto mb-5">
        <div
          ref={scrollRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="flex lg:grid lg:grid-cols-5 gap-3 overflow-x-auto scrollbar-none pb-2 lg:overflow-x-visible"
          style={{ scrollSnapType: 'x mandatory', touchAction: 'pan-x' }}
        >
          {steps.map((step, idx) => {
            const active = activeIdx === idx
            return (
              <div
                key={idx}
                onClick={() => goToCard(idx)}
                onMouseEnter={() => { isUserScrolling.current = true; setActiveIdx(idx) }}
                onMouseLeave={() => { isUserScrolling.current = false }}
                className={`flex-shrink-0 w-[82vw] sm:w-[55vw] lg:w-auto lg:flex-shrink relative rounded-2xl p-4 cursor-pointer transition-all duration-400 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{
                  scrollSnapAlign: 'center',
                  transitionDelay: `${idx * 80}ms`,
                  background: active ? `linear-gradient(145deg, ${step.color}08, #FFFFFF)` : '#FAFAFA',
                  border: active ? `1.5px solid ${step.color}40` : '1.5px solid #E2E8F0',
                  boxShadow: active
                    ? `0 8px 32px ${step.color}18, 0 2px 8px rgba(0,0,0,0.04)`
                    : '0 1px 4px rgba(0,0,0,0.04)',
                  transform: active ? 'translateY(-4px)' : 'translateY(0)',
                }}
              >
                {/* Faded step number */}
                <div className="absolute top-2 right-3 font-black select-none pointer-events-none leading-none"
                  style={{
                    fontSize: '56px',
                    color: active ? `${step.color}12` : 'rgba(0,0,0,0.04)',
                    transition: 'color 400ms',
                  }}>
                  {String(idx + 1).padStart(2, '0')}
                </div>

                {/* Icon */}
                <div className="w-10 h-10 rounded-full flex items-center justify-center mb-3 relative z-10 transition-all duration-400"
                  style={{
                    background: active ? `linear-gradient(135deg, ${step.color}, ${step.accent})` : '#F1F5F9',
                    boxShadow: active ? `0 4px 16px ${step.color}40` : 'none',
                    color: active ? '#fff' : '#94A3B8',
                  }}>
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="font-bold text-[16px] lg:text-[16px] mb-1.5 leading-snug transition-colors duration-300"
                  style={{ color: active ? '#0F172A' : '#64748B' }}>
                  {step.title}
                </h3>

                {/* Story */}
                <p className="text-[14px] leading-relaxed mb-3 transition-colors duration-300"
                  style={{ color: active ? '#475569' : '#94A3B8' }}>
                  {step.story}
                </p>

                {/* Metric chip */}
                <div className="inline-flex items-center px-2.5 py-1 rounded-full text-[13px] font-bold transition-all duration-300"
                  style={{
                    background: active ? `${step.color}12` : '#F1F5F9',
                    color: active ? step.color : '#94A3B8',
                    border: `1px solid ${active ? step.color + '30' : '#E2E8F0'}`,
                  }}>
                  {step.metric}
                </div>

                {/* Agent badge */}
                {step.agent && (
                  <div className="flex items-center gap-1.5 mt-2">
                    <div className="w-1.5 h-1.5 rounded-full transition-all duration-300"
                      style={{ background: active ? step.color : '#CBD5E1' }} />
                    <span className="text-[12px] font-bold tracking-[0.14em] uppercase transition-colors duration-300"
                      style={{ color: active ? step.color : '#CBD5E1' }}>
                      {step.agent}
                    </span>
                  </div>
                )}

                {/* Active top accent line */}
                <div className="absolute top-0 left-4 right-4 h-[2px] rounded-b-full transition-all duration-400"
                  style={{ background: active ? `linear-gradient(90deg, transparent, ${step.color}, transparent)` : 'transparent' }} />
              </div>
            )
          })}
        </div>
      </div>

      {/* Pagination — large, labelled, always in sync */}
      <div className="flex justify-center items-center gap-3 mb-6">
        {steps.map((step, idx) => (
          <button
            key={idx}
            onClick={() => goToCard(idx)}
            aria-label={`Step ${idx + 1}: ${step.title}`}
            className="relative flex flex-col items-center gap-1 group"
            style={{ minWidth: '28px' }}
          >
            {/* Pill dot */}
            <div
              className="rounded-full transition-all duration-300"
              style={{
                width: activeIdx === idx ? '32px' : '10px',
                height: '10px',
                background: activeIdx === idx ? step.color : '#CBD5E1',
                boxShadow: activeIdx === idx ? `0 0 0 3px ${step.color}25` : 'none',
              }}
            />
            {/* Step number label — visible on mobile only when active */}
            <span
              className="text-[10px] font-bold transition-all duration-300 lg:hidden"
              style={{
                color: activeIdx === idx ? step.color : 'transparent',
                position: 'absolute',
                top: '14px',
                whiteSpace: 'nowrap',
              }}
            >
              {idx + 1}/{steps.length}
            </span>
          </button>
        ))}
      </div>

      {/* CTA */}
      <div className={`text-center transition-all duration-700 delay-400 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <p className="text-[13px] font-mono tracking-widest mb-4" style={{ color: '#CBD5E1' }}>
          — ENTIRE JOURNEY UNDER 5 MINUTES —
        </p>
        <Link
          href="/book-demo"
          className="inline-flex items-center gap-2.5 px-7 py-3 rounded-xl font-bold text-[15px] text-white transition-all hover:scale-105 haptic-btn btn-shine"
          style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)", boxShadow: "0 4px 24px rgba(0,102,204,0.35)" }}
        >
          Watch It Happen Live
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </Link>
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
        <h2 className={`text-[28px] lg:text-[40px] font-extrabold text-center mb-6 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ color: "#0F172A" }}>
          Recognised.{" "}
          <span className="bg-gradient-to-r from-[#0066CC] to-[#00A86B] bg-clip-text text-transparent">Validated.</span>{" "}
          Trusted.
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
      <div className="w-full py-4" style={{ background: "#F8FAFC", borderTop: "1px solid #E2E8F0" }}>
        <div className="w-full text-center px-4 relative flex flex-col items-center">
          <p className="text-[16px] font-medium mb-4 tracking-wide" style={{ color: "#64748B" }}>Backed by leading technology partners & institutions</p>
          <div className="w-full max-w-[1200px] max-w-[100vw] overflow-hidden relative h-16 sm:h-24">
            {/* Gradient Fades for edges - All views */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #F8FAFC, transparent)' }} />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #F8FAFC, transparent)' }} />

            <div className="flex items-center justify-start gap-6 sm:gap-10 lg:gap-16 w-max animate-marquee h-full pt-1 pb-1">
              {/* Group 1 */}
              {[
                { src: "/images/nvidia-inception.png", alt: "NVIDIA Inception", w: 220 },
                { src: "/images/aws-powered.png", alt: "AWS Powered", w: 160 },
                { src: "/images/microsoft-startups.png", alt: "Microsoft for Startups", w: 220, css: "scale-[1.35] mix-blend-multiply origin-center" },
                { src: "/images/karnataka_itbt_department_logo.png", alt: "Karnataka Elevate", w: 180 },
                { src: "/images/Aegis_award_logo.jpg", alt: "Aegis Award", w: 160 },
              ].map((logo, i) => (
                <div key={i} onMouseEnter={() => trackPartnerInteracted(logo.alt)} className="flex-shrink-0 h-12 sm:h-16 lg:h-20 relative transition-all duration-300 hover:scale-105" style={{ width: logo.w * 0.95 }}>
                  <Image src={logo.src} alt={logo.alt} fill className={`object-contain ${logo.css || ''}`} />
                </div>
              ))}
              {/* Group 2 (Duplicate for infinite seamless scroll universally) */}
              <div className="contents">
                {[
                  { src: "/images/nvidia-inception.png", alt: "NVIDIA Inception", w: 220 },
                  { src: "/images/aws-powered.png", alt: "AWS Powered", w: 160 },
                  { src: "/images/microsoft-startups.png", alt: "Microsoft for Startups", w: 220, css: "scale-[1.35] mix-blend-multiply origin-center" },
                  { src: "/images/karnataka_itbt_department_logo.png", alt: "Karnataka Elevate", w: 180 },
                  { src: "/images/Aegis_award_logo.jpg", alt: "Aegis Award", w: 160 },
                ].map((logo, i) => (
                  <div key={`dup-${i}`} onMouseEnter={() => trackPartnerInteracted(logo.alt)} className="flex-shrink-0 h-12 sm:h-16 lg:h-20 relative transition-all duration-300 hover:scale-105" style={{ width: logo.w * 0.95 }}>
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
    <section id="video-demo" ref={ref} className="page-snap flex flex-col justify-center py-8 lg:py-10 px-4 lg:px-8" style={{ background: "#F8FAFC" }}>
      <div className="w-full max-w-[900px] mx-auto">

        {/* Header */}
        <div className={`text-center mb-4 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-3 mb-1.5">
            <div className="h-px w-6 rounded-full" style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)" }} />
            <span className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#94A3B8" }}>See It Live</span>
            <div className="h-px w-6 rounded-full" style={{ background: "linear-gradient(270deg, #0066CC, #00A86B)" }} />
          </div>
          <h2 className="text-[20px] lg:text-[28px] font-extrabold leading-tight mb-1" style={{ color: "#0F172A" }}>
            Watch Liquidmind AI{" "}
            <span className="bg-gradient-to-r from-[#0066CC] to-[#00A86B] bg-clip-text text-transparent">
              in Action
            </span>
          </h2>
          <p className="text-[12px] sm:text-[13px]" style={{ color: "#64748B" }}>
            A real document audit, live on screen. No slides. No fluff.
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
