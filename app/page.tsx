"use client"

import { Navigation } from "@/components/navigation"
import { HeroMockup } from "@/components/hero-mockup"
import { ProductsSection } from "@/components/products-section"
import { ROICalculator } from "@/components/roi-calculator"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { FooterLinks } from "@/components/footer-links"
import { WhatsAppButton } from "@/components/whatsapp-button"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function LiquidmindLanding() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <ProductsSection />
      <HowItWorks />
      <ROICalculator />
      <AwardsSection />
      <MicroConversionSection />
      <FAQSection />
      <CTASection />
      <FooterLinks />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsInView(true) },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, isInView }
}

/* ========================
   HERO SECTION
======================== */
function HeroSection() {
  const statPills = [
    "50% mismatch rate globally",
    "30% docs have critical errors",
    "3-7% FOB at risk per shipment",
  ]

  return (
    <section className="min-h-screen pt-[120px] pb-6 px-4 lg:px-6 flex items-center" style={{ background: "#FFFFFF" }}>
      <div className="w-full max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold tracking-[0.12em] uppercase mb-3 animate-fade-in-up"
              style={{ background: "rgba(0,102,204,0.1)", border: "1px solid rgba(0,102,204,0.25)", color: "#0066CC" }}>
              {"INDIA'S #1 AI TRADE COMPLIANCE PLATFORM"}
            </div>

            <h1 className="text-[30px] lg:text-[52px] font-extrabold leading-[1.1] tracking-[-0.03em] mb-3 animate-fade-in-up stagger-1" style={{ color: "#0F172A" }}>
              Stop Losing<br />
              <span className="bg-gradient-to-r from-[#0066CC] to-[#00A86B] bg-clip-text text-transparent">Crores</span> to Trade<br />
              Document Errors.
            </h1>

            <p className="text-[14px] lg:text-[16px] leading-[1.6] max-w-[460px] mb-3 animate-fade-in-up stagger-2" style={{ color: "#475569" }}>
              Indian exporters lose 3-7% of FOB value every month to document mismatches. 
              Liquidmind AI catches every error before customs does.
            </p>

            <div className="flex flex-wrap gap-2 mb-4 animate-fade-in-up stagger-3">
              {statPills.map((stat, idx) => (
                <span key={idx} className="px-3 py-1 rounded-full text-[11px] font-medium"
                  style={{ background: "rgba(220,38,38,0.08)", border: "1px solid rgba(220,38,38,0.2)", color: "#DC2626" }}>
                  {stat}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 animate-fade-in-up stagger-4">
              <Link href="/book-demo" className="px-5 py-2.5 rounded-lg text-sm font-bold btn-shine transition-all hover:scale-105"
                style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)", color: "#FFFFFF", boxShadow: "0 4px 25px rgba(0,102,204,0.35)" }}>
                Book Free Demo
              </Link>
              <button className="px-5 py-2.5 rounded-lg text-sm font-semibold transition-all hover:border-[#0066CC] hover:text-[#0066CC]"
                style={{ background: "transparent", border: "1.5px solid #CBD5E1", color: "#0F172A" }}>
                Watch Demo
              </button>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <HeroMockup animated={true} />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ========================
   PROBLEM SECTION
======================== */
function ProblemSection() {
  const { ref, isInView } = useInView()
  const containerRef = useRef<HTMLDivElement>(null)
  
  const problems = [
    { number: "50%", title: "Mismatches in Trade Data", body: "Every second export-import document has errors that trigger customs delays or blocked IGST refunds.", citation: "— ADB Report" },
    { number: "30%", title: "Documents Contain Critical Errors", body: "One digit wrong in an HSN code. One wrong port abbreviation. Your drawback claim is rejected.", citation: "— World Bank", featured: true },
    { number: "3-7%", title: "Of FOB Value Lost Per Shipment", body: "Drawback, IGST refunds, RODTEP scrips. The money is owed to you. It doesn't come back.", citation: "— CBIC Analysis" },
  ]

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const cards = container.querySelectorAll('.card-spotlight')
      cards.forEach((card) => {
        const rect = (card as HTMLElement).getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width) * 100
        const y = ((e.clientY - rect.top) / rect.height) * 100
        ;(card as HTMLElement).style.setProperty('--mouse-x', `${x}%`)
        ;(card as HTMLElement).style.setProperty('--mouse-y', `${y}%`)
      })
    }

    container.addEventListener('mousemove', handleMouseMove)
    return () => container.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section ref={ref} className="py-10 px-4 lg:px-6" style={{ background: "#FFFFFF" }}>
      <div className="w-full max-w-[1400px] mx-auto">
        <div className={`text-center mb-6 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold tracking-[0.12em] uppercase mb-2"
            style={{ background: "rgba(220,38,38,0.08)", border: "1px solid rgba(220,38,38,0.2)", color: "#DC2626" }}>
            THE COST OF DOING NOTHING
          </div>
          <h2 className="text-[26px] lg:text-[40px] font-bold leading-tight" style={{ color: "#0F172A" }}>
            Your Trade Documents Are <span className="text-[#DC2626]">Bleeding Money</span> Right Now.
          </h2>
        </div>

        <div ref={containerRef} className="grid lg:grid-cols-3 gap-4 mb-5">
          {problems.map((problem, idx) => (
            <div key={idx}
              className={`card-spotlight rounded-2xl p-5 transition-all duration-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{
                background: problem.featured ? "#0F172A" : "#FFFFFF",
                border: problem.featured ? "2px solid #0066CC" : "2px solid #E2E8F0",
                boxShadow: problem.featured ? "0 20px 60px rgba(0,102,204,0.2)" : "0 4px 20px rgba(0,0,0,0.05)",
                transitionDelay: `${idx * 100}ms`,
              }}
            >
              <div className="font-mono font-bold mb-2"
                style={{ fontSize: "44px", lineHeight: 1, color: problem.featured ? "#FFFFFF" : "#0F172A" }}>
                {problem.number}
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: problem.featured ? "#FFFFFF" : "#0F172A" }}>{problem.title}</h3>
              <p className="text-[13px] leading-relaxed mb-2" style={{ color: problem.featured ? "rgba(255,255,255,0.8)" : "#475569" }}>{problem.body}</p>
              <p className="text-[11px] italic" style={{ color: problem.featured ? "rgba(255,255,255,0.5)" : "#94A3B8" }}>{problem.citation}</p>
            </div>
          ))}
        </div>

        <div className={`text-center transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a href="#products" className="inline-block px-5 py-2.5 rounded-lg text-sm font-bold btn-shine transition-all hover:scale-105"
            style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)", color: "#FFFFFF" }}>
            See How Liquidmind Solves This
          </a>
        </div>
      </div>
    </section>
  )
}

/* ========================
   HOW IT WORKS
======================== */
function HowItWorks() {
  const { ref, isInView } = useInView()
  const steps = [
    { number: 1, title: "Upload", description: "Drag & drop PDFs" },
    { number: 2, title: "Extract", description: "AI reads key fields" },
    { number: 3, title: "Map", description: "Smart field matching" },
    { number: 4, title: "Verify", description: "Cross-check sources" },
    { number: 5, title: "Report", description: "Get results fast" },
  ]

  return (
    <section ref={ref} className="py-10 px-4 lg:px-6" style={{ background: "#F8FAFC" }}>
      <div className="w-full max-w-[1400px] mx-auto">
        <div className={`text-center mb-5 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold tracking-[0.12em] uppercase mb-2"
            style={{ background: "rgba(0,102,204,0.1)", border: "1px solid rgba(0,102,204,0.25)", color: "#0066CC" }}>
            THE PROCESS
          </div>
          <h2 className="text-[26px] lg:text-[40px] font-bold leading-tight" style={{ color: "#0F172A" }}>
            Upload to Report <span className="text-[#0066CC]">Quickly</span>
          </h2>
        </div>

        <div className="relative mb-5">
          <div className="hidden lg:block absolute top-5 left-[10%] right-[10%] h-0.5" style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)", opacity: 0.3 }} />
          <div className="grid grid-cols-5 gap-2 lg:gap-4 relative z-10">
            {steps.map((step, idx) => (
              <div key={step.number} className={`text-center transition-all duration-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${idx * 100}ms` }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 transition-all hover:scale-110"
                  style={{ background: "linear-gradient(135deg, #0066CC, #00A86B)" }}>
                  <span className="text-white font-mono text-sm font-bold">{step.number}</span>
                </div>
                <h3 className="font-bold text-xs lg:text-sm mb-1" style={{ color: "#0F172A" }}>{step.title}</h3>
                <p className="text-[10px] lg:text-xs" style={{ color: "#64748B" }}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-4">
          <div className={`p-5 rounded-xl card-hover ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
            style={{ background: "#FFFFFF", border: "2px solid #0066CC", transition: "all 0.5s ease" }}>
            <div className="text-2xl font-bold mb-2 bg-gradient-to-r from-[#0066CC] to-[#00A86B] bg-clip-text text-transparent">99.9% Accuracy</div>
            <p className="text-sm" style={{ color: "#475569" }}>Multi-layer verification means every answer is cross-checked against the source pixel.</p>
          </div>
          <div className={`p-5 rounded-xl card-hover ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
            style={{ background: "#FFFFFF", border: "2px solid #00A86B", transition: "all 0.5s ease", transitionDelay: "100ms" }}>
            <div className="text-2xl font-bold mb-2 bg-gradient-to-r from-[#00A86B] to-[#0066CC] bg-clip-text text-transparent">Fast Processing</div>
            <p className="text-sm" style={{ color: "#475569" }}>From document upload to full mismatch report. Not hours. Not days.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ========================
   AWARDS SECTION
======================== */
function AwardsSection() {
  const { ref, isInView } = useInView()
  
  const awards = [
    {
      date: "FEBRUARY 2026",
      title: "Aegis Graham Bell Award",
      subtitle: "16th AGBA Innovation in Gen AI - CX, Sales & GTM Intelligence Category Winner",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Aegis%20graham%20bell%20award-Io0nVjDGHyxbMH3GUnh9D2M8PtIHjM.jpg",
    },
    {
      date: "NOVEMBER 2025",
      title: "Karnataka Elevate 2025",
      subtitle: "Selected from 1,474+ applicants across all sectors",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/karnataka%20elevate%20award-6VQmT2ahCZSsynysJCRN0mwxbYjAZp.jpg",
    },
  ]

  return (
    <section ref={ref} className="py-10 px-4 lg:px-6" style={{ background: "#FFFFFF" }}>
      <div className="w-full max-w-[1400px] mx-auto">
        <h2 className={`text-[26px] lg:text-[40px] font-bold text-center mb-6 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ color: "#0F172A" }}>
          Recognised. <span className="gold-text-shine">Validated.</span> Trusted.
        </h2>

        <div className="grid lg:grid-cols-2 gap-5 mb-8">
          {awards.map((award, idx) => (
            <div key={idx}
              className={`rounded-2xl overflow-hidden group transition-all duration-500 hover:scale-[1.02] ${isInView ? 'opacity-100 translate-y-0 animate-float-subtle' : 'opacity-0 translate-y-8'}`}
              style={{ 
                background: "#0F172A", 
                border: "3px solid transparent",
                backgroundImage: "linear-gradient(#0F172A, #0F172A), linear-gradient(135deg, #FFD700, #FFA500, #FFD700)",
                backgroundOrigin: "border-box",
                backgroundClip: "padding-box, border-box",
                boxShadow: "0 0 40px rgba(255,215,0,0.15), 0 20px 60px rgba(0,0,0,0.3)",
                transitionDelay: `${idx * 150}ms`,
              }}>
              <div className="relative h-[280px] lg:h-[340px] overflow-hidden">
                <Image src={award.image} alt={award.title} fill className="object-cover object-center group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/30 to-transparent" />
                <div className="absolute top-3 right-3">
                  <div className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase animate-shimmer"
                    style={{ background: "linear-gradient(90deg, #FFD700, #FFA500, #FFD700)", backgroundSize: "200% 100%", color: "#0F172A" }}>
                    {award.date}
                  </div>
                </div>
              </div>
              <div className="p-5 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FFD700]/5 to-transparent animate-shimmer" style={{ backgroundSize: "200% 100%" }} />
                <h3 className="text-xl font-bold mb-2 gold-text-shine">{award.title}</h3>
                <p className="text-[14px] font-medium" style={{ color: "rgba(255,215,0,0.9)" }}>{award.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Backed By - Static Partner Logos */}
      <div className={`w-full py-10 transition-all duration-700 delay-300 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ background: "#F8FAFC" }}>
        <div className="max-w-[900px] mx-auto text-center">
          <p className="text-base font-medium mb-6 tracking-wide" style={{ color: "#64748B" }}>Backed by leading technology partners</p>
          <div className="flex justify-center items-center">
            <Image 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Gqt7incm1St02ycvVbXNCKm4NzQz1I.png" 
              alt="Partner Logos - NVIDIA Inception, AWS, Microsoft for Startups" 
              width={800} 
              height={100} 
              className="h-20 lg:h-24 w-auto object-contain" 
            />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ========================
   MICRO CONVERSION SECTION
======================== */
function MicroConversionSection() {
  const { ref, isInView } = useInView()
  
  const cards = [
    { badge: "FREE", title: "Watch Tradeguard in Action", body: "A real document audit, live on screen. No slides. No fluff.", cta: "Watch Now" },
    { badge: "FREE", title: "Calculate Your Annual Exposure", body: "Enter your shipment volume. Get your personal rupee risk number.", cta: "Use Calculator" },
    { badge: "FREE RESOURCE", title: "Trade Compliance Guide", body: "Everything about avoiding document mismatches and maximizing refunds.", cta: "Download" },
    { badge: "30 MINUTES", title: "Talk to a Specialist", body: "We'll calculate your exact exposure on your real documents.", cta: "Book a Call", featured: true },
  ]

  return (
    <section ref={ref} className="py-10 px-4 lg:px-6" style={{ background: "#F8FAFC" }}>
      <div className="w-full max-w-[1400px] mx-auto">
        <div className={`text-center mb-5 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold tracking-[0.12em] uppercase mb-2"
            style={{ background: "rgba(0,102,204,0.1)", border: "1px solid rgba(0,102,204,0.25)", color: "#0066CC" }}>
            START WHERE YOU ARE
          </div>
          <h2 className="text-[26px] lg:text-[40px] font-bold leading-tight" style={{ color: "#0F172A" }}>
            Not Ready for a Demo? <span className="text-[#0066CC]">Start Here.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
          {cards.map((card, idx) => (
            <div key={idx}
              className={`p-4 rounded-xl card-hover relative overflow-hidden ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{
                background: card.featured ? "linear-gradient(135deg, #0066CC 0%, #0052A3 100%)" : "#FFFFFF",
                border: card.featured ? "none" : "1px solid #E2E8F0",
                transitionDelay: `${idx * 100}ms`, transition: "all 0.5s ease"
              }}>
              <div className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold tracking-[0.1em] uppercase mb-2"
                style={{ background: card.featured ? "rgba(255,255,255,0.2)" : "rgba(0,102,204,0.1)", color: card.featured ? "#FFFFFF" : "#0066CC" }}>
                {card.badge}
              </div>
              <h3 className="text-sm font-bold mb-1" style={{ color: card.featured ? "#FFFFFF" : "#0F172A" }}>{card.title}</h3>
              <p className="text-[12px] leading-relaxed mb-3" style={{ color: card.featured ? "rgba(255,255,255,0.8)" : "#475569" }}>{card.body}</p>
              {card.featured ? (
                <Link href="/book-demo" className="inline-block px-3 py-1.5 rounded-lg text-sm font-bold" style={{ background: "#FFFFFF", color: "#0066CC" }}>{card.cta}</Link>
              ) : (
                <a href="#" className="text-sm font-semibold hover:underline" style={{ color: "#0066CC" }}>{card.cta} →</a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
