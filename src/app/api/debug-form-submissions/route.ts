import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/auth';
import { createServerSupabase } from '@/lib/supabase';

export async function POST() {
  const user = await getSession();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  try {
    const supabase = createServerSupabase();
    
    // Try insert with various possible column names
    const testData = {
      name: 'Debug Test',
      email: 'debug@test.com',
      message: 'Testing columns',
      type: 'contact'
    };
    
    // Try with form_type and data fields
    const { data, error, status } = await supabase
      .from('form_submissions')
      .insert(testData)
      .select();
    
    if (error) {
      // Try to parse what columns exist
      return NextResponse.json({
        insert_test: 'failed',
        error: error.message,
        code: error.code,
        hint: error.hint,
        details: error.details
      });
    }
    
    return NextResponse.json({ insert_success: true, data });
  } catch (err: any) {
    return NextResponse.json({ error: err.message });
  }
}

export async function GET() {
  const user = await getSession();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  try {
    const supabase = createServerSupabase();
    
    // Get raw rows to see actual column names
    const { data, error } = await supabase
      .from('form_submissions')
      .select('*')
      .limit(3);
    
    if (error) {
      return NextResponse.json({ select_error: error.message });
    }
    
    // Get column names from the first row
    const columns = data && data.length > 0 ? Object.keys(data[0]) : [];
    
    return NextResponse.json({ 
      row_count: data?.length || 0,
      columns,
      sample: data
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message });
  }
}
