"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FooterLinks } from "@/components/footer-links"
import { WhatsAppButton } from "@/components/whatsapp-button"
import Image from "next/image"
import Link from "next/link"

const whyCards = [
  {
    title: "AI-Powered Efficiency",
    description: "Automate complex trade, finance, and compliance workflows, reducing operational costs and improving accuracy.",
    color: "#0066CC",
    lightBg: "#EFF6FF",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    title: "Actionable Intelligence",
    description: "Leverage AI-powered insights to optimise liquidity, manage risk, and enhance financial strategies.",
    color: "#00A86B",
    lightBg: "#ECFDF5",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
  },
  {
    title: "Security & Compliance First",
    description: "Designed to meet stringent financial and regulatory standards, ensuring data integrity, fraud detection, and risk mitigation.",
    color: "#0066CC",
    lightBg: "#EFF6FF",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
  {
    title: "Seamless Integration",
    description: "Connect effortlessly with ERP systems, banking platforms, and trade networks, ensuring smooth interoperability.",
    color: "#00A86B",
    lightBg: "#ECFDF5",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
      </svg>
    ),
  },
]

export default function CompanyPage() {
  return (
    <main className="min-h-screen" style={{ background: "#FFFFFF" }}>
      <Navigation />

      {/* ── Hero / About Us ── */}
      <section className="pt-[140px] pb-10 px-5 lg:px-8 text-center" style={{ background: "#FFFFFF" }}>
        <div className="max-w-[1100px] mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)" }} />
            <span className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#94A3B8" }}>Who We Are</span>
            <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(270deg, #0066CC, #00A86B)" }} />
          </div>
          <h1 className="text-[26px] sm:text-[36px] lg:text-[48px] font-extrabold leading-tight mb-5" style={{ color: "#0F172A" }}>
            About{" "}
            <span className="bg-gradient-to-r from-[#0066CC] to-[#00A86B] bg-clip-text text-transparent">
              Liquidmind AI
            </span>
          </h1>
          <p className="text-[13px] sm:text-[15px] lg:text-base max-w-3xl mx-auto leading-relaxed" style={{ color: "#475569" }}>
            Liquidmind AI is redefining trade finance and supply chain management with intelligent AI agents that automate
            workflows, optimise liquidity, and enhance compliance. Designed for large and mid-sized enterprises, our AI-driven
            products eliminate inefficiencies, improve decision-making, and scale effortlessly with business growth.
          </p>
        </div>
      </section>

      {/* Team photo */}
      <section className="px-5 lg:px-8 pb-10">
        <div className="max-w-[1000px] mx-auto">
          <div className="relative h-[200px] sm:h-[300px] lg:h-[400px] rounded-2xl overflow-hidden" style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.08)" }}>
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=600&fit=crop"
              alt="Liquidmind Team"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── Our Mission ── */}
      <section id="mission" className="py-10 lg:py-16 px-5 lg:px-8" style={{ background: "#F8FAFC" }}>
        <div className="max-w-[1100px] mx-auto">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)" }} />
            <span className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#94A3B8" }}>Purpose</span>
            <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(270deg, #0066CC, #00A86B)" }} />
          </div>
          <h2 className="text-[22px] sm:text-[30px] lg:text-[40px] font-extrabold text-center mb-4" style={{ color: "#0F172A" }}>
            Our{" "}
            <span className="bg-gradient-to-r from-[#0066CC] to-[#00A86B] bg-clip-text text-transparent">Mission</span>
          </h2>
          <p className="text-[13px] sm:text-[15px] lg:text-base max-w-3xl mx-auto text-center leading-relaxed mb-8" style={{ color: "#475569" }}>
            Our mission is to empower enterprises with AI-driven intelligence to optimise global trade, finance, and compliance.
            We build intelligent AI agents that automate complex workflows, enhance decision-making, and drive efficiency —
            helping businesses unlock new opportunities, reduce risk, and scale seamlessly in an evolving digital economy.
          </p>
          <div className="relative h-[180px] sm:h-[240px] lg:h-[300px] max-w-[900px] mx-auto rounded-2xl overflow-hidden" style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.08)" }}>
            <Image
              src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=500&fit=crop"
              alt="Mission"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section id="why-choose-us" className="py-10 lg:py-16 px-5 lg:px-8" style={{ background: "#FFFFFF" }}>
        <div className="max-w-[1100px] mx-auto">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)" }} />
            <span className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#94A3B8" }}>Differentiators</span>
            <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(270deg, #0066CC, #00A86B)" }} />
          </div>
          <h2 className="text-[22px] sm:text-[30px] lg:text-[40px] font-extrabold text-center mb-8" style={{ color: "#0F172A" }}>
            Why Enterprises Choose{" "}
            <span className="bg-gradient-to-r from-[#0066CC] to-[#00A86B] bg-clip-text text-transparent">Liquidmind AI?</span>
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 lg:gap-5">
            {whyCards.map((card, idx) => (
              <div
                key={idx}
                className="group p-5 lg:p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ background: "#FFFFFF", border: "1px solid #E2E8F0", boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}
              >
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: card.lightBg, color: card.color }}>
                  {card.icon}
                </div>
                <div className="h-0.5 w-8 rounded-full mb-3" style={{ background: `linear-gradient(90deg, ${card.color}, transparent)` }} />
                <h3 className="text-[15px] lg:text-[16px] font-bold mb-2" style={{ color: card.color }}>{card.title}</h3>
                <p className="text-[13px] leading-relaxed" style={{ color: "#475569" }}>{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Meet the Minds ── */}
      <section id="team" className="py-10 lg:py-16 px-5 lg:px-8" style={{ background: "#F8FAFC" }}>
        <div className="max-w-[1100px] mx-auto">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)" }} />
            <span className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#94A3B8" }}>Leadership</span>
            <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(270deg, #0066CC, #00A86B)" }} />
          </div>
          <h2 className="text-[22px] sm:text-[30px] lg:text-[40px] font-extrabold text-center mb-8" style={{ color: "#0F172A" }}>
            Minds Behind{" "}
            <span className="bg-gradient-to-r from-[#0066CC] to-[#00A86B] bg-clip-text text-transparent">Liquidmind AI</span>
          </h2>

          {/* CEO */}
          <div className="rounded-2xl overflow-hidden mb-4" style={{ background: "#FFFFFF", border: "1px solid #E2E8F0", boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
            <div className="flex flex-col sm:flex-row gap-0">
              <div className="relative w-full sm:w-[220px] lg:w-[280px] h-[380px] sm:h-[320px] lg:h-[360px] flex-shrink-0">
                <Image
                  src="/images/founder-naveen.avif"
                  alt="Naveen Athresh - Founder & CEO"
                  fill
                  priority
                  className="object-cover"
                  style={{ objectPosition: "center 15%" }}
                />
              </div>
              <div className="p-5 lg:p-7 flex flex-col justify-center">
                <h3 className="text-[18px] lg:text-[20px] font-bold mb-1" style={{ color: "#0066CC" }}>Naveen Athresh</h3>
                <p className="text-[13px] font-semibold mb-3" style={{ color: "#00A86B" }}>Founder / CEO & Chief Product Officer</p>
                <p className="text-[13px] leading-relaxed mb-3" style={{ color: "#475569" }}>
                  TEDx speaker, Forbes India 2020 top 100 leader, Naveen has built 200+ member high-performance teams and led
                  cross-geo Product Engineering and Data Science teams. Featured in Business Today and USAwire as a global thought
                  leader making an impact in the world.
                </p>
                <Link href="/company/founder" className="text-[13px] font-semibold" style={{ color: "#00A86B" }}>
                  Click here to know more →
                </Link>
              </div>
            </div>
          </div>

          {/* CTO */}
          <div className="p-5 lg:p-7 rounded-2xl" style={{ background: "#FFFFFF", border: "1px solid #E2E8F0", boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
            <h3 className="text-[18px] lg:text-[20px] font-bold mb-1" style={{ color: "#0066CC" }}>Srivani Dharwar Vijaya</h3>
            <p className="text-[13px] font-semibold mb-3" style={{ color: "#0F172A" }}>Co-Founder & Chief Technology Officer</p>
            <p className="text-[13px] leading-relaxed" style={{ color: "#475569" }}>
              With 15+ years at Capgemini, Mindtree, Wipro, and Infosys, Srivani brings deep technology architecture experience
              in enterprise software and SAP systems. She approaches every problem from first principles with a focus on
              strategic objectives. Holds a BE from Visvesvaraya Technology University (VTU) in Information Science.
            </p>
          </div>
        </div>
      </section>

      {/* ── Awards ── */}
      <section className="py-10 lg:py-16 px-5 lg:px-8" style={{ background: "#FFFFFF" }}>
        <div className="max-w-[1100px] mx-auto">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)" }} />
            <span className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#94A3B8" }}>Recognition</span>
            <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(270deg, #0066CC, #00A86B)" }} />
          </div>
          <h2 className="text-[22px] sm:text-[30px] lg:text-[40px] font-extrabold text-center mb-8" style={{ color: "#0F172A" }}>
            Recognition &{" "}
            <span className="bg-gradient-to-r from-[#0066CC] to-[#00A86B] bg-clip-text text-transparent">Awards</span>
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 lg:gap-5 mb-10">
            <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid #E2E8F0", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
              <div className="relative h-[200px] sm:h-[240px] overflow-hidden">
                <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Aegis%20graham%20bell%20award-Io0nVjDGHyxbMH3GUnh9D2M8PtIHjM.jpg" alt="Aegis Graham Bell Award" fill className="object-cover object-center" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)" }} />
                <span className="absolute bottom-3 left-3 px-2.5 py-0.5 rounded-full text-[11px] font-bold text-white" style={{ background: "rgba(0,102,204,0.9)" }}>FEBRUARY 2026</span>
              </div>
              <div className="p-4" style={{ background: "#FFFFFF" }}>
                <h3 className="text-[15px] font-bold mb-1" style={{ color: "#0F172A" }}>Aegis Graham Bell Award</h3>
                <p className="text-[12px]" style={{ color: "#64748B" }}>16th AGBA — Gen AI CX, Sales & GTM Intelligence Category Winner</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid #E2E8F0", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
              <div className="relative h-[200px] sm:h-[240px] overflow-hidden">
                <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/karnataka%20elevate%20award-6VQmT2ahCZSsynysJCRN0mwxbYjAZp.jpg" alt="Karnataka Elevate" fill className="object-cover object-center" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)" }} />
                <span className="absolute bottom-3 left-3 px-2.5 py-0.5 rounded-full text-[11px] font-bold text-white" style={{ background: "rgba(0,102,204,0.9)" }}>NOVEMBER 2025</span>
              </div>
              <div className="p-4" style={{ background: "#FFFFFF" }}>
                <h3 className="text-[15px] font-bold mb-1" style={{ color: "#0F172A" }}>Karnataka Elevate 2025</h3>
                <p className="text-[12px]" style={{ color: "#64748B" }}>Selected from 1,474+ applicants — up to ₹50 lakh non-dilutive grant</p>
              </div>
            </div>
          </div>

          {/* Partner logos */}
          <div className="text-center">
            <p className="text-[13px] font-medium mb-4" style={{ color: "#64748B" }}>Backed by leading technology partners</p>
            <div className="flex justify-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Gqt7incm1St02ycvVbXNCKm4NzQz1I.png"
                alt="NVIDIA Inception, AWS, Microsoft for Startups"
                width={700}
                height={90}
                className="h-14 sm:h-20 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Map ── */}
      <section id="map" className="py-10 lg:py-16 px-5 lg:px-8" style={{ background: "#F8FAFC" }}>
        <div className="max-w-[1100px] mx-auto">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)" }} />
            <span className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#94A3B8" }}>Location</span>
            <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(270deg, #0066CC, #00A86B)" }} />
          </div>
          <h2 className="text-[22px] sm:text-[28px] lg:text-[36px] font-extrabold text-center mb-2" style={{ color: "#0F172A" }}>
            Find{" "}
            <span className="bg-gradient-to-r from-[#0066CC] to-[#00A86B] bg-clip-text text-transparent">Us</span>
          </h2>
          <p className="text-[13px] text-center mb-6" style={{ color: "#64748B" }}>
            Banashankari III Stage, Kathriguppe, Bangalore, Karnataka — 560085
          </p>
          <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid #E2E8F0", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6849566261147!2d77.5486!3d12.9351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU2JzA2LjQiTiA3N8KwMzInNTUuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="320"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <FooterLinks />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
