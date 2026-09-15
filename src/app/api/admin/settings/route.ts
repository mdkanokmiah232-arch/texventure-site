import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/auth';
import { createServerSupabase } from '@/lib/supabase';

export async function GET() {
  const user = await getSession();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  try {
    const supabase = createServerSupabase();
    const { data, error } = await supabase.from('site_settings').select('*').limit(1);
    if (error) throw error;
    return NextResponse.json({ settings: data?.[0] || null });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Failed to fetch settings' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  const user = await getSession();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  try {
    const body = await req.json();
    const supabase = createServerSupabase();
    const { data, error } = await supabase
      .from('site_settings')
      .update({ ...body, updated_at: new Date().toISOString() })
      .eq('id', body.id || 1)
      .select()
      .single();
    if (error) throw error;
    return NextResponse.json({ settings: data });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Failed to update settings' }, { status: 500 });
  }
}
