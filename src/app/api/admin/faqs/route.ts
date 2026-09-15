import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/auth';
import { createServerSupabase } from '@/lib/supabase';

export async function GET() {
  const user = await getSession();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  try {
    const supabase = createServerSupabase();
    const { data, error } = await supabase.from('faqs').select('*').order('created_at', { ascending: false });
    if (error) throw error;
    return NextResponse.json({ faqs: data || [] });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Failed to fetch FAQs' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const user = await getSession();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  try {
    const body = await req.json();
    const supabase = createServerSupabase();
    const { data, error } = await supabase.from('faqs').insert([body]).select().single();
    if (error) throw error;
    return NextResponse.json({ faq: data });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Failed to create FAQ' }, { status: 500 });
  }
}
