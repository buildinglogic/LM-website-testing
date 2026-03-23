"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowRight, FileCheck, Globe, Calculator } from "lucide-react"

const products = [
  {
    id: "tradeguard",
    name: "TradeGuard",
    tagline: "Document Mismatch Detection",
    headline: "Catch Every Mismatch",
    headlineAccent: "Before Customs Does.",
    description: "TradeGuard extracts 40+ fields from your Shipping Bill and Commercial Invoice, maps them intelligently, and flags every discrepancy in under 5 seconds.",
    stats: [
      { value: "40+", label: "Fields Validated" },
      { value: "< 5s", label: "Analysis Time" },
      { value: "99%", label: "Accuracy Rate" },
    ],
    cta: "Try TradeGuard Free",
    href: "/products/tradeguard",
    color: "#0066CC",
    gradientFrom: "#0066CC",
    gradientTo: "#0052A3",
    icon: FileCheck,
  },
  {
    id: "patram",
    name: "Patram AI",
    tagline: "Export Intelligence Advisor",
    headline: "Your 24/7 Export Expert",
    headlineAccent: "On Demand.",
    description: "Upload any trade document and ask questions in plain English. Patram AI reads the entire document and gives you accurate, sourced answers instantly.",
    stats: [
      { value: "190+", label: "Countries Covered" },
      { value: "24/7", label: "Always Available" },
      { value: "1.5s", label: "Avg Response Time" },
    ],
    cta: "Try Patram AI Free",
    href: "/products/patram",
    color: "#00A86B",
    gradientFrom: "#00A86B",
    gradientTo: "#008B5E",
    icon: Globe,
  },
  {
    id: "tariffiq",
    name: "TariffIQ",
    tagline: "HSN Classification & Duty Calculator",
    headline: "Classify Once. Maximize",
    headlineAccent: "Every Incentive.",
    description: "Stop guessing HSN codes. TariffIQ uses AI to classify your products to 8-digit ITC-HS and instantly shows whether RoDTEP or Duty Drawback earns you more.",
    stats: [
      { value: "95%", label: "Classification Accuracy" },
      { value: "< 3s", label: "Classification Time" },
      { value: "2x", label: "More Incentive Claims" },
    ],
    cta: "Try TariffIQ Free",
    href: "/products/tariffiq",
    color: "#1B4F8A",
    gradientFrom: "#1B4F8A",
    gradientTo: "#2563EB",
    icon: Calculator,
  },
]

export function ProductsHero() {
  const [activeProduct, setActiveProduct] = useState(0)
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

  // Auto-rotate products
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProduct((prev) => (prev + 1) % products.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const product = products[activeProduct]
  const Icon = product.icon

  return (
    <section
      ref={sectionRef}
      className="page-snap lg:min-h-[100svh] pt-[130px] lg:pt-[140px] pb-20 lg:pb-10 px-4 lg:px-8 flex items-start lg:items-center relative overflow-hidden"
    >
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 transition-all duration-1000 ease-out"
        style={{
          background: `radial-gradient(ellipse 80% 50% at 50% -20%, ${product.color}15 0%, transparent 50%)`,
        }}
      />
      
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(${product.color}20 1px, transparent 1px),
            linear-gradient(90deg, ${product.color}20 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="w-full max-w-[1400px] mx-auto relative">
        {/* Product Tabs */}
        <div className={`flex justify-center mb-8 lg:mb-12 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex gap-2 p-1.5 rounded-2xl" style={{ background: "rgba(15, 23, 42, 0.05)" }}>
            {products.map((p, idx) => {
              const PIcon = p.icon
              return (
                <button
                  key={p.id}
                  onClick={() => setActiveProduct(idx)}
                  className={`relative flex items-center gap-2 px-4 lg:px-6 py-2.5 lg:py-3 rounded-xl text-[14px] lg:text-[15px] font-semibold transition-all duration-300 ${
                    activeProduct === idx ? "text-white" : "text-[#475569] hover:text-[#0F172A]"
                  }`}
                >
                  {activeProduct === idx && (
                    <div
                      className="absolute inset-0 rounded-xl transition-all duration-500"
                      style={{
                        background: `linear-gradient(135deg, ${p.gradientFrom}, ${p.gradientTo})`,
                        boxShadow: `0 4px 20px ${p.color}40`,
                      }}
                    />
                  )}
                  <PIcon className="w-4 h-4 relative z-10" />
                  <span className="relative z-10 hidden sm:inline">{p.name}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className={`transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 animate-fade-in"
              style={{
                background: `${product.color}10`,
                border: `1px solid ${product.color}25`,
              }}
            >
              <Icon className="w-4 h-4" style={{ color: product.color }} />
              <span className="text-[13px] font-semibold" style={{ color: product.color }}>
                {product.tagline}
              </span>
            </div>

            {/* Headline */}
            <h1
              key={`headline-${activeProduct}`}
              className="text-[36px] lg:text-[56px] xl:text-[64px] font-extrabold leading-[1.1] tracking-[-0.03em] mb-4 lg:mb-6 animate-fade-in-up"
              style={{ color: "#0F172A" }}
            >
              {product.headline}
              <br />
              <span style={{ color: product.color }}>{product.headlineAccent}</span>
            </h1>

            {/* Description */}
            <p
              key={`desc-${activeProduct}`}
              className="text-[16px] lg:text-[18px] leading-relaxed max-w-[520px] mb-6 lg:mb-8 animate-fade-in-up stagger-1"
              style={{ color: "#475569" }}
            >
              {product.description}
            </p>

            {/* Stats */}
            <div
              key={`stats-${activeProduct}`}
              className="flex items-start gap-6 lg:gap-10 mb-8 lg:mb-10 animate-fade-in-up stagger-2"
            >
              {product.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span
                    className="text-[28px] lg:text-[36px] font-black tracking-tight leading-none"
                    style={{ color: product.color }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-[12px] lg:text-[13px] font-medium mt-1" style={{ color: "#94A3B8" }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 animate-fade-in-up stagger-3">
              <Link
                href={product.href}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 lg:px-8 lg:py-4 rounded-xl text-[15px] lg:text-[16px] font-bold transition-all duration-300 hover:scale-105 btn-shine"
                style={{
                  background: `linear-gradient(135deg, ${product.gradientFrom}, ${product.gradientTo})`,
                  color: "#FFFFFF",
                  boxShadow: `0 4px 25px ${product.color}40`,
                }}
              >
                {product.cta}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={product.href}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 lg:px-8 lg:py-4 rounded-xl text-[15px] lg:text-[16px] font-semibold transition-all duration-300 hover:scale-105"
                style={{
                  background: "#FFFFFF",
                  border: `2px solid ${product.color}30`,
                  color: product.color,
                }}
              >
                See How It Works
              </Link>
            </div>
          </div>

          {/* Right: Visual */}
          <div className={`relative transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <ProductVisual product={product} />
          </div>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center gap-2 mt-10 lg:mt-16">
          {products.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveProduct(idx)}
              className="relative h-2 rounded-full transition-all duration-300 overflow-hidden"
              style={{
                width: activeProduct === idx ? "40px" : "8px",
                background: activeProduct === idx ? "transparent" : "#CBD5E1",
              }}
            >
              {activeProduct === idx && (
                <>
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{ background: `linear-gradient(90deg, ${product.gradientFrom}, ${product.gradientTo})` }}
                  />
                  <div
                    className="absolute inset-0 rounded-full origin-left"
                    style={{
                      background: "rgba(255,255,255,0.4)",
                      animation: "progress 6s linear",
                    }}
                  />
                </>
              )}
            </button>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>
    </section>
  )
}

function ProductVisual({ product }: { product: typeof products[0] }) {
  if (product.id === "tradeguard") {
    return <TradeGuardVisual color={product.color} />
  }
  if (product.id === "patram") {
    return <PatramVisual color={product.color} />
  }
  return <TariffIQVisual color={product.color} />
}

function TradeGuardVisual({ color }: { color: string }) {
  const fields = [
    { field: "Exporter Name", value: "RAJESH EXPORTS LTD", status: "match" },
    { field: "HSN Code", value: "8471.30", status: "match" },
    { field: "FOB Value", sb: "$42,500", inv: "$41,800", status: "mismatch" },
    { field: "Port of Loading", sb: "INNSA1", inv: "NHAVA SHEVA", status: "warning" },
    { field: "IEC Number", value: "0508004381", status: "match" },
  ]

  return (
    <div
      className="relative rounded-2xl p-6 lg:p-8 animate-float"
      style={{
        background: "linear-gradient(145deg, #FFFFFF 0%, #F8FAFC 100%)",
        border: "1px solid #E2E8F0",
        boxShadow: `0 25px 80px ${color}15, 0 10px 40px rgba(0,0,0,0.08)`,
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ background: `linear-gradient(135deg, ${color}, #00A86B)` }}
          >
            <FileCheck className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-[15px] font-bold" style={{ color: "#0F172A" }}>TradeGuard Scan</p>
            <p className="text-[12px]" style={{ color: "#94A3B8" }}>SB_0441 vs INV_0441</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#00A86B" }} />
          <span className="text-[12px] font-semibold" style={{ color: "#00A86B" }}>Scanning...</span>
        </div>
      </div>

      {/* Fields */}
      <div className="space-y-3">
        {fields.map((f, idx) => (
          <div
            key={idx}
            className="rounded-xl p-3 transition-all"
            style={{
              background: f.status === "mismatch" ? "rgba(245,158,11,0.06)" : f.status === "warning" ? "rgba(245,158,11,0.04)" : "#FAFAFA",
              border: f.status === "mismatch" ? "1px solid rgba(245,158,11,0.3)" : f.status === "warning" ? "1px solid rgba(245,158,11,0.2)" : "1px solid #E2E8F0",
            }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center"
                  style={{
                    background: f.status === "match" ? "rgba(0,168,107,0.12)" : "rgba(245,158,11,0.12)",
                  }}
                >
                  {f.status === "match" ? (
                    <svg className="w-3 h-3" style={{ color: "#00A86B" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <span className="text-[10px] font-bold" style={{ color: "#F59E0B" }}>{f.status === "mismatch" ? "!" : "~"}</span>
                  )}
                </div>
                <span className="text-[13px] font-medium" style={{ color: "#475569" }}>{f.field}</span>
              </div>
              <span className="text-[12px] font-mono" style={{ color: f.status === "match" ? "#0F172A" : "#D97706" }}>
                {f.value || f.sb}
              </span>
            </div>
            {f.status !== "match" && f.inv && (
              <div className="flex items-center gap-2 mt-2 ml-7.5 text-[11px]">
                <span className="px-1.5 py-0.5 rounded" style={{ background: `${color}10`, color }}>SB</span>
                <span style={{ color: "#0F172A" }}>{f.sb}</span>
                <span style={{ color: "#CBD5E1" }}>vs</span>
                <span className="px-1.5 py-0.5 rounded" style={{ background: "rgba(245,158,11,0.1)", color: "#F59E0B" }}>INV</span>
                <span style={{ color: "#D97706" }}>{f.inv}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function PatramVisual({ color }: { color: string }) {
  return (
    <div
      className="relative rounded-2xl p-6 lg:p-8 animate-float"
      style={{
        background: "linear-gradient(145deg, #FFFFFF 0%, #F8FAFC 100%)",
        border: "1px solid #E2E8F0",
        boxShadow: `0 25px 80px ${color}15, 0 10px 40px rgba(0,0,0,0.08)`,
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ background: `linear-gradient(135deg, ${color}, #0066CC)` }}
          >
            <Globe className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-[15px] font-bold" style={{ color: "#0F172A" }}>Patram AI</p>
            <p className="text-[12px] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: color }} />
              <span style={{ color: "#94A3B8" }}>Online</span>
            </p>
          </div>
        </div>
        <div className="text-[11px] px-2 py-1 rounded-lg" style={{ background: "#F1F5F9", color: "#64748B" }}>
          export_policy_2024.pdf
        </div>
      </div>

      {/* Chat */}
      <div className="space-y-4">
        {/* User message */}
        <div className="flex justify-end">
          <div className="max-w-[85%] px-4 py-3 rounded-2xl rounded-br-md" style={{ background: color, color: "white" }}>
            <p className="text-[14px]">Can I export cotton fabric to Germany? What documents do I need?</p>
          </div>
        </div>

        {/* AI response */}
        <div className="space-y-3">
          <div className="px-4 py-3 rounded-2xl rounded-bl-md" style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}>
            <p className="text-[14px] leading-relaxed" style={{ color: "#475569" }}>
              Based on your uploaded policy document, cotton fabric (HSN 5208) can be exported to Germany freely. However, there are specific requirements:
            </p>
          </div>

          {/* Compliance card */}
          <div className="ml-4 p-3 rounded-xl" style={{ background: "rgba(245,158,11,0.06)", border: "1px solid rgba(245,158,11,0.2)" }}>
            <div className="flex items-start gap-2">
              <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "rgba(245,158,11,0.15)" }}>
                <span className="text-[10px]" style={{ color: "#F59E0B" }}>!</span>
              </span>
              <div>
                <p className="text-[13px] font-semibold" style={{ color: "#D97706" }}>EU Compliance Required</p>
                <p className="text-[12px] mt-0.5" style={{ color: "#92400E" }}>
                  Azo dyes are prohibited in textiles sold in the EU. Your fabric must be tested and certified below 30 mg/kg.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Input */}
      <div className="mt-6 flex items-center gap-2 px-4 py-3 rounded-xl" style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}>
        <span className="text-[14px]" style={{ color: "#94A3B8" }}>Ask about your export...</span>
        <div className="ml-auto w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: color }}>
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </div>
      </div>
    </div>
  )
}

function TariffIQVisual({ color }: { color: string }) {
  return (
    <div
      className="relative rounded-2xl p-6 lg:p-8 animate-float"
      style={{
        background: "linear-gradient(145deg, #FFFFFF 0%, #F8FAFC 100%)",
        border: "1px solid #E2E8F0",
        boxShadow: `0 25px 80px ${color}15, 0 10px 40px rgba(0,0,0,0.08)`,
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full" style={{ background: "#FFBD2E" }} />
            <span className="w-3 h-3 rounded-full" style={{ background: "#00A86B" }} />
          </div>
          <p className="text-[15px] font-bold" style={{ color: "#0F172A" }}>TariffIQ Classification</p>
        </div>
      </div>

      {/* Product Description Input */}
      <div className="mb-6">
        <p className="text-[11px] font-semibold uppercase tracking-wider mb-2" style={{ color: "#94A3B8" }}>
          Product Description
        </p>
        <div className="flex items-center gap-2 px-4 py-3 rounded-xl" style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}>
          <svg className="w-4 h-4" style={{ color: "#94A3B8" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span className="text-[14px]" style={{ color: "#0F172A" }}>Basmati rice, aged 2 years, for export to UAE</span>
          <span className="animate-pulse" style={{ color }}>|</span>
        </div>
      </div>

      {/* Classification Result */}
      <div className="p-4 rounded-xl mb-4" style={{ background: `${color}08`, border: `1px solid ${color}20` }}>
        <div className="flex items-center justify-between mb-3">
          <p className="text-[12px] font-semibold uppercase tracking-wider" style={{ color: "#94A3B8" }}>Classification Result</p>
          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold" style={{ background: `${color}15`, color }}>95% Match</span>
        </div>
        <div className="flex items-center gap-4">
          <div>
            <p className="text-[11px]" style={{ color: "#94A3B8" }}>HSN Code</p>
            <p className="text-[20px] font-mono font-bold" style={{ color }}>1006.30.20</p>
          </div>
          <div className="h-8 w-px" style={{ background: "#E2E8F0" }} />
          <div>
            <p className="text-[11px]" style={{ color: "#94A3B8" }}>Description</p>
            <p className="text-[14px] font-medium" style={{ color: "#0F172A" }}>Semi-milled or wholly milled rice</p>
          </div>
        </div>
      </div>

      {/* Incentive Comparison */}
      <div className="grid grid-cols-2 gap-3">
        <div className="p-3 rounded-xl" style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}>
          <p className="text-[11px] font-semibold mb-1" style={{ color: "#94A3B8" }}>RoDTEP Rate</p>
          <p className="text-[18px] font-bold" style={{ color: "#00A86B" }}>0.5%</p>
        </div>
        <div className="p-3 rounded-xl" style={{ background: "rgba(0,168,107,0.06)", border: "1px solid rgba(0,168,107,0.2)" }}>
          <p className="text-[11px] font-semibold mb-1" style={{ color: "#00A86B" }}>Duty Drawback</p>
          <p className="text-[18px] font-bold" style={{ color: "#00A86B" }}>1.2%</p>
          <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded" style={{ background: "#00A86B", color: "white" }}>BETTER</span>
        </div>
      </div>
    </div>
  )
}
