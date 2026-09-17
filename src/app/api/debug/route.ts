import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabase } from '@/lib/supabase';

export async function GET(req: NextRequest) {
  try {
    const supabase = createServerSupabase();
    
    // Test 1: Query admin_users
    const { data: users, error: usersError } = await supabase
      .from('admin_users')
      .select('id, email, role')
      .limit(5);

    // Test 2: Query stats (public)
    const { data: stats, error: statsError } = await supabase
      .from('stats')
      .select('value, label')
      .limit(5);

    // Test 3: Try a simple RPC
    const { data: rpcResult, error: rpcError } = await supabase.rpc('version').single();

    return NextResponse.json({
      env: {
        hasUrl: !!process.env.SUPABASE_URL || !!process.env.NEXT_PUBLIC_SUPABASE_URL,
        hasServiceKey: !!process.env.SUPABASE_SERVICE_ROLE_KEY,
        url: (process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || '').substring(0, 30),
      },
      adminUsers: { data: users, error: usersError?.message },
      stats: { data: stats, error: statsError?.message },
      rpcVersion: { data: rpcResult, error: rpcError?.message },
    });
  } catch (err: unknown) {
    const error = err as Error;
    return NextResponse.json(
      { error: error.message, stack: error.stack?.substring(0, 500) },
      { status: 500 }
    );
  }
}
