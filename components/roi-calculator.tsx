"use client"

import { useState, useRef, useEffect } from "react"

const userTypes = [
  { id: "exporter", label: "Exporter" },
  { id: "cha", label: "CHA / Freight Forwarder" },
  { id: "importer", label: "Importer" },
]

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
  const [userType, setUserType] = useState("exporter")
  const [shipments, setShipments] = useState(100)
  const [fobValue, setFobValue] = useState(50)
  const { ref, isInView } = useInView()

  // Calculations
  const monthlyVolume = shipments * fobValue * 100000
  const annualVolume = monthlyVolume * 12
  const annualRisk = annualVolume * 0.05
  const staffHours = Math.round(shipments * 3.5)

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
    <section ref={ref} id="calculator" className="py-20 lg:py-30 px-6 lg:px-20" style={{ background: "#F8FAFC" }}>
      <div className="max-w-[860px] mx-auto">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold tracking-[0.12em] uppercase mb-6"
            style={{ background: "rgba(0,102,204,0.1)", border: "1px solid rgba(0,102,204,0.25)", color: "#0066CC" }}>
            CALCULATE YOUR SAVINGS
          </div>
          <h2 className="text-3xl lg:text-[52px] font-bold leading-tight mb-4" style={{ color: "#0F172A" }}>
            How Much Is Liquidmind <span className="text-[#0066CC]">Worth to Your Business?</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "#475569" }}>
            Move the sliders. See your exact annual protection value.
          </p>
        </div>

        {/* Calculator card */}
        <div className={`rounded-2xl p-8 lg:p-12 transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ 
            background: "#FFFFFF", 
            border: "2px solid #0066CC", 
            boxShadow: "0 8px 50px rgba(0,102,204,0.12)" 
          }}>
          
          {/* User type toggle */}
          <div className="mb-8">
            <label className="text-sm font-medium mb-3 block" style={{ color: "#475569" }}>I am a:</label>
            <div className="flex flex-wrap gap-2">
              {userTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setUserType(type.id)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    userType === type.id
                      ? "text-[#0066CC]"
                      : "text-[#64748B] hover:text-[#0066CC]"
                  }`}
                  style={{
                    background: userType === type.id ? "rgba(0,102,204,0.1)" : "transparent",
                    border: userType === type.id ? "1px solid #0066CC" : "1px solid #E2E8F0",
                  }}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>

          {/* Sliders */}
          <div className="space-y-8 mb-8">
            {/* Monthly Shipments */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-medium" style={{ color: "#475569" }}>Monthly Shipments</label>
                <span className="font-mono text-2xl font-semibold" style={{ color: "#0066CC" }}>{shipments}</span>
              </div>
              <input
                type="range"
                min="10"
                max="1000"
                step="10"
                value={shipments}
                onChange={(e) => setShipments(Number(e.target.value))}
                className="w-full h-2"
              />
              <div className="flex justify-between text-xs mt-1" style={{ color: "#94A3B8" }}>
                <span>10</span>
                <span>1000</span>
              </div>
            </div>

            {/* Average FOB Value */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-medium" style={{ color: "#475569" }}>Average FOB Value per Shipment (₹ Lakhs)</label>
                <span className="font-mono text-2xl font-semibold" style={{ color: "#0066CC" }}>₹{fobValue}L</span>
              </div>
              <input
                type="range"
                min="10"
                max="500"
                step="5"
                value={fobValue}
                onChange={(e) => setFobValue(Number(e.target.value))}
                className="w-full h-2"
              />
              <div className="flex justify-between text-xs mt-1" style={{ color: "#94A3B8" }}>
                <span>₹10L</span>
                <span>₹500L</span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="my-8" style={{ borderTop: "1px solid #E2E8F0" }} />

          {/* Output grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="p-4 rounded-xl" style={{ background: "#F8FAFC" }}>
              <span className="text-xs block mb-1" style={{ color: "#64748B" }}>Monthly Export Volume</span>
              <span className="font-mono text-xl font-semibold" style={{ color: "#0F172A" }}>{formatCrore(monthlyVolume)}</span>
            </div>
            <div className="p-4 rounded-xl" style={{ background: "rgba(220,38,38,0.05)" }}>
              <span className="text-xs block mb-1" style={{ color: "#64748B" }}>Annual Value at Risk (5%)</span>
              <span className="font-mono text-xl font-semibold" style={{ color: "#DC2626" }}>{formatCrore(annualRisk)}</span>
            </div>
            <div className="p-4 rounded-xl" style={{ background: "rgba(0,168,107,0.05)" }}>
              <span className="text-xs block mb-1" style={{ color: "#64748B" }}>Staff Hours Freed/Month</span>
              <span className="font-mono text-xl font-semibold" style={{ color: "#00A86B" }}>{staffHours} hours</span>
            </div>
            <div className="p-4 rounded-xl" style={{ background: "rgba(0,168,107,0.05)" }}>
              <span className="text-xs block mb-1" style={{ color: "#64748B" }}>Error Rate Reduction</span>
              <span className="font-mono text-xl font-semibold" style={{ color: "#00A86B" }}>{"8–12% → < 1%"}</span>
            </div>
          </div>

          {/* Big result callout */}
          <div className="rounded-xl p-6 text-center" style={{ background: "linear-gradient(135deg, rgba(0,102,204,0.05) 0%, rgba(0,168,107,0.05) 100%)", border: "2px solid #0066CC" }}>
            <span className="text-2xl mb-2 block">💰</span>
            <p className="text-sm mb-2" style={{ color: "#475569" }}>Estimated Annual Protection</p>
            <p className="font-mono text-4xl lg:text-[52px] font-semibold bg-gradient-to-r from-[#0066CC] to-[#00A86B] bg-clip-text text-transparent">
              {formatCrore(estimatedProtectionLow)} – {formatCrore(estimatedProtectionHigh)}
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-8 transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a href="#demo" className="inline-block px-8 py-4 rounded-[10px] text-base font-bold transition-all duration-300 hover:scale-105 btn-shine"
            style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)", color: "#FFFFFF", boxShadow: "0 4px 25px rgba(0,102,204,0.35)" }}>
            Book a Demo to Confirm Your Numbers →
          </a>
          <p className="text-sm mt-4" style={{ color: "#64748B" }}>
            No commitment. We calculate your actual exposure in 30 minutes.
          </p>
        </div>
      </div>
    </section>
  )
}
