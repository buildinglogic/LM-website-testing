"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FooterLinks } from "@/components/footer-links"
import { WhatsAppButton } from "@/components/whatsapp-button"
import Image from "next/image"
import Link from "next/link"
import { useRef, useState, useEffect } from "react"
import { ArrowRight, ExternalLink, Globe, Shield, Calculator, Quote, Star, Zap } from "lucide-react"

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
  const mainPhotos = useInView()
  const rating = useInView()
  const gallery = useInView()
  const recognized = useInView()
  const quote = useInView()
  const links = useInView()

  return (
    <main className="min-h-screen" style={{ background: "#FFFFFF" }}>
      <Navigation />

      {/* Hero — modern gradient bg with logo watermark */}
      <section
        className="pt-[100px] lg:pt-[120px] pb-10 px-5 lg:px-8 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 50%, #F8FAFC 100%)" }}
      >
        {/* Dot grid texture */}
        <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.3, backgroundImage: "radial-gradient(circle, #0066CC 0.5px, transparent 0.5px)", backgroundSize: "20px 20px" }} />

        {/* Award logo watermark */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center" style={{ opacity: 0.12 }}>
          <Image src="/images/Aegis_award_logo.jpg" alt="" width={600} height={424} className="object-contain w-[400px] lg:w-[600px] h-auto" aria-hidden="true" />
        </div>

        <div ref={hero.ref} className="max-w-[1000px] mx-auto relative">
          <div className={`transition-all duration-700 ${hero.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            {/* Glowing pill badge */}
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5 transition-all duration-700 delay-100 ${hero.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ background: "rgba(0,102,204,0.08)", border: "1px solid rgba(0,102,204,0.15)", backdropFilter: "blur(8px)" }}>
              <Zap className="w-3.5 h-3.5" style={{ color: "#0066CC" }} />
              <span className="text-[11px] font-bold tracking-wide uppercase" style={{ color: "#0066CC" }}>February 2026 — Gen AI Recognition</span>
            </div>

            <h1 className={`text-[28px] sm:text-[40px] lg:text-[52px] font-extrabold leading-[1.08] tracking-[-0.02em] mb-3 transition-all duration-700 delay-150 ${hero.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`} style={{ color: "#0F172A" }}>
              Aegis Graham Bell Award
              <br />
              <span className="bg-gradient-to-r from-[#0066CC] to-[#00A86B] bg-clip-text text-transparent">February 2026</span>
            </h1>

            {/* Highlight stat inline */}
            <div className={`flex items-center gap-4 mb-4 transition-all duration-700 delay-200 ${hero.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <div className="flex items-center gap-1">
                {[1, 2, 3].map(i => <Star key={i} className="w-5 h-5 fill-current" style={{ color: "#0066CC" }} />)}
                <Star className="w-5 h-5" style={{ color: "#0066CC", fillOpacity: 0.5, fill: "#0066CC" }} />
                <Star className="w-5 h-5" style={{ color: "#E2E8F0" }} />
              </div>
              <span className="text-[15px] font-bold" style={{ color: "#0066CC" }}>3.5/5 Innovation Rating</span>
            </div>

            <p className={`text-[14px] sm:text-[16px] leading-relaxed max-w-[680px] mb-6 transition-all duration-700 delay-300 ${hero.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`} style={{ color: "#475569" }}>
              Winner in Gen AI: CX, Sales & GTM Intelligence. Recognized by MeitY, Government of India. Felicitated by Minister of State Ms. Anupriya Patel at The Ashok Hotel, New Delhi.
            </p>

            {/* Modern badges with glassmorphism */}
            <div className={`flex flex-wrap items-center gap-2 transition-all duration-700 delay-[400ms] ${hero.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              {["February 27, 2026", "The Ashok Hotel, New Delhi", "Supported by MeitY"].map((badge, i) => (
                <span key={i} className="px-3.5 py-2 rounded-full text-[12px] font-semibold backdrop-blur-sm"
                  style={{ background: "rgba(255,255,255,0.7)", border: "1px solid rgba(0,102,204,0.15)", color: "#0066CC" }}>
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Photos */}
      <section className="py-8 lg:py-10 px-5 lg:px-8" style={{ background: "#FFFFFF" }}>
        <div ref={mainPhotos.ref} className="max-w-[1100px] mx-auto">
          <div className={`transition-all duration-700 ${mainPhotos.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-4">
              <div className="relative rounded-2xl overflow-hidden md:col-span-2 group" style={{ border: "1px solid #E2E8F0", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
                <Image src="/images/graham-bell-group-winners.jpg" alt="Aegis Graham Bell Award — group photo of all winners" width={1200} height={677} className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]" style={{ maxHeight: "360px" }} />
              </div>
              {[
                { src: "/images/graham-bell-award-ceremony.png", alt: "Liquidmind AI at the Aegis Graham Bell Award ceremony" },
                { src: "/images/graham-bell-award-certificate-framed.png", alt: "Aegis Graham Bell Award certificate" },
              ].map((img, i) => (
                <div key={i} className="relative rounded-2xl overflow-hidden group" style={{ border: "1px solid #E2E8F0", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
                  <Image src={img.src} alt={img.alt} width={800} height={600} className="w-full h-[240px] object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Rating — modern card with gradient accent */}
      <section className="py-10 lg:py-14 px-5 lg:px-8" style={{ background: "#F8FAFC" }}>
        <div ref={rating.ref} className="max-w-[900px] mx-auto">
          <div className={`transition-all duration-700 ${rating.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="rounded-2xl overflow-hidden" style={{ background: "#FFFFFF", border: "1px solid #E2E8F0", boxShadow: "0 8px 32px rgba(0,0,0,0.06)" }}>
              {/* Gradient top bar */}
              <div className="h-1" style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)" }} />
              <div className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  {/* Big rating number */}
                  <div className="flex-shrink-0 text-center">
                    <p className="text-[52px] font-black leading-none tracking-tight bg-gradient-to-br from-[#0066CC] to-[#00A86B] bg-clip-text text-transparent">3.5</p>
                    <p className="text-[13px] font-semibold mt-1" style={{ color: "#64748B" }}>out of 5.0</p>
                    <div className="flex items-center justify-center gap-0.5 mt-2">
                      {[1, 2, 3].map(i => <Star key={i} className="w-4 h-4 fill-current" style={{ color: "#0066CC" }} />)}
                      <Star className="w-4 h-4" style={{ color: "#0066CC", fillOpacity: 0.5, fill: "#0066CC" }} />
                      <Star className="w-4 h-4" style={{ color: "#E2E8F0" }} />
                    </div>
                  </div>

                  <div className="w-px h-16 hidden sm:block" style={{ background: "#E2E8F0" }} />

                  <div className="flex-1">
                    <h2 className="text-[20px] sm:text-[24px] font-extrabold leading-tight mb-2" style={{ color: "#0F172A" }}>
                      Winner: Gen AI — CX, Sales & GTM Intelligence
                    </h2>
                    <p className="text-[13px] sm:text-[14px] leading-relaxed mb-4" style={{ color: "#475569" }}>
                      The Graham Bell Awards recognize innovation and excellence in technology. This rating highlights Liquidmind AI's leadership in the Agentic AI space.
                    </p>
                    <a
                      href="https://www.linkedin.com/posts/liquid-mind-product-consulting-inc%2E_agba2026-aegisgrahambellawards-winner-activity-7434940047562375169-5N1e"
                      target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-[13px] font-bold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                      style={{ background: "linear-gradient(135deg, #0066CC, #00A86B)", color: "#FFFFFF" }}>
                      View Announcement <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery — hover zoom on images */}
      <section className="py-10 lg:py-14 px-5 lg:px-8" style={{ background: "#FFFFFF" }}>
        <div ref={gallery.ref} className="max-w-[1100px] mx-auto">
          <div className={`transition-all duration-700 ${gallery.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)" }} />
              <span className="text-[11px] font-bold tracking-[0.18em] uppercase" style={{ color: "#94A3B8" }}>Gallery</span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { src: "/images/graham-bell-bharat-ai-stage.png", alt: "Bharat AI stage", span: "md:col-span-2", h: "h-[200px] md:h-[280px]" },
                { src: "/images/graham-bell-trophy-closeup.png", alt: "Trophy closeup", span: "", h: "h-[200px] md:h-[280px]" },
                { src: "/images/graham-bell-presentation.png", alt: "Presentation", span: "", h: "h-[180px] md:h-[220px]" },
                { src: "/images/graham-bell-interaction.png", alt: "Networking", span: "", h: "h-[180px] md:h-[220px]" },
                { src: "/images/graham-bell-team.png", alt: "Team", span: "", h: "h-[180px] md:h-[220px]" },
                { src: "/images/graham-bell-booth.png", alt: "Booth", span: "", h: "h-[180px] md:h-[220px]" },
                { src: "/images/graham-bell-solo-booth.png", alt: "Solo booth display", span: "", h: "h-[180px] md:h-[220px]" },
                { src: "/images/graham-bell-booth-signage.png", alt: "Booth signage", span: "", h: "h-[180px] md:h-[220px]" },
              ].map((img, i) => (
                <div key={i}
                  className={`relative rounded-xl overflow-hidden group transition-all duration-700 ${img.span} ${gallery.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                  style={{ border: "1px solid #E2E8F0", transitionDelay: `${i * 60}ms` }}>
                  <Image src={img.src} alt={img.alt} width={800} height={600} className={`w-full ${img.h} object-cover transition-transform duration-500 group-hover:scale-105`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Showcased — modern horizontal cards */}
      <section className="py-10 lg:py-14 px-5 lg:px-8" style={{ background: "#F8FAFC" }}>
        <div ref={recognized.ref} className="max-w-[900px] mx-auto">
          <div className={`transition-all duration-700 ${recognized.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)" }} />
              <span className="text-[11px] font-bold tracking-[0.18em] uppercase" style={{ color: "#94A3B8" }}>Products Showcased</span>
            </div>

            <h2 className="text-[22px] sm:text-[30px] lg:text-[38px] font-extrabold leading-tight mb-2" style={{ color: "#0F172A" }}>
              Transforming Trade Through{" "}
              <span className="bg-gradient-to-r from-[#0066CC] to-[#00A86B] bg-clip-text text-transparent">Generative AI</span>
            </h2>
            <p className="text-[13px] sm:text-[14px] leading-relaxed mb-6" style={{ color: "#475569" }}>
              AI-native platform for trade compliance, document generation, and HS classification — serving 900,000+ EXIM traders.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              {[
                { name: "Patram AI", tagline: "Document Q&A", href: "/products/patram", Icon: Globe, color: "#00A86B" },
                { name: "TradeGuard", tagline: "Mismatch Detection", href: "/products/tradeguard", Icon: Shield, color: "#0066CC" },
                { name: "TariffIQ", tagline: "HSN Classification", href: "/products/tariffiq", Icon: Calculator, color: "#1B4F8A" },
              ].map((p) => (
                <Link key={p.name} href={p.href}
                  className="flex items-center gap-3 p-4 rounded-xl group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  style={{ background: "#FFFFFF", border: "1px solid #E2E8F0" }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110" style={{ background: `${p.color}12` }}>
                    <p.Icon className="w-5 h-5" style={{ color: p.color }} />
                  </div>
                  <div className="flex-1">
                    <p className="text-[14px] font-bold" style={{ color: "#0F172A" }}>{p.name}</p>
                    <p className="text-[12px]" style={{ color: "#94A3B8" }}>{p.tagline}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" style={{ color: p.color }} />
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-3 text-[13px]" style={{ color: "#64748B" }}>
              <span className="font-bold" style={{ color: "#0066CC" }}>Team:</span>
              Naveen Athresh, Rajesh Pentakota, Srivani Vijaya
              <span className="hidden sm:inline text-[11px] px-2 py-0.5 rounded-full" style={{ background: "#EFF6FF", color: "#0066CC" }}>NASSCOM CoE</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quote — modern gradient border card */}
      <section className="py-10 lg:py-14 px-5 lg:px-8" style={{ background: "#FFFFFF" }}>
        <div ref={quote.ref} className="max-w-[860px] mx-auto">
          <div className={`transition-all duration-700 ${quote.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="relative p-[2px] rounded-2xl" style={{ background: "linear-gradient(135deg, #0066CC, #00A86B)" }}>
              <div className="p-6 sm:p-8 rounded-[14px]" style={{ background: "#FFFFFF" }}>
                <Quote className="w-10 h-10 mb-4" style={{ color: "#0066CC", opacity: 0.15 }} />
                <blockquote className="text-[18px] sm:text-[22px] lg:text-[26px] font-bold leading-snug mb-5" style={{ color: "#0F172A" }}>
                  The future of Indian trade is intelligent, automated, and compliant. And Liquidmind AI is at the centre of it.
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full overflow-hidden" style={{ border: "2px solid #E2E8F0" }}>
                    <Image src="/images/founder-naveen.avif" alt="Naveen Athresh" width={44} height={44} className="object-cover" />
                  </div>
                  <div>
                    <p className="text-[14px] font-bold" style={{ color: "#0F172A" }}>Naveen Athresh</p>
                    <p className="text-[12px]" style={{ color: "#94A3B8" }}>Founder & CEO, Liquidmind AI</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LinkedIn + CTA */}
      <section className="py-10 lg:py-14 px-5 lg:px-8" style={{ background: "#F8FAFC" }}>
        <div ref={links.ref} className="max-w-[900px] mx-auto">
          <div className={`transition-all duration-700 ${links.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)" }} />
              <span className="text-[11px] font-bold tracking-[0.18em] uppercase" style={{ color: "#94A3B8" }}>Coverage</span>
            </div>

            <h2 className="text-[22px] sm:text-[28px] font-extrabold leading-tight mb-5" style={{ color: "#0F172A" }}>
              LinkedIn Coverage
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                { label: "Liquidmind Official", desc: "Award announcement", url: "https://www.linkedin.com/posts/liquid-mind-product-consulting-inc%2E_agba2026-aegisgrahambellawards-winner-activity-7434940047562375169-5N1e" },
                { label: "Naveen Athresh", desc: "Founder's perspective", url: "https://www.linkedin.com/posts/naveen-athresh-090b0a_liquidmindai-aegisgrahambellawards-genai-ugcPost-7433147628114300928-CHHs" },
                { label: "Liquidmind Official", desc: "Thank you post", url: "https://www.linkedin.com/posts/liquid-mind-product-consulting-inc%2E_agba2026-aegisgrahambellawards-winner-activity-7433546438003060736-NXqA" },
                { label: "Aegis Graham Bell Award", desc: "Official recognition", url: "https://www.linkedin.com/posts/aegis-graham-bell-award_agba2026-aegisgrahambellawards-winner-activity-7433130578398498816-2GcZ" },
              ].map((link, i) => (
                <a key={i} href={link.url} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group"
                  style={{ background: "#FFFFFF", border: "1px solid #E2E8F0" }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110" style={{ background: "#EFF6FF" }}>
                    <svg className="w-5 h-5" style={{ color: "#0066CC" }} viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[14px] font-bold" style={{ color: "#0F172A" }}>{link.label}</p>
                    <p className="text-[12px]" style={{ color: "#94A3B8" }}>{link.desc}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 flex-shrink-0 opacity-30 group-hover:opacity-100 transition-all duration-300" style={{ color: "#0066CC" }} />
                </a>
              ))}
            </div>

            <div className="text-center">
              <Link href="/book-demo"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-[15px] font-bold btn-shine transition-all duration-300 hover:scale-[1.03] overflow-hidden"
                style={{ background: "linear-gradient(135deg, #0066CC, #00A86B)", color: "#FFFFFF", boxShadow: "0 4px 25px rgba(0,102,204,0.3)" }}>
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
