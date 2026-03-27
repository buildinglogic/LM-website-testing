import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FooterLinks } from "@/components/footer-links"

export const metadata: Metadata = {
  title: "Privacy Policy — Liquidmind AI",
  description: "Read Liquidmind AI's privacy policy. Learn how we collect, use and protect your data when you use our trade compliance platform.",
  alternates: { canonical: "https://liquidmind.ai/legal/privacy-policy" },
  robots: { index: false },
}

// Renders strings with **bold**, *italic*, and • bullet lines
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
    id: "1",
    title: "Personal Data We Collect and How We Use and Share It",
    subsections: [
      {
        title: "1.1 End Customers",
        content: `LIQUIDMIND® provides various Business Services to our Business Users, which include in-person or online checkout payment processing. When acting as a service provider — also referred to as a data processor — for a Business User, we process End Customer Personal Data in accordance with our agreement with the Business User and their lawful instructions.\n\nBusiness Users are responsible for ensuring that the privacy rights of their End Customers are respected, including obtaining appropriate consents. If you're an End Customer, please refer to the privacy policy of the Business User you're doing business with.\n\n**a. Personal Data we collect about End Customers**\n\nTransaction Data. We receive your Transaction Data if you make payments to, receive refunds from, or otherwise transact with our Business User.\n\nIdentity/Verification Information. LIQUIDMIND® may use 3rd party verification and fraud prevention services to verify Personal Data about you, such as your authorisation to use a particular payment method.\n\n**b. How we use and share Personal Data of End Customers**\n\nWe may use End Customers' Personal Data to provide our Business Services, including payment processing, accounting, fraud detection, and identity verification services.`,
      },
      {
        title: "1.2 Representatives",
        content: `We collect, use, and share Personal Data from Representatives of Business Users to provide our Business Services.\n\nIdentification Information. We need your contact details — name, postal address, telephone number, and email — to fulfil our Financial Partner and regulatory requirements, verify your identity, and prevent fraudulent activities.`,
      },
      {
        title: "1.3 Visitors",
        content: `When you browse our Sites, we receive your Personal Data either provided directly by you or collected through our use of cookies and similar technologies.\n\nPersonalisation. We use data from cookies to measure user engagement, improve navigation, and customise your experience.\n\nAdvertising. Where allowed by applicable law, we use and share Visitors' Personal Data with third parties to advertise and market our Services.\n\nEngagement. We use information collected about your devices to provide opportunities for further interactions such as chatbot interactions.`,
      },
    ],
  },
  {
    id: "2",
    title: "More Ways We Collect, Use, and Share Personal Data",
    subsections: [
      {
        title: "Online Activity",
        content: `Depending on the Service used, we may collect information related to the devices and browsers you use across our Sites and third-party websites, usage data including IP address, language preference, time spent on Sites, pages visited, links clicked, and payment methods used.`,
      },
      {
        title: "Communication and Engagement",
        content: `We collect information you share through support tickets, emails, or social media. If you respond to surveys from LIQUIDMIND®, we collect your email address, name, and any other data you include. We also collect your engagement data such as registration and attendance at LIQUIDMIND® events.`,
      },
    ],
  },
  {
    id: "3",
    title: "Legal Bases for Processing Data",
    subsections: [
      {
        title: "Legal Bases",
        content: `For purposes of the General Data Protection Regulation and other applicable data protection laws, we rely on the following legal bases:\n\n**Contractual and Pre-Contractual Business Relationships** — We process Personal Data to enter into business relationships and fulfil contractual obligations, including account management, payment processing, and billing.\n\n**Legal Compliance** — We process Personal Data to verify identities and comply with AML, KYC, and financial reporting obligations.\n\n**Legitimate Interests** — We process Personal Data for fraud detection, security, improvement of Services, and analysis.\n\n**Consent** — We may rely on consent to collect and process Personal Data. You have the right to withdraw consent at any time.\n\n**Substantial Public Interest** — We may process special categories of Personal Data when necessary for reasons of substantial public interest consistent with applicable law.`,
      },
    ],
  },
  {
    id: "4",
    title: "Your Rights and Choices",
    subsections: [
      {
        title: "Your Data Protection Rights",
        content: `Depending on your location and subject to applicable law, you may have the following rights:\n\n• The right to request confirmation of whether LIQUIDMIND® is processing Personal Data associated with you\n• The right to request rectification or update of your Personal Data\n• The right to request erasure of your Personal Data in certain circumstances\n• The right to request restriction of use of your Personal Data\n• The right to data portability\n• The right to withdraw consent\n• The right to object to processing based on legitimate interests\n• The right not to be discriminated against for exercising these rights\n• The right to appeal any decision by contacting our DPO at support@liquidmind.ai`,
      },
    ],
  },
  {
    id: "5",
    title: "Security and Retention",
    content: `We make reasonable efforts to provide a level of security appropriate to the risk associated with processing your Personal Data. We maintain organisational, technical, and administrative measures designed to protect your Personal Data from unauthorised access, destruction, loss, alteration, or misuse.\n\nWe encourage you to use a strong password for your LIQUIDMIND® account and avoid using identical credentials across services. If you suspect your account's security has been compromised, please write to us at support@liquidmind.ai immediately.\n\nWe retain your Personal Data for as long as we continue to provide the Services, or for a period in which we reasonably foresee continuing to provide them, including to comply with legal obligations, enable fraud prevention, and meet tax, accounting, and financial reporting requirements.`,
  },
  {
    id: "6",
    title: "International Data Transfers",
    content: `As a global business, it may sometimes be necessary to transfer your Personal Data to countries other than your own, including the United States. When transferring data across borders, we take measures to comply with applicable data protection laws. We employ Standard Contractual Clauses approved by the European Commission and the UK International Data Transfer Addendum where mandated by applicable law.`,
  },
  {
    id: "7",
    title: "Updates and Notifications",
    content: `We may change this Policy from time to time to reflect new services, changes in our privacy practices, or relevant laws. The "Last updated" date at the top of this Policy indicates when it was last revised. Changes are effective when we post the revised Policy on the Services or otherwise provide notice as required by law.`,
  },
  {
    id: "8",
    title: "Jurisdiction-Specific Provisions",
    subsections: [
      {
        title: "India",
        content: `In some cases, and as permitted under the DPDPA, we may rely on "legitimate use" as a legal basis. You may be asked to consent to the collection and processing of your Aadhaar number by LIQUIDMIND® India Private Limited. This is purely voluntary — you may provide other identification documents instead and will not be denied service for not submitting Aadhaar details.\n\nFor questions or complaints about processing of your Personal Data in India, contact our grievance officer at support@liquidmind.ai.`,
      },
      {
        title: "United States",
        content: `If you are a consumer located in the United States, we process your personal information in accordance with US privacy laws, including the CCPA, Colorado Privacy Act, Connecticut Act, Florida Digital Bill of Rights, Montana, Oregon, Texas, Utah, and Virginia privacy laws.\n\nYour rights include: the right to know, the right to opt-out from sale or sharing, and the right to limit use of Sensitive Personal Information. LIQUIDMIND® honors the Global Privacy Control (GPC) opt-out preference signals.\n\nTo submit a request, contact us using the methods described in the Contact Us section.`,
      },
    ],
  },
  {
    id: "9",
    title: "Contact Us",
    content: `If you have any questions or complaints about this Policy, please write to us at support@liquidmind.ai. If you are an End Customer, please refer to the privacy policy of the Business User for information regarding their privacy practices, or contact the Business User directly.`,
  },
]

export default function PrivacyPolicyPage() {
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
            Privacy{" "}
            <span className="bg-gradient-to-r from-[#0066CC] to-[#00A86B] bg-clip-text text-transparent">Policy</span>
          </h1>
          <p className="text-[11px] mb-2" style={{ color: "#94A3B8" }}>Last updated: March 7, 2024</p>
          <p className="text-[12px] sm:text-[13px] leading-relaxed max-w-xl mx-auto" style={{ color: "#64748B" }}>
            This Privacy Policy includes important information about your personal data and we encourage you to read it carefully.
          </p>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-6 px-5 lg:px-8" style={{ background: "#FFFFFF", borderBottom: "1px solid #E2E8F0" }}>
        <div className="max-w-[780px] mx-auto">
          <p className="text-[11px] font-semibold uppercase tracking-wider mb-3" style={{ color: "#94A3B8" }}>Contents</p>
          <ol className="grid sm:grid-cols-2 gap-x-8 gap-y-1.5">
            {[
              "Personal Data we collect and how we use and share it",
              "More ways we collect, use and share Personal Data",
              "Legal bases for processing data",
              "Your rights and choices",
              "Security and retention",
              "International data transfers",
              "Updates and notifications",
              "Jurisdiction-specific provisions",
              "Contact us",
            ].map((item, idx) => (
              <li key={idx}>
                <a href={`#section-${idx + 1}`} className="text-[12px] hover:underline" style={{ color: "#0066CC" }}>
                  {idx + 1}. {item}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Intro */}
      <section className="py-6 px-5 lg:px-8">
        <div className="max-w-[780px] mx-auto space-y-2">
          <p className="text-[13px] leading-relaxed" style={{ color: "#475569" }}>
            This Privacy Policy ("Policy") describes the Personal Data we collect, how we use and share it, along with details on how you can reach out to us. In this Policy, <strong style={{ color: "#0F172A" }}>"LIQUIDMIND®"</strong>, "we", "our", or "us" refers to the LIQUIDMIND® entity responsible for the collection, use, and handling of Personal Data.
          </p>
          <p className="text-[13px] leading-relaxed" style={{ color: "#475569" }}>
            <strong style={{ color: "#0F172A" }}>"Personal Data"</strong> refers to any information associated with an identified or identifiable individual. <strong style={{ color: "#0F172A" }}>"Services"</strong> refer to the products and services provided by LIQUIDMIND® under the LIQUIDMIND® Services Agreement.
          </p>
          <p className="text-[13px] leading-relaxed" style={{ color: "#475569" }}>
            Depending on the context, "you" might be an <strong style={{ color: "#0F172A" }}>End Customer</strong>, <strong style={{ color: "#0F172A" }}>End User</strong>, <strong style={{ color: "#0F172A" }}>Representative</strong>, or <strong style={{ color: "#0F172A" }}>Visitor</strong>.
          </p>
        </div>
      </section>

      {/* Sections */}
      <section className="pb-14 px-5 lg:px-8">
        <div className="max-w-[780px] mx-auto space-y-4">
          {sections.map((section) => (
            <div key={section.id} id={`section-${section.id}`} className="rounded-2xl overflow-hidden" style={{ border: "1px solid #E2E8F0" }}>
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
