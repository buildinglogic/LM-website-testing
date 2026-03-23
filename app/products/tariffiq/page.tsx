"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FooterLinks } from "@/components/footer-links"
import { WhatsAppButton } from "@/components/whatsapp-button"
import Link from "next/link"
import { ArrowRight, Calculator, AlertTriangle, Clock, TrendingDown, RefreshCw, ChevronRight, Search, Database, Globe, Zap, BarChart3, Bell } from "lucide-react"
import { useState, useEffect, useRef } from "react"

const BRAND_BLUE_DARK = "#1B4F8A"
const BRAND_BLUE = "#0066CC"
const BRAND_GREEN = "#00A86B"

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

export default function TariffIQPage() {
  return (
    <main className="bg-white">
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <FeaturesSection />
      <HowItWorksSection />
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
          background: `radial-gradient(ellipse 80% 50% at 50% -20%, ${BRAND_BLUE_DARK}10 0%, transparent 50%)`,
        }}
      />

      <div className="w-full max-w-[1400px] mx-auto relative">
        {/* Breadcrumb */}
        <nav className={`flex items-center gap-2 mb-8 text-[14px] transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Link href="/" className="text-[#64748B] hover:text-[#0F172A] transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 text-[#CBD5E1]" />
          <Link href="/#products" className="text-[#64748B] hover:text-[#0F172A] transition-colors">Products</Link>
          <ChevronRight className="w-4 h-4 text-[#CBD5E1]" />
          <span style={{ color: BRAND_BLUE_DARK }}>TariffIQ</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ background: `${BRAND_BLUE_DARK}10`, border: `1px solid ${BRAND_BLUE_DARK}25` }}
            >
              <Calculator className="w-4 h-4" style={{ color: BRAND_BLUE_DARK }} />
              <span className="text-[13px] font-semibold" style={{ color: BRAND_BLUE_DARK }}>
                HSN Classification & Duty Calculator
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-[40px] lg:text-[56px] xl:text-[64px] font-extrabold leading-[1.08] tracking-[-0.03em] mb-6" style={{ color: "#0F172A" }}>
              Classify Once.
              <br />
              <span style={{ color: BRAND_BLUE_DARK }}>Maximize</span>
              <br />
              Every Incentive.
            </h1>

            {/* Description */}
            <p className="text-[17px] lg:text-[19px] leading-relaxed max-w-[520px] mb-8" style={{ color: "#475569" }}>
              Stop guessing HSN codes. TariffIQ uses AI to classify your products to 8-digit ITC-HS and instantly shows whether RoDTEP or Duty Drawback earns you more.
            </p>

            {/* Stats */}
            <div className="flex items-start gap-8 lg:gap-12 mb-10">
              {[
                { value: "95%", label: "Classification Accuracy" },
                { value: "< 3s", label: "Classification Time" },
                { value: "2x", label: "More Incentive Claims" },
              ].map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-[32px] lg:text-[40px] font-black tracking-tight leading-none" style={{ color: BRAND_BLUE_DARK }}>
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
                  background: `linear-gradient(135deg, ${BRAND_BLUE_DARK}, ${BRAND_BLUE})`,
                  color: "#FFFFFF",
                  boxShadow: `0 4px 25px ${BRAND_BLUE_DARK}40`,
                }}
              >
                Try TariffIQ Free
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-[16px] font-semibold transition-all duration-300 hover:scale-105"
                style={{ background: "#FFFFFF", border: `2px solid ${BRAND_BLUE_DARK}25`, color: BRAND_BLUE_DARK }}
              >
                See How It Works
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
                boxShadow: `0 25px 80px ${BRAND_BLUE_DARK}12, 0 10px 40px rgba(0,0,0,0.06)`,
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full" style={{ background: "#FFBD2E" }} />
                    <span className="w-3 h-3 rounded-full" style={{ background: BRAND_GREEN }} />
                  </div>
                  <p className="text-[15px] font-bold" style={{ color: "#0F172A" }}>TariffIQ Classification</p>
                </div>
              </div>

              {/* Product Description Input */}
              <div className="mb-6">
                <p className="text-[11px] font-semibold uppercase tracking-wider mb-2" style={{ color: "#94A3B8" }}>
                  Product Description
                </p>
                <div className="flex items-center gap-2 px-4 py-3 rounded-xl" style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}>
                  <Search className="w-4 h-4" style={{ color: "#94A3B8" }} />
                  <span className="text-[14px]" style={{ color: "#0F172A" }}>Basmati rice, aged 2 years, for export to UAE</span>
                  <span className="animate-pulse" style={{ color: BRAND_BLUE_DARK }}>|</span>
                </div>
              </div>

              {/* Classification Result */}
              <div className="p-4 rounded-xl mb-4" style={{ background: `${BRAND_BLUE_DARK}08`, border: `1px solid ${BRAND_BLUE_DARK}20` }}>
                <div className="flex items-center justify-between mb-3">
                  <p className="text-[12px] font-semibold uppercase tracking-wider" style={{ color: "#94A3B8" }}>Classification Result</p>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold" style={{ background: `${BRAND_BLUE_DARK}15`, color: BRAND_BLUE_DARK }}>95% Match</span>
                </div>
                <div className="flex items-center gap-4">
                  <div>
                    <p className="text-[11px]" style={{ color: "#94A3B8" }}>HSN Code</p>
                    <p className="text-[20px] font-mono font-bold" style={{ color: BRAND_BLUE_DARK }}>1006.30.20</p>
                  </div>
                  <div className="h-8 w-px" style={{ background: "#E2E8F0" }} />
                  <div>
                    <p className="text-[11px]" style={{ color: "#94A3B8" }}>Description</p>
                    <p className="text-[14px] font-medium" style={{ color: "#0F172A" }}>Semi-milled or wholly milled rice</p>
                  </div>
                </div>
              </div>

              {/* Incentive Comparison */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl" style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}>
                  <p className="text-[11px] font-semibold mb-1" style={{ color: "#94A3B8" }}>RoDTEP Rate</p>
                  <p className="text-[18px] font-bold" style={{ color: "#64748B" }}>0.5%</p>
                </div>
                <div className="p-3 rounded-xl" style={{ background: `${BRAND_GREEN}08`, border: `1px solid ${BRAND_GREEN}25` }}>
                  <p className="text-[11px] font-semibold mb-1" style={{ color: BRAND_GREEN }}>Duty Drawback</p>
                  <p className="text-[18px] font-bold" style={{ color: BRAND_GREEN }}>1.2%</p>
                  <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded" style={{ background: BRAND_GREEN, color: "white" }}>BETTER</span>
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
      icon: AlertTriangle,
      title: "Wrong HSN = Wrong Everything",
      description: "A single digit error in your HSN code can mean wrong duty rates, rejected drawback claims, and customs delays.",
      highlight: "Up to 5% of shipment value lost",
    },
    {
      icon: RefreshCw,
      title: "RoDTEP vs Drawback Confusion",
      description: "Most exporters pick one scheme without comparing. You could be leaving lakhs on the table every shipment.",
      highlight: "Missing 40-60% of potential incentives",
    },
    {
      icon: Clock,
      title: "Hours of Manual Research",
      description: "Searching through 21,000+ HSN codes and cross-referencing rate notifications is a full-time job.",
      highlight: "2-4 hours per classification",
    },
    {
      icon: TrendingDown,
      title: "Outdated Rate Information",
      description: "Rates change frequently. Using stale data means incorrect duty calculations and compliance risks.",
      highlight: "Surprise duties at customs",
    },
  ]

  return (
    <section ref={ref} className="py-20 lg:py-28 px-4 lg:px-8" style={{ background: "#FAFBFC" }}>
      <div className="w-full max-w-[1200px] mx-auto">
        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-[13px] font-semibold tracking-[0.18em] uppercase mb-3" style={{ color: "#DC2626" }}>
            The HSN Classification Problem
          </p>
          <h2 className="text-[32px] lg:text-[44px] font-bold leading-tight" style={{ color: "#0F172A" }}>
            Why Exporters Struggle with{" "}
            <span style={{ color: "#DC2626" }}>HSN Codes</span>
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
                      <AlertTriangle className="w-3.5 h-3.5" style={{ color: "#DC2626" }} />
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
      icon: Search,
      title: "AI-Powered Classification",
      description: "Describe your product in plain English. Our AI maps it to the exact 8-digit ITC-HS code with 95% accuracy.",
      color: BRAND_BLUE_DARK,
    },
    {
      icon: BarChart3,
      title: "RoDTEP vs Drawback Calculator",
      description: "Instantly compare both incentive schemes side-by-side. Know which one earns you more before you ship.",
      color: BRAND_GREEN,
    },
    {
      icon: Database,
      title: "Live Policy Database",
      description: "Always up-to-date export and import policies. Know if your product is Free, Restricted, or Prohibited.",
      color: "#F59E0B",
    },
    {
      icon: Calculator,
      title: "Duty Rate Lookup",
      description: "Real-time BCD, IGST, and Cess rates. Calculate exact landed costs for imports in seconds.",
      color: "#8B5CF6",
    },
    {
      icon: Globe,
      title: "Country-Specific Rules",
      description: "Different countries have different requirements. We show you exactly what you need for your destination.",
      color: "#EC4899",
    },
    {
      icon: Zap,
      title: "Instant Results",
      description: "From product description to complete classification in under 3 seconds. No more hours of research.",
      color: "#06B6D4",
    },
  ]

  return (
    <section ref={ref} className="py-20 lg:py-28 px-4 lg:px-8">
      <div className="w-full max-w-[1200px] mx-auto">
        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-[13px] font-semibold tracking-[0.18em] uppercase mb-3" style={{ color: BRAND_BLUE_DARK }}>
            Powerful Features
          </p>
          <h2 className="text-[32px] lg:text-[44px] font-bold leading-tight" style={{ color: "#0F172A" }}>
            Everything You Need for{" "}
            <span style={{ color: BRAND_BLUE_DARK }}>Perfect Classification</span>
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

function HowItWorksSection() {
  const { ref, isInView } = useInView()

  const steps = [
    { number: "01", title: "Describe Your Product", description: "Enter a plain-text description of your product. Our AI understands context, materials, and use cases." },
    { number: "02", title: "AI Classification", description: "TariffIQ searches 21,000+ HSN codes and uses semantic matching to find the perfect classification." },
    { number: "03", title: "Compare Incentives", description: "See RoDTEP vs Duty Drawback rates side-by-side. Know exactly which scheme maximizes your earnings." },
    { number: "04", title: "Export with Confidence", description: "Get the full picture: HSN code, duty rates, policy status, and required documents. Ship without surprises." },
  ]

  return (
    <section ref={ref} id="how-it-works" className="py-20 lg:py-28 px-4 lg:px-8" style={{ background: "#0F172A" }}>
      <div className="w-full max-w-[1000px] mx-auto">
        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-[13px] font-semibold tracking-[0.18em] uppercase mb-3" style={{ color: BRAND_BLUE_DARK }}>
            How TariffIQ Works
          </p>
          <h2 className="text-[32px] lg:text-[44px] font-bold leading-tight text-white">
            From Description to Classification in{" "}
            <span style={{ color: BRAND_BLUE }}>Seconds</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="space-y-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-6 p-6 rounded-2xl transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                transitionDelay: `${idx * 100}ms`,
              }}
            >
              <div
                className="text-[32px] font-black flex-shrink-0"
                style={{ color: BRAND_BLUE_DARK }}
              >
                {step.number}
              </div>
              <div>
                <h3 className="text-[18px] font-bold text-white mb-2">{step.title}</h3>
                <p className="text-[15px] leading-relaxed" style={{ color: "#94A3B8" }}>{step.description}</p>
              </div>
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
    { metric: "Classification Time", manual: "2-4 hours", tariffiq: "< 3 seconds" },
    { metric: "Accuracy", manual: "60-70%", tariffiq: "95%+" },
    { metric: "HSN Codes Searchable", manual: "Limited", tariffiq: "21,000+" },
    { metric: "RoDTEP/Drawback Comparison", manual: "Manual", tariffiq: "Automatic" },
    { metric: "Rate Updates", manual: "When you remember", tariffiq: "Real-time" },
    { metric: "Policy Alerts", manual: "None", tariffiq: "Instant" },
  ]

  return (
    <section ref={ref} className="py-20 lg:py-28 px-4 lg:px-8">
      <div className="w-full max-w-[900px] mx-auto">
        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-[13px] font-semibold tracking-[0.18em] uppercase mb-3" style={{ color: BRAND_BLUE_DARK }}>
            Why TariffIQ
          </p>
          <h2 className="text-[32px] lg:text-[44px] font-bold leading-tight" style={{ color: "#0F172A" }}>
            Manual Research vs{" "}
            <span style={{ color: BRAND_BLUE_DARK }}>TariffIQ</span>
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
                <th className="text-left py-4 px-6 text-[14px] font-semibold" style={{ color: BRAND_BLUE_DARK }}>TariffIQ</th>
              </tr>
            </thead>
            <tbody>
              {metrics.map((row, idx) => (
                <tr key={idx} style={{ borderTop: "1px solid #E2E8F0" }}>
                  <td className="py-4 px-6 text-[15px] font-medium" style={{ color: "#475569" }}>{row.metric}</td>
                  <td className="py-4 px-6 text-[15px]" style={{ color: "#0F172A" }}>{row.manual}</td>
                  <td className="py-4 px-6 text-[15px] font-semibold" style={{ color: BRAND_GREEN }}>{row.tariffiq}</td>
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
          Stop Leaving Money on the Table
        </h2>
        <p className="text-[17px] leading-relaxed mb-10" style={{ color: "#94A3B8" }}>
          Every day you classify manually is another day of missed incentives and compliance risk. Start using TariffIQ today.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/book-demo"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-[16px] font-bold transition-all duration-300 hover:scale-105"
            style={{
              background: `linear-gradient(135deg, ${BRAND_BLUE_DARK}, ${BRAND_BLUE})`,
              color: "#FFFFFF",
              boxShadow: `0 4px 25px ${BRAND_BLUE_DARK}50`,
            }}
          >
            Get Started Free
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
