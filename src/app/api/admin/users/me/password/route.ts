import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/auth';
import { createServerSupabase } from '@/lib/supabase';
import bcrypt from 'bcryptjs';

export async function PUT(req: NextRequest) {
  const user = await getSession();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  try {
    const { currentPassword, newPassword } = await req.json();
    const supabase = createServerSupabase();
    const { data: dbUser, error } = await supabase.from('admin_users').select('password_hash').eq('id', user.id).single();
    if (error || !dbUser) return NextResponse.json({ error: 'User not found' }, { status: 404 });
    const valid = await bcrypt.compare(currentPassword, dbUser.password_hash);
    if (!valid) return NextResponse.json({ error: 'Current password is incorrect' }, { status: 400 });
    const newHash = await bcrypt.hash(newPassword, 10);
    const { error: updateError } = await supabase.from('admin_users').update({ password_hash: newHash }).eq('id', user.id);
    if (updateError) throw updateError;
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Failed to update password' }, { status: 500 });
  }
}
