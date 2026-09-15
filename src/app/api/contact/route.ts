import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabase } from '@/lib/supabase';

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, phone, category, quantity, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email and message are required' }, { status: 400 });
    }

    const supabase = createServerSupabase();
    const { data, error } = await supabase.from('form_submissions').insert({
      form_type: 'contact',
      data: {
        name,
        email,
        company: company || '',
        phone: phone || '',
        category: category || '',
        quantity: quantity || '',
        message,
        submitted_at: new Date().toISOString(),
      },
    }).select().single();

    if (error) throw error;

    return NextResponse.json({ success: true, submission: data });
  } catch (err) {
    console.error('Contact form error:', err);
    return NextResponse.json({ error: 'Failed to submit form' }, { status: 500 });
  }
}
