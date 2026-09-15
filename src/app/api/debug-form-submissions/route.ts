import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/auth';
import { createServerSupabase } from '@/lib/supabase';

export async function GET() {
  const user = await getSession();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  try {
    const supabase = createServerSupabase();
    
    // Try to fetch with just id first to see if table exists
    const { data: simpleData, error: simpleError } = await supabase
      .from('form_submissions')
      .select('id')
      .limit(1);
    
    if (simpleError) {
      return NextResponse.json({ 
        step: 'select_id', 
        error: simpleError.message,
        details: simpleError 
      });
    }
    
    // Try with all expected columns
    const { data: fullData, error: fullError } = await supabase
      .from('form_submissions')
      .select('*')
      .limit(1);
      
    if (fullError) {
      return NextResponse.json({ 
        step: 'select_full', 
        error: fullError.message,
        details: fullError,
        sample: simpleData
      });
    }
    
    return NextResponse.json({ 
      success: true, 
      sample: fullData,
      allColumns: Object.keys(fullData?.[0] || {})
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message, stack: err.stack });
  }
}
