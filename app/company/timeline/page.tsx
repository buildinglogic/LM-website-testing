"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { useInView } from "react-intersection-observer"

interface TimelineEvent {
  date: string
  title: string
  description: string
  image?: string
  side: "left" | "right"
  objectPosition?: string
  objectFit?: "cover" | "contain"
}

const timelineData: { year: string; events: TimelineEvent[] }[] = [
  {
    year: "2026",
    events: [
      {
        date: "February 2026",
        title: "Aegis Graham Bell Award",
        description: "Honoured with the prestigious Aegis Graham Bell Award in the Gen AI CX Sales GTM Intelligence category, recognising our work in transforming international trade through Generative AI.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Aegis%20graham%20bell%20award-FNygvu53TozfXV9JCyrg96GfgIzNos.jpg",
        side: "left",
      },
      {
        date: "February 2026",
        title: "India AI Summit 2026",
        description: "Exhibited at India AI Summit 2026 at Bharat Mandapam, Delhi — showcasing TradeGuard AI, Patram AI, and TariffIQ to enterprises, government delegations and DGFT representatives.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2025%20ai%20summit-yxUYFefS28uNVp5V4qsmnZJpm01FTv.avif",
        side: "right",
      },
    ],
  },
  {
    year: "2025",
    events: [
      {
        date: "November 2025",
        title: "Karnataka Elevate 2025 Grant Winner",
        description: "Winner among 180 startups chosen from 1,474+ applicants. Awarded by Hon. IT/BT Minister Shri Priyank Kharge at Bengaluru Tech Summit — non-dilutive grant of up to ₹50 lakhs.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nov%202025%20elevate-r4QoR6tshopsBHgiYBFyzqMdOQoqG4.avif",
        side: "left",
      },
      {
        date: "May 2025",
        title: "TEDxIT Kakinada Keynote",
        description: "Our Founder delivered a keynote on 'Tech, AI & Entrepreneurship: Giving Perspective to Young Future Business Leaders', highlighting how AI is reshaping business models.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/may%202025%20tedx-k41OwTXtfh2Vc9JjwOdR5Z26LXgHDn.avif",
        side: "right",
      },

      {
        date: "January 2025",
        title: "Economic Times SME Regional Summit",
        description: "Participated in an invite-only conclave promoting Make in India and empowering MSMEs with financial inclusion.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jan%202025%20economic%20times-fgEkvVQTeTcAgCd2HaD0ds8NkLSAhy.avif",
        side: "left",
      },
      {
        date: "January 2025",
        title: "National Conference on Strategic Trade Controls",
        description: "Two-day workshop at NCSTC (16–17 January 2025) covering strategic trade control policies and compliance frameworks.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NCSTC-25BabmS9B176JSSEVRiMsvgsVw7nxi.avif",
        side: "right",
      },
      {
        date: "January 2025",
        title: "MIT Media Lab's E79 Hub Workshop",
        description: "Joined MIT Media Lab's E79 Hub workshop with Prof. Ramesh Raskar, blending deep tech with India's cultural identity to foster groundbreaking ventures.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/B79Hub-qDjM2nLu3UIzLsUVbsY8f63PQ5woHd.avif",
        side: "left",
      },
    ],
  },
  {
    year: "2024",
    events: [
      {
        date: "December 2024",
        title: "IIM Vizag's Vriddhi 6.0",
        description: "Our founder delivered 'Future of Digital Trust: The New Business Imperative' at IIM Vizag's Vriddhi 6.0 on 8th December 2024.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IIMV-YrAcsjtLD2QcmMRKzSOY0hNMbjdVJQ.avif",
        side: "left",
      },
      {
        date: "December 2024",
        title: "In-house AI Hackathon",
        description: "A 5-day in-house hackathon (7–12 Dec) tackling MSME challenges with innovative AI solutions — a celebration of creativity and high energy.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nmit-vhDQ7JEWcdaO9MZ3sTOSqr3GM2Sa2N.avif",
        side: "right",
      },
      {
        date: "November 2024",
        title: "NVIDIA Inception Program",
        description: "Joined NVIDIA Inception Program to accelerate development with go-to-market support, training, and access to NVIDIA's cutting-edge technology resources.",
        side: "left",
      },
      {
        date: "November 2024",
        title: "GenAI Judge at Innovation Summit",
        description: "Silver sponsor and our Founder served as GenAI Judge across tracks including GenAI, Quantum computing, EV/sustainable energy, and Web 3.0.",
        side: "right",
      },
      {
        date: "August 2024",
        title: "AI/ML & Deep Learning Conference at IISc",
        description: "Co-panelled with Prof Ramesh Raskar (MIT Media Labs) at IISc Bengaluru on AI applied to solving societal problems across industries.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aug%202024-Mdbs5XxonZB2AIN3WcznrrjPE7FSMK.avif",
        side: "left",
      },
      {
        date: "March 2024",
        title: "USA Wire Feature",
        description: "Our founder's article featured in USAWire in 'Thought Leaders Making An Impact in The World'.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/usa%20wire-CRtYumAqS8UVWABn03KljPlmfOkgHV.avif",
        side: "right",
      },
      {
        date: "January 2024",
        title: "Business Today Feature",
        description: "Naveen Athresh featured in Business Today's 'Thought Leaders making an Impact in the world' alongside global executives, US Navy officers, and senior VCs.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/business%20today-tHjXLY0PmD3ZqGFRekMSqu5C2rYf91.avif",
        side: "left",
      },
    ],
  },
  {
    year: "2023",
    events: [
      {
        date: "October 2023",
        title: "AI-ML Systems Workshop",
        description: "Our founder attended the AI-ML Systems Workshop (23–28 Oct 2023) in Bengaluru on AI applied to real-world systems.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AI-ML-workshop-october-iB6AuJdQugvLWxGP4tjmJsqwxwZ5cm.avif",
        side: "right",
      },
      {
        date: "July 2023",
        title: "TEDx Talk — 135,000+ Views",
        description: "Our founder's TEDx talk crossed 135,000 views in under 2 months, amplifying Liquidmind's vision to a global audience.",
        side: "left",
      },
      {
        date: "June 2023",
        title: "Strategic Pivot to Trade Finance",
        description: "Liquidmind pivots to solving pain points at the intersection of Fintech, Digital Commerce, and Export/Import Trade Finance using AI/ML.",
        side: "right",
      },
      {
        date: "2023",
        title: "IIT Madras Guest Lecture",
        description: "Our founder spoke to BTech students at IIT Madras on user research, design thinking, and product thinking — and toured their deep tech labs.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IITM-4A2CoTxVhn46nekDfGCvq6c4c2HJeY.avif",
        side: "left",
      },
    ],
  },
  {
    year: "2018",
    events: [
      {
        date: "August 2018",
        title: "Startup India Recognition",
        description: "LIQUIDMIND® formally registered as a startup by DIPP under the Startup India initiative.",
        side: "right",
      },
      {
        date: "January 2018",
        title: "KITES Incubation at IIFT Delhi",
        description: "Incubated under KITES at the Indian Institute of Foreign Trade, Delhi — a division of the Ministry of Commerce, Government of India.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jan%202018-vVdBk9wmvB2ZcERUWMTeMHD91AZDjC.avif",
        side: "left",
      },
      {
        date: "2017–present",
        title: "IP Forum Participation",
        description: "Ongoing commitment to IP rights — patents, trademarks, copyrights. Regular participants at the World IP Forum and FICCI.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ip_conference_2_720-Q0Ul0J3esybmnVMG8sCK2NLoQarHfC.avif",
        side: "right",
      },
    ],
  },
  {
    year: "2017",
    events: [
      {
        date: "2017",
        title: "VR/Mixed Reality Demo at IIFT Delhi",
        description: "Demoed our Virtual/Mixed Reality product for the EdTech vertical at the Indian Institute of Foreign Trade, Delhi.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iift_vrlively_720-n9ZVkthW2YWWG8WZ6abMTBXbRAYOd8.avif",
        side: "left",
      },
      {
        date: "May 2017",
        title: "TechCrunch Disrupt, New York",
        description: "Demoed our conversational commerce product for fast fashion at TechCrunch Disrupt New York — a 3-day landmark event.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/techcrunch-NPoFKYudE7uructh2fkVZzUBdnWOxV.avif",
        side: "right",
        objectPosition: "center center",
        objectFit: "contain",
      },
      {
        date: "6 May 2017",
        title: "IDEO Labs Design Thinking",
        description: "Sowed the seeds for Liquidmind's design thinking philosophy with top leaders at IDEO Labs, Cambridge, Massachusetts.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Naveen_Sir_ideo_cambridge_ma-8zTLG7fm5jjNxZJrAAv0W84LymaLWt.avif",
        side: "left",
      },
      {
        date: "2017",
        title: "Harvard Business School — HBX Connect",
        description: "Founders joined Entrepreneurship and Design Thinking workshops at Harvard Business School, Boston — laying the foundation for Liquidmind AI.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/proff_HSB-PzWb6ZOnQRxIKrsXZ10ODEkQ5T5qng.avif",
        side: "right",
      },
      {
        date: "3 March 2017",
        title: "Trademark Registration",
        description: "LIQUIDMIND® and LIQUID MIND® formally registered as trademarks of LIQUIDMIND Product Consulting Private Limited.",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/trademark-CFGIhJTRigX5lTDyEu2gI1TfC24rjE.avif",
        side: "left",
      },
      {
        date: "23 February 2017",
        title: "Company Incorporation",
        description: "LIQUIDMIND is formally incorporated as a Private Limited company — the beginning of everything.",
        side: "right",
      },
    ],
  },
]

function TimelineCard({ event, index }: { event: TimelineEvent; index: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })
  const isLeft = event.side === "left"

  return (
    <div
      ref={ref}
      className={`relative grid grid-cols-[1fr_40px_1fr] items-start mb-10 transition-all duration-600
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      style={{ transitionDelay: `${Math.min(index * 80, 320)}ms` }}
    >
      {/* Left slot */}
      <div className={`${isLeft ? "pr-6" : ""}`}>
        {isLeft && <Card event={event} align="right" />}
      </div>

      {/* Center line + dot */}
      <div className="flex flex-col items-center">
        <div
          className="w-4 h-4 rounded-full z-10 border-4 border-white flex-shrink-0 mt-5"
          style={{
            background: "linear-gradient(135deg, #0066CC, #00A86B)",
            boxShadow: "0 0 0 3px #0066CC30",
          }}
        />
        <div className="flex-1 w-px mt-1" style={{ background: "linear-gradient(180deg, #0066CC40, #00A86B40)", minHeight: 32 }} />
      </div>

      {/* Right slot */}
      <div className={`${!isLeft ? "pl-6" : ""}`}>
        {!isLeft && <Card event={event} align="left" />}
      </div>
    </div>
  )
}

function Card({ event, align }: { event: TimelineEvent; align: "left" | "right" }) {
  return (
    <div
      className="rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      style={{
        background: "#FFFFFF",
        border: "1px solid #E2E8F0",
        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
      }}
    >
      {event.image && (
        <div className="relative w-full overflow-hidden" style={{ height: 200, background: event.objectFit === "contain" ? "#F8FAFC" : "transparent" }}>
          <Image
            src={event.image}
            alt={event.title}
            fill
            className={event.objectFit === "contain" ? "object-contain" : "object-cover"}
            style={{ objectPosition: event.objectPosition || "center top" }}
            loading="lazy"
            sizes="(max-width: 768px) 90vw, 420px"
          />
          {/* Gradient overlay for date badge readability */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 60%)" }} />
          <span
            className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-bold text-white"
            style={{ background: "rgba(0,102,204,0.85)", backdropFilter: "blur(4px)" }}
          >
            {event.date}
          </span>
        </div>
      )}

      <div className="p-4">
        {!event.image && (
          <span
            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold mb-2"
            style={{ background: "#EFF6FF", color: "#0066CC" }}
          >
            {event.date}
          </span>
        )}
        <h3 className="font-bold text-[14px] sm:text-[15px] mb-1.5 leading-snug" style={{ color: "#0F172A" }}>
          {event.title}
        </h3>
        <p className="text-[12px] leading-relaxed" style={{ color: "#64748B" }}>
          {event.description}
        </p>
      </div>
    </div>
  )
}

/* Mobile: single-column timeline */
function MobileTimelineCard({ event, index }: { event: TimelineEvent; index: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <div
      ref={ref}
      className={`relative flex gap-3 mb-6 transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      style={{ transitionDelay: `${Math.min(index * 60, 300)}ms` }}
    >
      <div className="flex flex-col items-center flex-shrink-0 pt-5" style={{ width: 16 }}>
        <div
          className="w-3.5 h-3.5 rounded-full border-2 border-white z-10"
          style={{ background: "linear-gradient(135deg, #0066CC, #00A86B)", boxShadow: "0 0 0 3px #0066CC25" }}
        />
        <div className="flex-1 w-px mt-1" style={{ background: "#0066CC20", minHeight: 24 }} />
      </div>

      <div className="flex-1 rounded-2xl overflow-hidden"
        style={{ background: "#FFFFFF", border: "1px solid #E2E8F0", boxShadow: "0 1px 6px rgba(0,0,0,0.05)" }}>
        {event.image && (
          <div className="relative w-full overflow-hidden" style={{ height: 160, background: event.objectFit === "contain" ? "#F8FAFC" : "transparent" }}>
            <Image
              src={event.image}
              alt={event.title}
              fill
              className={event.objectFit === "contain" ? "object-contain" : "object-cover"}
              style={{ objectPosition: event.objectPosition || "center top" }}
              loading="lazy"
              sizes="85vw"
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 60%)" }} />
            <span className="absolute bottom-2.5 left-3 px-2 py-0.5 rounded-full text-[10px] font-bold text-white"
              style={{ background: "rgba(0,102,204,0.85)", backdropFilter: "blur(4px)" }}>
              {event.date}
            </span>
          </div>
        )}
        <div className="p-3.5">
          {!event.image && (
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold mb-1.5"
              style={{ background: "#EFF6FF", color: "#0066CC" }}>
              {event.date}
            </span>
          )}
          <h3 className="font-bold text-[13px] mb-1 leading-snug" style={{ color: "#0F172A" }}>{event.title}</h3>
          <p className="text-[11px] leading-relaxed" style={{ color: "#64748B" }}>{event.description}</p>
        </div>
      </div>
    </div>
  )
}

export default function TimelinePage() {
  const allEvents = timelineData.flatMap(y => y.events.map(e => ({ ...e, year: y.year })))

  return (
    <>
      <Navigation />
      <main className="pt-[112px]" style={{ background: "#FFFFFF" }}>

        {/* Hero */}
        <section className="pt-6 pb-5 px-4 text-center" style={{ background: "#FFFFFF", borderBottom: "1px solid #E2E8F0" }}>
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="h-px w-6 rounded-full" style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)" }} />
              <span className="text-[10px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#94A3B8" }}>Our Journey</span>
              <div className="h-px w-6 rounded-full" style={{ background: "linear-gradient(270deg, #0066CC, #00A86B)" }} />
            </div>
            <h1 className="text-[22px] sm:text-[28px] font-extrabold leading-tight mb-2" style={{ color: "#0F172A" }}>
              Key Activities &amp;{" "}
              <span className="bg-gradient-to-r from-[#0066CC] to-[#00A86B] bg-clip-text text-transparent">
                Company Timeline
              </span>
            </h1>
            <p className="text-[12px] sm:text-[13px] leading-relaxed" style={{ color: "#64748B" }}>
              From our humble beginnings in 2017 to becoming India's leading AI trade compliance platform.
            </p>
          </div>
        </section>

        {/* Desktop: alternating two-column timeline */}
        <section className="hidden md:block py-8 px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {timelineData.map((yearGroup) => (
              <div key={yearGroup.year} className="mb-4">
                {/* Year marker */}
                <div className="flex justify-center mb-6">
                  <div
                    className="px-6 py-2 rounded-full text-[15px] font-black"
                    style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)", color: "#FFFFFF", boxShadow: "0 4px 20px rgba(0,102,204,0.3)" }}
                  >
                    {yearGroup.year}
                  </div>
                </div>

                {/* Continuous center line behind events */}
                <div className="relative">
                  <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
                    style={{ background: "linear-gradient(180deg, #0066CC30, #00A86B30)" }} />

                  {yearGroup.events.map((event, idx) => (
                    <TimelineCard key={idx} event={event} index={idx} />
                  ))}
                </div>
              </div>
            ))}

            <div className="text-center py-8">
              <div className="inline-block px-6 py-4 rounded-xl" style={{ background: "#FFFFFF", border: "1px solid #E2E8F0" }}>
                <p className="font-bold text-[15px] mb-0.5" style={{ color: "#0F172A" }}>More milestones coming soon</p>
                <p className="text-[12px]" style={{ color: "#94A3B8" }}>Stay tuned for updates</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile: single-column */}
        <section className="md:hidden py-8 px-4">
          <div className="max-w-lg mx-auto">
            {timelineData.map((yearGroup) => (
              <div key={yearGroup.year} className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="px-4 py-1 rounded-full text-[12px] font-black flex-shrink-0"
                    style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)", color: "#FFFFFF" }}>
                    {yearGroup.year}
                  </div>
                  <div className="flex-1 h-px" style={{ background: "#E2E8F0" }} />
                </div>
                <div className="relative pl-2" style={{ borderLeft: "2px solid #0066CC20" }}>
                  {yearGroup.events.map((event, idx) => (
                    <MobileTimelineCard key={idx} event={event} index={idx} />
                  ))}
                </div>
              </div>
            ))}

            <div className="text-center py-6">
              <div className="inline-block px-5 py-3.5 rounded-xl" style={{ background: "#FFFFFF", border: "1px solid #E2E8F0" }}>
                <p className="font-bold text-[14px]" style={{ color: "#0F172A" }}>More milestones coming soon</p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
