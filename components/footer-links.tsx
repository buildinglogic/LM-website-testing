"use client"

import Link from "next/link"
import { Youtube, Linkedin, Mail } from "lucide-react"

export function FooterLinks() {
  return (
    <section className="py-10 px-4 lg:px-6" style={{ background: "#F8FAFC", borderTop: "1px solid #E2E8F0" }}>
      <div className="w-full max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Products */}
          <div>
            <h4 className="text-sm font-bold mb-3" style={{ color: "#0F172A" }}>Products</h4>
            <ul className="space-y-2">
              <li><a href="#tradeguard" className="text-[13px] hover:text-[#0066CC] transition-colors" style={{ color: "#475569" }}>Tradeguard</a></li>
              <li><a href="#patram" className="text-[13px] hover:text-[#0066CC] transition-colors" style={{ color: "#475569" }}>Patram AI</a></li>
              <li><a href="#tariffiq" className="text-[13px] hover:text-[#0066CC] transition-colors" style={{ color: "#475569" }}>TariffIQ</a></li>
              <li><a href="#" className="text-[13px] hover:text-[#0066CC] transition-colors" style={{ color: "#475569" }}>API Documentation</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-bold mb-3" style={{ color: "#0F172A" }}>Company</h4>
            <ul className="space-y-2">
              <li><Link href="/company" className="text-[13px] hover:text-[#0066CC] transition-colors" style={{ color: "#475569" }}>About Us</Link></li>
              <li><Link href="/company#mission" className="text-[13px] hover:text-[#0066CC] transition-colors" style={{ color: "#475569" }}>Our Mission</Link></li>
              <li><Link href="/company#awards" className="text-[13px] hover:text-[#0066CC] transition-colors" style={{ color: "#475569" }}>Awards</Link></li>
              <li><Link href="/newsletter" className="text-[13px] hover:text-[#0066CC] transition-colors" style={{ color: "#475569" }}>Newsletter</Link></li>
              <li><Link href="/careers" className="text-[13px] hover:text-[#0066CC] transition-colors" style={{ color: "#475569" }}>Careers</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-sm font-bold mb-3" style={{ color: "#0F172A" }}>Contact Us</h4>
            <address className="not-italic text-[13px] leading-relaxed mb-3" style={{ color: "#475569" }}>
              Banashankari III Stage<br />
              Kathriguppe<br />
              Bangalore<br />
              Karnataka - 560085<br />
              India
            </address>
            <a href="mailto:support@liquidmind.ai" className="text-[13px] hover:text-[#0066CC] transition-colors block mb-3" style={{ color: "#0066CC" }}>
              support@liquidmind.ai
            </a>
            <div className="flex items-center gap-2">
              <a href="https://youtube.com/@liquidmindai" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center transition-colors" style={{ background: "#E2E8F0" }}>
                <Youtube className="w-4 h-4" style={{ color: "#475569" }} />
              </a>
              <a href="https://linkedin.com/company/liquidmind" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center transition-colors" style={{ background: "#E2E8F0" }}>
                <Linkedin className="w-4 h-4" style={{ color: "#475569" }} />
              </a>
              <a href="mailto:support@liquidmind.ai"
                className="w-8 h-8 rounded-full flex items-center justify-center transition-colors" style={{ background: "#E2E8F0" }}>
                <Mail className="w-4 h-4" style={{ color: "#475569" }} />
              </a>
            </div>
          </div>

          {/* Newsletter CTA */}
          <div>
            <h4 className="text-sm font-bold mb-3" style={{ color: "#0F172A" }}>Stay Updated</h4>
            <p className="text-[13px] mb-3" style={{ color: "#475569" }}>Get weekly trade compliance insights delivered to your inbox.</p>
            <Link href="/newsletter" 
              className="inline-block px-4 py-2 rounded-lg text-sm font-semibold transition-all hover:scale-105"
              style={{ background: "#0066CC", color: "#FFFFFF" }}>
              Subscribe
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
