import * as amplitude from '@amplitude/analytics-browser'

/** ─────────────────────────────────────────────────────────────
 *  Amplitude initialisation
 *  Called once from providers.tsx — safe to call multiple times
 * ─────────────────────────────────────────────────────────────*/
export const initAmplitude = () => {
  amplitude.init(process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY!, {
    defaultTracking: {
      pageViews: true,      // auto page-view on every route change
      sessions: true,       // session start / session end
      formInteractions: true, // form field focus & submit
      fileDownloads: true,  // any <a download> clicks
    },
    autocapture: true,      // clicks & rage-clicks (no code needed)
  })
}

/** Generic event tracker — use for custom events below */
export const track = (
  event: string,
  properties?: Record<string, unknown>
) => {
  amplitude.track(event, properties)
}

// ─── Page / Section Views ────────────────────────────────────

export const trackSectionView = (section: string) =>
  track('Section Viewed', { section })

// ─── CTA Button Clicks ───────────────────────────────────────

/** "Book Free Demo" / "Schedule My Demo" hero CTA */
export const trackBookDemoCTAClick = (location: string) =>
  track('CTA Clicked', { cta: 'Book Demo', location })

/** "Watch Demo" / video CTA in hero */
export const trackWatchDemoClick = (location: string) =>
  track('CTA Clicked', { cta: 'Watch Demo', location })

/** WhatsApp floating button */
export const trackWhatsAppClick = () =>
  track('CTA Clicked', { cta: 'WhatsApp', location: 'Floating Button' })

/** "Get Your Report" inside ROI calculator */
export const trackROIReportClick = () =>
  track('CTA Clicked', { cta: 'Get ROI Report', location: 'ROI Calculator' })

// ─── Form Events ─────────────────────────────────────────────

/** User lands on /book-demo page */
export const trackDemoFormView = () =>
  track('Form Viewed', { form: 'Book Demo' })

/** User starts filling in the form (first field focus) */
export const trackDemoFormStart = () =>
  track('Form Started', { form: 'Book Demo' })

/** Demo form submitted successfully */
export const trackDemoFormSubmit = (data: {
  company?: string
  location?: string
}) =>
  track('Form Submitted', {
    form: 'Book Demo',
    company: data.company,
    location: data.location,
  })

// ─── ROI Calculator Interactions ─────────────────────────────

/** Fired when a user moves the shipments slider */
export const trackROIShipmentsChanged = (value: number) =>
  track('ROI Calculator Used', { field: 'Monthly Shipments', value })

/** Fired when a user moves the FOB value slider */
export const trackROIFOBChanged = (value: number) =>
  track('ROI Calculator Used', { field: 'Avg FOB Value (Lakhs)', value })

// ─── Navigation ──────────────────────────────────────────────

export const trackNavClick = (label: string) =>
  track('Nav Clicked', { label })

// ─── Video ───────────────────────────────────────────────────

export const trackVideoPlayed = (title: string) =>
  track('Video Played', { title })

// ─── Product Interest ────────────────────────────────────────

export const trackProductCardHover = (product: string) =>
  track('Product Hovered', { product })

export const trackProductCTAClick = (product: string, cta: string) =>
  track('Product CTA Clicked', { product, cta })

// ─── FAQ ─────────────────────────────────────────────────────

export const trackFAQExpanded = (question: string) =>
  track('FAQ Expanded', { question })
