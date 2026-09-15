import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/auth';
import { createServerSupabase } from '@/lib/supabase';

function transformSubmission(row: any) {
  const data = row.data || {};
  // Map is_read to status: false→new, true→read
  const status = row.is_read ? 'read' : 'new';
  return {
    id: row.id,
    form_type: row.form_type,
    name: data.name || null,
    email: data.email || null,
    phone: data.phone || null,
    company: data.company || null,
    country: data.country || null,
    product_type: data.product_type || data.category || null,
    quantity: data.quantity || null,
    message: data.message || null,
    status,
    created_at: row.submitted_at || row.created_at,
  };
}

export async function GET(req: NextRequest) {
  const user = await getSession();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  try {
    const supabase = createServerSupabase();
    const { searchParams } = new URL(req.url);
    const formType = searchParams.get('form_type');
    const status = searchParams.get('status');
    
    let query = supabase
      .from('form_submissions')
      .select('id, form_type, data, submitted_at, is_read')
      .order('submitted_at', { ascending: false });
    
    if (formType) query = query.eq('form_type', formType);
    
    const { data, error } = await query;
    if (error) throw error;
    
    let submissions = (data || []).map(transformSubmission);
    
    // Filter by status if provided (status param maps to is_read: new=false, read=true)
    if (status) {
      if (status === 'new') submissions = submissions.filter(s => s.status === 'new');
      else if (status === 'read') submissions = submissions.filter(s => s.status === 'read');
    }
    
    return NextResponse.json({ submissions });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Failed to fetch submissions' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  const user = await getSession();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  try {
    const { id, status } = await req.json();
    const supabase = createServerSupabase();
    // Map status back to is_read: new=false, read/replied=true
    const is_read = status !== 'new';
    const { error } = await supabase
      .from('form_submissions')
      .update({ is_read })
      .eq('id', id);
    if (error) throw error;
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Failed to update' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  const user = await getSession();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  try {
    const { id } = await req.json();
    const supabase = createServerSupabase();
    const { error } = await supabase.from('form_submissions').delete().eq('id', id);
    if (error) throw error;
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Failed to delete' }, { status: 500 });
  }
}
