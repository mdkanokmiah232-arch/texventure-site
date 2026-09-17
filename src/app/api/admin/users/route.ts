import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/auth';
import { createServerSupabase } from '@/lib/supabase';

export async function GET() {
  const user = await getSession();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  try {
    const supabase = createServerSupabase();
    const { data, error } = await supabase.from('admin_users').select('id, full_name, email, role, created_at').order('created_at', { ascending: false });
    if (error) throw error;
    return NextResponse.json({ users: data || [] });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const user = await getSession();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  if (user.role !== 'owner') return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  try {
    const body = await req.json();
    const bcrypt = require('bcryptjs');
    const hash = await bcrypt.hash(body.password, 10);
    const supabase = createServerSupabase();
    const { data, error } = await supabase.from('admin_users').insert([{ ...body, password_hash: hash }]).select().single();
    if (error) throw error;
    return NextResponse.json({ user: data });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Failed to create user' }, { status: 500 });
  }
}
