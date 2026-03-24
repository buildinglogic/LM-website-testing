"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowRight, Globe, Sparkles } from "lucide-react"
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
      {/* Animated gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 120% 60% at 50% -10%, rgba(0,168,107,0.08) 0%, transparent 60%),
            radial-gradient(ellipse 80% 40% at 80% 90%, rgba(0,102,204,0.05) 0%, transparent 50%)
          `,
        }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.03,
          backgroundImage: `
            linear-gradient(rgba(0,168,107,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,168,107,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative w-full max-w-[1400px] mx-auto px-5 lg:px-8 pt-[140px] pb-16 lg:pb-24 lg:min-h-[90vh] flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center w-full">

          {/* Left: Copy */}
          <div className={`transition-all duration-900 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>

            {/* Section label */}
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(90deg, #00A86B, #0066CC)" }} />
              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#94A3B8" }}>
                Flagship Product
              </span>
            </div>

            {/* Product badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5"
              style={{ background: "linear-gradient(135deg, rgba(0,168,107,0.08), rgba(0,102,204,0.08))", border: "1px solid rgba(0,168,107,0.2)" }}>
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#00A86B" }} />
              <span className="text-[13px] font-bold tracking-wide bg-gradient-to-r from-[#00A86B] to-[#0066CC] bg-clip-text text-transparent">
                Patram AI
              </span>
            </div>

            {/* Pain line */}
            <p
              className="text-[13px] sm:text-[14px] leading-relaxed mb-3 max-w-[480px]"
              style={{ color: "#64748B" }}
            >
              Exporters waste hours digging through policy documents.
            </p>

            {/* H1 */}
            <h1
              className="text-[30px] sm:text-[40px] lg:text-[52px] font-extrabold leading-[1.08] tracking-[-0.02em] mb-5 lg:mb-6"
              style={{ color: "#0F172A" }}
            >
              Your 24/7{" "}
              <span className="bg-gradient-to-r from-[#00A86B] to-[#0066CC] bg-clip-text text-transparent">
                Export Intelligence
              </span>
              <br />
              Advisor.
            </h1>

            {/* One-liner */}
            <p
              className="text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.6] max-w-[480px] mb-6 lg:mb-8"
              style={{ color: "#475569" }}
            >
              Patram AI reads trade regulations so you don't have to. Sourced answers in 1.5 seconds.
            </p>

            {/* Stats */}
            <div className="flex items-start gap-6 sm:gap-8 lg:gap-10 mb-7 lg:mb-9">
              {[
                { value: "190+", label: "Countries" },
                { value: "24/7", label: "Available" },
                { value: "1.5s", label: "Response" },
              ].map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span
                    className="text-[26px] sm:text-[30px] lg:text-[36px] font-black tracking-tight leading-none"
                    style={{ color: "#00A86B" }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-[11px] sm:text-[12px] font-medium mt-1" style={{ color: "#94A3B8" }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                href="/products/patram"
                onClick={() => trackBookDemoCTAClick("Hero")}
                className="group btn-magnetic btn-glow-pulse btn-shine inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl text-[14px] lg:text-[15px] font-bold text-white overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #00A86B, #0066CC)",
                }}
              >
                Try Patram AI
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/20 group-hover:bg-white/30 transition-all duration-300">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
              <button
                onClick={() => {
                  trackWatchDemoClick("Hero")
                  document.getElementById("video-demo")?.scrollIntoView({ behavior: "smooth" })
                }}
                className="btn-outline-glow inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl text-[14px] lg:text-[15px] font-semibold"
                style={{
                  background: "#FFFFFF",
                  border: "2px solid rgba(0,168,107,0.25)",
                  color: "#00A86B",
                }}
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right: Patram Card */}
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
      text: "EU enforces a 10 \u00B5g/kg limit for Aflatoxin B1 in spices. Indian turmeric faces enhanced RASFF testing. Pre-shipment lab testing is mandatory.",
      iconColor: "#DC2626",
      bg: "rgba(220,38,38,0.05)",
      border: "rgba(220,38,38,0.2)",
    },
    {
      type: "doc",
      title: "Required Certifications",
      text: "FSSAI Export Certificate, EIC Health Certificate, Phytosanitary Certificate from NPPO, and EU-compliant pesticide residue test report.",
      iconColor: accentColor,
      bg: `${accentColor}08`,
      border: `${accentColor}25`,
    },
    {
      type: "success",
      title: "Duty: 0% under India-EU GSP",
      text: "Turmeric (HSN 0910.30) qualifies for 0% Basic Customs Duty under the EU GSP scheme. EUR.1 Certificate of Origin required.",
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
      className="relative rounded-3xl overflow-hidden"
      style={{
        background: "linear-gradient(165deg, #FFFFFF 0%, #F8FAFC 100%)",
        border: `2px solid ${color}20`,
        boxShadow: `
          0 32px 80px ${color}15,
          0 16px 40px rgba(0,0,0,0.08),
          inset 0 1px 0 rgba(255,255,255,0.8)
        `,
      }}
    >
      {/* Gradient accent bar */}
      <div
        className="absolute top-0 left-6 right-6 h-1 rounded-b-full"
        style={{ background: `linear-gradient(90deg, ${color}, ${accentColor})` }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full animate-float-particle"
            style={{
              background: i % 2 === 0 ? color : accentColor,
              opacity: 0.3,
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="p-5 lg:p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: `linear-gradient(135deg, ${color}, ${accentColor})` }}
            >
              <Globe className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-[15px] font-bold" style={{ color: "#0F172A" }}>Patram AI</p>
              <p className="text-[12px] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: color }} />
                <span style={{ color: "#94A3B8" }}>Online</span>
              </p>
            </div>
          </div>
          <div
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px]"
            style={{ background: "#F1F5F9", color: "#64748B" }}
          >
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            eu_food_safety_2024.pdf
          </div>
        </div>

        {/* User question */}
        <div className="flex justify-end mb-4">
          <div
            className="max-w-[85%] px-4 py-3 rounded-2xl rounded-br-md"
            style={{ background: `linear-gradient(135deg, ${color}, ${accentColor})` }}
          >
            <p className="text-[14px] text-white">
              Can I export turmeric powder to Germany? What certifications do I need?
            </p>
          </div>
        </div>

        {/* AI responses */}
        <div className="space-y-3">
          {messages.map((msg, idx) => {
            const visible = idx < messageStep
            const isTyping = idx === messageStep && messageStep <= messages.length - 1

            return (
              <div
                key={idx}
                className="flex items-start gap-2.5 transition-all duration-500"
                style={{
                  opacity: visible ? 1 : isTyping ? 0.4 : 0.1,
                  transform: visible ? "translateY(0)" : "translateY(8px)",
                }}
              >
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: `linear-gradient(135deg, ${color}, ${accentColor})` }}
                >
                  {isTyping ? (
                    <span className="flex gap-0.5">
                      {[0, 1, 2].map(i => (
                        <span
                          key={i}
                          className="w-1 h-1 rounded-full bg-white animate-bounce"
                          style={{ animationDelay: `${i * 150}ms` }}
                        />
                      ))}
                    </span>
                  ) : (
                    <Sparkles className="w-3.5 h-3.5 text-white" />
                  )}
                </div>
                <div
                  className="flex-1 rounded-2xl rounded-tl-md px-4 py-3 transition-all duration-300"
                  style={{
                    background: visible ? msg.bg : "#F8FAFC",
                    border: `1.5px solid ${visible ? msg.border : "#E2E8F0"}`,
                  }}
                >
                  <p
                    className="text-[12px] font-bold mb-1"
                    style={{ color: visible ? msg.iconColor : "#CBD5E1" }}
                  >
                    {msg.title}
                  </p>
                  <p
                    className="text-[12px] leading-relaxed"
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
          className="mt-5 flex items-center gap-2 px-4 py-3 rounded-xl"
          style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}
        >
          <span className="text-[14px]" style={{ color: "#94A3B8" }}>Ask about your export...</span>
          <div
            className="ml-auto w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: `linear-gradient(135deg, ${color}, ${accentColor})` }}
          >
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
