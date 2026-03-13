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
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-[160px] lg:pt-[180px] pb-16 lg:pb-24 px-6 lg:px-20" style={{ background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 50%, #EFF6FF 100%)" }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div>
              <div
                className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold tracking-[0.12em] uppercase mb-6"
                style={{
                  background: "rgba(0,102,204,0.1)",
                  border: "1px solid rgba(0,102,204,0.25)",
                  color: "#0066CC",
                }}
              >
                NEWSLETTER
              </div>
              <h1 className="text-[38px] lg:text-[56px] font-extrabold leading-tight mb-6" style={{ color: "#0F172A" }}>
                Trade Compliance
                <br />
                <span className="bg-gradient-to-r from-[#0066CC] to-[#00A86B] bg-clip-text text-transparent">Made Simple</span>
              </h1>
              <p className="text-lg leading-relaxed mb-8" style={{ color: "#475569" }}>
                Get actionable insights on trade compliance, export documentation, and refund optimization 
                delivered to your inbox every week. Join exporters who are already saving crores.
              </p>

              {/* Benefits list */}
              <div className="space-y-3 mb-8">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Check className="w-5 h-5 flex-shrink-0" style={{ color: "#00A86B" }} />
                    <span className="text-sm" style={{ color: "#0F172A" }}>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Subscribe Form */}
            <div
              className="p-8 lg:p-10 rounded-2xl"
              style={{
                background: "#FFFFFF",
                border: "2px solid #0066CC",
                boxShadow: "0 8px 50px rgba(0,102,204,0.15)",
              }}
            >
              {subscribed ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: "rgba(0,168,107,0.1)" }}>
                    <Check className="w-8 h-8" style={{ color: "#00A86B" }} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4" style={{ color: "#0F172A" }}>You're Subscribed!</h3>
                  <p className="text-base" style={{ color: "#475569" }}>
                    Check your inbox for a confirmation email. Your first newsletter arrives this week.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold mb-2" style={{ color: "#0F172A" }}>Subscribe Now</h3>
                  <p className="text-sm mb-6" style={{ color: "#475569" }}>
                    Free. No spam. Unsubscribe anytime.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="text-sm mb-2 block" style={{ color: "#475569" }}>Work Email</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@company.com"
                        required
                        className="w-full px-4 py-3 rounded-lg text-base"
                        style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", color: "#0F172A" }}
                      />
                    </div>
                    <div>
                      <label className="text-sm mb-2 block" style={{ color: "#475569" }}>Your Role (Optional)</label>
                      <select
                        className="w-full px-4 py-3 rounded-lg text-base"
                        style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", color: "#0F172A" }}
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
                      className="w-full py-4 rounded-[10px] text-base font-bold transition-all duration-300 hover:scale-[1.02] btn-shine"
                      style={{
                        background: "linear-gradient(90deg, #0066CC, #00A86B)",
                        color: "#FFFFFF",
                      }}
                    >
                      Subscribe to Newsletter
                    </button>
                    <p className="text-xs text-center" style={{ color: "#94A3B8" }}>
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
      <section className="py-16 lg:py-24 px-6 lg:px-20" style={{ background: "#FFFFFF" }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-[44px] font-bold mb-4" style={{ color: "#0F172A" }}>Recent <span className="text-[#0066CC]">Issues</span></h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#475569" }}>
              A glimpse of what subscribers receive every week
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {pastTopics.map((topic, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg card-hover"
                style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}
              >
                <span className="text-sm" style={{ color: "#94A3B8" }}>{topic.date}</span>
                <h3 className="text-lg font-bold mt-2" style={{ color: "#0F172A" }}>{topic.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-16 lg:py-24 px-6 lg:px-20" style={{ background: "#F8FAFC" }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-[44px] font-bold mb-4" style={{ color: "#0F172A" }}>What You'll <span className="text-[#0066CC]">Learn</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Compliance Updates",
                description: "Stay ahead of DGFT policy changes, new HSN codes, and tariff updates that affect your business.",
                color: "#0066CC",
              },
              {
                title: "Refund Optimization",
                description: "Learn strategies to maximize your Drawback, RoDTEP, and IGST refunds. Real numbers, real results.",
                color: "#00A86B",
              },
              {
                title: "Error Prevention",
                description: "Common documentation mistakes that cost exporters lakhs, and how to avoid them.",
                color: "#F59E0B",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl card-hover"
                style={{ 
                  background: "#FFFFFF", 
                  border: "1px solid #E2E8F0",
                  borderTop: `4px solid ${item.color}`,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.05)"
                }}
              >
                <h3 className="text-xl font-bold mb-4" style={{ color: "#0F172A" }}>{item.title}</h3>
                <p className="text-[15px] leading-relaxed" style={{ color: "#475569" }}>{item.description}</p>
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
