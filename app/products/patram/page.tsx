"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FooterLinks } from "@/components/footer-links"
import { WhatsAppButton } from "@/components/whatsapp-button"
import Link from "next/link"
import { PatramCard } from "@/components/products-hero"
import { ArrowRight, ChevronRight } from "lucide-react"
import { useState, useEffect, useRef } from "react"

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { setIsInView(entry.isIntersecting) },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])
  return { ref, isInView }
}


export default function PatramAIPage() {
  return (
    <main style={{ background: "#FFFFFF" }}>
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <FeaturesSection />
      <UseCasesSection />
      <ComparisonSection />
      <CTASection />
      <FooterLinks />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}

function HeroSection() {
  const { ref, isInView } = useInView()

  return (
    <section
      ref={ref}
      className="pt-[112px] pb-16 lg:pb-20 px-5 lg:px-8 relative overflow-hidden"
      style={{ background: "#FFFFFF" }}
    >
      {/* World map bg */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "url('/images/world-map-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.04,
      }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to bottom, #FFFFFF 0%, transparent 30%, #FFFFFF 100%)" }} />

      <div className="w-full max-w-[1400px] mx-auto relative">

        {/* Breadcrumb — minimal */}
        <div className={`flex items-center gap-1.5 mb-8 transition-all duration-500 ${isInView ? "opacity-100" : "opacity-0"}`}>
          <Link href="/" className="text-[11px] font-medium transition-colors hover:text-[#0F172A]" style={{ color: "#94A3B8" }}>Home</Link>
          <ChevronRight className="w-3 h-3" style={{ color: "#CBD5E1" }} />
          <Link href="/#products" className="text-[11px] font-medium transition-colors hover:text-[#0F172A]" style={{ color: "#94A3B8" }}>Products</Link>
          <ChevronRight className="w-3 h-3" style={{ color: "#CBD5E1" }} />
          <span className="text-[11px] font-semibold" style={{ color: "#00A86B" }}>Patram AI</span>
        </div>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-center">

          {/* Left: Copy */}
          <div>
            {/* Section label */}
            <div className={`flex items-center gap-3 mb-4 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)" }} />
              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#94A3B8" }}>Patram AI</span>
            </div>

            <h1 className={`text-[26px] sm:text-[42px] lg:text-[52px] font-extrabold leading-[1.1] tracking-[-0.02em] mb-4 transition-all duration-700 delay-100 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`} style={{ color: "#0F172A" }}>
              Trade compliance,{" "}
              <span className="bg-gradient-to-r from-[#00A86B] to-[#0066CC] bg-clip-text text-transparent">answered instantly.</span>
            </h1>

            <p className={`text-[15px] sm:text-[16px] leading-relaxed mb-6 max-w-[480px] transition-all duration-700 delay-200 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`} style={{ color: "#475569" }}>
              Upload any trade document. Ask in plain English. Get sourced answers for 190+ countries in seconds — any time, no consultant needed.
            </p>

            {/* CTAs */}
            <div className={`flex flex-row items-stretch gap-3 transition-all duration-700 delay-[400ms] ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <Link
                href="/book-demo"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 py-3.5 rounded-xl text-[14px] font-bold btn-shine transition-all duration-300 hover:scale-[1.03] overflow-hidden"
                style={{ width: "160px", background: "linear-gradient(135deg, #00A86B, #0066CC)", color: "#FFFFFF", boxShadow: "0 4px 25px rgba(0,168,107,0.3)" }}
              >
                Book a Demo <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/demo/patram"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 py-3.5 rounded-xl text-[14px] font-semibold transition-all duration-300 hover:scale-[1.03]"
                style={{ width: "160px", background: "#FFFFFF", border: "2px solid #00A86B", boxShadow: "0 4px 20px rgba(0,168,107,0.12)" }}
              >
                <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #00A86B, #0066CC)" }}>
                  <svg className="w-2 h-2 text-white" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                </div>
                <span className="bg-gradient-to-r from-[#00A86B] to-[#0066CC] bg-clip-text text-transparent">Watch Demo</span>
              </Link>
            </div>
          </div>

          {/* Right: PatramCard */}
          <div className={`hidden lg:block transition-all duration-700 delay-200 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <PatramCard isActive={isInView} />
          </div>
        </div>
      </div>
    </section>
  )
}

function ProblemSection() {
  const { ref, isInView } = useInView()

  const problems = [
    {
      num: "01",
      title: "Documents are hundreds of pages",
      body: "Export policies, FTAs, and compliance docs bury the answer you need. Finding it manually takes 4–6 hours per document.",
    },
    {
      num: "02",
      title: "Regulations change without warning",
      body: "What was allowed last month may be restricted today. Teams working from outdated rules face penalties, not refunds.",
    },
    {
      num: "03",
      title: "Every country plays by different rules",
      body: "190+ distinct regulatory frameworks. What clears customs in the US will be flagged in the EU or ASEAN.",
    },
    {
      num: "04",
      title: "Experts aren't available at midnight",
      body: "Consultants are expensive and keep business hours. Shipment questions don't wait — decisions get delayed or made blind.",
    },
  ]

  return (
    <section ref={ref} className="py-10 lg:py-14 px-5 lg:px-8" style={{ background: "#F8FAFC" }}>
      <div className="w-full max-w-[1100px] mx-auto">

        <div className={`text-center mb-10 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)" }} />
            <span className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#94A3B8" }}>The Problem</span>
            <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(270deg, #0066CC, #00A86B)" }} />
          </div>
          <h2 className="text-[22px] sm:text-[30px] lg:text-[38px] font-extrabold leading-[1.1] tracking-[-0.02em]" style={{ color: "#0F172A" }}>
            Why exporters lose time —{" "}
            <span className="bg-gradient-to-r from-[#00A86B] to-[#0066CC] bg-clip-text text-transparent">and money.</span>
          </h2>
        </div>

        {/* Editorial 4-column strip */}
        <div
          className={`grid grid-cols-2 lg:grid-cols-4 transition-all duration-700 delay-100 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ borderTop: "1px solid #E2E8F0", borderBottom: "1px solid #E2E8F0" }}
        >
          {problems.map((p, idx) => (
            <div
              key={idx}
              className={`relative pt-6 pb-8 px-5 lg:px-7 flex flex-col overflow-hidden transition-all duration-300 hover:bg-white group ${idx < 3 ? "border-r" : ""} ${idx < 2 ? "border-b lg:border-b-0" : ""}`}
              style={{ borderColor: "#E2E8F0" }}
            >
              {/* Large watermark number */}
              <span
                className="absolute -top-2 -right-1 text-[96px] font-black leading-none select-none pointer-events-none transition-all duration-500 group-hover:opacity-100"
                style={{ color: "#00A86B0F", letterSpacing: "-0.04em" }}
              >
                {p.num}
              </span>

              {/* Small accent number */}
              <div className="flex items-center gap-2 mb-5">
                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #00A86B20, #0066CC10)" }}>
                  <span className="text-[10px] font-black" style={{ color: "#00A86B" }}>{idx + 1}</span>
                </div>
                <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, #00A86B30, transparent)" }} />
              </div>

              <p className="text-[13px] sm:text-[14px] font-bold leading-snug mb-2.5 relative z-10" style={{ color: "#0F172A" }}>{p.title}</p>
              <p className="text-[12px] leading-relaxed relative z-10" style={{ color: "#64748B" }}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeaturesSection() {
  const { ref, isInView } = useInView()

  const features = [
    {
      title: "Ask in plain English",
      body: "No syntax. No menus. Type your question like you'd ask a colleague — Patram reads the doc and answers precisely.",
    },
    {
      title: "Every answer is sourced",
      body: "Responses cite the exact page and section from your uploaded document. Full traceability, zero guesswork.",
    },
    {
      title: "190+ countries, always current",
      body: "From US and EU to emerging markets. Trade policies are continuously updated — you're never working from stale data.",
    },
    {
      title: "Reads tables, charts, complex PDFs",
      body: "Multi-modal AI understands not just text but visuals, tables, and nested layouts inside trade documents.",
    },
    {
      title: "1.5 second response time",
      body: "Comprehensive answers faster than you can type the next question. No loading screens, no waiting.",
    },
    {
      title: "Built-in fact verification",
      body: "A verification layer validates every answer against your source document — prevents hallucinations at the root.",
    },
  ]

  return (
    <section ref={ref} className="py-10 lg:py-14 px-5 lg:px-8" style={{ background: "#FFFFFF" }}>
      <div className="w-full max-w-[1100px] mx-auto">

        <div className={`text-center mb-10 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)" }} />
            <span className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#94A3B8" }}>How It Works</span>
            <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(270deg, #0066CC, #00A86B)" }} />
          </div>
          <h2 className="text-[22px] sm:text-[30px] lg:text-[38px] font-extrabold leading-[1.1] tracking-[-0.02em]" style={{ color: "#0F172A" }}>
            What{" "}
            <span className="bg-gradient-to-r from-[#00A86B] to-[#0066CC] bg-clip-text text-transparent">Patram AI</span>{" "}
            does for you.
          </h2>
        </div>

        {/* Two-column feature list with green left accent */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-0 transition-all duration-700 delay-100 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          {features.map((f, idx) => (
            <div
              key={idx}
              className="flex gap-4 py-5 transition-all duration-300 hover:translate-x-1"
              style={{ borderBottom: "1px solid #F1F5F9" }}
            >
              {/* Green accent bar + number */}
              <div className="flex flex-col items-center flex-shrink-0 pt-0.5">
                <div className="w-0.5 h-full rounded-full" style={{ background: "linear-gradient(to bottom, #00A86B, #00A86B20)", minHeight: "48px" }} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[10px] font-black tracking-widest" style={{ color: "#00A86B" }}>{String(idx + 1).padStart(2, "0")}</span>
                  <h3 className="text-[14px] font-bold leading-snug" style={{ color: "#0F172A" }}>{f.title}</h3>
                </div>
                <p className="text-[12px] leading-relaxed" style={{ color: "#64748B" }}>{f.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function UseCasesSection() {
  const { ref, isInView } = useInView()
  const [activeIdx, setActiveIdx] = useState(0)

  const useCases = [
    {
      tag: "FTA Eligibility",
      question: "Is my product eligible for preferential duty under India-UAE CEPA?",
      answer: "HSN 8471.30 qualifies for 0% duty under India-UAE CEPA if you meet the 40% value addition rule. EUR.1 Origin Certificate required.",
      source: "Pg 18, Annex II",
    },
    {
      tag: "Doc Requirements",
      question: "What certificates do I need to export pharmaceuticals to Brazil?",
      answer: "ANVISA registration, Certificate of Pharmaceutical Product (CPP), GMP certificate from CDSCO, and Portuguese-translated product info. Allow 6–8 weeks for ANVISA clearance.",
      source: "Pg 34, Sec 4.2",
    },
    {
      tag: "Restriction Check",
      question: "Can I export dual-use electronics to Russia under current sanctions?",
      answer: "ITC-HS 8471 series carries export restrictions to Russia per DGFT notification. SCOMET license from DGFT is mandatory. Processing: 30–45 working days.",
      source: "Pg 7, DGFT Sch 2",
    },
  ]

  useEffect(() => {
    if (!isInView) return
    const t = setInterval(() => setActiveIdx(p => (p + 1) % useCases.length), 4000)
    return () => clearInterval(t)
  }, [isInView])

  return (
    <section ref={ref} id="use-cases" className="py-10 lg:py-12 px-5 lg:px-8" style={{ background: "#F8FAFC" }}>
      <div className="w-full max-w-[860px] mx-auto">

        <div className={`text-center mb-6 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)" }} />
            <span className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#94A3B8" }}>Real Questions, Real Answers</span>
            <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(270deg, #0066CC, #00A86B)" }} />
          </div>
          <h2 className="text-[22px] sm:text-[30px] lg:text-[38px] font-extrabold leading-[1.1] tracking-[-0.02em]" style={{ color: "#0F172A" }}>
            Questions exporters{" "}
            <span className="bg-gradient-to-r from-[#00A86B] to-[#0066CC] bg-clip-text text-transparent">ask every day.</span>
          </h2>
        </div>

        <div className={`transition-all duration-700 delay-100 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>

          {/* Tab selectors — fixed height, no wrapping */}
          <div className="flex gap-2 mb-4" style={{ maxWidth: "680px", margin: "0 auto 16px" }}>
            {useCases.map((u, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIdx(idx)}
                className="flex-1 flex items-center justify-center text-center rounded-lg text-[10px] font-semibold transition-all duration-300"
                style={{
                  height: "40px",
                  background: activeIdx === idx ? "#00A86B" : "#FFFFFF",
                  color: activeIdx === idx ? "#FFFFFF" : "#64748B",
                  border: activeIdx === idx ? "1px solid #00A86B" : "1px solid #E2E8F0",
                  lineHeight: "1.2",
                }}
              >
                {u.tag}
              </button>
            ))}
          </div>

          {/* Cards — always fixed height, absolute stacked, opacity crossfade */}
          <div className="relative" style={{ height: "360px", maxWidth: "680px", margin: "0 auto" }}>
            {useCases.map((u, idx) => (
              <div
                key={idx}
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                  opacity: activeIdx === idx ? 1 : 0,
                  pointerEvents: activeIdx === idx ? "auto" : "none",
                }}
              >
                <div className="rounded-2xl overflow-hidden h-full flex flex-col" style={{ border: "1px solid #E2E8F0", boxShadow: "0 8px 40px rgba(0,0,0,0.08)" }}>

                  {/* Chat header */}
                  <div className="flex items-center gap-2 px-4 py-2.5 flex-shrink-0" style={{ background: "#FFFFFF", borderBottom: "1px solid #F1F5F9" }}>
                    <div className="flex gap-1.5 flex-shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                    </div>
                    <span className="text-[12px] font-bold ml-1 flex-shrink-0" style={{ color: "#0F172A" }}>Patram AI</span>
                    <span className="text-[11px] ml-1 truncate min-w-0" style={{ color: "#94A3B8" }}>— Intelligent Document Assistant</span>
                  </div>

                  {/* Chat body */}
                  <div className="flex-1 px-4 py-4 flex flex-col gap-3 overflow-hidden" style={{ background: "#FAFBFF" }}>
                    <div className="flex justify-end">
                      <div className="px-3 py-2" style={{ background: "#00A86B", borderRadius: "18px 18px 4px 18px", boxShadow: "0 3px 12px rgba(0,168,107,0.25)", maxWidth: "80%" }}>
                        <p className="text-[12px] leading-snug font-medium" style={{ color: "#FFFFFF" }}>{u.question}</p>
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="px-3 py-2.5" style={{ background: "#F2F2F7", borderRadius: "18px 18px 18px 4px", maxWidth: "88%" }}>
                        <div className="flex items-center gap-2 mb-1">
                          <p className="text-[12px] font-bold leading-none flex-shrink-0" style={{ color: "#0F172A" }}>{u.tag}</p>
                          <span className="text-[9px] font-medium px-1.5 py-0.5 rounded flex-shrink-0" style={{ background: "rgba(0,0,0,0.06)", color: "#94A3B8" }}>{u.source}</span>
                        </div>
                        <p className="text-[11px] leading-relaxed" style={{ color: "#475569" }}>{u.answer}</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ComparisonSection() {
  const { ref, isInView } = useInView()

  const metrics = [
    { metric: "Research Time", manual: "4–6 hours", patram: "1.5 seconds" },
    { metric: "Availability", manual: "Business hours", patram: "24/7" },
    { metric: "Countries", manual: "Team knowledge", patram: "190+" },
    { metric: "Citations", manual: "Sometimes", patram: "Every answer" },
    { metric: "Accuracy", manual: "Human review", patram: "AI fact-checking" },
  ]

  return (
    <section ref={ref} className="py-10 lg:py-14 px-5 lg:px-8" style={{ background: "#FFFFFF" }}>
      <div className="w-full max-w-[860px] mx-auto">

        <div className={`text-center mb-10 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)" }} />
            <span className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#94A3B8" }}>Why Patram AI</span>
            <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(270deg, #0066CC, #00A86B)" }} />
          </div>
          <h2 className="text-[22px] sm:text-[30px] lg:text-[38px] font-extrabold leading-[1.1] tracking-[-0.02em]" style={{ color: "#0F172A" }}>
            Manual research vs{" "}
            <span className="bg-gradient-to-r from-[#00A86B] to-[#0066CC] bg-clip-text text-transparent">Patram AI.</span>
          </h2>
        </div>

        <div
          className={`rounded-2xl overflow-hidden transition-all duration-700 delay-100 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ border: "1px solid #E2E8F0" }}
        >
          <div className="grid grid-cols-[1fr_1.2fr_1.4fr]" style={{ background: "#F8FAFC", borderBottom: "1px solid #E2E8F0" }}>
            <div className="py-2.5 px-3 text-[10px] font-bold uppercase tracking-wide" style={{ color: "#94A3B8" }}>Metric</div>
            <div className="py-2.5 px-3 text-[10px] font-bold uppercase tracking-wide" style={{ color: "#94A3B8" }}>Manual</div>
            <div className="py-2.5 px-3 text-[10px] font-bold uppercase tracking-wide" style={{ color: "#00A86B" }}>Patram AI</div>
          </div>
          {metrics.map((row, idx) => (
            <div key={idx} className="grid grid-cols-[1fr_1.2fr_1.4fr] items-center" style={{ height: "50px", borderTop: "1px solid #F1F5F9" }}>
              <div className="px-3 text-[12px] font-medium" style={{ color: "#475569" }}>{row.metric}</div>
              <div className="px-3 text-[12px]" style={{ color: "#94A3B8" }}>{row.manual}</div>
              <div className="px-3 text-[12px] font-semibold" style={{ color: "#00A86B" }}>{row.patram}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  const { ref, isInView } = useInView()

  return (
    <section ref={ref} className="py-12 lg:py-16 px-5 lg:px-8 relative overflow-hidden" style={{ background: "#00A86B" }}>
      {/* Subtle texture */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "url('/images/world-map-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.06,
      }} />
      <div className={`max-w-[640px] mx-auto text-center relative transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-8 rounded-full" style={{ background: "rgba(255,255,255,0.3)" }} />
          <span className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: "rgba(255,255,255,0.7)" }}>Get Started</span>
          <div className="h-px w-8 rounded-full" style={{ background: "rgba(255,255,255,0.3)" }} />
        </div>
        <h2 className="text-[22px] sm:text-[28px] lg:text-[34px] font-extrabold leading-[1.1] tracking-[-0.02em] mb-3 text-white">
          Get answers in seconds, not hours.
        </h2>
        <p className="text-[14px] leading-relaxed mb-7" style={{ color: "rgba(255,255,255,0.8)" }}>
          Stop spending hours in policy documents. Let Patram AI be your always-on export intelligence layer.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/book-demo"
            className="inline-flex items-center justify-center gap-2 py-3.5 rounded-xl text-[14px] font-bold btn-shine transition-all duration-300 hover:scale-[1.03] overflow-hidden"
            style={{ width: "168px", background: "#FFFFFF", color: "#00A86B", boxShadow: "0 4px 25px rgba(0,0,0,0.15)" }}
          >
            Book a Demo <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="/#products"
            className="inline-flex items-center justify-center gap-2 py-3.5 rounded-xl text-[14px] font-semibold transition-all duration-300 hover:scale-[1.03]"
            style={{ width: "168px", background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.3)", color: "#FFFFFF" }}
          >
            Other Products
          </Link>
        </div>
      </div>
    </section>
  )
}
