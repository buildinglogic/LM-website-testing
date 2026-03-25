"use client"

import { useRef, useState, useEffect } from "react"
import Link from "next/link"
import { trackBookDemoCTAClick } from "@/lib/amplitude"

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsInView(true) }, { threshold })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])
  return { ref, isInView }
}

export function CTASection() {
  const { ref, isInView } = useInView()

  return (
    <section ref={ref} id="demo" className="py-12 lg:py-16 px-4 lg:px-6 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0066CC 0%, #004999 100%)" }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl transform -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-white/5 rounded-full blur-3xl transform translate-y-1/2" />
      </div>

      <div className="w-full max-w-[700px] mx-auto text-center relative z-10">
        <div className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-[30px] lg:text-[48px] font-bold leading-[1.1] text-white mb-3">
            Stop Losing Money to<br />Manual Documentation
          </h2>
          <p className="text-[17px] lg:text-xl text-white/80 mb-6 max-w-lg mx-auto">
            Get your export operations report and see exactly where compliance gaps are costing you.
          </p>
        </div>

        <div className={`flex flex-col sm:flex-row items-center justify-center gap-3 transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Link href="/book-demo"
            onClick={() => trackBookDemoCTAClick('CTA Section')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[15px] font-bold transition-all hover:scale-105"
            style={{ background: "#FFFFFF", color: "#0066CC" }}>
            <span>Schedule Your Demo</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <a href="mailto:support@liquidmind.ai"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[15px] font-bold transition-all hover:bg-white/20"
            style={{ background: "transparent", color: "#FFFFFF", border: "2px solid rgba(255,255,255,0.5)" }}>
            <span>Contact Us</span>
          </a>
        </div>

        <div className={`mt-6 flex items-center justify-center gap-5 transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-1.5 text-white/60 text-[13px]">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>Enterprise-grade Security</span>
          </div>
          <div className="flex items-center gap-1.5 text-white/60 text-[13px]">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>95% Accuracy</span>
          </div>
        </div>
      </div>
    </section>
  )
}
