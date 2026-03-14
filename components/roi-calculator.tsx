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
    <section ref={ref} id="calculator" className="py-8 lg:py-12 px-4 lg:px-6" style={{ background: "#F8FAFC" }}>
      <div className="w-full max-w-[1000px] mx-auto">
        {/* Header */}
        <div className={`text-center mb-6 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold tracking-[0.12em] uppercase mb-3"
            style={{ background: "rgba(0,102,204,0.1)", border: "1px solid rgba(0,102,204,0.25)", color: "#0066CC" }}>
            ROI CALCULATOR
          </div>
          <h2 className="text-[26px] lg:text-[40px] font-bold leading-tight mb-2" style={{ color: "#0F172A" }}>
            Calculate Your <span className="text-[#0066CC]">Annual Exposure</span>
          </h2>
        </div>

        {/* Calculator card */}
        <div className={`grid lg:grid-cols-2 gap-4 transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Input Panel */}
          <div className="rounded-xl p-6" style={{ background: "#FFFFFF", border: "1px solid #E2E8F0" }}>
            <h3 className="text-lg font-bold mb-6" style={{ color: "#0F172A" }}>Your Numbers</h3>
            
            {/* Sliders */}
            <div className="space-y-6">
              {/* Monthly Shipments */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-medium" style={{ color: "#475569" }}>Monthly Shipments</label>
                  <span className="font-mono text-xl font-semibold" style={{ color: "#0066CC" }}>{shipments}</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="500"
                  step="10"
                  value={shipments}
                  onChange={(e) => setShipments(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-xs mt-1" style={{ color: "#94A3B8" }}>
                  <span>10</span>
                  <span>500</span>
                </div>
              </div>

              {/* Average FOB Value */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-medium" style={{ color: "#475569" }}>Avg FOB Value (₹ Lakhs)</label>
                  <span className="font-mono text-xl font-semibold" style={{ color: "#0066CC" }}>₹{fobValue}L</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="200"
                  step="5"
                  value={fobValue}
                  onChange={(e) => setFobValue(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-xs mt-1" style={{ color: "#94A3B8" }}>
                  <span>₹10L</span>
                  <span>₹200L</span>
                </div>
              </div>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-3 mt-6">
              <div className="p-3 rounded-lg" style={{ background: "#F8FAFC" }}>
                <span className="text-[10px] block mb-1" style={{ color: "#64748B" }}>Monthly Volume</span>
                <span className="font-mono text-base font-semibold" style={{ color: "#0F172A" }}>{formatCrore(monthlyVolume)}</span>
              </div>
              <div className="p-3 rounded-lg" style={{ background: "rgba(220,38,38,0.05)" }}>
                <span className="text-[10px] block mb-1" style={{ color: "#64748B" }}>Annual Risk (5%)</span>
                <span className="font-mono text-base font-semibold" style={{ color: "#DC2626" }}>{formatCrore(annualRisk)}</span>
              </div>
            </div>
          </div>

          {/* Results Panel */}
          <div className="rounded-xl p-6 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0066CC 0%, #0052A3 100%)", boxShadow: "0 20px 60px rgba(0,102,204,0.3)" }}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2" />
            
            <h3 className="text-lg font-bold mb-6 text-white relative z-10">Your Protection</h3>
            
            <div className="text-center py-6 relative z-10">
              <p className="text-sm mb-2 text-white/70">Estimated Annual Protection</p>
              <p className="font-mono text-3xl lg:text-4xl font-bold text-white">
                {formatCrore(estimatedProtectionLow)} – {formatCrore(estimatedProtectionHigh)}
              </p>
            </div>

            <div className="space-y-3 mt-4 relative z-10">
              <div className="flex justify-between items-center py-2" style={{ borderBottom: "1px solid rgba(255,255,255,0.2)" }}>
                <span className="text-white/70 text-sm">Error Rate Reduction</span>
                <span className="font-mono font-semibold text-white">{"8–12% → <1%"}</span>
              </div>
              <div className="flex justify-between items-center py-2" style={{ borderBottom: "1px solid rgba(255,255,255,0.2)" }}>
                <span className="text-white/70 text-sm">Time Saved/Month</span>
                <span className="font-mono font-semibold text-white">{Math.round(shipments * 3)} hrs</span>
              </div>
            </div>

            <a
              href="#demo"
              className="w-full mt-6 py-3 rounded-lg text-center font-bold text-sm transition-all duration-300 hover:scale-105 block relative z-10"
              style={{ background: "#FFFFFF", color: "#0066CC" }}
            >
              Get Your Report
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
