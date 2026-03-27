"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FooterLinks } from "@/components/footer-links"
import { WhatsAppButton } from "@/components/whatsapp-button"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"

const PRODUCT = "patram"
const PRODUCT_NAME = "Patram AI"
const PRODUCT_COLOR = "#00A86B"
const VIDEO_SRC = "/videos/PatramAI Final Demo.mp4"
const TEASER = "See how Patram AI answers complex trade compliance questions in seconds using your real documents."
const PRODUCT_HREF = "/products/patram"
const FREE_DOMAINS = ["gmail.com","yahoo.com","hotmail.com","outlook.com","icloud.com","protonmail.com","ymail.com","aol.com","live.com","rediffmail.com","zoho.com"]

export default function PatramDemoPage() {
  const [email, setEmail] = useState("")
  const [unlocked, setUnlocked] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const sectionRef = useRef<HTMLElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem(`demo-unlocked-${PRODUCT}`)) {
      setUnlocked(true)
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsInView(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !email.includes("@")) { setError("Please enter a valid email."); return }
    const domain = email.split("@")[1]?.toLowerCase()
    if (!domain || FREE_DOMAINS.includes(domain)) { setError("Please use your work email address."); return }
    setError("")
    setLoading(true)
    try {
      await fetch("/api/demo-gate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, product: PRODUCT }),
      })
    } catch (_) {}
    localStorage.setItem(`demo-unlocked-${PRODUCT}`, "true")
    setUnlocked(true)
    setLoading(false)
  }

  return (
    <main className="min-h-screen" style={{ background: "#FFFFFF" }}>
      <Navigation />

      <section ref={sectionRef} className="pt-[100px] lg:pt-[120px] pb-10 lg:pb-14 px-5 lg:px-8">
        <div className="max-w-[860px] mx-auto">

          <div className={`flex items-center justify-center gap-3 mb-4 transition-all duration-500 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)" }} />
            <span className="text-[10px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#94A3B8" }}>Live Demo</span>
            <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(270deg, #0066CC, #00A86B)" }} />
          </div>

          <div className={`text-center mb-6 transition-all duration-500 delay-100 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <div className="flex items-center justify-center gap-2.5 mb-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${PRODUCT_COLOR}15` }}>
                <span className="text-[18px] font-extrabold" style={{ color: PRODUCT_COLOR }}>P</span>
              </div>
              <h1 className="text-[26px] sm:text-[36px] lg:text-[48px] font-extrabold leading-tight tracking-tight" style={{ color: "#0F172A" }}>
                {PRODUCT_NAME} <span style={{ color: PRODUCT_COLOR }}>Demo</span>
              </h1>
            </div>
            <p className="text-[13px] sm:text-[14px] max-w-[520px] mx-auto" style={{ color: "#64748B" }}>
              {TEASER}
            </p>
          </div>

          <div className={`mb-6 transition-all duration-700 delay-200 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {unlocked ? (
              <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid #E2E8F0", boxShadow: "0 8px 40px rgba(0,102,204,0.12)" }}>
                <video
                  src={VIDEO_SRC}
                  controls
                  autoPlay
                  controlsList="nodownload"
                  className="w-full block"
                  style={{ maxHeight: "520px", background: "#000" }}
                />
              </div>
            ) : (
              <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid #E2E8F0", boxShadow: "0 8px 40px rgba(0,102,204,0.12)" }}>
                <div className="relative overflow-hidden" style={{ height: "200px" }}>
                  <video
                    src={VIDEO_SRC}
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ filter: "blur(4px) brightness(0.35)", transform: "scale(1.05)" }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.15)", border: "2px solid rgba(255,255,255,0.3)" }}>
                      <svg className="w-6 h-6 ml-1" viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                    </div>
                  </div>
                </div>
                <form onSubmit={handleSubmit} className="p-6 text-center" style={{ background: "#FFFFFF" }}>
                  <h3 className="text-[15px] font-bold mb-1" style={{ color: "#0F172A" }}>Watch Patram AI in action</h3>
                  <p className="text-[12px] mb-4" style={{ color: "#94A3B8" }}>
                    Enter your work email for instant access — no calls, no commitment.
                  </p>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    required
                    className="w-full px-3 py-2.5 rounded-lg text-[13px] mb-3 focus:outline-none focus:ring-2 focus:ring-[#00A86B]"
                    style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", color: "#0F172A" }}
                  />
                  {error && <p className="text-[11px] mb-2" style={{ color: "#DC2626" }}>{error}</p>}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full px-6 py-3 rounded-xl text-[14px] font-bold btn-shine transition-all duration-300 hover:scale-[1.03] overflow-hidden disabled:opacity-60"
                    style={{ background: "linear-gradient(135deg, #00A86B, #0066CC)", color: "#FFFFFF", boxShadow: "0 4px 25px rgba(0,168,107,0.3)" }}
                  >
                    {loading ? "Almost there..." : "Watch the Demo"}
                  </button>
                  <p className="text-[10px] mt-2" style={{ color: "#94A3B8" }}>No spam. Work email required.</p>
                </form>
              </div>
            )}
          </div>

          <div className={`flex flex-col sm:flex-row items-center justify-center gap-3 transition-all duration-500 delay-300 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <Link
              href="/book-demo"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-[15px] font-bold btn-shine transition-all duration-300 hover:scale-[1.03] overflow-hidden"
              style={{ background: "linear-gradient(135deg, #00A86B, #0066CC)", color: "#FFFFFF", boxShadow: "0 4px 25px rgba(0,168,107,0.3)" }}
            >
              Book a Personalised Demo <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href={PRODUCT_HREF}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-[15px] font-semibold transition-all duration-300 hover:scale-[1.03]"
              style={{ background: "#FFFFFF", border: "2px solid #E2E8F0", color: "#0F172A" }}
            >
              Learn more about {PRODUCT_NAME}
            </Link>
          </div>

        </div>
      </section>

      <FooterLinks />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
