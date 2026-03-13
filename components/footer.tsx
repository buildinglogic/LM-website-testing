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
    <footer style={{ background: "#050A14", borderTop: "1px solid #1E3557" }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-20 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Products */}
          <div>
            <h4 className="text-[#94A3B8] text-[12px] font-bold tracking-[0.1em] uppercase mb-4">PRODUCTS</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white text-[15px] hover:text-[#00E5B4] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[#94A3B8] text-[12px] font-bold tracking-[0.1em] uppercase mb-4">COMPANY</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white text-[15px] hover:text-[#00E5B4] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="col-span-2 md:col-span-2">
            <h4 className="text-[#94A3B8] text-[12px] font-bold tracking-[0.1em] uppercase mb-4">CONTACT US</h4>
            <div className="space-y-2 mb-6">
              <p className="text-white text-[15px]">Banashankari III Stage</p>
              <p className="text-white text-[15px]">Kathriguppe</p>
              <p className="text-white text-[15px]">Bangalore</p>
              <p className="text-white text-[15px]">Karnataka - 560085</p>
              <p className="text-white text-[15px]">India</p>
              <a href="mailto:support@liquidmind.ai" className="text-[#00E5B4] text-[15px] hover:underline block mt-3">
                support@liquidmind.ai
              </a>
            </div>
            
            {/* Social Icons */}
            <div className="flex flex-wrap items-center gap-3">
              <a 
                href="https://linkedin.com/company/liquidmind" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                style={{ background: "#0077B5" }}
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a 
                href="https://maps.google.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                style={{ background: "#0077B5" }}
              >
                <MapPin className="w-5 h-5 text-white" />
              </a>
              <a 
                href="mailto:support@liquidmind.ai"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                style={{ background: "#0077B5" }}
              >
                <Mail className="w-5 h-5 text-white" />
              </a>
              <a 
                href="https://facebook.com/liquidmindai" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                style={{ background: "#0077B5" }}
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a 
                href="https://instagram.com/liquidmindai" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                style={{ background: "#0077B5" }}
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a 
                href="https://youtube.com/@liquidmindai" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                style={{ background: "#0077B5" }}
              >
                <Youtube className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1E3557] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <Image 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FQklSuzkmSwjvO1CP9LcCeqsf0SOzb.png"
              alt="Liquidmind"
              width={140}
              height={35}
              className="h-8 w-auto"
            />
            <p className="text-[#64748B] text-[13px]">
              © 2025 Liquidmind Product Consulting Pvt. Ltd.
            </p>
          </div>
          <div className="flex items-center gap-4 text-[#64748B] text-[13px]">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>·</span>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
            <span>·</span>
            <a href="#security" className="hover:text-white transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
