import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/auth';
import { createServerSupabase } from '@/lib/supabase';

export async function GET(req: NextRequest, { params }: { params: { page_path: string } }) {
  const user = await getSession();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  try {
    const supabase = createServerSupabase();
    const { data, error } = await supabase.from('seo_settings').select('*').eq('page_path', params.page_path).single();
    if (error) throw error;
    return NextResponse.json({ seo: data });
  } catch (err) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }
}

export async function PUT(req: NextRequest, { params }: { params: { page_path: string } }) {
  const user = await getSession();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  try {
    const body = await req.json();
    const supabase = createServerSupabase();
    const { data, error } = await supabase.from('seo_settings').upsert({ page_path: params.page_path, ...body }).select().single();
    if (error) throw error;
    return NextResponse.json({ seo: data });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to update' }, { status: 500 });
  }
}
