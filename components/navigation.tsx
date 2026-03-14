"use client"

import { useState, useEffect } from "react"
import { Menu, X, ChevronDown, Youtube, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const products = [
  { name: "Tradeguard", description: "Document Mismatch Detection", href: "#tradeguard" },
  { name: "Patram AI", description: "AI Document Q&A", href: "#patram" },
  { name: "TariffIQ", description: "HSN Classification & Duty Calculator", href: "#tariffiq" },
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const id = href.replace("#", "")
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setProductsOpen(false)
    setMobileMenuOpen(false)
  }

  return (
    <>
      {/* Award Announcement Bar - Marquee */}
      <div 
        className={`w-full h-9 flex items-center overflow-hidden transition-all duration-300 ${scrolled ? 'h-0 opacity-0' : 'h-9 opacity-100'}`}
        style={{ background: "linear-gradient(90deg, #FFD700, #FFA500, #FFD700)" }}
      >
        <div className="animate-marquee flex items-center whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="mx-6 text-[12px] font-bold text-[#0F172A] flex items-center gap-3">
              <span>Aegis Graham Bell Award 2026 Winner</span>
              <span className="opacity-40">|</span>
              <span>Karnataka Elevate 2025 Winner</span>
              <span className="opacity-40">|</span>
              <a href="#demo" className="underline hover:no-underline">Book a Demo</a>
              <span className="opacity-40">|</span>
            </span>
          ))}
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'top-0' : 'top-9'}`}
        style={{ height: "64px", background: "#000000" }}
      >
        <div className="w-full h-full px-4 lg:px-6 flex items-center justify-between">
          {/* Logo - Far Left */}
          <Link href="/" className="flex items-center h-full flex-shrink-0">
            <Image 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FQklSuzkmSwjvO1CP9LcCeqsf0SOzb.png"
              alt="Liquidmind"
              width={180}
              height={45}
              className="h-[42px] w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav - Center */}
          <div className="hidden lg:flex items-center justify-center flex-1 gap-8">
            <div 
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button className="flex items-center gap-1 text-white/80 hover:text-white text-sm font-semibold transition-colors">
                Products <ChevronDown className={`w-4 h-4 transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div 
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[320px] p-4 rounded-xl transition-all duration-200 ${productsOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
                style={{ background: "#FFFFFF", border: "1px solid #E2E8F0", boxShadow: "0 20px 50px rgba(0,0,0,0.15)" }}
              >
                {products.map((product) => (
                  <button
                    key={product.name}
                    onClick={() => scrollToSection(product.href)}
                    className="w-full text-left p-3 rounded-lg hover:bg-[#F8FAFC] transition-colors block"
                    style={{ borderLeft: "3px solid #0066CC" }}
                  >
                    <div className="text-[#0F172A] font-bold text-sm">{product.name}</div>
                    <div className="text-[#475569] text-xs">{product.description}</div>
                  </button>
                ))}
              </div>
            </div>

            <Link href="/company" className="text-white/80 hover:text-white text-sm font-semibold transition-colors">Company</Link>
            <Link href="/newsletter" className="text-white/80 hover:text-white text-sm font-semibold transition-colors">Newsletter</Link>
            <Link href="/careers" className="text-white/80 hover:text-white text-sm font-semibold transition-colors">Careers</Link>
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <div className="flex items-center gap-1">
              <a href="https://youtube.com/@liquidmindai" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
                <Youtube className="w-4 h-4 text-white/70 hover:text-white" />
              </a>
              <a href="https://linkedin.com/company/liquidmind" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
                <Linkedin className="w-4 h-4 text-white/70 hover:text-white" />
              </a>
              <a href="mailto:support@liquidmind.ai"
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
                <Mail className="w-4 h-4 text-white/70 hover:text-white" />
              </a>
            </div>
            
            <a href="#demo" className="px-5 py-2 rounded-lg text-sm font-bold btn-shine transition-all hover:scale-105"
              style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)", color: "#FFFFFF" }}>
              Book Demo
            </a>
          </div>

          {/* Mobile menu button */}
          <button className="lg:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden fixed inset-0 z-40 pt-[100px] transition-all ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          style={{ background: "rgba(255,255,255,0.98)" }}>
          <div className="p-6 space-y-4">
            <button onClick={() => scrollToSection("#products")} className="block w-full text-left text-[#0F172A] text-lg font-semibold py-3 border-b border-[#E2E8F0]">Products</button>
            <Link href="/company" className="block text-[#0F172A] text-lg font-semibold py-3 border-b border-[#E2E8F0]">Company</Link>
            <Link href="/newsletter" className="block text-[#0F172A] text-lg font-semibold py-3 border-b border-[#E2E8F0]">Newsletter</Link>
            <Link href="/careers" className="block text-[#0F172A] text-lg font-semibold py-3 border-b border-[#E2E8F0]">Careers</Link>
            <div className="flex items-center gap-4 pt-4">
              <a href="https://youtube.com/@liquidmindai" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center bg-[#0066CC]">
                <Youtube className="w-5 h-5 text-white" />
              </a>
              <a href="https://linkedin.com/company/liquidmind" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center bg-[#0066CC]">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a href="mailto:support@liquidmind.ai" className="w-10 h-10 rounded-full flex items-center justify-center bg-[#0066CC]">
                <Mail className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile bottom bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 flex" style={{ background: "#FFFFFF", borderTop: "1px solid #E2E8F0" }}>
        <a href="https://wa.me/919876543210" className="flex-1 py-3 text-center text-[#0F172A] font-semibold text-sm border-r border-[#E2E8F0]">WhatsApp</a>
        <a href="#demo" className="flex-1 py-3 text-center font-semibold text-sm" style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)", color: "#FFFFFF" }}>Book Demo</a>
      </div>
    </>
  )
}
