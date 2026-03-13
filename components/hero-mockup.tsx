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
      className="w-full max-w-[520px] mx-auto animate-float"
      style={{
        perspective: "1000px",
      }}
    >
      <div
        className="bg-white border rounded-2xl p-6 transition-all duration-500"
        style={{
          transform: "rotateY(-8deg) rotateX(4deg)",
          boxShadow: "0 24px 80px rgba(0,102,204,0.15), 0 0 40px rgba(0,102,204,0.05)",
          borderColor: "#E2E8F0"
        }}
      >
        {/* Top bar */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
            <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
          </div>
          <span className="text-[13px] font-bold" style={{ color: "#0F172A" }}>Tradeguard — Compliance Check</span>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-4">
          <button className="px-4 py-2 text-sm font-medium border-b-2" style={{ color: "#0066CC", borderColor: "#0066CC" }}>
            Shipping Bill
          </button>
          <button className="px-4 py-2 text-sm font-medium" style={{ color: "#94A3B8" }}>Commercial Invoice</button>
        </div>

        {/* Field comparison list */}
        <div className="space-y-2">
          {fields.map((field, idx) => (
            <div
              key={field.id}
              className={`transition-all duration-300 ${currentResolving === idx ? "bg-[#0066CC]/5 rounded-lg" : ""}`}
            >
              <div className="flex items-center justify-between py-2 px-2">
                <div className="flex items-center gap-3">
                  <span className="text-base">{getStatusIcon(field.status, idx)}</span>
                  <span className="text-[13px]" style={{ color: "#475569" }}>{field.field}</span>
                </div>
                {getStatusBadge(field.status, idx)}
              </div>
              {field.status !== "match" && field.invoiceValue && (
                <div className="pl-8 pb-2 text-[11px]" style={{ color: "#94A3B8" }}>
                  {field.invoiceValue}{" "}
                  <span style={{ color: "#64748B" }}>{field.status === "warning" ? "≈" : "→"}</span>{" "}
                  {field.billValue}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-4 pt-4 border-t -mx-6 -mb-6 px-6 py-3 rounded-b-2xl" style={{ background: "rgba(220,38,38,0.05)", borderColor: "#E2E8F0" }}>
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium" style={{ color: "#DC2626" }}>
              ⚠ {issueCount} Issue{issueCount !== 1 ? "s" : ""} Found
            </span>
            <span className="font-mono" style={{ color: "#F59E0B" }}>₹2,40,000 at risk</span>
            <span className="font-medium cursor-pointer hover:underline" style={{ color: "#0066CC" }}>
              View Full Report →
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
