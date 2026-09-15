import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/auth';
import { createServerSupabase } from '@/lib/supabase';

export async function GET() {
  const user = await getSession();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  try {
    const supabase = createServerSupabase();
    const { data, error } = await supabase.from('media').select('*').order('created_at', { ascending: false });
    if (error) throw error;
    return NextResponse.json({ media: data || [] });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Failed to fetch media' }, { status: 500 });
  }
}
