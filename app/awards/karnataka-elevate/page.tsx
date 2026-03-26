"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FooterLinks } from "@/components/footer-links"
import { WhatsAppButton } from "@/components/whatsapp-button"
import Image from "next/image"
import Link from "next/link"
import { useRef, useState, useEffect } from "react"
import { ArrowRight, ExternalLink, Award, Users, Banknote, CheckCircle } from "lucide-react"

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

export default function KarnatakaElevatePage() {
  const hero = useInView()
  const mainPhotos = useInView()
  const recognition = useInView()
  const about = useInView()
  const gallery = useInView()
  const why = useInView()
  const linkedin = useInView()

  return (
    <main className="min-h-screen" style={{ background: "#FFFFFF" }}>
      <Navigation />

      {/* Hero */}
      <section
        className="pt-[100px] lg:pt-[120px] pb-10 px-5 lg:px-8 relative overflow-hidden"
        style={{ background: "#F8FAFC", borderBottom: "1px solid #E2E8F0" }}
      >
        {/* Logo — large centered background */}
        <div
          className="absolute inset-0 pointer-events-none flex items-center justify-center"
          style={{ opacity: 0.06 }}
        >
          <Image
            src="/images/karnataka_itbt_department_logo.png"
            alt=""
            width={500}
            height={737}
            className="object-contain w-[300px] lg:w-[450px] h-auto"
            aria-hidden="true"
          />
        </div>

        <div ref={hero.ref} className="max-w-[860px] mx-auto relative">
          <div className={`transition-all duration-600 ${hero.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            {/* Section label */}
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)" }} />
              <span className="text-[10px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#94A3B8" }}>Nov/Dec 2025 Winner — January 2026 Felicitation</span>
            </div>

            <h1 className="text-[26px] sm:text-[36px] lg:text-[48px] font-extrabold leading-tight tracking-tight mb-2" style={{ color: "#0F172A" }}>
              Liquidmind AI — Nov/Dec Elevate <span style={{ color: "#00A86B" }}>2025</span> Winner
            </h1>
            <p className="text-[14px] sm:text-[16px] font-semibold mb-5" style={{ color: "#00A86B" }}>
              Up to Rs. 50 Lakhs Non-Dilutive Grant
            </p>

            <p className="text-[13px] sm:text-[14px] leading-relaxed max-w-[700px] mb-6" style={{ color: "#475569" }}>
              One of only 103 startups selected from ~1,500+ applicants across Karnataka. Felicitated by Hon. IT/BT Minister, Government of Karnataka, Shri Priyank Kharge ji in January 2026.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1.5 rounded-lg text-[11px] font-semibold" style={{ background: "#ECFDF5", color: "#00A86B" }}>
                January 17, 2026
              </span>
              <span className="px-3 py-1.5 rounded-lg text-[11px] font-semibold" style={{ background: "#ECFDF5", color: "#00A86B" }}>
                Prof. U.R. Rao Bhavan, Bengaluru
              </span>
              <span className="px-3 py-1.5 rounded-lg text-[11px] font-semibold" style={{ background: "#ECFDF5", color: "#00A86B" }}>
                Govt. of Karnataka EITBT
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Photos — 2 main images */}
      <section className="py-8 lg:py-10 px-5 lg:px-8" style={{ background: "#FFFFFF" }}>
        <div ref={mainPhotos.ref} className="max-w-[1100px] mx-auto">
          <div className={`transition-all duration-700 ${mainPhotos.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* First image — same as homepage awards card, fully visible */}
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{ border: "1px solid #E2E8F0", boxShadow: "0 4px 20px rgba(0,168,107,0.08)", background: "#F8FAFC" }}
              >
                <Image
                  src="/images/elevate-felicitation.png"
                  alt="Liquidmind AI receiving the Karnataka Elevate 2025 felicitation"
                  width={900}
                  height={876}
                  className="w-full h-auto object-contain"
                />
              </div>
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{ border: "1px solid #E2E8F0", boxShadow: "0 4px 20px rgba(0,168,107,0.08)" }}
              >
                <Image
                  src="/images/elevate-2025-policy-stage.png"
                  alt="Liquidmind AI on the Elevate 2025 policy stage"
                  width={1600}
                  height={900}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition Highlight */}
      <section className="py-10 lg:py-14 px-5 lg:px-8" style={{ background: "#F8FAFC" }}>
        <div ref={recognition.ref} className="max-w-[860px] mx-auto">
          <div className={`transition-all duration-700 ${recognition.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 items-start">
              {/* Number display */}
              <div
                className="p-6 rounded-2xl text-center"
                style={{ background: "#FFFFFF", border: "1px solid #E2E8F0", boxShadow: "0 2px 12px rgba(0,0,0,0.05)", minWidth: "160px" }}
              >
                <p className="text-[14px] font-semibold mb-1" style={{ color: "#94A3B8" }}>#55</p>
                <p className="text-[36px] font-black leading-none mb-2" style={{ color: "#00A86B" }}>Liquidmind AI</p>
                <p className="text-[11px] font-semibold" style={{ color: "#64748B" }}>
                  Official Selection Number
                </p>
              </div>

              {/* Text */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)" }} />
                  <span className="text-[10px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#94A3B8" }}>Recognition</span>
                </div>
                <p className="text-[13px] sm:text-[14px] leading-relaxed" style={{ color: "#475569" }}>
                  Recognized by the Government of Karnataka's Department of Electronics, IT, BT and Science & Technology (EITBT) for innovation in AI and technology solutions.
                </p>

                <a
                  href="https://www.linkedin.com/posts/naveen-athresh-090b0a_elevate2025-startupkarnataka-liquidmind-activity-7418325908966551552-Zkpk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 rounded-xl text-[14px] font-semibold transition-all duration-200 hover:-translate-y-0.5"
                  style={{ background: "#ECFDF5", color: "#00A86B", border: "1px solid #00A86B20" }}
                >
                  View Official Winners List
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Program */}
      <section className="py-10 lg:py-14 px-5 lg:px-8" style={{ background: "#FFFFFF" }}>
        <div ref={about.ref} className="max-w-[860px] mx-auto">
          <div className={`transition-all duration-700 ${about.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)" }} />
              <span className="text-[10px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#94A3B8" }}>About the Program</span>
            </div>

            <h2 className="text-[22px] sm:text-[30px] lg:text-[40px] font-extrabold leading-tight mb-6" style={{ color: "#0F172A" }}>
              Karnataka Startup Elevate
            </h2>

            <p className="text-[13px] sm:text-[14px] leading-relaxed mb-6" style={{ color: "#475569" }}>
              Initiated by Hon'ble IT/BT Minister <strong style={{ color: "#0F172A" }}>Shri Priyank Kharge</strong> in 2017, Karnataka Elevate is one of the most competitive startup recognition programs in India.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div
                className="p-5 rounded-2xl text-center"
                style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-2" style={{ background: "#ECFDF5" }}>
                  <Users className="w-5 h-5" style={{ color: "#00A86B" }} />
                </div>
                <p className="text-[22px] font-extrabold" style={{ color: "#0F172A" }}>103</p>
                <p className="text-[11px] font-medium" style={{ color: "#94A3B8" }}>Startups selected across Karnataka</p>
              </div>
              <div
                className="p-5 rounded-2xl text-center"
                style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-2" style={{ background: "#ECFDF5" }}>
                  <Award className="w-5 h-5" style={{ color: "#00A86B" }} />
                </div>
                <p className="text-[22px] font-extrabold" style={{ color: "#0F172A" }}>4</p>
                <p className="text-[11px] font-medium" style={{ color: "#94A3B8" }}>Rigorous jury pitch rounds</p>
              </div>
              <div
                className="p-5 rounded-2xl text-center"
                style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-2" style={{ background: "#ECFDF5" }}>
                  <Banknote className="w-5 h-5" style={{ color: "#00A86B" }} />
                </div>
                <p className="text-[22px] font-extrabold" style={{ color: "#0F172A" }}>Rs. 50L</p>
                <p className="text-[11px] font-medium" style={{ color: "#94A3B8" }}>Non-dilutive grant (up to)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery — all remaining images */}
      <section className="py-10 lg:py-14 px-5 lg:px-8" style={{ background: "#F8FAFC" }}>
        <div ref={gallery.ref} className="max-w-[1100px] mx-auto">
          <div className={`transition-all duration-700 ${gallery.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)" }} />
              <span className="text-[10px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#94A3B8" }}>Gallery</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { src: "/images/elevate-2025-stage-panel.png", alt: "Elevate 2025 stage panel discussion", span: "col-span-2", h: "h-[200px] sm:h-[260px]", contain: false },
                { src: "/images/elevate-2025-winner-trophy.png", alt: "Elevate 2025 winner trophy", span: "", h: "h-[200px] sm:h-[260px]", contain: false },
                { src: "/images/elevate-2025-selection-funnel.png", alt: "Elevate 2025 selection funnel — from 1,500+ applicants to 103 winners", span: "col-span-2 sm:col-span-3", h: "", contain: true },
              ].map((img, i) => (
                <div
                  key={i}
                  className={`relative rounded-xl overflow-hidden transition-all duration-700 ${img.span} ${gallery.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                  style={{ border: "1px solid #E2E8F0", transitionDelay: `${i * 80}ms`, background: img.contain ? "#F8FAFC" : undefined }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={800}
                    height={600}
                    className={`w-full ${img.contain ? "h-auto object-contain" : `${img.h} object-cover`}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Liquidmind Was Selected */}
      <section className="py-10 lg:py-14 px-5 lg:px-8" style={{ background: "#FFFFFF" }}>
        <div ref={why.ref} className="max-w-[860px] mx-auto">
          <div className={`transition-all duration-700 ${why.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)" }} />
              <span className="text-[10px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#94A3B8" }}>Why We Were Selected</span>
            </div>

            <h2 className="text-[22px] sm:text-[30px] lg:text-[40px] font-extrabold leading-tight mb-6" style={{ color: "#0F172A" }}>
              Building AI-First for <span style={{ color: "#00A86B" }}>Real-World Impact</span>
            </h2>

            <div className="space-y-3 mb-6">
              {[
                "Building AI-first, Agentic workflows and platforms that solve complex, real-world problems with depth, rigour, and long-term thinking",
                "Creating from 0 to 1 in the Agentic AI space — not just wrappers, but full-stack intelligent systems",
                "Commitment to Systemic Integrity in AI workflows across international trade compliance",
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "#ECFDF5" }}>
                    <CheckCircle className="w-3 h-3" style={{ color: "#00A86B" }} />
                  </div>
                  <p className="text-[13px] sm:text-[14px] leading-relaxed" style={{ color: "#475569" }}>{point}</p>
                </div>
              ))}
            </div>

            {/* Returning winner callout */}
            <div
              className="p-5 rounded-2xl"
              style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", borderLeft: "4px solid #00A86B" }}
            >
              <p className="text-[13px] sm:text-[14px] leading-relaxed" style={{ color: "#475569" }}>
                <strong style={{ color: "#0F172A" }}>Returning winner:</strong> Founder Naveen Athresh previously won Karnataka Elevate 2019 for earlier ventures — making Liquidmind AI a repeat recognition under the program.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LinkedIn + CTA */}
      <section className="py-10 lg:py-14 px-5 lg:px-8" style={{ background: "#F8FAFC" }}>
        <div ref={linkedin.ref} className="max-w-[860px] mx-auto">
          <div className={`transition-all duration-700 ${linkedin.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)" }} />
              <span className="text-[10px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#94A3B8" }}>Read More</span>
            </div>

            <a
              href="https://www.linkedin.com/posts/naveen-athresh-090b0a_elevate2025-startupkarnataka-liquidmind-activity-7418325908966551552-Zkpk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 group mb-8"
              style={{ background: "#FFFFFF", border: "1px solid #E2E8F0" }}
            >
              <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "#ECFDF5" }}>
                <svg className="w-4 h-4" style={{ color: "#00A86B" }} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-bold" style={{ color: "#0F172A" }}>Naveen Athresh</p>
                <p className="text-[11px]" style={{ color: "#94A3B8" }}>Founder's post about the Elevate selection</p>
              </div>
              <ExternalLink className="w-3.5 h-3.5 flex-shrink-0 opacity-40 group-hover:opacity-100 transition-opacity" style={{ color: "#00A86B" }} />
            </a>

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
