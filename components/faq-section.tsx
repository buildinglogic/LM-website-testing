"use client"

import { useState } from "react"
import { Plus, X } from "lucide-react"

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
      {
        question: "Is my document data stored or shared?",
        answer: "No. Documents are processed in-memory on Azure's enterprise infrastructure and deleted after the session ends."
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
    label: "FOR ALL",
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

export function FAQSection() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set())

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
    <section id="faq" className="py-20 lg:py-30 px-6 lg:px-20" style={{ background: "#050A14" }}>
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-3xl lg:text-[52px] font-bold text-white leading-tight text-center mb-12">
          Every Question You Have Before Saying Yes.
        </h2>

        <div className="space-y-8">
          {faqGroups.map((group, groupIdx) => (
            <div key={groupIdx}>
              <span className="text-[#64748B] text-[11px] font-bold tracking-[0.12em] uppercase block mb-4">
                {group.label}
              </span>
              <div className="space-y-0">
                {group.items.map((item, itemIdx) => {
                  const id = `${groupIdx}-${itemIdx}`
                  const isOpen = openItems.has(id)
                  
                  return (
                    <div key={id} className="border-b border-[#1E3557]">
                      <button
                        onClick={() => toggleItem(id)}
                        className="w-full py-5 flex items-center justify-between text-left group"
                      >
                        <span className={`text-lg font-semibold transition-colors ${isOpen ? "text-[#00E5B4]" : "text-white group-hover:text-[#00E5B4]"}`}>
                          {item.question}
                        </span>
                        <span className="text-[#94A3B8] ml-4 flex-shrink-0">
                          {isOpen ? <X className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                        </span>
                      </button>
                      <div 
                        className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 pb-5" : "max-h-0"}`}
                      >
                        <p className="text-[#94A3B8] text-base leading-relaxed">
                          {item.answer}
                        </p>
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
