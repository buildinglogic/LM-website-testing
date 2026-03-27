"use client"

import { useState, useEffect } from "react"

interface FieldRow {
  id: number
  field: string
  status: "match" | "mismatch" | "warning"
  invoiceValue?: string
  billValue?: string
}

const initialFields: FieldRow[] = [
  { id: 1, field: "Exporter Name", status: "match" },
  { id: 2, field: "IEC Number", status: "match" },
  { id: 3, field: "HSN Code", status: "mismatch", invoiceValue: "5208.11", billValue: "5208.12" },
  { id: 4, field: "FOB Value", status: "match" },
  { id: 5, field: "Port of Loading", status: "warning", invoiceValue: "HAZIRA", billValue: "NHZA1 (HAZIRA, SURAT)" },
  { id: 6, field: "Unit of Quantity", status: "mismatch", invoiceValue: "NOS", billValue: "PCS" },
]

export function HeroMockup({ animated = true }: { animated?: boolean }) {
  const [fields, setFields] = useState(initialFields)
  const [currentResolving, setCurrentResolving] = useState(-1)

  useEffect(() => {
    if (!animated) return

    const mismatchIndices = fields
      .map((f, i) => (f.status !== "match" ? i : -1))
      .filter((i) => i !== -1)

    let resolveIndex = 0
    const interval = setInterval(() => {
      if (resolveIndex < mismatchIndices.length) {
        const idx = mismatchIndices[resolveIndex]
        setCurrentResolving(idx)

        setTimeout(() => {
          setFields((prev) =>
            prev.map((f, i) =>
              i === idx ? { ...f, status: "match" as const, invoiceValue: undefined, billValue: undefined } : f
            )
          )
          setCurrentResolving(-1)
        }, 500)

        resolveIndex++
      } else {
        // Reset after all resolved
        setTimeout(() => {
          setFields(initialFields)
          resolveIndex = 0
        }, 2000)
      }
    }, 2000)

    return () => clearInterval(interval)
  }, [animated])

  const issueCount = fields.filter((f) => f.status !== "match").length

  const getStatusIcon = (status: string, index: number) => {
    if (currentResolving === index) {
      return <span className="animate-pulse text-[#0066CC]">...</span>
    }
    if (status === "match") return <span className="text-[#00A86B]">✓</span>
    if (status === "mismatch") return <span className="text-[#DC2626]">✗</span>
    return <span className="text-[#F59E0B]">⚠</span>
  }

  const getStatusBadge = (status: string, index: number) => {
    if (currentResolving === index) {
      return (
        <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#0066CC]/10 text-[#0066CC]">
          VERIFYING
        </span>
      )
    }
    if (status === "match") {
      return (
        <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#00A86B]/10 text-[#00A86B]">
          MATCH
        </span>
      )
    }
    if (status === "mismatch") {
      return (
        <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#DC2626]/10 text-[#DC2626]">
          MISMATCH
        </span>
      )
    }
    return (
      <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#F59E0B]/10 text-[#F59E0B]">
        WARNING
      </span>
    )
  }

  return (
    <div
      className="w-full max-w-[480px] mx-auto lg:max-w-[520px] lg:animate-float"
      style={{ perspective: "1000px" }}
    >
      <div
        className="bg-white border rounded-2xl overflow-hidden"
        style={{
          boxShadow: "0 24px 80px rgba(0,102,204,0.15), 0 0 40px rgba(0,102,204,0.05)",
          borderColor: "#E2E8F0"
        }}
      >
        {/* Top bar */}
        <div className="flex items-center gap-3 px-4 pt-3.5 pb-3" style={{ borderBottom: "1px solid #F1F5F9" }}>
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
            <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
          </div>
          <span className="text-[13px] font-bold" style={{ color: "#0F172A" }}>TradeGuard — Compliance Check</span>
        </div>

        {/* Column headers */}
        <div className="grid grid-cols-[1fr_auto_1fr] gap-0" style={{ borderBottom: "1px solid #F1F5F9", background: "#F8FAFC" }}>
          <div className="px-4 py-2 text-[10px] font-bold uppercase tracking-widest" style={{ color: "#0066CC" }}>Shipping Bill</div>
          <div className="px-2 py-2 text-[10px] font-bold uppercase tracking-widest text-center" style={{ color: "#94A3B8", minWidth: "70px" }}>Status</div>
          <div className="px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-right" style={{ color: "#64748B" }}>Invoice</div>
        </div>

        {/* Fixed-height field rows — no layout shift */}
        <div style={{ height: "252px", overflow: "hidden" }}>
          {fields.map((field, idx) => {
            const isResolving = currentResolving === idx
            const isMismatch = field.status === "mismatch"
            const isWarning = field.status === "warning"
            const isMatch = field.status === "match"
            const rowBg = isResolving ? "rgba(0,102,204,0.04)" : isMismatch ? "rgba(220,38,38,0.03)" : isWarning ? "rgba(245,158,11,0.03)" : "transparent"

            return (
              <div
                key={field.id}
                className="grid grid-cols-[1fr_auto_1fr] gap-0 transition-all duration-300"
                style={{ height: "42px", background: rowBg, borderBottom: "1px solid #F8FAFC" }}
              >
                {/* SB value */}
                <div className="px-4 flex items-center">
                  <span className="text-[11px] font-medium truncate" style={{ color: "#0F172A" }}>
                    {field.billValue ?? field.field}
                  </span>
                </div>

                {/* Status badge — centered */}
                <div className="px-2 flex items-center justify-center" style={{ minWidth: "70px" }}>
                  {isResolving ? (
                    <span className="text-[9px] font-bold px-2 py-0.5 rounded" style={{ background: "rgba(0,102,204,0.1)", color: "#0066CC" }}>...</span>
                  ) : isMatch ? (
                    <span className="text-[9px] font-bold px-2 py-0.5 rounded" style={{ background: "rgba(0,168,107,0.1)", color: "#00A86B" }}>MATCH</span>
                  ) : isMismatch ? (
                    <span className="text-[9px] font-bold px-2 py-0.5 rounded" style={{ background: "rgba(220,38,38,0.1)", color: "#DC2626" }}>MISMATCH</span>
                  ) : (
                    <span className="text-[9px] font-bold px-2 py-0.5 rounded" style={{ background: "rgba(245,158,11,0.1)", color: "#D97706" }}>WARNING</span>
                  )}
                </div>

                {/* Invoice value */}
                <div className="px-4 flex items-center justify-end">
                  <span
                    className="text-[11px] font-medium truncate"
                    style={{ color: isMismatch ? "#DC2626" : isWarning ? "#D97706" : "#475569" }}
                  >
                    {field.invoiceValue ?? field.field}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom bar */}
        <div className="px-4 py-3 flex items-center justify-between" style={{ background: "rgba(220,38,38,0.04)", borderTop: "1px solid #F1F5F9" }}>
          <span className="text-[12px] font-semibold" style={{ color: "#DC2626" }}>
            {issueCount} Issue{issueCount !== 1 ? "s" : ""} Found
          </span>
          <span className="text-[12px] font-mono" style={{ color: "#64748B" }}>₹2,40,000 at risk</span>
          <span className="text-[12px] font-semibold" style={{ color: "#0066CC" }}>View Report →</span>
        </div>
      </div>
    </div>
  )
}
