"use client"

import { useState, useRef, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ArrowRight, Upload, ChevronDown } from "lucide-react"
import Image from "next/image"

const POSITIONS = ["AI/ML Engineer", "Full Stack Developer"]

export default function CareersPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: "",
    startDate: "",
    cvLink: "",
  })
  const [positionOpen, setPositionOpen] = useState(false)
  const [resumeFile, setResumeFile] = useState<File | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setPositionOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && file.size <= 15 * 1024 * 1024) setResumeFile(file)
  }

  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.position) return
    setLoading(true)
    try {
      const fd = new FormData()
      fd.append('firstName', form.firstName)
      fd.append('lastName', form.lastName)
      fd.append('email', form.email)
      fd.append('phone', form.phone)
      fd.append('position', form.position)
      fd.append('startDate', form.startDate)
      fd.append('cvLink', form.cvLink)
      if (resumeFile) fd.append('resume', resumeFile)

      await fetch('/api/careers', { method: 'POST', body: fd })
    } catch (_) {
      // still show success
    } finally {
      setLoading(false)
      setSubmitted(true)
    }
  }

  const labelStyle = { color: "#0066CC" }
  const inputClass = "w-full px-4 py-3 rounded-full text-[14px] outline-none transition-all focus:ring-2 focus:ring-[#0066CC]/30"
  const inputStyle = { background: "#F1F5F9", border: "none", color: "#0F172A" }

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="pt-[100px] lg:pt-[120px] pb-10 lg:pb-20 px-5 lg:px-20" style={{ background: "#FFFFFF" }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-[28px] sm:text-[38px] lg:text-[56px] font-extrabold leading-tight mb-5" style={{ color: "#0F172A" }}>
                {"Let's make the world"}
                <br />
                <span className="bg-gradient-to-r from-[#0066CC] to-[#00A86B] bg-clip-text text-transparent">
                  better together!
                </span>
              </h1>
              <a
                href="#apply"
                className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 rounded-full text-[15px] sm:text-[17px] font-bold transition-all duration-300 hover:scale-105 btn-shine"
                style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)", color: "#FFFFFF", boxShadow: "0 4px 25px rgba(0,102,204,0.35)" }}
              >
                EXPLORE VACANCIES <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
            <div className="relative h-[220px] sm:h-[300px] lg:h-[420px] rounded-2xl overflow-hidden card-hover" style={{ boxShadow: "0 25px 60px rgba(0,0,0,0.1)" }}>
              <Image src="/images/career-hero.jpg" alt="Join our team" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Unity in Diversity */}
      <section className="py-10 lg:py-20 px-5 lg:px-20" style={{ background: "#F8FAFC" }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-[22px] sm:text-[28px] lg:text-[40px] font-bold mb-4" style={{ color: "#0F172A" }}>
                Unity in <span style={{ color: "#0066CC" }}>Diversity</span>
              </h2>
              <p className="text-[16px] sm:text-[17px] lg:text-xl leading-relaxed" style={{ color: "#475569" }}>
                Join our innovative team where diverse backgrounds drive financial revolution.
                Embrace a collaborative environment uniting varied perspectives. Shape the future
                of finance with us today!
              </p>
            </div>
            <div className="order-1 lg:order-2 relative h-[200px] sm:h-[260px] lg:h-[360px] rounded-2xl overflow-hidden card-hover" style={{ boxShadow: "0 25px 60px rgba(0,0,0,0.1)" }}>
              <Image src="/images/career-diversity.jpg" alt="Unity in Diversity" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Positive Learning Curve */}
      <section className="py-10 lg:py-20 px-5 lg:px-20" style={{ background: "#FFFFFF" }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div className="relative h-[200px] sm:h-[260px] lg:h-[360px] rounded-2xl overflow-hidden card-hover" style={{ boxShadow: "0 25px 60px rgba(0,0,0,0.1)" }}>
              <Image src="/images/career-learning.jpg" alt="Positive Learning Curve" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-[22px] sm:text-[28px] lg:text-[40px] font-bold mb-4" style={{ color: "#0F172A" }}>
                Positive Learning <span style={{ color: "#00A86B" }}>Curve</span>
              </h2>
              <p className="text-[16px] sm:text-[17px] lg:text-xl leading-relaxed" style={{ color: "#475569" }}>
                Join our team to explore innovative use cases and experiment with proof of concepts
                in a dynamic learning environment. Empowerment drives us to push boundaries and
                contribute to groundbreaking solutions in financial operations. Unlock your potential
                and embark on a journey of continuous growth with us today.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Create Something Better */}
      <section className="py-10 lg:py-20 px-5 lg:px-20" style={{ background: "#F8FAFC" }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-[20px] sm:text-[26px] lg:text-[36px] font-bold mb-4 italic" style={{ color: "#0066CC" }}>
                Create something better for the world through innovation
              </h2>
              <p className="text-[16px] sm:text-[17px] lg:text-xl leading-relaxed mb-5" style={{ color: "#475569" }}>
                Our team dedicated to various initiatives, uplifting underprivileged communities,
                and advocating for education. Make a tangible impact through our robust programs,
                driving innovation while fostering positive change. Join us in making a difference today.
              </p>
              <a
                href="#apply"
                className="hidden lg:inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold transition-all duration-300 hover:scale-105"
                style={{ background: "transparent", color: "#0F172A", border: "2px solid #0F172A" }}
              >
                EXPLORE VACANCIES <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            <div className="order-1 lg:order-2 relative h-[200px] sm:h-[260px] lg:h-[360px] rounded-2xl overflow-hidden card-hover" style={{ boxShadow: "0 25px 60px rgba(0,0,0,0.1)" }}>
              <Image src="/images/career-innovation.jpg" alt="Create something better" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-10 lg:py-24 px-5 lg:px-20" style={{ background: "#FFFFFF" }}>
        <div className="max-w-[640px] mx-auto">
          <h2 className="text-[22px] sm:text-[28px] lg:text-[36px] font-bold text-center mb-7" style={{ color: "#0F172A" }}>
            Come Work With Us
          </h2>

          {submitted ? (
            <div className="text-center py-16">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ background: "linear-gradient(135deg, #0066CC, #00A86B)" }}
              >
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-[22px] font-bold mb-2" style={{ color: "#0F172A" }}>Application Submitted!</h3>
              <p className="text-[16px]" style={{ color: "#64748B" }}>
                We'll review your application and get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">

              {/* First + Last name */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[15px] font-semibold mb-1.5" style={labelStyle}>First name</label>
                  <input name="firstName" value={form.firstName} onChange={handleChange}
                    className={inputClass} style={inputStyle} />
                </div>
                <div>
                  <label className="block text-[15px] font-semibold mb-1.5" style={labelStyle}>Last name</label>
                  <input name="lastName" value={form.lastName} onChange={handleChange}
                    className={inputClass} style={inputStyle} />
                </div>
              </div>

              {/* Email + Phone */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[15px] font-semibold mb-1.5" style={labelStyle}>
                    Email <span style={{ color: "#0066CC" }}>*</span>
                  </label>
                  <input name="email" type="email" value={form.email} onChange={handleChange}
                    required className={inputClass} style={inputStyle} />
                </div>
                <div>
                  <label className="block text-[15px] font-semibold mb-1.5" style={labelStyle}>Phone</label>
                  <input name="phone" type="tel" value={form.phone} onChange={handleChange}
                    className={inputClass} style={inputStyle} />
                </div>
              </div>

              {/* Position — custom dropdown matching Company nav style */}
              <div ref={dropdownRef} className="relative">
                <label className="block text-[13px] font-semibold mb-1.5" style={labelStyle}>Position</label>
                <button
                  type="button"
                  onClick={() => setPositionOpen(!positionOpen)}
                  className="w-full px-4 py-3 rounded-full text-[14px] flex items-center justify-between transition-all focus:outline-none focus:ring-2 focus:ring-[#0066CC]/30"
                  style={{
                    background: "#F1F5F9",
                    border: positionOpen ? "1.5px solid #0066CC" : "1.5px solid transparent",
                    color: form.position ? "#0F172A" : "#94A3B8",
                  }}
                >
                  <span>{form.position || ""}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform flex-shrink-0`} style={{ color: "#64748B", transform: positionOpen ? "rotate(180deg)" : "rotate(0deg)" }} />
                </button>

                {positionOpen && (
                  <div
                    className="absolute top-[calc(100%+8px)] left-0 right-0 z-50 p-2 rounded-xl"
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid #E2E8F0",
                      boxShadow: "0 25px 60px rgba(0,0,0,0.2)",
                    }}
                  >
                    {POSITIONS.map((pos) => (
                      <button
                        key={pos}
                        type="button"
                        onClick={() => { setForm({ ...form, position: pos }); setPositionOpen(false) }}
                        className="w-full text-left px-4 py-2.5 rounded-lg text-[14px] font-medium transition-all hover:bg-[#F1F5F9]"
                        style={{ color: form.position === pos ? "#0066CC" : "#0F172A" }}
                      >
                        {pos}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Start Date + CV Link */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[13px] font-semibold mb-1.5" style={labelStyle}>Start Date</label>
                  <input name="startDate" type="date" value={form.startDate} onChange={handleChange}
                    className={inputClass} style={inputStyle} />
                </div>
                <div>
                  <label className="block text-[13px] font-semibold mb-1.5" style={labelStyle}>Link to CV/LinkedIn</label>
                  <input name="cvLink" type="url" value={form.cvLink} onChange={handleChange}
                    className={inputClass} style={inputStyle} />
                </div>
              </div>

              {/* Upload Resume */}
              <div className="flex flex-col items-center gap-2 pt-2">
                <input ref={fileInputRef} type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="hidden" />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[14px] font-semibold transition-all hover:scale-105"
                  style={{ background: "#F1F5F9", color: "#0F172A", border: "1px solid #E2E8F0" }}
                >
                  {resumeFile ? resumeFile.name : "Upload Resume"} <Upload className="w-4 h-4" />
                </button>
                <span className="text-[14px]" style={{ color: "#94A3B8" }}>(File Size Max 15MB)</span>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-full text-[15px] font-bold tracking-widest transition-all hover:scale-[1.02] btn-shine disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ background: "#0F172A", color: "#FFFFFF" }}
                >
                  {loading ? 'SENDING…' : 'APPLY'}
                </button>
              </div>

            </form>
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
