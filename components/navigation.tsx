"use client"

import { useState, useEffect } from "react"
import { Menu, X, ChevronDown, Youtube, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const products = [
  {
    name: "Tradeguard",
    description: "Document Mismatch Detection",
    target: "For exporters & CHAs",
    color: "#0066CC",
  },
  {
    name: "Patram AI",
    description: "AI Document Q&A",
    target: "For audit teams",
    color: "#00A86B",
  },
  {
    name: "TariffIQ",
    description: "HSN Classification & Duty Calculator",
    target: "For importers & exporters",
    color: "#0066CC",
  },
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Announcement Bar - Marquee Style */}
      <div 
        className="w-full h-10 flex items-center overflow-hidden"
        style={{ background: "linear-gradient(90deg, #D4AF37, #B8860B, #D4AF37)", color: "#000000" }}
      >
        <div className="animate-marquee flex items-center whitespace-nowrap">
          {[...Array(3)].map((_, i) => (
            <span key={i} className="mx-8 text-[13px] font-bold flex items-center gap-4">
              <span>Aegis Graham Bell Award 2026 Winner</span>
              <span className="text-[#0F172A]/60">|</span>
              <span>Karnataka Elevate 2025 Winner</span>
              <span className="text-[#0F172A]/60">|</span>
              <a href="#demo" className="underline hover:no-underline">Book a Demo</a>
              <span className="text-[#0F172A]/60">|</span>
            </span>
          ))}
        </div>
      </div>

      {/* Sticky Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'shadow-xl' : ''}`}
        style={{
          top: scrolled ? "0px" : "40px",
          height: "72px",
          background: "#000000",
        }}
      >
        <div className="w-full h-full px-4 lg:px-8 flex items-center justify-between">
          {/* Logo - Far Left */}
          <Link href="/" className="flex items-center h-full flex-shrink-0">
            <Image 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FQklSuzkmSwjvO1CP9LcCeqsf0SOzb.png"
              alt="Liquidmind"
              width={200}
              height={50}
              className="h-[50px] w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav - Center with equal spacing */}
          <div className="hidden lg:flex items-center justify-center flex-1 gap-10">
            {/* Products Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button className="flex items-center gap-1 text-white/80 hover:text-white text-sm font-semibold transition-colors duration-300">
                Products <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${productsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div 
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[480px] p-6 rounded-xl transition-all duration-300 ${productsOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
                style={{ 
                  background: "#FFFFFF", 
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.15)"
                }}
              >
                <div className="grid grid-cols-2 gap-4">
                  {products.map((product) => (
                    <a
                      key={product.name}
                      href={`#${product.name.toLowerCase().replace(" ", "-")}`}
                      className="p-3 rounded-lg hover:bg-[#F8FAFC] transition-all duration-300 group"
                      style={{ borderLeft: `3px solid ${product.color}` }}
                    >
                      <div className="text-[#0F172A] font-bold text-[15px] group-hover:text-[#0066CC] transition-colors">{product.name}</div>
                      <div className="text-[#475569] text-[13px]">{product.description}</div>
                      <div className="text-[#94A3B8] text-[12px] mt-1">{product.target}</div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/company" className="text-white/80 hover:text-white text-sm font-semibold transition-colors duration-300">
              Company
            </Link>
            <Link href="/newsletter" className="text-white/80 hover:text-white text-sm font-semibold transition-colors duration-300">
              Newsletter
            </Link>
            <Link href="/careers" className="text-white/80 hover:text-white text-sm font-semibold transition-colors duration-300">
              Careers
            </Link>
          </div>

          {/* Right side - Book Demo + Social Icons */}
          <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
            {/* Social Icons */}
            <div className="flex items-center gap-2">
              <a 
                href="https://youtube.com/@liquidmindai" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white/10 hover:scale-110"
              >
                <Youtube className="w-4 h-4 text-white/80 hover:text-white" />
              </a>
              <a 
                href="https://linkedin.com/company/liquidmind" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white/10 hover:scale-110"
              >
                <Linkedin className="w-4 h-4 text-white/80 hover:text-white" />
              </a>
              <a 
                href="mailto:support@liquidmind.ai"
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white/10 hover:scale-110"
              >
                <Mail className="w-4 h-4 text-white/80 hover:text-white" />
              </a>
            </div>
            
            <a
              href="#demo"
              className="px-5 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 hover:scale-105 btn-shine"
              style={{
                background: "linear-gradient(90deg, #0066CC, #00A86B)",
                color: "#FFFFFF",
                boxShadow: "0 4px 20px rgba(0,102,204,0.3)",
              }}
            >
              Book Demo
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white transition-transform duration-300 hover:scale-110"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden fixed inset-0 z-40 pt-[112px] transition-all duration-500 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          style={{ background: "rgba(255,255,255,0.98)" }}
        >
          <div className="p-6 space-y-4">
            <a href="#products" className="block text-[#0F172A] text-lg font-semibold py-3 border-b border-[#E2E8F0] hover:text-[#0066CC] transition-colors">
              Products
            </a>
            <Link href="/company" className="block text-[#0F172A] text-lg font-semibold py-3 border-b border-[#E2E8F0] hover:text-[#0066CC] transition-colors">
              Company
            </Link>
            <Link href="/newsletter" className="block text-[#0F172A] text-lg font-semibold py-3 border-b border-[#E2E8F0] hover:text-[#0066CC] transition-colors">
              Newsletter
            </Link>
            <Link href="/careers" className="block text-[#0F172A] text-lg font-semibold py-3 border-b border-[#E2E8F0] hover:text-[#0066CC] transition-colors">
              Careers
            </Link>
            
            {/* Social Icons Mobile */}
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

      {/* Mobile fixed bottom bar */}
      <div 
        className="lg:hidden fixed bottom-0 left-0 right-0 z-50 flex"
        style={{ background: "#FFFFFF", borderTop: "1px solid #E2E8F0", boxShadow: "0 -4px 20px rgba(0,0,0,0.1)" }}
      >
        <a 
          href="https://wa.me/919876543210" 
          className="flex-1 py-4 text-center text-[#0F172A] font-semibold text-sm border-r border-[#E2E8F0] flex items-center justify-center gap-2 hover:bg-[#F8FAFC] transition-colors"
        >
          WhatsApp
        </a>
        <a 
          href="#demo" 
          className="flex-1 py-4 text-center font-semibold text-sm flex items-center justify-center gap-2"
          style={{ background: "linear-gradient(90deg, #0066CC, #00A86B)", color: "#FFFFFF" }}
        >
          Book Demo
        </a>
      </div>
    </>
  )
}
