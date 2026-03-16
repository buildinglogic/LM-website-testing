"use client"

import { useState, useRef, useEffect } from "react"

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold])

  return { ref, isInView }
}

export function ROICalculator() {
  const [shipments, setShipments] = useState(100)
  const [fobValue, setFobValue] = useState(50)
  const { ref, isInView } = useInView()

  // Calculations
  const monthlyVolume = shipments * fobValue * 100000
  const annualVolume = monthlyVolume * 12
  const annualRisk = annualVolume * 0.05

  // Format numbers
  const formatCrore = (num: number) => {
    const crore = num / 10000000
    if (crore >= 1) {
      return `₹${crore.toFixed(1)} Cr`
    }
    return `₹${(num / 100000).toFixed(1)} L`
  }

  const estimatedProtectionLow = annualRisk * 0.6
  const estimatedProtectionHigh = annualRisk * 0.9

  return (
    <section ref={ref} id="calculator" className="py-6 lg:py-8 px-4 lg:px-6" style={{ background: "#F8FAFC" }}>
      <div className="w-full max-w-[1000px] mx-auto">
        {/* Header */}
        <div className={`text-center mb-4 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-3 mb-1.5">
            <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)" }} />
            <span className="text-[10px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#94A3B8" }}>ROI Calculator</span>
            <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(270deg, #0066CC, #00A86B)" }} />
          </div>
          <h2 className="text-[20px] lg:text-[30px] font-extrabold leading-tight" style={{ color: "#0F172A" }}>
            Calculate Your{" "}
            <span className="bg-gradient-to-r from-[#0066CC] to-[#00A86B] bg-clip-text text-transparent">Annual Exposure</span>
          </h2>
        </div>

        {/* Calculator card */}
        <div className={`grid lg:grid-cols-2 gap-4 transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

          {/* Input Panel */}
          <div className="rounded-xl p-4" style={{ background: "#FFFFFF", border: "1px solid #E2E8F0" }}>
            <h3 className="text-[14px] font-bold mb-3" style={{ color: "#0F172A" }}>Your Numbers</h3>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-[12px] font-medium" style={{ color: "#475569" }}>Monthly Shipments</label>
                  <span className="font-mono text-[15px] font-semibold" style={{ color: "#0066CC" }}>{shipments}</span>
                </div>
                <input type="range" min="10" max="500" step="10" value={shipments}
                  onChange={(e) => setShipments(Number(e.target.value))} className="w-full" />
                <div className="flex justify-between text-[11px] mt-0.5" style={{ color: "#94A3B8" }}>
                  <span>10</span><span>500</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-[12px] font-medium" style={{ color: "#475569" }}>Avg FOB Value (₹ Lakhs)</label>
                  <span className="font-mono text-[15px] font-semibold" style={{ color: "#0066CC" }}>₹{fobValue}L</span>
                </div>
                <input type="range" min="10" max="200" step="5" value={fobValue}
                  onChange={(e) => setFobValue(Number(e.target.value))} className="w-full" />
                <div className="flex justify-between text-[11px] mt-0.5" style={{ color: "#94A3B8" }}>
                  <span>₹10L</span><span>₹200L</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="p-2.5 rounded-lg" style={{ background: "#F8FAFC" }}>
                <span className="text-[10px] block mb-0.5" style={{ color: "#64748B" }}>Monthly Volume</span>
                <span className="font-mono text-[13px] font-semibold" style={{ color: "#0F172A" }}>{formatCrore(monthlyVolume)}</span>
              </div>
              <div className="p-2.5 rounded-lg" style={{ background: "rgba(220,38,38,0.05)" }}>
                <span className="text-[10px] block mb-0.5" style={{ color: "#64748B" }}>Annual Risk (5%)</span>
                <span className="font-mono text-[13px] font-semibold" style={{ color: "#DC2626" }}>{formatCrore(annualRisk)}</span>
              </div>
            </div>
          </div>

          {/* Results Panel */}
          <div className="rounded-xl p-4 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0066CC 0%, #0052A3 100%)", boxShadow: "0 12px 40px rgba(0,102,204,0.3)" }}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2" />

            <h3 className="text-[14px] font-bold mb-3 text-white relative z-10">Your Protection</h3>

            <div className="text-center py-3 relative z-10">
              <p className="text-[11px] mb-1 text-white/70">Estimated Annual Protection</p>
              <p className="font-mono text-[26px] lg:text-[32px] font-bold text-white leading-tight">
                {formatCrore(estimatedProtectionLow)} – {formatCrore(estimatedProtectionHigh)}
              </p>
            </div>

            <div className="space-y-0 mt-2 relative z-10">
              <div className="flex justify-between items-center py-2" style={{ borderBottom: "1px solid rgba(255,255,255,0.2)" }}>
                <span className="text-white/70 text-[12px]">Error Rate Reduction</span>
                <span className="font-mono text-[12px] font-semibold text-white">{"8–12% → <1%"}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-white/70 text-[12px]">Time Saved/Month</span>
                <span className="font-mono text-[12px] font-semibold text-white">{Math.round(shipments * 3)} hrs</span>
              </div>
            </div>

            <a href="#demo"
              className="w-full mt-3 py-2.5 rounded-lg text-center font-bold text-[13px] transition-all duration-300 hover:scale-105 block relative z-10"
              style={{ background: "#FFFFFF", color: "#0066CC" }}>
              Get Your Report
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
