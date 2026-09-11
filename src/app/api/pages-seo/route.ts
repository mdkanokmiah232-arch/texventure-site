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
      .from('page_seo')
      .select('*')
      .order('page_path');

    if (error) throw error;

    return NextResponse.json({ pages: data });
  } catch (err: unknown) {
    console.error('[GET /api/pages-seo]', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  const user = await getSession();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { page_path, meta_title, meta_description, og_title, og_description, canonical_url, robots } = body;

    if (!page_path) {
      return NextResponse.json({ error: 'page_path is required' }, { status: 400 });
    }

    const supabase = createServerSupabase();

    const { data, error } = await supabase
      .from('page_seo')
      .upsert(
        {
          page_path,
          meta_title: meta_title || null,
          meta_description: meta_description || null,
          og_title: og_title || null,
          og_description: og_description || null,
          canonical_url: canonical_url || null,
          robots: robots || 'index, follow',
        },
        { onConflict: 'page_path' }
      )
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({ page: data });
  } catch (err: unknown) {
    console.error('[PUT /api/pages-seo]', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
