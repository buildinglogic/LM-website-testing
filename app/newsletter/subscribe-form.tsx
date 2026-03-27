"use client"

import { useState } from "react"
import { Check } from "lucide-react"

export function SubscribeForm() {
  const [email, setEmail] = useState("")
  const [role, setRole] = useState("")
  const [subscribed, setSubscribed] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, role }),
      })
    } catch (_) {
      // still show success
    } finally {
      setLoading(false)
      setSubscribed(true)
    }
  }

  return (
    <div className="rounded-2xl p-6 lg:p-8"
      style={{ background: "#FFFFFF", border: "2px solid #0066CC", boxShadow: "0 8px 40px rgba(0,102,204,0.12)" }}>
      {subscribed ? (
        <div className="text-center py-8">
          <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
            style={{ background: "linear-gradient(135deg, #0066CC, #00A86B)" }}>
            <Check className="w-7 h-7 text-white" />
          </div>
          <h3 className="text-[18px] font-bold mb-2" style={{ color: "#0F172A" }}>{"You're Subscribed!"}</h3>
          <p className="text-[16px]" style={{ color: "#475569" }}>
            Check your inbox for a confirmation email. Your first issue arrives this week.
          </p>
        </div>
      ) : (
        <>
          <h3 className="text-[18px] sm:text-[20px] font-bold mb-1" style={{ color: "#0F172A" }}>Subscribe Now</h3>
          <p className="text-[16px] mb-5" style={{ color: "#64748B" }}>Free. No spam. Unsubscribe anytime.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[15px] font-semibold mb-1.5" style={{ color: "#0066CC" }}>
                Work Email <span style={{ color: "#0066CC" }}>*</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                required
                className="w-full px-4 py-3 rounded-full text-[14px] outline-none transition-all focus:ring-2 focus:ring-[#0066CC]/30"
                style={{ background: "#F1F5F9", border: "none", color: "#0F172A" }}
              />
            </div>

            <div>
              <label className="block text-[13px] font-semibold mb-1.5" style={{ color: "#0066CC" }}>
                Your Role <span style={{ color: "#94A3B8", fontWeight: 400 }}>(Optional)</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {["Exporter / Trader", "CHA", "CA / Auditor", "Logistics", "Other"].map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setRole(r)}
                    className="px-3 py-1.5 rounded-full text-[14px] font-medium transition-all"
                    style={{
                      background: role === r ? "#0066CC" : "#F1F5F9",
                      color: role === r ? "#FFFFFF" : "#475569",
                      border: role === r ? "none" : "1px solid #E2E8F0",
                    }}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-full text-[16px] font-bold btn-shine transition-all hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed"
              style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)", color: "#FFFFFF" }}
            >
              {loading ? 'Subscribing…' : 'Subscribe to Newsletter'}
            </button>
            <p className="text-[13px] text-center" style={{ color: "#94A3B8" }}>
              By subscribing you agree to receive our newsletter. We respect your privacy.
            </p>
          </form>
        </>
      )}
    </div>
  )
}
