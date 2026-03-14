"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FooterLinks } from "@/components/footer-links"
import { WhatsAppButton } from "@/components/whatsapp-button"
import Image from "next/image"

export default function CompanyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* About Us Section */}
      <section className="pt-[120px] lg:pt-[140px] pb-8 px-4 lg:px-6" style={{ background: "linear-gradient(180deg, #E8F4FC 0%, #F0F9FF 100%)" }}>
        <div className="max-w-[1100px] mx-auto text-center">
          <h1 className="text-[32px] lg:text-[48px] font-extrabold leading-tight mb-4" style={{ color: "#0F172A" }}>
            About Us
          </h1>
          <p className="text-base lg:text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: "#475569" }}>
            Liquidmind AI is redefining trade finance and supply chain management with intelligent AI agents that automate 
            workflows, optimize liquidity, and enhance compliance. Designed for large and mid-sized enterprises, our AI-driven 
            products eliminate inefficiencies, improve decision-making, and scale effortlessly with business growth.
          </p>
        </div>
      </section>

      {/* Team Image */}
      <section className="px-4 lg:px-6 -mt-4">
        <div className="max-w-[1000px] mx-auto">
          <div className="relative h-[280px] lg:h-[400px] rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=600&fit=crop"
              alt="Liquidmind Team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-12 lg:py-16 px-4 lg:px-6" style={{ background: "#FFFFFF" }}>
        <div className="max-w-[1100px] mx-auto text-center">
          <h2 className="text-[28px] lg:text-[40px] font-extrabold mb-4" style={{ color: "#0F172A" }}>
            Our Mission
          </h2>
          <p className="text-base lg:text-lg max-w-4xl mx-auto leading-relaxed mb-6" style={{ color: "#475569" }}>
            Our mission is to empower enterprises with AI-driven intelligence to optimize global trade, finance, and compliance. 
            We build intelligent AI agents that automate complex workflows, enhance decision-making, and drive efficiency—
            helping businesses unlock new opportunities, reduce risk, and scale seamlessly in an evolving digital economy.
          </p>
          <div className="relative h-[200px] lg:h-[300px] max-w-[900px] mx-auto rounded-xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=500&fit=crop"
              alt="Stock Exchange Trading Floor"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Why Enterprises Choose Section */}
      <section className="py-12 lg:py-16 px-4 lg:px-6" style={{ background: "linear-gradient(180deg, #E8F4FC 0%, #F0F9FF 100%)" }}>
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-[28px] lg:text-[40px] font-extrabold text-center mb-8" style={{ color: "#0F172A" }}>
            Why Enterprises Choose<br />Liquidmind AI?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-5">
            {/* AI-Powered Efficiency */}
            <div className="p-6 rounded-2xl relative" style={{ background: "#FFFFFF", boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}>
              <div className="absolute -bottom-2 left-6 w-4 h-4 rotate-45" style={{ background: "#FFFFFF" }} />
              <h3 className="text-lg font-bold mb-2" style={{ color: "#0066CC" }}>AI-Powered Efficiency</h3>
              <p className="text-[14px] leading-relaxed" style={{ color: "#475569" }}>
                Automate complex trade, finance, and compliance workflows, reducing operational costs and improving accuracy.
              </p>
            </div>

            {/* Actionable Intelligence */}
            <div className="p-6 rounded-2xl relative" style={{ background: "#FFFFFF", boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}>
              <div className="absolute -bottom-2 left-6 w-4 h-4 rotate-45" style={{ background: "#FFFFFF" }} />
              <h3 className="text-lg font-bold mb-2" style={{ color: "#00A86B" }}>Actionable Intelligence</h3>
              <p className="text-[14px] leading-relaxed" style={{ color: "#475569" }}>
                Leverage AI-powered insights to optimize liquidity, manage risk, and enhance financial strategies.
              </p>
            </div>

            {/* Security & Compliance First */}
            <div className="p-6 rounded-2xl relative" style={{ background: "#FFFFFF", boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}>
              <div className="absolute -bottom-2 left-6 w-4 h-4 rotate-45" style={{ background: "#FFFFFF" }} />
              <h3 className="text-lg font-bold mb-2" style={{ color: "#0066CC" }}>Security & Compliance First</h3>
              <p className="text-[14px] leading-relaxed" style={{ color: "#475569" }}>
                Designed to meet stringent financial and regulatory standards, ensuring data integrity, fraud detection, and risk mitigation.
              </p>
            </div>

            {/* Seamless Integration */}
            <div className="p-6 rounded-2xl relative" style={{ background: "#FFFFFF", boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}>
              <div className="absolute -bottom-2 left-6 w-4 h-4 rotate-45" style={{ background: "#FFFFFF" }} />
              <h3 className="text-lg font-bold mb-2" style={{ color: "#00A86B" }}>Seamless Integration</h3>
              <p className="text-[14px] leading-relaxed" style={{ color: "#475569" }}>
                Connect effortlessly with ERP systems, banking platforms, and trade networks, ensuring smooth interoperability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Minds Section */}
      <section className="py-12 lg:py-16 px-4 lg:px-6" style={{ background: "#FFFFFF" }}>
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-[28px] lg:text-[40px] font-extrabold text-center mb-10" style={{ color: "#0F172A" }}>
            Meet the Minds Behind<br />Liquidmind AI
          </h2>

          {/* CEO - Naveen Athresh */}
          <div className="grid lg:grid-cols-[280px_1fr] gap-8 items-start mb-12 p-6 rounded-2xl" style={{ background: "linear-gradient(180deg, #E8F4FC 0%, #F0F9FF 100%)" }}>
            <div className="relative w-[260px] h-[320px] mx-auto lg:mx-0 rounded-xl overflow-hidden">
              <Image
                src="/images/founder-naveen.avif"
                alt="Naveen Athresh - Founder & CEO"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1" style={{ color: "#0066CC" }}>Naveen Athresh</h3>
              <p className="text-base font-semibold mb-3" style={{ color: "#00A86B" }}>Founder/CEO and Chief Product Officer (March 2024)</p>
              <p className="text-[14px] leading-relaxed mb-3" style={{ color: "#475569" }}>
                Naveen runs liquidmind.ai in the mixed reality, digital commerce/Fintech space. A TEDx speaker, Forbes India 2020 top 100 leader (the only leader selected from Rakuten), he has consistently built 200+ member led high performance teams from scratch, led cross geo Product Engineering and Data sciences teams. He has been regularly featured as a thought leader across leading business dailies. Most recently, Naveen was featured on the January 2024 featured section with an elite list of business people globally (mostly USA) on a Global business magazine (Business Today) and USAwire in an article called "Thought leaders making an impact in the world".
              </p>
              <a href="#" className="text-sm font-medium italic" style={{ color: "#00A86B" }}>
                Click here to know more about the founder
              </a>
            </div>
          </div>

          {/* CTO - Srivani */}
          <div className="p-6 rounded-2xl" style={{ background: "linear-gradient(180deg, #E8F4FC 0%, #F0F9FF 100%)" }}>
            <h3 className="text-xl font-bold mb-1" style={{ color: "#0066CC" }}>Srivani Dharwar Vijaya</h3>
            <p className="text-base font-semibold mb-3" style={{ color: "#0F172A" }}>Co Founder Chief Technology Officer (CTO)</p>
            <p className="text-[14px] leading-relaxed" style={{ color: "#475569" }}>
              Srivani has extensive technology architecture experience building/architecting major software systems across her 15+ year+ stints at Capgemini/iGate, Mindtree, Wipro and Infosys. She has a flair for hands-on programming (her specialties lie in enterprise software across SAP systems) and is a big believer in approaching problems from first principles and with a goal towards achieving the strategic objectives laid out. Srivani holds a Bachelors in Engineering degree (BE) from the Visvesvaraya Technology University (VTU) in Information science.
            </p>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-12 lg:py-16 px-4 lg:px-6" style={{ background: "#F8FAFC" }}>
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-[28px] lg:text-[40px] font-extrabold text-center mb-8" style={{ color: "#0F172A" }}>
            Recognition & <span className="text-[#0066CC]">Awards</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-5">
            <div className="rounded-xl overflow-hidden" style={{ background: "#FFFFFF", border: "1px solid #E2E8F0" }}>
              <div className="relative h-[280px] overflow-hidden">
                <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Aegis%20graham%20bell%20award-Io0nVjDGHyxbMH3GUnh9D2M8PtIHjM.jpg" alt="Aegis Graham Bell Award" fill className="object-cover object-center" />
              </div>
              <div className="p-5">
                <div className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase mb-2"
                  style={{ background: "linear-gradient(90deg, #FFD700, #FFA500)", color: "#0F172A" }}>FEBRUARY 2026</div>
                <h3 className="text-lg font-bold mb-1" style={{ color: "#0F172A" }}>Aegis Graham Bell Award</h3>
                <p className="text-[13px]" style={{ color: "#475569" }}>16th AGBA Innovation in Gen AI - CX, Sales & GTM Intelligence Category Winner</p>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden" style={{ background: "#FFFFFF", border: "1px solid #E2E8F0" }}>
              <div className="relative h-[280px] overflow-hidden">
                <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/karnataka%20elevate%20award-6VQmT2ahCZSsynysJCRN0mwxbYjAZp.jpg" alt="Karnataka Elevate Award" fill className="object-cover object-center" />
              </div>
              <div className="p-5">
                <div className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase mb-2"
                  style={{ background: "linear-gradient(90deg, #FFD700, #FFA500)", color: "#0F172A" }}>NOVEMBER 2025</div>
                <h3 className="text-lg font-bold mb-1" style={{ color: "#0F172A" }}>Karnataka Elevate 2025</h3>
                <p className="text-[13px]" style={{ color: "#475569" }}>Selected from 1,474+ applicants across all sectors</p>
              </div>
            </div>
          </div>

          {/* Partner Logos */}
          <div className="mt-10 text-center">
            <p className="text-base font-medium mb-6" style={{ color: "#64748B" }}>Backed by leading technology partners</p>
            <div className="flex justify-center items-center">
              <Image 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Gqt7incm1St02ycvVbXNCKm4NzQz1I.png" 
                alt="Partner Logos - NVIDIA Inception, AWS, Microsoft for Startups" 
                width={700} 
                height={90} 
                className="h-20 lg:h-24 w-auto object-contain" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Locate Us Section */}
      <section className="py-12 lg:py-16 px-4 lg:px-6" style={{ background: "#FFFFFF" }}>
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-[24px] lg:text-[32px] font-extrabold mb-6" style={{ color: "#00A86B" }}>
            Locate Us
          </h2>
          <div className="rounded-xl overflow-hidden" style={{ border: "1px solid #E2E8F0" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6849566261147!2d77.5486!3d12.9351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU2JzA2LjQiTiA3N8KwMzInNTUuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="350"
              style={{ border: 0 }}
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
