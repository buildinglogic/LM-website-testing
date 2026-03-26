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
import { Shield, Globe, Calculator, ArrowRight, X, Trophy } from "lucide-react"
import { trackBookDemoCTAClick, trackJourneyStepViewed, trackPartnerInteracted, trackAwardInteracted, trackProductCTAClick } from "@/lib/amplitude"

export default function LiquidmindLanding() {
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const id = hash.replace("#", "")
      const element = document.getElementById(id)
      if (element) {
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
      <div className="page-snap"><FAQSection /></div>
      <CTASection />
      <FooterLinks />
      <Footer />
      <WhatsAppButton />
      <AwardToast />
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

/* ========================
   PRODUCT SHOWCASE — Apple-style premium cards
======================== */
function ProductShowcase() {
  const { ref, isInView } = useInView()

  const products = [
    {
      num: "01",
      name: "Patram AI",
      tagline: "Ask anything. Get sourced answers.",
      description: "Regulations, certifications, restrictions — for 190+ countries. Patram reads the policy documents so your team doesn't have to.",
      statTo: 190, statSuffix: "+", statLabel: "Countries",
      speedPrefix: "", speedTo: 1.5, speedSuffix: "s", speedLabel: "Response time",
      href: "/products/patram",
      color: "#00A86B",
    },
    {
      num: "02",
      name: "TradeGuard",
      tagline: "Document audit in seconds, not hours.",
      description: "Upload Shipping Bill and Invoice. TradeGuard cross-matches 40+ fields and flags the discrepancies that would cost you at customs.",
      statTo: 40, statSuffix: "+", statLabel: "Fields checked",
      speedPrefix: "<", speedTo: 5, speedSuffix: "s", speedLabel: "Per audit",
      href: "/products/tradeguard",
      color: "#0066CC",
    },
    {
      num: "03",
      name: "TariffIQ",
      tagline: "Right HSN code. Maximum incentive.",
      description: "Duty rates, drawback eligibility, RoDTEP claims — resolved in seconds. No guesswork. No missed refunds.",
      statTo: 95, statSuffix: "%", statLabel: "Accuracy",
      speedPrefix: "<", speedTo: 3, speedSuffix: "s", speedLabel: "Classification",
      href: "/products/tariffiq",
      color: "#1B4F8A",
    },
  ]

  return (
    <section
      ref={ref}
      id="products"
      className="pt-6 pb-10 lg:pb-12 px-5 lg:px-8"
      style={{ background: "#FFFFFF", scrollMarginTop: "80px" }}
    >
      <div className="max-w-[1100px] mx-auto">

        {/* Header */}
        <div className={`text-center mb-6 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)" }} />
            <span className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#94A3B8" }}>Our Products</span>
            <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(270deg, #0066CC, #00A86B)" }} />
          </div>
          <h2 className="text-[22px] sm:text-[28px] lg:text-[36px] font-extrabold leading-[1.1] tracking-[-0.02em]" style={{ color: "#0F172A" }}>
            Purpose-built for{" "}
            <span className="bg-gradient-to-r from-[#0066CC] to-[#00A86B] bg-clip-text text-transparent">every stage of export.</span>
          </h2>
        </div>

        {/* Cards — editorial column layout, no icons, no colored top bars */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-3 rounded-2xl overflow-hidden transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ border: "1px solid #E2E8F0", boxShadow: "0 4px 30px rgba(0,0,0,0.06)" }}
        >
          {products.map((product, idx) => (
            <Link
              key={product.name}
              href={product.href}
              onClick={() => trackProductCTAClick(product.name, "Product Showcase")}
              className={`group relative flex flex-col px-5 py-5 lg:px-7 lg:py-6 transition-all duration-300 hover:bg-[#FAFBFF] ${idx < 2 ? "lg:border-r" : ""} ${idx < 2 ? "border-b lg:border-b-0" : ""}`}
              style={{
                background: "#FFFFFF",
                borderColor: "#E2E8F0",
                transitionDelay: `${idx * 80}ms`,
              }}
            >
              {/* Faint watermark number */}
              <span
                className="absolute top-4 right-5 text-[52px] font-black leading-none select-none pointer-events-none"
                style={{ color: `${product.color}0D` }}
              >
                {product.num}
              </span>

              {/* Index + color dot */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: product.color }} />
                <span className="text-[10px] font-bold tracking-[0.18em] uppercase" style={{ color: "#94A3B8" }}>{product.num}</span>
              </div>

              {/* Product name */}
              <h3 className="text-[20px] sm:text-[22px] font-extrabold leading-tight mb-1" style={{ color: "#0F172A" }}>
                {product.name}
              </h3>

              {/* Tagline */}
              <p className="text-[12px] font-semibold mb-3" style={{ color: product.color }}>{product.tagline}</p>

              {/* Description */}
              <p className="text-[13px] leading-relaxed flex-1 mb-5" style={{ color: "#475569" }}>
                {product.description}
              </p>

              {/* Stats — animated count-up */}
              <div className="flex items-start gap-5 mb-5" style={{ borderTop: "1px solid #F1F5F9", paddingTop: "16px" }}>
                <div>
                  <div className="text-[22px] font-black leading-none" style={{ color: "#0F172A" }}>
                    {isInView ? <><AnimatedCount to={product.statTo} />{product.statSuffix}</> : <span>0{product.statSuffix}</span>}
                  </div>
                  <div className="text-[10px] font-medium uppercase tracking-wide mt-1" style={{ color: "#94A3B8" }}>{product.statLabel}</div>
                </div>
                <div className="w-px h-8 mt-1" style={{ background: "#E2E8F0" }} />
                <div>
                  <div className="text-[22px] font-black leading-none" style={{ color: "#0F172A" }}>
                    {isInView ? <>{product.speedPrefix}<AnimatedCount to={product.speedTo} />{product.speedSuffix}</> : <span>{product.speedPrefix}0{product.speedSuffix}</span>}
                  </div>
                  <div className="text-[10px] font-medium uppercase tracking-wide mt-1" style={{ color: "#94A3B8" }}>{product.speedLabel}</div>
                </div>
              </div>

              {/* CTA */}
              <div className="inline-flex items-center gap-1.5 text-[13px] font-semibold transition-all duration-300 group-hover:gap-3" style={{ color: product.color }}>
                Explore {product.name}
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ========================
   PROBLEM SECTION — Editorial newspaper layout
======================== */
function ProblemSection() {
  const { ref, isInView } = useInView()

  const problems = [
    {
      prefix: "", countTo: 50, suffix: "%",
      title: "Documents contain errors",
      body: "Half of all trade documents have at least one discrepancy. One mismatch stalls your shipment at customs.",
      citation: "ADB Report",
    },
    {
      prefix: "3–", countTo: 7, suffix: "%",
      title: "FOB value lost to rejected claims",
      body: "Drawback and RoDTEP refunds rejected because supporting documents don't align.",
      citation: "CBIC Analysis",
    },
    {
      prefix: "", countTo: 30, suffix: "%",
      title: "Errors missed by experienced teams",
      body: "Even seasoned compliance teams miss critical field mismatches that trigger holds and penalties.",
      citation: "World Bank LPI",
    },
    {
      prefix: "", countTo: 3000, suffix: "+",
      title: "Policy changes every year",
      body: "Regulations shift faster than any team can manually track. One outdated rule costs you the shipment.",
      citation: "World Economic Forum",
    },
  ]

  return (
    <section
      ref={ref}
      className="py-10 lg:py-14 px-5 lg:px-8 relative overflow-hidden"
      style={{ background: "#F8FAFC" }}
    >
      {/* World map — very faint, no blur */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `url('/images/world-map-bg.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.06,
      }} />

      <div className="w-full max-w-[1100px] mx-auto relative">

        {/* Header */}
        <div className={`text-center mb-8 lg:mb-10 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)" }} />
            <span className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#94A3B8" }}>The Cost of Doing Nothing</span>
            <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(270deg, #0066CC, #00A86B)" }} />
          </div>
          <h2 className="text-[22px] sm:text-[30px] lg:text-[36px] font-extrabold leading-[1.1] tracking-[-0.02em]" style={{ color: "#0F172A" }}>
            The cost of{" "}
            <span className="bg-gradient-to-r from-[#0066CC] to-[#00A86B] bg-clip-text text-transparent">doing nothing.</span>
          </h2>
        </div>

        {/* Editorial 4-column stat strip */}
        <div
          className={`grid grid-cols-2 lg:grid-cols-4 transition-all duration-700 delay-100 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ borderTop: "1px solid #E2E8F0", borderBottom: "1px solid #E2E8F0" }}
        >
          {problems.map((p, idx) => (
            <div
              key={idx}
              className={`py-5 px-4 lg:px-8 flex flex-col ${idx < 3 ? "border-r" : ""} ${idx < 2 ? "border-b lg:border-b-0" : ""}`}
              style={{ borderColor: "#E2E8F0", transitionDelay: `${idx * 80}ms` }}
            >
              {/* The number — animated count-up */}
              <div
                className="text-[32px] sm:text-[40px] lg:text-[48px] font-black tracking-tight leading-none mb-2"
                style={{ color: "#0F172A" }}
              >
                {p.prefix}{isInView ? <AnimatedCount to={p.countTo} /> : 0}{p.suffix}
              </div>

              {/* Title */}
              <p className="text-[12px] sm:text-[13px] font-bold leading-snug mb-1.5" style={{ color: "#0F172A" }}>
                {p.title}
              </p>

              {/* Body */}
              <p className="text-[11px] sm:text-[12px] leading-relaxed flex-1" style={{ color: "#64748B" }}>
                {p.body}
              </p>

              {/* Citation */}
              <p className="text-[9px] sm:text-[10px] font-semibold tracking-widest uppercase mt-3" style={{ color: "#94A3B8" }}>
                {p.citation}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-8 transition-all duration-700 delay-300 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <a
            href="/book-demo"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl text-[14px] font-bold btn-shine transition-all duration-300 hover:scale-[1.03] overflow-hidden"
            style={{ background: "linear-gradient(135deg, #0066CC, #00A86B)", color: "#FFFFFF", boxShadow: "0 4px 25px rgba(0,102,204,0.3)" }}
          >
            See How We Fix This
            <ArrowRight className="w-4 h-4" />
          </a>
          <p className="text-[11px] mt-2" style={{ color: "#94A3B8" }}>Works on your actual documents</p>
        </div>
      </div>
    </section>
  )
}

/* ========================
   HOW IT WORKS — Horizontal timeline rail
======================== */
function HowItWorks() {
  const { ref, isInView } = useInView()
  const [activeIdx, setActiveIdx] = useState(0)
  const trackedStepsRef = useRef<Set<number>>(new Set())

  const steps = [
    {
      title: "The PO Lands",
      story: "Purchase order received. Deadline: 48 hours. Every document must be perfect.",
      color: "#64748B",
    },
    {
      title: "Documents Go In",
      story: "Upload Shipping Bill and Invoice. 40+ fields extracted and cross-matched instantly.",
      color: "#0066CC",
    },
    {
      title: "Mismatches Caught",
      story: "FOB discrepancy, port conflict, HSN error — flagged in seconds, not at customs.",
      color: "#0066CC",
    },
    {
      title: "Ship with Confidence",
      story: "Clean documents. Maximized incentives. Customs cleared. You focus on the deal.",
      color: "#00A86B",
    },
  ]

  // Auto-advance
  useEffect(() => {
    if (!isInView) return
    const timer = setInterval(() => {
      setActiveIdx(prev => (prev + 1) % 4)
    }, 3500)
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
      className="py-10 lg:py-14 px-5 lg:px-8"
      style={{ background: "#FFFFFF" }}
    >
      <div className="w-full max-w-[1100px] mx-auto">

        {/* Header */}
        <div className={`text-center mb-10 lg:mb-12 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)" }} />
            <span className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#94A3B8" }}>The Journey</span>
            <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(270deg, #0066CC, #00A86B)" }} />
          </div>
          <h2 className="text-[22px] sm:text-[30px] lg:text-[40px] font-extrabold leading-[1.1] tracking-[-0.02em]" style={{ color: "#0F172A" }}>
            From purchase order to{" "}
            <span className="bg-gradient-to-r from-[#0066CC] to-[#00A86B] bg-clip-text text-transparent">cleared shipment.</span>
          </h2>
        </div>

        {/* Timeline rail — desktop */}
        <div className={`hidden lg:block transition-all duration-700 delay-100 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>

          {/* Rail + nodes row */}
          <div className="relative flex items-center mb-0">
            {/* Full-width background rule */}
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px" style={{ background: "#E2E8F0" }} />

            {/* Filled progress line */}
            <div
              className="absolute left-0 top-1/2 -translate-y-1/2 h-px transition-all duration-700"
              style={{
                background: "linear-gradient(90deg, #0066CC, #00A86B)",
                width: `${(activeIdx / 3) * 100}%`,
              }}
            />

            {steps.map((step, idx) => {
              const done = idx < activeIdx
              const active = idx === activeIdx
              return (
                <div
                  key={idx}
                  className="relative flex-1 flex flex-col items-center cursor-pointer"
                  onClick={() => setActiveIdx(idx)}
                  onMouseEnter={() => setActiveIdx(idx)}
                >
                  {/* Node */}
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center z-10 transition-all duration-500 select-none"
                    style={{
                      background: active
                        ? "linear-gradient(135deg, #0066CC, #00A86B)"
                        : done
                        ? "#E8F5FF"
                        : "#FFFFFF",
                      border: active
                        ? "none"
                        : done
                        ? "2px solid #0066CC"
                        : "2px solid #E2E8F0",
                      boxShadow: active ? "0 4px 20px rgba(0,102,204,0.35)" : "none",
                      transform: active ? "scale(1.2)" : "scale(1)",
                    }}
                  >
                    {done ? (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="#0066CC" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <span
                        className="text-[12px] font-black"
                        style={{ color: active ? "#FFFFFF" : "#94A3B8" }}
                      >
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Content panels — below the rail */}
          <div className="flex mt-0">
            {steps.map((step, idx) => {
              const active = idx === activeIdx
              const done = idx < activeIdx
              return (
                <div
                  key={idx}
                  className="flex-1 px-2 cursor-pointer"
                  onClick={() => setActiveIdx(idx)}
                  onMouseEnter={() => setActiveIdx(idx)}
                >
                  {/* Connector tick */}
                  <div
                    className="w-px mx-auto transition-all duration-500"
                    style={{
                      height: active ? "24px" : "16px",
                      background: active ? "linear-gradient(to bottom, #0066CC, #00A86B)" : "#E2E8F0",
                    }}
                  />

                  {/* Content block */}
                  <div
                    className="pt-3 pb-4 px-3 rounded-xl transition-all duration-500"
                    style={{
                      background: active ? "#F8FAFC" : "transparent",
                      border: active ? "1px solid #E2E8F0" : "1px solid transparent",
                    }}
                  >
                    <h3
                      className="text-[15px] font-bold leading-snug mb-1.5 transition-colors duration-300"
                      style={{ color: active || done ? "#0F172A" : "#94A3B8" }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-[12px] leading-relaxed transition-colors duration-300"
                      style={{ color: active ? "#475569" : "#CBD5E1" }}
                    >
                      {step.story}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Mobile — vertical stack */}
        <div className="lg:hidden space-y-0">
          {steps.map((step, idx) => {
            const active = idx === activeIdx
            const done = idx < activeIdx
            return (
              <div
                key={idx}
                className="flex gap-4 cursor-pointer"
                onClick={() => setActiveIdx(idx)}
              >
                {/* Left: node + line */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-500"
                    style={{
                      background: active ? "linear-gradient(135deg, #0066CC, #00A86B)" : done ? "#E8F5FF" : "#FFFFFF",
                      border: active ? "none" : done ? "2px solid #0066CC" : "2px solid #E2E8F0",
                      boxShadow: active ? "0 4px 16px rgba(0,102,204,0.3)" : "none",
                    }}
                  >
                    {done ? (
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="#0066CC" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <span className="text-[11px] font-black" style={{ color: active ? "#FFFFFF" : "#94A3B8" }}>
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                    )}
                  </div>
                  {idx < 3 && (
                    <div className="w-px flex-1 my-1" style={{ background: done ? "#0066CC40" : "#E2E8F0", minHeight: "32px" }} />
                  )}
                </div>

                {/* Right: content */}
                <div className="pb-5 flex-1">
                  <h3 className="text-[15px] font-bold mb-1 transition-colors duration-300"
                    style={{ color: active || done ? "#0F172A" : "#94A3B8" }}>
                    {step.title}
                  </h3>
                  <p className="text-[12px] leading-relaxed transition-colors duration-300"
                    style={{ color: active ? "#475569" : "#CBD5E1" }}>
                    {step.story}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className={`text-center mt-10 transition-all duration-700 delay-300 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <Link
            href="/book-demo"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-[15px] font-bold btn-shine transition-all duration-300 hover:scale-[1.03] overflow-hidden"
            style={{ background: "linear-gradient(135deg, #0066CC, #00A86B)", color: "#FFFFFF", boxShadow: "0 4px 25px rgba(0,102,204,0.3)" }}
          >
            Watch It Happen Live
            <ArrowRight className="w-4 h-4" />
          </Link>
          <p className="text-[11px] mt-2 uppercase tracking-widest" style={{ color: "#94A3B8" }}>
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
      href: "/awards/aegis-graham-bell",
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
      href: "/awards/karnataka-elevate",
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
          Recognised. Validated.{" "}
          <span className="bg-gradient-to-r from-[#0066CC] to-[#00A86B] bg-clip-text text-transparent">Trusted.</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-5 mb-6">
          {awards.map((award, idx) => (
            <Link key={idx} href={award.href}
              onMouseEnter={() => trackAwardInteracted(award.title)}
              className={`relative rounded-2xl group cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
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
            </Link>
          ))}
        </div>
      </div>

      {/* Backed By - Partner Logos Marquee */}
      <div className="w-full py-5" style={{ background: "#F8FAFC", borderTop: "1px solid #E2E8F0" }}>
        <div className="w-full text-center px-4 relative flex flex-col items-center">
          <p className="text-[13px] font-semibold mb-4 tracking-[0.1em] uppercase" style={{ color: "#94A3B8" }}>Recognised by</p>
          <div className="w-full max-w-[1200px] overflow-hidden relative h-16 sm:h-24 lg:h-32">
            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 lg:w-40 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #F8FAFC, transparent)' }} />
            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 lg:w-40 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #F8FAFC, transparent)' }} />

            <div className="flex items-center justify-start gap-6 sm:gap-10 lg:gap-12 w-max h-full" style={{ animation: 'marquee 40s linear infinite' }}>
              {[
                { src: "/images/nvidia-inception.png", alt: "NVIDIA Inception", w: 360, mw: 140 },
                { src: "/images/aws-powered.png", alt: "AWS Powered", w: 280, mw: 110 },
                { src: "/images/microsoft-startups.png", alt: "Microsoft for Startups", w: 360, mw: 140, css: "scale-[1.35] mix-blend-multiply origin-center" },
                { src: "/images/karnataka_itbt_department_logo.png", alt: "Karnataka Elevate", w: 300, mw: 115 },
                { src: "/images/Aegis_award_logo.jpg", alt: "Aegis Award", w: 280, mw: 110 },
              ].map((logo, i) => (
                <div key={i} onMouseEnter={() => trackPartnerInteracted(logo.alt)} className="flex-shrink-0 h-10 sm:h-16 lg:h-24 relative transition-all duration-300 hover:scale-105" style={{ width: `clamp(${logo.mw}px, 20vw, ${logo.w}px)` }}>
                  <Image src={logo.src} alt={logo.alt} fill className={`object-contain ${logo.css || ''}`} />
                </div>
              ))}
              <div className="contents">
                {[
                  { src: "/images/nvidia-inception.png", alt: "NVIDIA Inception", w: 360, mw: 140 },
                  { src: "/images/aws-powered.png", alt: "AWS Powered", w: 280, mw: 110 },
                  { src: "/images/microsoft-startups.png", alt: "Microsoft for Startups", w: 360, mw: 140, css: "scale-[1.35] mix-blend-multiply origin-center" },
                  { src: "/images/karnataka_itbt_department_logo.png", alt: "Karnataka Elevate", w: 300, mw: 115 },
                  { src: "/images/Aegis_award_logo.jpg", alt: "Aegis Award", w: 280, mw: 110 },
                ].map((logo, i) => (
                  <div key={`dup-${i}`} onMouseEnter={() => trackPartnerInteracted(logo.alt)} className="flex-shrink-0 h-10 sm:h-16 lg:h-24 relative transition-all duration-300 hover:scale-105" style={{ width: `clamp(${logo.mw}px, 20vw, ${logo.w}px)` }}>
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


function AwardToast() {
  const [dismissed, setDismissed] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  if (dismissed) return null

  return (
    <div
      className={`hidden lg:block fixed bottom-0 left-0 right-0 z-40 transition-all ease-out ${visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
      style={{ transitionDuration: "1400ms", transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
    >
      {/* Cancel button — outside marquee, floating above */}
      <div className="flex justify-center mb-2">
        <button
          onClick={() => setDismissed(true)}
          className="w-8 h-8 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-125 hover:rotate-90 active:scale-90"
          style={{ background: "#FFFFFF", border: "2px solid #E2E8F0" }}
        >
          <X className="w-4 h-4" style={{ color: "#64748B" }} />
        </button>
      </div>

      {/* Marquee bar */}
      <div
        className="overflow-hidden"
        style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)", height: "40px", boxShadow: "0 -4px 20px rgba(0,0,0,0.1)" }}
      >
        <div className="flex items-center h-full animate-marquee whitespace-nowrap">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="inline-flex items-center gap-6 mx-8 text-[13px] font-semibold text-white tracking-wide">
              <span className="flex items-center gap-2">
                <Trophy className="w-3.5 h-3.5" />
                Award-Winning AI Platform
              </span>
              <span className="w-1 h-1 rounded-full bg-white/50" />
              <Link href="/awards/aegis-graham-bell" className="inline-flex items-center px-3 py-1 rounded-full bg-white/15 border border-white/25 transition-all duration-200 hover:bg-white/30 hover:scale-110 hover:shadow-[0_0_16px_rgba(255,255,255,0.3)] active:scale-95">
                Aegis Graham Bell 2026
              </Link>
              <span className="w-1 h-1 rounded-full bg-white/50" />
              <Link href="/awards/karnataka-elevate" className="inline-flex items-center px-3 py-1 rounded-full bg-white/15 border border-white/25 transition-all duration-200 hover:bg-white/30 hover:scale-110 hover:shadow-[0_0_16px_rgba(255,255,255,0.3)] active:scale-95">
                Karnataka Elevate 2025
              </Link>
              <span className="w-1 h-1 rounded-full bg-white/50" />
              <span>Recognized by Govt. of India & Karnataka</span>
              <span className="w-1 h-1 rounded-full bg-white/50" />
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
