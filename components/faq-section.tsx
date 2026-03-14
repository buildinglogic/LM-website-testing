"use client"

import { useState, useRef, useEffect } from "react"
import { Plus } from "lucide-react"

const faqGroups = [
  {
    label: "FOR EXPORTERS",
    items: [
      {
        question: "How does Tradeguard prevent drawback claim rejections?",
        answer: "It compares your Tax Invoice against your Shipping Bill field-by-field before you file. 40+ fields verified in under 5 minutes. Any mismatch is flagged with its exact rupee impact before the shipping bill is submitted."
      },
      {
        question: "What document formats do you support?",
        answer: "Tax Invoices, Shipping Bills (ICEGATE), Commercial Invoices, Packing Lists, Bills of Lading, COO certificates. Any PDF including scanned hard copies."
      },
      {
        question: "How long does a comparison take?",
        answer: "Under 5 minutes for a standard Shipping Bill + Invoice pair. Complex multi-document sets take 8–12 minutes."
      },
    ]
  },
  {
    label: "FOR CHAs & CA FIRMS",
    items: [
      {
        question: "Can I manage multiple exporter clients from one account?",
        answer: "Yes. The Growth and Enterprise plans include a multi-client dashboard where you can manage separate document sets for each of your exporter clients."
      },
      {
        question: "Do you offer white-labelling?",
        answer: "Yes, on our Enterprise plan. You can offer Tradeguard under your own brand to your clients."
      },
    ]
  },
  {
    label: "GENERAL",
    items: [
      {
        question: "How is this different from manual checking?",
        answer: "Manual checking covers 20–30% of shipments and has an 8–12% error rate. Tradeguard checks 100% of fields on 100% of shipments with less than 1% error rate. And it takes 5 minutes instead of 4 hours."
      },
      {
        question: "What if the AI makes a wrong call?",
        answer: "Every answer includes a confidence score and the exact source fields it compared. You can review and override any decision. The system also learns from corrections over time."
      },
    ]
  }
]

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold])

  return { ref, isInView }
}

export function FAQSection() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set())
  const { ref, isInView } = useInView()

  const toggleItem = (id: string) => {
    const newOpen = new Set(openItems)
    if (newOpen.has(id)) {
      newOpen.delete(id)
    } else {
      newOpen.add(id)
    }
    setOpenItems(newOpen)
  }

  return (
    <section ref={ref} id="faq" className="min-h-screen py-12 lg:py-16 px-4 lg:px-8 flex items-center" style={{ background: "#FFFFFF" }}>
      <div className="w-full max-w-[900px] mx-auto">
        {/* Header with FAQ badge */}
        <div className={`text-center mb-8 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div
            className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold tracking-[0.12em] uppercase mb-4"
            style={{ background: "rgba(0,102,204,0.1)", border: "1px solid rgba(0,102,204,0.25)", color: "#0066CC" }}
          >
            FAQ
          </div>
          <h2 className="text-[28px] lg:text-[44px] font-bold leading-tight" style={{ color: "#0F172A" }}>
            Questions Before <span className="text-[#0066CC]">Saying Yes?</span>
          </h2>
        </div>

        <div className="space-y-6">
          {faqGroups.map((group, groupIdx) => (
            <div 
              key={groupIdx}
              className={`transition-all duration-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${groupIdx * 100}ms` }}
            >
              <span className="text-[11px] font-bold tracking-[0.12em] uppercase block mb-3" style={{ color: "#0066CC" }}>
                {group.label}
              </span>
              <div className="rounded-xl overflow-hidden" style={{ border: "1px solid #E2E8F0", background: "#FFFFFF" }}>
                {group.items.map((item, itemIdx) => {
                  const id = `${groupIdx}-${itemIdx}`
                  const isOpen = openItems.has(id)
                  
                  return (
                    <div key={id} style={{ borderTop: itemIdx > 0 ? "1px solid #E2E8F0" : "none" }}>
                      <button
                        onClick={() => toggleItem(id)}
                        className="w-full py-4 px-5 flex items-center justify-between text-left group haptic-btn ripple-container"
                      >
                        <span 
                          className={`text-base font-semibold transition-all duration-300 pr-4`} 
                          style={{ color: isOpen ? "#0066CC" : "#0F172A" }}
                        >
                          {item.question}
                        </span>
                        <span 
                          className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                          style={{ 
                            background: isOpen ? "#0066CC" : "#F1F5F9",
                            transform: isOpen ? "rotate(45deg) scale(1.1)" : "rotate(0deg) scale(1)",
                            boxShadow: isOpen ? "0 4px 15px rgba(0,102,204,0.4)" : "none"
                          }}
                        >
                          <Plus className="w-4 h-4" style={{ color: isOpen ? "#FFFFFF" : "#64748B" }} />
                        </span>
                      </button>
                      <div 
                        className={`overflow-hidden transition-all duration-500 ease-out`}
                        style={{ 
                          maxHeight: isOpen ? "300px" : "0px",
                          opacity: isOpen ? 1 : 0,
                        }}
                      >
                        <div className="px-5 pb-4">
                          <p className="text-[14px] leading-relaxed" style={{ color: "#475569" }}>
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
