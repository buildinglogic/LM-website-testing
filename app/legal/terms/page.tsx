import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FooterLinks } from "@/components/footer-links"

export const metadata: Metadata = {
  title: "Terms of Service — Liquidmind AI",
  description: "Liquidmind AI terms of service. Understand your rights and obligations when using our AI trade compliance products.",
  alternates: { canonical: "https://liquidmind.ai/legal/terms" },
  robots: { index: false },
}

function RichText({ text }: { text: string }) {
  const lines = text.split("\n")
  const elements: React.ReactNode[] = []
  let listItems: React.ReactNode[] = []

  const parseLine = (line: string, key: number) => {
    const parts = line.split(/(\*\*[^*]+\*\*)/g)
    return parts.map((p, i) =>
      p.startsWith("**") && p.endsWith("**")
        ? <strong key={i} style={{ color: "#0F172A" }}>{p.slice(2, -2)}</strong>
        : p
    )
  }

  lines.forEach((line, i) => {
    const trimmed = line.trim()
    if (!trimmed) {
      if (listItems.length) {
        elements.push(<ul key={`ul-${i}`} className="space-y-1 mb-3 pl-1">{listItems}</ul>)
        listItems = []
      } else {
        elements.push(<div key={`br-${i}`} className="h-2" />)
      }
    } else if (trimmed.startsWith("•") || trimmed.startsWith("-")) {
      listItems.push(
        <li key={i} className="flex gap-2 text-[13px] leading-relaxed" style={{ color: "#475569" }}>
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#0066CC" }} />
          <span>{parseLine(trimmed.replace(/^[•\-]\s*/, ""), i)}</span>
        </li>
      )
    } else {
      if (listItems.length) {
        elements.push(<ul key={`ul-${i}`} className="space-y-1 mb-3 pl-1">{listItems}</ul>)
        listItems = []
      }
      elements.push(
        <p key={i} className="text-[13px] leading-relaxed mb-2" style={{ color: "#475569" }}>
          {parseLine(trimmed, i)}
        </p>
      )
    }
  })
  if (listItems.length) elements.push(<ul key="ul-end" className="space-y-1 mb-3 pl-1">{listItems}</ul>)
  return <>{elements}</>
}

const sections = [
  {
    id: "A",
    title: "Section A: General Terms",
    subsections: [
      {
        title: "1. Overview of this Agreement",
        content: `This Agreement provides a general description of the Services that LIQUIDMIND® may provide to you. Before using the Services, you must register with LIQUIDMIND® and create an account (a "LIQUIDMIND® Account").\n\n- Section A — Registering for and using your LIQUIDMIND® Account\n- Section B — Your use of the API and the Services\n- Section C — Payment Processing Services\n- Section D — Handling and use of data generated during your use of the Services\n- Section E — Your liability, dispute resolution, and other legal terms`,
      },
      {
        title: "2. Your LIQUIDMIND® Account",
        content: `**a. Registration and Permitted Activities**\n\nOnly businesses (including sole proprietors) and other entities or persons located in India are eligible to apply for a LIQUIDMIND® Account. To register, you or your Representative must provide your business name, physical address, email, phone number, business and tax identification number, URL, and the nature of your business.\n\nYour name and URL may appear on your Customers' bank statements. These descriptors must be recognisable and accurately describe your business. You may only use Payment Processing Services to facilitate Transactions with your Customers.\n\n**b. Business Representative**\n\nYou and your Representative affirm that your Representative is authorised to provide the information described and to bind you to this Agreement. Neither you nor your Representative may be incompetent to contract within the meaning of the Indian Contract Act, 1872.\n\nIf you are a sole proprietor under 18 years old (but at least 13), your Representative must be your parent or legal guardian. You may not use the Services if you are under 13 years of age.\n\n**c. Validation and Underwriting**\n\nAt any time, we may require additional information to verify beneficial ownership, validate information you provided, verify identity, and assess the risk associated with your business. Your failure to provide this information may result in suspension or termination of your LIQUIDMIND® Account.\n\n**d. Changes to Your Business**\n\nYou agree to keep the information in your LIQUIDMIND® Account current and to promptly notify us within three days of any material adverse change in your financial condition, planned liquidation, sale of 25%+ of total assets, or bankruptcy proceedings.`,
      },
      {
        title: "3. Your Relationship with Your Customers",
        content: `You may only use the Services for legitimate Transactions with your Customers. LIQUIDMIND® is not responsible for the products or services you sell. You are solely responsible for the nature and quality of the products or services you provide, and for delivery, support, refunds, and returns.\n\nYou are responsible for knowing whether a Transaction is erroneous or suspicious and for any losses due to erroneous or fraudulent Transactions.\n\nYou expressly agree that LIQUIDMIND® acts only as a payment facilitator. We are not a banking company under the Banking Regulation Act, 1949 or a non-banking financial company under the Reserve Bank of India Act, 1934.`,
      },
      {
        title: "4. Fees and Fines",
        content: `LIQUIDMIND® will provide the Services at the rates and for the fees ("Fees") described on the Pricing page. We may revise the Fees at any time but will provide at least 30 days' advance notice before revisions become applicable to you.\n\nFines may be assessed against you if you process Transactions in violation of the terms of this Agreement or applicable card network rules.`,
      },
    ],
  },
  {
    id: "B",
    title: "Section B: LIQUIDMIND® Technology",
    content: `LIQUIDMIND® grants you a limited, non-exclusive, non-transferable, revocable licence to use the API and any associated documentation solely to develop and operate your integration with the Services.\n\nYou may not:\n\n- Sub-license, sell, resell, transfer, assign, or otherwise dispose of the API\n- Modify or make derivative works based upon the API\n- Reverse engineer or attempt to derive the source code of the API\n- Access the API to build a competitive product or service\n- Engage in automated data collection except as permitted by this Agreement`,
  },
  {
    id: "C",
    title: "Section C: Payment Processing Services",
    content: `When you use our Payment Processing Services, you agree to comply with all applicable card network rules, payment method requirements, and applicable law.\n\nYou are responsible for obtaining all necessary authorisations from your Customers for the Transactions you process. You must promptly inform LIQUIDMIND® of any Chargebacks and cooperate fully in any dispute resolution process.\n\nLIQUIDMIND® reserves the right to withhold or delay settlement of funds where we reasonably believe that such funds may be subject to a Chargeback, fraud claim, or legal proceeding, or where otherwise required by applicable law or our Financial Partners.`,
  },
  {
    id: "D",
    title: "Section D: Data Usage",
    content: `You authorise LIQUIDMIND® to collect, use, retain, and disclose data relating to your use of the Services and the Transactions you process in accordance with this Agreement and the LIQUIDMIND® Privacy Policy.\n\nYou must not use Customer Personal Data you receive through the Services for any purpose other than facilitating the Transaction for which the Customer provided such data, unless you have the Customer's explicit consent.\n\nYou are responsible for maintaining the confidentiality of your LIQUIDMIND® Account credentials and for all activity that occurs under your account.`,
  },
  {
    id: "E",
    title: "Section E: Liability and Disputes",
    content: `LIQUIDMIND® shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits, revenues, data, goodwill, or other intangible losses resulting from your use of the Services.\n\nTo the extent permitted by applicable law, LIQUIDMIND®'s total liability to you for all claims shall not exceed the greater of:\n\n- The total fees paid by you to LIQUIDMIND® during the three months immediately preceding the event giving rise to the claim, or\n- INR 10,000\n\nAny disputes arising out of or related to this Agreement shall be governed by the laws of India. The courts of Bangalore, Karnataka shall have exclusive jurisdiction over all such disputes.`,
  },
]

export default function TermsPage() {
  return (
    <main className="min-h-screen" style={{ background: "#FFFFFF" }}>
      <Navigation />

      {/* Compact header */}
      <section className="pt-[80px] pb-5 px-5 lg:px-8 text-center" style={{ background: "#F8FAFC", borderBottom: "1px solid #E2E8F0" }}>
        <div className="max-w-[700px] mx-auto">
          <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase mb-2" style={{ color: "#94A3B8" }}>
            <span className="h-px w-5 rounded-full inline-block" style={{ background: "linear-gradient(90deg,#0066CC,#00A86B)" }} />
            Legal
            <span className="h-px w-5 rounded-full inline-block" style={{ background: "linear-gradient(270deg,#0066CC,#00A86B)" }} />
          </span>
          <h1 className="text-[20px] sm:text-[26px] lg:text-[32px] font-extrabold mb-1.5" style={{ color: "#0F172A" }}>
            Terms of{" "}
            <span className="bg-gradient-to-r from-[#0066CC] to-[#00A86B] bg-clip-text text-transparent">Service</span>
          </h1>
          <p className="text-[11px] mb-2" style={{ color: "#94A3B8" }}>Last updated: March 7, 2024</p>
          <p className="text-[12px] sm:text-[13px] leading-relaxed max-w-xl mx-auto" style={{ color: "#64748B" }}>
            Please read these Terms carefully before using our Services. By accessing or using the Services you agree to be bound by these Terms.
          </p>
        </div>
      </section>

      {/* Intro box */}
      <section className="py-6 px-5 lg:px-8">
        <div className="max-w-[780px] mx-auto">
          <div className="p-4 rounded-2xl" style={{ background: "#EFF6FF", border: "1px solid rgba(0,102,204,0.2)" }}>
            <p className="text-[13px] leading-relaxed" style={{ color: "#0F172A" }}>
              This LIQUIDMIND® Terms of Service Agreement ("Agreement") is a legal agreement between{" "}
              <strong>LIQUIDMIND® Product Consulting (OPC) Private Ltd.</strong> ("LIQUIDMIND®", "us", or "we") and the entity or person ("you") who registered on the LIQUIDMIND® Account page to receive payment processing, data, technology and analytics services, and other business services.
            </p>
            <p className="text-[13px] leading-relaxed mt-2" style={{ color: "#475569" }}>
              You may not access or use any Services unless you agree to abide by all of the terms and conditions in this Agreement.
              Questions? Contact us at{" "}
              <a href="mailto:support@liquidmind.ai" style={{ color: "#0066CC" }}>support@liquidmind.ai</a>.
            </p>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="pb-14 px-5 lg:px-8">
        <div className="max-w-[780px] mx-auto space-y-4">
          {sections.map((section) => (
            <div key={section.id} className="rounded-2xl overflow-hidden" style={{ border: "1px solid #E2E8F0" }}>
              <div className="px-4 py-3 flex items-center gap-3" style={{ background: "#F8FAFC", borderBottom: "1px solid #E2E8F0" }}>
                <span className="w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold flex-shrink-0"
                  style={{ background: "linear-gradient(135deg,#0066CC,#00A86B)", color: "#FFFFFF" }}>
                  {section.id}
                </span>
                <h2 className="text-[13px] sm:text-[14px] font-bold" style={{ color: "#0F172A" }}>{section.title}</h2>
              </div>
              <div className="p-4 space-y-3">
                {section.content && <RichText text={section.content} />}
                {section.subsections?.map((sub, i) => (
                  <div key={i}>
                    <h3 className="text-[12px] font-bold mb-1.5" style={{ color: "#0066CC" }}>{sub.title}</h3>
                    <RichText text={sub.content} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <FooterLinks />
      <Footer />
    </main>
  )
}
