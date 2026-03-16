"use client"

import Link from "next/link"
import { Youtube, Linkedin, Mail, Instagram, Facebook, MapPin } from "lucide-react"
import { useRef, useState, useEffect } from "react"

// ── Animated item — replicates AnimatedList scale+opacity entrance ──────────
function AnimatedItem({
  children,
  delay = 0,
  parentInView,
}: {
  children: React.ReactNode
  delay?: number
  parentInView: boolean
}) {
  return (
    <div
      style={{
        transition: `transform 0.22s ease ${delay}ms, opacity 0.22s ease ${delay}ms`,
        transform: parentInView ? "scale(1)" : "scale(0.72)",
        opacity: parentInView ? 1 : 0,
      }}
    >
      {children}
    </div>
  )
}

// ── useInView ────────────────────────────────────────────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true) },
      { threshold }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, inView }
}

// ── Data ─────────────────────────────────────────────────────────────────────
const products = [
  { name: "Tradeguard", tabId: "tradeguard" },
  { name: "Patram AI",  tabId: "patram" },
  { name: "TariffIQ",  tabId: "tariffiq" },
]

// Split into two columns so footer stays compact
const companyLinksCol1 = [
  { name: "About",                       href: "/company" },
  { name: "Mission",                     href: "/company#mission" },
  { name: "Why Choose Us?",             href: "/company#why-choose-us" },
  { name: "Minds Behind Liquidmind AI", href: "/company#team" },
  { name: "Timeline",                   href: "/company/timeline" },
]
const companyLinksCol2 = [
  { name: "Map",           href: "/company#map" },
  { name: "Giving Back",  href: "/company/giving-back" },
  { name: "Privacy Policy", href: "/legal/privacy-policy" },
  { name: "Terms of Service", href: "/legal/terms" },
]

const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=Banashankari+III+Stage+Kathriguppe+Bangalore+Karnataka+560085+India"

const socials = [
  { label: "YouTube",   href: "https://www.youtube.com/@LIQUIDMIND_AI",                               hoverColor: "#FF0000", icon: <Youtube   className="w-3.5 h-3.5" /> },
  { label: "LinkedIn",  href: "https://www.linkedin.com/company/liquid-mind-product-consulting-inc./", hoverColor: "#0077B5", icon: <Linkedin  className="w-3.5 h-3.5" /> },
  { label: "Email",     href: "mailto:naveen@liquidmind.ai",                                           hoverColor: "#0066CC", icon: <Mail      className="w-3.5 h-3.5" /> },
  { label: "Instagram", href: "https://www.instagram.com/liquidmind/",                                 hoverColor: "#E1306C", icon: <Instagram className="w-3.5 h-3.5" /> },
  { label: "Facebook",  href: "https://www.facebook.com/liquidmindaifintech/",                         hoverColor: "#1877F2", icon: <Facebook  className="w-3.5 h-3.5" /> },
  { label: "Maps",      href: MAP_URL,                                                                  hoverColor: "#00A86B", icon: <MapPin    className="w-3.5 h-3.5" /> },
]

function navigateToProduct(tabId: string) {
  if (typeof window === "undefined") return
  sessionStorage.setItem("selectedProductTab", tabId)
  if (window.location.pathname === "/") {
    const el = document.getElementById("products")
    if (el) el.scrollIntoView({ behavior: "smooth" })
    window.dispatchEvent(new CustomEvent("changeProductTab", { detail: tabId }))
  } else {
    window.location.href = `/#products?tab=${tabId}`
  }
}

// ── Hover-animated link ──────────────────────────────────────────────────────
function HoverLink({ children, onClick, href }: { children: React.ReactNode; onClick?: () => void; href?: string }) {
  const [hovered, setHovered] = useState(false)
  const base = "text-[12px] transition-all duration-150 rounded px-1.5 py-0.5 -mx-1.5 block"
  const style = {
    color: "#475569",
    background: hovered ? "rgba(0,102,204,0.07)" : "transparent",
    transform: hovered ? "scale(1.03)" : "scale(1)",
  }

  if (href) {
    return (
      <Link href={href} className={base} style={style}
        onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
        {children}
      </Link>
    )
  }
  return (
    <button className={`${base} text-left w-full`} style={style}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      onClick={onClick}>
      {children}
    </button>
  )
}

// ── Main component ───────────────────────────────────────────────────────────
export function FooterLinks() {
  const { ref: secRef, inView } = useInView(0.1)

  return (
    <section
      ref={secRef}
      className="py-6 px-4 lg:px-6"
      style={{ background: "#F8FAFC", borderTop: "1px solid #E2E8F0" }}
    >
      <div className="w-full max-w-[1200px] mx-auto">
        {/* 5-col grid: Products | Company col1 | Company col2 | Contact | Newsletter */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-x-6 gap-y-6">

          {/* ── Products ── */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-wider mb-3" style={{ color: "#0F172A" }}>
              Products
            </h4>
            <div className="space-y-1">
              {products.map((p, i) => (
                <AnimatedItem key={p.tabId} delay={i * 50} parentInView={inView}>
                  <HoverLink onClick={() => navigateToProduct(p.tabId)}>{p.name}</HoverLink>
                </AnimatedItem>
              ))}
              <AnimatedItem delay={150} parentInView={inView}>
                <HoverLink href="#">API Documentation</HoverLink>
              </AnimatedItem>
            </div>
          </div>

          {/* ── Company col 1 ── */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-wider mb-3" style={{ color: "#0F172A" }}>
              Company
            </h4>
            <div className="space-y-1">
              {companyLinksCol1.map((link, i) => (
                <AnimatedItem key={link.href} delay={i * 50} parentInView={inView}>
                  <HoverLink href={link.href}>{link.name}</HoverLink>
                </AnimatedItem>
              ))}
            </div>
          </div>

          {/* ── Company col 2 ── */}
          <div>
            {/* invisible spacer to align with col1 header */}
            <h4 className="text-[11px] font-bold uppercase tracking-wider mb-3 invisible" aria-hidden>
              Company
            </h4>
            <div className="space-y-1">
              {companyLinksCol2.map((link, i) => (
                <AnimatedItem key={link.href} delay={(i + companyLinksCol1.length) * 50} parentInView={inView}>
                  <HoverLink href={link.href}>{link.name}</HoverLink>
                </AnimatedItem>
              ))}
            </div>
          </div>

          {/* ── Contact ── */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-wider mb-3" style={{ color: "#0F172A" }}>
              Contact
            </h4>
            <AnimatedItem delay={0} parentInView={inView}>
              <address className="not-italic text-[11px] leading-relaxed mb-2" style={{ color: "#475569" }}>
                Banashankari III Stage<br />
                Kathriguppe, Bangalore<br />
                Karnataka - 560085, India
              </address>
            </AnimatedItem>
            <AnimatedItem delay={80} parentInView={inView}>
              <a href="mailto:naveen@liquidmind.ai"
                className="text-[11px] hover:underline block mb-3"
                style={{ color: "#0066CC" }}>
                naveen@liquidmind.ai
              </a>
            </AnimatedItem>
            {/* Social icons */}
            <AnimatedItem delay={160} parentInView={inView}>
              <div className="flex items-center gap-1.5 flex-wrap">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("mailto") ? undefined : "_blank"}
                    rel={s.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    aria-label={s.label}
                    className="w-7 h-7 rounded-full flex items-center justify-center transition-all duration-150 hover:scale-110"
                    style={{ background: "#E2E8F0", color: "#475569" }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget
                      el.style.background = s.hoverColor + "18"
                      el.style.color = s.hoverColor
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget
                      el.style.background = "#E2E8F0"
                      el.style.color = "#475569"
                    }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </AnimatedItem>
          </div>

          {/* ── Newsletter ── */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-wider mb-3" style={{ color: "#0F172A" }}>
              Stay Updated
            </h4>
            <AnimatedItem delay={0} parentInView={inView}>
              <p className="text-[11px] mb-3" style={{ color: "#475569" }}>
                Weekly trade compliance insights to your inbox.
              </p>
            </AnimatedItem>
            <AnimatedItem delay={80} parentInView={inView}>
              <Link
                href="/newsletter"
                className="inline-block px-3 py-1.5 rounded-lg text-[12px] font-semibold transition-all hover:scale-105"
                style={{ background: "#0066CC", color: "#FFFFFF" }}
              >
                Subscribe
              </Link>
            </AnimatedItem>
          </div>

        </div>
      </div>
    </section>
  )
}
