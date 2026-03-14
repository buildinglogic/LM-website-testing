import Image from "next/image"

export function Footer() {
  return (
    <footer style={{ background: "#0F172A" }}>
      <div className="w-full px-4 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo */}
          <Image 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FQklSuzkmSwjvO1CP9LcCeqsf0SOzb.png"
            alt="Liquidmind"
            width={140}
            height={35}
            className="h-8 w-auto"
          />
          
          {/* Copyright */}
          <p className="text-[13px]" style={{ color: "#64748B" }}>
            © 2026 LIQUIDMIND Product Consulting Pvt. Ltd.
          </p>
          
          {/* Links */}
          <div className="flex items-center gap-4 text-[13px]" style={{ color: "#64748B" }}>
            <a href="#privacy" className="transition-colors duration-300 hover:text-white">Privacy</a>
            <span>·</span>
            <a href="#terms" className="transition-colors duration-300 hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
