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
      return <span className="animate-pulse text-[#00E5B4]">...</span>
    }
    if (status === "match") return <span className="text-[#00E5B4]">✓</span>
    if (status === "mismatch") return <span className="text-[#FF4444]">✗</span>
    return <span className="text-[#F4B942]">⚠</span>
  }

  const getStatusBadge = (status: string, index: number) => {
    if (currentResolving === index) {
      return (
        <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#00E5B4]/20 text-[#00E5B4]">
          VERIFYING
        </span>
      )
    }
    if (status === "match") {
      return (
        <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#00E5B4]/15 text-[#00E5B4]">
          MATCH
        </span>
      )
    }
    if (status === "mismatch") {
      return (
        <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#FF4444]/15 text-[#FF4444]">
          MISMATCH
        </span>
      )
    }
    return (
      <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#F4B942]/15 text-[#F4B942]">
        WARNING
      </span>
    )
  }

  return (
    <div
      className="w-full max-w-[520px] mx-auto"
      style={{
        perspective: "1000px",
      }}
    >
      <div
        className="bg-[#121E33] border border-[#1E3557] rounded-2xl p-6 transition-all duration-500"
        style={{
          transform: "rotateY(-8deg) rotateX(4deg)",
          boxShadow: "0 24px 80px rgba(0,0,0,0.6), 0 0 40px rgba(0,229,180,0.08)",
        }}
      >
        {/* Top bar */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
            <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
          </div>
          <span className="text-white text-[13px] font-bold">Tradeguard — Compliance Check</span>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-4">
          <button className="px-4 py-2 text-white text-sm font-medium border-b-2 border-[#00E5B4]">
            Shipping Bill
          </button>
          <button className="px-4 py-2 text-[#64748B] text-sm font-medium">Commercial Invoice</button>
        </div>

        {/* Field comparison list */}
        <div className="space-y-2">
          {fields.map((field, idx) => (
            <div
              key={field.id}
              className={`transition-all duration-300 ${currentResolving === idx ? "bg-[#00E5B4]/5 rounded-lg" : ""}`}
            >
              <div className="flex items-center justify-between py-2 px-2">
                <div className="flex items-center gap-3">
                  <span className="text-base">{getStatusIcon(field.status, idx)}</span>
                  <span className="text-[#94A3B8] text-[13px]">{field.field}</span>
                </div>
                {getStatusBadge(field.status, idx)}
              </div>
              {field.status !== "match" && field.invoiceValue && (
                <div className="pl-8 pb-2 text-[11px] text-[#64748B]">
                  {field.invoiceValue}{" "}
                  <span className="text-[#94A3B8]">{field.status === "warning" ? "≈" : "→"}</span>{" "}
                  {field.billValue}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-4 pt-4 border-t border-[#1E3557] bg-[rgba(255,68,68,0.1)] -mx-6 -mb-6 px-6 py-3 rounded-b-2xl">
          <div className="flex items-center justify-between text-sm">
            <span className="text-[#FF4444] font-medium">
              ⚠ {issueCount} Issue{issueCount !== 1 ? "s" : ""} Found
            </span>
            <span className="text-[#F4B942] font-mono">₹2,40,000 at risk</span>
            <span className="text-[#00E5B4] font-medium cursor-pointer hover:underline">
              View Full Report →
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
