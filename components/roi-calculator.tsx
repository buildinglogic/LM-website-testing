"use client"

import { useState } from "react"

const userTypes = [
  { id: "exporter", label: "Exporter" },
  { id: "cha", label: "CHA / Freight Forwarder" },
  { id: "importer", label: "Importer" },
]

export function ROICalculator() {
  const [userType, setUserType] = useState("exporter")
  const [shipments, setShipments] = useState(100)
  const [fobValue, setFobValue] = useState(50)

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
    <section id="calculator" className="py-20 lg:py-30 px-6 lg:px-20" style={{ background: "#0D1526" }}>
      <div className="max-w-[860px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold tracking-[0.12em] uppercase mb-6"
            style={{ background: "rgba(0,229,180,0.1)", border: "1px solid rgba(0,229,180,0.25)", color: "#00E5B4" }}>
            CALCULATE YOUR SAVINGS
          </div>
          <h2 className="text-3xl lg:text-[52px] font-bold text-white leading-tight mb-4">
            How Much Is Liquidmind Worth to Your Business?
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-xl mx-auto">
            Move the sliders. See your exact annual protection value.
          </p>
        </div>

        {/* Calculator card */}
        <div className="rounded-2xl p-8 lg:p-12"
          style={{ 
            background: "#121E33", 
            border: "1.5px solid #00E5B4", 
            boxShadow: "0 0 40px rgba(0,229,180,0.12)" 
          }}>
          
          {/* User type toggle */}
          <div className="mb-8">
            <label className="text-[#94A3B8] text-sm font-medium mb-3 block">I am a:</label>
            <div className="flex flex-wrap gap-2">
              {userTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setUserType(type.id)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                    userType === type.id
                      ? "text-[#00E5B4]"
                      : "text-[#64748B] hover:text-white"
                  }`}
                  style={{
                    background: userType === type.id ? "rgba(0,229,180,0.1)" : "transparent",
                    border: userType === type.id ? "1px solid #00E5B4" : "1px solid #1E3557",
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
                <label className="text-[#94A3B8] text-sm font-medium">Monthly Shipments</label>
                <span className="text-[#00E5B4] font-mono text-2xl font-semibold">{shipments}</span>
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
              <div className="flex justify-between text-[#64748B] text-xs mt-1">
                <span>10</span>
                <span>1000</span>
              </div>
            </div>

            {/* Average FOB Value */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-[#94A3B8] text-sm font-medium">Average FOB Value per Shipment (₹ Lakhs)</label>
                <span className="text-[#00E5B4] font-mono text-2xl font-semibold">₹{fobValue}L</span>
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
              <div className="flex justify-between text-[#64748B] text-xs mt-1">
                <span>₹10L</span>
                <span>₹500L</span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-[#1E3557] my-8" />

          {/* Output grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="p-4 rounded-xl" style={{ background: "#0D1526" }}>
              <span className="text-[#64748B] text-xs block mb-1">Monthly Export Volume</span>
              <span className="text-white font-mono text-xl font-semibold">{formatCrore(monthlyVolume)}</span>
            </div>
            <div className="p-4 rounded-xl" style={{ background: "#0D1526" }}>
              <span className="text-[#64748B] text-xs block mb-1">Annual Value at Risk (5%)</span>
              <span className="text-[#FF4444] font-mono text-xl font-semibold">{formatCrore(annualRisk)}</span>
            </div>
            <div className="p-4 rounded-xl" style={{ background: "#0D1526" }}>
              <span className="text-[#64748B] text-xs block mb-1">Staff Hours Freed/Month</span>
              <span className="text-[#00E5B4] font-mono text-xl font-semibold">{staffHours} hours</span>
            </div>
            <div className="p-4 rounded-xl" style={{ background: "#0D1526" }}>
              <span className="text-[#64748B] text-xs block mb-1">Error Rate Reduction</span>
              <span className="text-[#00E5B4] font-mono text-xl font-semibold">{"8–12% → < 1%"}</span>
            </div>
          </div>

          {/* Big result callout */}
          <div className="rounded-xl p-6 text-center" style={{ background: "#0D1526", border: "1.5px solid #00E5B4" }}>
            <span className="text-2xl mb-2 block">💰</span>
            <p className="text-[#94A3B8] text-sm mb-2">Estimated Annual Protection</p>
            <p className="text-[#00E5B4] font-mono text-4xl lg:text-[52px] font-semibold">
              {formatCrore(estimatedProtectionLow)} – {formatCrore(estimatedProtectionHigh)}
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8">
          <a href="#demo" className="inline-block px-8 py-4 rounded-[10px] text-base font-bold transition-all hover:brightness-110 hover:scale-[1.02]"
            style={{ background: "linear-gradient(90deg, #00E5B4, #00B8D9)", color: "#050A14", boxShadow: "0 0 30px rgba(0,229,180,0.25)" }}>
            Book a Demo to Confirm Your Numbers →
          </a>
          <p className="text-[#64748B] text-sm mt-4">
            No commitment. We calculate your actual exposure in 30 minutes.
          </p>
        </div>
      </div>
    </section>
  )
}
