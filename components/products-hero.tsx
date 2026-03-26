"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowRight, FileText } from "lucide-react"
import { trackBookDemoCTAClick, trackWatchDemoClick } from "@/lib/amplitude"

export function PatramHero() {
  const [isInView, setIsInView] = useState(false)
  const [statsStarted, setStatsStarted] = useState(false)
  const [countCountries, setCountCountries] = useState(0)
  const [countResponse, setCountResponse] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true)
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isInView || statsStarted) return
    setStatsStarted(true)
    const duration = 1400
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setCountCountries(Math.round(eased * 190))
      setCountResponse(parseFloat((eased * 1.5).toFixed(1)))
      if (t < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [isInView, statsStarted])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
    >
      {/* White base */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "#FFFFFF" }} />

      {/* World map background — cover, no visible edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/images/world-map-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          opacity: 0.40,
        }}
      />

      {/* Left fade — keeps text area clean */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to right, #FFFFFF 25%, transparent 60%)" }} />

      {/* Right fade — hides right edge */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to left, #FFFFFF 0%, transparent 15%)" }} />

      {/* Bottom fade — strong, stops map bleeding into next section */}
      <div className="absolute inset-x-0 bottom-0 h-[180px] pointer-events-none" style={{ background: "linear-gradient(to top, #FFFFFF 60%, transparent)" }} />

      <div className="relative w-full max-w-[1400px] mx-auto px-5 lg:px-8 pt-[100px] pb-6 lg:pb-8">
        {/* Main two-column: centered on mobile, left-aligned on desktop */}
        <div className="flex flex-col items-center text-center lg:text-left lg:items-start lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:items-center">

          {/* Left: Copy — pushed toward center */}
          <div className="lg:pl-12 xl:pl-20">

            {/* Section label */}
            <div className={`flex items-center justify-center lg:justify-start gap-3 mb-4 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)" }} />
              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#94A3B8" }}>
                Introducing
              </span>
              <div className="h-px w-8 rounded-full lg:hidden" style={{ background: "linear-gradient(270deg, #0066CC, #00A86B)" }} />
            </div>

            {/* Product name */}
            <h1 className={`hero-text-reveal text-[32px] sm:text-[44px] lg:text-[56px] xl:text-[64px] font-extrabold leading-[1.1] tracking-[-0.02em] mb-3 transition-all duration-700 delay-100 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <span className="bg-gradient-to-r from-[#0066CC] to-[#00A86B] bg-clip-text text-transparent">
                Patram AI
              </span>
            </h1>

            {/* Tagline — punchy and clear */}
            <p
              className={`text-[18px] sm:text-[22px] lg:text-[26px] font-bold leading-snug mb-2 max-w-[500px] transition-all duration-700 delay-200 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ color: "#0F172A" }}
            >
              Trade compliance, answered instantly.
            </p>
            <p
              className={`text-[15px] sm:text-[16px] leading-relaxed mb-5 max-w-[480px] transition-all duration-700 delay-300 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ color: "#475569" }}
            >
              Upload any trade document. Get sourced answers for 190+ countries in seconds.
            </p>

            {/* Stats row */}
            <div className={`flex items-center justify-center lg:justify-start mb-5 transition-all duration-700 delay-[400ms] ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              {[
                { value: `${countCountries}+`, label: "Countries" },
                { value: "24/7", label: "Always on" },
                { value: `${countResponse}s`, label: "Avg. response" },
              ].map((stat, idx) => (
                <div key={idx} className="flex items-center">
                  {idx > 0 && (
                    <div className="w-px h-7 mx-4 sm:mx-6" style={{ background: "#E2E8F0" }} />
                  )}
                  <div className="flex flex-col">
                    <span
                      className="text-[22px] sm:text-[26px] lg:text-[30px] font-extrabold tracking-tight leading-none"
                      style={{ color: "#0F172A" }}
                    >
                      {stat.value}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-medium mt-1 tracking-wide uppercase" style={{ color: "#94A3B8" }}>
                      {stat.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className={`flex flex-col sm:flex-row items-center gap-3 mb-3 transition-all duration-700 delay-500 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <Link
                href="/book-demo"
                onClick={() => trackBookDemoCTAClick("Hero")}
                className="inline-flex items-center justify-center gap-2 py-3.5 rounded-xl text-[14px] font-bold btn-shine transition-all duration-300 hover:scale-[1.03] overflow-hidden"
                style={{
                  width: "172px",
                  background: "linear-gradient(135deg, #0066CC, #00A86B)",
                  color: "#FFFFFF",
                  boxShadow: "0 4px 25px rgba(0,102,204,0.3)",
                }}
              >
                Book a Demo
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/products/patram"
                className="inline-flex items-center justify-center gap-2 py-3.5 rounded-xl text-[14px] font-semibold transition-all duration-300 hover:scale-[1.03]"
                style={{
                  width: "172px",
                  background: "#FFFFFF",
                  border: "2px solid #0066CC",
                  boxShadow: "0 4px 20px rgba(0,102,204,0.12)",
                }}
              >
                <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #0066CC, #00A86B)" }}>
                  <ArrowRight className="w-2.5 h-2.5 text-white" />
                </div>
                <span className="bg-gradient-to-r from-[#0066CC] to-[#00A86B] bg-clip-text text-transparent">Explore Patram</span>
              </Link>
            </div>
            {/* Watch Demo — text link */}
            <Link
              href="/demo/patram"
              onClick={() => trackWatchDemoClick("Hero")}
              className={`inline-flex items-center gap-2 text-[14px] font-semibold transition-all duration-300 hover:gap-3 delay-[600ms] ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ color: "#0066CC" }}
            >
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #0066CC, #00A86B)" }}>
                <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </div>
              Watch Demo
            </Link>
          </div>

          {/* Right: PatramCard — desktop only */}
          <div className={`hidden lg:block pt-5 transition-all duration-700 delay-200 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <PatramCard isActive={isInView} />
          </div>
        </div>

        {/* LOWER SECTION — Full-width product showcase */}
        <div className={`mt-6 lg:mt-8 transition-all duration-700 delay-[700ms] ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="flex flex-col sm:flex-row items-stretch gap-2 sm:gap-3">
            {[
              { name: "TradeGuard", tagline: "Cross-checks 40+ document fields in under 5 seconds", metric: "40+", metricSub: "fields", href: "/products/tradeguard", color: "#0066CC" },
              { name: "TariffIQ",   tagline: "AI-powered HSN classification with 95% accuracy",      metric: "95%", metricSub: "accuracy", href: "/products/tariffiq",  color: "#1B4F8A" },
            ].map((p) => (
              <Link
                key={p.name}
                href={p.href}
                className="group flex-1 flex items-center gap-3 px-4 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ height: "64px", background: "#FFFFFF", border: "1px solid #E2E8F0", boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex flex-col items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-105"
                  style={{ background: "#EFF6FF" }}
                >
                  <span className="text-[13px] font-extrabold leading-none" style={{ color: p.color }}>{p.metric}</span>
                  <span className="text-[8px] font-medium mt-0.5" style={{ color: p.color }}>{p.metricSub}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] font-bold leading-tight mb-0.5" style={{ color: "#0F172A" }}>{p.name}</p>
                  <p className="text-[11px] leading-snug" style={{ color: "#64748B" }}>{p.tagline}</p>
                </div>
                <ArrowRight className="w-3.5 h-3.5 flex-shrink-0 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" style={{ color: p.color }} />
              </Link>
            ))}

            {/* All products */}
            <a
              href="#products"
              className="group flex sm:flex-col items-center justify-center gap-2 sm:gap-1.5 px-4 sm:px-5 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              style={{ height: "64px", background: "#F8FAFC", border: "1px solid #E2E8F0" }}
            >
              <ArrowRight className="w-4 h-4 transition-all duration-300 group-hover:translate-x-0.5" style={{ color: "#0066CC" }} />
              <span className="text-[10px] font-semibold text-center leading-snug" style={{ color: "#0066CC" }}>All products</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* Patram AI Card — iOS-style minimal chat */
export function PatramCard({ isActive }: { isActive: boolean }) {
  const [messageStep, setMessageStep] = useState(0)

  const messages = [
    {
      title: "Aflatoxin Risk",
      text: "EU enforces 10 \u00B5g/kg limit. Pre-shipment testing mandatory.",
      source: "Pg 12",
    },
    {
      title: "Certifications",
      text: "FSSAI Export, EIC Health, Phytosanitary (NPPO) required.",
      source: "Pg 24",
    },
    {
      title: "Duty: 0% GSP",
      text: "HSN 0910.30 qualifies. EUR.1 Origin Certificate needed.",
      source: "Pg 31",
    },
  ]

  useEffect(() => {
    if (!isActive) { setMessageStep(0); return }
    let step = 0
    const interval = setInterval(() => {
      step++
      if (step <= messages.length) setMessageStep(step)
      else if (step > messages.length + 4) { step = 0; setMessageStep(0) }
    }, 1200)
    return () => clearInterval(interval)
  }, [isActive, messages.length])

  return (
    <div
      className="w-full flex flex-col overflow-hidden animate-float"
      style={{
        height: "435px",
        borderRadius: "20px",
        background: "#FFFFFF",
        border: "1px solid #E2E8F0",
        boxShadow: "0 32px 100px rgba(0,102,204,0.18), 0 12px 40px rgba(0,0,0,0.06), 0 2px 8px rgba(0,0,0,0.03)",
      }}
    >
      {/* Header — traffic lights + Patram AI left, PDF pill right */}
      <div className="flex items-center gap-2.5 px-4 pt-3.5 pb-3 flex-shrink-0" style={{ borderBottom: "1px solid #F1F5F9" }}>
        <div className="flex gap-1.5 flex-shrink-0">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
        </div>
        <div className="flex-1 min-w-0 ml-1">
          <p className="text-[13px] font-bold leading-none" style={{ color: "#0F172A" }}>Patram AI</p>
          <p className="text-[10px] mt-0.5" style={{ color: "#94A3B8" }}>Intelligent Document Assistant</p>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg flex-shrink-0" style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}>
          <FileText className="w-2.5 h-2.5 flex-shrink-0" style={{ color: "#64748B" }} />
          <span className="text-[10px] font-medium" style={{ color: "#64748B" }}>eu_food_safety.pdf</span>
        </div>
      </div>

      {/* Chat messages — flex-1 so it never overflows the card */}
      <div className="flex-1 min-h-0 px-4 py-3 flex flex-col gap-3 overflow-hidden">

        {/* User message — solid primary blue, no gradient */}
        <div className="flex justify-end flex-shrink-0">
          <div
            className="px-3.5 py-2 max-w-[75%]"
            style={{
              background: "#00A86B",
              borderRadius: "18px 18px 4px 18px",
              boxShadow: "0 3px 12px rgba(0,168,107,0.28)",
            }}
          >
            <p className="text-[11px] leading-snug font-medium" style={{ color: "#FFFFFF" }}>
              Certifications needed to export turmeric to Germany?
            </p>
          </div>
        </div>

        {/* AI messages */}
        <div className="flex flex-col gap-3 overflow-hidden">
          {messages.map((msg, idx) => {
            const visible = idx < messageStep
            const isTyping = idx === messageStep && messageStep <= messages.length - 1

            return (
              <div
                key={idx}
                className="flex justify-start flex-shrink-0 transition-all duration-500"
                style={{
                  opacity: visible ? 1 : isTyping ? 1 : 0,
                  transform: visible ? "translateY(0)" : isTyping ? "translateY(0)" : "translateY(4px)",
                }}
              >
                {isTyping ? (
                  <div
                    className="px-4 py-2.5 inline-flex items-center gap-1"
                    style={{ background: "#F2F2F7", borderRadius: "18px 18px 18px 4px" }}
                  >
                    {[0, 1, 2].map(i => (
                      <span
                        key={i}
                        className="w-1.5 h-1.5 rounded-full animate-bounce"
                        style={{ background: "#94A3B8", animationDelay: `${i * 150}ms` }}
                      />
                    ))}
                  </div>
                ) : visible ? (
                  <div
                    className="px-3.5 py-2 max-w-[88%]"
                    style={{ background: "#F2F2F7", borderRadius: "18px 18px 18px 4px" }}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-[11px] font-bold leading-tight mb-0.5" style={{ color: "#0F172A" }}>{msg.title}</p>
                        <p className="text-[10px] leading-snug" style={{ color: "#475569" }}>{msg.text}</p>
                      </div>
                      <span
                        className="flex-shrink-0 text-[9px] font-medium mt-0.5 px-1.5 py-0.5 rounded whitespace-nowrap"
                        style={{ background: "rgba(0,0,0,0.06)", color: "#94A3B8" }}
                      >
                        {msg.source}
                      </span>
                    </div>
                  </div>
                ) : null}
              </div>
            )
          })}
        </div>
      </div>

      {/* Input bar */}
      <div
        className="flex-shrink-0 px-4 py-3 flex items-center gap-2"
        style={{ borderTop: "1px solid #F1F5F9" }}
      >
        <div
          className="flex-1 flex items-center px-3.5 py-2 rounded-full"
          style={{ background: "#F2F2F7" }}
        >
          <span className="text-[11px]" style={{ color: "#94A3B8" }}>Ask about your export...</span>
        </div>
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
          style={{
            background: "linear-gradient(135deg, #0066CC, #00A86B)",
            boxShadow: "0 3px 10px rgba(0,102,204,0.35)",
          }}
        >
          <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </div>
      </div>
    </div>
  )
}
