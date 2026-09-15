import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/auth';
import { createServerSupabase } from '@/lib/supabase';

export async function GET() {
  const user = await getSession();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  try {
    const supabase = createServerSupabase();
    
    // Try insert with no optional fields to find required columns
    const { data: insertData, error: insertError } = await supabase
      .from('form_submissions')
      .insert({})
      .select()
      .single();
    
    if (insertError) {
      // Get the actual column names from the error hint
      return NextResponse.json({ 
        error: insertError.message,
        code: insertError.code,
        hint: insertError.hint,
        details: insertError.details
      });
    }
    
    return NextResponse.json({ success: true, data: insertData });
  } catch (err: any) {
    return NextResponse.json({ error: err.message });
  }
}
