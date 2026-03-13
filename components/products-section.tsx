"use client"

import { useState } from "react"
import { HeroMockup } from "./hero-mockup"
import { Check } from "lucide-react"

const tabs = [
  { id: "tradeguard", label: "Tradeguard" },
  { id: "patram", label: "Patram AI" },
  { id: "tariffiq", label: "TariffIQ" },
]

export function ProductsSection() {
  const [activeTab, setActiveTab] = useState("tradeguard")

  return (
    <section id="products" className="py-20 lg:py-30 px-6 lg:px-20" style={{ background: "#0D1526" }}>
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold tracking-[0.12em] uppercase mb-6"
            style={{ background: "rgba(0,229,180,0.1)", border: "1px solid rgba(0,229,180,0.25)", color: "#00E5B4" }}>
            OUR PRODUCTS
          </div>
          <h2 className="text-3xl lg:text-[52px] font-bold text-white leading-tight mb-4">
            Three Products. One Mission.
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-xl mx-auto">
            Stop money leaking through your trade documents.
          </p>
        </div>

        {/* Tab bar */}
        <div className="flex justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                activeTab === tab.id
                  ? "text-white"
                  : "text-[#94A3B8] hover:text-white"
              }`}
              style={{
                background: activeTab === tab.id ? "rgba(0,229,180,0.1)" : "transparent",
                border: activeTab === tab.id ? "1.5px solid #00E5B4" : "1px solid #1E3557",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="transition-opacity duration-300">
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
      <div>
        <div className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold tracking-[0.12em] uppercase mb-6"
          style={{ background: "rgba(0,229,180,0.1)", border: "1px solid rgba(0,229,180,0.25)", color: "#00E5B4" }}>
          MISMATCH DETECTION
        </div>
        <h3 className="text-3xl lg:text-[44px] font-bold text-white leading-tight mb-6">
          Stop Document Mismatches Before They Cost You.
        </h3>
        <p className="text-[#94A3B8] text-base leading-relaxed mb-8">
          Tradeguard extracts 40+ fields from your Shipping Bill and Commercial Invoice, maps them 
          intelligently, and flags every discrepancy in under 5 minutes.
        </p>

        <div className="space-y-3 mb-8">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <Check className="w-5 h-5 text-[#00E5B4] flex-shrink-0" />
              <span className="text-white text-sm">{feature}</span>
            </div>
          ))}
        </div>

        <div className="p-5 rounded-lg mb-8" style={{ background: "rgba(0,229,180,0.05)", borderLeft: "3px solid #00E5B4" }}>
          <p className="text-[#94A3B8] text-sm leading-relaxed">
            {"\"For 100 shipments/month at ₹50L FOB — Tradeguard protects ₹1.5–₹3.5 Cr in annual refunds. Cost of one missed mismatch: ₹75,000+\""}
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <a href="#demo" className="px-7 py-3.5 rounded-[10px] text-base font-bold transition-all hover:brightness-110 hover:scale-[1.02]"
            style={{ background: "linear-gradient(90deg, #00E5B4, #00B8D9)", color: "#050A14", boxShadow: "0 0 30px rgba(0,229,180,0.25)" }}>
            Get Started
          </a>
          <button className="px-7 py-3.5 rounded-[10px] text-base font-semibold text-white transition-all hover:border-[#00E5B4] hover:text-[#00E5B4]"
            style={{ background: "transparent", border: "1.5px solid rgba(255,255,255,0.25)" }}>
            Watch 90-sec Demo
          </button>
        </div>
      </div>

      <div>
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
      <div>
        <div className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold tracking-[0.12em] uppercase mb-6"
          style={{ background: "rgba(77,166,255,0.1)", border: "1px solid rgba(77,166,255,0.25)", color: "#4DA6FF" }}>
          DOCUMENT INTELLIGENCE
        </div>
        <h3 className="text-3xl lg:text-[44px] font-bold text-white leading-tight mb-6">
          Ask Anything. Get Verified Answers.
        </h3>
        <p className="text-[#94A3B8] text-base leading-relaxed mb-8">
          Patram AI reads your entire shipment folder and answers questions in natural language. 
          Every answer is pixel-verified against the original document. Zero hallucinations.
        </p>

        <div className="space-y-3 mb-8">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <Check className="w-5 h-5 text-[#4DA6FF] flex-shrink-0" />
              <span className="text-white text-sm">{feature}</span>
            </div>
          ))}
        </div>

        {/* ROI Table */}
        <div className="rounded-xl overflow-hidden mb-8" style={{ border: "1px solid #1E3557" }}>
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: "#0D1526" }}>
                <th className="text-left text-[#64748B] font-semibold py-3 px-4">Metric</th>
                <th className="text-left text-[#64748B] font-semibold py-3 px-4">Before</th>
                <th className="text-left text-[#00E5B4] font-semibold py-3 px-4">With Patram AI</th>
              </tr>
            </thead>
            <tbody className="bg-[#121E33]">
              <tr className="border-t border-[#1E3557]">
                <td className="text-[#94A3B8] py-3 px-4">Document Audit</td>
                <td className="text-white py-3 px-4">45–90 min/set</td>
                <td className="text-[#00E5B4] py-3 px-4">{"< 2 min/set"}</td>
              </tr>
              <tr className="border-t border-[#1E3557]">
                <td className="text-[#94A3B8] py-3 px-4">Accuracy</td>
                <td className="text-white py-3 px-4">85–90%</td>
                <td className="text-[#00E5B4] py-3 px-4">99.9% verified</td>
              </tr>
              <tr className="border-t border-[#1E3557]">
                <td className="text-[#94A3B8] py-3 px-4">Cost per shipment</td>
                <td className="text-white py-3 px-4">₹3,200</td>
                <td className="text-[#00E5B4] py-3 px-4">₹250</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex flex-wrap gap-4">
          <a href="#try-patram" className="px-7 py-3.5 rounded-[10px] text-base font-bold transition-all hover:brightness-110 hover:scale-[1.02]"
            style={{ background: "linear-gradient(90deg, #4DA6FF, #00B8D9)", color: "#050A14", boxShadow: "0 0 30px rgba(77,166,255,0.25)" }}>
            Try Patram AI Free
          </a>
          <button className="px-7 py-3.5 rounded-[10px] text-base font-semibold text-white transition-all hover:border-[#4DA6FF] hover:text-[#4DA6FF]"
            style={{ background: "transparent", border: "1.5px solid rgba(255,255,255,0.25)" }}>
            See a Live Q&A
          </button>
        </div>
      </div>

      {/* Chat interface mockup */}
      <div className="bg-[#121E33] border border-[#1E3557] rounded-2xl p-6" style={{ boxShadow: "0 24px 80px rgba(0,0,0,0.4)" }}>
        <div className="flex items-center justify-between mb-4">
          <span className="text-white font-bold text-[13px]">Patram AI — Document Q&A</span>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#27C93F]" />
            <span className="text-[#27C93F] text-xs">Active</span>
          </div>
        </div>

        <div className="p-3 rounded-lg mb-4" style={{ background: "rgba(0,229,180,0.1)" }}>
          <span className="text-[#00E5B4] text-sm">SB_2025_0441.pdf + Invoice_0441.pdf</span>
        </div>

        <div className="space-y-4">
          {/* User message */}
          <div className="flex justify-end">
            <div className="bg-[#1A2A45] rounded-2xl rounded-br-md px-4 py-3 max-w-[80%]">
              <p className="text-white text-sm">
                {"\"Is there any discrepancy between the invoice value and the shipping bill charges?\""}
              </p>
            </div>
          </div>

          {/* AI response */}
          <div className="flex justify-start">
            <div className="rounded-2xl rounded-bl-md px-4 py-3 max-w-[85%]" style={{ background: "#0D1526", borderLeft: "3px solid #00E5B4" }}>
              <p className="text-white text-sm mb-3">
                <strong>Found 1 discrepancy:</strong>
              </p>
              <div className="text-[#94A3B8] text-sm space-y-1 mb-3">
                <p>Invoice FOB: <span className="text-white font-mono">$42,500 USD</span></p>
                <p>Shipping Bill: <span className="text-white font-mono">$41,800 USD</span></p>
                <p>Difference: <span className="text-[#F4B942] font-mono">$700 (1.6%)</span></p>
              </div>
              <p className="text-[#64748B] text-xs mb-3">Evidence: Page 3, Table 2, Row 6</p>
              <div className="inline-flex items-center px-2 py-1 rounded text-xs" style={{ background: "rgba(0,229,180,0.15)" }}>
                <span className="text-[#00E5B4]">99.8% Confidence — Pixel-verified</span>
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
      <div>
        <div className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold tracking-[0.12em] uppercase mb-6"
          style={{ background: "rgba(244,185,66,0.1)", border: "1px solid rgba(244,185,66,0.25)", color: "#F4B942" }}>
          HSN CLASSIFICATION & DUTY CALC
        </div>
        <h3 className="text-3xl lg:text-[44px] font-bold text-white leading-tight mb-6">
          Know Your Exact HSN Code and Duty. Before Shipment.
        </h3>
        <p className="text-[#94A3B8] text-base leading-relaxed mb-8">
          TariffIQ classifies any product into the correct 8-digit HSN code using our proprietary AI 
          engine, then calculates your exact duty liability or export incentive.
        </p>

        <div className="space-y-3 mb-8">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <Check className="w-5 h-5 text-[#F4B942] flex-shrink-0" />
              <span className="text-white text-sm">{feature}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          <a href="#classify" className="px-7 py-3.5 rounded-[10px] text-base font-bold transition-all hover:brightness-110 hover:scale-[1.02]"
            style={{ background: "linear-gradient(90deg, #F4B942, #F97316)", color: "#050A14", boxShadow: "0 0 30px rgba(244,185,66,0.25)" }}>
            Classify My Product Free
          </a>
          <button className="px-7 py-3.5 rounded-[10px] text-base font-semibold text-white transition-all hover:border-[#F4B942] hover:text-[#F4B942]"
            style={{ background: "transparent", border: "1.5px solid rgba(255,255,255,0.25)" }}>
            See Full Demo
          </button>
        </div>
      </div>

      {/* TariffIQ interface mockup */}
      <div className="bg-[#121E33] border border-[#1E3557] rounded-2xl p-6" style={{ boxShadow: "0 24px 80px rgba(0,0,0,0.4)" }}>
        {/* Role selector */}
        <div className="flex items-center gap-4 mb-6">
          <button className="px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2"
            style={{ background: "rgba(0,229,180,0.1)", border: "1px solid #00E5B4", color: "#00E5B4" }}>
            <span className="w-2 h-2 rounded-full bg-[#00E5B4]" />
            Exporter
          </button>
          <button className="px-4 py-2 rounded-full text-sm font-semibold text-[#64748B]"
            style={{ border: "1px solid #1E3557" }}>
            Importer
          </button>
        </div>

        {/* Input field */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Describe your product... e.g. stainless steel hex bolts M8"
            className="w-full px-4 py-3 rounded-lg text-white text-sm placeholder:text-[#64748B]"
            style={{ background: "#0D1526", border: "1px solid #1E3557" }}
            defaultValue="stainless steel hex bolts M8"
          />
        </div>

        {/* Result card */}
        <div className="rounded-xl p-5" style={{ background: "rgba(0,229,180,0.05)", border: "1.5px solid #00E5B4", boxShadow: "0 0 40px rgba(0,229,180,0.1)" }}>
          <div className="mb-4">
            <span className="text-[#64748B] text-xs">HSN Code</span>
            <div className="text-[#00E5B4] text-3xl font-mono font-semibold">7318.15</div>
            <p className="text-[#94A3B8] text-sm mt-1">Screws, bolts, nuts — stainless steel</p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="p-3 rounded-lg" style={{ background: "#0D1526" }}>
              <span className="text-[#64748B] text-xs">BCD Rate</span>
              <div className="text-white font-semibold">7.5%</div>
            </div>
            <div className="p-3 rounded-lg" style={{ background: "#0D1526" }}>
              <span className="text-[#64748B] text-xs">IGST Rate</span>
              <div className="text-white font-semibold">18%</div>
            </div>
            <div className="p-3 rounded-lg" style={{ background: "#0D1526" }}>
              <span className="text-[#64748B] text-xs">Total Duty (10L)</span>
              <div className="text-white font-semibold font-mono">2,57,500</div>
            </div>
            <div className="p-3 rounded-lg" style={{ background: "#0D1526" }}>
              <span className="text-[#64748B] text-xs">RoDTEP Benefit</span>
              <div className="text-[#00E5B4] font-semibold font-mono">21,000</div>
            </div>
            <div className="p-3 rounded-lg" style={{ background: "#0D1526" }}>
              <span className="text-[#64748B] text-xs">Export Policy</span>
              <div className="text-[#00E5B4] font-semibold">FREE</div>
            </div>
            <div className="p-3 rounded-lg" style={{ background: "#0D1526" }}>
              <span className="text-[#64748B] text-xs">Better Scheme</span>
              <div className="text-[#F4B942] font-semibold">RoDTEP</div>
            </div>
          </div>

          <div className="p-3 rounded-lg" style={{ background: "rgba(0,229,180,0.1)" }}>
            <p className="text-[#00E5B4] text-sm font-medium">
              RoDTEP earns you 21,000 more than Drawback on this shipment
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
