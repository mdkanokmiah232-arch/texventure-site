import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/auth';
import { createServerSupabase } from '@/lib/supabase';

export async function GET() {
  const user = await getSession();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  try {
    const supabase = createServerSupabase();
    
    // Insert with only form_type to find other columns
    const { data: insertData, error: insertError } = await supabase
      .from('form_submissions')
      .insert({ form_type: 'contact' })
      .select()
      .single();
    
    if (insertError) {
      return NextResponse.json({ 
        insert_error: insertError.message,
        details: insertError.details
      });
    }
    
    // Get ALL rows now
    const { data: allData, error: selectError } = await supabase
      .from('form_submissions')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(5);
    
    // Delete the test row
    if (insertData?.id) {
      await supabase.from('form_submissions').delete().eq('id', insertData.id);
    }
    
    if (selectError) {
      return NextResponse.json({ 
        insert_success: insertData,
        select_error: selectError.message
      });
    }
    
    const columns = allData && allData.length > 0 ? Object.keys(allData[0]) : [];
    
    return NextResponse.json({ 
      columns,
      sample: allData
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message });
  }
}
