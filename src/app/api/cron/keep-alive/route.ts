import { createClientSupabase } from '@/lib/supabase';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const supabase = createClientSupabase();
    const { error } = await supabase.from('stats').select('count').limit(1);
    if (error) throw error;
    return NextResponse.json({ ok: true, timestamp: new Date().toISOString() });
  } catch {
    return NextResponse.json({ ok: false, error: 'DB query failed' }, { status: 500 });
  }
}
