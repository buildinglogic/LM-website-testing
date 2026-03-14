"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FooterLinks } from "@/components/footer-links"
import { Check, Calendar, Clock, Users } from "lucide-react"

export default function BookDemoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    shipments: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    setSubmitted(true)
  }

  const benefits = [
    "See Tradeguard analyze your real documents",
    "Get your personalized risk exposure calculation",
    "Learn how to recover lost refunds",
    "No commitment required",
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      <section className="pt-[120px] lg:pt-[140px] pb-12 lg:pb-16 px-4 lg:px-6" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)" }}>
        <div className="max-w-[1100px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            
            {/* Left - Info */}
            <div className="lg:sticky lg:top-32">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold tracking-[0.12em] uppercase mb-4"
                style={{ background: "rgba(0,102,204,0.1)", border: "1px solid rgba(0,102,204,0.25)", color: "#0066CC" }}>
                SCHEDULE YOUR DEMO
              </div>
              
              <h1 className="text-[28px] lg:text-[42px] font-extrabold leading-tight mb-4" style={{ color: "#0F172A" }}>
                See How Liquidmind<br />
                <span className="bg-gradient-to-r from-[#0066CC] to-[#00A86B] bg-clip-text text-transparent">Protects Your Refunds</span>
              </h1>
              
              <p className="text-base lg:text-lg leading-relaxed mb-6" style={{ color: "#475569" }}>
                Book a personalized demo with our trade compliance experts. We'll show you exactly 
                how much money you could be losing — and how to stop it.
              </p>

              <div className="space-y-3 mb-6">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(0,168,107,0.1)" }}>
                      <Check className="w-4 h-4 text-[#00A86B]" />
                    </div>
                    <span className="text-[15px]" style={{ color: "#0F172A" }}>{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg" style={{ background: "#F1F5F9" }}>
                  <Clock className="w-4 h-4 text-[#0066CC]" />
                  <span className="text-sm font-medium" style={{ color: "#0F172A" }}>30 minutes</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg" style={{ background: "#F1F5F9" }}>
                  <Calendar className="w-4 h-4 text-[#0066CC]" />
                  <span className="text-sm font-medium" style={{ color: "#0F172A" }}>Flexible timing</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg" style={{ background: "#F1F5F9" }}>
                  <Users className="w-4 h-4 text-[#0066CC]" />
                  <span className="text-sm font-medium" style={{ color: "#0F172A" }}>1-on-1 session</span>
                </div>
              </div>

              <div className="p-4 rounded-xl" style={{ background: "#0F172A" }}>
                <p className="text-sm text-white/80 mb-2">Trusted by exporters across India</p>
                <div className="flex items-center gap-4">
                  <div className="text-xl font-bold text-white">99.9%</div>
                  <div className="text-sm text-white/60">Accuracy in document verification</div>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="p-6 lg:p-8 rounded-2xl" style={{ background: "#FFFFFF", border: "2px solid #E2E8F0", boxShadow: "0 10px 40px rgba(0,0,0,0.08)" }}>
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                    style={{ background: "rgba(0,168,107,0.1)" }}>
                    <Check className="w-8 h-8 text-[#00A86B]" />
                  </div>
                  <h2 className="text-2xl font-bold mb-3" style={{ color: "#0F172A" }}>Demo Request Received!</h2>
                  <p className="text-base mb-4" style={{ color: "#475569" }}>
                    Thank you for your interest. Our team will contact you within 24 hours to schedule your personalized demo.
                  </p>
                  <a href="/" className="inline-block px-6 py-3 rounded-lg text-sm font-bold"
                    style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)", color: "#FFFFFF" }}>
                    Back to Home
                  </a>
                </div>
              ) : (
                <>
                  <h2 className="text-xl font-bold mb-1" style={{ color: "#0F172A" }}>Request Your Demo</h2>
                  <p className="text-sm mb-5" style={{ color: "#64748B" }}>Fill in your details and we'll get back to you shortly.</p>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1.5" style={{ color: "#0F172A" }}>Full Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-lg text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#0066CC]"
                          style={{ background: "#F8FAFC", border: "1.5px solid #E2E8F0", color: "#0F172A" }}
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1.5" style={{ color: "#0F172A" }}>Work Email *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-lg text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#0066CC]"
                          style={{ background: "#F8FAFC", border: "1.5px solid #E2E8F0", color: "#0F172A" }}
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1.5" style={{ color: "#0F172A" }}>Company Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-lg text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#0066CC]"
                          style={{ background: "#F8FAFC", border: "1.5px solid #E2E8F0", color: "#0F172A" }}
                          placeholder="Your Company"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1.5" style={{ color: "#0F172A" }}>Phone Number *</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-lg text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#0066CC]"
                          style={{ background: "#F8FAFC", border: "1.5px solid #E2E8F0", color: "#0F172A" }}
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1.5" style={{ color: "#0F172A" }}>Monthly Export Shipments</label>
                      <select
                        value={formData.shipments}
                        onChange={(e) => setFormData({ ...formData, shipments: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#0066CC]"
                        style={{ background: "#F8FAFC", border: "1.5px solid #E2E8F0", color: "#0F172A" }}
                      >
                        <option value="">Select range</option>
                        <option value="1-10">1-10 shipments</option>
                        <option value="11-50">11-50 shipments</option>
                        <option value="51-100">51-100 shipments</option>
                        <option value="100+">100+ shipments</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1.5" style={{ color: "#0F172A" }}>Message (Optional)</label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={3}
                        className="w-full px-4 py-2.5 rounded-lg text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#0066CC] resize-none"
                        style={{ background: "#F8FAFC", border: "1.5px solid #E2E8F0", color: "#0F172A" }}
                        placeholder="Tell us about your specific requirements..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 rounded-lg text-base font-bold btn-shine transition-all hover:scale-[1.02]"
                      style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)", color: "#FFFFFF" }}
                    >
                      Schedule My Demo
                    </button>

                    <p className="text-center text-xs" style={{ color: "#94A3B8" }}>
                      By submitting, you agree to our Terms of Service and Privacy Policy.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <FooterLinks />
      <Footer />
    </main>
  )
}
