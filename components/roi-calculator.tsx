"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { trackROIShipmentsChanged, trackROIFOBChanged, trackROIReportClick, trackROICalculatorStarted } from "@/lib/amplitude"

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
  const hasTrackedStartRef = useRef(false)

  useEffect(() => {
    if (isInView && !hasTrackedStartRef.current) {
      hasTrackedStartRef.current = true
      trackROICalculatorStarted()
    }
  }, [isInView])

  // Debounced tracking so we don't fire on every pixel of slider drag
  const shipmentsTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  const fobTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  const handleShipmentsChange = useCallback((val: number) => {
    setShipments(val)
    clearTimeout(shipmentsTimer.current)
    shipmentsTimer.current = setTimeout(() => trackROIShipmentsChanged(val), 600)
  }, [])

  const handleFOBChange = useCallback((val: number) => {
    setFobValue(val)
    clearTimeout(fobTimer.current)
    fobTimer.current = setTimeout(() => trackROIFOBChanged(val), 600)
  }, [])

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
            <span className="text-[13px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#94A3B8" }}>ROI Calculator</span>
            <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(270deg, #0066CC, #00A86B)" }} />
          </div>
          <h2 className="text-[24px] lg:text-[34px] font-extrabold leading-tight" style={{ color: "#0F172A" }}>
            Calculate Your{" "}
            <span className="bg-gradient-to-r from-[#0066CC] to-[#00A86B] bg-clip-text text-transparent">Annual Exposure</span>
          </h2>
        </div>

        {/* Calculator card */}
        <div className={`grid lg:grid-cols-2 gap-4 transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

          {/* Input Panel */}
          <div className="rounded-xl p-4" style={{ background: "#FFFFFF", border: "1px solid #E2E8F0" }}>
            <h3 className="text-[15px] font-bold mb-3" style={{ color: "#0F172A" }}>Your Numbers</h3>

            <div className="space-y-5">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-[14px] font-semibold" style={{ color: "#475569" }}>Monthly Shipments</label>
                  <span className="font-mono text-[16px] font-bold px-2.5 py-0.5 rounded-lg" style={{ color: "#0066CC", background: "rgba(0,102,204,0.08)" }}>{shipments}</span>
                </div>
                <input
                  type="range" min="10" max="500" step="10" value={shipments}
                  onChange={(e) => handleShipmentsChange(Number(e.target.value))}
                  className="w-full"
                  style={{ ["--slider-pct" as string]: `${((shipments - 10) / (500 - 10)) * 100}%` }}
                />
                <div className="flex justify-between text-[13px] mt-1 font-medium" style={{ color: "#94A3B8" }}>
                  <span>10 shipments</span><span>500 shipments</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-[14px] font-semibold" style={{ color: "#475569" }}>Avg FOB Value (₹ Lakhs)</label>
                  <span className="font-mono text-[16px] font-bold px-2.5 py-0.5 rounded-lg" style={{ color: "#0066CC", background: "rgba(0,102,204,0.08)" }}>₹{fobValue}L</span>
                </div>
                <input
                  type="range" min="10" max="200" step="5" value={fobValue}
                  onChange={(e) => handleFOBChange(Number(e.target.value))}
                  className="w-full"
                  style={{ ["--slider-pct" as string]: `${((fobValue - 10) / (200 - 10)) * 100}%` }}
                />
                <div className="flex justify-between text-[13px] mt-1 font-medium" style={{ color: "#94A3B8" }}>
                  <span>₹10L</span><span>₹200L</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="p-2.5 rounded-lg" style={{ background: "#F8FAFC" }}>
                <span className="text-[13px] block mb-0.5" style={{ color: "#64748B" }}>Monthly Volume</span>
                <span className="font-mono text-[14px] font-semibold" style={{ color: "#0F172A" }}>{formatCrore(monthlyVolume)}</span>
              </div>
              <div className="p-2.5 rounded-lg" style={{ background: "rgba(220,38,38,0.05)" }}>
                <span className="text-[13px] block mb-0.5" style={{ color: "#64748B" }}>Annual Risk (5%)</span>
                <span className="font-mono text-[14px] font-semibold" style={{ color: "#DC2626" }}>{formatCrore(annualRisk)}</span>
              </div>
            </div>
          </div>

          {/* Results Panel */}
          <div className="rounded-xl p-4 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0066CC 0%, #0052A3 100%)", boxShadow: "0 12px 40px rgba(0,102,204,0.3)" }}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2" />

            <h3 className="text-[15px] font-bold mb-3 text-white relative z-10">Your Protection</h3>

            <div className="text-center py-3 relative z-10">
              <p className="text-[13px] mb-1 text-white/70">Estimated Annual Protection</p>
              <p className="font-mono text-[28px] lg:text-[36px] font-bold text-white leading-tight">
                {formatCrore(estimatedProtectionLow)} – {formatCrore(estimatedProtectionHigh)}
              </p>
            </div>

            <div className="space-y-0 mt-2 relative z-10">
              <div className="flex justify-between items-center py-2" style={{ borderBottom: "1px solid rgba(255,255,255,0.2)" }}>
                <span className="text-white/70 text-[14px]">Error Rate Reduction</span>
                <span className="font-mono text-[14px] font-semibold text-white">{"8–12% → <1%"}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-white/70 text-[14px]">Time Saved/Month</span>
                <span className="font-mono text-[14px] font-semibold text-white">{Math.round(shipments * 3)} hrs</span>
              </div>
            </div>

            <a href="/book-demo"
              onClick={() => trackROIReportClick(annualRisk, estimatedProtectionLow)}
              className="w-full mt-3 py-2.5 rounded-lg text-center font-bold text-[15px] transition-all duration-300 hover:scale-105 block relative z-10"
              style={{ background: "#FFFFFF", color: "#0066CC" }}>
              Get Your Report
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
