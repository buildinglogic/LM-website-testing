'use client'

import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import { useRef, useState, useEffect, Suspense } from 'react'
import PostHogPageView from './PostHogPageView'
import { initAmplitude } from '@/lib/amplitude'

export function PHProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',

      // ── Core tracking ──────────────────────────────────────────
      capture_pageview: false,      // Disabled here because we use PostHogPageView for better App Router support
      capture_pageleave: true,      // bounce / time-on-page tracking

      // ── Auto-capture: clicks, forms, rage-clicks — zero extra code ──
      autocapture: true,

      // ── Session recordings (free up to 5,000/month) ──────────────
      session_recording: {
        maskAllInputs: true,        // hides passwords / sensitive fields
        maskTextSelector: '*',      // GDPR-safe: masks all text content
      },

      // ── Performance: only load in production ─────────────────────
      loaded: (ph) => {
        if (process.env.NODE_ENV === 'development') ph.debug()
      },
    })
    
    // Explicitly set window.posthog for global access
    if (typeof window !== 'undefined') {
      window.posthog = posthog
    }

    initAmplitude()
  }, [])

  return (
    <PostHogProvider client={posthog}>
      <Suspense fallback={null}>
        <PostHogPageView />
      </Suspense>
      {children}
    </PostHogProvider>
  )
}
