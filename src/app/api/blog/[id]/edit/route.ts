import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/auth';
import { createServerSupabase } from '@/lib/supabase';

interface RouteParams {
  params: Promise<{ id: string }>;
}

export async function GET(_req: NextRequest, { params }: RouteParams) {
  const user = await getSession();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { id } = await params;
    const supabase = createServerSupabase();
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('id', id)
      .single();

    if (error || !data) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    return NextResponse.json({ post: data });
  } catch (err: unknown) {
    console.error('[GET /api/blog/[id]]', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, { params }: RouteParams) {
  const user = await getSession();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { id } = await params;
    const body = await req.json();

    const supabase = createServerSupabase();

    // Check slug uniqueness (if slug is being changed)
    if (body.slug) {
      const { data: existing } = await supabase
        .from('blog_posts')
        .select('id')
        .eq('slug', body.slug)
        .neq('id', id)
        .single();

      if (existing) {
        return NextResponse.json(
          { error: 'A post with this slug already exists.' },
          { status: 409 }
        );
      }
    }

    // Determine if publishing for the first time
    const { data: current } = await supabase
      .from('blog_posts')
      .select('status, published_at')
      .eq('id', id)
      .single();

    const isFirstPublish =
      current &&
      current.status !== 'published' &&
      body.status === 'published';

    const { data, error } = await supabase
      .from('blog_posts')
      .update({
        ...body,
        published_at: isFirstPublish ? new Date().toISOString() : current?.published_at,
      })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    if (!data) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    return NextResponse.json({ post: data });
  } catch (err: unknown) {
    console.error('[PUT /api/blog/[id]/edit]', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function DELETE(_req: NextRequest, { params }: RouteParams) {
  const user = await getSession();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { id } = await params;
    const supabase = createServerSupabase();
    const { error } = await supabase
      .from('blog_posts')
      .delete()
      .eq('id', id);

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    console.error('[DELETE /api/blog/[id]/delete]', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
