import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/auth';
import { createServerSupabase } from '@/lib/supabase';

interface RouteParams {
  params: Promise<{ id: string }>;
}

export async function POST(_req: NextRequest, { params }: RouteParams) {
  const user = await getSession();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { id } = await params;
    const supabase = createServerSupabase();

    // Get current status
    const { data: current } = await supabase
      .from('blog_posts')
      .select('status, published_at')
      .eq('id', id)
      .single();

    if (!current) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    const newStatus = current.status === 'published' ? 'draft' : 'published';

    const { data, error } = await supabase
      .from('blog_posts')
      .update({
        status: newStatus,
        published_at: newStatus === 'published' ? new Date().toISOString() : current.published_at,
      })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({ post: data });
  } catch (err: unknown) {
    console.error('[POST /api/blog/[id]/publish]', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
