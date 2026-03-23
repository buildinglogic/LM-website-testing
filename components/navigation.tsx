"use client"

import { useState, useEffect, useRef } from "react"
import { Menu, X, ChevronDown, Youtube, Linkedin, Mail, ArrowLeftRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { trackNavClick, trackExternalLinkClicked } from "@/lib/amplitude"

const countries = [
  { code: "IN", name: "India", flag: "🇮🇳" },
  { code: "US", name: "United States", flag: "🇺🇸" },
  { code: "AE", name: "UAE", flag: "🇦🇪" },
  { code: "DE", name: "Germany", flag: "🇩🇪" },
  { code: "GB", name: "United Kingdom", flag: "🇬🇧" },
  { code: "CN", name: "China", flag: "🇨🇳" },
  { code: "JP", name: "Japan", flag: "🇯🇵" },
  { code: "SG", name: "Singapore", flag: "🇸🇬" },
  { code: "AU", name: "Australia", flag: "🇦🇺" },
  { code: "NL", name: "Netherlands", flag: "🇳🇱" },
  { code: "FR", name: "France", flag: "🇫🇷" },
  { code: "SA", name: "Saudi Arabia", flag: "🇸🇦" },
]

const products = [
  {
    name: "Tradeguard",
    tagline: "Document Mismatch Detection",
    description: "Cross-checks 40+ fields between your Shipping Bill and Invoice in under 5 seconds.",
    stats: ["40+ fields", "< 5 sec"],
    color: "#0066CC",
    gradientFrom: "#0066CC",
    gradientTo: "#0052A3",
    href: "/products/tradeguard",
    tabId: "tradeguard",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    name: "Patram AI",
    tagline: "Export Intelligence Advisor",
    description: "Instant customs rules, duty rates and compliance checklists for 190+ countries.",
    stats: ["190+ countries", "Live policy data"],
    color: "#00A86B",
    gradientFrom: "#00A86B",
    gradientTo: "#008B5E",
    href: "/products/patram",
    tabId: "patram",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z" />
        <path d="M9 12a3 3 0 1 1 6 0 3 3 0 1 1-6 0z" />
        <path d="M12 9v6M9 12h6M10 8l4 8M14 8l-4 8" />
      </svg>
    ),
  },
  {
    name: "TariffIQ",
    tagline: "HSN Classification & Duty",
    description: "AI classifies your product to 8-digit ITC-HS and compares RoDTEP vs Drawback earnings.",
    stats: ["95% accuracy", "RoDTEP vs Drawback"],
    color: "#1B4F8A",
    gradientFrom: "#1B4F8A",
    gradientTo: "#2563EB",
    href: "/products/tariffiq",
    tabId: "tariffiq",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
]

const companyLinks = [
  { name: "About", href: "/company" },
  { name: "Mission", href: "/company#mission" },
  { name: "Why Choose Us?", href: "/company#why-choose-us" },
  { name: "Minds Behind Liquidmind AI", href: "/company#team" },
  { name: "Timeline", href: "/company/timeline" },
  { name: "Map", href: "/company#map" },
  { name: "Giving Back", href: "/company/giving-back" },
  { name: "divider", href: "" },
  { name: "Privacy Policy", href: "/legal/privacy-policy" },
  { name: "Terms of Service", href: "/legal/terms" },
]

function CountryPicker() {
  const [isOpen, setIsOpen] = useState(false)
  const [exportCountry, setExportCountry] = useState(countries[0]) // India default
  const [importCountry, setImportCountry] = useState(countries[2]) // UAE default
  const [selectingFor, setSelectingFor] = useState<"export" | "import" | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
        setSelectingFor(null)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleCountrySelect = (country: typeof countries[0]) => {
    if (selectingFor === "export") {
      setExportCountry(country)
    } else if (selectingFor === "import") {
      setImportCountry(country)
    }
    setSelectingFor(null)
  }

  const swapCountries = () => {
    const temp = exportCountry
    setExportCountry(importCountry)
    setImportCountry(temp)
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg transition-all hover:bg-white/10"
        style={{ border: "1px solid rgba(255,255,255,0.2)" }}
      >
        <span className="text-lg">{exportCountry.flag}</span>
        <ArrowLeftRight className="w-3.5 h-3.5 text-white/60" />
        <span className="text-lg">{importCountry.flag}</span>
        <ChevronDown className={`w-3.5 h-3.5 text-white/60 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div
          className="absolute top-[calc(100%+8px)] right-0 w-[280px] rounded-xl overflow-hidden z-50"
          style={{
            background: "#FFFFFF",
            border: "1px solid #E2E8F0",
            boxShadow: "0 25px 60px rgba(0,0,0,0.25)",
          }}
        >
          <div className="p-3 border-b" style={{ borderColor: "#E2E8F0", background: "#F8FAFC" }}>
            <p className="text-[12px] font-semibold uppercase tracking-wider" style={{ color: "#64748B" }}>
              Trade Route
            </p>
          </div>

          {/* Selected Countries Display */}
          <div className="p-4 flex items-center justify-between gap-3">
            <button
              onClick={() => setSelectingFor(selectingFor === "export" ? null : "export")}
              className={`flex-1 flex items-center gap-2 p-2.5 rounded-lg transition-all ${selectingFor === "export" ? "ring-2 ring-[#0066CC]" : ""}`}
              style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}
            >
              <span className="text-xl">{exportCountry.flag}</span>
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-wider" style={{ color: "#94A3B8" }}>From</p>
                <p className="text-[13px] font-semibold" style={{ color: "#0F172A" }}>{exportCountry.code}</p>
              </div>
            </button>

            <button
              onClick={swapCountries}
              className="w-8 h-8 rounded-full flex items-center justify-center transition-all hover:scale-110"
              style={{ background: "linear-gradient(135deg, #0066CC, #00A86B)" }}
            >
              <ArrowLeftRight className="w-4 h-4 text-white" />
            </button>

            <button
              onClick={() => setSelectingFor(selectingFor === "import" ? null : "import")}
              className={`flex-1 flex items-center gap-2 p-2.5 rounded-lg transition-all ${selectingFor === "import" ? "ring-2 ring-[#00A86B]" : ""}`}
              style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}
            >
              <span className="text-xl">{importCountry.flag}</span>
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-wider" style={{ color: "#94A3B8" }}>To</p>
                <p className="text-[13px] font-semibold" style={{ color: "#0F172A" }}>{importCountry.code}</p>
              </div>
            </button>
          </div>

          {/* Country Selection List */}
          {selectingFor && (
            <div className="border-t max-h-[200px] overflow-y-auto" style={{ borderColor: "#E2E8F0" }}>
              <div className="p-2">
                <p className="px-2 py-1.5 text-[11px] font-semibold uppercase tracking-wider" style={{ color: "#94A3B8" }}>
                  Select {selectingFor === "export" ? "Exporting" : "Importing"} Country
                </p>
                {countries.map((country) => (
                  <button
                    key={country.code}
                    onClick={() => handleCountrySelect(country)}
                    className="w-full flex items-center gap-3 px-2 py-2 rounded-lg transition-all hover:bg-[#F1F5F9]"
                  >
                    <span className="text-lg">{country.flag}</span>
                    <span className="text-[14px] font-medium" style={{ color: "#0F172A" }}>{country.name}</span>
                    <span className="ml-auto text-[12px]" style={{ color: "#94A3B8" }}>{country.code}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [companyOpen, setCompanyOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const id = href.replace("#", "").replace("/", "")
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setProductsOpen(false)
    setMobileMenuOpen(false)
  }

  const navigateToProduct = (product: typeof products[0]) => {
    trackNavClick(`Product: ${product.name}`)
    // Navigate directly to product page
    window.location.href = product.href
    setProductsOpen(false)
    setMobileMenuOpen(false)
  }

  return (
    <>
      {/* Award Announcement Bar - Marquee - High contrast blue */}
      {!scrolled && (
        <div
          className="fixed top-0 left-0 right-0 z-50 h-10 overflow-hidden"
          style={{ background: "#0066CC" }}
        >
          <div className="h-full flex items-center animate-marquee whitespace-nowrap">
            {[...Array(6)].map((_, i) => (
              <span key={i} className="mx-8 text-[14px] font-bold text-white flex items-center gap-4">
                <span>Aegis Graham Bell Award 2026 Winner</span>
                <span className="opacity-40">|</span>
                <span>Karnataka Elevate 2025 Winner</span>
                <span className="opacity-40">|</span>
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Main Navigation - Larger header */}
      <nav
        className="fixed w-full z-50"
        style={{ height: "72px", background: "#000000", top: scrolled ? "0" : "40px" }}
      >
        <div className="w-full h-full px-4 lg:px-8 flex items-center justify-between">
          {/* Logo - Far Left, Smaller size */}
          <Link href="/" className="flex items-center h-full py-3 flex-shrink-0 transition-transform duration-200 active:scale-95">
            <Image
              src="/images/liquidmind-logo.png"
              alt="Liquidmind"
              width={150}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav - Center with equal spacing */}
          <div className="hidden lg:flex items-center justify-center flex-1 gap-10">
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button className="flex items-center gap-1.5 text-white/80 hover:text-white text-[16px] font-semibold transition-colors">
                Products <ChevronDown className={`w-4 h-4 transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Invisible bridge — prevents gap from closing dropdown */}
              <div className="absolute top-full left-0 right-0 h-3" />

              <div
                className={`absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-[300px] p-2 rounded-xl transition-all duration-300 ${productsOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
                style={{ background: "#FFFFFF", border: "1px solid #E2E8F0", boxShadow: "0 25px 60px rgba(0,0,0,0.2)" }}
              >
                {products.map((product) => (
                  <button
                    key={product.name}
                    onClick={() => navigateToProduct(product)}
                    className="w-full text-left px-4 py-3 rounded-lg transition-all hover:bg-[#F1F5F9] flex items-center gap-3 group"
                  >
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: `linear-gradient(135deg, ${product.gradientFrom}, ${product.gradientTo})` }}>
                      {product.icon}
                    </div>
                    <div>
                      <div className="text-[14px] font-semibold" style={{ color: "#0F172A" }}>{product.name}</div>
                      <div className="text-[12px]" style={{ color: "#64748B" }}>{product.tagline}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Company Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCompanyOpen(true)}
              onMouseLeave={() => setCompanyOpen(false)}
            >
              <button className="flex items-center gap-1.5 text-white/80 hover:text-white text-[16px] font-semibold transition-colors py-4">
                Company <ChevronDown className={`w-4 h-4 transition-transform ${companyOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Invisible bridge to prevent gap from closing dropdown */}
              <div className="absolute top-full left-0 right-0 h-3" />

              <div
                className={`absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-[280px] p-2 rounded-xl transition-all duration-300 ${companyOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
                style={{ background: "#FFFFFF", border: "1px solid #E2E8F0", boxShadow: "0 25px 60px rgba(0,0,0,0.2)" }}
              >
                {companyLinks.map((link) =>
                  link.name === "divider" ? (
                    <div key="divider" className="my-1 mx-2" style={{ height: "1px", background: "#E2E8F0" }} />
                  ) : (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block px-4 py-2.5 rounded-lg text-[15px] font-medium transition-all hover:bg-[#F1F5F9]"
                      style={{ color: "#0F172A" }}
                      onClick={() => { trackNavClick(link.name); setCompanyOpen(false) }}
                    >
                      {link.name}
                    </Link>
                  )
                )}
              </div>
            </div>
            <Link href="/newsletter" onClick={() => trackNavClick("Newsletter")} className="text-white/80 hover:text-white text-[16px] font-semibold transition-colors">Newsletter</Link>
            <Link href="/careers" onClick={() => trackNavClick("Careers")} className="text-white/80 hover:text-white text-[16px] font-semibold transition-colors">Careers</Link>
          </div>

          {/* Right side - Social icons + Country Picker + Book Demo */}
          <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
            <div className="flex items-center gap-2">
              <a href="https://www.youtube.com/@LIQUIDMIND_AI" target="_blank" rel="noopener noreferrer"
                onClick={() => trackExternalLinkClicked("https://www.youtube.com/@LIQUIDMIND_AI")}
                className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
                <Youtube className="w-5 h-5 text-white/70 hover:text-white" />
              </a>
              <a href="https://www.linkedin.com/company/liquid-mind-product-consulting-inc./" target="_blank" rel="noopener noreferrer"
                onClick={() => trackExternalLinkClicked("https://www.linkedin.com/company/liquid-mind-product-consulting-inc./")}
                className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
                <Linkedin className="w-5 h-5 text-white/70 hover:text-white" />
              </a>
              <a href="mailto:support@liquidmind.ai"
                onClick={() => trackExternalLinkClicked("mailto:support@liquidmind.ai")}
                className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
                <Mail className="w-5 h-5 text-white/70 hover:text-white" />
              </a>
            </div>

            <CountryPicker />

            <Link href="/book-demo" onClick={() => trackNavClick("Book Demo")} className="px-6 py-2.5 rounded-lg text-[16px] font-bold btn-shine transition-all hover:scale-105"
              style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)", color: "#FFFFFF" }}>
              Book Demo
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white p-1"
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen)
              if (mobileMenuOpen) { setMobileProductsOpen(false); setMobileCompanyOpen(false) }
            }}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu — slides down from navbar */}
        <div
          className={`lg:hidden fixed left-0 right-0 z-40 overflow-y-auto transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
          style={{
            top: scrolled ? "72px" : "112px",
            bottom: 0,
            background: "#FFFFFF",
            borderTop: "1px solid #E2E8F0",
          }}
        >
          {/* Scrollable inner */}
          <div className="px-4 pt-3 pb-28">

            {/* Products accordion */}
            <button
              onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
              className="w-full flex items-center justify-between py-3.5 text-[16px] font-semibold"
              style={{ color: "#0F172A", borderBottom: "1px solid #E2E8F0" }}
            >
              Products
              <ChevronDown className={`w-4 h-4 transition-transform`} style={{ color: "#64748B", transform: mobileProductsOpen ? "rotate(180deg)" : "rotate(0deg)" }} />
            </button>
            {mobileProductsOpen && (
              <div className="py-2 mb-1">
                {products.map((product) => (
                  <button
                    key={product.name}
                    onClick={() => { navigateToProduct(product); setMobileMenuOpen(false) }}
                    className="w-full flex items-center gap-3 px-2 py-2.5 rounded-xl transition-colors hover:bg-[#F8FAFC]"
                  >
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: `linear-gradient(135deg, ${product.gradientFrom}, ${product.gradientTo})` }}>
                      {product.icon}
                    </div>
                    <div className="text-left">
                      <div className="text-[15px] font-semibold" style={{ color: "#0F172A" }}>{product.name}</div>
                      <div className="text-[13px]" style={{ color: "#64748B" }}>{product.tagline}</div>
                    </div>
                  </button>
                ))}
              </div>
            )}

            {/* Company accordion */}
            <button
              onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
              className="w-full flex items-center justify-between py-3.5 text-[16px] font-semibold"
              style={{ color: "#0F172A", borderBottom: mobileCompanyOpen ? "none" : "1px solid #E2E8F0" }}
            >
              Company
              <ChevronDown className="w-4 h-4 transition-transform" style={{ color: "#64748B", transform: mobileCompanyOpen ? "rotate(180deg)" : "rotate(0deg)" }} />
            </button>
            {mobileCompanyOpen && (
              <div className="py-2 mb-1" style={{ borderBottom: "1px solid #E2E8F0" }}>
                {companyLinks.map((link) =>
                  link.name === "divider" ? (
                    <div key="divider" className="my-1.5 mx-2" style={{ height: "1px", background: "#F1F5F9" }} />
                  ) : (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block px-2 py-2.5 rounded-xl text-[15px] font-medium transition-colors hover:bg-[#F8FAFC]"
                      style={{ color: "#475569" }}
                      onClick={() => { trackNavClick(link.name); setMobileMenuOpen(false) }}
                    >
                      {link.name}
                    </Link>
                  )
                )}
              </div>
            )}

            {/* Flat links */}
            <Link href="/newsletter"
              className="flex items-center py-3.5 text-[16px] font-semibold"
              style={{ color: "#0F172A", borderBottom: "1px solid #E2E8F0" }}
              onClick={() => { trackNavClick("Newsletter"); setMobileMenuOpen(false) }}>
              Newsletter
            </Link>
            <Link href="/careers"
              className="flex items-center py-3.5 text-[16px] font-semibold"
              style={{ color: "#0F172A", borderBottom: "1px solid #E2E8F0" }}
              onClick={() => { trackNavClick("Careers"); setMobileMenuOpen(false) }}>
              Careers
            </Link>

            {/* Social + Book Demo */}
            <div className="pt-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <a href="https://www.youtube.com/@LIQUIDMIND_AI" target="_blank" rel="noopener noreferrer"
                  onClick={() => trackExternalLinkClicked("https://www.youtube.com/@LIQUIDMIND_AI")}
                  className="w-9 h-9 rounded-full flex items-center justify-center"
                  style={{ background: "#F1F5F9" }}>
                  <Youtube className="w-4 h-4" style={{ color: "#0066CC" }} />
                </a>
                <a href="https://www.linkedin.com/company/liquid-mind-product-consulting-inc./" target="_blank" rel="noopener noreferrer"
                  onClick={() => trackExternalLinkClicked("https://www.linkedin.com/company/liquid-mind-product-consulting-inc./")}
                  className="w-9 h-9 rounded-full flex items-center justify-center"
                  style={{ background: "#F1F5F9" }}>
                  <Linkedin className="w-4 h-4" style={{ color: "#0066CC" }} />
                </a>
                <a href="mailto:support@liquidmind.ai"
                  onClick={() => trackExternalLinkClicked("mailto:support@liquidmind.ai")}
                  className="w-9 h-9 rounded-full flex items-center justify-center"
                  style={{ background: "#F1F5F9" }}>
                  <Mail className="w-4 h-4" style={{ color: "#0066CC" }} />
                </a>
              </div>
              <Link
                href="/book-demo"
                className="px-5 py-2.5 rounded-full text-[15px] font-bold btn-shine"
                style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)", color: "#FFFFFF" }}
                onClick={() => { trackNavClick("Book Demo"); setMobileMenuOpen(false) }}
              >
                Book Demo
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile bottom bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 flex" style={{ background: "#FFFFFF", borderTop: "1px solid #E2E8F0" }}>
        <a href="https://wa.me/919845592468" onClick={() => trackExternalLinkClicked("https://wa.me/919845592468")} className="flex-1 py-3 text-center text-[#0F172A] font-semibold text-[16px] border-r border-[#E2E8F0]">WhatsApp</a>
        <Link href="/book-demo" onClick={() => trackNavClick("Book Demo")} className="flex-1 py-3 text-center font-semibold text-[16px]" style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)", color: "#FFFFFF" }}>Book Demo</Link>
      </div>
    </>
  )
}
