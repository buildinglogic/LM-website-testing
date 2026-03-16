"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FooterLinks } from "@/components/footer-links"
import { WhatsAppButton } from "@/components/whatsapp-button"
import Image from "next/image"
import Link from "next/link"

const achievements = [
  { label: "Forbes India", value: "Top 100 Leaders 2020" },
  { label: "TEDx Views", value: "150K+ in 2 months" },
  { label: "Teams Built", value: "200+ Member Teams" },
  { label: "Speaking Events", value: "25+ Premier Institutions" },
]

const highlights = [
  {
    title: "Product & Platform Thinking Pioneer",
    description:
      "Naveen has evangelised Product/Platform Thinking across India's premier institutions — IIT Madras, IIT Kharagpur, IIT Bombay, IIM Bangalore, BITS Pilani, and 20+ more — helping transform how the next generation of leaders approach building products.",
    color: "#0066CC",
    lightBg: "#EFF6FF",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
  {
    title: "Enterprise AI & Fintech Leader",
    description:
      "With senior leadership roles at PayU, Rakuten, and Flipkart, Naveen brings deep cross-geo product and engineering expertise. He has led data science and product engineering teams across geographies, building high-performance organisations from the ground up.",
    color: "#00A86B",
    lightBg: "#ECFDF5",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5" />
      </svg>
    ),
  },
  {
    title: "Global Thought Leader",
    description:
      "Featured in Business Today, Forbes India, and USAwire as a global thought leader making an impact in AI and digital transformation. Co-panelled with MIT Media Lab's Prof. Ramesh Raskar at IISc Bengaluru on AI applied to societal challenges.",
    color: "#1B4F8A",
    lightBg: "#EFF6FF",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253" />
      </svg>
    ),
  },
  {
    title: "Startup Mentor & Ecosystem Builder",
    description:
      "Mentor at BITS Pilani's Conquest (India's first student-run startup accelerator), IIM Bangalore's NSRCEL, GoK Mobile10X Hub, and UpGrad.com. Board member at EPIC (Institute of Product Leadership), shaping the curriculum for 10,000+ product thinkers.",
    color: "#0066CC",
    lightBg: "#EFF6FF",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
]

const hobbies = [
  {
    name: "Japanese Philosophy",
    detail: "Deep practitioner of Ikigai, Kaizen, and Wabi-sabi — principles that shape how Naveen approaches product design, team building, and life.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
      </svg>
    ),
  },
  {
    name: "Motorcycling",
    detail: "Long-distance solo rides across India — a meditation in motion, finding clarity on open roads.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
  {
    name: "Reading",
    detail: "Voracious reader spanning philosophy, product strategy, behavioural economics, and science fiction.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    name: "Mentoring",
    detail: "Volunteer mentor across 25+ institutions. Believes deeply in paying it forward to the next generation of builders.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 3.741-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
  },
]

export default function FounderPage() {
  return (
    <main className="min-h-screen" style={{ background: "#FFFFFF" }}>
      <Navigation />

      {/* Hero */}
      <section className="pt-[140px] pb-10 px-5 lg:px-8" style={{ background: "#FFFFFF" }}>
        <div className="max-w-[1000px] mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/company" className="text-[12px] font-medium flex items-center gap-1.5 hover:opacity-70 transition-opacity" style={{ color: "#94A3B8" }}>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Company
            </Link>
            <span style={{ color: "#E2E8F0" }}>/</span>
            <span className="text-[12px] font-medium" style={{ color: "#0066CC" }}>Naveen Athresh</span>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            {/* Photo */}
            <div className="w-full lg:w-auto flex-shrink-0">
              <div className="relative w-full lg:w-[280px] h-[340px] lg:h-[380px] rounded-2xl overflow-hidden"
                style={{ boxShadow: "0 8px 40px rgba(0,102,204,0.15)" }}>
                <Image
                  src="/images/founder-naveen.avif"
                  alt="Naveen Athresh"
                  fill
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 55%)" }} />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex gap-2">
                    <a
                      href="https://twitter.com/naveenathresh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold text-white transition-opacity hover:opacity-80"
                      style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(8px)" }}
                    >
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.75l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                      @naveenathresh
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px w-6 rounded-full" style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)" }} />
                <span className="text-[10px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#94A3B8" }}>Leadership</span>
              </div>
              <h1 className="text-[28px] sm:text-[36px] lg:text-[44px] font-extrabold leading-tight mb-1" style={{ color: "#0F172A" }}>
                Naveen Athresh
              </h1>
              <p className="text-[14px] font-semibold mb-4" style={{ color: "#00A86B" }}>
                Founder & CEO · Chief Product Officer
              </p>
              <p className="text-[13px] sm:text-[14px] leading-relaxed mb-4" style={{ color: "#475569" }}>
                TEDx speaker and Forbes India 2020 Top 100 Leader, Naveen Athresh has spent over two decades at the intersection
                of product, technology, and entrepreneurship. He has built 200+ member high-performance teams and led cross-geo
                Product Engineering and Data Science organisations at PayU, Rakuten, and Flipkart.
              </p>
              <p className="text-[13px] sm:text-[14px] leading-relaxed mb-5" style={{ color: "#475569" }}>
                Featured in Business Today and USAwire as a global thought leader, Naveen founded Liquidmind AI with a singular
                mission: use AI to unlock intelligence in India's $800B+ trade finance sector, making it accessible to every
                exporter — from large enterprises to first-generation entrepreneurs.
              </p>

              {/* Achievement pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {achievements.map((a) => (
                  <div key={a.label} className="px-3 py-1.5 rounded-full text-[11px] font-semibold" style={{ background: "#EFF6FF", color: "#0066CC" }}>
                    <span style={{ color: "#0F172A" }}>{a.value}</span>
                    <span className="mx-1 opacity-40">·</span>
                    {a.label}
                  </div>
                ))}
              </div>

              {/* CTA links */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://youtu.be/Gbr19NqGt-A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-[13px] font-semibold transition-all hover:scale-105"
                  style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)", color: "#FFFFFF" }}
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  Watch TEDx Talk
                </a>
                <a
                  href="https://twitter.com/naveenathresh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-[13px] font-semibold border transition-all hover:bg-[#F8FAFC]"
                  style={{ border: "1px solid #E2E8F0", color: "#0F172A" }}
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.75l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  Follow on X
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEDx Video Embed */}
      <section className="py-10 lg:py-14 px-5 lg:px-8" style={{ background: "#F8FAFC" }}>
        <div className="max-w-[860px] mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)" }} />
            <span className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#94A3B8" }}>TEDx Talk</span>
            <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(270deg, #0066CC, #00A86B)" }} />
          </div>
          <h2 className="text-[18px] sm:text-[22px] lg:text-[28px] font-extrabold text-center mb-2" style={{ color: "#0F172A" }}>
            Innovation, Life &{" "}
            <span className="bg-gradient-to-r from-[#0066CC] to-[#00A86B] bg-clip-text text-transparent">Choices</span>
          </h2>
          <p className="text-[13px] text-center mb-6" style={{ color: "#64748B" }}>
            UVCE Bengaluru · 150,000+ views in under 2 months
          </p>
          <div className="relative rounded-2xl overflow-hidden" style={{ paddingBottom: "56.25%", border: "1px solid #E2E8F0", boxShadow: "0 8px 40px rgba(0,0,0,0.08)" }}>
            <iframe
              src="https://www.youtube.com/embed/Gbr19NqGt-A"
              title="Naveen Athresh TEDx Talk"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
            />
          </div>
        </div>
      </section>

      {/* Highlights / What Defines Naveen */}
      <section className="py-10 lg:py-14 px-5 lg:px-8" style={{ background: "#FFFFFF" }}>
        <div className="max-w-[1000px] mx-auto">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)" }} />
            <span className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#94A3B8" }}>What Defines Him</span>
            <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(270deg, #0066CC, #00A86B)" }} />
          </div>
          <h2 className="text-[20px] sm:text-[26px] lg:text-[34px] font-extrabold text-center mb-8" style={{ color: "#0F172A" }}>
            Builder. Mentor.{" "}
            <span className="bg-gradient-to-r from-[#0066CC] to-[#00A86B] bg-clip-text text-transparent">Thought Leader.</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((h, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                style={{ background: "#FFFFFF", border: "1px solid #E2E8F0", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
              >
                <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: h.lightBg, color: h.color }}>
                  {h.icon}
                </div>
                <h3 className="text-[13px] sm:text-[14px] font-bold mb-2" style={{ color: h.color }}>{h.title}</h3>
                <p className="text-[12px] sm:text-[13px] leading-relaxed" style={{ color: "#475569" }}>{h.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Japanese Philosophy */}
      <section className="py-10 lg:py-14 px-5 lg:px-8" style={{ background: "#F8FAFC" }}>
        <div className="max-w-[860px] mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)" }} />
            <span className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#94A3B8" }}>Philosophy</span>
            <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(270deg, #0066CC, #00A86B)" }} />
          </div>
          <h2 className="text-[20px] sm:text-[26px] lg:text-[32px] font-extrabold text-center mb-3" style={{ color: "#0F172A" }}>
            The Japanese{" "}
            <span className="bg-gradient-to-r from-[#0066CC] to-[#00A86B] bg-clip-text text-transparent">Lens</span>
          </h2>
          <p className="text-[13px] sm:text-[14px] text-center leading-relaxed mb-8 max-w-2xl mx-auto" style={{ color: "#475569" }}>
            Naveen draws deeply from Japanese philosophy to guide how he builds products, leads teams, and lives his life.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { term: "Ikigai", meaning: "Reason for Being", description: "The intersection of what you love, what the world needs, what you can be paid for, and what you're good at — the north star of every decision." },
              { term: "Kaizen", meaning: "Continuous Improvement", description: "Small, consistent improvements over time compound into extraordinary outcomes. The foundation of Liquidmind's product development culture." },
              { term: "Wabi-Sabi", meaning: "Beauty in Imperfection", description: "Embracing the imperfect and incomplete. Ships early, learns fast, iterates with humility — a deeply practical philosophy for building in uncertainty." },
            ].map((p) => (
              <div key={p.term} className="p-4 rounded-2xl text-center"
                style={{ background: "#FFFFFF", border: "1px solid #E2E8F0" }}>
                <div className="text-[26px] font-black mb-1 bg-gradient-to-r from-[#0066CC] to-[#00A86B] bg-clip-text text-transparent">
                  {p.term}
                </div>
                <div className="text-[11px] font-semibold mb-2 uppercase tracking-wider" style={{ color: "#94A3B8" }}>{p.meaning}</div>
                <p className="text-[12px] leading-relaxed" style={{ color: "#475569" }}>{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beyond Work — Hobbies */}
      <section className="py-10 lg:py-14 px-5 lg:px-8" style={{ background: "#FFFFFF" }}>
        <div className="max-w-[860px] mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)" }} />
            <span className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#94A3B8" }}>Beyond Work</span>
            <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(270deg, #0066CC, #00A86B)" }} />
          </div>
          <h2 className="text-[20px] sm:text-[26px] lg:text-[32px] font-extrabold text-center mb-8" style={{ color: "#0F172A" }}>
            The{" "}
            <span className="bg-gradient-to-r from-[#0066CC] to-[#00A86B] bg-clip-text text-transparent">Person</span>
            {" "}Behind the Founder
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {hobbies.map((h) => (
              <div key={h.name} className="flex gap-4 p-4 rounded-2xl"
                style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "#EFF6FF", color: "#0066CC" }}>
                  {h.icon}
                </div>
                <div>
                  <div className="text-[13px] font-bold mb-1" style={{ color: "#0F172A" }}>{h.name}</div>
                  <p className="text-[12px] leading-relaxed" style={{ color: "#64748B" }}>{h.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Co-Founder Card */}
      <section className="py-10 lg:py-14 px-5 lg:px-8" style={{ background: "#F8FAFC" }}>
        <div className="max-w-[860px] mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)" }} />
            <span className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#94A3B8" }}>Co-Founder</span>
            <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(270deg, #0066CC, #00A86B)" }} />
          </div>
          <h2 className="text-[20px] sm:text-[24px] font-extrabold text-center mb-6" style={{ color: "#0F172A" }}>
            The Team Behind the{" "}
            <span className="bg-gradient-to-r from-[#0066CC] to-[#00A86B] bg-clip-text text-transparent">Vision</span>
          </h2>
          <div className="p-4 rounded-2xl" style={{ background: "#FFFFFF", border: "1px solid #E2E8F0", boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white text-[12px] font-bold"
                style={{ background: "linear-gradient(135deg, #0066CC, #00A86B)" }}>
                SV
              </div>
              <div>
                <h3 className="text-[14px] font-bold leading-tight" style={{ color: "#0066CC" }}>Srivani Dharwar Vijaya</h3>
                <p className="text-[11px] font-semibold" style={{ color: "#0F172A" }}>Co-Founder & Chief Technology Officer</p>
              </div>
            </div>
            <p className="text-[12px] sm:text-[13px] leading-relaxed" style={{ color: "#475569" }}>
              With 15+ years at Capgemini, Mindtree, Wipro, and Infosys, Srivani brings deep technology architecture
              experience in enterprise software and SAP systems. She approaches every problem from first principles with
              a focus on strategic objectives. Holds a BE from Visvesvaraya Technology University (VTU) in Information Science.
            </p>
          </div>
        </div>
      </section>

      {/* Back to Company CTA */}
      <section className="py-8 px-5 lg:px-8 text-center" style={{ background: "#FFFFFF", borderTop: "1px solid #E2E8F0" }}>
        <div className="max-w-[480px] mx-auto">
          <p className="text-[13px] mb-4" style={{ color: "#64748B" }}>
            Want to build the future of trade finance with us?
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/book-demo"
              className="px-6 py-2.5 rounded-lg text-[14px] font-bold transition-all hover:scale-105"
              style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)", color: "#FFFFFF" }}
            >
              Book a Demo
            </Link>
            <Link
              href="/company"
              className="px-6 py-2.5 rounded-lg text-[14px] font-semibold border transition-all hover:bg-[#F8FAFC]"
              style={{ border: "1px solid #E2E8F0", color: "#0F172A" }}
            >
              Back to Company
            </Link>
          </div>
        </div>
      </section>

      <FooterLinks />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
