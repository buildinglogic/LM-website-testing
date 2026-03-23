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
    // Show warnings in console so you can see if anything is wrong
    // logLevel: 2=Warn, 3=Verbose/Debug
    logLevel: process.env.NODE_ENV === 'development' ? 3 : 2,

    defaultTracking: {
      pageViews: true,        // auto page-view on every route change
      sessions: true,         // session start / session end
      formInteractions: true, // form field focus & submit
      fileDownloads: true,    // any <a download> clicks
      attribution: true,      // UTM params, referrer
    },

    // Flush events immediately (don't batch) — critical for seeing events in real-time
    flushQueueSize: 1,
    flushIntervalMillis: 0,

    // Don't use batch endpoint — use real-time endpoint
    useBatch: false,
  })
}

declare global {
  interface Window {
    posthog: any;
  }
}

/** Generic event tracker — pushes symmetrically to Amplitude and PostHog */
export const track = (
  event: string,
  properties?: Record<string, unknown>
) => {
  if (typeof window === 'undefined') return;
  
  try {
    // 1. Amplitude Fire (if initialized)
    if (amplitude && typeof amplitude.track === 'function') {
      amplitude.track(event, properties)
    }
  } catch (e) {
    console.warn('[Amplitude] Failed to track event:', e)
  }
  
  try {
    // 2. PostHog Fire (Intelligent Semantic B2B Logging)
    if (posthog && typeof posthog.capture === 'function') {
      // Try the imported posthog instance first (it's a singleton)
      posthog.capture(event, properties)
    } else if (window.posthog && typeof window.posthog.capture === 'function') {
      // Fallback to window object
      window.posthog.capture(event, properties)
    }
  } catch (e) {
    console.warn('[PostHog] Failed to track event:', e)
  }
}

// ─── Page / Section Views ────────────────────────────────────

export const trackSectionView = (section: string) =>
  track(`${section} Section Viewed`)

// ─── CTA Button Clicks ───────────────────────────────────────

/** "Book Free Demo" / "Schedule My Demo" hero CTA */
export const trackBookDemoCTAClick = (location: string) =>
  track('Book Free Demo', { location })

/** "Watch Demo" / video CTA in hero */
export const trackWatchDemoClick = (location: string) =>
  track('Watch Demo', { location })

/** WhatsApp floating button */
export const trackWhatsAppClick = () =>
  track('WhatsApp', { location: 'Floating Button' })

/** "Get Your Report" inside ROI calculator */
export const trackROIReportClick = (annualRisk: number, estimatedProtectionLow: number) =>
  track('Get Your Report', { location: 'ROI Calculator', annualRisk, estimatedProtectionLow })

// ─── Form Events ─────────────────────────────────────────────

/** User lands on /book-demo page */
export const trackDemoFormView = () =>
  track('Book Demo Page')

/** User starts filling in the form (first field focus) */
export const trackDemoFormStart = () =>
  track('Book Demo Form Started')

/** Demo form submitted successfully */
export const trackDemoFormSubmit = (data: {
  company?: string
  location?: string
}) =>
  track('Schedule My Demo', {
    company: data.company,
    location: data.location,
  })

// ─── ROI Calculator Interactions ─────────────────────────────

/** Fired when a user moves the shipments slider */
export const trackROIShipmentsChanged = (value: number) =>
  track('Monthly Shipments Changed', { value })

/** Fired when a user moves the FOB value slider */
export const trackROIFOBChanged = (value: number) =>
  track('Avg FOB Value (Lakhs) Changed', { value })

// ─── Navigation ──────────────────────────────────────────────

export const trackNavClick = (label: string) =>
  track(label, { location: 'Navigation' })

// ─── Video ───────────────────────────────────────────────────

export const trackVideoPlayed = (title: string) =>
  track(`${title} Video Played`)

// ─── Product Interest ────────────────────────────────────────

export const trackProductCardHover = (product: string) =>
  track(`${product} Product Hovered`)

export const trackProductCTAClick = (product: string, cta: string) =>
  track(`${cta} Clicked on ${product}`)

// ─── Journey & Product Engagement ─────────────────────────────

export const trackProductTabNavigated = (product: string, location: string) =>
  track(product, { action: 'Tab Navigated', location })

export const trackJourneyStepViewed = (stepNumber: number, stepName: string) =>
  track(stepName, { stepNumber })

// ─── ROI Calculator (Deep Intent) ─────────────────────────────

export const trackROICalculatorStarted = () =>
  track('ROI Calculator Started')

// ─── Proof & Media ────────────────────────────────────────────

export const trackAwardInteracted = (awardName: string) =>
  track(`${awardName} Award Interacted`)

export const trackPartnerInteracted = (partnerName: string) =>
  track(`${partnerName} Partner Interacted`)

export const trackExternalLinkClicked = (destination: string) =>
  track(`${destination} External Link Clicked`)

export const trackFooterLinkClicked = (linkName: string) =>
  track(linkName, { location: 'Footer' })

// ─── FAQ ─────────────────────────────────────────────────────

export const trackFAQExpanded = (question: string) =>
  track(question, { action: 'FAQ Expanded' })
