import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { createServerSupabase } from '@/lib/supabase';
import { createSessionToken, setSessionCookie, isValidEmail } from '@/lib/auth';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, password } = body;

    // Validate inputs
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required.' },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email address.' },
        { status: 400 }
      );
    }

    // Look up user
    const supabase = createServerSupabase();
    const { data: user, error } = await supabase
      .from('admin_users')
      .select('id, username, email, password_hash, role')
      .eq('email', email.toLowerCase().trim())
      .single();

    if (error || !user) {
      return NextResponse.json(
        { error: 'Invalid email or password.' },
        { status: 401 }
      );
    }

    // Verify password
    const valid = await bcrypt.compare(password, user.password_hash);
    if (!valid) {
      return NextResponse.json(
        { error: 'Invalid email or password.' },
        { status: 401 }
      );
    }

    // Create session
    const token = await createSessionToken({
      id: user.id,
      username: user.username,
      email: user.email,
      role: user.role,
    });

    await setSessionCookie(token);

    return NextResponse.json({
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err: unknown) {
    console.error('[POST /api/auth/login]', err);
    return NextResponse.json(
      { error: 'Internal server error.' },
      { status: 500 }
    );
  }
}
