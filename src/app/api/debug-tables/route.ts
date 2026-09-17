import { NextResponse } from 'next/server';
import { createServerSupabase } from '@/lib/supabase';

export async function GET() {
  try {
    const supabase = createServerSupabase();
    const results: Record<string, unknown> = {};
    
    const tables = ['blog_posts', 'products', 'faqs', 'media', 'testimonials'];
    for (const table of tables) {
      try {
        const { data, error } = await supabase.from(table).select('id').limit(1);
        results[table] = { data, error: error?.message || null };
      } catch (e) {
        results[table] = { error: String(e) };
      }
    }
    
    return NextResponse.json({
      url: process.env.NEXT_PUBLIC_SUPABASE_URL,
      hasServiceKey: !!process.env.SUPABASE_SERVICE_ROLE_KEY,
      results
    });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
