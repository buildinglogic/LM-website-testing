"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Check } from "lucide-react"

export default function NewsletterPage() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would connect to your email service
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

  const pastTopics = [
    {
      title: "5 Hidden Reasons Your Drawback Claims Are Getting Rejected",
      date: "March 2026",
    },
    {
      title: "RoDTEP vs Duty Drawback: Which Scheme Pays You More?",
      date: "February 2026",
    },
    {
      title: "How One Exporter Recovered 12 Lakhs in 30 Days",
      date: "February 2026",
    },
    {
      title: "New DGFT Guidelines: What Changes for You in 2026",
      date: "January 2026",
    },
  ]

  return (
    <main className="min-h-screen" style={{ background: "#050A14" }}>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-[160px] lg:pt-[180px] pb-16 lg:pb-24 px-6 lg:px-20">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div>
              <div
                className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold tracking-[0.12em] uppercase mb-6"
                style={{
                  background: "rgba(0,229,180,0.1)",
                  border: "1px solid rgba(0,229,180,0.25)",
                  color: "#00E5B4",
                }}
              >
                NEWSLETTER
              </div>
              <h1 className="text-[38px] lg:text-[56px] font-extrabold text-white leading-tight mb-6">
                Trade Compliance
                <br />
                <span style={{ color: "#00E5B4" }}>Made Simple</span>
              </h1>
              <p className="text-[#94A3B8] text-lg leading-relaxed mb-8">
                Get actionable insights on trade compliance, export documentation, and refund optimization 
                delivered to your inbox every week. Join exporters who are already saving crores.
              </p>

              {/* Benefits list */}
              <div className="space-y-3 mb-8">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#00E5B4] flex-shrink-0" />
                    <span className="text-white text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Subscribe Form */}
            <div
              className="p-8 lg:p-10 rounded-2xl"
              style={{
                background: "#121E33",
                border: "1.5px solid #00E5B4",
                boxShadow: "0 0 40px rgba(0,229,180,0.12)",
              }}
            >
              {subscribed ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: "rgba(0,229,180,0.15)" }}>
                    <Check className="w-8 h-8 text-[#00E5B4]" />
                  </div>
                  <h3 className="text-white text-2xl font-bold mb-4">You're Subscribed!</h3>
                  <p className="text-[#94A3B8] text-base">
                    Check your inbox for a confirmation email. Your first newsletter arrives this week.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-white text-2xl font-bold mb-2">Subscribe Now</h3>
                  <p className="text-[#94A3B8] text-sm mb-6">
                    Free. No spam. Unsubscribe anytime.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="text-[#94A3B8] text-sm mb-2 block">Work Email</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@company.com"
                        required
                        className="w-full px-4 py-3 rounded-lg text-white text-base placeholder:text-[#64748B]"
                        style={{ background: "#0D1526", border: "1px solid #1E3557" }}
                      />
                    </div>
                    <div>
                      <label className="text-[#94A3B8] text-sm mb-2 block">Your Role (Optional)</label>
                      <select
                        className="w-full px-4 py-3 rounded-lg text-white text-base"
                        style={{ background: "#0D1526", border: "1px solid #1E3557" }}
                      >
                        <option value="">Select your role</option>
                        <option value="exporter">Exporter / Trader</option>
                        <option value="cha">Customs House Agent (CHA)</option>
                        <option value="ca">CA / Audit Professional</option>
                        <option value="logistics">Logistics Manager</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <button
                      type="submit"
                      className="w-full py-4 rounded-[10px] text-base font-bold transition-all hover:brightness-110"
                      style={{
                        background: "linear-gradient(90deg, #00E5B4, #00B8D9)",
                        color: "#050A14",
                      }}
                    >
                      Subscribe to Newsletter
                    </button>
                    <p className="text-[#64748B] text-xs text-center">
                      By subscribing, you agree to receive our newsletter. We respect your privacy.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Past Issues Section */}
      <section className="py-16 lg:py-24 px-6 lg:px-20" style={{ background: "#0D1526" }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-[44px] font-bold text-white mb-4">Recent Issues</h2>
            <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
              A glimpse of what subscribers receive every week
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {pastTopics.map((topic, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl transition-all hover:-translate-y-0.5"
                style={{ background: "#121E33", border: "1px solid #1E3557" }}
              >
                <span className="text-[#64748B] text-sm">{topic.date}</span>
                <h3 className="text-white text-lg font-bold mt-2">{topic.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-16 lg:py-24 px-6 lg:px-20" style={{ background: "#050A14" }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-[44px] font-bold text-white mb-4">What You'll Learn</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Compliance Updates",
                description: "Stay ahead of DGFT policy changes, new HSN codes, and tariff updates that affect your business.",
                color: "#00E5B4",
              },
              {
                title: "Refund Optimization",
                description: "Learn strategies to maximize your Drawback, RoDTEP, and IGST refunds. Real numbers, real results.",
                color: "#4DA6FF",
              },
              {
                title: "Error Prevention",
                description: "Common documentation mistakes that cost exporters lakhs, and how to avoid them.",
                color: "#F4B942",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl"
                style={{ 
                  background: "#121E33", 
                  border: "1px solid #1E3557",
                  borderTop: `4px solid ${item.color}`,
                }}
              >
                <h3 className="text-white text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-[#94A3B8] text-[15px] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
