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
    <section ref={ref} id="products" className="py-20 lg:py-30 px-6 lg:px-20" style={{ background: "#FFFFFF" }}>
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold tracking-[0.12em] uppercase mb-6"
            style={{ background: "rgba(0,102,204,0.1)", border: "1px solid rgba(0,102,204,0.25)", color: "#0066CC" }}>
            OUR PRODUCTS
          </div>
          <h2 className="text-3xl lg:text-[52px] font-bold leading-tight mb-4" style={{ color: "#0F172A" }}>
            Three Products. <span className="text-[#0066CC]">One Mission.</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "#475569" }}>
            Stop money leaking through your trade documents.
          </p>
        </div>

        {/* Tab bar */}
        <div className={`flex justify-center gap-2 mb-12 transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? "text-[#0066CC]"
                  : "text-[#64748B] hover:text-[#0066CC]"
              }`}
              style={{
                background: activeTab === tab.id ? "rgba(0,102,204,0.1)" : "transparent",
                border: activeTab === tab.id ? "2px solid #0066CC" : "1px solid #E2E8F0",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className={`transition-all duration-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {activeTab === "tradeguard" && <TradeguardTab />}
          {activeTab === "patram" && <PatramTab />}
          {activeTab === "tariffiq" && <TariffIQTab />}
        </div>
      </div>
    </section>
  )
}

function TradeguardTab() {
  const features = [
    "HSN / HS Code cross-validation",
    "Port code semantic matching (NHZA1 = HAZIRA, SURAT)",
    "FOB value & currency discrepancy detection",
    "IEC / GSTIN exact match verification",
    "Unit of quantity conflict flagging",
    "Country of origin mismatch alerts",
    "Drawback & RODTEP impact per mismatch",
  ]

  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div className="animate-slide-in-left">
        <div className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold tracking-[0.12em] uppercase mb-6"
          style={{ background: "rgba(0,102,204,0.1)", border: "1px solid rgba(0,102,204,0.25)", color: "#0066CC" }}>
          MISMATCH DETECTION
        </div>
        <h3 className="text-3xl lg:text-[44px] font-bold leading-tight mb-6" style={{ color: "#0F172A" }}>
          Stop Document Mismatches <span className="text-[#0066CC]">Before They Cost You.</span>
        </h3>
        <p className="text-base leading-relaxed mb-8" style={{ color: "#475569" }}>
          Tradeguard extracts 40+ fields from your Shipping Bill and Commercial Invoice, maps them 
          intelligently, and flags every discrepancy in under 5 minutes.
        </p>

        <div className="space-y-3 mb-8">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-3 transition-all duration-300 hover:translate-x-1">
              <Check className="w-5 h-5 flex-shrink-0" style={{ color: "#00A86B" }} />
              <span className="text-sm" style={{ color: "#0F172A" }}>{feature}</span>
            </div>
          ))}
        </div>

        <div className="p-5 rounded-lg mb-8" style={{ background: "rgba(0,102,204,0.05)", borderLeft: "3px solid #0066CC" }}>
          <p className="text-sm leading-relaxed" style={{ color: "#475569" }}>
            {"\"For 100 shipments/month at ₹50L FOB — Tradeguard protects ₹1.5–₹3.5 Cr in annual refunds. Cost of one missed mismatch: ₹75,000+\""}
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <a href="#demo" className="px-7 py-3.5 rounded-[10px] text-base font-bold transition-all duration-300 hover:scale-105 btn-shine"
            style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)", color: "#FFFFFF", boxShadow: "0 4px 25px rgba(0,102,204,0.35)" }}>
            Get Started
          </a>
          <button className="px-7 py-3.5 rounded-[10px] text-base font-semibold transition-all duration-300 hover:border-[#0066CC] hover:text-[#0066CC] hover:bg-[#EFF6FF]"
            style={{ background: "transparent", border: "1.5px solid #CBD5E1", color: "#0F172A" }}>
            Watch 90-sec Demo
          </button>
        </div>
      </div>

      <div className="animate-slide-in-right">
        <HeroMockup animated={false} />
      </div>
    </div>
  )
}

function PatramTab() {
  const features = [
    "Multi-document cross-referencing in one query",
    "Visual table & chart extraction — not just text",
    "Pixel-level answer verification",
    "Page-level evidence — see exactly where data was found",
    "Handles messy scans, rotated pages, complex layouts",
    "Natural language: \"Which line items are missing HSN codes?\"",
  ]

  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div className="animate-slide-in-left">
        <div className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold tracking-[0.12em] uppercase mb-6"
          style={{ background: "rgba(0,168,107,0.1)", border: "1px solid rgba(0,168,107,0.25)", color: "#00A86B" }}>
          DOCUMENT INTELLIGENCE
        </div>
        <h3 className="text-3xl lg:text-[44px] font-bold leading-tight mb-6" style={{ color: "#0F172A" }}>
          Ask Anything. <span className="text-[#00A86B]">Get Verified Answers.</span>
        </h3>
        <p className="text-base leading-relaxed mb-8" style={{ color: "#475569" }}>
          Patram AI reads your entire shipment folder and answers questions in natural language. 
          Every answer is pixel-verified against the original document. Zero hallucinations.
        </p>

        <div className="space-y-3 mb-8">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-3 transition-all duration-300 hover:translate-x-1">
              <Check className="w-5 h-5 flex-shrink-0" style={{ color: "#00A86B" }} />
              <span className="text-sm" style={{ color: "#0F172A" }}>{feature}</span>
            </div>
          ))}
        </div>

        {/* ROI Table */}
        <div className="rounded-xl overflow-hidden mb-8" style={{ border: "1px solid #E2E8F0" }}>
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: "#F8FAFC" }}>
                <th className="text-left font-semibold py-3 px-4" style={{ color: "#64748B" }}>Metric</th>
                <th className="text-left font-semibold py-3 px-4" style={{ color: "#64748B" }}>Before</th>
                <th className="text-left font-semibold py-3 px-4" style={{ color: "#00A86B" }}>With Patram AI</th>
              </tr>
            </thead>
            <tbody style={{ background: "#FFFFFF" }}>
              <tr style={{ borderTop: "1px solid #E2E8F0" }}>
                <td className="py-3 px-4" style={{ color: "#475569" }}>Document Audit</td>
                <td className="py-3 px-4" style={{ color: "#0F172A" }}>45–90 min/set</td>
                <td className="py-3 px-4" style={{ color: "#00A86B" }}>{"< 2 min/set"}</td>
              </tr>
              <tr style={{ borderTop: "1px solid #E2E8F0" }}>
                <td className="py-3 px-4" style={{ color: "#475569" }}>Accuracy</td>
                <td className="py-3 px-4" style={{ color: "#0F172A" }}>85–90%</td>
                <td className="py-3 px-4" style={{ color: "#00A86B" }}>99.9% verified</td>
              </tr>
              <tr style={{ borderTop: "1px solid #E2E8F0" }}>
                <td className="py-3 px-4" style={{ color: "#475569" }}>Cost per shipment</td>
                <td className="py-3 px-4" style={{ color: "#0F172A" }}>₹3,200</td>
                <td className="py-3 px-4" style={{ color: "#00A86B" }}>₹250</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex flex-wrap gap-4">
          <a href="#try-patram" className="px-7 py-3.5 rounded-[10px] text-base font-bold transition-all duration-300 hover:scale-105 btn-shine"
            style={{ background: "linear-gradient(90deg, #00A86B, #0066CC)", color: "#FFFFFF", boxShadow: "0 4px 25px rgba(0,168,107,0.35)" }}>
            Try Patram AI Free
          </a>
          <button className="px-7 py-3.5 rounded-[10px] text-base font-semibold transition-all duration-300 hover:border-[#00A86B] hover:text-[#00A86B] hover:bg-[#F0FDF4]"
            style={{ background: "transparent", border: "1.5px solid #CBD5E1", color: "#0F172A" }}>
            See a Live Q&A
          </button>
        </div>
      </div>

      {/* Chat interface mockup */}
      <div className="border rounded-2xl p-6 animate-slide-in-right card-hover" style={{ background: "#FFFFFF", borderColor: "#E2E8F0", boxShadow: "0 24px 80px rgba(0,0,0,0.08)" }}>
        <div className="flex items-center justify-between mb-4">
          <span className="font-bold text-[13px]" style={{ color: "#0F172A" }}>Patram AI — Document Q&A</span>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#27C93F]" />
            <span className="text-xs" style={{ color: "#27C93F" }}>Active</span>
          </div>
        </div>

        <div className="p-3 rounded-lg mb-4" style={{ background: "rgba(0,168,107,0.1)" }}>
          <span className="text-sm" style={{ color: "#00A86B" }}>SB_2025_0441.pdf + Invoice_0441.pdf</span>
        </div>

        <div className="space-y-4">
          {/* User message */}
          <div className="flex justify-end">
            <div className="rounded-2xl rounded-br-md px-4 py-3 max-w-[80%]" style={{ background: "#F1F5F9" }}>
              <p className="text-sm" style={{ color: "#0F172A" }}>
                {"\"Is there any discrepancy between the invoice value and the shipping bill charges?\""}
              </p>
            </div>
          </div>

          {/* AI response */}
          <div className="flex justify-start">
            <div className="rounded-2xl rounded-bl-md px-4 py-3 max-w-[85%]" style={{ background: "#F8FAFC", borderLeft: "3px solid #00A86B" }}>
              <p className="text-sm mb-3" style={{ color: "#0F172A" }}>
                <strong>Found 1 discrepancy:</strong>
              </p>
              <div className="text-sm space-y-1 mb-3" style={{ color: "#475569" }}>
                <p>Invoice FOB: <span className="font-mono" style={{ color: "#0F172A" }}>$42,500 USD</span></p>
                <p>Shipping Bill: <span className="font-mono" style={{ color: "#0F172A" }}>$41,800 USD</span></p>
                <p>Difference: <span className="font-mono" style={{ color: "#F59E0B" }}>$700 (1.6%)</span></p>
              </div>
              <p className="text-xs mb-3" style={{ color: "#94A3B8" }}>Evidence: Page 3, Table 2, Row 6</p>
              <div className="inline-flex items-center px-2 py-1 rounded text-xs" style={{ background: "rgba(0,168,107,0.1)" }}>
                <span style={{ color: "#00A86B" }}>99.8% Confidence — Pixel-verified</span>
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
    "Multi-layer AI classification engine",
    "Handles vague descriptions naturally",
    "RoDTEP vs Duty Drawback comparison — picks better scheme",
    "Full landed cost: BCD + SWS + IGST + Compensation Cess",
    "ITC-HS Policy: Free / Restricted / Prohibited / Canalised",
    "Clarifying Q&A if classification needs more context",
  ]

  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div className="animate-slide-in-left">
        <div className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold tracking-[0.12em] uppercase mb-6"
          style={{ background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.25)", color: "#F59E0B" }}>
          HSN CLASSIFICATION & DUTY CALC
        </div>
        <h3 className="text-3xl lg:text-[44px] font-bold leading-tight mb-6" style={{ color: "#0F172A" }}>
          Know Your Exact HSN Code and Duty. <span className="text-[#F59E0B]">Before Shipment.</span>
        </h3>
        <p className="text-base leading-relaxed mb-8" style={{ color: "#475569" }}>
          TariffIQ classifies any product into the correct 8-digit HSN code using our proprietary AI 
          engine, then calculates your exact duty liability or export incentive.
        </p>

        <div className="space-y-3 mb-8">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-3 transition-all duration-300 hover:translate-x-1">
              <Check className="w-5 h-5 flex-shrink-0" style={{ color: "#F59E0B" }} />
              <span className="text-sm" style={{ color: "#0F172A" }}>{feature}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          <a href="#classify" className="px-7 py-3.5 rounded-[10px] text-base font-bold transition-all duration-300 hover:scale-105 btn-shine"
            style={{ background: "linear-gradient(90deg, #F59E0B, #F97316)", color: "#FFFFFF", boxShadow: "0 4px 25px rgba(245,158,11,0.35)" }}>
            Classify My Product Free
          </a>
          <button className="px-7 py-3.5 rounded-[10px] text-base font-semibold transition-all duration-300 hover:border-[#F59E0B] hover:text-[#F59E0B] hover:bg-[#FFFBEB]"
            style={{ background: "transparent", border: "1.5px solid #CBD5E1", color: "#0F172A" }}>
            See Full Demo
          </button>
        </div>
      </div>

      {/* TariffIQ interface mockup */}
      <div className="border rounded-2xl p-6 animate-slide-in-right card-hover" style={{ background: "#FFFFFF", borderColor: "#E2E8F0", boxShadow: "0 24px 80px rgba(0,0,0,0.08)" }}>
        {/* Role selector */}
        <div className="flex items-center gap-4 mb-6">
          <button className="px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2"
            style={{ background: "rgba(0,102,204,0.1)", border: "1px solid #0066CC", color: "#0066CC" }}>
            <span className="w-2 h-2 rounded-full bg-[#0066CC]" />
            Exporter
          </button>
          <button className="px-4 py-2 rounded-full text-sm font-semibold"
            style={{ border: "1px solid #E2E8F0", color: "#64748B" }}>
            Importer
          </button>
        </div>

        {/* Input field */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Describe your product... e.g. stainless steel hex bolts M8"
            className="w-full px-4 py-3 rounded-lg text-sm"
            style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", color: "#0F172A" }}
            defaultValue="stainless steel hex bolts M8"
          />
        </div>

        {/* Result card */}
        <div className="rounded-xl p-5" style={{ background: "rgba(0,102,204,0.03)", border: "2px solid #0066CC", boxShadow: "0 0 30px rgba(0,102,204,0.1)" }}>
          <div className="mb-4">
            <span className="text-xs" style={{ color: "#64748B" }}>HSN Code</span>
            <div className="text-3xl font-mono font-semibold" style={{ color: "#0066CC" }}>7318.15</div>
            <p className="text-sm mt-1" style={{ color: "#475569" }}>Screws, bolts, nuts — stainless steel</p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="p-3 rounded-lg" style={{ background: "#F8FAFC" }}>
              <span className="text-xs" style={{ color: "#64748B" }}>BCD Rate</span>
              <div className="font-semibold" style={{ color: "#0F172A" }}>7.5%</div>
            </div>
            <div className="p-3 rounded-lg" style={{ background: "#F8FAFC" }}>
              <span className="text-xs" style={{ color: "#64748B" }}>IGST Rate</span>
              <div className="font-semibold" style={{ color: "#0F172A" }}>18%</div>
            </div>
            <div className="p-3 rounded-lg" style={{ background: "#F8FAFC" }}>
              <span className="text-xs" style={{ color: "#64748B" }}>Total Duty (10L)</span>
              <div className="font-semibold font-mono" style={{ color: "#0F172A" }}>2,57,500</div>
            </div>
            <div className="p-3 rounded-lg" style={{ background: "#F8FAFC" }}>
              <span className="text-xs" style={{ color: "#64748B" }}>RoDTEP Benefit</span>
              <div className="font-semibold font-mono" style={{ color: "#00A86B" }}>21,000</div>
            </div>
            <div className="p-3 rounded-lg" style={{ background: "#F8FAFC" }}>
              <span className="text-xs" style={{ color: "#64748B" }}>Export Policy</span>
              <div className="font-semibold" style={{ color: "#00A86B" }}>FREE</div>
            </div>
            <div className="p-3 rounded-lg" style={{ background: "#F8FAFC" }}>
              <span className="text-xs" style={{ color: "#64748B" }}>Better Scheme</span>
              <div className="font-semibold" style={{ color: "#F59E0B" }}>RoDTEP</div>
            </div>
          </div>

          <div className="p-3 rounded-lg" style={{ background: "rgba(0,168,107,0.1)" }}>
            <p className="text-sm font-medium" style={{ color: "#00A86B" }}>
              RoDTEP earns you 21,000 more than Drawback on this shipment
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
