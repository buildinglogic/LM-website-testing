import { Resend } from 'resend'
import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

let resend: any = null
if (process.env.RESEND_API_KEY) {
  resend = new Resend(process.env.RESEND_API_KEY)
} else {
  console.warn('[demo-gate] Missing RESEND_API_KEY - email notifications disabled')
}

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

const productNames: Record<string, string> = {
  patram: 'Patram AI',
  tradeguard: 'TradeGuard',
  tariffiq: 'TariffIQ',
}

function internalNotification(email: string, product: string) {
  const name = productNames[product] || product
  return `
    <div style="background:${brand.bg};padding:24px;font-family:sans-serif;">
      <div style="max-width:480px;margin:0 auto;border-radius:12px;
                  border:1px solid ${brand.border};overflow:hidden;
                  box-shadow:0 4px 24px rgba(0,0,0,0.06);">
        <div style="background:${brand.dark};padding:24px 32px;border-radius:12px 12px 0 0;">
          <span style="font-size:22px;font-weight:800;color:#fff;">Liquidmind AI</span>
        </div>
        <div style="padding:28px 32px;background:${brand.card};">
          <h2 style="margin:0 0 4px;font-size:18px;color:${brand.dark};">New Demo Viewer</h2>
          <table width="100%" style="border-collapse:collapse;font-size:14px;margin-top:16px;">
            <tr style="border-bottom:1px solid ${brand.border};">
              <td style="padding:10px 0;color:${brand.muted};width:80px;">Email</td>
              <td style="padding:10px 0;"><a href="mailto:${email}" style="color:${brand.blue};font-weight:600;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding:10px 0;color:${brand.muted};">Product</td>
              <td style="padding:10px 0;color:${brand.dark};font-weight:600;">${name}</td>
            </tr>
          </table>
        </div>
        <div style="background:${brand.bg};padding:20px 32px;border-top:1px solid ${brand.border};
                    border-radius:0 0 12px 12px;font-family:sans-serif;font-size:12px;color:${brand.muted};text-align:center;">
          Liquidmind AI · Banashankari III Stage, Bangalore 560085
        </div>
      </div>
    </div>`
}

export async function POST(req: Request) {
  try {
    const { email, product } = await req.json()

    if (!email || !product) {
      return NextResponse.json({ ok: false, error: 'Missing email or product' }, { status: 400 })
    }

    const { error: dbError } = await supabase
      .from('demo_gate_leads')
      .upsert({ email, product }, { onConflict: 'email,product' })

    if (dbError) console.error('[demo-gate] DB error:', dbError.message)

    if (resend) {
      const name = productNames[product] || product
      await resend.emails.send({
        from:    'Liquidmind AI <naveen@liquidmind.ai>',
        to:      'naveen@liquidmind.ai',
        subject: `New Demo Viewer — ${email} (${name})`,
        html:    internalNotification(email, product),
      })
    } else {
      console.warn('[demo-gate] Resend not initialized - skipping notification')
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[demo-gate]', err)
    return NextResponse.json({ ok: false, error: 'Failed to process request' }, { status: 500 })
  }
}
