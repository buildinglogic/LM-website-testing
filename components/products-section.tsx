"use client"

import { useState, useRef, useEffect } from "react"
import { HeroMockup } from "./hero-mockup"
import { Check } from "lucide-react"

const tabs = [
  { id: "tradeguard", label: "Tradeguard" },
  { id: "patram", label: "Patram AI" },
  { id: "tariffiq", label: "TariffIQ" },
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

export function ProductsSection() {
  const [activeTab, setActiveTab] = useState("tradeguard")
  const { ref, isInView } = useInView()

  return (
    <section ref={ref} id="products" className="py-8 lg:py-12 px-4 lg:px-6" style={{ background: "#FFFFFF" }}>
      <div className="w-full max-w-[1400px] mx-auto">
        {/* Header */}
        <div className={`text-center mb-6 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold tracking-[0.12em] uppercase mb-3"
            style={{ background: "rgba(0,102,204,0.1)", border: "1px solid rgba(0,102,204,0.25)", color: "#0066CC" }}>
            OUR PRODUCTS
          </div>
          <h2 className="text-[26px] lg:text-[40px] font-bold leading-tight mb-2" style={{ color: "#0F172A" }}>
            Three Products. <span className="text-[#0066CC]">One Mission.</span>
          </h2>
          <p className="text-sm max-w-lg mx-auto" style={{ color: "#475569" }}>
            Stop money leaking through your trade documents.
          </p>
        </div>

        {/* Toggle Tab bar */}
        <div className={`flex justify-center mb-6 transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex p-1 rounded-full" style={{ background: "#F1F5F9", border: "2px solid #E2E8F0" }}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeTab === tab.id ? "" : "hover:text-[#0066CC]"
                }`}
                style={{
                  background: activeTab === tab.id ? "linear-gradient(90deg, #0066CC, #00A86B)" : "transparent",
                  color: activeTab === tab.id ? "#FFFFFF" : "#64748B",
                  boxShadow: activeTab === tab.id ? "0 4px 15px rgba(0,102,204,0.3)" : "none",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab content with animation */}
        <div className={`transition-all duration-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="animate-fade-in" key={activeTab}>
            {activeTab === "tradeguard" && <TradeguardTab />}
            {activeTab === "patram" && <PatramTab />}
            {activeTab === "tariffiq" && <TariffIQTab />}
          </div>
        </div>
      </div>
    </section>
  )
}

function TradeguardTab() {
  const features = [
    "HSN / HS Code cross-validation",
    "Port code semantic matching",
    "FOB value & currency detection",
    "IEC / GSTIN verification",
    "Unit quantity conflict flagging",
    "Country origin mismatch alerts",
  ]

  return (
    <div className="grid lg:grid-cols-2 gap-8 items-center">
      <div className="animate-slide-in-left">
        <div className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold tracking-[0.12em] uppercase mb-4"
          style={{ background: "rgba(0,102,204,0.1)", border: "1px solid rgba(0,102,204,0.25)", color: "#0066CC" }}>
          MISMATCH DETECTION
        </div>
        <h3 className="text-[24px] lg:text-[36px] font-bold leading-tight mb-4" style={{ color: "#0F172A" }}>
          Stop Mismatches <span className="text-[#0066CC]">Before They Cost You.</span>
        </h3>
        <p className="text-sm leading-relaxed mb-6" style={{ color: "#475569" }}>
          Tradeguard extracts 40+ fields from your Shipping Bill and Commercial Invoice, maps them 
          intelligently, and flags every discrepancy in under 5 minutes.
        </p>

        <div className="grid grid-cols-2 gap-2 mb-6">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2 transition-all duration-300 hover:translate-x-1">
              <Check className="w-4 h-4 flex-shrink-0" style={{ color: "#00A86B" }} />
              <span className="text-[13px]" style={{ color: "#0F172A" }}>{feature}</span>
            </div>
          ))}
        </div>

        <div className="p-4 rounded-lg mb-6" style={{ background: "rgba(0,102,204,0.05)", borderLeft: "3px solid #0066CC" }}>
          <p className="text-[13px] leading-relaxed" style={{ color: "#475569" }}>
            {"For 100 shipments/month at ₹50L FOB — protects ₹1.5–₹3.5 Cr in annual refunds."}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <a href="#demo" className="px-5 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 hover:scale-105 btn-shine"
            style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)", color: "#FFFFFF", boxShadow: "0 4px 25px rgba(0,102,204,0.35)" }}>
            Get Started
          </a>
          <button className="px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 hover:border-[#0066CC] hover:text-[#0066CC]"
            style={{ background: "transparent", border: "1.5px solid #CBD5E1", color: "#0F172A" }}>
            Watch Demo
          </button>
        </div>
      </div>

      <div className="animate-slide-in-right animate-float">
        <HeroMockup animated={false} />
      </div>
    </div>
  )
}

function PatramTab() {
  const features = [
    "Multi-document cross-referencing",
    "Visual table & chart extraction",
    "Pixel-level answer verification",
    "Page-level evidence tracking",
    "Handles messy scans & layouts",
    "Natural language queries",
  ]

  return (
    <div className="grid lg:grid-cols-2 gap-8 items-center">
      <div className="animate-slide-in-left">
        <div className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold tracking-[0.12em] uppercase mb-4"
          style={{ background: "rgba(0,168,107,0.1)", border: "1px solid rgba(0,168,107,0.25)", color: "#00A86B" }}>
          DOCUMENT INTELLIGENCE
        </div>
        <h3 className="text-[24px] lg:text-[36px] font-bold leading-tight mb-4" style={{ color: "#0F172A" }}>
          Ask Anything. <span className="text-[#00A86B]">Get Verified Answers.</span>
        </h3>
        <p className="text-sm leading-relaxed mb-6" style={{ color: "#475569" }}>
          Patram AI reads your entire shipment folder and answers questions in natural language. 
          Every answer is pixel-verified. Zero hallucinations.
        </p>

        <div className="grid grid-cols-2 gap-2 mb-6">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2 transition-all duration-300 hover:translate-x-1">
              <Check className="w-4 h-4 flex-shrink-0" style={{ color: "#00A86B" }} />
              <span className="text-[13px]" style={{ color: "#0F172A" }}>{feature}</span>
            </div>
          ))}
        </div>

        {/* ROI Table */}
        <div className="rounded-lg overflow-hidden mb-6" style={{ border: "1px solid #E2E8F0" }}>
          <table className="w-full text-[13px]">
            <thead>
              <tr style={{ background: "#F8FAFC" }}>
                <th className="text-left font-semibold py-2 px-3" style={{ color: "#64748B" }}>Metric</th>
                <th className="text-left font-semibold py-2 px-3" style={{ color: "#64748B" }}>Before</th>
                <th className="text-left font-semibold py-2 px-3" style={{ color: "#00A86B" }}>With Patram</th>
              </tr>
            </thead>
            <tbody style={{ background: "#FFFFFF" }}>
              <tr style={{ borderTop: "1px solid #E2E8F0" }}>
                <td className="py-2 px-3" style={{ color: "#475569" }}>Audit Time</td>
                <td className="py-2 px-3" style={{ color: "#0F172A" }}>45–90 min</td>
                <td className="py-2 px-3" style={{ color: "#00A86B" }}>{"< 2 min"}</td>
              </tr>
              <tr style={{ borderTop: "1px solid #E2E8F0" }}>
                <td className="py-2 px-3" style={{ color: "#475569" }}>Accuracy</td>
                <td className="py-2 px-3" style={{ color: "#0F172A" }}>85–90%</td>
                <td className="py-2 px-3" style={{ color: "#00A86B" }}>99.9%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex flex-wrap gap-3">
          <a href="#try-patram" className="px-5 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 hover:scale-105 btn-shine"
            style={{ background: "linear-gradient(90deg, #00A86B, #0066CC)", color: "#FFFFFF", boxShadow: "0 4px 25px rgba(0,168,107,0.35)" }}>
            Try Free
          </a>
          <button className="px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 hover:border-[#00A86B] hover:text-[#00A86B]"
            style={{ background: "transparent", border: "1.5px solid #CBD5E1", color: "#0F172A" }}>
            See Live Q&A
          </button>
        </div>
      </div>

      {/* Chat interface mockup */}
      <div className="border rounded-xl p-5 animate-slide-in-right animate-float card-hover" style={{ background: "#FFFFFF", borderColor: "#E2E8F0", boxShadow: "0 24px 80px rgba(0,0,0,0.08)" }}>
        <div className="flex items-center justify-between mb-3">
          <span className="font-bold text-[13px]" style={{ color: "#0F172A" }}>Patram AI — Document Q&A</span>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#27C93F]" />
            <span className="text-xs" style={{ color: "#27C93F" }}>Active</span>
          </div>
        </div>

        <div className="p-2 rounded-lg mb-3" style={{ background: "rgba(0,168,107,0.1)" }}>
          <span className="text-xs" style={{ color: "#00A86B" }}>SB_2025_0441.pdf + Invoice_0441.pdf</span>
        </div>

        <div className="space-y-3">
          <div className="flex justify-end">
            <div className="rounded-xl rounded-br-sm px-3 py-2 max-w-[80%]" style={{ background: "#F1F5F9" }}>
              <p className="text-[13px]" style={{ color: "#0F172A" }}>
                {"\"Is there any discrepancy between invoice and shipping bill?\""}
              </p>
            </div>
          </div>

          <div className="flex justify-start">
            <div className="rounded-xl rounded-bl-sm px-3 py-2 max-w-[85%]" style={{ background: "#F8FAFC", borderLeft: "3px solid #00A86B" }}>
              <p className="text-[13px] mb-2" style={{ color: "#0F172A" }}>
                <strong>Found 1 discrepancy:</strong>
              </p>
              <div className="text-[12px] space-y-1 mb-2" style={{ color: "#475569" }}>
                <p>Invoice FOB: <span className="font-mono" style={{ color: "#0F172A" }}>$42,500</span></p>
                <p>Shipping Bill: <span className="font-mono" style={{ color: "#0F172A" }}>$41,800</span></p>
                <p>Difference: <span className="font-mono" style={{ color: "#0066CC" }}>$700 (1.6%)</span></p>
              </div>
              <div className="inline-flex items-center px-2 py-0.5 rounded text-[10px]" style={{ background: "rgba(0,168,107,0.1)" }}>
                <span style={{ color: "#00A86B" }}>99.8% Confidence</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function TariffIQTab() {
  const features = [
    "Multi-layer AI classification",
    "Handles vague descriptions",
    "RoDTEP vs Drawback comparison",
    "Full landed cost calculation",
    "ITC-HS Policy checking",
    "Clarifying Q&A support",
  ]

  return (
    <div className="grid lg:grid-cols-2 gap-8 items-center">
      <div className="animate-slide-in-left">
        <div className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold tracking-[0.12em] uppercase mb-4"
          style={{ background: "rgba(0,102,204,0.1)", border: "1px solid rgba(0,102,204,0.25)", color: "#0066CC" }}>
          HSN CLASSIFICATION & DUTY
        </div>
        <h3 className="text-[24px] lg:text-[36px] font-bold leading-tight mb-4" style={{ color: "#0F172A" }}>
          Know Your HSN Code and Duty. <span className="text-[#0066CC]">Before Shipment.</span>
        </h3>
        <p className="text-sm leading-relaxed mb-6" style={{ color: "#475569" }}>
          TariffIQ classifies any product into the correct 8-digit HSN code using our AI 
          engine, then calculates your exact duty liability or export incentive.
        </p>

        <div className="grid grid-cols-2 gap-2 mb-6">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2 transition-all duration-300 hover:translate-x-1">
              <Check className="w-4 h-4 flex-shrink-0" style={{ color: "#00A86B" }} />
              <span className="text-[13px]" style={{ color: "#0F172A" }}>{feature}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <a href="#classify" className="px-5 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 hover:scale-105 btn-shine"
            style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)", color: "#FFFFFF", boxShadow: "0 4px 25px rgba(0,102,204,0.35)" }}>
            Classify My Product
          </a>
          <button className="px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 hover:border-[#0066CC] hover:text-[#0066CC]"
            style={{ background: "transparent", border: "1.5px solid #CBD5E1", color: "#0F172A" }}>
            See Demo
          </button>
        </div>
      </div>

      {/* TariffIQ interface mockup */}
      <div className="border rounded-xl p-5 animate-slide-in-right animate-float card-hover" style={{ background: "#FFFFFF", borderColor: "#E2E8F0", boxShadow: "0 24px 80px rgba(0,0,0,0.08)" }}>
        {/* Fixed Role selector - Exporter only */}
        <div className="flex items-center gap-3 mb-4">
          <div className="px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2"
            style={{ background: "rgba(0,102,204,0.1)", border: "2px solid #0066CC", color: "#0066CC" }}>
            <span className="w-2 h-2 rounded-full bg-[#0066CC]" />
            Exporter
          </div>
        </div>

        {/* Fixed Input field - Read only */}
        <div className="mb-4">
          <div
            className="w-full px-3 py-2.5 rounded-lg text-sm"
            style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", color: "#0F172A" }}
          >
            stainless steel hex bolts M8
          </div>
        </div>

        {/* Result card */}
        <div className="rounded-lg p-4" style={{ background: "rgba(0,102,204,0.03)", border: "2px solid #0066CC", boxShadow: "0 0 30px rgba(0,102,204,0.1)" }}>
          <div className="mb-3">
            <span className="text-[10px]" style={{ color: "#64748B" }}>HSN Code</span>
            <div className="text-2xl font-mono font-semibold" style={{ color: "#0066CC" }}>7318.15</div>
            <p className="text-[12px] mt-0.5" style={{ color: "#475569" }}>Screws, bolts, nuts — stainless steel</p>
          </div>

          <div className="grid grid-cols-3 gap-2 mb-3">
            <div className="p-2 rounded-lg" style={{ background: "#F8FAFC" }}>
              <span className="text-[9px]" style={{ color: "#64748B" }}>BCD</span>
              <div className="font-semibold text-sm" style={{ color: "#0F172A" }}>7.5%</div>
            </div>
            <div className="p-2 rounded-lg" style={{ background: "#F8FAFC" }}>
              <span className="text-[9px]" style={{ color: "#64748B" }}>IGST</span>
              <div className="font-semibold text-sm" style={{ color: "#0F172A" }}>18%</div>
            </div>
            <div className="p-2 rounded-lg" style={{ background: "#F8FAFC" }}>
              <span className="text-[9px]" style={{ color: "#64748B" }}>RoDTEP</span>
              <div className="font-semibold text-sm" style={{ color: "#00A86B" }}>₹21K</div>
            </div>
          </div>

          <div className="p-2 rounded-lg" style={{ background: "rgba(0,168,107,0.1)" }}>
            <p className="text-[12px] font-medium" style={{ color: "#00A86B" }}>
              RoDTEP earns you ₹21K more than Drawback
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
