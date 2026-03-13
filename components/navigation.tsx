"use client"

import { useState, useEffect } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const products = [
  {
    name: "Tradeguard",
    description: "Document Mismatch Detection",
    target: "For exporters & CHAs",
    color: "#00E5B4",
  },
  {
    name: "Patram AI",
    description: "AI Document Q&A",
    target: "For audit teams",
    color: "#4DA6FF",
  },
  {
    name: "TariffIQ",
    description: "HSN Classification & Duty Calculator",
    target: "For importers & exporters",
    color: "#F4B942",
  },
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // After scrolling past the announcement bar (40px), stick nav to top
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Announcement Bar */}
      <div 
        className="w-full h-10 flex items-center justify-center px-4 text-[13px] font-bold"
        style={{ background: "linear-gradient(90deg, #F4B942, #F97316)", color: "#050A14" }}
      >
        <span className="hidden sm:inline">
          Aegis Graham Bell Award 2026 · Karnataka Elevate Winner ·{" "}
        </span>
        <span className="sm:hidden">Award Winner 2026 · </span>
        <a href="#demo" className="underline hover:no-underline ml-1">
          Book a Demo
        </a>
      </div>

      {/* Sticky Navigation */}
      <nav
        className="fixed w-full z-50 transition-all duration-300"
        style={{
          top: scrolled ? "0px" : "40px",
          height: "88px",
          background: "rgba(5,10,20,0.95)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid #1E3557",
        }}
      >
        <div className="max-w-[1280px] mx-auto h-full px-6 lg:px-20 flex items-center justify-between">
          {/* Logo - Full height */}
          <Link href="/" className="flex items-center h-full">
            <Image 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FQklSuzkmSwjvO1CP9LcCeqsf0SOzb.png"
              alt="Liquidmind"
              width={320}
              height={88}
              className="h-[70px] lg:h-[80px] w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Products Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button className="flex items-center gap-1 text-[#94A3B8] hover:text-white text-sm font-semibold transition-colors">
                Products <ChevronDown className="w-4 h-4" />
              </button>
              
              {productsOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-[480px] p-6 rounded-xl"
                  style={{ 
                    background: "#0D1526", 
                    border: "1px solid #1E3557",
                  }}
                >
                  <div className="grid grid-cols-2 gap-4">
                    {products.map((product) => (
                      <a
                        key={product.name}
                        href={`#${product.name.toLowerCase().replace(" ", "-")}`}
                        className="p-3 rounded-lg hover:bg-[#1A2A45] transition-colors"
                        style={{ borderLeft: `3px solid ${product.color}` }}
                      >
                        <div className="text-white font-bold text-[15px]">{product.name}</div>
                        <div className="text-[#94A3B8] text-[13px]">{product.description}</div>
                        <div className="text-[#64748B] text-[12px] mt-1">{product.target}</div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/company" className="text-[#94A3B8] hover:text-white text-sm font-semibold transition-colors">
              Company
            </Link>
            <Link href="/newsletter" className="text-[#94A3B8] hover:text-white text-sm font-semibold transition-colors">
              Newsletter
            </Link>
            <Link href="/careers" className="text-[#94A3B8] hover:text-white text-sm font-semibold transition-colors">
              Careers
            </Link>
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="#signin" className="text-white text-sm font-semibold hover:text-[#00E5B4] transition-colors">
              Sign In
            </a>
            <a
              href="#demo"
              className="px-5 py-2.5 rounded-[10px] text-sm font-bold transition-all hover:brightness-110 hover:scale-[1.02]"
              style={{
                background: "linear-gradient(90deg, #00E5B4, #00B8D9)",
                color: "#050A14",
                boxShadow: "0 0 30px rgba(0,229,180,0.25)",
              }}
            >
              Book Demo
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div 
            className="lg:hidden fixed inset-0 z-40 pt-[128px]"
            style={{ background: "rgba(5,10,20,0.98)" }}
          >
            <div className="p-6 space-y-4">
              <a href="#products" className="block text-white text-lg font-semibold py-3 border-b border-[#1E3557]">
                Products
              </a>
              <Link href="/company" className="block text-white text-lg font-semibold py-3 border-b border-[#1E3557]">
                Company
              </Link>
              <Link href="/newsletter" className="block text-white text-lg font-semibold py-3 border-b border-[#1E3557]">
                Newsletter
              </Link>
              <Link href="/careers" className="block text-white text-lg font-semibold py-3 border-b border-[#1E3557]">
                Careers
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile fixed bottom bar */}
      <div 
        className="lg:hidden fixed bottom-0 left-0 right-0 z-50 flex"
        style={{ background: "#0D1526", borderTop: "1px solid #1E3557" }}
      >
        <a 
          href="https://wa.me/919876543210" 
          className="flex-1 py-4 text-center text-white font-semibold text-sm border-r border-[#1E3557] flex items-center justify-center gap-2"
        >
          WhatsApp
        </a>
        <a 
          href="#demo" 
          className="flex-1 py-4 text-center font-semibold text-sm flex items-center justify-center gap-2"
          style={{ background: "linear-gradient(90deg, #00E5B4, #00B8D9)", color: "#050A14" }}
        >
          Book Demo
        </a>
      </div>
    </>
  )
}
