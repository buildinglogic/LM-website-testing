"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FooterLinks } from "@/components/footer-links"
import { WhatsAppButton } from "@/components/whatsapp-button"
import Link from "next/link"
import { ArrowRight, Globe, FileText, Clock, MapPin, HelpCircle, ChevronRight, MessageSquare, Search, BookOpen, CheckCircle, Zap, Shield } from "lucide-react"
import { useState, useEffect, useRef } from "react"

const BRAND_GREEN = "#00A86B"
const BRAND_BLUE = "#0066CC"

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

export default function PatramAIPage() {
  return (
    <main className="bg-white">
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
      className="pt-[130px] lg:pt-[160px] pb-20 lg:pb-28 px-4 lg:px-8 relative overflow-hidden"
    >
      {/* Gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 80% 50% at 50% -20%, ${BRAND_GREEN}10 0%, transparent 50%)`,
        }}
      />

      <div className="w-full max-w-[1400px] mx-auto relative">
        {/* Breadcrumb */}
        <nav className={`flex items-center gap-2 mb-8 text-[14px] transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Link href="/" className="text-[#64748B] hover:text-[#0F172A] transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 text-[#CBD5E1]" />
          <Link href="/#products" className="text-[#64748B] hover:text-[#0F172A] transition-colors">Products</Link>
          <ChevronRight className="w-4 h-4 text-[#CBD5E1]" />
          <span style={{ color: BRAND_GREEN }}>Patram AI</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ background: `${BRAND_GREEN}10`, border: `1px solid ${BRAND_GREEN}25` }}
            >
              <Globe className="w-4 h-4" style={{ color: BRAND_GREEN }} />
              <span className="text-[13px] font-semibold" style={{ color: BRAND_GREEN }}>
                Export Intelligence Advisor
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-[40px] lg:text-[56px] xl:text-[64px] font-extrabold leading-[1.08] tracking-[-0.03em] mb-6" style={{ color: "#0F172A" }}>
              Your 24/7
              <br />
              <span style={{ color: BRAND_GREEN }}>Export Expert</span>
              <br />
              On Demand.
            </h1>

            {/* Description */}
            <p className="text-[17px] lg:text-[19px] leading-relaxed max-w-[520px] mb-8" style={{ color: "#475569" }}>
              Upload any trade document and ask questions in plain English. Patram AI reads the entire document and gives you accurate, sourced answers instantly.
            </p>

            {/* Stats */}
            <div className="flex items-start gap-8 lg:gap-12 mb-10">
              {[
                { value: "190+", label: "Countries Covered" },
                { value: "24/7", label: "Always Available" },
                { value: "1.5s", label: "Avg Response Time" },
              ].map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-[32px] lg:text-[40px] font-black tracking-tight leading-none" style={{ color: BRAND_GREEN }}>
                    {stat.value}
                  </span>
                  <span className="text-[13px] font-medium mt-1.5" style={{ color: "#94A3B8" }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                href="/book-demo"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-[16px] font-bold transition-all duration-300 hover:scale-105 btn-shine"
                style={{
                  background: `linear-gradient(135deg, ${BRAND_GREEN}, ${BRAND_BLUE})`,
                  color: "#FFFFFF",
                  boxShadow: `0 4px 25px ${BRAND_GREEN}40`,
                }}
              >
                Try Patram AI Free
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#use-cases"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-[16px] font-semibold transition-all duration-300 hover:scale-105"
                style={{ background: "#FFFFFF", border: `2px solid ${BRAND_GREEN}25`, color: BRAND_GREEN }}
              >
                See Use Cases
              </a>
            </div>
          </div>

          {/* Right: Visual */}
          <div className={`transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div
              className="rounded-2xl p-6 lg:p-8 animate-float"
              style={{
                background: "linear-gradient(145deg, #FFFFFF 0%, #F8FAFC 100%)",
                border: "1px solid #E2E8F0",
                boxShadow: `0 25px 80px ${BRAND_GREEN}12, 0 10px 40px rgba(0,0,0,0.06)`,
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: `linear-gradient(135deg, ${BRAND_GREEN}, ${BRAND_BLUE})` }}
                  >
                    <MessageSquare className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-[15px] font-bold" style={{ color: "#0F172A" }}>Patram AI</p>
                    <p className="text-[12px] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: BRAND_GREEN }} />
                      <span style={{ color: "#94A3B8" }}>Online</span>
                    </p>
                  </div>
                </div>
                <div className="text-[11px] px-2 py-1 rounded-lg flex items-center gap-1.5" style={{ background: "#F1F5F9", color: "#64748B" }}>
                  <FileText className="w-3 h-3" />
                  export_policy_2024.pdf
                </div>
              </div>

              {/* Chat */}
              <div className="space-y-4">
                {/* User message */}
                <div className="flex justify-end">
                  <div className="max-w-[85%] px-4 py-3 rounded-2xl rounded-br-md" style={{ background: BRAND_GREEN, color: "white" }}>
                    <p className="text-[14px]">Can I export cotton fabric to Germany? What documents do I need?</p>
                  </div>
                </div>

                {/* AI response */}
                <div className="space-y-3">
                  <div className="px-4 py-3 rounded-2xl rounded-bl-md" style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}>
                    <p className="text-[14px] leading-relaxed" style={{ color: "#475569" }}>
                      Based on your uploaded policy document, cotton fabric (HSN 5208) can be exported to Germany freely. However, there are specific requirements:
                    </p>
                  </div>

                  {/* Compliance card */}
                  <div className="ml-4 p-3 rounded-xl" style={{ background: "rgba(245,158,11,0.06)", border: "1px solid rgba(245,158,11,0.2)" }}>
                    <div className="flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "rgba(245,158,11,0.15)" }}>
                        <span className="text-[10px]" style={{ color: "#F59E0B" }}>!</span>
                      </span>
                      <div>
                        <p className="text-[13px] font-semibold" style={{ color: "#D97706" }}>EU Compliance Required</p>
                        <p className="text-[12px] mt-0.5" style={{ color: "#92400E" }}>
                          Azo dyes are prohibited in textiles sold in the EU. Your fabric must be tested and certified below 30 mg/kg.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Input */}
              <div className="mt-6 flex items-center gap-2 px-4 py-3 rounded-xl" style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}>
                <Search className="w-4 h-4" style={{ color: "#94A3B8" }} />
                <span className="text-[14px]" style={{ color: "#94A3B8" }}>Ask about your export...</span>
                <div className="ml-auto w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: BRAND_GREEN }}>
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
              </div>
            </div>
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
      icon: FileText,
      title: "Complex Trade Documents",
      description: "Export policies, FTAs, and compliance docs are hundreds of pages long. Finding specific information takes hours.",
      highlight: "4-6 hours per document",
    },
    {
      icon: Clock,
      title: "Outdated Information",
      description: "Regulations change constantly. What was allowed last month might be restricted today. Missing updates costs money.",
      highlight: "Compliance risks",
    },
    {
      icon: MapPin,
      title: "Country-Specific Rules",
      description: "Every destination has different requirements. What works for the US won't work for EU or ASEAN.",
      highlight: "190+ rule sets to track",
    },
    {
      icon: HelpCircle,
      title: "No Expert On Call",
      description: "Customs consultants are expensive and not always available. Questions arise at midnight before shipments.",
      highlight: "Delayed decisions",
    },
  ]

  return (
    <section ref={ref} className="py-20 lg:py-28 px-4 lg:px-8" style={{ background: "#FAFBFC" }}>
      <div className="w-full max-w-[1200px] mx-auto">
        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-[13px] font-semibold tracking-[0.18em] uppercase mb-3" style={{ color: "#DC2626" }}>
            The Export Knowledge Problem
          </p>
          <h2 className="text-[32px] lg:text-[44px] font-bold leading-tight" style={{ color: "#0F172A" }}>
            Why Exporters Need{" "}
            <span style={{ color: "#DC2626" }}>Instant Answers</span>
          </h2>
        </div>

        {/* Problem Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((problem, idx) => {
            const Icon = problem.icon
            return (
              <div
                key={idx}
                className={`p-6 lg:p-8 rounded-2xl transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  transitionDelay: `${idx * 100}ms`,
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(220,38,38,0.08)" }}
                  >
                    <Icon className="w-6 h-6" style={{ color: "#DC2626" }} />
                  </div>
                  <div>
                    <h3 className="text-[18px] font-bold mb-2" style={{ color: "#0F172A" }}>{problem.title}</h3>
                    <p className="text-[15px] leading-relaxed mb-3" style={{ color: "#64748B" }}>{problem.description}</p>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg" style={{ background: "rgba(220,38,38,0.06)" }}>
                      <Clock className="w-3.5 h-3.5" style={{ color: "#DC2626" }} />
                      <span className="text-[13px] font-semibold" style={{ color: "#DC2626" }}>{problem.highlight}</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function FeaturesSection() {
  const { ref, isInView } = useInView()

  const features = [
    {
      icon: FileText,
      title: "Multi-Modal Document Analysis",
      description: "Upload PDFs with tables, charts, and graphs. Our AI reads everything - text, visuals, and complex layouts.",
      color: BRAND_GREEN,
    },
    {
      icon: MessageSquare,
      title: "Natural Language Questions",
      description: "Ask questions in plain English. No need to learn search syntax or navigate complex menus.",
      color: BRAND_BLUE,
    },
    {
      icon: Globe,
      title: "190+ Countries Covered",
      description: "From major markets like US, EU, UAE to emerging destinations. Always current trade policies.",
      color: "#F59E0B",
    },
    {
      icon: BookOpen,
      title: "Sourced Answers",
      description: "Every answer cites the exact section and page from your document. Full traceability.",
      color: "#8B5CF6",
    },
    {
      icon: Zap,
      title: "1.5 Second Response",
      description: "No waiting. Get comprehensive answers faster than you can type your next question.",
      color: "#EC4899",
    },
    {
      icon: Shield,
      title: "AI Fact-Checking",
      description: "Built-in verification layer prevents hallucinations. Answers are validated against source documents.",
      color: "#06B6D4",
    },
  ]

  return (
    <section ref={ref} className="py-20 lg:py-28 px-4 lg:px-8">
      <div className="w-full max-w-[1200px] mx-auto">
        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-[13px] font-semibold tracking-[0.18em] uppercase mb-3" style={{ color: BRAND_GREEN }}>
            Powerful Features
          </p>
          <h2 className="text-[32px] lg:text-[44px] font-bold leading-tight" style={{ color: "#0F172A" }}>
            AI That Understands{" "}
            <span style={{ color: BRAND_GREEN }}>Trade Documents</span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div
                key={idx}
                className={`p-6 rounded-2xl transition-all duration-700 hover:shadow-lg ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  transitionDelay: `${idx * 80}ms`,
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${feature.color}12` }}
                >
                  <Icon className="w-6 h-6" style={{ color: feature.color }} />
                </div>
                <h3 className="text-[17px] font-bold mb-2" style={{ color: "#0F172A" }}>{feature.title}</h3>
                <p className="text-[14px] leading-relaxed" style={{ color: "#64748B" }}>{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function UseCasesSection() {
  const { ref, isInView } = useInView()

  const useCases = [
    {
      type: "FTA Eligibility Check",
      question: "Is my product eligible for preferential duty under India-UAE CEPA?",
      answer: "Based on your product classification (HSN 8471.30) and origin criteria in the uploaded CEPA agreement, your product qualifies for 0% duty if you meet the 40% value addition rule...",
    },
    {
      type: "Document Requirements",
      question: "What certificates do I need to export pharmaceuticals to Brazil?",
      answer: "For pharmaceutical exports to Brazil, you'll need: ANVISA registration, Certificate of Pharmaceutical Product (CPP), GMP certificate from CDSCO, and Portuguese-translated product information...",
    },
    {
      type: "Restriction Check",
      question: "Can I export dual-use electronics to Russia?",
      answer: "Based on current DGFT notifications and international sanctions, items under ITC-HS 8471 series have export restrictions to Russia. You'll need a SCOMET license from DGFT...",
    },
  ]

  return (
    <section ref={ref} id="use-cases" className="py-20 lg:py-28 px-4 lg:px-8" style={{ background: "#0F172A" }}>
      <div className="w-full max-w-[1000px] mx-auto">
        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-[13px] font-semibold tracking-[0.18em] uppercase mb-3" style={{ color: BRAND_GREEN }}>
            Real-World Use Cases
          </p>
          <h2 className="text-[32px] lg:text-[44px] font-bold leading-tight text-white">
            Questions Exporters Ask Every Day
          </h2>
        </div>

        {/* Use Cases */}
        <div className="space-y-6">
          {useCases.map((useCase, idx) => (
            <div
              key={idx}
              className={`p-6 lg:p-8 rounded-2xl transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.1)",
                transitionDelay: `${idx * 150}ms`,
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="w-4 h-4" style={{ color: BRAND_GREEN }} />
                <span className="text-[12px] font-semibold uppercase tracking-wider" style={{ color: BRAND_GREEN }}>
                  {useCase.type}
                </span>
              </div>
              <h3 className="text-[18px] font-bold text-white mb-3">{useCase.question}</h3>
              <p className="text-[15px] leading-relaxed" style={{ color: "#94A3B8" }}>{useCase.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ComparisonSection() {
  const { ref, isInView } = useInView()

  const metrics = [
    { metric: "Research Time", manual: "4-6 hours", patram: "1.5 seconds" },
    { metric: "Availability", manual: "Business hours", patram: "24/7" },
    { metric: "Countries Covered", manual: "Your expertise", patram: "190+" },
    { metric: "Source Citations", manual: "Sometimes", patram: "Always" },
    { metric: "Document Analysis", manual: "Manual reading", patram: "AI-powered" },
    { metric: "Cost per Query", manual: "Consultant fees", patram: "Pennies" },
  ]

  return (
    <section ref={ref} className="py-20 lg:py-28 px-4 lg:px-8">
      <div className="w-full max-w-[900px] mx-auto">
        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-[13px] font-semibold tracking-[0.18em] uppercase mb-3" style={{ color: BRAND_GREEN }}>
            Why Patram AI
          </p>
          <h2 className="text-[32px] lg:text-[44px] font-bold leading-tight" style={{ color: "#0F172A" }}>
            Manual Research vs{" "}
            <span style={{ color: BRAND_GREEN }}>Patram AI</span>
          </h2>
        </div>

        {/* Comparison Table */}
        <div
          className={`rounded-2xl overflow-hidden transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ border: "1px solid #E2E8F0" }}
        >
          <table className="w-full">
            <thead>
              <tr style={{ background: "#F8FAFC" }}>
                <th className="text-left py-4 px-6 text-[14px] font-semibold" style={{ color: "#64748B" }}>Metric</th>
                <th className="text-left py-4 px-6 text-[14px] font-semibold" style={{ color: "#64748B" }}>Manual</th>
                <th className="text-left py-4 px-6 text-[14px] font-semibold" style={{ color: BRAND_GREEN }}>Patram AI</th>
              </tr>
            </thead>
            <tbody>
              {metrics.map((row, idx) => (
                <tr key={idx} style={{ borderTop: "1px solid #E2E8F0" }}>
                  <td className="py-4 px-6 text-[15px] font-medium" style={{ color: "#475569" }}>{row.metric}</td>
                  <td className="py-4 px-6 text-[15px]" style={{ color: "#0F172A" }}>{row.manual}</td>
                  <td className="py-4 px-6 text-[15px] font-semibold" style={{ color: BRAND_GREEN }}>{row.patram}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  const { ref, isInView } = useInView()

  return (
    <section
      ref={ref}
      className="py-20 lg:py-28 px-4 lg:px-8"
      style={{ background: "linear-gradient(180deg, #0F172A 0%, #1E293B 100%)" }}
    >
      <div className={`max-w-[800px] mx-auto text-center transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-[32px] lg:text-[44px] font-bold leading-tight text-white mb-4">
          Get Answers in Seconds, Not Hours
        </h2>
        <p className="text-[17px] leading-relaxed mb-10" style={{ color: "#94A3B8" }}>
          Stop wasting hours searching through documents. Let Patram AI be your always-on export intelligence advisor.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/book-demo"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-[16px] font-bold transition-all duration-300 hover:scale-105"
            style={{
              background: `linear-gradient(135deg, ${BRAND_GREEN}, ${BRAND_BLUE})`,
              color: "#FFFFFF",
              boxShadow: `0 4px 25px ${BRAND_GREEN}50`,
            }}
          >
            Start Free Trial
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/#products"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-[16px] font-semibold transition-all duration-300 hover:scale-105"
            style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "#FFFFFF" }}
          >
            Explore Other Products
          </Link>
        </div>
      </div>
    </section>
  )
}
