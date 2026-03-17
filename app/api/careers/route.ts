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
      <span style="font-family:sans-serif;font-size:22px;font-weight:800;color:#fff;">Liquidmind AI</span>
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

// ─── Internal notification (to support@) ────────────────────────────────────
function internalCareerEmail(
  fullName: string, email: string, phone: string,
  position: string, startDate: string, cvLink: string, resumeUrl: string | null
) {
  return `
    <div style="background:${brand.bg};padding:24px;font-family:sans-serif;">
      <div style="max-width:560px;margin:0 auto;border-radius:12px;
                  border:1px solid ${brand.border};overflow:hidden;
                  box-shadow:0 4px 24px rgba(0,0,0,0.06);">
        ${header()}
        <div style="padding:28px 32px;background:${brand.card};">
          <h2 style="margin:0 0 4px;font-size:20px;color:${brand.dark};">📋 New Job Application</h2>
          <p style="margin:0 0 20px;font-size:13px;color:${brand.muted};">A candidate just applied through the website.</p>
          <table width="100%" style="border-collapse:collapse;font-size:14px;">
            <tr style="border-bottom:1px solid ${brand.border};">
              <td style="padding:10px 0;color:${brand.muted};width:110px;">Name</td>
              <td style="padding:10px 0;color:${brand.dark};font-weight:600;">${fullName}</td>
            </tr>
            <tr style="border-bottom:1px solid ${brand.border};">
              <td style="padding:10px 0;color:${brand.muted};">Email</td>
              <td style="padding:10px 0;"><a href="mailto:${email}" style="color:${brand.blue};font-weight:600;">${email}</a></td>
            </tr>
            <tr style="border-bottom:1px solid ${brand.border};">
              <td style="padding:10px 0;color:${brand.muted};">Phone</td>
              <td style="padding:10px 0;color:${brand.dark};">${phone || '—'}</td>
            </tr>
            <tr style="border-bottom:1px solid ${brand.border};">
              <td style="padding:10px 0;color:${brand.muted};">Position</td>
              <td style="padding:10px 0;color:${brand.dark};font-weight:600;">${position}</td>
            </tr>
            <tr style="border-bottom:1px solid ${brand.border};">
              <td style="padding:10px 0;color:${brand.muted};">Start Date</td>
              <td style="padding:10px 0;color:${brand.dark};">${startDate || '—'}</td>
            </tr>
            <tr style="border-bottom:1px solid ${brand.border};">
              <td style="padding:10px 0;color:${brand.muted};">CV / LinkedIn</td>
              <td style="padding:10px 0;">
                ${cvLink ? `<a href="${cvLink}" style="color:${brand.blue};">${cvLink}</a>` : '—'}
              </td>
            </tr>
            <tr>
              <td style="padding:10px 0;color:${brand.muted};">Resume</td>
              <td style="padding:10px 0;">
                ${resumeUrl
                  ? `<a href="${resumeUrl}" style="color:${brand.blue};font-weight:600;">⬇ Download Resume</a>`
                  : '<span style="color:#94A3B8;">Not uploaded</span>'}
              </td>
            </tr>
          </table>
          <div style="margin-top:24px;">
            <a href="mailto:${email}"
               style="display:inline-block;padding:10px 24px;border-radius:8px;
                      background:${brand.gradient};color:#fff;
                      font-weight:700;font-size:14px;text-decoration:none;">
              Reply to ${fullName}
            </a>
          </div>
        </div>
        ${footer()}
      </div>
    </div>`
}

// ─── Confirmation to applicant (from support@) ──────────────────────────────
function userCareerEmail(firstName: string, position: string) {
  return `
    <div style="background:${brand.bg};padding:24px;font-family:sans-serif;">
      <div style="max-width:560px;margin:0 auto;border-radius:12px;
                  border:1px solid ${brand.border};overflow:hidden;
                  box-shadow:0 4px 24px rgba(0,0,0,0.06);">
        ${header()}
        <div style="padding:28px 32px 20px;background:${brand.card};">
          <h2 style="margin:0 0 8px;font-size:22px;color:${brand.dark};">
            Hi ${firstName}, we received your application! 🙌
          </h2>
          <p style="margin:0 0 16px;font-size:15px;line-height:1.65;color:${brand.muted};">
            Thank you for applying for the <strong style="color:${brand.dark};">${position}</strong> role
            at <strong style="color:${brand.dark};">Liquidmind AI</strong>.
          </p>
          <div style="background:${brand.bg};border-radius:10px;padding:16px 20px;
                      border:1px solid ${brand.border};margin-bottom:20px;">
            <p style="margin:0 0 6px;font-size:13px;font-weight:700;color:${brand.dark};">What happens next:</p>
            <ul style="margin:0;padding-left:18px;font-size:13px;line-height:2;color:${brand.muted};">
              <li>Our team will review your application within <strong style="color:${brand.dark};">7 business days</strong></li>
              <li>If your profile is a strong match, we'll reach out to schedule a call</li>
              <li>All applications are treated confidentially</li>
            </ul>
          </div>
          <p style="font-size:13px;color:${brand.muted};margin:0 0 4px;">
            Questions? Reach us at
            <a href="mailto:support@liquidmind.ai" style="color:${brand.blue};">support@liquidmind.ai</a>
          </p>
        </div>

        <div style="padding:20px 32px;background:${brand.card};border-top:1px solid ${brand.border};">
          <p style="margin:0;font-size:13px;color:${brand.muted};">Best of luck,</p>
          <p style="margin:4px 0 0;font-size:14px;font-weight:700;color:${brand.dark};">Team Liquidmind AI</p>
          <p style="margin:2px 0 0;font-size:12px;color:${brand.muted};">
            Building the future of trade compliance in India
          </p>
        </div>
        ${footer()}
      </div>
    </div>`
}

// ─── Route Handler ───────────────────────────────────────────────────────────
export async function POST(req: Request) {
  try {
    const form      = await req.formData()
    const firstName = form.get('firstName') as string
    const lastName  = form.get('lastName')  as string
    const email     = form.get('email')     as string
    const phone     = form.get('phone')     as string
    const position  = form.get('position')  as string
    const startDate = form.get('startDate') as string
    const cvLink    = form.get('cvLink')    as string
    const resume    = form.get('resume')    as File | null

    const fullName = `${firstName} ${lastName}`.trim()

    // 1. Upload resume to Supabase Storage (if provided)
    let resumeUrl: string | null = null
    if (resume && resume.size > 0) {
      const ext  = resume.name.split('.').pop()
      const path = `${Date.now()}-${firstName}-${lastName}.${ext}`
      const buf  = Buffer.from(await resume.arrayBuffer())

      const { error: uploadError } = await supabase.storage
        .from('resumes')
        .upload(path, buf, { contentType: resume.type, upsert: false })

      if (uploadError) {
        console.error('[careers] Storage upload error:', uploadError.message)
      } else {
        const { data } = supabase.storage.from('resumes').getPublicUrl(path)
        resumeUrl = data.publicUrl
      }
    }

    // 2. Save application to Supabase DB
    const { error: dbError } = await supabase
      .from('job_applications')
      .insert({
        first_name: firstName,
        last_name:  lastName,
        email,
        phone,
        position,
        start_date: startDate || null,
        cv_link:    cvLink    || null,
        resume_url: resumeUrl,
      })

    if (dbError) console.error('[careers] DB error:', dbError.message)

    // 3. Notify support team (from support@, to support@)
    await resend.emails.send({
      from:    'Liquidmind AI <support@liquidmind.ai>',
      to:      'support@liquidmind.ai',
      subject: `📋 Application — ${position} — ${fullName}`,
      html:    internalCareerEmail(fullName, email, phone, position, startDate, cvLink, resumeUrl),
    })

    // 4. Confirmation to applicant (from support@)
    await resend.emails.send({
      from:    'Liquidmind AI Careers <support@liquidmind.ai>',
      to:      email,
      subject: `Application received — ${position} at Liquidmind AI`,
      html:    userCareerEmail(firstName, position),
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[careers]', err)
    return NextResponse.json({ ok: false, error: 'Failed to process request' }, { status: 500 })
  }
}
