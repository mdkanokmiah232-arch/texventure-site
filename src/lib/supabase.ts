import { createClient } from '@supabase/supabase-js';

// Server-side Supabase client (uses SERVICE_ROLE_KEY — never expose to client)
export function createServerSupabase() {
  const url = process.env.SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceKey) {
    throw new Error(
      'Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY environment variables.'
    );
  }

  return createClient(url, serviceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}

// Admin-facing client (uses ANON_KEY — safe for client-side blog reads)
export function createClientSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    throw new Error(
      'Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY environment variables.'
    );
  }

  return createClient(url, anonKey);
}

// Public client (same as above, for convenience)
export const supabase = createClientSupabase;
