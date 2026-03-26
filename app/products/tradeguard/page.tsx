"use client"

import React from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FooterLinks } from "@/components/footer-links"
import { WhatsAppButton } from "@/components/whatsapp-button"
import Link from "next/link"
import { ArrowRight, FileCheck, CheckCircle, AlertTriangle, Clock, Shield, Eye, Zap, ChevronRight } from "lucide-react"
import { useState, useEffect, useRef } from "react"

const BRAND_BLUE = "#0066CC"
const BRAND_GREEN = "#00A86B"

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

export default function TradeGuardPage() {
  return (
    <main className="bg-white">
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <FeaturesSection />
      <HowItWorksSection />
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
  const fields = [
    { field: "Exporter Name", value: "RAJESH EXPORTS LTD", status: "match" },
    { field: "HSN Code", value: "8471.30", status: "match" },
    { field: "FOB Value", sb: "$42,500", inv: "$41,800", status: "mismatch" },
    { field: "Port of Loading", sb: "INNSA1", inv: "NHAVA SHEVA", status: "warning" },
    { field: "IEC Number", value: "0508004381", status: "match" },
  ]

  return (
    <section
      ref={ref}
      className="pt-[100px] lg:pt-[120px] pb-10 lg:pb-14 px-5 lg:px-8 relative overflow-hidden"
    >
      {/* Gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 80% 50% at 50% -20%, ${BRAND_BLUE}10 0%, transparent 50%)`,
        }}
      />

      <div className="w-full max-w-[1400px] mx-auto relative">
        {/* Breadcrumb */}
        <nav className={`flex items-center gap-2 mb-8 text-[14px] transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Link href="/" className="text-[#64748B] hover:text-[#0F172A] transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 text-[#CBD5E1]" />
          <Link href="/#products" className="text-[#64748B] hover:text-[#0F172A] transition-colors">Products</Link>
          <ChevronRight className="w-4 h-4 text-[#CBD5E1]" />
          <span style={{ color: BRAND_BLUE }}>TradeGuard</span>
        </nav>

        <div className="grid sm:grid-cols-2 gap-8 lg:gap-14 items-center">
          {/* Left: Content */}
          <div className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Product Name Header - Clear identification */}
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-2">
                <div 
                  className="w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{ background: `linear-gradient(135deg, ${BRAND_BLUE}, ${BRAND_GREEN})` }}
                >
                  <FileCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-[28px] lg:text-[36px] font-black tracking-tight" style={{ color: BRAND_BLUE }}>
                    TradeGuard
                  </h2>
                  <span className="text-[13px] font-medium tracking-wide" style={{ color: "#64748B" }}>
                    Document Mismatch Detection
                  </span>
                </div>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-[26px] sm:text-[36px] lg:text-[48px] font-extrabold leading-[1.1] tracking-[-0.02em] mb-3 lg:mb-4" style={{ color: "#0F172A" }}>
              Catch Every
              <br />
              <span style={{ color: BRAND_BLUE }}>Mismatch</span>
              <br />
              Before Customs Does.
            </h1>

            {/* Description */}
            <p className="text-[13px] sm:text-[15px] lg:text-[16px] leading-relaxed max-w-[520px] mb-4 lg:mb-5" style={{ color: "#475569" }}>
              TradeGuard extracts 40+ fields from your Shipping Bill and Commercial Invoice, maps them intelligently, and flags every discrepancy in under 5 seconds.
            </p>

            {/* Stats - Mobile optimized */}
            <div className="flex items-start justify-between sm:justify-start gap-4 sm:gap-6 lg:gap-12 mb-5 lg:mb-6">
              {[
                { value: "40+", label: "Fields Validated" },
                { value: "< 5s", label: "Analysis Time" },
                { value: "95%", label: "Accuracy Rate" },
              ].map((stat, idx) => (
                <div key={idx} className="flex flex-col min-w-0">
                  <span className="text-[24px] sm:text-[28px] lg:text-[36px] font-black tracking-tight leading-none" style={{ color: BRAND_BLUE }}>
                    {stat.value}
                  </span>
                  <span className="text-[11px] sm:text-[12px] lg:text-[13px] font-medium mt-1 whitespace-nowrap" style={{ color: "#94A3B8" }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 flex-wrap">
              <Link
                href="/book-demo"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-[15px] font-bold transition-all duration-300 hover:scale-105 btn-shine"
                style={{
                  background: `linear-gradient(135deg, ${BRAND_BLUE}, ${BRAND_GREEN})`,
                  color: "#FFFFFF",
                  boxShadow: `0 4px 25px ${BRAND_BLUE}40`,
                }}
              >
                Try TradeGuard Free
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-[15px] font-semibold transition-all duration-300 hover:scale-105"
                style={{ background: "#FFFFFF", border: `2px solid ${BRAND_BLUE}25`, color: BRAND_BLUE }}
              >
                See It In Action
              </a>
              <Link
                href="/demo/tradeguard"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-[15px] font-semibold transition-all duration-300 hover:scale-105"
                style={{ background: "#FFFFFF", border: "2px solid #0066CC", color: "#0066CC" }}
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                Watch Demo
              </Link>
            </div>
          </div>

          {/* Right: Visual - Hidden on small mobile for cleaner UX */}
          <div className={`hidden sm:block transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div
              className="rounded-2xl p-5 lg:p-6 animate-float"
              style={{
                background: "linear-gradient(145deg, #FFFFFF 0%, #F8FAFC 100%)",
                border: "1px solid #E2E8F0",
                boxShadow: `0 25px 80px ${BRAND_BLUE}12, 0 10px 40px rgba(0,0,0,0.06)`,
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: `linear-gradient(135deg, ${BRAND_BLUE}, ${BRAND_GREEN})` }}
                  >
                    <FileCheck className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-[15px] font-bold" style={{ color: "#0F172A" }}>TradeGuard Scan</p>
                    <p className="text-[12px]" style={{ color: "#94A3B8" }}>SB_0441 vs INV_0441</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: BRAND_GREEN }} />
                  <span className="text-[12px] font-semibold" style={{ color: BRAND_GREEN }}>Scanning...</span>
                </div>
              </div>

              {/* Fields */}
              <div className="space-y-2.5">
                {fields.map((f, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl p-2.5"
                    style={{
                      background: f.status === "mismatch" ? "rgba(0,102,204,0.06)" : f.status === "warning" ? "rgba(0,102,204,0.04)" : "#FAFAFA",
                      border: f.status === "mismatch" ? "1px solid rgba(0,102,204,0.2)" : f.status === "warning" ? "1px solid rgba(0,102,204,0.15)" : "1px solid #E2E8F0",
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center"
                          style={{ background: f.status === "match" ? "rgba(0,168,107,0.12)" : "rgba(0,102,204,0.12)" }}
                        >
                          {f.status === "match" ? (
                            <CheckCircle className="w-3 h-3" style={{ color: BRAND_GREEN }} />
                          ) : (
                            <AlertTriangle className="w-3 h-3" style={{ color: BRAND_BLUE }} />
                          )}
                        </div>
                        <span className="text-[12px] font-medium" style={{ color: "#475569" }}>{f.field}</span>
                      </div>
                      <span className="text-[12px] font-mono" style={{ color: f.status === "match" ? "#0F172A" : BRAND_BLUE }}>
                        {f.value || f.sb}
                      </span>
                    </div>
                    {f.status !== "match" && f.inv && (
                      <div className="flex items-center gap-2 mt-1.5 ml-7 text-[11px]">
                        <span className="px-1.5 py-0.5 rounded" style={{ background: `${BRAND_BLUE}10`, color: BRAND_BLUE }}>SB</span>
                        <span style={{ color: "#0F172A" }}>{f.sb}</span>
                        <span style={{ color: "#CBD5E1" }}>vs</span>
                        <span className="px-1.5 py-0.5 rounded" style={{ background: "rgba(0,102,204,0.1)", color: BRAND_BLUE }}>INV</span>
                        <span style={{ color: BRAND_BLUE }}>{f.inv}</span>
                      </div>
                    )}
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

function ProblemSection() {
  const { ref, isInView } = useInView()

  const problems = [
    {
      icon: AlertTriangle,
      title: "30% of Documents Have Critical Errors",
      description: "Manual document checking is error-prone. Even experienced teams miss discrepancies that cost lakhs.",
      highlight: "Delayed shipments, rejected claims",
    },
    {
      icon: Clock,
      title: "Customs Holds Kill Your Cash Flow",
      description: "A single mismatch between SB and Invoice can hold your shipment for days. Meanwhile, your working capital is stuck.",
      highlight: "3-7 days average delay",
    },
    {
      icon: Shield,
      title: "Drawback Claims Rejected at Source",
      description: "DGFT rejects claims for the smallest discrepancies. FOB value differences of even 1% can flag your entire claim.",
      highlight: "Months of follow-up",
    },
    {
      icon: Eye,
      title: "Port Code Confusion",
      description: "INNSA1 vs Nhava Sheva vs JNPT - different systems use different formats. Manual matching is a nightmare.",
      highlight: "Semantic matching needed",
    },
  ]

  return (
    <section ref={ref} className="py-10 lg:py-14 px-5 lg:px-8" style={{ background: "#F8FAFC" }}>
      <div className="w-full max-w-[1100px] mx-auto">
        {/* Header */}
        <div className={`text-center mb-8 lg:mb-10 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)" }} />
            <span className="text-[10px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#94A3B8" }}>The Document Mismatch Problem</span>
            <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(270deg, #0066CC, #00A86B)" }} />
          </div>
          <h2 className="text-[22px] sm:text-[30px] lg:text-[40px] font-extrabold leading-tight" style={{ color: "#0F172A" }}>
            Why Manual Checking{" "}
            <span style={{ color: BRAND_BLUE }}>Always Fails</span>
          </h2>
        </div>

        {/* Problem Grid */}
        <div className="grid md:grid-cols-2 gap-4 lg:gap-5">
          {problems.map((problem, idx) => {
            const Icon = problem.icon
            return (
              <div
                key={idx}
                className={`p-5 rounded-2xl transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  transitionDelay: `${idx * 100}ms`,
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${BRAND_BLUE}12` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: BRAND_BLUE }} />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-bold mb-1.5" style={{ color: "#0F172A" }}>{problem.title}</h3>
                    <p className="text-[13px] sm:text-[14px] leading-relaxed mb-2.5" style={{ color: "#64748B" }}>{problem.description}</p>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg" style={{ background: `${BRAND_BLUE}08` }}>
                      <AlertTriangle className="w-3 h-3" style={{ color: BRAND_BLUE }} />
                      <span className="text-[12px] font-semibold" style={{ color: BRAND_BLUE }}>{problem.highlight}</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function FeaturesSection() {
  const { ref, isInView } = useInView()

  const features = [
    {
      icon: "scan",
      title: "AI Document Intelligence",
      description: "Azure Document Intelligence extracts text, tables, and exact bounding boxes from any PDF format.",
      color: BRAND_BLUE,
    },
    {
      icon: "check",
      title: "40+ Field Validation",
      description: "Every critical field is checked: exporter details, HSN codes, values, quantities, port codes, and more.",
      color: BRAND_GREEN,
    },
    {
      icon: "match",
      title: "Semantic Matching",
      description: "Our AI understands that 'NHAVA SHEVA' and 'INNSA1' refer to the same port. No false positives.",
      color: BRAND_GREEN,
    },
    {
      icon: "view",
      title: "Interactive PDF Viewer",
      description: "Click any extracted field to see exactly where it came from in the original document.",
      color: BRAND_BLUE,
    },
    {
      icon: "fast",
      title: "5 Second Analysis",
      description: "From upload to complete mismatch report in under 5 seconds. No waiting, no manual comparison.",
      color: "#1B4F8A",
    },
    {
      icon: "human",
      title: "Human-in-the-Loop",
      description: "AI flags issues, you make the final call. Review, approve, or override any detection.",
      color: BRAND_BLUE,
    },
  ]

  return (
    <section ref={ref} className="py-10 lg:py-14 px-5 lg:px-8">
      <div className="w-full max-w-[1100px] mx-auto">
        {/* Header */}
        <div className={`text-center mb-8 lg:mb-10 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)" }} />
            <span className="text-[10px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#94A3B8" }}>Powerful Features</span>
            <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(270deg, #0066CC, #00A86B)" }} />
          </div>
          <h2 className="text-[22px] sm:text-[30px] lg:text-[40px] font-extrabold leading-tight" style={{ color: "#0F172A" }}>
            Enterprise-Grade{" "}
            <span style={{ color: BRAND_BLUE }}>Document Intelligence</span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-2xl transition-all duration-700 hover:shadow-lg ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{
                background: "#FFFFFF",
                border: "1px solid #E2E8F0",
                transitionDelay: `${idx * 80}ms`,
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                style={{ background: `${feature.color}12` }}
              >
                <FeatureIcon type={feature.icon} color={feature.color} />
              </div>
              <h3 className="text-[15px] font-bold mb-1.5" style={{ color: "#0F172A" }}>{feature.title}</h3>
              <p className="text-[13px] leading-relaxed" style={{ color: "#64748B" }}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureIcon({ type, color }: { type: string; color: string }) {
  const icons: Record<string, React.ReactElement> = {
    scan: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke={color} strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    check: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke={color} strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    match: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke={color} strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    view: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke={color} strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    fast: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke={color} strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    human: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke={color} strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  }
  return icons[type] || icons.check
}

function HowItWorksSection() {
  const { ref, isInView } = useInView()

  const steps = [
    { number: "01", title: "Connect Your ERP", description: "TradeGuard seamlessly pulls documents directly from your ERP system. No manual uploads needed." },
    { number: "02", title: "AI Extraction", description: "Our AI extracts 40+ fields with exact bounding boxes for full traceability." },
    { number: "03", title: "Get Results", description: "Instant mismatch report with color-coded severity. Review and export." },
  ]

  return (
    <section ref={ref} id="how-it-works" className="py-10 lg:py-14 px-5 lg:px-8" style={{ background: "#0066CC" }}>
      <div className="w-full max-w-[1100px] mx-auto">
        {/* Header */}
        <div className={`text-center mb-8 lg:mb-10 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)" }} />
            <span className="text-[10px] font-semibold tracking-[0.18em] uppercase" style={{ color: "rgba(255,255,255,0.5)" }}>See It In Action</span>
            <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(270deg, #0066CC, #00A86B)" }} />
          </div>
          <h2 className="text-[22px] sm:text-[30px] lg:text-[40px] font-extrabold leading-tight text-white">
            How TradeGuard Works
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`text-center transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div
                className="text-[40px] lg:text-[52px] font-black mb-3"
                style={{ color: "#FFFFFF" }}
              >
                {step.number}
              </div>
              <h3 className="text-[17px] font-bold text-white mb-2">{step.title}</h3>
              <p className="text-[13px] sm:text-[14px] leading-relaxed" style={{ color: "#94A3B8" }}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ComparisonSection() {
  const { ref, isInView } = useInView()

  const metrics = [
    { metric: "Check Time", manual: "2-4 hours", tradeguard: "< 5 seconds" },
    { metric: "Fields Checked", manual: "~10", tradeguard: "40+" },
    { metric: "Accuracy", manual: "70-80%", tradeguard: "95%" },
    { metric: "Semantic Matching", manual: "Impossible", tradeguard: "Built-in" },
    { metric: "Audit Trail", manual: "None", tradeguard: "Complete" },
    { metric: "Cost per Check", manual: "Staff hours", tradeguard: "Pennies" },
  ]

  return (
    <section ref={ref} className="py-10 lg:py-14 px-5 lg:px-8">
      <div className="w-full max-w-[900px] mx-auto">
        {/* Header */}
        <div className={`text-center mb-8 lg:mb-10 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)" }} />
            <span className="text-[10px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#94A3B8" }}>Why TradeGuard</span>
            <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(270deg, #0066CC, #00A86B)" }} />
          </div>
          <h2 className="text-[22px] sm:text-[30px] lg:text-[40px] font-extrabold leading-tight" style={{ color: "#0F172A" }}>
            Manual Checking vs{" "}
            <span style={{ color: BRAND_BLUE }}>TradeGuard</span>
          </h2>
        </div>

        {/* Comparison Table */}
        <div
          className={`rounded-2xl overflow-hidden transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ border: "1px solid #E2E8F0" }}
        >
          <table className="w-full">
            <thead>
              <tr style={{ background: "#F8FAFC" }}>
                <th className="text-left py-3 px-5 text-[13px] font-semibold" style={{ color: "#64748B" }}>Metric</th>
                <th className="text-left py-3 px-5 text-[13px] font-semibold" style={{ color: "#64748B" }}>Manual</th>
                <th className="text-left py-3 px-5 text-[13px] font-semibold" style={{ color: BRAND_BLUE }}>TradeGuard</th>
              </tr>
            </thead>
            <tbody>
              {metrics.map((row, idx) => (
                <tr key={idx} style={{ borderTop: "1px solid #E2E8F0" }}>
                  <td className="py-3 px-5 text-[13px] sm:text-[14px] font-medium" style={{ color: "#475569" }}>{row.metric}</td>
                  <td className="py-3 px-5 text-[13px] sm:text-[14px]" style={{ color: "#0F172A" }}>{row.manual}</td>
                  <td className="py-3 px-5 text-[13px] sm:text-[14px] font-semibold" style={{ color: BRAND_GREEN }}>{row.tradeguard}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  const { ref, isInView } = useInView()

  return (
    <section
      ref={ref}
      className="py-10 lg:py-14 px-5 lg:px-8"
      style={{ background: "linear-gradient(180deg, #0066CC 0%, #0052A3 100%)" }}
    >
      <div className={`max-w-[800px] mx-auto text-center transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-[22px] sm:text-[30px] lg:text-[40px] font-extrabold leading-tight text-white mb-3">
          Stop Losing Money to Document Errors
        </h2>
        <p className="text-[14px] sm:text-[15px] leading-relaxed mb-6" style={{ color: "#94A3B8" }}>
          Every mismatch you miss is money walking out the door. Let TradeGuard catch them all before customs does.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/book-demo"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-[15px] font-bold transition-all duration-300 hover:scale-105 btn-shine"
            style={{
              background: `linear-gradient(135deg, ${BRAND_BLUE}, ${BRAND_GREEN})`,
              color: "#FFFFFF",
              boxShadow: `0 4px 25px ${BRAND_BLUE}50`,
            }}
          >
            Start Free Trial
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/#products"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-[15px] font-semibold transition-all duration-300 hover:scale-105"
            style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "#FFFFFF" }}
          >
            Explore Other Products
          </Link>
        </div>
      </div>
    </section>
  )
}
