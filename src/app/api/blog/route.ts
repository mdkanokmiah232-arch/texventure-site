import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/auth';
import { createServerSupabase } from '@/lib/supabase';

export async function GET() {
  const user = await getSession();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const supabase = createServerSupabase();
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;

    return NextResponse.json({ posts: data });
  } catch (err: unknown) {
    console.error('[GET /api/blog]', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const user = await getSession();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await req.json();
    const {
      title,
      slug,
      excerpt,
      content,
      featured_image,
      category,
      tags,
      author_name,
      author_role,
      status,
      meta_title,
      meta_description,
      read_time_minutes,
    } = body;

    if (!title || !slug) {
      return NextResponse.json(
        { error: 'Title and slug are required.' },
        { status: 400 }
      );
    }

    const supabase = createServerSupabase();

    // Check slug uniqueness
    const { data: existing } = await supabase
      .from('blog_posts')
      .select('id')
      .eq('slug', slug)
      .single();

    if (existing) {
      return NextResponse.json(
        { error: 'A post with this slug already exists.' },
        { status: 409 }
      );
    }

    const { data, error } = await supabase
      .from('blog_posts')
      .insert({
        title,
        slug,
        excerpt: excerpt || '',
        content: content || '',
        featured_image: featured_image || '',
        category: category || 'manufacturing',
        tags: tags || [],
        author_name: author_name || user.username,
        author_role: author_role || 'Admin',
        status: status || 'draft',
        meta_title: meta_title || title,
        meta_description: meta_description || excerpt || '',
        read_time_minutes: read_time_minutes || 5,
        published_at: status === 'published' ? new Date().toISOString() : null,
      })
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({ post: data }, { status: 201 });
  } catch (err: unknown) {
    console.error('[POST /api/blog]', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
