"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowRight, Globe, Sparkles } from "lucide-react"
import { trackCTAClicked } from "@/lib/amplitude"

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
      {/* World map background — subtle 3D depth */}
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
      {/* Soft fade at bottom so it blends into next section */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.3) 60%, #FFFFFF 95%)",
        }}
      />

      {/* Subtle noise texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.02, backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }}
      />

      <div className="relative w-full max-w-[1400px] mx-auto px-5 lg:px-8 pt-[140px] pb-10 lg:pb-14">
        {/* Mobile: stacked centered | Desktop: two-column with PatramCard */}
        <div className="flex flex-col items-center text-center lg:text-left lg:items-start lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">

          {/* Left: Copy */}
          <div className={`transition-all duration-900 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>

            {/* Section label */}
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-5">
              <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)" }} />
              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#94A3B8" }}>
                Introducing
              </span>
              <div className="h-px w-8 rounded-full lg:hidden" style={{ background: "linear-gradient(270deg, #0066CC, #00A86B)" }} />
            </div>

            {/* Massive product name */}
            <h1 className="hero-text-reveal text-[48px] sm:text-[64px] lg:text-[80px] xl:text-[96px] font-extrabold leading-[0.95] tracking-[-0.04em] mb-3">
              <span className="bg-gradient-to-r from-[#0066CC] to-[#00A86B] bg-clip-text text-transparent">
                Patram AI
              </span>
            </h1>

            {/* Tagline */}
            <p
              className="text-[18px] sm:text-[22px] lg:text-[26px] font-medium leading-snug mb-7 lg:mb-8 max-w-[460px]"
              style={{ color: "#475569" }}
            >
              Trade compliance, answered instantly.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-7 lg:mb-8">
              <Link
                href="/products/patram"
                onClick={() => trackCTAClicked({ cta_name: 'Explore Patram AI', location: 'Hero', product_source: 'homepage' })}
                className="group btn-magnetic btn-glow-pulse inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-[14px] lg:text-[15px] font-semibold text-white overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #00A86B, #0066CC)",
                }}
              >
                Explore Patram AI
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <button
                onClick={() => {
                  trackCTAClicked({ cta_name: 'Watch Demo', location: 'Hero', product_source: 'homepage' })
                  document.getElementById("video-demo")?.scrollIntoView({ behavior: "smooth" })
                }}
                className="btn-outline-glow inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-[14px] lg:text-[15px] font-semibold"
                style={{
                  background: "#FFFFFF",
                  border: "1.5px solid #E2E8F0",
                  color: "#0F172A",
                }}
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                Watch demo
              </button>
            </div>

            {/* Stats row */}
            <div className="flex items-center justify-center lg:justify-start">
              {[
                { value: "190+", label: "Countries" },
                { value: "24/7", label: "Always on" },
                { value: "1.5s", label: "Avg. response" },
              ].map((stat, idx) => (
                <div key={idx} className="flex items-center">
                  {idx > 0 && (
                    <div className="w-px h-8 mx-5 sm:mx-7" style={{ background: "#E2E8F0" }} />
                  )}
                  <div className="flex flex-col">
                    <span
                      className="text-[24px] sm:text-[28px] lg:text-[32px] font-extrabold tracking-tight leading-none"
                      style={{ color: "#0F172A" }}
                    >
                      {stat.value}
                    </span>
                    <span className="text-[11px] sm:text-[12px] font-medium mt-1.5 tracking-wide uppercase" style={{ color: "#94A3B8" }}>
                      {stat.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: PatramCard — desktop only */}
          <div className={`hidden lg:block transition-all duration-900 delay-200 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <div className="hero-float">
              <PatramCard isActive={isInView} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* Patram AI Card — Spice Export to EU scenario */
function PatramCard({ isActive }: { isActive: boolean }) {
  const [messageStep, setMessageStep] = useState(0)
  const color = "#00A86B"
  const accentColor = "#0066CC"

  const messages = [
    {
      type: "warning",
      title: "Aflatoxin Limit Exceeded Risk",
      text: "EU enforces a 10 \u00B5g/kg limit for Aflatoxin B1 in spices. Indian turmeric faces enhanced RASFF testing.",
      iconColor: "#DC2626",
      bg: "rgba(220,38,38,0.05)",
      border: "rgba(220,38,38,0.2)",
    },
    {
      type: "doc",
      title: "Required Certifications",
      text: "FSSAI Export Certificate, EIC Health Certificate, Phytosanitary Certificate from NPPO.",
      iconColor: accentColor,
      bg: `${accentColor}08`,
      border: `${accentColor}25`,
    },
    {
      type: "success",
      title: "Duty: 0% under India-EU GSP",
      text: "Turmeric (HSN 0910.30) qualifies for 0% Basic Customs Duty. EUR.1 Certificate required.",
      iconColor: color,
      bg: `${color}08`,
      border: `${color}25`,
    },
  ]

  useEffect(() => {
    if (!isActive) {
      setMessageStep(0)
      return
    }

    let step = 0
    const interval = setInterval(() => {
      step++
      if (step <= messages.length) {
        setMessageStep(step)
      } else if (step > messages.length + 4) {
        step = 0
        setMessageStep(0)
      }
    }, 900)

    return () => clearInterval(interval)
  }, [isActive, messages.length])

  return (
    <div
      className="relative rounded-2xl overflow-hidden"
      style={{
        background: "linear-gradient(165deg, #FFFFFF 0%, #F8FAFC 100%)",
        border: `1.5px solid ${color}20`,
        boxShadow: `
          0 24px 60px ${color}12,
          0 12px 30px rgba(0,0,0,0.06),
          inset 0 1px 0 rgba(255,255,255,0.8)
        `,
      }}
    >
      {/* Gradient accent bar */}
      <div
        className="absolute top-0 left-6 right-6 h-[3px] rounded-b-full"
        style={{ background: `linear-gradient(90deg, ${color}, ${accentColor})` }}
      />

      <div className="p-4 lg:p-5">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2.5">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center"
              style={{ background: `linear-gradient(135deg, ${color}, ${accentColor})` }}
            >
              <Globe className="w-4.5 h-4.5 text-white" />
            </div>
            <div>
              <p className="text-[14px] font-bold" style={{ color: "#0F172A" }}>Patram AI</p>
              <p className="text-[11px] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: color }} />
                <span style={{ color: "#94A3B8" }}>Online</span>
              </p>
            </div>
          </div>
          <div
            className="flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[10px]"
            style={{ background: "#F1F5F9", color: "#64748B" }}
          >
            <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            eu_food_safety.pdf
          </div>
        </div>

        {/* User question */}
        <div className="flex justify-end mb-3">
          <div
            className="max-w-[85%] px-3.5 py-2.5 rounded-2xl rounded-br-md"
            style={{ background: `linear-gradient(135deg, ${color}, ${accentColor})` }}
          >
            <p className="text-[13px] text-white leading-snug">
              Can I export turmeric to Germany? What certs do I need?
            </p>
          </div>
        </div>

        {/* AI responses */}
        <div className="space-y-2.5">
          {messages.map((msg, idx) => {
            const visible = idx < messageStep
            const isTyping = idx === messageStep && messageStep <= messages.length - 1

            return (
              <div
                key={idx}
                className="flex items-start gap-2 transition-all duration-500"
                style={{
                  opacity: visible ? 1 : isTyping ? 0.4 : 0.1,
                  transform: visible ? "translateY(0)" : "translateY(6px)",
                }}
              >
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: `linear-gradient(135deg, ${color}, ${accentColor})` }}
                >
                  {isTyping ? (
                    <span className="flex gap-0.5">
                      {[0, 1, 2].map(i => (
                        <span
                          key={i}
                          className="w-0.5 h-0.5 rounded-full bg-white animate-bounce"
                          style={{ animationDelay: `${i * 150}ms` }}
                        />
                      ))}
                    </span>
                  ) : (
                    <Sparkles className="w-3 h-3 text-white" />
                  )}
                </div>
                <div
                  className="flex-1 rounded-xl rounded-tl-md px-3 py-2.5 transition-all duration-300"
                  style={{
                    background: visible ? msg.bg : "#F8FAFC",
                    border: `1px solid ${visible ? msg.border : "#E2E8F0"}`,
                  }}
                >
                  <p
                    className="text-[11px] font-bold mb-0.5"
                    style={{ color: visible ? msg.iconColor : "#CBD5E1" }}
                  >
                    {msg.title}
                  </p>
                  <p
                    className="text-[11px] leading-relaxed"
                    style={{ color: visible ? "#475569" : "#E2E8F0" }}
                  >
                    {msg.text}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Input field */}
        <div
          className="mt-3 flex items-center gap-2 px-3 py-2.5 rounded-lg"
          style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}
        >
          <span className="text-[13px]" style={{ color: "#94A3B8" }}>Ask about your export...</span>
          <div
            className="ml-auto w-7 h-7 rounded-md flex items-center justify-center"
            style={{ background: `linear-gradient(135deg, ${color}, ${accentColor})` }}
          >
            <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
