import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/auth';
import { createServerSupabase } from '@/lib/supabase';

export async function GET() {
  const user = await getSession();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  try {
    const supabase = createServerSupabase();
    
    // Insert a test row
    const { data: insertData, error: insertError } = await supabase
      .from('form_submissions')
      .insert({
        name: 'Test User',
        email: 'test@example.com',
        message: 'Test message',
        type: 'contact'
      })
      .select()
      .single();
    
    if (insertError) {
      return NextResponse.json({ 
        insert_error: insertError.message,
        code: insertError.code,
        details: insertError.details
      });
    }
    
    // Get all rows
    const { data: allData, error: selectError } = await supabase
      .from('form_submissions')
      .select('*');
    
    if (selectError) {
      return NextResponse.json({ 
        insert_success: insertData,
        select_error: selectError.message,
        code: selectError.code
      });
    }
    
    const columns = allData && allData.length > 0 ? Object.keys(allData[0]) : [];
    
    // Delete the test row
    if (insertData?.id) {
      await supabase.from('form_submissions').delete().eq('id', insertData.id);
    }
    
    return NextResponse.json({ 
      row_count: allData?.length || 0,
      columns,
      sample: allData
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message });
  }
}
