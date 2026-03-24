import * as amplitude from '@amplitude/analytics-browser'
import posthog from 'posthog-js'

let _initialized = false

/** ─────────────────────────────────────────────────────────────
 *  Amplitude initialisation
 *  Called once from providers.tsx — safe to call multiple times
 * ─────────────────────────────────────────────────────────────*/
export const initAmplitude = () => {
  if (_initialized) return
  _initialized = true

  const apiKey = process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY
  if (!apiKey) {
    console.warn('[Amplitude] Missing NEXT_PUBLIC_AMPLITUDE_API_KEY')
    return
  }

  amplitude.init(apiKey, {
    logLevel: process.env.NODE_ENV === 'development' ? 3 : 2,
    defaultTracking: {
      pageViews: true,
      sessions: true,
      // Disabled: auto-capture of form keystrokes risks logging PII (email, phone, company)
      // All form events are tracked manually via trackFormStarted / trackFormSubmitted
      formInteractions: false,
      fileDownloads: true,
      attribution: true,
    },
    flushQueueSize: 1,
    flushIntervalMillis: 0,
    useBatch: false,
  })
}

declare global {
  interface Window {
    posthog: any
  }
}

/** ─────────────────────────────────────────────────────────────
 *  Generic event tracker
 *  Sends every event symmetrically to Amplitude AND PostHog
 * ─────────────────────────────────────────────────────────────*/
export const track = (
  event: string,
  properties?: Record<string, unknown>
) => {
  if (typeof window === 'undefined') return

  try {
    if (amplitude && typeof amplitude.track === 'function') {
      amplitude.track(event, properties)
    }
  } catch (e) {
    console.warn('[Amplitude] track failed:', e)
  }

  try {
    const ph = window.posthog || posthog
    if (ph && typeof ph.capture === 'function') {
      ph.capture(event, properties)
    }
  } catch (e) {
    console.warn('[PostHog] capture failed:', e)
  }
}

// ─── Identity ─────────────────────────────────────────────────

/**
 * Full identity link — called on form submit.
 * Associates all prior anonymous events with the identified user in both
 * Amplitude (setUserId + Identify) and PostHog (identify).
 */
export const identifyUser = (data: {
  email: string
  name?: string
  company?: string
  location?: string
  product_interest?: string
  trade_route_export?: string
  trade_route_import?: string
}) => {
  if (typeof window === 'undefined') return

  try {
    amplitude.setUserId(data.email)
    const identifyObj = new amplitude.Identify()
    if (data.name)               identifyObj.set('name', data.name)
    if (data.company)            identifyObj.set('company', data.company)
    if (data.location)           identifyObj.set('location', data.location)
    if (data.product_interest)   identifyObj.set('product_interest', data.product_interest)
    if (data.trade_route_export) identifyObj.set('trade_route_export', data.trade_route_export)
    if (data.trade_route_import) identifyObj.set('trade_route_import', data.trade_route_import)
    if (data.trade_route_export && data.trade_route_import) {
      identifyObj.set('trade_route', `${data.trade_route_export}→${data.trade_route_import}`)
    }
    amplitude.identify(identifyObj)
  } catch (e) {
    console.warn('[Amplitude] identifyUser failed:', e)
  }

  try {
    const ph = window.posthog || posthog
    if (ph && typeof ph.identify === 'function') {
      ph.identify(data.email, {
        name: data.name,
        company: data.company,
        location: data.location,
        product_interest: data.product_interest,
        trade_route_export: data.trade_route_export,
        trade_route_import: data.trade_route_import,
        ...(data.trade_route_export && data.trade_route_import
          ? { trade_route: `${data.trade_route_export}→${data.trade_route_import}` }
          : {}),
      })
    }
  } catch (e) {
    console.warn('[PostHog] identify failed:', e)
  }
}

/**
 * Partial identity on email field blur.
 * Links the current anonymous session to an email address before the form
 * is submitted — captures abandonment sessions for retargeting.
 */
export const identifyEmailPartial = (email: string) => {
  if (typeof window === 'undefined' || !email.includes('@')) return
  try {
    amplitude.setUserId(email)
  } catch (e) {
    console.warn('[Amplitude] identifyEmailPartial failed:', e)
  }
}

/**
 * Persist trade route selection as a user property.
 * Also stored in sessionStorage so book-demo can pick it up.
 */
export const setTradeRouteProperty = (exportCountry: string, importCountry: string) => {
  if (typeof window === 'undefined') return

  try {
    sessionStorage.setItem('trade_route_export', exportCountry)
    sessionStorage.setItem('trade_route_import', importCountry)
  } catch (_) {}

  try {
    const identifyObj = new amplitude.Identify()
    identifyObj.set('trade_route_export', exportCountry)
    identifyObj.set('trade_route_import', importCountry)
    identifyObj.set('trade_route', `${exportCountry}→${importCountry}`)
    amplitude.identify(identifyObj)
  } catch (e) {
    console.warn('[Amplitude] setTradeRouteProperty failed:', e)
  }

  try {
    const ph = window.posthog || posthog
    if (ph?.people?.set) {
      ph.people.set({ trade_route_export: exportCountry, trade_route_import: importCountry })
    }
  } catch (_) {}
}

// ─── CTA Clicks ───────────────────────────────────────────────

export const trackCTAClicked = (data: {
  cta_name: string
  location: string
  product_source?: string
  cta_source?: string
}) => track('cta_clicked', data)

// ─── Form Events ─────────────────────────────────────────────

export const trackFormViewed = (data: {
  form_name: string
  product_source?: string
  cta_source?: string
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_content?: string
  utm_term?: string
}) => track('form_viewed', data)

export const trackFormStarted = (form_name: string) =>
  track('form_started', { form_name })

export const trackFormSubmitted = (data: {
  form_name: string
  company?: string
  location?: string
  product_source?: string
  cta_source?: string
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_content?: string
  utm_term?: string
  trade_route_export?: string
  trade_route_import?: string
}) => track('form_submitted', data)

// ─── ROI Calculator ───────────────────────────────────────────

export const trackROIInteracted = (data: {
  action: 'started' | 'shipments_changed' | 'fob_changed' | 'report_clicked'
  shipments?: number
  fob_value?: number
  annual_risk?: number
  estimated_protection?: number
}) => track('roi_calculator_interacted', data)

// ─── Trade Route (Country Picker) ────────────────────────────

export const trackTradeRouteOpened = () =>
  track('trade_route_opened', {})

export const trackTradeRouteSelected = (data: {
  export_country: string
  import_country: string
}) => {
  track('trade_route_selected', data)
  setTradeRouteProperty(data.export_country, data.import_country)
}

export const trackTradeRouteSwapped = (data: {
  new_export: string
  new_import: string
}) => {
  track('trade_route_swapped', data)
  setTradeRouteProperty(data.new_export, data.new_import)
}

// ─── Navigation ───────────────────────────────────────────────

export const trackNavClicked = (data: { label: string; dropdown?: string }) =>
  track('nav_clicked', data)

export const trackProductTabNavigated = (product: string, location: string) =>
  track('product_tab_navigated', { product, location })

// ─── Journey ──────────────────────────────────────────────────

export const trackJourneyStepViewed = (stepNumber: number, stepName: string) =>
  track('journey_step_viewed', { step_number: stepNumber, step_name: stepName })

// ─── Video ────────────────────────────────────────────────────

export const trackVideoPlayed = (title: string, location?: string) =>
  track('video_played', { title, location })

// ─── Scroll Depth ─────────────────────────────────────────────

/**
 * Fire once per depth milestone (25 / 50 / 75 / 90 %).
 * Call from a useEffect scroll listener in each product page.
 */
export const trackScrollDepth = (depth_percent: number) => {
  if (typeof window === 'undefined') return
  track('scroll_depth_reached', {
    page_path: window.location.pathname,
    depth_percent,
  })
}

// ─── Exit Intent ──────────────────────────────────────────────

/**
 * Fire when the user moves the mouse toward the browser chrome (desktop).
 * Call from a mouseleave listener on document in each product page.
 */
export const trackExitIntent = (data: {
  scroll_depth_reached?: number
  time_on_page_sec?: number
}) => {
  if (typeof window === 'undefined') return
  track('exit_intent_detected', {
    page_path: window.location.pathname,
    ...data,
  })
}

// ─── Proof & Media ────────────────────────────────────────────

export const trackAwardInteracted = (awardName: string) =>
  track('award_interacted', { award_name: awardName })

export const trackPartnerInteracted = (partnerName: string) =>
  track('partner_interacted', { partner_name: partnerName })

export const trackExternalLinkClicked = (destination: string) =>
  track('external_link_clicked', { destination })

export const trackFooterLinkClicked = (linkName: string) =>
  track('footer_link_clicked', { link_name: linkName })

// ─── FAQ ─────────────────────────────────────────────────────

export const trackFAQExpanded = (question: string, index?: number) =>
  track('faq_expanded', { question, index })

// ─── WhatsApp ─────────────────────────────────────────────────

export const trackWhatsAppClicked = (location = 'Floating Button') =>
  track('whatsapp_clicked', { location })
