"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowRight, Globe, FileCheck, Calculator, Play } from "lucide-react"

// Brand colors
const BRAND_GREEN = "#00A86B"
const BRAND_BLUE = "#0066CC"

export function ProductsHero() {
  const [isInView, setIsInView] = useState(false)
  const [typedText, setTypedText] = useState("")
  const [showResponse, setShowResponse] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  
  const question = "Can I export cotton fabric to Germany?"

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

  // Typing animation for chat demo
  useEffect(() => {
    if (!isInView) return
    
    let charIndex = 0
    const typeInterval = setInterval(() => {
      if (charIndex <= question.length) {
        setTypedText(question.slice(0, charIndex))
        charIndex++
      } else {
        clearInterval(typeInterval)
        setTimeout(() => setShowResponse(true), 400)
      }
    }, 50)

    return () => clearInterval(typeInterval)
  }, [isInView])

  return (
    <section
      ref={sectionRef}
      id="products"
      className="relative overflow-hidden"
      style={{ scrollMarginTop: "72px" }}
    >
      {/* Clean gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 100% 50% at 50% 0%, ${BRAND_GREEN}08 0%, transparent 50%),
            linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)
          `,
        }}
      />

      <div className="relative w-full max-w-[1200px] mx-auto px-4 lg:px-8 pt-[120px] lg:pt-[140px] pb-16 lg:pb-20">
        
        {/* Main Hero - Patram AI */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[400px] lg:min-h-[420px]">
          
          {/* Left: Content */}
          <div className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            
            {/* Product Badge */}
            <div className="flex items-center gap-3 mb-6">
              <div 
                className="w-12 h-12 rounded-2xl flex items-center justify-center"
                style={{ 
                  background: `linear-gradient(135deg, ${BRAND_GREEN}, ${BRAND_BLUE})`,
                  boxShadow: `0 8px 24px ${BRAND_GREEN}30`
                }}
              >
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-[24px] lg:text-[28px] font-black tracking-tight" style={{ color: BRAND_GREEN }}>
                  Patram AI
                </h2>
                <span className="text-[12px] font-medium tracking-wide" style={{ color: "#64748B" }}>
                  Export Intelligence Advisor
                </span>
              </div>
            </div>

            {/* Headline - Reduced, impactful */}
            <h1
              className="text-[32px] sm:text-[40px] lg:text-[52px] font-extrabold leading-[1.05] tracking-[-0.02em] mb-4"
              style={{ color: "#0F172A" }}
            >
              Your 24/7{" "}
              <span style={{ color: BRAND_GREEN }}>Export Expert</span>
            </h1>

            {/* Description - 50% reduced */}
            <p
              className="text-[15px] lg:text-[17px] leading-relaxed max-w-[440px] mb-6"
              style={{ color: "#475569" }}
            >
              Ask any export question. Get instant, accurate answers with sources.
            </p>

            {/* Stats - Compact */}
            <div className="flex items-center gap-6 lg:gap-8 mb-8">
              {[
                { value: "190+", label: "Countries" },
                { value: "24/7", label: "Available" },
                { value: "1.5s", label: "Response" },
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <span
                    className="text-[28px] lg:text-[36px] font-black leading-none block"
                    style={{ color: BRAND_GREEN }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-[11px] lg:text-[12px] font-medium mt-1 block" style={{ color: "#94A3B8" }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs - Clean */}
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/products/patram"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-[15px] font-bold transition-all hover:scale-[1.02] btn-shine"
                style={{
                  background: `linear-gradient(135deg, ${BRAND_GREEN}, ${BRAND_BLUE})`,
                  color: "#FFFFFF",
                  boxShadow: `0 8px 32px ${BRAND_GREEN}30`,
                }}
              >
                Try Patram AI
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://www.youtube.com/watch?v=SvIrGfc1nIk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-[15px] font-semibold transition-all hover:scale-[1.02]"
                style={{ background: "#0F172A", color: "#FFFFFF" }}
              >
                <Play className="w-4 h-4" />
                Watch Demo
              </a>
            </div>
          </div>

          {/* Right: Chat Demo Card */}
          <div className={`hidden sm:block transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div 
              className="rounded-2xl overflow-hidden"
              style={{
                background: "#FFFFFF",
                border: "1px solid #E2E8F0",
                boxShadow: `0 24px 64px ${BRAND_GREEN}15, 0 8px 24px rgba(0,0,0,0.06)`,
              }}
            >
              {/* Card Header */}
              <div 
                className="px-5 py-4 flex items-center justify-between"
                style={{ 
                  background: `linear-gradient(135deg, ${BRAND_GREEN}08, ${BRAND_BLUE}05)`,
                  borderBottom: "1px solid #E2E8F0" 
                }}
              >
                <div className="flex items-center gap-3">
                  <div 
                    className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{ background: `linear-gradient(135deg, ${BRAND_GREEN}, ${BRAND_BLUE})` }}
                  >
                    <Globe className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-[14px] font-bold" style={{ color: "#0F172A" }}>Patram AI</p>
                    <p className="text-[11px] flex items-center gap-1.5" style={{ color: BRAND_GREEN }}>
                      <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                      Online
                    </p>
                  </div>
                </div>
              </div>

              {/* Chat Content */}
              <div className="p-5 space-y-4 min-h-[220px]">
                {/* User Message */}
                <div className="flex justify-end">
                  <div 
                    className="px-4 py-3 rounded-2xl rounded-tr-md max-w-[85%]"
                    style={{ background: BRAND_GREEN, color: "#FFFFFF" }}
                  >
                    <p className="text-[14px]">{typedText}<span className="animate-pulse">|</span></p>
                  </div>
                </div>

                {/* AI Response */}
                {showResponse && (
                  <div 
                    className="space-y-3 animate-fade-in"
                    style={{ animation: "fadeIn 0.4s ease-out" }}
                  >
                    <div 
                      className="px-4 py-3 rounded-2xl rounded-tl-md"
                      style={{ background: "#F1F5F9" }}
                    >
                      <p className="text-[14px] leading-relaxed" style={{ color: "#0F172A" }}>
                        Yes, cotton fabric (HSN 5208) can be exported to Germany freely.
                      </p>
                    </div>
                    
                    <div 
                      className="flex items-start gap-2 px-3 py-2.5 rounded-xl"
                      style={{ background: "#FEF3C7", border: "1px solid #FCD34D" }}
                    >
                      <span className="text-[14px]">⚠️</span>
                      <div>
                        <p className="text-[12px] font-semibold" style={{ color: "#92400E" }}>EU Compliance</p>
                        <p className="text-[11px]" style={{ color: "#A16207" }}>
                          Azo dyes prohibited. Test required below 30 mg/kg.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 lg:my-16 flex items-center gap-4">
          <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, #E2E8F0)" }} />
          <span className="text-[12px] font-semibold tracking-widest uppercase" style={{ color: "#94A3B8" }}>
            More Products
          </span>
          <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, #E2E8F0, transparent)" }} />
        </div>

        {/* Other Products - Compact Cards */}
        <div className={`grid sm:grid-cols-2 gap-4 lg:gap-6 transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* TradeGuard Card */}
          <Link
            href="/products/tradeguard"
            className="group p-5 lg:p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02]"
            style={{
              background: "#FFFFFF",
              border: "1px solid #E2E8F0",
              boxShadow: "0 4px 16px rgba(0,0,0,0.04)",
            }}
          >
            <div className="flex items-start gap-4">
              <div 
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: `linear-gradient(135deg, ${BRAND_BLUE}, #0052A3)` }}
              >
                <FileCheck className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[18px] lg:text-[20px] font-bold mb-1" style={{ color: "#0F172A" }}>
                  TradeGuard
                </h3>
                <p className="text-[13px] lg:text-[14px] mb-3" style={{ color: "#64748B" }}>
                  Catch document mismatches before customs does.
                </p>
                <div className="flex items-center gap-4 text-[12px]" style={{ color: BRAND_BLUE }}>
                  <span className="font-semibold">40+ Fields</span>
                  <span className="font-semibold">&lt; 5s Check</span>
                  <span className="font-semibold">95% Accuracy</span>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 flex-shrink-0 transition-transform group-hover:translate-x-1" style={{ color: "#94A3B8" }} />
            </div>
          </Link>

          {/* TariffIQ Card */}
          <Link
            href="/products/tariffiq"
            className="group p-5 lg:p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02]"
            style={{
              background: "#FFFFFF",
              border: "1px solid #E2E8F0",
              boxShadow: "0 4px 16px rgba(0,0,0,0.04)",
            }}
          >
            <div className="flex items-start gap-4">
              <div 
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #1B4F8A, #2563EB)" }}
              >
                <Calculator className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[18px] lg:text-[20px] font-bold mb-1" style={{ color: "#0F172A" }}>
                  TariffIQ
                </h3>
                <p className="text-[13px] lg:text-[14px] mb-3" style={{ color: "#64748B" }}>
                  AI-powered HSN classification & duty optimization.
                </p>
                <div className="flex items-center gap-4 text-[12px]" style={{ color: "#1B4F8A" }}>
                  <span className="font-semibold">95% Accuracy</span>
                  <span className="font-semibold">&lt; 3s</span>
                  <span className="font-semibold">RoDTEP vs Drawback</span>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 flex-shrink-0 transition-transform group-hover:translate-x-1" style={{ color: "#94A3B8" }} />
            </div>
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}
