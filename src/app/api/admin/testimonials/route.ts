import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/auth';
import { createServerSupabase } from '@/lib/supabase';

export async function GET() {
  const user = await getSession();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  try {
    const supabase = createServerSupabase();
    const { data, error } = await supabase.from('testimonials').select('id, quote, author_name, author_title, company, avatar_initial, display_order, is_published');
    if (error) throw error;
    return NextResponse.json({ testimonials: data || [] });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Failed to fetch testimonials' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const user = await getSession();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  try {
    const body = await req.json();
    const supabase = createServerSupabase();
    const { data, error } = await supabase.from('testimonials').insert([body]).select().single();
    if (error) throw error;
    return NextResponse.json({ testimonial: data });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Failed to create testimonial' }, { status: 500 });
  }
}
