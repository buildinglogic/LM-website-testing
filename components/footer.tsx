import { Linkedin, Youtube, MessageCircle, MapPin, Mail, Facebook, Instagram } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const footerLinks = {
  products: [
    { label: "Tradeguard", href: "#tradeguard" },
    { label: "Patram AI", href: "#patram" },
    { label: "TariffIQ", href: "#tariffiq" },
    { label: "API Documentation", href: "#api" },
  ],
  company: [
    { label: "About Us", href: "/company" },
    { label: "Our Mission", href: "/company#mission" },
    { label: "Awards", href: "/company#awards" },
    { label: "Newsletter", href: "/newsletter" },
    { label: "Careers", href: "/careers" },
  ],
}

export function Footer() {
  return (
    <footer style={{ background: "#0F172A", borderTop: "1px solid #1E293B" }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-20 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Products */}
          <div>
            <h4 className="text-[12px] font-bold tracking-[0.1em] uppercase mb-4" style={{ color: "#94A3B8" }}>PRODUCTS</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[15px] transition-colors duration-300 hover:text-[#0066CC]" style={{ color: "#FFFFFF" }}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[12px] font-bold tracking-[0.1em] uppercase mb-4" style={{ color: "#94A3B8" }}>COMPANY</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[15px] transition-colors duration-300 hover:text-[#0066CC]" style={{ color: "#FFFFFF" }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="col-span-2 md:col-span-2">
            <h4 className="text-[12px] font-bold tracking-[0.1em] uppercase mb-4" style={{ color: "#94A3B8" }}>CONTACT US</h4>
            <div className="space-y-2 mb-6">
              <p className="text-[15px]" style={{ color: "#FFFFFF" }}>Banashankari III Stage</p>
              <p className="text-[15px]" style={{ color: "#FFFFFF" }}>Kathriguppe</p>
              <p className="text-[15px]" style={{ color: "#FFFFFF" }}>Bangalore</p>
              <p className="text-[15px]" style={{ color: "#FFFFFF" }}>Karnataka - 560085</p>
              <p className="text-[15px]" style={{ color: "#FFFFFF" }}>India</p>
              <a href="mailto:support@liquidmind.ai" className="text-[15px] hover:underline block mt-3" style={{ color: "#0066CC" }}>
                support@liquidmind.ai
              </a>
            </div>
            
            {/* Social Icons */}
            <div className="flex flex-wrap items-center gap-3">
              <a 
                href="https://linkedin.com/company/liquidmind" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ background: "#0066CC" }}
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a 
                href="https://maps.google.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ background: "#0066CC" }}
              >
                <MapPin className="w-5 h-5 text-white" />
              </a>
              <a 
                href="mailto:support@liquidmind.ai"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ background: "#0066CC" }}
              >
                <Mail className="w-5 h-5 text-white" />
              </a>
              <a 
                href="https://facebook.com/liquidmindai" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ background: "#0066CC" }}
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a 
                href="https://instagram.com/liquidmindai" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ background: "#0066CC" }}
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a 
                href="https://youtube.com/@liquidmindai" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ background: "#0066CC" }}
              >
                <Youtube className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderColor: "#1E293B" }}>
          <div className="flex items-center gap-4">
            <Image 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FQklSuzkmSwjvO1CP9LcCeqsf0SOzb.png"
              alt="Liquidmind"
              width={140}
              height={35}
              className="h-8 w-auto"
            />
            <p className="text-[13px]" style={{ color: "#64748B" }}>
              © 2025 Liquidmind Product Consulting Pvt. Ltd.
            </p>
          </div>
          <div className="flex items-center gap-4 text-[13px]" style={{ color: "#64748B" }}>
            <a href="#privacy" className="transition-colors duration-300 hover:text-white">Privacy Policy</a>
            <span>·</span>
            <a href="#terms" className="transition-colors duration-300 hover:text-white">Terms of Service</a>
            <span>·</span>
            <a href="#security" className="transition-colors duration-300 hover:text-white">Security</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
