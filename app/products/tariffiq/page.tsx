"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FooterLinks } from "@/components/footer-links"
import { WhatsAppButton } from "@/components/whatsapp-button"
import Link from "next/link"
import { ArrowRight, ChevronRight } from "lucide-react"
import { useState, useEffect, useRef } from "react"

const NAVY = "#1B4F8A"

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { setIsInView(entry.isIntersecting) },
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

export default function TariffIQPage() {
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
      className="pt-[112px] pb-16 lg:pb-20 px-5 lg:px-8 relative overflow-hidden"
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
        <div className={`flex items-center gap-1.5 mb-8 transition-all duration-500 ${isInView ? "opacity-100" : "opacity-0"}`}>
          <Link href="/" className="text-[11px] font-medium transition-colors hover:text-[#0F172A]" style={{ color: "#94A3B8" }}>Home</Link>
          <ChevronRight className="w-3 h-3" style={{ color: "#CBD5E1" }} />
          <Link href="/#products" className="text-[11px] font-medium transition-colors hover:text-[#0F172A]" style={{ color: "#94A3B8" }}>Products</Link>
          <ChevronRight className="w-3 h-3" style={{ color: "#CBD5E1" }} />
          <span className="text-[11px] font-semibold" style={{ color: NAVY }}>TariffIQ</span>
        </div>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-center">

          {/* Left: Copy */}
          <div>
            <div className={`flex items-center gap-3 mb-4 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(90deg, #1B4F8A, #0066CC)" }} />
              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#94A3B8" }}>TariffIQ</span>
            </div>

            <h1 className={`text-[26px] sm:text-[42px] lg:text-[52px] font-extrabold leading-[1.1] tracking-[-0.02em] mb-4 transition-all duration-700 delay-100 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`} style={{ color: "#0F172A" }}>
              Classify right, claim{" "}
              <span className="bg-gradient-to-r from-[#1B4F8A] to-[#0066CC] bg-clip-text text-transparent">every rupee.</span>
            </h1>

            <p className={`text-[15px] sm:text-[16px] leading-relaxed mb-6 max-w-[480px] transition-all duration-700 delay-200 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`} style={{ color: "#475569" }}>
              Describe your product in plain English. TariffIQ classifies it to 8-digit ITC-HS and instantly shows whether RoDTEP or Duty Drawback earns you more.
            </p>

            {/* Stats */}
            <div className={`flex items-center gap-5 mb-7 transition-all duration-700 delay-300 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <div>
                <div className="text-[22px] sm:text-[28px] font-extrabold leading-none" style={{ color: "#0F172A" }}>
                  <AnimatedCount to={95} />%
                </div>
                <div className="text-[10px] font-medium mt-0.5 uppercase tracking-wide" style={{ color: "#94A3B8" }}>Accuracy</div>
              </div>
              <div className="w-px h-8 flex-shrink-0" style={{ background: "#E2E8F0" }} />
              <div>
                <div className="text-[22px] sm:text-[28px] font-extrabold leading-none" style={{ color: "#0F172A" }}>
                  <AnimatedCount to={21000} />+
                </div>
                <div className="text-[10px] font-medium mt-0.5 uppercase tracking-wide" style={{ color: "#94A3B8" }}>HSN codes</div>
              </div>
              <div className="w-px h-8 flex-shrink-0" style={{ background: "#E2E8F0" }} />
              <div>
                <div className="text-[22px] sm:text-[28px] font-extrabold leading-none" style={{ color: "#0F172A" }}>&lt;3s</div>
                <div className="text-[10px] font-medium mt-0.5 uppercase tracking-wide" style={{ color: "#94A3B8" }}>Classify</div>
              </div>
            </div>

            {/* CTAs */}
            <div className={`flex flex-row items-stretch gap-3 transition-all duration-700 delay-[400ms] ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <Link
                href="/book-demo"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 py-3.5 rounded-xl text-[14px] font-bold btn-shine transition-all duration-300 hover:scale-[1.03] overflow-hidden"
                style={{ width: "160px", background: "linear-gradient(135deg, #1B4F8A, #0066CC)", color: "#FFFFFF", boxShadow: "0 4px 25px rgba(27,79,138,0.3)" }}
              >
                Book a Demo <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/demo/tariffiq"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 py-3.5 rounded-xl text-[14px] font-semibold transition-all duration-300 hover:scale-[1.03]"
                style={{ width: "160px", background: "#FFFFFF", border: "2px solid #1B4F8A", boxShadow: "0 4px 20px rgba(27,79,138,0.12)" }}
              >
                <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #1B4F8A, #0066CC)" }}>
                  <svg className="w-2 h-2 text-white" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                </div>
                <span className="bg-gradient-to-r from-[#1B4F8A] to-[#0066CC] bg-clip-text text-transparent">Watch Demo</span>
              </Link>
            </div>
          </div>

          {/* Right: TariffIQ Classification Card */}
          <div className={`hidden lg:block transition-all duration-700 delay-200 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <TariffIQCard isActive={isInView} />
          </div>
        </div>
      </div>
    </section>
  )
}

function TariffIQCard({ isActive }: { isActive: boolean }) {
  const [step, setStep] = useState(0)

  useEffect(() => {
    if (!isActive) { setStep(0); return }
    let s = 0
    const interval = setInterval(() => {
      s++
      if (s <= 3) setStep(s)
      else if (s > 7) { s = 0; setStep(0) }
    }, 1100)
    return () => clearInterval(interval)
  }, [isActive])

  return (
    <div
      className="w-full flex flex-col overflow-hidden animate-float"
      style={{
        height: "435px",
        borderRadius: "20px",
        background: "#FFFFFF",
        border: "1px solid #E2E8F0",
        boxShadow: "0 32px 100px rgba(27,79,138,0.18), 0 12px 40px rgba(0,0,0,0.06)",
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-2.5 px-4 pt-3 pb-2.5 flex-shrink-0" style={{ borderBottom: "1px solid #F1F5F9" }}>
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
        </div>
        <div className="flex-1 ml-1">
          <p className="text-[13px] font-bold leading-none" style={{ color: "#0F172A" }}>TariffIQ</p>
          <p className="text-[10px] mt-0.5" style={{ color: "#94A3B8" }}>HSN Classification & Duty Calculator</p>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg flex-shrink-0 transition-all duration-500" style={{ background: step >= 2 ? "#EFF6FF" : "transparent", border: step >= 2 ? "1px solid #DBEAFE" : "1px solid transparent" }}>
          <span className="text-[10px] font-bold transition-all duration-500" style={{ color: step >= 2 ? NAVY : "transparent" }}>95% match</span>
        </div>
      </div>

      {/* Input row */}
      <div className="px-4 pt-2.5 pb-2.5 flex-shrink-0" style={{ borderBottom: "1px solid #F8FAFC" }}>
        <p className="text-[9px] font-semibold uppercase tracking-widest mb-1" style={{ color: "#94A3B8" }}>Product Description</p>
        <div className="flex items-center gap-2 px-3 py-2 rounded-xl" style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}>
          <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="#94A3B8" strokeWidth={2}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          <span className="text-[12px]" style={{ color: "#0F172A" }}>Basmati rice, aged 2 years, for export to UAE</span>
          {step === 0 && <span className="animate-pulse text-[12px]" style={{ color: NAVY }}>|</span>}
        </div>
      </div>

      {/* Result area — fixed layout, no flex-1 growth */}
      <div className="px-4 pt-2.5 pb-3 flex flex-col gap-2.5 overflow-hidden" style={{ flex: "1 1 0" }}>

        {/* HSN result */}
        <div
          className="rounded-xl px-4 py-2.5 transition-all duration-500 flex-shrink-0"
          style={{
            background: step >= 1 ? "#EFF6FF" : "#F8FAFC",
            border: `1px solid ${step >= 1 ? "#DBEAFE" : "#E2E8F0"}`,
            opacity: step >= 1 ? 1 : 0.4,
          }}
        >
          {step === 1 ? (
            <div className="flex items-center gap-2 py-1">
              <div className="flex gap-1">
                {[0,1,2].map(i => (
                  <span key={i} className="w-1.5 h-1.5 rounded-full animate-bounce" style={{ background: NAVY, animationDelay: `${i * 150}ms` }} />
                ))}
              </div>
              <span className="text-[11px]" style={{ color: "#64748B" }}>Searching 21,000+ HSN codes...</span>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-widest mb-0.5" style={{ color: "#94A3B8" }}>ITC-HS Code</p>
                <p className="text-[20px] font-mono font-extrabold leading-none" style={{ color: NAVY }}>1006.30.20</p>
              </div>
              <div className="w-px h-7" style={{ background: "#DBEAFE" }} />
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-widest mb-0.5" style={{ color: "#94A3B8" }}>Description</p>
                <p className="text-[12px] font-medium" style={{ color: "#0F172A" }}>Semi-milled or wholly milled rice</p>
              </div>
            </div>
          )}
        </div>

        {/* Incentive comparison */}
        <div
          className="grid grid-cols-2 gap-2 flex-shrink-0 transition-all duration-500"
          style={{ opacity: step >= 2 ? 1 : 0, transform: step >= 2 ? "translateY(0)" : "translateY(8px)" }}
        >
          <div className="rounded-xl px-3 py-2.5" style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}>
            <p className="text-[9px] font-semibold uppercase tracking-widest mb-1" style={{ color: "#94A3B8" }}>RoDTEP Rate</p>
            <p className="text-[18px] font-extrabold leading-none" style={{ color: "#64748B" }}>0.5%</p>
            <p className="text-[10px] mt-0.5" style={{ color: "#94A3B8" }}>of FOB value</p>
          </div>
          <div className="rounded-xl px-3 py-2.5 relative overflow-hidden" style={{ background: "rgba(0,168,107,0.07)", border: "1px solid rgba(0,168,107,0.25)" }}>
            <p className="text-[9px] font-semibold uppercase tracking-widest mb-1" style={{ color: "#00A86B" }}>Duty Drawback</p>
            <p className="text-[18px] font-extrabold leading-none" style={{ color: "#00A86B" }}>1.2%</p>
            <p className="text-[10px] mt-0.5" style={{ color: "#00A86B" }}>of FOB value</p>
            <span className="absolute top-2 right-2 text-[8px] font-extrabold px-1.5 py-0.5 rounded" style={{ background: "#00A86B", color: "#FFFFFF" }}>BETTER</span>
          </div>
        </div>

        {/* Saving callout */}
        <div
          className="rounded-xl px-3.5 py-2.5 flex items-center gap-2.5 flex-shrink-0 transition-all duration-500"
          style={{
            background: step >= 3 ? "rgba(27,79,138,0.06)" : "transparent",
            border: step >= 3 ? "1px solid rgba(27,79,138,0.15)" : "1px solid transparent",
            opacity: step >= 3 ? 1 : 0,
            transform: step >= 3 ? "translateY(0)" : "translateY(6px)",
          }}
        >
          <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #1B4F8A, #0066CC)" }}>
            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <div>
            <p className="text-[11px] font-bold leading-tight" style={{ color: "#0F172A" }}>Switch to Drawback — save 0.7% per shipment</p>
            <p className="text-[10px]" style={{ color: "#64748B" }}>On ₹50L FOB: extra ₹35,000 per shipment</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function ProblemSection() {
  const { ref, isInView } = useInView()

  const problems = [
    {
      num: "01",
      title: "A single wrong digit costs lakhs",
      body: "One HSN digit error means wrong duty rates, rejected Drawback claims, and customs delays. With 21,000+ codes, manual selection is a guessing game.",
    },
    {
      num: "02",
      title: "RoDTEP vs Drawback — most exporters pick blind",
      body: "Both schemes exist for the same shipment but most exporters pick one without comparing. The difference can be 40–60% of total incentive value.",
    },
    {
      num: "03",
      title: "2–4 hours of manual research per classification",
      body: "Cross-referencing schedules, rate notifications, and DGFT circulars is a full-time job. Most teams don't have the bandwidth to do it properly.",
    },
    {
      num: "04",
      title: "Stale rates trigger surprise duties at customs",
      body: "Duty rates change with every budget and notification. Exporters working from outdated data face unexpected levies, delays, and compliance notices.",
    },
  ]

  return (
    <section ref={ref} className="py-10 lg:py-14 px-5 lg:px-8" style={{ background: "#F8FAFC" }}>
      <div className="w-full max-w-[1100px] mx-auto">

        <div className={`text-center mb-10 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(90deg, #1B4F8A, #0066CC)" }} />
            <span className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#94A3B8" }}>The Problem</span>
            <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(270deg, #1B4F8A, #0066CC)" }} />
          </div>
          <h2 className="text-[22px] sm:text-[30px] lg:text-[38px] font-extrabold leading-[1.1] tracking-[-0.02em]" style={{ color: "#0F172A" }}>
            Why HSN classification{" "}
            <span className="bg-gradient-to-r from-[#1B4F8A] to-[#0066CC] bg-clip-text text-transparent">always goes wrong.</span>
          </h2>
        </div>

        {/* Editorial 4-column strip */}
        <div
          className={`grid grid-cols-2 lg:grid-cols-4 transition-all duration-700 delay-100 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ borderTop: "1px solid #E2E8F0", borderBottom: "1px solid #E2E8F0" }}
        >
          {problems.map((p, idx) => (
            <div
              key={idx}
              className={`relative pt-6 pb-8 px-5 lg:px-7 flex flex-col overflow-hidden transition-all duration-300 hover:bg-white group ${idx < 3 ? "border-r" : ""} ${idx < 2 ? "border-b lg:border-b-0" : ""}`}
              style={{ borderColor: "#E2E8F0" }}
            >
              <span
                className="absolute -top-2 -right-1 text-[96px] font-black leading-none select-none pointer-events-none"
                style={{ color: "#1B4F8A0F", letterSpacing: "-0.04em" }}
              >
                {p.num}
              </span>
              <div className="flex items-center gap-2 mb-5">
                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #1B4F8A20, #0066CC10)" }}>
                  <span className="text-[10px] font-black" style={{ color: NAVY }}>{idx + 1}</span>
                </div>
                <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, #1B4F8A30, transparent)" }} />
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
      title: "Plain-English product description",
      body: "Type your product the way you'd describe it to a colleague. TariffIQ understands materials, use cases, and trade context — no codes needed.",
    },
    {
      title: "8-digit ITC-HS classification",
      body: "AI searches all 21,000+ HSN codes using semantic matching. Returns the exact 8-digit code with 95% accuracy and a confidence score.",
    },
    {
      title: "RoDTEP vs Drawback side-by-side",
      body: "Both incentive rates shown instantly for your HSN code. Know which scheme pays more before you file — never leave money on the table.",
    },
    {
      title: "Live duty rate lookup",
      body: "Real-time BCD, IGST, and Cess rates for any product. Calculate exact landed costs and duty liability in under 3 seconds.",
    },
    {
      title: "Export policy status",
      body: "Instantly see if your product is Free, Restricted, or Prohibited for export. Know the required licenses before you commit to a shipment.",
    },
    {
      title: "Always up-to-date",
      body: "Rate notifications, budget changes, and DGFT circulars are reflected immediately. You're never working from stale data.",
    },
  ]

  return (
    <section ref={ref} className="py-10 lg:py-14 px-5 lg:px-8" style={{ background: "#FFFFFF" }}>
      <div className="w-full max-w-[1100px] mx-auto">

        <div className={`text-center mb-10 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(90deg, #1B4F8A, #0066CC)" }} />
            <span className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#94A3B8" }}>How It Works</span>
            <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(270deg, #1B4F8A, #0066CC)" }} />
          </div>
          <h2 className="text-[22px] sm:text-[30px] lg:text-[38px] font-extrabold leading-[1.1] tracking-[-0.02em]" style={{ color: "#0F172A" }}>
            What{" "}
            <span className="bg-gradient-to-r from-[#1B4F8A] to-[#0066CC] bg-clip-text text-transparent">TariffIQ</span>{" "}
            does for you.
          </h2>
        </div>

        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-0 transition-all duration-700 delay-100 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          {features.map((f, idx) => (
            <div
              key={idx}
              className="flex gap-4 py-5 transition-all duration-300 hover:translate-x-1"
              style={{ borderBottom: "1px solid #F1F5F9" }}
            >
              <div className="flex flex-col items-center flex-shrink-0 pt-0.5">
                <div className="w-0.5 h-full rounded-full" style={{ background: "linear-gradient(to bottom, #1B4F8A, #1B4F8A20)", minHeight: "48px" }} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[10px] font-black tracking-widest" style={{ color: NAVY }}>{String(idx + 1).padStart(2, "0")}</span>
                  <h3 className="text-[14px] font-bold leading-snug" style={{ color: "#0F172A" }}>{f.title}</h3>
                </div>
                <p className="text-[12px] leading-relaxed" style={{ color: "#64748B" }}>{f.body}</p>
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

  interface ClassificationCase {
    tag: string
    product: string
    hsn: string
    hsnDesc: string
    confidence: string
    rodtep: string
    drawback: string
    winner: "rodtep" | "drawback"
    saving: string
    note: string
  }

  const cases: ClassificationCase[] = [
    {
      tag: "Spices Export",
      product: "Turmeric powder, dried and ground, for retail packaging export to EU",
      hsn: "0910.30.30",
      hsnDesc: "Turmeric (curcuma) — ground",
      confidence: "97%",
      rodtep: "1%",
      drawback: "0.15%",
      winner: "rodtep",
      saving: "0.85% extra",
      note: "On ₹25L FOB: additional ₹21,250 per shipment by choosing RoDTEP over Drawback",
    },
    {
      tag: "Textile Classification",
      product: "100% cotton woven fabric, plain weave, 200 gsm, bleached, for garment export",
      hsn: "5208.12.90",
      hsnDesc: "Woven fabrics of cotton — plain weave, bleached",
      confidence: "94%",
      rodtep: "3.5%",
      drawback: "0%",
      winner: "rodtep",
      saving: "3.5% extra",
      note: "No Drawback available for this code — RoDTEP at 3.5% is the only incentive scheme",
    },
    {
      tag: "Electronics Import",
      product: "Laptop computer, 15.6 inch, Intel Core i7, 16GB RAM, for commercial import",
      hsn: "8471.30.10",
      hsnDesc: "Portable automatic data processing machines",
      confidence: "99%",
      rodtep: "0.9%",
      drawback: "1%",
      winner: "drawback",
      saving: "0.1% extra",
      note: "Drawback marginally better — choose based on compliance overhead and filing timeline",
    },
  ]

  useEffect(() => {
    if (!isInView) return
    const t = setInterval(() => setActiveIdx(p => (p + 1) % cases.length), 4500)
    return () => clearInterval(t)
  }, [isInView, cases.length])

  return (
    <section ref={ref} id="use-cases" className="py-10 lg:py-12 px-5 lg:px-8" style={{ background: "#F8FAFC" }}>
      <div className="w-full max-w-[860px] mx-auto">

        <div className={`text-center mb-6 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(90deg, #1B4F8A, #0066CC)" }} />
            <span className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#94A3B8" }}>Live Classification</span>
            <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(270deg, #1B4F8A, #0066CC)" }} />
          </div>
          <h2 className="text-[22px] sm:text-[30px] lg:text-[38px] font-extrabold leading-[1.1] tracking-[-0.02em]" style={{ color: "#0F172A" }}>
            Products{" "}
            <span className="bg-gradient-to-r from-[#1B4F8A] to-[#0066CC] bg-clip-text text-transparent">TariffIQ classifies</span>
            {" "}instantly.
          </h2>
        </div>

        <div className={`transition-all duration-700 delay-100 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>

          {/* Tab selectors — fixed height, no wrapping */}
          <div className="flex gap-2 mb-4" style={{ maxWidth: "720px", margin: "0 auto 16px" }}>
            {cases.map((c, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIdx(idx)}
                className="flex-1 flex items-center justify-center text-center rounded-lg text-[10px] font-semibold transition-all duration-300"
                style={{
                  height: "40px",
                  background: activeIdx === idx ? NAVY : "#FFFFFF",
                  color: activeIdx === idx ? "#FFFFFF" : "#64748B",
                  border: activeIdx === idx ? `1px solid ${NAVY}` : "1px solid #E2E8F0",
                  lineHeight: "1.2",
                }}
              >
                {c.tag}
              </button>
            ))}
          </div>

          {/* Cards — always fixed height, absolute stacked, opacity crossfade */}
          <div className="relative" style={{ height: "420px", maxWidth: "720px", margin: "0 auto" }}>
            {cases.map((c, idx) => (
              <div
                key={idx}
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                  opacity: activeIdx === idx ? 1 : 0,
                  pointerEvents: activeIdx === idx ? "auto" : "none",
                }}
              >
                <div className="rounded-2xl overflow-hidden h-full flex flex-col" style={{ border: "1px solid #E2E8F0", boxShadow: "0 8px 40px rgba(0,0,0,0.07)" }}>

                  {/* Header */}
                  <div className="flex items-center justify-between px-5 py-3 flex-shrink-0" style={{ background: "#FFFFFF", borderBottom: "1px solid #F1F5F9" }}>
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                      </div>
                      <span className="text-[12px] font-bold ml-1" style={{ color: "#0F172A" }}>TariffIQ</span>
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full" style={{ background: "#EFF6FF", color: NAVY }}>{c.confidence} confidence</span>
                  </div>

                  {/* Product input */}
                  <div className="px-5 py-3 flex-1 overflow-hidden" style={{ background: "#FAFBFF", borderBottom: "1px solid #F1F5F9" }}>
                    <p className="text-[9px] font-semibold uppercase tracking-widest mb-1" style={{ color: "#94A3B8" }}>Product Description</p>
                    <p className="text-[12px] leading-snug" style={{ color: "#475569" }}>{c.product}</p>
                  </div>

                  {/* HSN result row */}
                  <div className="px-5 py-3 flex items-center gap-4 flex-shrink-0" style={{ background: "#FFFFFF", borderBottom: "1px solid #F1F5F9" }}>
                    <div>
                      <p className="text-[9px] font-semibold uppercase tracking-widest mb-0.5" style={{ color: "#94A3B8" }}>ITC-HS Code</p>
                      <p className="text-[20px] font-mono font-extrabold leading-none" style={{ color: NAVY }}>{c.hsn}</p>
                    </div>
                    <div className="w-px h-8 flex-shrink-0" style={{ background: "#E2E8F0" }} />
                    <div>
                      <p className="text-[9px] font-semibold uppercase tracking-widest mb-0.5" style={{ color: "#94A3B8" }}>Classification</p>
                      <p className="text-[12px] font-semibold" style={{ color: "#0F172A" }}>{c.hsnDesc}</p>
                    </div>
                  </div>

                  {/* Incentive comparison */}
                  <div className="px-5 py-3 grid grid-cols-2 gap-3 flex-shrink-0" style={{ background: "#F8FAFC", borderBottom: "1px solid #F1F5F9" }}>
                    <div className="rounded-xl px-3.5 py-2.5" style={{
                      background: c.winner === "rodtep" ? "rgba(27,79,138,0.08)" : "#FFFFFF",
                      border: c.winner === "rodtep" ? `1px solid rgba(27,79,138,0.25)` : "1px solid #E2E8F0",
                    }}>
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-[9px] font-semibold uppercase tracking-widest" style={{ color: "#94A3B8" }}>RoDTEP</p>
                        {c.winner === "rodtep" && <span className="text-[8px] font-extrabold px-1.5 py-0.5 rounded" style={{ background: NAVY, color: "#FFFFFF" }}>BETTER</span>}
                      </div>
                      <p className="text-[18px] font-extrabold leading-none" style={{ color: c.winner === "rodtep" ? NAVY : "#94A3B8" }}>{c.rodtep}</p>
                    </div>
                    <div className="rounded-xl px-3.5 py-2.5" style={{
                      background: c.winner === "drawback" ? "rgba(0,168,107,0.07)" : "#FFFFFF",
                      border: c.winner === "drawback" ? "1px solid rgba(0,168,107,0.25)" : "1px solid #E2E8F0",
                    }}>
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-[9px] font-semibold uppercase tracking-widest" style={{ color: "#94A3B8" }}>Drawback</p>
                        {c.winner === "drawback" && <span className="text-[8px] font-extrabold px-1.5 py-0.5 rounded" style={{ background: "#00A86B", color: "#FFFFFF" }}>BETTER</span>}
                      </div>
                      <p className="text-[18px] font-extrabold leading-none" style={{ color: c.winner === "drawback" ? "#00A86B" : "#94A3B8" }}>{c.drawback}</p>
                    </div>
                  </div>

                  {/* Saving note */}
                  <div className="flex-shrink-0 px-5 py-3 flex items-start gap-3" style={{ background: "rgba(27,79,138,0.04)", borderTop: "1px solid rgba(27,79,138,0.08)" }}>
                    <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "linear-gradient(135deg, #1B4F8A, #0066CC)" }}>
                      <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <p className="text-[11px] leading-snug" style={{ color: "#475569" }}>
                      <span className="font-semibold" style={{ color: NAVY }}>TariffIQ insight: </span>{c.note}
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
    { metric: "Classify Time", manual: "2–4 hrs", tariffiq: "< 3 seconds" },
    { metric: "Accuracy", manual: "60–70%", tariffiq: "95%" },
    { metric: "HSN Codes", manual: "Limited", tariffiq: "21,000+" },
    { metric: "Incentives", manual: "Manual", tariffiq: "Auto compare" },
    { metric: "Rate Updates", manual: "Manual", tariffiq: "Real-time" },
    { metric: "Policy Status", manual: "DGFT", tariffiq: "Instant" },
  ]

  return (
    <section ref={ref} className="py-10 lg:py-14 px-5 lg:px-8" style={{ background: "#FFFFFF" }}>
      <div className="w-full max-w-[860px] mx-auto">

        <div className={`text-center mb-10 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(90deg, #1B4F8A, #0066CC)" }} />
            <span className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#94A3B8" }}>Why TariffIQ</span>
            <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(270deg, #1B4F8A, #0066CC)" }} />
          </div>
          <h2 className="text-[22px] sm:text-[30px] lg:text-[38px] font-extrabold leading-[1.1] tracking-[-0.02em]" style={{ color: "#0F172A" }}>
            Manual research vs{" "}
            <span className="bg-gradient-to-r from-[#1B4F8A] to-[#0066CC] bg-clip-text text-transparent">TariffIQ.</span>
          </h2>
        </div>

        <div
          className={`rounded-2xl overflow-hidden transition-all duration-700 delay-100 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ border: "1px solid #E2E8F0" }}
        >
          <div className="grid grid-cols-[1.3fr_1fr_1.2fr]" style={{ background: "#F8FAFC", borderBottom: "1px solid #E2E8F0" }}>
            <div className="py-2.5 px-3 text-[10px] font-bold uppercase tracking-wide" style={{ color: "#94A3B8" }}>Metric</div>
            <div className="py-2.5 px-3 text-[10px] font-bold uppercase tracking-wide" style={{ color: "#94A3B8" }}>Manual</div>
            <div className="py-2.5 px-3 text-[10px] font-bold uppercase tracking-wide" style={{ color: NAVY }}>TariffIQ</div>
          </div>
          {metrics.map((row, idx) => (
            <div key={idx} className="grid grid-cols-[1.3fr_1fr_1.2fr] items-center" style={{ height: "50px", borderTop: "1px solid #F1F5F9" }}>
              <div className="px-3 text-[12px] font-medium" style={{ color: "#475569" }}>{row.metric}</div>
              <div className="px-3 text-[12px]" style={{ color: "#94A3B8" }}>{row.manual}</div>
              <div className="px-3 text-[12px] font-semibold" style={{ color: NAVY }}>{row.tariffiq}</div>
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
    <section ref={ref} className="py-12 lg:py-16 px-5 lg:px-8 relative overflow-hidden" style={{ background: NAVY }}>
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
          Stop leaving incentives on the table.
        </h2>
        <p className="text-[14px] leading-relaxed mb-7" style={{ color: "rgba(255,255,255,0.8)" }}>
          Every shipment you classify manually is a missed opportunity. Let TariffIQ find the right code and the better incentive — every time.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/book-demo"
            className="inline-flex items-center justify-center gap-2 py-3.5 rounded-xl text-[14px] font-bold btn-shine transition-all duration-300 hover:scale-[1.03] overflow-hidden"
            style={{ width: "168px", background: "#FFFFFF", color: NAVY, boxShadow: "0 4px 25px rgba(0,0,0,0.15)" }}
          >
            Book a Demo <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="/#products"
            className="inline-flex items-center justify-center gap-2 py-3.5 rounded-xl text-[14px] font-semibold transition-all duration-300 hover:scale-[1.03]"
            style={{ width: "168px", background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.3)", color: "#FFFFFF" }}
          >
            Other Products
          </Link>
        </div>
      </div>
    </section>
  )
}
