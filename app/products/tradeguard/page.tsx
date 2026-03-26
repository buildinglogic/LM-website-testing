"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FooterLinks } from "@/components/footer-links"
import { WhatsAppButton } from "@/components/whatsapp-button"
import Link from "next/link"
import { HeroMockup } from "@/components/hero-mockup"
import { ArrowRight, ChevronRight } from "lucide-react"
import { useState, useEffect, useRef } from "react"

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
    const dur = 1400
    const isDecimal = !Number.isInteger(to)
    const tick = (now: number) => {
      const p = Math.min((now - t0) / dur, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setCount(isDecimal ? parseFloat((eased * to).toFixed(1)) : Math.floor(eased * to))
      if (p < 1) frame = requestAnimationFrame(tick)
      else setCount(to)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [started, to])
  return <span ref={ref}>{Number.isInteger(to) ? count : count.toFixed(1)}</span>
}

export default function TradeGuardPage() {
  return (
    <main style={{ background: "#FFFFFF" }}>
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <FeaturesSection />
      <UseCasesSection />
      <ComparisonSection />
      <CTASection />
      <FooterLinks />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}

function HeroSection() {
  const { ref, isInView } = useInView()

  return (
    <section
      ref={ref}
      className="pt-[100px] sm:pt-[120px] lg:pt-[140px] pb-4 sm:pb-6 lg:pb-12 px-4 sm:px-5 lg:px-8 relative overflow-hidden"
      style={{ background: "#FFFFFF" }}
    >
      {/* World map bg */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "url('/images/world-map-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.04,
      }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to bottom, #FFFFFF 0%, transparent 30%, #FFFFFF 100%)" }} />

      <div className="w-full max-w-[1400px] mx-auto relative">

        {/* Breadcrumb */}
        <div className={`flex items-center gap-1.5 mb-3 sm:mb-5 transition-all duration-500 ${isInView ? "opacity-100" : "opacity-0"}`}>
          <Link href="/" className="text-[11px] font-medium transition-colors hover:text-[#0F172A]" style={{ color: "#94A3B8" }}>Home</Link>
          <ChevronRight className="w-3 h-3" style={{ color: "#CBD5E1" }} />
          <Link href="/#products" className="text-[11px] font-medium transition-colors hover:text-[#0F172A]" style={{ color: "#94A3B8" }}>Products</Link>
          <ChevronRight className="w-3 h-3" style={{ color: "#CBD5E1" }} />
          <span className="text-[11px] font-semibold" style={{ color: "#0066CC" }}>TradeGuard</span>
        </div>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-4 sm:gap-6 lg:gap-12 items-center">

          {/* Left: Copy */}
          <div>
            <h1 className={`text-[28px] sm:text-[42px] lg:text-[52px] font-extrabold leading-[1.08] tracking-[-0.02em] mb-4 transition-all duration-700 delay-100 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`} style={{ color: "#0F172A" }}>
              <span className="block text-[32px] sm:text-[48px] lg:text-[58px] bg-gradient-to-r from-[#0066CC] to-[#00A86B] bg-clip-text text-transparent pb-1">TradeGuard</span>
              Catch every mismatch, before customs does.
            </h1>

            <p className={`text-[14px] sm:text-[15px] leading-relaxed mb-4 sm:mb-5 max-w-[480px] transition-all duration-700 delay-200 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`} style={{ color: "#475569" }}>
              Upload your Shipping Bill and Commercial Invoice. TradeGuard cross-checks 40+ fields in under 5 seconds and flags every discrepancy before it reaches customs.
            </p>

            {/* Stats */}
            <div className={`flex flex-wrap items-center gap-4 sm:gap-5 mb-5 transition-all duration-700 delay-300 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <div>
                <div className="text-[20px] sm:text-[28px] font-extrabold leading-none" style={{ color: "#0F172A" }}>
                  <AnimatedCount to={40} />+
                </div>
                <div className="text-[10px] font-medium mt-0.5 uppercase tracking-wide" style={{ color: "#94A3B8" }}>Fields</div>
              </div>
              <div className="w-px h-8 flex-shrink-0" style={{ background: "#E2E8F0" }} />
              <div>
                <div className="text-[20px] sm:text-[28px] font-extrabold leading-none" style={{ color: "#0F172A" }}>
                  <AnimatedCount to={95} />%
                </div>
                <div className="text-[10px] font-medium mt-0.5 uppercase tracking-wide" style={{ color: "#94A3B8" }}>Accuracy</div>
              </div>
              <div className="w-px h-8 flex-shrink-0" style={{ background: "#E2E8F0" }} />
              <div>
                <div className="text-[20px] sm:text-[28px] font-extrabold leading-none" style={{ color: "#0F172A" }}>&lt;5s</div>
                <div className="text-[10px] font-medium mt-0.5 uppercase tracking-wide" style={{ color: "#94A3B8" }}>Analysis</div>
              </div>
            </div>

            {/* CTAs */}
            <div className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-3 transition-all duration-700 delay-[400ms] ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <Link
                href="/book-demo"
                className="w-full sm:w-[160px] inline-flex items-center justify-center gap-2 py-3.5 rounded-xl text-[14px] font-bold btn-shine transition-all duration-300 hover:scale-[1.03] overflow-hidden"
                style={{ background: "linear-gradient(135deg, #0066CC, #00A86B)", color: "#FFFFFF", boxShadow: "0 4px 25px rgba(0,102,204,0.3)" }}
              >
                Book a Demo <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/demo/tradeguard"
                className="w-full sm:w-[160px] inline-flex items-center justify-center gap-2 py-3.5 rounded-xl text-[14px] font-semibold transition-all duration-300 hover:scale-[1.03]"
                style={{ background: "#FFFFFF", border: "2px solid #0066CC", boxShadow: "0 4px 20px rgba(0,102,204,0.12)" }}
              >
                <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #0066CC, #00A86B)" }}>
                  <svg className="w-2 h-2 text-white" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                </div>
                <span className="bg-gradient-to-r from-[#0066CC] to-[#00A86B] bg-clip-text text-transparent">Watch Demo</span>
              </Link>
            </div>
          </div>

          {/* Right: HeroMockup — visible on all screens */}
          <div className={`transition-all duration-700 delay-200 ${isInView ? "opacity-100 translate-y-0 lg:translate-x-0" : "opacity-0 translate-y-8 lg:translate-x-8"}`}>
            <HeroMockup animated={isInView} />
          </div>
        </div>
      </div>
    </section>
  )
}

function ProblemSection() {
  const { ref, isInView } = useInView()

  const problems = [
    {
      num: "01",
      title: "One wrong field can hold your shipment",
      body: "A single FOB value difference of even 1% between SB and Invoice is enough for customs to flag and delay your cargo for days.",
    },
    {
      num: "02",
      title: "Manual checking misses 20–30% of errors",
      body: "Human reviewers working through 40+ fields across two documents under time pressure miss critical mismatches — every single time.",
    },
    {
      num: "03",
      title: "Port codes trap experienced teams",
      body: "INNSA1, NHAVA SHEVA, JNPT — three names for the same port. Different systems use different formats. Manual matching is a guessing game.",
    },
    {
      num: "04",
      title: "Drawback claims rejected for tiny discrepancies",
      body: "DGFT rejects RoDTEP and Drawback claims for the smallest errors. Months of follow-up to recover money that should never have been lost.",
    },
  ]

  return (
    <section ref={ref} className="py-8 lg:py-12 px-4 sm:px-5 lg:px-8" style={{ background: "#F8FAFC" }}>
      <div className="w-full max-w-[1100px] mx-auto">

        <div className={`text-center mb-6 sm:mb-8 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)" }} />
            <span className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#94A3B8" }}>The Problem</span>
            <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(270deg, #0066CC, #00A86B)" }} />
          </div>
          <h2 className="text-[22px] sm:text-[30px] lg:text-[38px] font-extrabold leading-[1.1] tracking-[-0.02em]" style={{ color: "#0F172A" }}>
            Why manual checking{" "}
            <span className="bg-gradient-to-r from-[#0066CC] to-[#00A86B] bg-clip-text text-transparent">always fails.</span>
          </h2>
        </div>

        {/* Editorial 4-column strip */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 transition-all duration-700 delay-100 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ borderTop: "1px solid #E2E8F0", borderBottom: "1px solid #E2E8F0" }}
        >
          {problems.map((p, idx) => (
            <div
              key={idx}
              className={`relative pt-6 pb-8 px-5 lg:px-7 flex flex-col overflow-hidden transition-all duration-300 hover:bg-white group sm:border-r sm:last:border-r-0 lg:border-r ${idx < 3 ? "lg:border-r" : "lg:border-r-0"} border-b last:border-b-0 lg:border-b-0`}
              style={{ borderColor: "#E2E8F0" }}
            >
              {/* Large watermark number */}
              <span
                className="absolute -top-2 -right-1 text-[96px] font-black leading-none select-none pointer-events-none transition-all duration-500 group-hover:opacity-100"
                style={{ color: "#0066CC0F", letterSpacing: "-0.04em" }}
              >
                {p.num}
              </span>

              {/* Small accent number */}
              <div className="flex items-center gap-2 mb-5">
                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #0066CC20, #00A86B10)" }}>
                  <span className="text-[10px] font-black" style={{ color: "#0066CC" }}>{idx + 1}</span>
                </div>
                <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, #0066CC30, transparent)" }} />
              </div>

              <p className="text-[13px] sm:text-[14px] font-bold leading-snug mb-2.5 relative z-10" style={{ color: "#0F172A" }}>{p.title}</p>
              <p className="text-[12px] leading-relaxed relative z-10" style={{ color: "#64748B" }}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeaturesSection() {
  const { ref, isInView } = useInView()

  const features = [
    {
      title: "40+ fields extracted automatically",
      body: "Exporter details, HSN codes, FOB value, port codes, IEC numbers, quantities — every critical field pulled from both documents.",
    },
    {
      title: "Semantic port code matching",
      body: "TradeGuard understands that INNSA1, NHAVA SHEVA, and JNPT are the same port. No false positives from format differences.",
    },
    {
      title: "Results in under 5 seconds",
      body: "From upload to complete mismatch report in under 5 seconds. No waiting, no manual comparison, no guessing.",
    },
    {
      title: "Every finding is traceable",
      body: "Click any flagged field to see exactly where it was extracted in the original document. Full audit trail, zero ambiguity.",
    },
    {
      title: "Color-coded severity levels",
      body: "Critical mismatches, warnings, and matches each get distinct visual treatment. Prioritize fixes at a glance.",
    },
    {
      title: "Human-in-the-loop review",
      body: "AI flags the issues, you make the final call. Review, approve, or override any detection before it goes forward.",
    },
  ]

  return (
    <section ref={ref} className="py-8 lg:py-12 px-4 sm:px-5 lg:px-8" style={{ background: "#FFFFFF" }}>
      <div className="w-full max-w-[1100px] mx-auto">

        <div className={`text-center mb-6 sm:mb-8 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)" }} />
            <span className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#94A3B8" }}>How It Works</span>
            <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(270deg, #0066CC, #00A86B)" }} />
          </div>
          <h2 className="text-[22px] sm:text-[30px] lg:text-[38px] font-extrabold leading-[1.1] tracking-[-0.02em]" style={{ color: "#0F172A" }}>
            What{" "}
            <span className="bg-gradient-to-r from-[#0066CC] to-[#00A86B] bg-clip-text text-transparent">TradeGuard</span>{" "}
            does for you.
          </h2>
        </div>

        {/* Two-column feature list with blue left accent */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-0 transition-all duration-700 delay-100 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          {features.map((f, idx) => (
            <div
              key={idx}
              className="flex gap-3 sm:gap-4 py-4 sm:py-5 transition-all duration-300 hover:translate-x-1"
              style={{ borderBottom: "1px solid #F1F5F9" }}
            >
              <div className="flex flex-col items-center flex-shrink-0 pt-0.5">
                <div className="w-0.5 h-full rounded-full" style={{ background: "linear-gradient(to bottom, #0066CC, #0066CC20)", minHeight: "48px" }} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[10px] font-black tracking-widest" style={{ color: "#0066CC" }}>{String(idx + 1).padStart(2, "0")}</span>
                  <h3 className="text-[13px] sm:text-[14px] font-bold leading-snug" style={{ color: "#0F172A" }}>{f.title}</h3>
                </div>
                <p className="text-[11px] sm:text-[12px] leading-relaxed" style={{ color: "#64748B" }}>{f.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function UseCasesSection() {
  const { ref, isInView } = useInView()
  const [activeIdx, setActiveIdx] = useState(0)

  type FieldStatus = "match" | "mismatch"
  interface DiffField { label: string; sb: string; inv: string; status: FieldStatus }
  interface UseCase { tag: string; scenario: string; fields: DiffField[]; finding: string }

  const useCases: UseCase[] = [
    {
      tag: "FOB Value Mismatch",
      scenario: "DGFT rejected Drawback claim — ₹42,000 value gap",
      fields: [
        { label: "Exporter Name", sb: "RAJESH EXPORTS LTD", inv: "RAJESH EXPORTS LTD", status: "match" },
        { label: "IEC Number", sb: "0508004381", inv: "0508004381", status: "match" },
        { label: "HSN Code", sb: "6109.10", inv: "6109.10", status: "match" },
        { label: "FOB Value", sb: "₹18,42,500", inv: "₹18,00,500", status: "mismatch" },
        { label: "Currency", sb: "INR", inv: "INR", status: "match" },
      ],
      finding: "FOB value gap of ₹42,000 exceeded DGFT 0.5% tolerance. Correct Invoice before re-filing.",
    },
    {
      tag: "Port Code Conflict",
      scenario: "Customs hold — port code format mismatch",
      fields: [
        { label: "Exporter Name", sb: "SPICE ROUTE PVT LTD", inv: "SPICE ROUTE PVT LTD", status: "match" },
        { label: "Port of Loading", sb: "INNSA1", inv: "NHAVA SHEVA", status: "mismatch" },
        { label: "Country of Dest.", sb: "GERMANY", inv: "GERMANY", status: "match" },
        { label: "Unit of Quantity", sb: "KGS", inv: "KGS", status: "match" },
        { label: "Shipping Mode", sb: "SEA", inv: "SEA", status: "match" },
      ],
      finding: "INNSA1 and NHAVA SHEVA are the same port. ICEGATE requires INNSA1. Standardise Invoice.",
    },
    {
      tag: "HSN Code Error",
      scenario: "3 shipments flagged — wrong 8-digit HSN sub-class",
      fields: [
        { label: "Exporter Name", sb: "TEXCRAFT INDIA LTD", inv: "TEXCRAFT INDIA LTD", status: "match" },
        { label: "HSN Code", sb: "5208.11", inv: "5208.12", status: "mismatch" },
        { label: "Description", sb: "WOVEN COTTON FABRIC", inv: "WOVEN COTTON FABRIC", status: "match" },
        { label: "FOB Value", sb: "₹9,12,000", inv: "₹9,12,000", status: "match" },
        { label: "Net Weight", sb: "1,200 KGS", inv: "1,200 KGS", status: "match" },
      ],
      finding: "Sub-classification 5208.12 triggers duty re-assessment. Update Invoice template to 5208.11.",
    },
  ]

  useEffect(() => {
    const t = setInterval(() => setActiveIdx(p => (p + 1) % useCases.length), 4000)
    return () => clearInterval(t)
  }, [useCases.length])

  return (
    <section ref={ref} id="use-cases" className="py-8 lg:py-10 px-4 sm:px-5 lg:px-8" style={{ background: "#F8FAFC" }}>
      <div className="w-full max-w-[860px] mx-auto">

        <div className={`text-center mb-6 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)" }} />
            <span className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#94A3B8" }}>Real Cases, Real Fixes</span>
            <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(270deg, #0066CC, #00A86B)" }} />
          </div>
          <h2 className="text-[22px] sm:text-[30px] lg:text-[38px] font-extrabold leading-[1.1] tracking-[-0.02em]" style={{ color: "#0F172A" }}>
            Mismatches TradeGuard{" "}
            <span className="bg-gradient-to-r from-[#0066CC] to-[#00A86B] bg-clip-text text-transparent">catches every day.</span>
          </h2>
        </div>

        <div className={`transition-all duration-700 delay-100 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>

          {/* Tab selectors */}
          <div className="flex items-center justify-center gap-2 mb-4 flex-wrap px-2 sm:px-0" style={{ maxWidth: "720px", margin: "0 auto 16px" }}>
            {useCases.map((u, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIdx(idx)}
                className="px-3 sm:px-4 py-2 rounded-lg text-[11px] sm:text-[12px] font-semibold transition-all duration-300"
                style={{
                  background: activeIdx === idx ? "#0066CC" : "#FFFFFF",
                  color: activeIdx === idx ? "#FFFFFF" : "#64748B",
                  border: activeIdx === idx ? "1px solid #0066CC" : "1px solid #E2E8F0",
                }}
              >
                {u.tag}
              </button>
            ))}
          </div>

          {/* Cards — stacked crossfade on sm+, single visible on mobile */}
          <div className="relative sm:h-[390px]" style={{ maxWidth: "720px", margin: "0 auto" }}>
            {useCases.map((u, idx) => (
              <div
                key={idx}
                className="sm:absolute sm:inset-0 transition-all duration-500"
                style={{
                  opacity: activeIdx === idx ? 1 : 0,
                  pointerEvents: activeIdx === idx ? "auto" : "none",
                  display: activeIdx === idx ? "block" : "none",
                }}
              >
                <div className="rounded-2xl overflow-hidden sm:h-full flex flex-col" style={{ border: "1px solid #E2E8F0", boxShadow: "0 8px 40px rgba(0,0,0,0.07)" }}>

                  {/* Header */}
                  <div className="flex items-center gap-2 px-4 py-2.5 flex-shrink-0" style={{ background: "#FFFFFF", borderBottom: "1px solid #F1F5F9" }}>
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                      </div>
                      <span className="text-[12px] font-bold ml-1 flex-shrink-0" style={{ color: "#0F172A" }}>TradeGuard</span>
                    </div>
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full truncate min-w-0" style={{ background: "#EFF6FF", color: "#0066CC" }}>{u.scenario}</span>
                  </div>

                  {/* Column labels */}
                  <div className="grid grid-cols-[1fr_40px_1fr] flex-shrink-0" style={{ background: "#F8FAFC", borderBottom: "1px solid #F1F5F9" }}>
                    <div className="px-3 py-2 text-[9px] font-bold uppercase tracking-wide" style={{ color: "#0066CC" }}>Shipping Bill</div>
                    <div />
                    <div className="px-3 py-2 text-[9px] font-bold uppercase tracking-wide text-right" style={{ color: "#64748B" }}>Comm. Invoice</div>
                  </div>

                  {/* Field rows */}
                  <div className="flex-1 overflow-hidden">
                    {u.fields.map((f, fi) => {
                      const isMismatch = f.status === "mismatch"
                      return (
                        <div
                          key={fi}
                          className="grid grid-cols-[1fr_40px_1fr]"
                          style={{ height: "42px", background: isMismatch ? "rgba(220,38,38,0.04)" : fi % 2 === 0 ? "#FFFFFF" : "#FAFAFA", borderBottom: "1px solid #F1F5F9" }}
                        >
                          <div className="px-3 flex flex-col justify-center min-w-0">
                            <span className="text-[8px] font-medium uppercase tracking-wide leading-none mb-0.5" style={{ color: "#94A3B8" }}>{f.label}</span>
                            <span className="text-[11px] font-semibold truncate" style={{ color: "#0F172A" }}>{f.sb}</span>
                          </div>
                          <div className="flex items-center justify-center">
                            {isMismatch ? (
                              <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ background: "rgba(220,38,38,0.12)" }}>
                                <span className="text-[10px]" style={{ color: "#DC2626" }}>✗</span>
                              </div>
                            ) : (
                              <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ background: "rgba(0,168,107,0.12)" }}>
                                <span className="text-[10px]" style={{ color: "#00A86B" }}>✓</span>
                              </div>
                            )}
                          </div>
                          <div className="px-3 flex flex-col justify-center items-end min-w-0">
                            <span className="text-[8px] font-medium uppercase tracking-wide leading-none mb-0.5" style={{ color: "#94A3B8" }}>{f.label}</span>
                            <span className="text-[11px] font-semibold truncate" style={{ color: isMismatch ? "#DC2626" : "#475569" }}>{f.inv}</span>
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  {/* Finding bar */}
                  <div className="flex-shrink-0 px-5 py-3 flex items-start gap-3" style={{ background: "rgba(220,38,38,0.05)", borderTop: "1px solid #FEE2E2" }}>
                    <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "rgba(220,38,38,0.15)" }}>
                      <span className="text-[9px] font-bold" style={{ color: "#DC2626" }}>!</span>
                    </div>
                    <p className="text-[11px] leading-snug" style={{ color: "#475569" }}>
                      <span className="font-semibold" style={{ color: "#DC2626" }}>TradeGuard finding: </span>{u.finding}
                    </p>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ComparisonSection() {
  const { ref, isInView } = useInView()

  const metrics = [
    { metric: "Check Time", manual: "2–4 hours", tradeguard: "< 5 seconds" },
    { metric: "Fields Checked", manual: "~10 (fatigue sets in)", tradeguard: "40+ every time" },
    { metric: "Accuracy", manual: "70–80%", tradeguard: "95%" },
    { metric: "Semantic Matching", manual: "Impossible", tradeguard: "Built-in" },
    { metric: "Audit Trail", manual: "None", tradeguard: "Complete" },
    { metric: "Cost per Check", manual: "Staff hours", tradeguard: "Fraction of a rupee" },
  ]

  return (
    <section ref={ref} className="py-8 lg:py-12 px-4 sm:px-5 lg:px-8" style={{ background: "#FFFFFF" }}>
      <div className="w-full max-w-[860px] mx-auto">

        <div className={`text-center mb-6 sm:mb-8 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)" }} />
            <span className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#94A3B8" }}>Why TradeGuard</span>
            <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(270deg, #0066CC, #00A86B)" }} />
          </div>
          <h2 className="text-[22px] sm:text-[30px] lg:text-[38px] font-extrabold leading-[1.1] tracking-[-0.02em]" style={{ color: "#0F172A" }}>
            Manual checking vs{" "}
            <span className="bg-gradient-to-r from-[#0066CC] to-[#00A86B] bg-clip-text text-transparent">TradeGuard.</span>
          </h2>
        </div>

        <div
          className={`rounded-2xl overflow-hidden transition-all duration-700 delay-100 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ border: "1px solid #E2E8F0" }}
        >
          <div className="grid grid-cols-[0.8fr_1fr_1fr] sm:grid-cols-[1fr_1fr_1fr]" style={{ background: "#F8FAFC", borderBottom: "1px solid #E2E8F0" }}>
            <div className="py-2.5 px-2 sm:px-3 text-[8px] sm:text-[9px] font-bold uppercase tracking-wide" style={{ color: "#94A3B8" }}>Metric</div>
            <div className="py-2.5 px-2 sm:px-3 text-[8px] sm:text-[9px] font-bold uppercase tracking-wide" style={{ color: "#94A3B8" }}>Manual</div>
            <div className="py-2.5 px-2 sm:px-3 text-[8px] sm:text-[9px] font-bold uppercase tracking-wide" style={{ color: "#0066CC" }}>TradeGuard</div>
          </div>
          {metrics.map((row, idx) => (
            <div key={idx} className="grid grid-cols-[0.8fr_1fr_1fr] sm:grid-cols-[1fr_1fr_1fr]" style={{ borderTop: "1px solid #F1F5F9" }}>
              <div className="py-2.5 sm:py-3 px-2 sm:px-3 text-[10px] sm:text-[12px] font-medium leading-snug" style={{ color: "#475569" }}>{row.metric}</div>
              <div className="py-2.5 sm:py-3 px-2 sm:px-3 text-[10px] sm:text-[12px] leading-snug" style={{ color: "#94A3B8" }}>{row.manual}</div>
              <div className="py-2.5 sm:py-3 px-2 sm:px-3 text-[10px] sm:text-[12px] font-semibold leading-snug" style={{ color: "#0066CC" }}>{row.tradeguard}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  const { ref, isInView } = useInView()

  return (
    <section ref={ref} className="py-10 lg:py-14 px-4 sm:px-5 lg:px-8 relative overflow-hidden" style={{ background: "#0066CC" }}>
      {/* Subtle texture */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "url('/images/world-map-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.06,
      }} />
      <div className={`max-w-[640px] mx-auto text-center relative transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-8 rounded-full" style={{ background: "rgba(255,255,255,0.3)" }} />
          <span className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: "rgba(255,255,255,0.7)" }}>Get Started</span>
          <div className="h-px w-8 rounded-full" style={{ background: "rgba(255,255,255,0.3)" }} />
        </div>
        <h2 className="text-[22px] sm:text-[28px] lg:text-[34px] font-extrabold leading-[1.1] tracking-[-0.02em] mb-3 text-white">
          Stop losing money to document errors.
        </h2>
        <p className="text-[14px] leading-relaxed mb-7" style={{ color: "rgba(255,255,255,0.8)" }}>
          Every mismatch you miss is money walking out the door. Let TradeGuard catch them all before customs does.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 sm:px-0">
          <Link
            href="/book-demo"
            className="w-full sm:w-[168px] inline-flex items-center justify-center gap-2 py-3.5 rounded-xl text-[14px] font-bold btn-shine transition-all duration-300 hover:scale-[1.03] overflow-hidden"
            style={{ background: "#FFFFFF", color: "#0066CC", boxShadow: "0 4px 25px rgba(0,0,0,0.15)" }}
          >
            Book a Demo <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="/#products"
            className="w-full sm:w-[168px] inline-flex items-center justify-center gap-2 py-3.5 rounded-xl text-[14px] font-semibold transition-all duration-300 hover:scale-[1.03]"
            style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.3)", color: "#FFFFFF" }}
          >
            Other Products
          </Link>
        </div>
      </div>
    </section>
  )
}
