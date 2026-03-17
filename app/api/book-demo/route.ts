import { Resend } from 'resend'
import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

const resend = new Resend(process.env.RESEND_API_KEY)

// ─── Shared brand styles ────────────────────────────────────────────────────
const brand = {
  bg:      '#F8FAFC',
  card:    '#FFFFFF',
  blue:    '#0066CC',
  green:   '#00A86B',
  dark:    '#0F172A',
  muted:   '#64748B',
  border:  '#E2E8F0',
  gradient:'linear-gradient(90deg,#0066CC,#00A86B)',
}

function header() {
  return `
    <div style="background:${brand.dark};padding:24px 32px;border-radius:12px 12px 0 0;">
      <span style="font-family:sans-serif;font-size:22px;font-weight:800;
                   background:${brand.gradient};-webkit-background-clip:text;
                   -webkit-text-fill-color:transparent;color:#fff;">
        Liquidmind AI
      </span>
    </div>`
}

function footer() {
  return `
    <div style="background:${brand.bg};padding:20px 32px;border-top:1px solid ${brand.border};
                border-radius:0 0 12px 12px;font-family:sans-serif;font-size:12px;color:${brand.muted};text-align:center;">
      Liquidmind AI · Banashankari III Stage, Bangalore 560085<br/>
      <a href="https://liquidmind.ai" style="color:${brand.blue};text-decoration:none;">liquidmind.ai</a>
    </div>`
}

// ─── Internal notification (to Naveen) ─────────────────────────────────────
function internalDemoEmail(name: string, email: string, company: string, phone: string, location: string) {
  return `
    <div style="background:${brand.bg};padding:24px;font-family:sans-serif;">
      <div style="max-width:560px;margin:0 auto;border-radius:12px;
                  border:1px solid ${brand.border};overflow:hidden;
                  box-shadow:0 4px 24px rgba(0,0,0,0.06);">
        ${header()}
        <div style="padding:28px 32px;background:${brand.card};">
          <h2 style="margin:0 0 4px;font-size:20px;color:${brand.dark};">🎯 New Demo Request</h2>
          <p style="margin:0 0 20px;font-size:13px;color:${brand.muted};">Someone just booked a personalised demo. Here are the details:</p>
          <table width="100%" style="border-collapse:collapse;font-size:14px;">
            <tr style="border-bottom:1px solid ${brand.border};">
              <td style="padding:10px 0;color:${brand.muted};width:110px;">Name</td>
              <td style="padding:10px 0;color:${brand.dark};font-weight:600;">${name}</td>
            </tr>
            <tr style="border-bottom:1px solid ${brand.border};">
              <td style="padding:10px 0;color:${brand.muted};">Email</td>
              <td style="padding:10px 0;"><a href="mailto:${email}" style="color:${brand.blue};font-weight:600;">${email}</a></td>
            </tr>
            <tr style="border-bottom:1px solid ${brand.border};">
              <td style="padding:10px 0;color:${brand.muted};">Company</td>
              <td style="padding:10px 0;color:${brand.dark};font-weight:600;">${company}</td>
            </tr>
            <tr style="border-bottom:1px solid ${brand.border};">
              <td style="padding:10px 0;color:${brand.muted};">Phone</td>
              <td style="padding:10px 0;color:${brand.dark};">${phone || '—'}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;color:${brand.muted};">Location</td>
              <td style="padding:10px 0;color:${brand.dark};">${location || '—'}</td>
            </tr>
          </table>
          <div style="margin-top:24px;">
            <a href="mailto:${email}"
               style="display:inline-block;padding:10px 24px;border-radius:8px;
                      background:${brand.gradient};color:#fff;
                      font-weight:700;font-size:14px;text-decoration:none;">
              Reply to ${name}
            </a>
          </div>
        </div>
        ${footer()}
      </div>
    </div>`
}

// ─── User confirmation (to the prospect) ────────────────────────────────────
function userDemoEmail(name: string) {
  return `
    <div style="background:${brand.bg};padding:24px;font-family:sans-serif;">
      <div style="max-width:560px;margin:0 auto;border-radius:12px;
                  border:1px solid ${brand.border};overflow:hidden;
                  box-shadow:0 4px 24px rgba(0,0,0,0.06);">
        ${header()}
        <div style="padding:28px 32px 20px;background:${brand.card};">
          <h2 style="margin:0 0 8px;font-size:22px;color:${brand.dark};">
            Hi ${name}, we've got your request! 👋
          </h2>
          <p style="margin:0 0 20px;font-size:15px;line-height:1.6;color:${brand.muted};">
            Thank you for booking a personalised demo of <strong style="color:${brand.dark};">Liquidmind AI</strong>.
            Our team will reach out within <strong style="color:${brand.dark};">24 hours</strong> to confirm your slot.
          </p>

          <div style="background:${brand.bg};border-radius:10px;padding:16px 20px;margin-bottom:20px;border:1px solid ${brand.border};">
            <p style="margin:0 0 8px;font-size:13px;font-weight:700;color:${brand.dark};">What to expect in your demo:</p>
            <ul style="margin:0;padding-left:18px;font-size:13px;line-height:1.9;color:${brand.muted};">
              <li>Live document audit on your actual Shipping Bill & Invoice</li>
              <li>Your personalised risk exposure calculation (₹ lost per month)</li>
              <li>How to recover missed Drawback & IGST refunds</li>
              <li>30-minute session · 1-on-1 · No commitment required</li>
            </ul>
          </div>

          <p style="font-size:13px;color:${brand.muted};margin:0 0 4px;">
            Questions in the meantime? Write to us at
            <a href="mailto:support@liquidmind.ai" style="color:${brand.blue};">support@liquidmind.ai</a>
          </p>
        </div>

        <div style="padding:20px 32px;background:${brand.card};border-top:1px solid ${brand.border};">
          <p style="margin:0;font-size:13px;color:${brand.muted};">Warm regards,</p>
          <p style="margin:4px 0 0;font-size:14px;font-weight:700;color:${brand.dark};">Naveen Athresh</p>
          <p style="margin:2px 0 0;font-size:12px;color:${brand.muted};">Founder & CEO, Liquidmind AI</p>
        </div>

        ${footer()}
      </div>
    </div>`
}

// ─── Route Handler ───────────────────────────────────────────────────────────
export async function POST(req: Request) {
  try {
    const { name, email, company, phone, location } = await req.json()

    // 1. Save to Supabase
    const { error: dbError } = await supabase
      .from('demo_leads')
      .insert({ name, email, company, phone, location })

    if (dbError) console.error('[book-demo] DB error:', dbError.message)

    // 2. Notify Naveen (from naveen@, to naveen@)
    await resend.emails.send({
      from:    'Liquidmind AI <naveen@liquidmind.ai>',
      to:      'naveen@liquidmind.ai',
      subject: `🎯 New demo request — ${name} (${company})`,
      html:    internalDemoEmail(name, email, company, phone, location),
    })

    // 3. Confirmation to the prospect (from naveen@)
    await resend.emails.send({
      from:    'Naveen at Liquidmind AI <naveen@liquidmind.ai>',
      to:      email,
      subject: `Your Liquidmind demo is confirmed, ${name}!`,
      html:    userDemoEmail(name),
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[book-demo]', err)
    return NextResponse.json({ ok: false, error: 'Failed to process request' }, { status: 500 })
  }
}
