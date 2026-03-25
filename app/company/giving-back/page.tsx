"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FooterLinks } from "@/components/footer-links"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { useInView } from "react-intersection-observer"

interface GivingEvent {
  date: string
  title: string
  organization: string
  description: string
}

const events: GivingEvent[] = [
  { date: "May 2025", title: "IIFT Kakinada — TEDx Speaker", organization: "IIFT Kakinada", description: "Keynote on \"Tech, AI & Entrepreneurship: Giving Perspective to Young Future Business Leaders\" highlighting how rising AI tools are reshaping business models for young entrepreneurs." },
  { date: "Feb 2025", title: "Design Thinking & Product Management", organization: "BITS Pilani", description: "Delivered a talk on Design Thinking and Product Management. Naveen's experience at PayU, Rakuten, and Flipkart amazed students — his entrepreneurial journey stands as a beacon of BITS values." },
  { date: "Jan 2025", title: "IIT Madras — Keynote Speaker", organization: "IIT Madras & IITM Research Park", description: "2-hour session with ~40 startup founders on \"Design Thinking, Product, and Platform Thinking\", emphasising collaborative, bi-directional dialogue over passive listening." },
  { date: "Dec 2024", title: "IIMV — Keynote Speaker", organization: "IIM Visakhapatnam", description: "Keynote on \"Future of Digital Trust: The New Business Imperative\" at IIM Visakhapatnam, emphasising digital trust as a critical foundation for AI and quantum-first futures." },
  { date: "Nov 2024", title: "NMIT — GenAI Judge & Silver Sponsor", organization: "NMIT", description: "Silver sponsor and GenAI judge across all finale tracks including GenAI, Quantum Computing, EV/Sustainable Energy, and Web 3.0." },
  { date: "Aug 2024", title: "MIT Media Lab — Co-Panelist", organization: "IISc Bengaluru", description: "Co-panelled with Prof. Ramesh Raskar from MIT Media Labs at IISc Bengaluru — AI/ML & Deep Learning conference on AI applied to solving societal problems across industries." },
  { date: "Mar 2024", title: "Board Member — EPIC", organization: "Institute of Product Leadership", description: "Helping shape curriculum and mentor students to create 10,000 product/platform thinkers from the ground up." },
  { date: "Jan 2024", title: "Speaker — Science and Technology", organization: "IIFT Kakinada", description: "Talk on AI/ML impact across industries and how to ingrain AI into product/platform thinking to IIFT's IPM cohort — a unique blend of MBA-Analytics and MBA (International Business)." },
  { date: "Aug 2023", title: "Speaker — Product/Platform Thinking", organization: "IIT Kharagpur (VGSoM)", description: "2-hour session to a 200-member MBA cohort at IIT-KGP on Product and Platform Thinking." },
  { date: "Feb 2023", title: "TEDx Speaker — 150K+ Views", organization: "UVCE Bengaluru", description: "TEDx talk on innovation, life journey, and choices — crossed 150,000 views in under 2 months of release." },
  { date: "Aug 2022", title: "Panel — AI/ML Digital Transformation", organization: "XLRI Jamshedpur", description: "AI/ML conclave with 200+ participants on the future of digital transformation through Deep Learning with acclaimed CXOs from peer companies." },
  { date: "Mar 2022", title: "Speaker — AI/ML & Digital Transformation", organization: "IIT Bombay (SJMSOM)", description: "Talk on \"Revolutionizing Business Landscape with AI and Digital Transformation\" to over 200 students." },
  { date: "Aug 2021", title: "Panel Member", organization: "SIBM Bengaluru", description: "Panel discussion with leaders from Uber, PayU, Amazon, and other top companies." },
  { date: "Jul 2021", title: "Speaker — Product Management", organization: "IIM Sirmaur", description: "Spoke to 200+ MBA students on why a career in product management is rewarding — awareness grew from 2% in 2019 to ~25% in 2021 through campus evangelism." },
  { date: "Jun 2020", title: "Startup Panelist / Mentor", organization: "Conquest, BITS Pilani", description: "India's first student-run startup accelerator — mentored top 10 startups over 6 weeks through mentorship sessions and the Grand Finale pitch before India's top investment firms." },
  { date: "Oct 2020", title: "Business Mentor", organization: "Systemix — IIFT", description: "World Statistics Day talk to 200+ MBA (IB) students on data management, ethical usage, personalisation, privacy acts, trust, and the role of AI in closing the trust gap." },
  { date: "Jun 2020", title: "Speaker / Product Management Mentor", organization: "SPJIMR Mumbai", description: "Delivered a session on Product/Platform thinking across various areas to the 2021 MBA cohort." },
  { date: "Feb 2020", title: "Speaker/Mentor — Product/Platform Thinking", organization: "IIFT New Delhi", description: "Talk to the 2019–2021 MBA (International Business) batch at IIFT Delhi, attended by ~200 students. Ongoing mentor on the IIFT Systemix network." },
  { date: "Sep 2019", title: "Speaker — Product Thinking / Panelist", organization: "IIM Sirmaur (Udgam)", description: "\"Brand Engagement and Customer Loyalty — How far can it be sustained using Data Insights?\" addressing students on data monetisation and customer touchpoints." },
  { date: "Jul 2019", title: "Speaker — Product Thinking, Vivaan 2019", organization: "IIFT Strategy & Analytics Summit", description: "Panel and talk on the value of data at IIFT's Strategy & Analytics Summit Vivaan 2019." },
  { date: "Jul 2019", title: "Speaker at NASSCOM", organization: "NASSCOM DeepTech", description: "Talk on Product Management and Product/Platform thinking to the DeepTech community." },
  { date: "Jan 2019", title: "Product Management Specialist", organization: "ISPMA e.V.", description: "Talk on Product Platform Thinking with Tathagat Verma, chaired by IIM Bengaluru reps and ISPMA Chairman, to over 150 working executives." },
  { date: "Nov 2018 – Jan 2020", title: "Mentor / Panelist", organization: "UVCE Bengaluru", description: "Volunteer speaker, mentor, and panelist across Inspiron 19, 20 and Impetus 19, 20. Also supporting renovation of UVCE to restore its heritage." },
  { date: "May 2018", title: "Startup / Product Management Mentor", organization: "IAMAI — Mobile10X", description: "Regular mentor at the GoK Mobile10X Startup Hub — supported by the Government of Karnataka — on product thinking, monetisation, and mentorship for early-stage startups." },
  { date: "Apr 2018", title: "Member", organization: "INDIAGLOCAL", description: "Collaborative not-for-profit think tank to enable Indian entrepreneurs to grow globally — building a network of Indian entrepreneurial communities worldwide." },
  { date: "Apr 2018", title: "Panelist / Product Management Mentor", organization: "Bootstrapped Labs, IIM Bangalore", description: "Panel evaluating startups and talk on Product/Platform Thinking to IIM-B's NSRCEL audience — a video that went viral with 20K+ views in under 24 hours." },
  { date: "Oct 2016 – May 2017", title: "Industry Mentor — Product Management", organization: "UpGrad.com", description: "Mentored budding product managers on UpGrad's platform to raise the bar and build the next stream of product talent." },
  { date: "Apr 2013", title: "Elite Member — Product Management", organization: "Institute of Product Leadership", description: "Practitioner shaping curriculum and mentoring students with the goal to build the next billion-dollar product company out of India." },
]

function EventCard({ event, index }: { event: GivingEvent; index: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <div
      ref={ref}
      className={`flex gap-3 sm:gap-4 transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      style={{ transitionDelay: `${Math.min(index * 40, 200)}ms` }}
    >
      {/* Timeline spine */}
      <div className="flex flex-col items-center flex-shrink-0" style={{ width: 16 }}>
        <div
          className="w-3 h-3 rounded-full border-2 border-white flex-shrink-0 mt-1"
          style={{ background: "linear-gradient(135deg, #0066CC, #00A86B)", boxShadow: "0 0 0 3px #0066CC25" }}
        />
        <div className="flex-1 w-px mt-1" style={{ background: "#0066CC20", minHeight: 24 }} />
      </div>

      {/* Card */}
      <div
        className="flex-1 mb-4 p-4 rounded-2xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
        style={{ background: "#FFFFFF", border: "1px solid #E2E8F0", boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}
      >
        <span
          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold mb-2"
          style={{ background: "#EFF6FF", color: "#0066CC" }}
        >
          {event.date}
        </span>
        <h3 className="text-[13px] sm:text-[14px] font-bold mb-0.5 leading-snug" style={{ color: "#0F172A" }}>
          {event.title}
        </h3>
        <p className="text-[12px] font-semibold mb-2" style={{ color: "#00A86B" }}>
          {event.organization}
        </p>
        <p className="text-[12px] leading-relaxed" style={{ color: "#64748B" }}>
          {event.description}
        </p>
      </div>
    </div>
  )
}

export default function GivingBackPage() {
  return (
    <main className="min-h-screen" style={{ background: "#FFFFFF" }}>
      <Navigation />

      {/* Hero */}
      <section className="pt-[80px] pb-8 px-5 lg:px-8 text-center" style={{ background: "#FFFFFF" }}>
        <div className="max-w-[900px] mx-auto">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)" }} />
            <span className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#94A3B8" }}>Community</span>
            <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(270deg, #0066CC, #00A86B)" }} />
          </div>
          <h1 className="text-[26px] sm:text-[34px] lg:text-[48px] font-extrabold leading-tight mb-4" style={{ color: "#0F172A" }}>
            Giving{" "}
            <span className="bg-gradient-to-r from-[#0066CC] to-[#00A86B] bg-clip-text text-transparent">Back</span>
          </h1>
          <p className="text-[13px] sm:text-[15px] max-w-2xl mx-auto leading-relaxed" style={{ color: "#475569" }}>
            At Liquidmind AI, we believe in giving back to the community that has nurtured us. Our founder, Naveen Athresh,
            has been actively involved in mentoring, speaking, and supporting educational institutions and startups across India.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-8 lg:py-14 px-5 lg:px-8" style={{ background: "#F8FAFC" }}>
        <div className="max-w-[760px] mx-auto">
          {events.map((event, idx) => (
            <EventCard key={idx} event={event} index={idx} />
          ))}
        </div>
      </section>

      {/* Felicitations */}
      <section className="py-10 lg:py-14 px-5 lg:px-8" style={{ background: "#FFFFFF" }}>
        <div className="max-w-[760px] mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)" }} />
            <span className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#94A3B8" }}>Felicitations</span>
            <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(270deg, #0066CC, #00A86B)" }} />
          </div>
          <div className="p-5 rounded-2xl" style={{ background: "#FFFFFF", border: "1px solid #E2E8F0", boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
            <div className="h-0.5 w-8 rounded-full mb-3" style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)" }} />
            <h3 className="text-[15px] font-bold mb-2" style={{ color: "#0066CC" }}>
              Recognized at Elevate 2019 — Ministry of IT/BT Karnataka
            </h3>
            <p className="text-[13px] leading-relaxed" style={{ color: "#475569" }}>
              Naveen Athresh was recognized for his contributions to the startup ecosystem and product management
              community in Karnataka at the prestigious Elevate 2019 event organized by the Ministry of IT/BT,
              Government of Karnataka.
            </p>
          </div>
        </div>
      </section>

      <FooterLinks />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
