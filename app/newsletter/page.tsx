import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FooterLinks } from "@/components/footer-links"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { getPublishedPosts } from "./lib/notion"
import { SubscribeForm } from "./subscribe-form"

export const revalidate = 300

const benefits = [
  "Weekly trade compliance insights",
  "HSN code updates & tariff changes",
  "DGFT policy announcements",
  "Tips to maximize Drawback & RoDTEP",
  "Case studies & success stories",
  "Early access to new features",
]

const learnItems = [
  {
    title: "Compliance Updates",
    description: "Stay ahead of DGFT policy changes, new HSN codes, and tariff updates that directly affect your exports.",
    color: "#0066CC",
    lightBg: "#EFF6FF",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Refund Optimisation",
    description: "Learn strategies to maximise your Drawback, RoDTEP, and IGST refunds. Real numbers, real results.",
    color: "#00A86B",
    lightBg: "#ECFDF5",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Error Prevention",
    description: "Common documentation mistakes that cost exporters lakhs — and exactly how to avoid them every time.",
    color: "#1B4F8A",
    lightBg: "#EFF6FF",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
]

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export default async function NewsletterPage() {
  const posts = await getPublishedPosts()
  const hasPosts = posts.length > 0

  return (
    <main className="min-h-screen" style={{ background: "#FFFFFF" }}>
      <Navigation />

      {/* ── Hero ── */}
      <section className="pt-[100px] lg:pt-[120px] pb-12 lg:pb-20 px-5 lg:px-8" style={{ background: "#FFFFFF" }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-start">

            {/* Left: copy */}
            <div>
              {/* Label */}
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 flex-shrink-0 rounded-full" style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)" }} />
                <span className="text-[14px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#94A3B8" }}>
                  Weekly Newsletter
                </span>
              </div>

              <h1 className="text-[28px] sm:text-[36px] lg:text-[48px] font-extrabold leading-tight mb-4" style={{ color: "#0F172A" }}>
                Trade Compliance<br />
                <span className="bg-gradient-to-r from-[#0066CC] to-[#00A86B] bg-clip-text text-transparent">
                  Made Simple
                </span>
              </h1>
              <p className="text-[16px] sm:text-[17px] lg:text-[18px] leading-relaxed mb-6 max-w-md" style={{ color: "#475569" }}>
                Actionable insights on trade compliance, export documentation, and refund optimisation —
                delivered every week. Join thousands of exporters already saving crores.
              </p>

              <div className="space-y-2">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "#ECFDF5" }}>
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} style={{ color: "#00A86B" }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[15px] sm:text-[16px]" style={{ color: "#0F172A" }}>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: subscribe card */}
            <SubscribeForm />
          </div>
        </div>
      </section>

      {/* ── What You'll Learn ── */}
      <section className="py-12 lg:py-20 px-5 lg:px-8" style={{ background: "#F8FAFC" }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-8 lg:mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)" }} />
              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#94A3B8" }}>
                Every Issue
              </span>
              <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(270deg, #0066CC, #00A86B)" }} />
            </div>
            <h2 className="text-[22px] sm:text-[28px] lg:text-[36px] font-extrabold" style={{ color: "#0F172A" }}>
              {"What You'll "}
              <span className="bg-gradient-to-r from-[#0066CC] to-[#00A86B] bg-clip-text text-transparent">Learn</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            {learnItems.map((item, idx) => (
              <div
                key={idx}
                className="group p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ background: "#FFFFFF", border: "1px solid #E2E8F0", boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: item.lightBg, color: item.color }}
                >
                  {item.icon}
                </div>
                <div
                  className="h-0.5 w-8 rounded-full mb-4"
                  style={{ background: `linear-gradient(90deg, ${item.color}, transparent)` }}
                />
                <h3 className="text-[17px] sm:text-[18px] font-bold mb-2" style={{ color: "#0F172A" }}>
                  {item.title}
                </h3>
                <p className="text-[16px] leading-relaxed" style={{ color: "#475569" }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Recent Issues ── */}
      <section className="py-12 lg:py-20 px-5 lg:px-8" style={{ background: "#FFFFFF" }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-8 lg:mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)" }} />
              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#94A3B8" }}>
                Past Editions
              </span>
              <div className="h-px w-8 rounded-full" style={{ background: "linear-gradient(270deg, #0066CC, #00A86B)" }} />
            </div>
            <h2 className="text-[22px] sm:text-[28px] lg:text-[36px] font-extrabold mb-2" style={{ color: "#0F172A" }}>
              Recent{" "}
              <span className="bg-gradient-to-r from-[#0066CC] to-[#00A86B] bg-clip-text text-transparent">Issues</span>
            </h2>
            <p className="text-[13px] sm:text-[14px]" style={{ color: "#64748B" }}>
              A glimpse of what subscribers receive every week
            </p>
          </div>

          {hasPosts ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/newsletter/${post.slug}`}
                  className="block p-5 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer"
                  style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[13px]" style={{ color: "#94A3B8" }}>{formatDate(post.date)}</span>
                    <span
                      className="text-[13px] px-2 py-0.5 rounded-full font-medium"
                      style={{ background: "rgba(0,102,204,0.08)", color: "#0066CC" }}
                    >
                      {post.read_time}
                    </span>
                  </div>
                  <h3 className="text-[16px] sm:text-[17px] font-bold leading-snug mb-2" style={{ color: "#0F172A" }}>
                    {post.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed line-clamp-2 mb-3" style={{ color: "#475569" }}>
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-1 text-[14px] font-semibold" style={{ color: "#0066CC" }}>
                    Read issue
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-[15px] text-center py-8" style={{ color: "#64748B" }}>
              New articles coming soon. Subscribe to get notified.
            </p>
          )}
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-12 lg:py-16 px-5 lg:px-8" style={{ background: "#F8FAFC", borderTop: "1px solid #E2E8F0" }}>
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="text-[20px] sm:text-[26px] lg:text-[32px] font-extrabold mb-3" style={{ color: "#0F172A" }}>
            Join{" "}
            <span className="bg-gradient-to-r from-[#0066CC] to-[#00A86B] bg-clip-text text-transparent">
              2,400+ Exporters
            </span>{" "}
            Already Subscribed
          </h2>
          <p className="text-[16px] sm:text-[17px] mb-6" style={{ color: "#64748B" }}>
            Free. No spam. Unsubscribe anytime.
          </p>
          <Link
            href="/newsletter"
            className="inline-block px-8 py-3.5 rounded-full text-[16px] font-bold btn-shine transition-all hover:scale-105"
            style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)", color: "#FFFFFF", boxShadow: "0 4px 25px rgba(0,102,204,0.3)" }}
          >
            Subscribe Now — It's Free
          </Link>
        </div>
      </section>

      <FooterLinks />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
