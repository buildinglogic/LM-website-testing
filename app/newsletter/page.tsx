"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FooterLinks } from "@/components/footer-links"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Check } from "lucide-react"

export default function NewsletterPage() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubscribed(true)
  }

  const benefits = [
    "Weekly trade compliance insights",
    "HSN code updates & tariff changes",
    "DGFT policy announcements",
    "Tips to maximize drawback & RODTEP",
    "Case studies & success stories",
    "Early access to new features",
  ]

  const recentIssues = [
    { title: "5 Hidden Reasons Your Drawback Claims Are Getting Rejected", date: "March 10, 2026", readTime: "5 min read" },
    { title: "RoDTEP vs Duty Drawback: Which Scheme Pays You More?", date: "March 3, 2026", readTime: "7 min read" },
    { title: "How One Exporter Recovered 12 Lakhs in 30 Days", date: "February 24, 2026", readTime: "4 min read" },
    { title: "New DGFT Guidelines: What Changes for You in 2026", date: "February 17, 2026", readTime: "6 min read" },
    { title: "The Complete Guide to HSN Code Classification", date: "February 10, 2026", readTime: "10 min read" },
    { title: "Avoiding IGST Refund Rejections: A Step-by-Step Checklist", date: "February 3, 2026", readTime: "8 min read" },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-[140px] lg:pt-[160px] pb-12 lg:pb-16 px-4 lg:px-6" style={{ background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 50%, #EFF6FF 100%)" }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold tracking-[0.12em] uppercase mb-4"
                style={{ background: "rgba(0,102,204,0.1)", border: "1px solid rgba(0,102,204,0.25)", color: "#0066CC" }}>
                NEWSLETTER
              </div>
              <h1 className="text-[32px] lg:text-[48px] font-extrabold leading-tight mb-4" style={{ color: "#0F172A" }}>
                Trade Compliance<br />
                <span className="bg-gradient-to-r from-[#0066CC] to-[#00A86B] bg-clip-text text-transparent">Made Simple</span>
              </h1>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#475569" }}>
                Get actionable insights on trade compliance, export documentation, and refund optimization 
                delivered to your inbox every week. Join exporters who are already saving crores.
              </p>

              <div className="space-y-2 mb-6">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Check className="w-4 h-4 flex-shrink-0" style={{ color: "#00A86B" }} />
                    <span className="text-[13px]" style={{ color: "#0F172A" }}>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Subscribe Form */}
            <div className="p-6 lg:p-8 rounded-xl" style={{ background: "#FFFFFF", border: "2px solid #0066CC", boxShadow: "0 8px 40px rgba(0,102,204,0.15)" }}>
              {subscribed ? (
                <div className="text-center py-6">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "rgba(0,168,107,0.1)" }}>
                    <Check className="w-7 h-7" style={{ color: "#00A86B" }} />
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: "#0F172A" }}>{"You're Subscribed!"}</h3>
                  <p className="text-sm" style={{ color: "#475569" }}>Check your inbox for a confirmation email. Your first newsletter arrives this week.</p>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold mb-2" style={{ color: "#0F172A" }}>Subscribe Now</h3>
                  <p className="text-sm mb-4" style={{ color: "#475569" }}>Free. No spam. Unsubscribe anytime.</p>
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                      <label className="text-xs mb-1 block" style={{ color: "#475569" }}>Work Email</label>
                      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" required
                        className="w-full px-3 py-2.5 rounded-lg text-sm" style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", color: "#0F172A" }} />
                    </div>
                    <div>
                      <label className="text-xs mb-1 block" style={{ color: "#475569" }}>Your Role (Optional)</label>
                      <select className="w-full px-3 py-2.5 rounded-lg text-sm" style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", color: "#0F172A" }}>
                        <option value="">Select your role</option>
                        <option value="exporter">Exporter / Trader</option>
                        <option value="cha">Customs House Agent (CHA)</option>
                        <option value="ca">CA / Audit Professional</option>
                        <option value="logistics">Logistics Manager</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <button type="submit" className="w-full py-3 rounded-lg text-sm font-bold btn-shine transition-all hover:scale-[1.02]"
                      style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)", color: "#FFFFFF" }}>
                      Subscribe to Newsletter
                    </button>
                    <p className="text-[10px] text-center" style={{ color: "#94A3B8" }}>By subscribing, you agree to receive our newsletter. We respect your privacy.</p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Issues Section */}
      <section className="py-12 lg:py-16 px-4 lg:px-6" style={{ background: "#FFFFFF" }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold mb-3" style={{ color: "#0F172A" }}>Recent <span className="text-[#0066CC]">Issues</span></h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: "#475569" }}>A glimpse of what subscribers receive every week</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recentIssues.map((issue, idx) => (
              <div key={idx} className="p-5 rounded-xl transition-all card-hover cursor-pointer"
                style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs" style={{ color: "#94A3B8" }}>{issue.date}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: "rgba(0,102,204,0.1)", color: "#0066CC" }}>{issue.readTime}</span>
                </div>
                <h3 className="text-[15px] font-bold leading-snug" style={{ color: "#0F172A" }}>{issue.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-12 lg:py-16 px-4 lg:px-6" style={{ background: "#F8FAFC" }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold mb-3" style={{ color: "#0F172A" }}>{"What You'll"} <span className="text-[#0066CC]">Learn</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: "Compliance Updates", description: "Stay ahead of DGFT policy changes, new HSN codes, and tariff updates that affect your business.", color: "#0066CC" },
              { title: "Refund Optimization", description: "Learn strategies to maximize your Drawback, RoDTEP, and IGST refunds. Real numbers, real results.", color: "#00A86B" },
              { title: "Error Prevention", description: "Common documentation mistakes that cost exporters lakhs, and how to avoid them.", color: "#F59E0B" },
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-xl card-hover"
                style={{ background: "#FFFFFF", border: "1px solid #E2E8F0", borderTop: `4px solid ${item.color}` }}>
                <h3 className="text-lg font-bold mb-3" style={{ color: "#0F172A" }}>{item.title}</h3>
                <p className="text-[14px] leading-relaxed" style={{ color: "#475569" }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterLinks />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
