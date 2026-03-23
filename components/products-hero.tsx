"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Link from "next/link"
import { ArrowRight, FileCheck, Globe, Calculator, Check, Sparkles } from "lucide-react"
import { trackProductTabNavigated } from "@/lib/amplitude"

const products = [
  {
    id: "tradeguard",
    name: "TradeGuard",
    tagline: "Document Mismatch Detection",
    headline: "Catch Every",
    headlineAccent: "Mismatch",
    headlineSuffix: "Before Customs Does.",
    description: "TradeGuard extracts 40+ fields from your Shipping Bill and Commercial Invoice, maps them intelligently, and flags every discrepancy in under 5 seconds.",
    stats: [
      { value: "40+", label: "Fields Validated" },
      { value: "< 5s", label: "Analysis Time" },
      { value: "99%", label: "Accuracy Rate" },
    ],
    features: [
      "HSN / HS Code cross-validation",
      "Port code semantic matching",
      "FOB value & currency detection",
      "IEC / GSTIN verification",
      "Unit quantity conflict flagging",
      "Country origin mismatch alerts",
    ],
    cta: "Try TradeGuard Free",
    href: "/products/tradeguard",
    color: "#0066CC",
    accentColor: "#00A86B",
    gradientFrom: "#0066CC",
    gradientTo: "#0052A3",
    icon: FileCheck,
  },
  {
    id: "patram",
    name: "Patram AI",
    tagline: "Export Intelligence Advisor",
    headline: "Your 24/7",
    headlineAccent: "Export Expert",
    headlineSuffix: "On Demand.",
    description: "Upload any trade document and ask questions in plain English. Patram AI reads the entire document and gives you accurate, sourced answers instantly.",
    stats: [
      { value: "190+", label: "Countries Covered" },
      { value: "24/7", label: "Always Available" },
      { value: "1.5s", label: "Avg Response Time" },
    ],
    features: [
      "Country-specific customs rules",
      "Required document checklist",
      "Live duty rate lookup",
      "Prohibited goods detection",
      "GSP eligibility check",
      "Multi-country comparison",
    ],
    cta: "Try Patram AI Free",
    href: "/products/patram",
    color: "#00A86B",
    accentColor: "#0066CC",
    gradientFrom: "#00A86B",
    gradientTo: "#008B5E",
    icon: Globe,
  },
  {
    id: "tariffiq",
    name: "TariffIQ",
    tagline: "HSN Classification & Duty Calculator",
    headline: "Classify Once.",
    headlineAccent: "Maximize",
    headlineSuffix: "Every Incentive.",
    description: "Stop guessing HSN codes. TariffIQ uses AI to classify your products to 8-digit ITC-HS and instantly shows whether RoDTEP or Duty Drawback earns you more.",
    stats: [
      { value: "95%", label: "Classification Accuracy" },
      { value: "< 3s", label: "Classification Time" },
      { value: "2x", label: "More Incentive Claims" },
    ],
    features: [
      "8-digit ITC-HS classification",
      "Handles vague descriptions",
      "RoDTEP vs Drawback comparison",
      "Full landed cost calculation",
      "ITC-HS policy checking",
      "Clarifying Q&A support",
    ],
    cta: "Try TariffIQ Free",
    href: "/products/tariffiq",
    color: "#1B4F8A",
    accentColor: "#2563EB",
    gradientFrom: "#1B4F8A",
    gradientTo: "#2563EB",
    icon: Calculator,
  },
]

export function ProductsHero() {
  const [activeProduct, setActiveProduct] = useState(0)
  const [isInView, setIsInView] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const autoRotateRef = useRef<NodeJS.Timeout | null>(null)

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

  // Auto-rotate with smooth transition handling
  const startAutoRotate = useCallback(() => {
    if (autoRotateRef.current) clearInterval(autoRotateRef.current)
    autoRotateRef.current = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setActiveProduct((prev) => (prev + 1) % products.length)
        setTimeout(() => setIsTransitioning(false), 100)
      }, 300)
    }, 8000) // Slower rotation - 8 seconds
  }, [])

  useEffect(() => {
    startAutoRotate()
    return () => {
      if (autoRotateRef.current) clearInterval(autoRotateRef.current)
    }
  }, [startAutoRotate])

  const handleProductChange = useCallback((idx: number) => {
    if (idx === activeProduct) return
    
    // Reset auto-rotate timer on manual change
    if (autoRotateRef.current) clearInterval(autoRotateRef.current)
    
    setIsTransitioning(true)
    setTimeout(() => {
      setActiveProduct(idx)
      trackProductTabNavigated(products[idx].name, "Products Hero")
      setTimeout(() => {
        setIsTransitioning(false)
        startAutoRotate()
      }, 100)
    }, 300)
  }, [activeProduct, startAutoRotate])

  const product = products[activeProduct]
  const Icon = product.icon

  return (
    <section
      ref={sectionRef}
      id="products"
      className="relative overflow-hidden"
      style={{ scrollMarginTop: "72px" }}
    >
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 transition-all duration-1000 ease-out"
        style={{
          background: `
            radial-gradient(ellipse 120% 60% at 50% -10%, ${product.color}12 0%, transparent 60%),
            radial-gradient(ellipse 80% 40% at 80% 90%, ${product.accentColor}08 0%, transparent 50%)
          `,
        }}
      />
      
      {/* Subtle animated grid */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-1000"
        style={{
          opacity: 0.04,
          backgroundImage: `
            linear-gradient(${product.color}30 1px, transparent 1px),
            linear-gradient(90deg, ${product.color}30 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative w-full max-w-[1400px] mx-auto px-4 lg:px-8 pt-[130px] lg:pt-[140px] pb-16 lg:pb-24">
        
        {/* Section Header */}
        <div className={`text-center mb-8 lg:mb-10 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 rounded-full" style={{ background: `linear-gradient(90deg, ${product.gradientFrom}, ${product.gradientTo})` }} />
            <span className="text-[13px] font-semibold tracking-[0.2em] uppercase" style={{ color: "#94A3B8" }}>
              Our Products
            </span>
            <div className="h-px w-8 rounded-full" style={{ background: `linear-gradient(90deg, ${product.gradientTo}, ${product.gradientFrom})` }} />
          </div>
          <h2 className="text-[28px] lg:text-[42px] font-bold leading-tight" style={{ color: "#0F172A" }}>
            Three Products.{" "}
            <span className="bg-gradient-to-r from-[#0066CC] to-[#00A86B] bg-clip-text text-transparent">
              One Mission.
            </span>
          </h2>
          <p className="text-[15px] lg:text-[17px] mt-2 max-w-md mx-auto" style={{ color: "#64748B" }}>
            Stop money leaking through your trade documents.
          </p>
        </div>

        {/* Product Tabs - Premium Pill Design */}
        <div className={`flex justify-center mb-10 lg:mb-14 transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div 
            className="relative flex p-1.5 rounded-2xl transition-all duration-700 ease-out"
            style={{
              background: `linear-gradient(135deg, ${product.gradientFrom}, ${product.gradientTo})`,
              boxShadow: `0 8px 32px ${product.color}30`,
            }}
          >
            {/* Sliding indicator */}
            <div
              className="absolute top-1.5 bottom-1.5 rounded-xl bg-white transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
              style={{
                left: `calc(6px + ${activeProduct} * (100% - 12px) / 3)`,
                width: `calc((100% - 12px) / 3)`,
                boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
              }}
            />
            
            {products.map((p, idx) => {
              const PIcon = p.icon
              const isActive = activeProduct === idx
              return (
                <button
                  key={p.id}
                  onClick={() => handleProductChange(idx)}
                  className="relative z-10 flex items-center justify-center gap-2 px-4 lg:px-8 py-3 lg:py-3.5 rounded-xl transition-all duration-500 min-w-[100px] lg:min-w-[140px]"
                  style={{
                    color: isActive ? product.color : "rgba(255,255,255,0.9)",
                  }}
                >
                  <PIcon className="w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0" />
                  <span className="font-bold text-[14px] lg:text-[15px] whitespace-nowrap">{p.name}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Main Content - Fixed Height Container to prevent layout shift */}
        <div 
          className="min-h-[600px] lg:min-h-[520px]"
          style={{ transition: "min-height 0.5s ease" }}
        >
          <div 
            className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center transition-all duration-500 ${
              isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            }`}
          >
            {/* Left: Content */}
            <div className={`transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {/* Badge */}
              <div
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full mb-6"
                style={{
                  background: `linear-gradient(135deg, ${product.color}08, ${product.color}15)`,
                  border: `1.5px solid ${product.color}25`,
                  boxShadow: `0 4px 20px ${product.color}10`,
                }}
              >
                <div 
                  className="w-6 h-6 rounded-lg flex items-center justify-center"
                  style={{ background: `linear-gradient(135deg, ${product.gradientFrom}, ${product.gradientTo})` }}
                >
                  <Icon className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="text-[13px] font-semibold tracking-wide" style={{ color: product.color }}>
                  {product.tagline}
                </span>
              </div>

              {/* Headline - Uniform sizing */}
              <h1
                className="text-[32px] sm:text-[40px] lg:text-[52px] font-extrabold leading-[1.08] tracking-[-0.03em] mb-5"
                style={{ color: "#0F172A" }}
              >
                {product.headline}
                <br />
                <span 
                  className="relative inline-block"
                  style={{ color: product.color }}
                >
                  {product.headlineAccent}
                  <svg 
                    className="absolute -bottom-1 left-0 w-full h-2" 
                    viewBox="0 0 100 8" 
                    preserveAspectRatio="none"
                  >
                    <path 
                      d="M0 7 Q 25 0, 50 4 T 100 3" 
                      fill="none" 
                      stroke={product.color} 
                      strokeWidth="2.5" 
                      strokeLinecap="round"
                      opacity="0.3"
                    />
                  </svg>
                </span>
                <br />
                {product.headlineSuffix}
              </h1>

              {/* Description */}
              <p
                className="text-[16px] lg:text-[17px] leading-[1.7] max-w-[540px] mb-6"
                style={{ color: "#475569" }}
              >
                {product.description}
              </p>

              {/* Stats Row */}
              <div className="flex items-start gap-6 lg:gap-10 mb-8">
                {product.stats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span
                      className="text-[28px] lg:text-[36px] font-black tracking-tight leading-none tabular-nums"
                      style={{ color: product.color }}
                    >
                      {stat.value}
                    </span>
                    <span className="text-[12px] lg:text-[13px] font-medium mt-1.5" style={{ color: "#94A3B8" }}>
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  href={product.href}
                  className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 lg:px-8 lg:py-4 rounded-xl text-[15px] lg:text-[16px] font-bold transition-all duration-500 hover:scale-[1.03] btn-shine"
                  style={{
                    background: `linear-gradient(135deg, ${product.gradientFrom}, ${product.gradientTo})`,
                    color: "#FFFFFF",
                    boxShadow: `0 8px 32px ${product.color}35`,
                  }}
                >
                  {product.cta}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href={product.href}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 lg:px-8 lg:py-4 rounded-xl text-[15px] lg:text-[16px] font-semibold transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    background: "#FFFFFF",
                    border: `2px solid ${product.color}25`,
                    color: product.color,
                    boxShadow: `0 4px 16px rgba(0,0,0,0.04)`,
                  }}
                >
                  See It In Action
                </Link>
              </div>
            </div>

            {/* Right: Product Visual Card */}
            <div className={`transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <ProductCard product={product} isActive={!isTransitioning} />
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center gap-3 mt-10 lg:mt-14">
          {products.map((p, idx) => (
            <button
              key={idx}
              onClick={() => handleProductChange(idx)}
              className="group relative h-2.5 rounded-full transition-all duration-500 overflow-hidden"
              style={{
                width: activeProduct === idx ? "56px" : "12px",
                background: activeProduct === idx ? "transparent" : "#E2E8F0",
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
                      background: "rgba(255,255,255,0.5)",
                      animation: "progress-fill 8s linear",
                    }}
                  />
                </>
              )}
              <span className="sr-only">{p.name}</span>
            </button>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes progress-fill {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>
    </section>
  )
}

/* =========================================
   PRODUCT CARD - Premium Animated Visual
   ========================================= */

function ProductCard({ product, isActive }: { product: typeof products[0]; isActive: boolean }) {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  if (product.id === "tradeguard") {
    return <TradeGuardCard color={product.color} accentColor={product.accentColor} isActive={isActive && mounted} />
  }
  if (product.id === "patram") {
    return <PatramCard color={product.color} accentColor={product.accentColor} isActive={isActive && mounted} />
  }
  return <TariffIQCard color={product.color} accentColor={product.accentColor} isActive={isActive && mounted} />
}

/* TradeGuard Card */
function TradeGuardCard({ color, accentColor, isActive }: { color: string; accentColor: string; isActive: boolean }) {
  const [scanStep, setScanStep] = useState(0)
  
  const fields = [
    { field: "Exporter Name", value: "RAJESH EXPORTS LTD", status: "match" },
    { field: "HSN Code", value: "8471.30", status: "match" },
    { field: "FOB Value", sb: "$42,500", inv: "$41,800", delta: "-$700 (1.6%)", status: "mismatch" },
    { field: "Port of Loading", sb: "INNSA1", inv: "NHAVA SHEVA", status: "warning" },
    { field: "IEC Number", value: "0508904381", status: "match" },
  ]

  useEffect(() => {
    if (!isActive) {
      setScanStep(0)
      return
    }
    
    let step = 0
    const interval = setInterval(() => {
      step++
      if (step <= fields.length) {
        setScanStep(step)
      } else if (step > fields.length + 4) {
        step = 0
        setScanStep(0)
      }
    }, 600)
    
    return () => clearInterval(interval)
  }, [isActive, fields.length])

  const verified = fields.slice(0, scanStep).filter(f => f.status === "match").length
  const issues = fields.slice(0, scanStep).filter(f => f.status !== "match").length
  const isDone = scanStep >= fields.length

  return (
    <div 
      className="relative rounded-3xl overflow-hidden transition-all duration-700"
      style={{
        background: "linear-gradient(165deg, #FFFFFF 0%, #F8FAFC 100%)",
        border: `2px solid ${color}20`,
        boxShadow: `
          0 32px 80px ${color}15,
          0 16px 40px rgba(0,0,0,0.08),
          inset 0 1px 0 rgba(255,255,255,0.8)
        `,
        transform: isActive ? "translateY(0)" : "translateY(8px)",
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
              <FileCheck className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-[15px] font-bold" style={{ color: "#0F172A" }}>TradeGuard Scan</p>
              <p className="text-[12px]" style={{ color: "#94A3B8" }}>SB_0441 vs INV_0441</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {isDone ? (
              <>
                <span 
                  className="px-2.5 py-1 rounded-full text-[11px] font-bold"
                  style={{ background: `${accentColor}15`, color: accentColor }}
                >
                  {verified} verified
                </span>
                <span 
                  className="px-2.5 py-1 rounded-full text-[11px] font-bold"
                  style={{ background: "rgba(245,158,11,0.12)", color: "#F59E0B" }}
                >
                  {issues} flagged
                </span>
              </>
            ) : (
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: color }} />
                <span className="text-[12px] font-semibold" style={{ color }}>Scanning...</span>
              </div>
            )}
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-1.5 w-full rounded-full mb-5 overflow-hidden" style={{ background: "#F1F5F9" }}>
          <div 
            className="h-full rounded-full transition-all duration-500 ease-out"
            style={{
              width: `${Math.min((scanStep / fields.length) * 100, 100)}%`,
              background: isDone 
                ? `linear-gradient(90deg, ${accentColor}, ${color})`
                : `linear-gradient(90deg, ${color}, ${accentColor})`,
            }}
          />
        </div>

        {/* Fields */}
        <div className="space-y-2.5">
          {fields.map((f, idx) => {
            const visible = idx < scanStep
            const isScanning = idx === scanStep - 1 && !isDone
            const isMismatch = f.status === "mismatch"
            const isWarning = f.status === "warning"

            return (
              <div
                key={f.field}
                className="rounded-xl overflow-hidden transition-all duration-500"
                style={{
                  opacity: visible ? 1 : 0.15,
                  transform: visible ? "translateX(0)" : "translateX(-8px)",
                  border: isMismatch
                    ? "1.5px solid rgba(245,158,11,0.4)"
                    : isWarning
                      ? "1.5px solid rgba(245,158,11,0.25)"
                      : "1.5px solid #E2E8F0",
                  background: isMismatch
                    ? "rgba(245,158,11,0.05)"
                    : isWarning
                      ? "rgba(245,158,11,0.03)"
                      : "#FAFAFA",
                  boxShadow: isScanning ? `0 0 0 3px ${color}15` : "none",
                }}
              >
                <div className="flex items-center justify-between px-3.5 py-2.5">
                  <div className="flex items-center gap-2.5">
                    <div 
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{
                        background: isMismatch || isWarning 
                          ? "rgba(245,158,11,0.15)" 
                          : isScanning 
                            ? `${color}15` 
                            : `${accentColor}15`,
                      }}
                    >
                      {isScanning ? (
                        <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: color }} />
                      ) : isMismatch ? (
                        <span className="text-[10px] font-bold" style={{ color: "#F59E0B" }}>!</span>
                      ) : isWarning ? (
                        <span className="text-[10px]" style={{ color: "#F59E0B" }}>~</span>
                      ) : (
                        <Check className="w-3 h-3" style={{ color: accentColor }} />
                      )}
                    </div>
                    <span className="text-[13px] font-semibold" style={{ color: "#475569" }}>{f.field}</span>
                  </div>
                  <span 
                    className="font-mono text-[12px] font-medium"
                    style={{ color: isMismatch || isWarning ? "#D97706" : "#0F172A" }}
                  >
                    {f.value || f.sb}
                  </span>
                </div>
                
                {/* Mismatch detail row */}
                {(isMismatch || isWarning) && visible && (
                  <div className="flex items-center gap-2 px-3.5 pb-2.5 pt-0">
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded" style={{ background: `${color}10`, color }}>SB</span>
                    <span className="text-[11px] font-mono" style={{ color: "#0F172A" }}>{f.sb}</span>
                    <span style={{ color: "#CBD5E1" }}>→</span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded" style={{ background: "rgba(245,158,11,0.12)", color: "#F59E0B" }}>INV</span>
                    <span className="text-[11px] font-mono" style={{ color: "#D97706" }}>{f.inv}</span>
                    {f.delta && (
                      <span className="ml-auto text-[10px] font-bold font-mono" style={{ color: "#EF4444" }}>{f.delta}</span>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

/* Patram AI Card */
function PatramCard({ color, accentColor, isActive }: { color: string; accentColor: string; isActive: boolean }) {
  const [messageStep, setMessageStep] = useState(0)
  
  const messages = [
    {
      type: "warning",
      title: "EU Compliance Required",
      text: "Azo dyes are prohibited in textiles sold in the EU. Your fabric must be tested and certified below 30 mg/kg.",
      iconColor: "#F59E0B",
      bg: "rgba(245,158,11,0.06)",
      border: "rgba(245,158,11,0.25)",
    },
    {
      type: "doc",
      title: "Documents Required",
      text: "EUR.1 Certificate of Origin + Form A from DGFT to claim 0% import duty under EU GSP scheme.",
      iconColor: accentColor,
      bg: `${accentColor}08`,
      border: `${accentColor}25`,
    },
    {
      type: "success",
      title: "You qualify for 0% Duty",
      text: "India-EU GSP Tier A applies. On Rs.20L shipment, you save approximately Rs.2.4L in import duties.",
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
      className="relative rounded-3xl overflow-hidden transition-all duration-700"
      style={{
        background: "linear-gradient(165deg, #FFFFFF 0%, #F8FAFC 100%)",
        border: `2px solid ${color}20`,
        boxShadow: `
          0 32px 80px ${color}15,
          0 16px 40px rgba(0,0,0,0.08),
          inset 0 1px 0 rgba(255,255,255,0.8)
        `,
        transform: isActive ? "translateY(0)" : "translateY(8px)",
      }}
    >
      {/* Gradient accent bar */}
      <div 
        className="absolute top-0 left-6 right-6 h-1 rounded-b-full"
        style={{ background: `linear-gradient(90deg, ${color}, ${accentColor})` }}
      />

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
            export_policy_2024.pdf
          </div>
        </div>

        {/* User question */}
        <div className="flex justify-end mb-4">
          <div 
            className="max-w-[85%] px-4 py-3 rounded-2xl rounded-br-md"
            style={{ background: `linear-gradient(135deg, ${color}, ${accentColor})` }}
          >
            <p className="text-[14px] text-white">
              Can I export cotton fabric to Germany? What documents do I need?
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
                    border: `1.5px solid ${visible ? msg.border : "#E2E8F0"}` 
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

/* TariffIQ Card */
function TariffIQCard({ color, accentColor, isActive }: { color: string; accentColor: string; isActive: boolean }) {
  const [step, setStep] = useState(0)
  
  useEffect(() => {
    if (!isActive) {
      setStep(0)
      return
    }
    
    let current = 0
    const interval = setInterval(() => {
      current++
      if (current <= 4) {
        setStep(current)
      } else if (current > 8) {
        current = 0
        setStep(0)
      }
    }, 800)
    
    return () => clearInterval(interval)
  }, [isActive])

  const showResult = step >= 2
  const showComparison = step >= 3
  const showRecommendation = step >= 4

  return (
    <div 
      className="relative rounded-3xl overflow-hidden transition-all duration-700"
      style={{
        background: "linear-gradient(165deg, #FFFFFF 0%, #F8FAFC 100%)",
        border: `2px solid ${color}20`,
        boxShadow: `
          0 32px 80px ${color}15,
          0 16px 40px rgba(0,0,0,0.08),
          inset 0 1px 0 rgba(255,255,255,0.8)
        `,
        transform: isActive ? "translateY(0)" : "translateY(8px)",
      }}
    >
      {/* Gradient accent bar */}
      <div 
        className="absolute top-0 left-6 right-6 h-1 rounded-b-full"
        style={{ background: `linear-gradient(90deg, ${color}, ${accentColor})` }}
      />

      <div className="p-5 lg:p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded-full" style={{ background: "#FFBD2E" }} />
              <span className="w-3.5 h-3.5 rounded-full" style={{ background: "#00A86B" }} />
            </div>
            <p className="text-[15px] font-bold" style={{ color: "#0F172A" }}>TariffIQ Classification</p>
          </div>
        </div>

        {/* Product Description Input */}
        <div className="mb-5">
          <p 
            className="text-[11px] font-semibold uppercase tracking-wider mb-2"
            style={{ color: "#94A3B8" }}
          >
            Product Description
          </p>
          <div 
            className="flex items-center gap-3 px-4 py-3 rounded-xl"
            style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}
          >
            <svg className="w-4 h-4 flex-shrink-0" style={{ color: "#94A3B8" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span className="text-[14px]" style={{ color: "#0F172A" }}>
              Basmati rice, aged 2 years, for export to UAE
            </span>
            <span className="animate-pulse" style={{ color }}>|</span>
          </div>
        </div>

        {/* Classification Result */}
        <div 
          className="p-4 rounded-xl mb-4 transition-all duration-500"
          style={{ 
            background: showResult ? `${color}06` : "#F8FAFC", 
            border: `1.5px solid ${showResult ? `${color}20` : "#E2E8F0"}`,
            opacity: showResult ? 1 : 0.3,
            transform: showResult ? "translateY(0)" : "translateY(8px)",
          }}
        >
          <div className="flex items-center justify-between mb-3">
            <p className="text-[12px] font-semibold uppercase tracking-wider" style={{ color: "#94A3B8" }}>
              Classification Result
            </p>
            {showResult && (
              <span 
                className="px-2.5 py-1 rounded-full text-[11px] font-bold"
                style={{ background: `${color}15`, color }}
              >
                95% Match
              </span>
            )}
          </div>
          <div className="flex items-center gap-5">
            <div>
              <p className="text-[11px]" style={{ color: "#94A3B8" }}>HSN Code</p>
              <p className="text-[22px] font-mono font-bold" style={{ color }}>1006.30.20</p>
            </div>
            <div className="h-10 w-px" style={{ background: "#E2E8F0" }} />
            <div>
              <p className="text-[11px]" style={{ color: "#94A3B8" }}>Description</p>
              <p className="text-[14px] font-medium" style={{ color: "#0F172A" }}>Semi-milled or wholly milled rice</p>
            </div>
          </div>
        </div>

        {/* Incentive Comparison */}
        <div 
          className="grid grid-cols-2 gap-3 transition-all duration-500"
          style={{ 
            opacity: showComparison ? 1 : 0.2,
            transform: showComparison ? "translateY(0)" : "translateY(8px)",
          }}
        >
          <div 
            className="p-4 rounded-xl"
            style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}
          >
            <p className="text-[11px] font-semibold mb-1" style={{ color: "#94A3B8" }}>RoDTEP Rate</p>
            <p className="text-[20px] font-bold" style={{ color: "#64748B" }}>0.5%</p>
          </div>
          <div 
            className="p-4 rounded-xl relative overflow-hidden"
            style={{ 
              background: showRecommendation ? "rgba(0,168,107,0.08)" : "#F8FAFC", 
              border: `1.5px solid ${showRecommendation ? "rgba(0,168,107,0.3)" : "#E2E8F0"}`,
            }}
          >
            <p className="text-[11px] font-semibold mb-1" style={{ color: showRecommendation ? "#00A86B" : "#94A3B8" }}>
              Duty Drawback
            </p>
            <p className="text-[20px] font-bold" style={{ color: "#00A86B" }}>1.2%</p>
            {showRecommendation && (
              <span 
                className="absolute top-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded"
                style={{ background: "#00A86B", color: "white" }}
              >
                BETTER
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
