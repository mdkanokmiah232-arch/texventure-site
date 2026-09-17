import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json({ error: 'Invalid file type. Only JPEG, PNG, GIF, and WebP are allowed.' }, { status: 400 });
    }

    // Validate file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      return NextResponse.json({ error: 'File too large. Max size is 10MB.' }, { status: 400 });
    }

    // Convert to base64 for postimg.cc
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64 = buffer.toString('base64');
    const mimeType = file.type;

    // Upload to postimg.cc
    const formDataUpload = new FormData();
    formDataUpload.append('file', `data:${mimeType};base64,${base64}`);
    formDataUpload.append('author', 'TexVenture Admin');
    formDataUpload.append('global', 'false');

    const uploadRes = await fetch('https://postimg.cc/api/upload', {
      method: 'POST',
      body: formDataUpload,
    });

    if (!uploadRes.ok) {
      throw new Error('Failed to upload to postimg');
    }

    const result = await uploadRes.json();

    if (result.success) {
      return NextResponse.json({
        success: true,
        url: result.images[0].url,
        delhash: result.images[0].delhash,
        thumb: result.images[0].thumb,
      });
    }

    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
}
