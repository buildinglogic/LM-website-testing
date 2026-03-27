"use client"

import { useState, useEffect, useRef } from "react"
import { trackDemoFormView, trackDemoFormStart, trackDemoFormSubmit } from "@/lib/amplitude"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FooterLinks } from "@/components/footer-links"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Calendar, Clock, Users, Check } from "lucide-react"
import Link from "next/link"



const sessionMeta = [
  { icon: <Clock className="w-4 h-4" />, label: "30 minutes" },
  { icon: <Calendar className="w-4 h-4" />, label: "Flexible timing" },
  { icon: <Users className="w-4 h-4" />, label: "1-on-1 session" },
]

export default function BookDemoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    location: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [agreed, setAgreed] = useState(false)
  const [loading, setLoading] = useState(false)
  const formStarted = useRef(false)

  // Track form page view
  useEffect(() => { trackDemoFormView() }, [])

  const handleFieldFocus = () => {
    if (!formStarted.current) {
      formStarted.current = true
      trackDemoFormStart()
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch('/api/book-demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      trackDemoFormSubmit({ company: formData.company, location: formData.location })
    } catch (_) {
      // still show success — email may have sent
    } finally {
      setLoading(false)
      setSubmitted(true)
    }
  }

  return (
    <main className="min-h-screen pt-[80px]" style={{ background: "#FFFFFF" }}>
      <Navigation />

      {/* Header — horizontal layout, everything in one band */}
      <section className="pt-4 pb-4 px-5 lg:px-8" style={{ background: "#F8FAFC", borderBottom: "1px solid #E2E8F0" }}>
        <div className="max-w-[1060px] mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

          {/* Left: label + title + subtitle */}
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <div className="h-px w-5 rounded-full" style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)" }} />
              <span className="text-[14px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#94A3B8" }}>Get Started</span>
            </div>
            <h1 className="text-[18px] sm:text-[22px] lg:text-[26px] font-extrabold leading-tight mb-1" style={{ color: "#0F172A" }}>
              Book a{" "}
              <span className="bg-gradient-to-r from-[#0066CC] to-[#00A86B] bg-clip-text text-transparent">
                Personalised Demo
              </span>
            </h1>
          </div>


        </div>
      </section>

      {/* Main content */}
      <section className="py-4 px-5 lg:px-8">
        <div className="max-w-[620px] mx-auto">

          {/* Single card — benefits + form together */}
          <div className="p-5 sm:p-6 rounded-2xl" style={{ background: "#FFFFFF", border: "1px solid #E2E8F0", boxShadow: "0 4px 24px rgba(0,0,0,0.07)" }}>
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center"
                  style={{ background: "#ECFDF5" }}>
                  <Check className="w-7 h-7" style={{ color: "#00A86B" }} />
                </div>
                <h2 className="text-[18px] sm:text-[22px] font-bold mb-2" style={{ color: "#0F172A" }}>
                  Demo Request Received!
                </h2>
                <p className="text-[13px] leading-relaxed mb-2" style={{ color: "#475569" }}>
                  Our team will reach out within 24 hours to confirm your slot.
                </p>
                <p className="text-[12px] mb-6" style={{ color: "#94A3B8" }}>
                  Or write to us at{" "}
                  <a href="mailto:support@liquidmind.ai" className="hover:underline" style={{ color: "#0066CC" }}>
                    support@liquidmind.ai
                  </a>
                </p>
                <Link href="/"
                  className="inline-block px-6 py-2.5 rounded-lg text-[13px] font-bold transition-all hover:scale-105"
                  style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)", color: "#FFFFFF" }}>
                  Back to Home
                </Link>
              </div>
            ) : (
              <>
                <div className="h-0.5 w-8 rounded-full mb-3" style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)" }} />
                <h2 className="text-[16px] font-bold mb-3" style={{ color: "#0F172A" }}>Request Your Demo</h2>

                <div className="flex flex-wrap gap-2 mb-4 pb-4" style={{ borderBottom: "1px solid #E2E8F0" }}>
                  {sessionMeta.map((m, i) => (
                    <div key={i} className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[13px] font-medium"
                      style={{ background: "#F1F5F9", color: "#0F172A" }}>
                      <span style={{ color: "#0066CC" }}>{m.icon}</span>
                      {m.label}
                    </div>
                  ))}
                </div>


                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[13px] font-semibold mb-1 uppercase tracking-wide" style={{ color: "#0066CC" }}>Full Name *</label>
                      <input
                        type="text" required value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        onFocus={handleFieldFocus}
                        className="w-full px-3 py-2 rounded-lg text-[13px] focus:outline-none focus:ring-2 focus:ring-[#0066CC]"
                        style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", color: "#0F172A" }}
                        placeholder="Rahul Sharma"
                      />
                    </div>
                    <div>
                      <label className="block text-[13px] font-semibold mb-1 uppercase tracking-wide" style={{ color: "#0066CC" }}>Work Email *</label>
                      <input
                        type="email" required value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg text-[13px] focus:outline-none focus:ring-2 focus:ring-[#0066CC]"
                        style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", color: "#0F172A" }}
                        placeholder="rahul@work.in"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[13px] font-semibold mb-1 uppercase tracking-wide" style={{ color: "#0066CC" }}>Company *</label>
                      <input
                        type="text" required value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg text-[13px] focus:outline-none focus:ring-2 focus:ring-[#0066CC]"
                        style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", color: "#0F172A" }}
                        placeholder="Liquidmind AI"
                      />
                    </div>
                    <div>
                      <label className="block text-[13px] font-semibold mb-1 uppercase tracking-wide" style={{ color: "#0066CC" }}>Phone *</label>
                      <input
                        type="tel" required value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg text-[11px] focus:outline-none focus:ring-2 focus:ring-[#0066CC]"
                        style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", color: "#0F172A" }}
                        placeholder="+91 XXXXXXXXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold mb-1 uppercase tracking-wide" style={{ color: "#0066CC" }}>Location</label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg text-[13px] focus:outline-none focus:ring-2 focus:ring-[#0066CC]"
                      style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", color: "#0F172A" }}
                      placeholder="Bengaluru, Karnataka"
                    />
                  </div>

                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      className="mt-0.5 w-4 h-4 rounded flex-shrink-0 accent-[#0066CC]"
                    />
                    <span className="text-[13px] leading-snug" style={{ color: "#475569" }}>
                      I agree to the{" "}
                      <Link href="/legal/terms" className="underline font-medium" style={{ color: "#0066CC" }}>terms &amp; conditions</Link>
                      {" "}and{" "}
                      <Link href="/legal/privacy-policy" className="underline font-medium" style={{ color: "#0066CC" }}>privacy policy</Link>
                    </span>
                  </label>

                  <button
                    type="submit"
                    disabled={!agreed || loading}
                    className="w-full py-2.5 rounded-lg text-[14px] font-bold btn-shine transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)", color: "#FFFFFF" }}
                  >
                    {loading ? 'Sending…' : 'Schedule My Demo'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      <FooterLinks />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
