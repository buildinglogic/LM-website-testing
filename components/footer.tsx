import Image from "next/image"

export function Footer() {
  return (
    <footer className="py-5 px-4 lg:px-6" style={{ background: "#0F172A" }}>
      <div className="w-full max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
        <Image 
          src="/images/liquidmind-logo.png"
          alt="Liquidmind"
          width={140}
          height={35}
          className="h-8 w-auto"
        />
        <p className="text-[12px]" style={{ color: "#64748B" }}>
          © 2026 LIQUIDMIND Product Consulting Pvt. Ltd. All rights reserved.
        </p>
        <div className="flex items-center gap-3 text-[12px]" style={{ color: "#64748B" }}>
          <a href="#privacy" className="hover:text-white transition-colors">Privacy</a>
          <span>·</span>
          <a href="#terms" className="hover:text-white transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  )
}
