"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FooterLinks } from "@/components/footer-links"
import { WhatsAppButton } from "@/components/whatsapp-button"
import Image from "next/image"
import Link from "next/link"
import { useRef, useState, useEffect } from "react"
import { ArrowRight, ExternalLink, Globe, Shield, Calculator, Quote } from "lucide-react"

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

export default function AegisGrahamBellPage() {
  const hero = useInView()
  const photos = useInView()
  const about = useInView()
  const recognized = useInView()
  const quote = useInView()
  const links = useInView()

  return (
    <main className="min-h-screen" style={{ background: "#FFFFFF" }}>
      <Navigation />

      {/* Hero */}
      <section
        className="pt-[100px] lg:pt-[120px] pb-10 px-5 lg:px-8 text-center"
        style={{ background: "#F8FAFC", borderBottom: "1px solid #E2E8F0" }}
      >
        <div ref={hero.ref} className="max-w-[860px] mx-auto">
          <div className={`transition-all duration-600 ${hero.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            {/* Section label */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)" }} />
              <span className="text-[10px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#94A3B8" }}>Award</span>
              <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(270deg, #0066CC, #00A86B)" }} />
            </div>

            {/* Logo */}
            <div className="w-16 h-16 mx-auto mb-4 rounded-xl overflow-hidden" style={{ border: "1px solid #E2E8F0" }}>
              <Image src="/images/Aegis_award_logo.jpg" alt="Aegis Graham Bell Award" width={64} height={64} className="object-cover" />
            </div>

            <h1 className="text-[26px] sm:text-[36px] lg:text-[48px] font-extrabold leading-tight tracking-tight mb-2" style={{ color: "#0F172A" }}>
              Aegis Graham Bell Award <span style={{ color: "#0066CC" }}>2026</span>
            </h1>
            <p className="text-[14px] sm:text-[16px] font-semibold mb-4" style={{ color: "#0066CC" }}>
              Innovation in Gen AI — CX, Sales & GTM Intelligence
            </p>

            {/* Badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-2">
              <span className="px-3 py-1.5 rounded-lg text-[11px] font-semibold" style={{ background: "#EFF6FF", color: "#0066CC" }}>
                February 27, 2026
              </span>
              <span className="px-3 py-1.5 rounded-lg text-[11px] font-semibold" style={{ background: "#EFF6FF", color: "#0066CC" }}>
                The Ashok Hotel, New Delhi
              </span>
            </div>
            <p className="text-[12px] font-medium" style={{ color: "#64748B" }}>
              Supported by MeitY, Government of India
            </p>
          </div>
        </div>
      </section>

      {/* Photos */}
      <section className="py-10 lg:py-14 px-5 lg:px-8" style={{ background: "#FFFFFF" }}>
        <div ref={photos.ref} className="max-w-[1100px] mx-auto">
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 transition-all duration-700 ${photos.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {[
              { src: "/images/aegis-award.jpg", alt: "Aegis Graham Bell Award Ceremony" },
              { src: "/images/aegis-graham-bell-award.jpg", alt: "Liquidmind AI team at Aegis Graham Bell Awards" },
            ].map((img, i) => (
              <div
                key={i}
                className="relative rounded-2xl overflow-hidden aspect-[16/10]"
                style={{ border: "1px solid #E2E8F0", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}
              >
                <Image src={img.src} alt={img.alt} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About the Award */}
      <section className="py-10 lg:py-14 px-5 lg:px-8" style={{ background: "#F8FAFC" }}>
        <div ref={about.ref} className="max-w-[860px] mx-auto">
          <div className={`transition-all duration-700 ${about.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)" }} />
              <span className="text-[10px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#94A3B8" }}>About the Award</span>
            </div>

            <h2 className="text-[22px] sm:text-[30px] lg:text-[40px] font-extrabold leading-tight mb-6" style={{ color: "#0F172A" }}>
              16th Aegis Graham Bell Awards
            </h2>

            <div className="space-y-4">
              <p className="text-[13px] sm:text-[14px] leading-relaxed" style={{ color: "#475569" }}>
                The Aegis Graham Bell Awards is one of India's most credible national innovation platforms, recognizing breakthrough innovations for over 15 years across AI, GenAI, Digital Transformation, Cybersecurity, Telecom, HealthTech, Fintech, and Agritech.
              </p>

              <div
                className="p-5 rounded-2xl"
                style={{ background: "#FFFFFF", border: "1px solid #E2E8F0", boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}
              >
                <p className="text-[12px] font-bold uppercase tracking-wide mb-2" style={{ color: "#0066CC" }}>Ceremony</p>
                <p className="text-[13px] sm:text-[14px] leading-relaxed" style={{ color: "#475569" }}>
                  Inaugurated by Hon'ble Minister <strong style={{ color: "#0F172A" }}>Smt. Anupriya Patel</strong>, Minister of State for Health & Family Welfare and Chemicals & Fertilizers, Government of India.
                </p>
              </div>

              <div
                className="p-5 rounded-2xl"
                style={{ background: "#FFFFFF", border: "1px solid #E2E8F0", boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}
              >
                <p className="text-[12px] font-bold uppercase tracking-wide mb-2" style={{ color: "#0066CC" }}>Supported By</p>
                <p className="text-[13px] sm:text-[14px] leading-relaxed" style={{ color: "#475569" }}>
                  <strong style={{ color: "#0F172A" }}>Ministry of Electronics & Information Technology (MeitY)</strong>, Government of India — with <strong style={{ color: "#0F172A" }}>Swissnex</strong> as the country partner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Liquidmind Was Recognized For */}
      <section className="py-10 lg:py-14 px-5 lg:px-8" style={{ background: "#FFFFFF" }}>
        <div ref={recognized.ref} className="max-w-[860px] mx-auto">
          <div className={`transition-all duration-700 ${recognized.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)" }} />
              <span className="text-[10px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#94A3B8" }}>Recognition</span>
            </div>

            <h2 className="text-[22px] sm:text-[30px] lg:text-[40px] font-extrabold leading-tight mb-3" style={{ color: "#0F172A" }}>
              Transforming International Trade Through <span style={{ color: "#0066CC" }}>Generative AI</span>
            </h2>
            <p className="text-[13px] sm:text-[14px] leading-relaxed mb-6" style={{ color: "#475569" }}>
              Liquidmind AI builds an AI-native platform that makes trade compliance, document generation, and HS classification effortless — serving India's 900,000+ EXIM traders.
            </p>

            {/* Products showcased */}
            <p className="text-[12px] font-bold uppercase tracking-wide mb-3" style={{ color: "#0066CC" }}>Products Showcased</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              {[
                { name: "Patram AI", tagline: "Document Q&A", href: "/products/patram", Icon: Globe, color: "#00A86B" },
                { name: "TradeGuard", tagline: "Mismatch Detection", href: "/products/tradeguard", Icon: Shield, color: "#0066CC" },
                { name: "TariffIQ", tagline: "HSN Classification", href: "/products/tariffiq", Icon: Calculator, color: "#1B4F8A" },
              ].map((p) => (
                <Link
                  key={p.name}
                  href={p.href}
                  className="flex items-center gap-3 p-4 rounded-xl group transition-all duration-200 hover:-translate-y-0.5"
                  style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}
                >
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: `${p.color}12` }}>
                    <p.Icon className="w-4 h-4" style={{ color: p.color }} />
                  </div>
                  <div>
                    <p className="text-[13px] font-bold" style={{ color: "#0F172A" }}>{p.name}</p>
                    <p className="text-[11px]" style={{ color: "#94A3B8" }}>{p.tagline}</p>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: p.color }} />
                </Link>
              ))}
            </div>

            {/* Team */}
            <p className="text-[12px] font-bold uppercase tracking-wide mb-2" style={{ color: "#0066CC" }}>Team</p>
            <p className="text-[13px] sm:text-[14px]" style={{ color: "#475569" }}>
              Naveen Athresh, Rajesh Pentakota, Srivani Vijaya
            </p>
            <p className="text-[12px] mt-1" style={{ color: "#94A3B8" }}>
              Part of the NASSCOM Centre of Excellence ecosystem
            </p>
          </div>
        </div>
      </section>

      {/* Founder Quote */}
      <section className="py-10 lg:py-14 px-5 lg:px-8" style={{ background: "#F8FAFC" }}>
        <div ref={quote.ref} className="max-w-[860px] mx-auto">
          <div className={`transition-all duration-700 ${quote.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div
              className="p-6 sm:p-8 rounded-2xl relative"
              style={{ background: "#FFFFFF", border: "1px solid #E2E8F0", borderLeft: "4px solid #0066CC", boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}
            >
              <Quote className="w-8 h-8 mb-3 opacity-20" style={{ color: "#0066CC" }} />
              <blockquote className="text-[16px] sm:text-[20px] lg:text-[24px] font-semibold leading-snug mb-4" style={{ color: "#0F172A" }}>
                The future of Indian trade is intelligent, automated, and compliant. And Liquidmind AI is at the centre of it.
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden" style={{ border: "2px solid #E2E8F0" }}>
                  <Image src="/images/founder-naveen.avif" alt="Naveen Athresh" width={40} height={40} className="object-cover" />
                </div>
                <div>
                  <p className="text-[13px] font-bold" style={{ color: "#0F172A" }}>Naveen Athresh</p>
                  <p className="text-[11px]" style={{ color: "#94A3B8" }}>Founder & CEO, Liquidmind AI</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LinkedIn Posts */}
      <section className="py-10 lg:py-14 px-5 lg:px-8" style={{ background: "#FFFFFF" }}>
        <div ref={links.ref} className="max-w-[860px] mx-auto">
          <div className={`transition-all duration-700 ${links.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)" }} />
              <span className="text-[10px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#94A3B8" }}>Read More</span>
            </div>

            <h2 className="text-[22px] sm:text-[30px] font-extrabold leading-tight mb-5" style={{ color: "#0F172A" }}>
              Coverage on LinkedIn
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                { label: "Liquidmind Official", desc: "Award announcement", url: "https://www.linkedin.com/posts/liquid-mind-product-consulting-inc%2E_agba2026-aegisgrahambellawards-winner-activity-7434940047562375169-5N1e" },
                { label: "Naveen Athresh", desc: "Founder's perspective", url: "https://www.linkedin.com/posts/naveen-athresh-090b0a_liquidmindai-aegisgrahambellawards-genai-ugcPost-7433147628114300928-CHHs" },
                { label: "Liquidmind Official", desc: "Thank you post", url: "https://www.linkedin.com/posts/liquid-mind-product-consulting-inc%2E_agba2026-aegisgrahambellawards-winner-activity-7433546438003060736-NXqA" },
                { label: "Aegis Graham Bell Award", desc: "Official recognition", url: "https://www.linkedin.com/posts/aegis-graham-bell-award_agba2026-aegisgrahambellawards-winner-activity-7433130578398498816-2GcZ" },
              ].map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 group"
                  style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}
                >
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "#EFF6FF" }}>
                    <svg className="w-4 h-4" style={{ color: "#0066CC" }} viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[13px] font-bold" style={{ color: "#0F172A" }}>{link.label}</p>
                    <p className="text-[11px]" style={{ color: "#94A3B8" }}>{link.desc}</p>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 flex-shrink-0 opacity-40 group-hover:opacity-100 transition-opacity" style={{ color: "#0066CC" }} />
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link
                href="/book-demo"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-[15px] font-bold btn-shine transition-all duration-300 hover:scale-[1.03] overflow-hidden"
                style={{ background: "linear-gradient(135deg, #0066CC, #00A86B)", color: "#FFFFFF", boxShadow: "0 4px 25px rgba(0,102,204,0.3)" }}
              >
                Book a Demo
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FooterLinks />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
