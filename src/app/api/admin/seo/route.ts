import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/auth';
import { createServerSupabase } from '@/lib/supabase';

export async function GET() {
  const user = await getSession();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  try {
    const supabase = createServerSupabase();
    const { data, error } = await supabase.from('seo_meta').select('*').order('page_path');
    if (error) throw error;
    return NextResponse.json({ seo: data || [] });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Failed to fetch SEO settings' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  const user = await getSession();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  try {
    const body = await req.json();
    const supabase = createServerSupabase();
    
    const { data, error } = await supabase
      .from('seo_meta')
      .update({
        meta_title: body.meta_title,
        meta_description: body.meta_description,
        meta_keywords: body.meta_keywords,
        canonical_url: body.canonical_url,
        og_title: body.og_title,
        og_description: body.og_description,
        og_image: body.og_image,
        og_type: body.og_type,
        twitter_title: body.twitter_title,
        twitter_description: body.twitter_description,
        twitter_image: body.twitter_image,
        twitter_card: body.twitter_card,
        robots_index: body.robots_index,
        robots_follow: body.robots_follow,
        json_ld_schema: body.json_ld_schema,
        updated_at: new Date().toISOString(),
        updated_by: user.id,
      })
      .eq('page_path', body.page_path)
      .select()
      .single();
    
    if (error) throw error;
    return NextResponse.json({ seo: data });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Failed to update SEO settings' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const user = await getSession();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  try {
    const body = await req.json();
    const supabase = createServerSupabase();
    
    // Check if entry exists
    const { data: existing } = await supabase
      .from('seo_meta')
      .select('id')
      .eq('page_path', body.page_path)
      .single();
    
    if (existing) {
      // Update existing
      const { data, error } = await supabase
        .from('seo_meta')
        .update({
          meta_title: body.meta_title,
          meta_description: body.meta_description,
          meta_keywords: body.meta_keywords,
          canonical_url: body.canonical_url,
          og_title: body.og_title,
          og_description: body.og_description,
          og_image: body.og_image,
          og_type: body.og_type,
          twitter_title: body.twitter_title,
          twitter_description: body.twitter_description,
          twitter_image: body.twitter_image,
          twitter_card: body.twitter_card,
          robots_index: body.robots_index,
          robots_follow: body.robots_follow,
          json_ld_schema: body.json_ld_schema,
          updated_at: new Date().toISOString(),
          updated_by: user.id,
        })
        .eq('page_path', body.page_path)
        .select()
        .single();
      
      if (error) throw error;
      return NextResponse.json({ seo: data });
    } else {
      // Insert new
      const { data, error } = await supabase
        .from('seo_meta')
        .insert([{
          page_path: body.page_path,
          meta_title: body.meta_title || '',
          meta_description: body.meta_description || '',
          meta_keywords: body.meta_keywords || '',
          canonical_url: body.canonical_url || '',
          og_title: body.og_title || '',
          og_description: body.og_description || '',
          og_image: body.og_image || '',
          og_type: body.og_type || 'website',
          twitter_title: body.twitter_title || '',
          twitter_description: body.twitter_description || '',
          twitter_image: body.twitter_image || '',
          twitter_card: body.twitter_card || 'summary_large_image',
          robots_index: body.robots_index !== false,
          robots_follow: body.robots_follow !== false,
          json_ld_schema: body.json_ld_schema || '',
          updated_by: user.id,
        }])
        .select()
        .single();
      
      if (error) throw error;
      return NextResponse.json({ seo: data });
    }
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Failed to save SEO settings' }, { status: 500 });
  }
}
