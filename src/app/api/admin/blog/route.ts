import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/auth';
import { createServerSupabase } from '@/lib/supabase';

export async function GET(req: NextRequest) {
  const user = await getSession();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  try {
    const supabase = createServerSupabase();
    const { data, error } = await supabase
      .from('blog_posts')
      .select('id, title, slug, status, excerpt, featured_image, category, tags, author_name, published_at, updated_at, created_at')
      .order('updated_at', { ascending: false });
    if (error) throw error;
    return NextResponse.json({ posts: data || [] });
  } catch (err) {
    console.error('[GET /api/admin/blog]', err);
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: 'Failed to fetch posts', details: message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const user = await getSession();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  try {
    const body = await req.json();
    const supabase = createServerSupabase();
    const { data, error } = await supabase.from('blog_posts').insert([body]).select().single();
    if (error) throw error;
    return NextResponse.json({ post: data });
  } catch (err) {
    console.error('[POST /api/admin/blog]', err);
    return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
  }
}
