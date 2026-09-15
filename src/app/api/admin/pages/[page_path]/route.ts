import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/auth';
import { createServerSupabase } from '@/lib/supabase';

export async function GET(req: NextRequest, { params }: { params: { page_path: string } }) {
  const user = await getSession();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  try {
    const supabase = createServerSupabase();
    const { data, error } = await supabase.from('pages').select('*').eq('slug', (await params).page_path).single();
    if (error) throw error;
    return NextResponse.json({ page: data });
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
    const { data, error } = await supabase.from('pages').update(body).eq('slug', (await params).page_path).select().single();
    if (error) throw error;
    return NextResponse.json({ page: data });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to update' }, { status: 500 });
  }
}
