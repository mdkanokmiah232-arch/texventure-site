import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/auth';
import { createServerSupabase } from '@/lib/supabase';

export async function POST(req: NextRequest) {
  const user = await getSession();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;
    if (!file) return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    const supabase = createServerSupabase();
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const fileName = `${Date.now()}-${file.name}`;
    const { data, error } = await supabase.storage.from('media').upload(fileName, buffer, { contentType: file.type });
    if (error) throw error;
    const { data: urlData } = supabase.storage.from('media').getPublicUrl(data.path || fileName);
    const { data: dbData, error: dbError } = await supabase.from('media').insert([{ name: file.name, url: urlData.publicUrl, type: file.type, size: file.size }]).select().single();
    if (dbError) throw dbError;
    return NextResponse.json({ media: dbData });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
}
