"use client"

import { useState, useRef, useEffect } from "react"
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
      ([entry]) => { if (entry.isIntersecting) setIsInView(true) },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, isInView }
}

export function ProductsSection() {
  const [activeTab, setActiveTab] = useState("tradeguard")
  const { ref, isInView } = useInView()
  const activeIdx = tabs.findIndex(t => t.id === activeTab)

  // Listen for tab changes dispatched from navigation dropdown
  useEffect(() => {
    const handleTabChange = (event: CustomEvent) => {
      setActiveTab(event.detail)
    }
    const storedTab = sessionStorage.getItem('selectedProductTab')
    if (storedTab) {
      setActiveTab(storedTab)
      sessionStorage.removeItem('selectedProductTab')
    }
    const urlParams = new URLSearchParams(window.location.search)
    const tabParam = urlParams.get('tab')
    if (tabParam) setActiveTab(tabParam)

    window.addEventListener('changeProductTab', handleTabChange as EventListener)
    return () => window.removeEventListener('changeProductTab', handleTabChange as EventListener)
  }, [])

  // Listen for tab change events from navigation
  useEffect(() => {
    const handleTabChange = (event: CustomEvent) => {
      setActiveTab(event.detail)
    }

    // Check sessionStorage on mount for initial tab
    const storedTab = sessionStorage.getItem('selectedProductTab')
    if (storedTab) {
      setActiveTab(storedTab)
      sessionStorage.removeItem('selectedProductTab')
    }

    // Check URL params
    const urlParams = new URLSearchParams(window.location.search)
    const tabParam = urlParams.get('tab')
    if (tabParam) {
      setActiveTab(tabParam)
    }

    window.addEventListener('changeProductTab', handleTabChange as EventListener)
    return () => window.removeEventListener('changeProductTab', handleTabChange as EventListener)
  }, [])

  return (
    <section ref={ref} id="products" className="page-snap flex flex-col pt-[38px] pb-8 px-4 lg:px-6" style={{ background: "#FFFFFF", scrollMarginTop: "72px" }}>
      <div className="w-full max-w-[1400px] mx-auto">
          {/* Header — compact */}
          <div className={`text-center mb-3 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center justify-center gap-3 mb-1.5">
              <div className="h-px w-6 flex-shrink-0 rounded-full" style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)" }} />
              <span className="text-[10px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#94A3B8" }}>Our Products</span>
              <div className="h-px w-6 flex-shrink-0 rounded-full" style={{ background: "linear-gradient(90deg, #00A86B, #0066CC)" }} />
            </div>
            <h2 className="text-[22px] lg:text-[32px] font-bold leading-tight mb-1" style={{ color: "#0F172A" }}>
              Three Products.{" "}
              <span className="bg-gradient-to-r from-[#0066CC] to-[#00A86B] bg-clip-text text-transparent">One Mission.</span>
            </h2>
            <p className="text-xs max-w-sm mx-auto" style={{ color: "#475569" }}>
              Stop money leaking through your trade documents.
            </p>
          </div>

          {/* Toggle — full-width on mobile, percentage-based slider */}
          <div className={`flex justify-center mb-4 transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative flex p-1 rounded-full w-full max-w-[340px]"
              style={{
                background: activeTab === "patram" ? "#00A86B" : activeTab === "tariffiq" ? "#1B4F8A" : "#0066CC",
                transition: "background 320ms ease",
              }}>
              {/* Sliding indicator — percentage-based so it works at any width */}
              <div
                style={{
                  position: "absolute",
                  top: "4px", bottom: "4px",
                  left: `calc(4px + ${activeIdx} * (100% - 8px) / 3)`,
                  width: `calc((100% - 8px) / 3)`,
                  borderRadius: "9999px",
                  background: "#FFFFFF",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
                  transition: "left 320ms cubic-bezier(0.4, 0, 0.2, 1)",
                  pointerEvents: "none",
                  zIndex: 0,
                }}
              />
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    position: "relative", zIndex: 1,
                    flex: 1, minWidth: 0, padding: "7px 0",
                    borderRadius: "9999px",
                    fontSize: "13px", fontWeight: "700",
                    color: activeTab === tab.id
                      ? (activeTab === "patram" ? "#00A86B" : activeTab === "tariffiq" ? "#1B4F8A" : "#0066CC")
                      : "rgba(255,255,255,0.85)",
                    transition: "color 320ms ease",
                    background: "transparent", border: "none", cursor: "pointer",
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab content */}
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

const SCAN_FIELDS = [
  { field: "Exporter Name", value: "RAJESH EXPORTS LTD", status: "match" },
  { field: "HSN Code",      value: "8471.30",             status: "match" },
  { field: "FOB Value",     value: "$42,500", inv: "$41,800", delta: "−$700 (1.6%)", status: "mismatch" },
  { field: "Port of Loading", value: "INNSA1", inv: "NHAVA SHEVA", status: "warning" },
]

function TradeguardScanMockup() {
  const [visibleCount, setVisibleCount] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>
    let i = 0

    const step = () => {
      i++
      setVisibleCount(i)
      if (i < SCAN_FIELDS.length) {
        timeout = setTimeout(step, 420)
      } else {
        setDone(true)
        timeout = setTimeout(() => {
          i = 0
          setVisibleCount(0)
          setDone(false)
          timeout = setTimeout(step, 600)
        }, 3200)
      }
    }
    timeout = setTimeout(step, 400)
    return () => clearTimeout(timeout)
  }, [])

  const verified = SCAN_FIELDS.slice(0, visibleCount).filter(f => f.status === "match").length
  const issues   = SCAN_FIELDS.slice(0, visibleCount).filter(f => f.status !== "match").length

  return (
    <div className="rounded-2xl overflow-hidden"
      style={{ background: "#FFFFFF", border: "2px solid #E2E8F0", boxShadow: "0 20px 60px rgba(0,102,204,0.1)" }}>

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b" style={{ borderColor: "#E2E8F0", background: "#F8FAFC" }}>
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #0066CC, #00A86B)" }}>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              <path d="M9 12l2 2 4-4" />
            </svg>
          </div>
          <div>
            <p className="font-bold text-[13px] leading-none" style={{ color: "#0F172A" }}>TradeGuard Scan</p>
            <p className="text-[10px] mt-0.5" style={{ color: "#94A3B8" }}>SB_0441 · INV_0441</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          {done ? (
            <>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold"
                style={{ background: "rgba(0,168,107,0.1)", color: "#00A86B", border: "1px solid rgba(0,168,107,0.2)" }}>
                ✓ {verified} ok
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold"
                style={{ background: "rgba(245,158,11,0.1)", color: "#F59E0B", border: "1px solid rgba(245,158,11,0.25)" }}>
                ⚠ {issues} flagged
              </span>
            </>
          ) : (
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#0066CC" }} />
              <span className="text-[10px] font-semibold" style={{ color: "#0066CC" }}>Scanning…</span>
            </div>
          )}
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-1 w-full" style={{ background: "#F1F5F9" }}>
        <div className="h-full transition-all duration-300 ease-out"
          style={{
            width: `${(visibleCount / SCAN_FIELDS.length) * 100}%`,
            background: done
              ? "linear-gradient(90deg, #00A86B, #0066CC)"
              : "linear-gradient(90deg, #0066CC, #00A86B)",
          }} />
      </div>

      {/* Field list — fixed height prevents layout shift when diff rows appear */}
      <div className="px-4 py-3 space-y-2" style={{ minHeight: "260px" }}>
        {SCAN_FIELDS.map((f, idx) => {
          const visible = idx < visibleCount
          const active  = idx === visibleCount - 1 && !done
          const isMismatch = f.status === "mismatch"
          const isWarning  = f.status === "warning"

          return (
            <div
              key={f.field}
              className="rounded-xl overflow-hidden transition-all duration-400"
              style={{
                opacity:    visible ? 1 : 0.08,
                transform:  visible ? "translateY(0)" : "translateY(4px)",
                border: isMismatch
                  ? "1.5px solid rgba(245,158,11,0.4)"
                  : isWarning
                  ? "1.5px solid rgba(245,158,11,0.2)"
                  : "1.5px solid #E2E8F0",
                background: isMismatch
                  ? "rgba(245,158,11,0.04)"
                  : isWarning
                  ? "rgba(245,158,11,0.02)"
                  : "#FAFAFA",
                boxShadow: active ? "0 0 0 3px rgba(0,102,204,0.12)" : "none",
              }}
            >
              <div className="flex items-center justify-between px-3 py-2">
                <div className="flex items-center gap-2.5">
                  {/* Status icon */}
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      background: isMismatch
                        ? "rgba(245,158,11,0.15)"
                        : isWarning
                        ? "rgba(245,158,11,0.1)"
                        : active
                        ? "rgba(0,102,204,0.12)"
                        : "rgba(0,168,107,0.12)",
                    }}>
                    {active ? (
                      <span className="text-[8px] animate-pulse" style={{ color: "#0066CC" }}>●</span>
                    ) : isMismatch ? (
                      <span className="text-[10px] font-bold" style={{ color: "#F59E0B" }}>≠</span>
                    ) : isWarning ? (
                      <span className="text-[10px]" style={{ color: "#F59E0B" }}>≈</span>
                    ) : (
                      <svg className="w-3 h-3" style={{ color: "#00A86B" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  <span className="text-[12px] font-semibold" style={{ color: "#475569" }}>{f.field}</span>
                </div>

                {/* Value */}
                <span className="font-mono text-[11px] font-medium"
                  style={{ color: isMismatch ? "#D97706" : isWarning ? "#B45309" : "#0F172A" }}>
                  {f.value}
                </span>
              </div>

              {/* Mismatch diff row */}
              {(isMismatch || isWarning) && visible && (
                <div className="flex items-center gap-2 px-3 pb-2 pt-0">
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded"
                    style={{ background: "rgba(0,102,204,0.08)", color: "#0066CC" }}>
                    SB
                  </span>
                  <span className="text-[11px] font-mono font-medium" style={{ color: "#0F172A" }}>{f.value}</span>
                  <span style={{ color: "#CBD5E1" }}>→</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded"
                    style={{ background: "rgba(245,158,11,0.1)", color: "#F59E0B" }}>
                    INV
                  </span>
                  <span className="text-[11px] font-mono font-medium" style={{ color: "#D97706" }}>{f.inv}</span>
                  {f.delta && (
                    <span className="ml-auto text-[10px] font-bold font-mono" style={{ color: "#F59E0B" }}>
                      {f.delta}
                    </span>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>

    </div>
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
    <div className="grid lg:grid-cols-2 gap-6 items-center">
      <div className="animate-slide-in-left">
        {/* Label */}
        <div className="flex items-center gap-3 mb-3">
          <div className="h-px w-8 flex-shrink-0 rounded-full" style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)" }} />
          <span className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#94A3B8" }}>
            Document Verification
          </span>
        </div>
        <h3 className="text-[22px] lg:text-[34px] font-bold leading-tight mb-3" style={{ color: "#0F172A" }}>
          Stop Mismatches{" "}
          <span style={{ color: "#0066CC" }}>Before They Cost You.</span>
        </h3>
        <p className="text-sm leading-relaxed mb-4" style={{ color: "#475569" }}>
          Tradeguard extracts 40+ fields from your Shipping Bill and Commercial Invoice,
          maps them intelligently, and flags every discrepancy in under 5 seconds.
        </p>

        <div className="grid grid-cols-2 gap-1.5 mb-4">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2 transition-all duration-300 hover:translate-x-1">
              <Check className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "#00A86B" }} />
              <span className="text-[12px]" style={{ color: "#0F172A" }}>{feature}</span>
            </div>
          ))}
        </div>

        {/* ROI stat row */}
        <div className="rounded-lg overflow-hidden mb-4" style={{ border: "1px solid #E2E8F0" }}>
          <table className="w-full text-[12px]">
            <thead>
              <tr style={{ background: "#F8FAFC" }}>
                <th className="text-left font-semibold py-1.5 px-3" style={{ color: "#64748B" }}>Metric</th>
                <th className="text-left font-semibold py-1.5 px-3" style={{ color: "#64748B" }}>Manual</th>
                <th className="text-left font-semibold py-1.5 px-3" style={{ color: "#0066CC" }}>With Tradeguard</th>
              </tr>
            </thead>
            <tbody style={{ background: "#FFFFFF" }}>
              <tr style={{ borderTop: "1px solid #E2E8F0" }}>
                <td className="py-1.5 px-3" style={{ color: "#475569" }}>Check Time</td>
                <td className="py-1.5 px-3" style={{ color: "#0F172A" }}>2–4 hours</td>
                <td className="py-1.5 px-3" style={{ color: "#0066CC" }}>{"< 5 sec"}</td>
              </tr>
              <tr style={{ borderTop: "1px solid #E2E8F0" }}>
                <td className="py-1.5 px-3" style={{ color: "#475569" }}>Fields Checked</td>
                <td className="py-1.5 px-3" style={{ color: "#0F172A" }}>~10</td>
                <td className="py-1.5 px-3" style={{ color: "#0066CC" }}>40+</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex flex-row gap-3">
          <a
            href="#demo"
            className="px-5 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 hover:scale-105 btn-shine"
            style={{
              background: "linear-gradient(90deg, #0066CC, #00A86B)",
              color: "#FFFFFF",
              boxShadow: "0 4px 20px rgba(0,102,204,0.3)",
            }}
          >
            Get Started
          </a>
          <button
            className="px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300"
            style={{ background: "transparent", border: "1.5px solid #CBD5E1", color: "#0F172A" }}
          >
            Watch Demo
          </button>
        </div>
      </div>

      {/* Tradeguard visualization — hidden on mobile to keep single framepoint */}
      <div className="hidden lg:block animate-slide-in-right">
        <TradeguardScanMockup />
      </div>
    </div>
  )
}

const PATRAM_MESSAGES = [
  {
    type: "warning",
    icon: "—",
    title: "Restricted in Germany",
    text: "Azo dyes are prohibited in textiles sold in the EU. Your fabric must be tested and certified below 30 mg/kg before customs will clear it.",
    color: "#F59E0B",
    bg: "rgba(245,158,11,0.07)",
    border: "rgba(245,158,11,0.25)",
  },
  {
    type: "doc",
    icon: "—",
    title: "Documents Required",
    text: "You'll need a EUR.1 Certificate of Origin + Form A from DGFT to claim 0% import duty under the EU GSP scheme. Without them, you pay 12% BCD.",
    color: "#0066CC",
    bg: "rgba(0,102,204,0.06)",
    border: "rgba(0,102,204,0.2)",
  },
  {
    type: "ok",
    icon: "—",
    title: "You qualify for 0% Duty",
    text: "Great news — India-EU GSP Tier A applies here. On a Rs.20L shipment, that saves you approximately Rs.2.4L in import duties.",
    color: "#00A86B",
    bg: "rgba(0,168,107,0.07)",
    border: "rgba(0,168,107,0.25)",
  },
]

function PatramAdvisorMockup() {
  const [visibleCount, setVisibleCount] = useState(0)
  const [showTyping, setShowTyping] = useState(true)

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>
    let i = 0

    const step = () => {
      setShowTyping(false)
      i++
      setVisibleCount(i)
      if (i < PATRAM_MESSAGES.length) {
        t = setTimeout(() => { setShowTyping(true); t = setTimeout(step, 700) }, 500)
      } else {
        // done — pause then reset
        t = setTimeout(() => {
          setVisibleCount(0)
          setShowTyping(true)
          i = 0
          t = setTimeout(step, 700)
        }, 3500)
      }
    }

    // initial typing delay
    t = setTimeout(step, 800)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="rounded-2xl overflow-hidden flex flex-col"
      style={{ background: "#FFFFFF", border: "2px solid #E2E8F0", boxShadow: "0 20px 60px rgba(0,168,107,0.1)" }}>

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b flex-shrink-0"
        style={{ borderColor: "#E2E8F0", background: "#F8FAFC" }}>
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #00A86B, #0066CC)" }}>
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <div>
            <p className="font-bold text-[12px] leading-none" style={{ color: "#0F172A" }}>Patram AI — Export Advisor</p>
            <p className="text-[9px] mt-0.5" style={{ color: "#94A3B8" }}>Live regulatory intelligence</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#00A86B" }} />
          <span className="text-[10px] font-semibold" style={{ color: "#00A86B" }}>Online</span>
        </div>
      </div>

      {/* Chat messages */}
      <div className="px-3 py-3 space-y-2.5 flex-1">

        {/* User message */}
        <div className="flex justify-end">
          <div className="rounded-2xl rounded-br-sm px-3 py-2 max-w-[88%]"
            style={{ background: "linear-gradient(135deg, #0066CC, #00A86B)" }}>
            <p className="text-[12px] font-medium leading-snug text-white">
              I want to export organic cotton fabric to Germany
            </p>
          </div>
        </div>

        {/* AI response bubbles — all pre-rendered, ghost until revealed */}
        {PATRAM_MESSAGES.map((msg, idx) => {
          const revealed = idx < visibleCount
          const isNext = idx === visibleCount && showTyping
          return (
            <div key={idx} className="flex items-start gap-2 transition-all duration-400"
              style={{ opacity: revealed ? 1 : isNext ? 0.25 : 0.06 }}>
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ background: "linear-gradient(135deg, #00A86B, #0066CC)" }}>
                {isNext ? (
                  <span className="inline-flex gap-0.5">
                    {[0,1,2].map(i => (
                      <span key={i} className="w-0.5 h-0.5 rounded-full animate-bounce bg-white"
                        style={{ animationDelay: `${i * 150}ms` }} />
                    ))}
                  </span>
                ) : (
                  <span className="text-white text-[9px] font-bold">P</span>
                )}
              </div>
              <div className="rounded-2xl rounded-tl-sm px-3 py-2 flex-1"
                style={{ background: revealed ? msg.bg : "#F8FAFC", border: `1.5px solid ${revealed ? msg.border : "#E2E8F0"}` }}>
                <p className="text-[11px] font-bold mb-1" style={{ color: revealed ? msg.color : "#CBD5E1" }}>{msg.title}</p>
                <p className="text-[11px] leading-snug" style={{ color: revealed ? "#475569" : "#E2E8F0" }}>{msg.text}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function PatramTab() {
  const features = [
    "Country-specific customs rules",
    "Required document checklist",
    "Live duty rate lookup",
    "Prohibited goods detection",
    "GSP eligibility check",
    "Multi-country comparison",
  ]

  return (
    <div className="grid lg:grid-cols-2 gap-6 items-center">
      <div className="animate-slide-in-left">
        {/* Label */}
        <div className="flex items-center gap-3 mb-3">
          <div className="h-px w-8 flex-shrink-0 rounded-full" style={{ background: "linear-gradient(90deg, #00A86B, #0066CC)" }} />
          <span className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#94A3B8" }}>
            Export Intelligence
          </span>
        </div>
        <h3 className="text-[22px] lg:text-[34px] font-bold leading-tight mb-3" style={{ color: "#0F172A" }}>
          Know the Rules{" "}
          <span style={{ color: "#00A86B" }}>Before You Ship.</span>
        </h3>
        <p className="text-sm leading-relaxed mb-4" style={{ color: "#475569" }}>
          Tell Patram AI what you're exporting and where. Get instant customs rules,
          required documents, duty rates and a compliance checklist — powered by live trade policy data.
        </p>

        <div className="grid grid-cols-2 gap-1.5 mb-4">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2 transition-all duration-300 hover:translate-x-1">
              <Check className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "#00A86B" }} />
              <span className="text-[12px]" style={{ color: "#0F172A" }}>{feature}</span>
            </div>
          ))}
        </div>

        <div className="rounded-lg overflow-hidden mb-4" style={{ border: "1px solid #E2E8F0" }}>
          <table className="w-full text-[12px]">
            <thead>
              <tr style={{ background: "#F8FAFC" }}>
                <th className="text-left font-semibold py-1.5 px-3" style={{ color: "#64748B" }}>Metric</th>
                <th className="text-left font-semibold py-1.5 px-3" style={{ color: "#64748B" }}>Manual Research</th>
                <th className="text-left font-semibold py-1.5 px-3" style={{ color: "#00A86B" }}>With Patram</th>
              </tr>
            </thead>
            <tbody style={{ background: "#FFFFFF" }}>
              <tr style={{ borderTop: "1px solid #E2E8F0" }}>
                <td className="py-1.5 px-3" style={{ color: "#475569" }}>Research Time</td>
                <td className="py-1.5 px-3" style={{ color: "#0F172A" }}>3–8 hours</td>
                <td className="py-1.5 px-3" style={{ color: "#00A86B" }}>{"< 30 sec"}</td>
              </tr>
              <tr style={{ borderTop: "1px solid #E2E8F0" }}>
                <td className="py-1.5 px-3" style={{ color: "#475569" }}>Policy Coverage</td>
                <td className="py-1.5 px-3" style={{ color: "#0F172A" }}>Partial</td>
                <td className="py-1.5 px-3" style={{ color: "#00A86B" }}>190+ countries</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex flex-row gap-3">
          <a
            href="#try-patram"
            className="px-5 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 hover:scale-105 btn-shine"
            style={{
              background: "linear-gradient(90deg, #00A86B, #0066CC)",
              color: "#FFFFFF",
              boxShadow: "0 4px 25px rgba(0,168,107,0.35)",
            }}
          >
            Try Free
          </a>
          <button
            className="px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300"
            style={{ background: "transparent", border: "1.5px solid #CBD5E1", color: "#0F172A" }}
          >
            See Live Demo
          </button>
        </div>
      </div>

      {/* Patram advisor mockup — hidden on mobile */}
      <div className="hidden lg:block animate-slide-in-right">
        <PatramAdvisorMockup />
      </div>
    </div>
  )
}

const TARIFF_MESSAGES = [
  {
    title: "HSN 84137096 — High confidence: 95%",
    text: "Slurry pumps | Other centrifugal pumps. Chapter 84 — Nuclear Reactors, Boilers, Machinery. 8-digit ITC-HS: 8413 70 96.",
    color: "#1B4F8A",
    bg: "rgba(27,79,138,0.06)",
    border: "rgba(27,79,138,0.2)",
  },
  {
    title: "Free to export",
    text: "No special licence or certification required for standard shipments to the UK under this HSN code.",
    color: "#00A86B",
    bg: "rgba(0,168,107,0.07)",
    border: "rgba(0,168,107,0.25)",
  },
  {
    title: "Drawback (AIR) beats RoDTEP here",
    text: "Drawback rate 1.5% gives Rs.10,50,000 vs RoDTEP 0.9% giving Rs.6,30,000 on Rs.70L FOB. You gain Rs.4,20,000 more — choose Drawback. Notif 77/2023-Customs (NT).",
    color: "#1B4F8A",
    bg: "rgba(27,79,138,0.06)",
    border: "rgba(27,79,138,0.2)",
  },
]

function TariffIQChatMockup() {
  const [visibleCount, setVisibleCount] = useState(0)
  const [showTyping, setShowTyping] = useState(true)

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>
    let i = 0

    const step = () => {
      setShowTyping(false)
      i++
      setVisibleCount(i)
      if (i < TARIFF_MESSAGES.length) {
        t = setTimeout(() => { setShowTyping(true); t = setTimeout(step, 700) }, 500)
      } else {
        t = setTimeout(() => {
          setVisibleCount(0)
          setShowTyping(true)
          i = 0
          t = setTimeout(step, 700)
        }, 3500)
      }
    }

    t = setTimeout(step, 800)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="rounded-2xl overflow-hidden flex flex-col"
      style={{ background: "#FFFFFF", border: "2px solid #E2E8F0", boxShadow: "0 20px 60px rgba(27,79,138,0.1)" }}>

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b flex-shrink-0"
        style={{ borderColor: "#E2E8F0", background: "#F8FAFC" }}>
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #1B4F8A, #2563EB)" }}>
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <p className="font-bold text-[12px] leading-none" style={{ color: "#0F172A" }}>TariffIQ — HSN Classifier</p>
            <p className="text-[9px] mt-0.5" style={{ color: "#94A3B8" }}>AI-powered duty intelligence</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#1B4F8A" }} />
          <span className="text-[10px] font-semibold" style={{ color: "#1B4F8A" }}>Online</span>
        </div>
      </div>

      {/* Chat messages */}
      <div className="px-3 py-3 space-y-2.5 flex-1">

        {/* User message */}
        <div className="flex justify-end">
          <div className="rounded-2xl rounded-br-sm px-3 py-2 max-w-[88%]"
            style={{ background: "linear-gradient(135deg, #1B4F8A, #2563EB)" }}>
            <p className="text-[12px] font-medium leading-snug text-white">
              What is the HSN code and best export scheme for centrifugal pumps?
            </p>
          </div>
        </div>

        {/* AI response bubbles — all pre-rendered, ghost until revealed */}
        {TARIFF_MESSAGES.map((msg, idx) => {
          const revealed = idx < visibleCount
          const isNext = idx === visibleCount && showTyping
          return (
            <div key={idx} className="flex items-start gap-2 transition-all duration-400"
              style={{ opacity: revealed ? 1 : isNext ? 0.25 : 0.06 }}>
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ background: "linear-gradient(135deg, #1B4F8A, #2563EB)" }}>
                {isNext ? (
                  <span className="inline-flex gap-0.5">
                    {[0,1,2].map(i => (
                      <span key={i} className="w-0.5 h-0.5 rounded-full animate-bounce bg-white"
                        style={{ animationDelay: `${i * 150}ms` }} />
                    ))}
                  </span>
                ) : (
                  <span className="text-white text-[9px] font-bold">T</span>
                )}
              </div>
              <div className="rounded-2xl rounded-tl-sm px-3 py-2 flex-1"
                style={{ background: revealed ? msg.bg : "#F8FAFC", border: `1.5px solid ${revealed ? msg.border : "#E2E8F0"}` }}>
                <p className="text-[11px] font-bold mb-1" style={{ color: revealed ? msg.color : "#CBD5E1" }}>{msg.title}</p>
                <p className="text-[11px] leading-snug" style={{ color: revealed ? "#475569" : "#E2E8F0" }}>{msg.text}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function TariffIQTab() {
  const features = [
    "8-digit ITC-HS classification",
    "Handles vague descriptions",
    "RoDTEP vs Drawback comparison",
    "Full landed cost calculation",
    "ITC-HS policy checking",
    "Clarifying Q&A support",
  ]

  return (
    <div className="grid lg:grid-cols-2 gap-6 items-center">
      <div className="animate-slide-in-left">
        <div className="flex items-center gap-3 mb-3">
          <div className="h-px w-8 flex-shrink-0 rounded-full" style={{ background: "linear-gradient(90deg, #1B4F8A, #2563EB)" }} />
          <span className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#94A3B8" }}>
            HSN Classification & Duty
          </span>
        </div>
        <h3 className="text-[22px] lg:text-[34px] font-bold leading-tight mb-3" style={{ color: "#0F172A" }}>
          Know Your HSN Code{" "}
          <span style={{ color: "#1B4F8A" }}>Before Shipment.</span>
        </h3>
        <p className="text-sm leading-relaxed mb-4" style={{ color: "#475569" }}>
          Tell TariffIQ what you are shipping. It classifies your product to the correct
          8-digit HSN code, calculates your exact duty liability, and tells you whether
          RoDTEP or Drawback earns you more.
        </p>

        <div className="grid grid-cols-2 gap-1.5 mb-4">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2 transition-all duration-300 hover:translate-x-1">
              <Check className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "#1B4F8A" }} />
              <span className="text-[12px]" style={{ color: "#0F172A" }}>{feature}</span>
            </div>
          ))}
        </div>

        <div className="rounded-lg overflow-hidden mb-4" style={{ border: "1px solid #E2E8F0" }}>
          <table className="w-full text-[12px]">
            <thead>
              <tr style={{ background: "#F8FAFC" }}>
                <th className="text-left font-semibold py-1.5 px-3" style={{ color: "#64748B" }}>Metric</th>
                <th className="text-left font-semibold py-1.5 px-3" style={{ color: "#64748B" }}>Manual</th>
                <th className="text-left font-semibold py-1.5 px-3" style={{ color: "#1B4F8A" }}>With TariffIQ</th>
              </tr>
            </thead>
            <tbody style={{ background: "#FFFFFF" }}>
              <tr style={{ borderTop: "1px solid #E2E8F0" }}>
                <td className="py-1.5 px-3" style={{ color: "#475569" }}>Classification</td>
                <td className="py-1.5 px-3" style={{ color: "#0F172A" }}>1–2 days</td>
                <td className="py-1.5 px-3 font-semibold" style={{ color: "#1B4F8A" }}>{"< 10 sec"}</td>
              </tr>
              <tr style={{ borderTop: "1px solid #E2E8F0" }}>
                <td className="py-1.5 px-3" style={{ color: "#475569" }}>Accuracy</td>
                <td className="py-1.5 px-3" style={{ color: "#0F172A" }}>~70%</td>
                <td className="py-1.5 px-3 font-semibold" style={{ color: "#1B4F8A" }}>95%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex flex-row gap-3">
          <a
            href="#classify"
            className="px-5 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 hover:scale-105 btn-shine"
            style={{
              background: "linear-gradient(90deg, #1B4F8A, #2563EB)",
              color: "#FFFFFF",
              boxShadow: "0 4px 25px rgba(27,79,138,0.3)",
            }}
          >
            Classify My Product
          </a>
          <button
            className="px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300"
            style={{ background: "transparent", border: "1.5px solid #CBD5E1", color: "#0F172A" }}
          >
            See Demo
          </button>
        </div>
      </div>

      {/* TariffIQ mockup — hidden on mobile */}
      <div className="hidden lg:block animate-slide-in-right">
        <TariffIQChatMockup />
      </div>
    </div>
  )
}
