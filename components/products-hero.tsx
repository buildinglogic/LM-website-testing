"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowRight, Shield, Calculator, Globe, Sparkles, FileText, User } from "lucide-react"
import { trackBookDemoCTAClick, trackWatchDemoClick } from "@/lib/amplitude"

export function PatramHero({ onWatchDemo }: { onWatchDemo?: () => void }) {
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
      {/* World map background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/images/world-map-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
          filter: "blur(1px)",
          opacity: 0.7,
          transform: "scale(1.05)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.3) 60%, #FFFFFF 95%)",
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.02, backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }}
      />

      <div className="relative w-full max-w-[1400px] mx-auto px-5 lg:px-8 pt-[100px] pb-6 lg:pb-8">
        <div className="flex flex-col items-center text-center lg:text-left lg:items-start lg:grid lg:grid-cols-2 lg:gap-10 lg:items-center">

          {/* Left: Copy */}
          <div className={`transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>

            {/* Section label */}
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
              <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)" }} />
              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#94A3B8" }}>
                Introducing
              </span>
              <div className="h-px w-8 rounded-full lg:hidden" style={{ background: "linear-gradient(270deg, #0066CC, #00A86B)" }} />
            </div>

            {/* Product name */}
            <h1 className="hero-text-reveal text-[32px] sm:text-[44px] lg:text-[56px] xl:text-[64px] font-extrabold leading-[1.1] tracking-[-0.02em] mb-2">
              <span className="bg-gradient-to-r from-[#0066CC] to-[#00A86B] bg-clip-text text-transparent">
                Patram AI
              </span>
            </h1>

            {/* Tagline */}
            <p
              className="text-[16px] sm:text-[20px] lg:text-[24px] font-medium leading-snug mb-6 max-w-[460px]"
              style={{ color: "#475569" }}
            >
              Trade compliance, answered instantly.
            </p>

            {/* 3-tier CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-3">
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
            <button
              onClick={() => {
                trackWatchDemoClick("Hero")
                onWatchDemo?.()
                document.getElementById("video-demo")?.scrollIntoView({ behavior: "smooth" })
              }}
              className="inline-flex items-center gap-1.5 text-[13px] font-semibold mb-6 transition-colors hover:opacity-80"
              style={{ color: "#0066CC" }}
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              Watch demo
            </button>

            {/* Stats row */}
            <div className="flex items-center justify-center lg:justify-start mb-5">
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

            {/* Product mini-cards */}
            <div className="flex flex-col sm:flex-row gap-2.5 mb-2">
              {[
                { name: "TradeGuard", tagline: "Document Mismatch Detection", href: "/products/tradeguard", color: "#0066CC", Icon: Shield },
                { name: "TariffIQ", tagline: "HSN Classification & Duty", href: "/products/tariffiq", color: "#1B4F8A", Icon: Calculator },
              ].map((p) => (
                <Link
                  key={p.name}
                  href={p.href}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-xl group transition-all duration-200 hover:-translate-y-0.5"
                  style={{ background: "#FFFFFF", border: "1px solid #E2E8F0", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
                >
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: `${p.color}10` }}>
                    <p.Icon className="w-3.5 h-3.5" style={{ color: p.color }} />
                  </div>
                  <div className="text-left">
                    <p className="text-[12px] font-bold leading-tight" style={{ color: "#0F172A" }}>{p.name}</p>
                    <p className="text-[10px] leading-tight" style={{ color: "#94A3B8" }}>{p.tagline}</p>
                  </div>
                  <ArrowRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" style={{ color: p.color }} />
                </Link>
              ))}
            </div>
            <a href="#products" className="inline-flex items-center gap-1.5 text-[12px] font-semibold transition-colors hover:opacity-80" style={{ color: "#0066CC" }}>
              View all products <ArrowRight className="w-3 h-3" />
            </a>
          </div>

          {/* Right: PatramCard — desktop only */}
          <div className={`hidden lg:block transition-all duration-700 delay-200 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <PatramCard isActive={isInView} />
          </div>
        </div>
      </div>
    </section>
  )
}

/* Patram AI Card — Premium Document Q&A Demo */
export function PatramCard({ isActive }: { isActive: boolean }) {
  const [messageStep, setMessageStep] = useState(0)

  const messages = [
    {
      title: "Aflatoxin Limit Risk",
      text: "EU enforces 10 \u00B5g/kg limit for Aflatoxin B1. Pre-shipment lab testing is mandatory.",
      titleColor: "#DC2626",
      borderColor: "#DC2626",
      bg: "rgba(220,38,38,0.04)",
      source: "Page 12, Section 3.1",
    },
    {
      title: "Required Certifications",
      text: "FSSAI Export Certificate, EIC Health Certificate, Phytosanitary Certificate from NPPO.",
      titleColor: "#0066CC",
      borderColor: "#0066CC",
      bg: "rgba(0,102,204,0.04)",
      source: "Page 24, Section 5.4",
    },
    {
      title: "Duty: 0% under India-EU GSP",
      text: "Turmeric (HSN 0910.30) qualifies for 0% BCD. EUR.1 Certificate of Origin required.",
      titleColor: "#00A86B",
      borderColor: "#00A86B",
      bg: "rgba(0,168,107,0.04)",
      source: "Page 31, Section 7.2",
    },
  ]

  useEffect(() => {
    if (!isActive) { setMessageStep(0); return }
    let step = 0
    const interval = setInterval(() => {
      step++
      if (step <= messages.length) setMessageStep(step)
      else if (step > messages.length + 4) { step = 0; setMessageStep(0) }
    }, 1000)
    return () => clearInterval(interval)
  }, [isActive, messages.length])

  return (
    <div
      className="relative rounded-2xl overflow-hidden max-w-[440px]"
      style={{
        background: "linear-gradient(165deg, #FFFFFF 0%, #F8FAFC 100%)",
        border: "1px solid #E2E8F0",
        boxShadow: "0 20px 50px rgba(0,102,204,0.08), 0 8px 24px rgba(0,0,0,0.05)",
      }}
    >
      {/* Gradient accent */}
      <div className="h-[3px]" style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)" }} />

      <div className="p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #00A86B, #0066CC)" }}>
              <Globe className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-[13px] font-bold" style={{ color: "#0F172A" }}>Patram AI</p>
              <p className="text-[10px] flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#00A86B" }} />
                <span style={{ color: "#94A3B8" }}>Online</span>
              </p>
            </div>
          </div>
        </div>

        {/* PDF uploaded indicator */}
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg mb-3" style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}>
          <FileText className="w-4 h-4 flex-shrink-0" style={{ color: "#0066CC" }} />
          <div className="flex-1 min-w-0">
            <p className="text-[11px] font-semibold truncate" style={{ color: "#0F172A" }}>eu_food_safety_regulations.pdf</p>
            <p className="text-[10px]" style={{ color: "#94A3B8" }}>47 pages uploaded</p>
          </div>
          <div className="px-1.5 py-0.5 rounded text-[9px] font-bold" style={{ background: "#ECFDF5", color: "#00A86B" }}>Ready</div>
        </div>

        {/* User message */}
        <div className="mb-3">
          <div className="flex items-center gap-1.5 mb-1 justify-end">
            <span className="text-[10px] font-semibold" style={{ color: "#94A3B8" }}>You</span>
            <div className="w-4 h-4 rounded-full flex items-center justify-center" style={{ background: "#E2E8F0" }}>
              <User className="w-2.5 h-2.5" style={{ color: "#64748B" }} />
            </div>
          </div>
          <div className="flex justify-end">
            <div
              className="relative max-w-[85%] px-3 py-2.5 rounded-2xl rounded-tr-md"
              style={{ background: "linear-gradient(135deg, #0066CC, #00A86B)" }}
            >
              <p className="text-[12px] text-white leading-snug">
                What certifications do I need to export turmeric to Germany?
              </p>
              {/* Speech tail */}
              <div className="absolute top-2 -right-1.5 w-3 h-3 rotate-45" style={{ background: "#0066CC" }} />
            </div>
          </div>
        </div>

        {/* AI responses */}
        <div className="space-y-2">
          <div className="flex items-center gap-1.5 mb-1">
            <div className="w-4 h-4 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, #00A86B, #0066CC)" }}>
              <Sparkles className="w-2.5 h-2.5 text-white" />
            </div>
            <span className="text-[10px] font-semibold" style={{ color: "#94A3B8" }}>Patram AI</span>
          </div>

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
                <div
                  className="relative rounded-xl rounded-tl-md px-3 py-2"
                  style={{
                    background: visible ? msg.bg : "#F8FAFC",
                    borderLeft: `3px solid ${visible ? msg.borderColor : "#E2E8F0"}`,
                  }}
                >
                  {isTyping ? (
                    <div className="flex items-center gap-1 py-1">
                      {[0, 1, 2].map(i => (
                        <span key={i} className="w-1.5 h-1.5 rounded-full animate-bounce" style={{ background: "#94A3B8", animationDelay: `${i * 150}ms` }} />
                      ))}
                    </div>
                  ) : (
                    <>
                      <p className="text-[11px] font-bold mb-0.5" style={{ color: visible ? msg.titleColor : "#CBD5E1" }}>
                        {msg.title}
                      </p>
                      <p className="text-[10px] leading-relaxed" style={{ color: visible ? "#475569" : "#E2E8F0" }}>
                        {msg.text}
                      </p>
                      {visible && (
                        <div className="flex items-center gap-1 mt-1.5">
                          <FileText className="w-2.5 h-2.5" style={{ color: "#94A3B8" }} />
                          <span className="text-[9px] font-medium" style={{ color: "#94A3B8" }}>{msg.source}</span>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Input mock */}
        <div className="mt-3 flex items-center gap-2 px-3 py-2 rounded-lg" style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}>
          <span className="text-[12px]" style={{ color: "#94A3B8" }}>Ask about your export...</span>
          <div
            className="ml-auto w-6 h-6 rounded-md flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #0066CC, #00A86B)" }}
          >
            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
