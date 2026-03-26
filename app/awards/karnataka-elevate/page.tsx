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

      {/* Hero — modern gradient bg with logo watermark */}
      <section
        className="pt-[100px] lg:pt-[120px] pb-10 px-5 lg:px-8 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #F8FAFC 0%, #ECFDF5 50%, #F8FAFC 100%)" }}
      >
        {/* Dot grid texture */}
        <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.25, backgroundImage: "radial-gradient(circle, #00A86B 0.5px, transparent 0.5px)", backgroundSize: "20px 20px" }} />

        {/* Logo watermark */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center" style={{ opacity: 0.12 }}>
          <Image src="/images/karnataka_itbt_department_logo.png" alt="" width={500} height={737} className="object-contain w-[300px] lg:w-[450px] h-auto" aria-hidden="true" />
        </div>

        <div ref={hero.ref} className="max-w-[1000px] mx-auto relative">
          <div className={`transition-all duration-700 ${hero.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            {/* Section label */}
            <div className={`flex items-center gap-3 mb-4 transition-all duration-700 delay-100 ${hero.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(90deg, #00A86B, #0066CC)" }} />
              <span className="text-[11px] font-bold tracking-[0.18em] uppercase" style={{ color: "#94A3B8" }}>Startup Recognition</span>
            </div>

            <h1 className={`text-[28px] sm:text-[40px] lg:text-[52px] font-extrabold leading-[1.08] tracking-[-0.02em] mb-3 transition-all duration-700 delay-150 ${hero.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`} style={{ color: "#0F172A" }}>
              Karnataka Elevate
              <br />
              <span className="bg-gradient-to-r from-[#00A86B] to-[#0066CC] bg-clip-text text-transparent">2025 Winner</span>
            </h1>

            {/* Grant stat */}
            <div className={`flex items-center gap-4 mb-4 transition-all duration-700 delay-200 ${hero.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <span className="text-[28px] sm:text-[32px] font-black" style={{ color: "#00A86B" }}>Rs. 50L</span>
              <span className="text-[14px] font-semibold" style={{ color: "#64748B" }}>Non-Dilutive Grant (up to)</span>
            </div>

            <p className={`text-[14px] sm:text-[16px] leading-relaxed max-w-[680px] mb-6 transition-all duration-700 delay-300 ${hero.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`} style={{ color: "#475569" }}>
              One of only 103 startups selected from 1,500+ applicants across Karnataka. Felicitated by Hon. IT/BT Minister Shri Priyank Kharge at Prof. U.R. Rao Bhavan, Bengaluru.
            </p>

            {/* Event details — compact horizontal strip */}
            <div className={`flex items-center flex-wrap gap-x-5 gap-y-2 text-[13px] transition-all duration-700 delay-[400ms] ${hero.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#00A86B" }} />
                <span className="font-semibold" style={{ color: "#0F172A" }}>Jan 17, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#00A86B" }} />
                <span className="font-semibold" style={{ color: "#0F172A" }}>Prof. U.R. Rao Bhavan, Bengaluru</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#00A86B" }} />
                <span className="font-semibold" style={{ color: "#0F172A" }}>Govt. of Karnataka EITBT</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Photos */}
      <section className="py-8 lg:py-10 px-5 lg:px-8" style={{ background: "#FFFFFF" }}>
        <div ref={mainPhotos.ref} className="max-w-[1100px] mx-auto">
          <div className={`transition-all duration-700 ${mainPhotos.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Left: felicitation image + text card */}
              <div className="flex flex-col gap-4">
                <div className="relative rounded-2xl overflow-hidden group" style={{ border: "1px solid #E2E8F0", boxShadow: "0 4px 20px rgba(0,168,107,0.08)", background: "#F8FAFC" }}>
                  <Image src="/images/elevate-felicitation.png" alt="Liquidmind AI receiving the Karnataka Elevate 2025 felicitation" width={900} height={876} className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]" />
                </div>
                <div className="p-4 rounded-2xl" style={{ background: "linear-gradient(135deg, #ECFDF5, #F0FDF4)", border: "1px solid #00A86B20" }}>
                  <p className="text-[14px] font-bold mb-1" style={{ color: "#00A86B" }}>Winner #55 of 103</p>
                  <p className="text-[13px] leading-relaxed" style={{ color: "#475569" }}>
                    Selected from 1,500+ applicants across Karnataka. Felicitated by Hon. IT/BT Minister Shri Priyank Kharge.
                  </p>
                </div>
              </div>
              {/* Right: policy stage + stage panel stacked */}
              <div className="flex flex-col gap-4">
                <div className="relative rounded-2xl overflow-hidden group flex-1" style={{ border: "1px solid #E2E8F0", boxShadow: "0 4px 20px rgba(0,168,107,0.08)" }}>
                  <Image src="/images/elevate-2025-policy-stage.png" alt="Liquidmind AI on the Elevate 2025 policy stage" width={1600} height={900} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
                </div>
                <div className="relative rounded-2xl overflow-hidden group flex-1" style={{ border: "1px solid #E2E8F0", boxShadow: "0 4px 20px rgba(0,168,107,0.08)" }}>
                  <Image src="/images/elevate-2025-stage-panel.png" alt="Elevate 2025 stage panel discussion" width={1600} height={900} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition — modern card */}
      <section className="py-10 lg:py-14 px-5 lg:px-8" style={{ background: "#F8FAFC" }}>
        <div ref={recognition.ref} className="max-w-[900px] mx-auto">
          <div className={`transition-all duration-700 ${recognition.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="rounded-2xl overflow-hidden" style={{ background: "#FFFFFF", border: "1px solid #E2E8F0", boxShadow: "0 8px 32px rgba(0,0,0,0.06)" }}>
              <div className="h-1" style={{ background: "linear-gradient(90deg, #00A86B, #0066CC)" }} />
              <div className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  <div className="flex-shrink-0 text-center">
                    <p className="text-[16px] font-bold mb-1" style={{ color: "#94A3B8" }}>#55</p>
                    <p className="text-[36px] font-black leading-none bg-gradient-to-br from-[#00A86B] to-[#0066CC] bg-clip-text text-transparent">Liquidmind</p>
                    <p className="text-[12px] font-semibold mt-1" style={{ color: "#64748B" }}>Official Selection</p>
                  </div>
                  <div className="w-px h-16 hidden sm:block" style={{ background: "#E2E8F0" }} />
                  <div className="flex-1">
                    <p className="text-[14px] sm:text-[15px] leading-relaxed mb-4" style={{ color: "#475569" }}>
                      Recognized by the Government of Karnataka's Department of Electronics, IT, BT and Science & Technology (EITBT) for innovation in AI and technology solutions.
                    </p>
                    <a href="https://www.linkedin.com/posts/naveen-athresh-090b0a_elevate2025-startupkarnataka-liquidmind-activity-7418325908966551552-Zkpk"
                      target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-[13px] font-bold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                      style={{ background: "linear-gradient(135deg, #00A86B, #0066CC)", color: "#FFFFFF" }}>
                      View Winners List <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About — stats with gradient numbers */}
      <section className="py-10 lg:py-14 px-5 lg:px-8" style={{ background: "#FFFFFF" }}>
        <div ref={about.ref} className="max-w-[900px] mx-auto">
          <div className={`transition-all duration-700 ${about.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)" }} />
              <span className="text-[11px] font-bold tracking-[0.18em] uppercase" style={{ color: "#94A3B8" }}>About the Program</span>
            </div>

            <h2 className="text-[22px] sm:text-[30px] lg:text-[38px] font-extrabold leading-tight mb-2" style={{ color: "#0F172A" }}>
              Karnataka Startup Elevate
            </h2>
            <p className="text-[14px] sm:text-[15px] leading-relaxed mb-6" style={{ color: "#475569" }}>
              Initiated by Hon'ble IT/BT Minister <strong style={{ color: "#0F172A" }}>Shri Priyank Kharge</strong> in 2017, Karnataka Elevate is one of the most competitive startup recognition programs in India.
            </p>

            <div className="grid grid-cols-3 gap-3">
              {[
                { Icon: Users, value: "103", label: "Startups selected", color: "#00A86B" },
                { Icon: Award, value: "4", label: "Jury pitch rounds", color: "#0066CC" },
                { Icon: Banknote, value: "Rs. 50L", label: "Grant (up to)", color: "#00A86B" },
              ].map((stat, i) => (
                <div key={i} className={`p-4 sm:p-5 rounded-2xl text-center transition-all duration-500 hover:-translate-y-1 hover:shadow-lg ${about.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                  style={{ background: "#FFFFFF", border: "1px solid #E2E8F0", boxShadow: "0 2px 12px rgba(0,0,0,0.04)", transitionDelay: `${i * 100}ms` }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-2" style={{ background: `${stat.color}10` }}>
                    <stat.Icon className="w-5 h-5" style={{ color: stat.color }} />
                  </div>
                  <p className="text-[24px] sm:text-[28px] font-black leading-none bg-gradient-to-br from-[#00A86B] to-[#0066CC] bg-clip-text text-transparent">{stat.value}</p>
                  <p className="text-[11px] sm:text-[12px] font-medium mt-1" style={{ color: "#94A3B8" }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery — hover zoom */}
      <section className="py-10 lg:py-14 px-5 lg:px-8" style={{ background: "#F8FAFC" }}>
        <div ref={gallery.ref} className="max-w-[1100px] mx-auto">
          <div className={`transition-all duration-700 ${gallery.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)" }} />
              <span className="text-[11px] font-bold tracking-[0.18em] uppercase" style={{ color: "#94A3B8" }}>Gallery</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { src: "/images/elevate-2025-stage-panel.png", alt: "Elevate 2025 stage panel discussion", span: "col-span-2", w: 1600, h: 900 },
                { src: "/images/elevate-2025-winner-trophy.png", alt: "Elevate 2025 winner trophy", span: "", w: 1200, h: 1600 },
              ].map((img, i) => (
                <div key={i}
                  className={`relative rounded-xl overflow-hidden group transition-all duration-700 ${img.span} h-[200px] sm:h-[280px] ${gallery.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                  style={{ border: "1px solid #E2E8F0", transitionDelay: `${i * 80}ms`, background: "#F8FAFC" }}>
                  <Image src={img.src} alt={img.alt} width={img.w} height={img.h} className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Selected — modern checklist */}
      <section className="py-10 lg:py-14 px-5 lg:px-8" style={{ background: "#FFFFFF" }}>
        <div ref={why.ref} className="max-w-[860px] mx-auto">
          <div className={`transition-all duration-700 ${why.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)" }} />
              <span className="text-[11px] font-bold tracking-[0.18em] uppercase" style={{ color: "#94A3B8" }}>Why We Were Selected</span>
            </div>

            <h2 className="text-[22px] sm:text-[30px] lg:text-[38px] font-extrabold leading-tight mb-6" style={{ color: "#0F172A" }}>
              Building AI-First for{" "}
              <span className="bg-gradient-to-r from-[#00A86B] to-[#0066CC] bg-clip-text text-transparent">Real-World Impact</span>
            </h2>

            <div className="space-y-3 mb-6">
              {[
                "Building AI-first, Agentic workflows that solve complex, real-world problems with depth and rigour",
                "Creating 0-to-1 in the Agentic AI space — full-stack intelligent systems, not wrappers",
                "Commitment to Systemic Integrity in AI workflows across international trade compliance",
              ].map((point, i) => (
                <div key={i} className={`flex items-start gap-3 p-3 rounded-xl transition-all duration-500 hover:bg-[#F8FAFC] ${why.isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
                  style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "linear-gradient(135deg, #00A86B, #0066CC)" }}>
                    <CheckCircle className="w-3.5 h-3.5 text-white" />
                  </div>
                  <p className="text-[14px] sm:text-[15px] leading-relaxed" style={{ color: "#475569" }}>{point}</p>
                </div>
              ))}
            </div>

            {/* Returning winner — gradient border card */}
            <div className="relative p-[2px] rounded-2xl" style={{ background: "linear-gradient(135deg, #00A86B, #0066CC)" }}>
              <div className="p-5 rounded-[14px]" style={{ background: "#FFFFFF" }}>
                <p className="text-[14px] leading-relaxed" style={{ color: "#475569" }}>
                  <strong className="bg-gradient-to-r from-[#00A86B] to-[#0066CC] bg-clip-text text-transparent">Returning winner:</strong> Founder Naveen Athresh previously won Karnataka Elevate 2019 — making Liquidmind AI a repeat recognition.
                </p>
              </div>
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
              <span className="text-[11px] font-bold tracking-[0.18em] uppercase" style={{ color: "#94A3B8" }}>Read More</span>
            </div>

            <a href="https://www.linkedin.com/posts/naveen-athresh-090b0a_elevate2025-startupkarnataka-liquidmind-activity-7418325908966551552-Zkpk"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group mb-8"
              style={{ background: "#FFFFFF", border: "1px solid #E2E8F0" }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110" style={{ background: "#ECFDF5" }}>
                <svg className="w-5 h-5" style={{ color: "#00A86B" }} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[14px] font-bold" style={{ color: "#0F172A" }}>Naveen Athresh</p>
                <p className="text-[12px]" style={{ color: "#94A3B8" }}>Founder's post about the Elevate selection</p>
              </div>
              <ExternalLink className="w-4 h-4 flex-shrink-0 opacity-30 group-hover:opacity-100 transition-all duration-300" style={{ color: "#00A86B" }} />
            </a>

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
