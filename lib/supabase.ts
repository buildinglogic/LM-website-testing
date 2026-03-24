import { createClient } from '@supabase/supabase-js'

// Server-only client using the service role key (bypasses RLS)
// Optional: only initialize if env vars are present
let supabase: any = null

if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
  supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  )
} else {
  console.warn('[Supabase] Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY - database features disabled')
}

export { supabase }
