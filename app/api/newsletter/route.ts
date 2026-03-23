import { Resend } from 'resend'
import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

// Initialize Resend only if API key exists
let resend: any = null
if (process.env.RESEND_API_KEY) {
  resend = new Resend(process.env.RESEND_API_KEY)
} else {
  console.warn('[newsletter] Missing RESEND_API_KEY - email notifications disabled')
}

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
      <span style="font-family:sans-serif;font-size:22px;font-weight:800;color:#fff;">Liquidmind AI</span>
    </div>`
}

function footer() {
  return `
    <div style="background:${brand.bg};padding:20px 32px;border-top:1px solid ${brand.border};
                border-radius:0 0 12px 12px;font-family:sans-serif;font-size:12px;color:${brand.muted};text-align:center;">
      Liquidmind AI · Banashankari III Stage, Bangalore 560085<br/>
      <a href="https://liquidmind.ai" style="color:${brand.blue};text-decoration:none;">liquidmind.ai</a>&nbsp;·&nbsp;
      You are receiving this because you subscribed to the Liquidmind Trade Insights newsletter.
    </div>`
}

// ─── Internal notification (to Naveen) ─────────────────────────────────────
function internalNewsletterEmail(email: string, role: string | null) {
  return `
    <div style="background:${brand.bg};padding:24px;font-family:sans-serif;">
      <div style="max-width:480px;margin:0 auto;border-radius:12px;
                  border:1px solid ${brand.border};overflow:hidden;
                  box-shadow:0 4px 24px rgba(0,0,0,0.06);">
        ${header()}
        <div style="padding:28px 32px;background:${brand.card};">
          <h2 style="margin:0 0 4px;font-size:18px;color:${brand.dark};">📨 New Newsletter Subscriber</h2>
          <table width="100%" style="border-collapse:collapse;font-size:14px;margin-top:16px;">
            <tr style="border-bottom:1px solid ${brand.border};">
              <td style="padding:10px 0;color:${brand.muted};width:80px;">Email</td>
              <td style="padding:10px 0;"><a href="mailto:${email}" style="color:${brand.blue};font-weight:600;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding:10px 0;color:${brand.muted};">Role</td>
              <td style="padding:10px 0;color:${brand.dark};">${role || 'Not specified'}</td>
            </tr>
          </table>
        </div>
        ${footer()}
      </div>
    </div>`
}

// ─── Welcome email to subscriber (from Naveen) ─────────────────────────────
function userNewsletterEmail() {
  return `
    <div style="background:${brand.bg};padding:24px;font-family:sans-serif;">
      <div style="max-width:560px;margin:0 auto;border-radius:12px;
                  border:1px solid ${brand.border};overflow:hidden;
                  box-shadow:0 4px 24px rgba(0,0,0,0.06);">
        ${header()}
        <div style="padding:28px 32px 20px;background:${brand.card};">
          <h2 style="margin:0 0 12px;font-size:22px;color:${brand.dark};">Welcome to Liquidmind Trade Insights 🚀</h2>
          <p style="margin:0 0 16px;font-size:15px;line-height:1.65;color:${brand.muted};">
            You're now part of a growing community of Indian exporters who are staying ahead
            of trade compliance — and getting their money back faster.
          </p>
          <p style="margin:0 0 10px;font-size:14px;font-weight:700;color:${brand.dark};">Every edition covers:</p>
          <ul style="margin:0 0 20px;padding-left:18px;font-size:14px;line-height:2;color:${brand.muted};">
            <li>Trade compliance insights — what changed, what it means for you</li>
            <li>HSN code & tariff updates (Customs, DGFT, CBIC)</li>
            <li>How to maximise Drawback, RoDTEP & IGST refunds</li>
            <li>Case studies: real exporters, real savings</li>
            <li>Liquidmind product updates & new features</li>
          </ul>

          <div style="background:${brand.bg};border-radius:10px;padding:16px 20px;
                      border:1px solid ${brand.border};margin-bottom:24px;">
            <p style="margin:0;font-size:13px;line-height:1.6;color:${brand.muted};">
              <strong style="color:${brand.dark};">Pro tip:</strong> Want to see how much your export business
              could recover? Use our free
              <a href="https://liquidmind.ai/#calculator" style="color:${brand.blue};font-weight:600;">ROI Calculator</a>
              — takes 30 seconds.
            </p>
          </div>

          <a href="https://liquidmind.ai/book-demo"
             style="display:inline-block;padding:12px 28px;border-radius:8px;
                    background:${brand.gradient};color:#fff;
                    font-weight:700;font-size:14px;text-decoration:none;">
            Book a Free Demo →
          </a>
        </div>

        <div style="padding:20px 32px;background:${brand.card};border-top:1px solid ${brand.border};">
          <p style="margin:0;font-size:13px;color:${brand.muted};">Talk soon,</p>
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
    const { email, role } = await req.json()

    // 1. Upsert into Supabase (handles duplicate emails gracefully)
    const { error: dbError } = await supabase
      .from('newsletter_subscribers')
      .upsert({ email, role: role || null }, { onConflict: 'email' })

    if (dbError) console.error('[newsletter] DB error:', dbError.message)

    // 2. Add to Resend Audience (optional)
    if (process.env.RESEND_AUDIENCE_ID) {
      await resend.contacts.create({
        email,
        audienceId:   process.env.RESEND_AUDIENCE_ID,
        unsubscribed: false,
      })
    }

    // 3. Notify Naveen (from naveen@, to naveen@)
    if (resend) {
      await resend.emails.send({
        from:    'Liquidmind AI <naveen@liquidmind.ai>',
        to:      'naveen@liquidmind.ai',
        subject: `📨 New newsletter subscriber — ${email}`,
        html:    internalNewsletterEmail(email, role || null),
      })
    } else {
      console.warn('[newsletter] Resend not initialized - skipping internal notification')
    }

    // 4. Welcome email to subscriber (from naveen@)
    if (resend) {
      await resend.emails.send({
        from:    'Naveen at Liquidmind AI <naveen@liquidmind.ai>',
        to:      email,
        subject: "You're in — Liquidmind Trade Insights 🚀",
        html:    userNewsletterEmail(),
      })
    } else {
      console.warn('[newsletter] Resend not initialized - skipping welcome email')
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[newsletter]', err)
    return NextResponse.json({ ok: false, error: 'Failed to process request' }, { status: 500 })
  }
}
