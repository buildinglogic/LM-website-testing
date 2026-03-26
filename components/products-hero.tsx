"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowRight, Sparkles, FileText } from "lucide-react"
import { trackBookDemoCTAClick, trackWatchDemoClick } from "@/lib/amplitude"

export function PatramHero() {
  const [isInView, setIsInView] = useState(false)
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

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
    >
      {/* Layered textured white background */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "#FFFFFF" }} />

      {/* Linen / paper texture via noise */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.4,
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4'%3E%3Crect width='4' height='4' fill='%23f8fafc'/%3E%3Crect width='1' height='1' fill='%23f1f5f9'/%3E%3C/svg%3E\")",
          backgroundSize: "4px 4px",
        }}
      />

      {/* Subtle cross-hatch pattern — gives depth like woven fabric */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.025,
          backgroundImage: "repeating-linear-gradient(0deg, #0066CC, #0066CC 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, #0066CC, #0066CC 1px, transparent 1px, transparent 60px)",
        }}
      />

      {/* Faint radial gradient vignette — draws eye to center */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 40% 40%, transparent 0%, rgba(248,250,252,0.6) 70%, #F8FAFC 100%)" }} />

      {/* Color accent orbs — very soft */}
      <div className="absolute top-[5%] right-[15%] pointer-events-none" style={{ width: "600px", height: "600px", background: "radial-gradient(circle, rgba(0,102,204,0.025) 0%, transparent 50%)", filter: "blur(60px)" }} />
      <div className="absolute bottom-[10%] left-[5%] pointer-events-none" style={{ width: "500px", height: "500px", background: "radial-gradient(circle, rgba(0,168,107,0.02) 0%, transparent 50%)", filter: "blur(60px)" }} />

      {/* Bottom fade to pure white */}
      <div className="absolute inset-x-0 bottom-0 h-[120px] pointer-events-none" style={{ background: "linear-gradient(to top, #FFFFFF, transparent)" }} />

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
                { value: "190+", label: "Countries" },
                { value: "24/7", label: "Always on" },
                { value: "1.5s", label: "Avg. response" },
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
            <div className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-3 transition-all duration-700 delay-500 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <Link
                href="/book-demo"
                onClick={() => trackBookDemoCTAClick("Hero")}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-[15px] font-bold btn-shine transition-all duration-300 hover:scale-[1.03] overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #0066CC, #00A86B)",
                  color: "#FFFFFF",
                  boxShadow: "0 4px 25px rgba(0,102,204,0.3)",
                }}
              >
                Book a Demo
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/products/patram"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-[15px] font-semibold transition-all duration-300 hover:scale-[1.03]"
                style={{
                  background: "#FFFFFF",
                  border: "2px solid #E2E8F0",
                  color: "#0F172A",
                }}
              >
                Explore Patram AI
              </Link>
            </div>
            <Link
              href="/demo/patram"
              onClick={() => trackWatchDemoClick("Hero")}
              className={`inline-flex items-center gap-1.5 text-[13px] font-semibold transition-all hover:opacity-80 duration-700 delay-[600ms] ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ color: "#0066CC" }}
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              Watch demo
            </Link>
          </div>

          {/* Right: PatramCard — desktop only */}
          <div className={`hidden lg:block transition-all duration-700 delay-200 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <PatramCard isActive={isInView} />
          </div>
        </div>

        {/* LOWER SECTION — Other Products — clean, concise */}
        <div className={`mt-6 lg:mt-8 pt-5 transition-all duration-700 delay-[700ms] ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`} style={{ borderTop: "1px solid #E2E8F0" }}>
          <div className="grid grid-cols-1 sm:grid-cols-[1fr_1fr_auto] gap-4 items-center">
            {[
              { name: "TradeGuard", tagline: "Cross-checks 40+ document fields in under 5 seconds", href: "/products/tradeguard", color: "#0066CC" },
              { name: "TariffIQ", tagline: "AI-powered HSN classification with 95% accuracy", href: "/products/tariffiq", color: "#1B4F8A" },
            ].map((p) => (
              <Link
                key={p.name}
                href={p.href}
                className="group flex items-center gap-3.5 px-4 py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                style={{ background: "#FFFFFF", border: "1px solid #E2E8F0" }}
              >
                <div className="w-1.5 min-h-[36px] rounded-full flex-shrink-0 transition-all duration-300 group-hover:w-2" style={{ background: p.color }} />
                <div className="flex-1 min-w-0">
                  <p className="text-[15px] font-bold leading-tight mb-0.5" style={{ color: "#0F172A" }}>{p.name}</p>
                  <p className="text-[13px] leading-snug" style={{ color: "#64748B" }}>{p.tagline}</p>
                </div>
                <ArrowRight className="w-4 h-4 flex-shrink-0 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" style={{ color: p.color }} />
              </Link>
            ))}
            <a href="#products" className="inline-flex items-center justify-center gap-1.5 text-[13px] font-semibold transition-all duration-300 hover:gap-2.5" style={{ color: "#0066CC" }}>
              All products <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* Patram AI Card — Premium Document Q&A Demo (fixed-height, horizontal) */
export function PatramCard({ isActive }: { isActive: boolean }) {
  const [messageStep, setMessageStep] = useState(0)

  const messages = [
    {
      title: "Aflatoxin Risk",
      text: "EU enforces 10 \u00B5g/kg limit. Pre-shipment testing mandatory.",
      titleColor: "#DC2626",
      borderColor: "#DC2626",
      bg: "rgba(220,38,38,0.04)",
      source: "Pg 12, \u00A73.1",
    },
    {
      title: "Certifications",
      text: "FSSAI Export, EIC Health, Phytosanitary (NPPO) required.",
      titleColor: "#0066CC",
      borderColor: "#0066CC",
      bg: "rgba(0,102,204,0.04)",
      source: "Pg 24, \u00A75.4",
    },
    {
      title: "Duty: 0% GSP",
      text: "HSN 0910.30 qualifies. EUR.1 Origin Certificate needed.",
      titleColor: "#00A86B",
      borderColor: "#00A86B",
      bg: "rgba(0,168,107,0.04)",
      source: "Pg 31, \u00A77.2",
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
      className="relative rounded-2xl overflow-hidden w-full"
      style={{
        height: "380px",
        background: "linear-gradient(145deg, #FFFFFF 0%, #F8FAFC 100%)",
        border: "1px solid #E2E8F0",
        boxShadow: "0 25px 80px rgba(0,102,204,0.08), 0 10px 40px rgba(0,0,0,0.04)",
      }}
    >
      <div className="h-[3px]" style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)" }} />

      <div className="p-4 h-[calc(100%-3px)] flex flex-col">
        {/* Header — like TariffIQ */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full" style={{ background: "#E2E8F0" }} />
              <span className="w-3 h-3 rounded-full" style={{ background: "#00A86B" }} />
            </div>
            <p className="text-[14px] font-bold" style={{ color: "#0F172A" }}>Patram AI</p>
          </div>
          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full" style={{ background: "#ECFDF5", color: "#00A86B" }}>Online</span>
        </div>

        {/* Document input — grey field */}
        <div className="mb-3">
          <p className="text-[10px] font-semibold uppercase tracking-wider mb-1.5" style={{ color: "#94A3B8" }}>Document Uploaded</p>
          <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl" style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}>
            <FileText className="w-4 h-4" style={{ color: "#94A3B8" }} />
            <span className="text-[13px] font-medium" style={{ color: "#0F172A" }}>eu_food_safety.pdf</span>
            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded ml-auto" style={{ background: "#ECFDF5", color: "#00A86B" }}>47 pages</span>
          </div>
        </div>

        {/* Query — grey field */}
        <div className="mb-3">
          <p className="text-[10px] font-semibold uppercase tracking-wider mb-1.5" style={{ color: "#94A3B8" }}>Your Question</p>
          <div className="px-3 py-2.5 rounded-xl" style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}>
            <p className="text-[12px]" style={{ color: "#475569" }}>Certifications needed to export turmeric to Germany?</p>
          </div>
        </div>

        {/* AI Response — animated results */}
        <div className="flex-1 min-h-0">
          <p className="text-[10px] font-semibold uppercase tracking-wider mb-1.5" style={{ color: "#94A3B8" }}>
            <span className="inline-flex items-center gap-1">
              <Sparkles className="w-3 h-3" style={{ color: "#00A86B" }} />
              AI Response
            </span>
          </p>
          <div className="space-y-1.5">
            {messages.map((msg, idx) => {
              const visible = idx < messageStep
              const isTyping = idx === messageStep && messageStep <= messages.length - 1

              return (
                <div
                  key={idx}
                  className="transition-all duration-500"
                  style={{
                    opacity: visible ? 1 : isTyping ? 0.5 : 0.15,
                    transform: visible ? "translateY(0)" : "translateY(4px)",
                  }}
                >
                  <div className="flex items-center gap-2 px-3 py-2 rounded-xl" style={{ background: visible ? "#F8FAFC" : "#FAFBFC", border: `1px solid ${visible ? msg.borderColor + "30" : "#E2E8F0"}` }}>
                    {isTyping ? (
                      <div className="flex items-center gap-1 py-1">
                        {[0, 1, 2].map(i => (
                          <span key={i} className="w-1.5 h-1.5 rounded-full animate-bounce" style={{ background: "#94A3B8", animationDelay: `${i * 150}ms` }} />
                        ))}
                      </div>
                    ) : (
                      <>
                        <div className="flex-1 min-w-0">
                          <p className="text-[11px] font-bold leading-tight" style={{ color: visible ? msg.titleColor : "#CBD5E1" }}>{msg.title}</p>
                          <p className="text-[10px] leading-snug mt-0.5" style={{ color: visible ? "#475569" : "#E2E8F0" }}>{msg.text}</p>
                        </div>
                        {visible && (
                          <span className="flex-shrink-0 text-[9px] font-medium px-2 py-0.5 rounded-lg" style={{ background: "#FFFFFF", color: "#94A3B8", border: "1px solid #E2E8F0" }}>{msg.source}</span>
                        )}
                      </>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
