"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { MapPin, Briefcase, Clock, ChevronRight, X } from "lucide-react"

const openPositions = [
  {
    id: 1,
    title: "Senior Full Stack Engineer",
    department: "Engineering",
    location: "Bangalore, India",
    type: "Full-time",
    description: "Build and scale our AI-powered trade compliance platform. You'll work on document processing pipelines, real-time extraction systems, and intuitive interfaces.",
    requirements: [
      "5+ years of experience with React, Node.js, and TypeScript",
      "Experience with Python and ML/AI integrations",
      "Strong understanding of database design and optimization",
      "Experience building scalable SaaS applications",
    ],
    niceToHave: [
      "Experience with document processing or OCR systems",
      "Knowledge of international trade or compliance domains",
      "Experience with AWS or GCP cloud services",
    ],
  },
  {
    id: 2,
    title: "AI/ML Engineer",
    department: "AI Research",
    location: "Bangalore, India",
    type: "Full-time",
    description: "Develop and improve our AI models for document extraction, field mapping, and semantic understanding of trade documents.",
    requirements: [
      "3+ years of experience in ML/AI engineering",
      "Strong Python skills with PyTorch or TensorFlow",
      "Experience with NLP and document understanding models",
      "Familiarity with LLM fine-tuning and prompt engineering",
    ],
    niceToHave: [
      "Experience with Azure AI services",
      "Background in OCR or computer vision",
      "Published research in relevant areas",
    ],
  },
  {
    id: 3,
    title: "Product Manager",
    department: "Product",
    location: "Bangalore, India",
    type: "Full-time",
    description: "Own the product roadmap for our trade compliance tools. Work directly with customers to understand their needs and translate them into features.",
    requirements: [
      "4+ years of product management experience in B2B SaaS",
      "Strong analytical and problem-solving skills",
      "Excellent communication and stakeholder management",
      "Experience working with engineering teams on complex products",
    ],
    niceToHave: [
      "Background in fintech, logistics, or trade",
      "Experience with AI/ML products",
      "Understanding of Indian export-import ecosystem",
    ],
  },
  {
    id: 4,
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "Bangalore, India",
    type: "Full-time",
    description: "Help our customers maximize value from Liquidmind products. Be their advocate and ensure they achieve their compliance and cost-saving goals.",
    requirements: [
      "3+ years in customer success or account management",
      "Strong understanding of B2B software",
      "Excellent relationship-building skills",
      "Data-driven approach to measuring success",
    ],
    niceToHave: [
      "Experience in trade, logistics, or compliance",
      "Technical aptitude to understand AI products",
      "Hindi and English fluency",
    ],
  },
  {
    id: 5,
    title: "Sales Development Representative",
    department: "Sales",
    location: "Bangalore, India",
    type: "Full-time",
    description: "Generate and qualify leads for our sales team. Be the first point of contact for potential customers exploring Liquidmind solutions.",
    requirements: [
      "1-3 years in sales or business development",
      "Excellent communication skills (written and verbal)",
      "Hunger to learn and grow",
      "Comfortable with outbound prospecting",
    ],
    niceToHave: [
      "Experience selling to exporters, CHAs, or trade businesses",
      "Understanding of SaaS sales cycles",
      "Regional language skills",
    ],
  },
]

const benefits = [
  { icon: "💰", title: "Competitive Salary", description: "Market-leading compensation packages" },
  { icon: "🏥", title: "Health Insurance", description: "Comprehensive coverage for you and family" },
  { icon: "📚", title: "Learning Budget", description: "Annual allowance for courses and conferences" },
  { icon: "🏠", title: "Flexible Work", description: "Hybrid work model with remote options" },
  { icon: "📈", title: "ESOPs", description: "Ownership in the company you're building" },
  { icon: "🎯", title: "Impact", description: "Work that directly helps Indian exporters" },
]

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<typeof openPositions[0] | null>(null)
  const [showApplication, setShowApplication] = useState(false)

  return (
    <main className="min-h-screen" style={{ background: "#050A14" }}>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-[160px] lg:pt-[180px] pb-16 lg:pb-24 px-6 lg:px-20">
        <div className="max-w-[1280px] mx-auto text-center">
          <div
            className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold tracking-[0.12em] uppercase mb-6"
            style={{
              background: "rgba(0,229,180,0.1)",
              border: "1px solid rgba(0,229,180,0.25)",
              color: "#00E5B4",
            }}
          >
            CAREERS
          </div>
          <h1 className="text-[38px] lg:text-[64px] font-extrabold text-white leading-tight mb-6">
            Build the Future of
            <br />
            <span style={{ color: "#00E5B4" }}>Trade Compliance</span>
          </h1>
          <p className="text-[#94A3B8] text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
            Join a team that's transforming how Indian exporters handle compliance. 
            We're building AI that saves businesses crores every year — and we need talented people to help us scale.
          </p>
          <a
            href="#positions"
            className="inline-block px-8 py-4 rounded-[10px] text-base font-bold transition-all hover:brightness-110"
            style={{
              background: "linear-gradient(90deg, #00E5B4, #00B8D9)",
              color: "#050A14",
            }}
          >
            View Open Positions
          </a>
        </div>
      </section>

      {/* Why Liquidmind Section */}
      <section className="py-16 lg:py-24 px-6 lg:px-20" style={{ background: "#0D1526" }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-[44px] font-bold text-white mb-4">Why Liquidmind?</h2>
            <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
              We're not just building software — we're solving a real problem that costs Indian businesses crores every year.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Real Impact",
                description: "Our products directly help exporters recover money they didn't know they were losing. See your work make a difference.",
                color: "#00E5B4",
              },
              {
                title: "Cutting-Edge Tech",
                description: "Work with the latest AI models, document processing tech, and cloud infrastructure. Learn and grow every day.",
                color: "#4DA6FF",
              },
              {
                title: "Growth Stage",
                description: "Early enough to shape the company, late enough to have real customers and validation. Best of both worlds.",
                color: "#F4B942",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl"
                style={{ 
                  background: "#121E33", 
                  border: "1px solid #1E3557",
                  borderTop: `4px solid ${item.color}`,
                }}
              >
                <h3 className="text-white text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-[#94A3B8] text-[15px] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 px-6 lg:px-20" style={{ background: "#050A14" }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-[44px] font-bold text-white mb-4">Benefits & Perks</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl text-center"
                style={{ background: "#121E33", border: "1px solid #1E3557" }}
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-white text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-[#94A3B8] text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="positions" className="py-16 lg:py-24 px-6 lg:px-20" style={{ background: "#0D1526" }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-[44px] font-bold text-white mb-4">Open Positions</h2>
            <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
              {openPositions.length} open roles across engineering, product, and sales
            </p>
          </div>
          <div className="space-y-4">
            {openPositions.map((job) => (
              <div
                key={job.id}
                onClick={() => setSelectedJob(job)}
                className="p-6 rounded-2xl cursor-pointer transition-all hover:-translate-y-0.5"
                style={{ 
                  background: "#121E33", 
                  border: "1px solid #1E3557",
                }}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <h3 className="text-white text-xl font-bold mb-2">{job.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm">
                      <span className="flex items-center gap-1 text-[#94A3B8]">
                        <Briefcase className="w-4 h-4" />
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1 text-[#94A3B8]">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1 text-[#94A3B8]">
                        <Clock className="w-4 h-4" />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[#00E5B4]">
                    <span className="font-semibold">View Details</span>
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* No Match Section */}
      <section className="py-16 lg:py-24 px-6 lg:px-20" style={{ background: "#050A14" }}>
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-3xl lg:text-[44px] font-bold text-white mb-6">Don't See a Fit?</h2>
          <p className="text-[#94A3B8] text-lg mb-8">
            We're always looking for exceptional people. Send us your resume and tell us how you can contribute.
          </p>
          <a
            href="mailto:careers@liquidmind.ai"
            className="inline-block px-8 py-4 rounded-[10px] text-base font-bold transition-all hover:brightness-110"
            style={{
              background: "linear-gradient(90deg, #00E5B4, #00B8D9)",
              color: "#050A14",
            }}
          >
            Send General Application
          </a>
        </div>
      </section>

      {/* Job Detail Modal */}
      {selectedJob && (
        <div 
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.8)" }}
          onClick={() => setSelectedJob(null)}
        >
          <div 
            className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl p-8"
            style={{ background: "#121E33", border: "1px solid #1E3557" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-white text-2xl font-bold mb-2">{selectedJob.title}</h2>
                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <span className="flex items-center gap-1 text-[#94A3B8]">
                    <Briefcase className="w-4 h-4" />
                    {selectedJob.department}
                  </span>
                  <span className="flex items-center gap-1 text-[#94A3B8]">
                    <MapPin className="w-4 h-4" />
                    {selectedJob.location}
                  </span>
                </div>
              </div>
              <button 
                onClick={() => setSelectedJob(null)}
                className="text-[#64748B] hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="mb-6">
              <h3 className="text-white font-bold mb-2">About the Role</h3>
              <p className="text-[#94A3B8] text-[15px] leading-relaxed">{selectedJob.description}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-white font-bold mb-3">Requirements</h3>
              <ul className="space-y-2">
                {selectedJob.requirements.map((req, idx) => (
                  <li key={idx} className="text-[#94A3B8] text-[15px] flex items-start gap-2">
                    <span className="text-[#00E5B4] mt-1">•</span>
                    {req}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-white font-bold mb-3">Nice to Have</h3>
              <ul className="space-y-2">
                {selectedJob.niceToHave.map((item, idx) => (
                  <li key={idx} className="text-[#64748B] text-[15px] flex items-start gap-2">
                    <span className="text-[#F4B942] mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-4">
              <a
                href={`mailto:careers@liquidmind.ai?subject=Application for ${selectedJob.title}`}
                className="flex-1 py-4 rounded-[10px] text-center text-base font-bold transition-all hover:brightness-110"
                style={{
                  background: "linear-gradient(90deg, #00E5B4, #00B8D9)",
                  color: "#050A14",
                }}
              >
                Apply Now
              </a>
              <button
                onClick={() => setSelectedJob(null)}
                className="px-6 py-4 rounded-[10px] text-base font-semibold text-white transition-all hover:border-[#00E5B4]"
                style={{ background: "transparent", border: "1.5px solid rgba(255,255,255,0.25)" }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
