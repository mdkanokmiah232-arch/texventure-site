import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabase } from '@/lib/supabase';

const MJ_APIKEY = '1a252a8f2bc5bce171386e15ec95a754';
const MJ_SECRET = process.env.MAILJET_SECRET || '';
const FROM_EMAIL = 'info@texventure.com';
const FROM_NAME = 'TexVenture Website';

async function sendMailjetEmail(toEmail: string, toName: string, replyTo: string, subject: string, htmlContent: string) {
  const credentials = Buffer.from(`${MJ_APIKEY}:${MJ_SECRET}`).toString('base64');
  
  const payload = {
    Messages: [
      {
        From: { Email: FROM_EMAIL, Name: FROM_NAME },
        To: [{ Email: toEmail, Name: toName }],
        Bcc: [{ Email: 'mdkanokmiah232@gmail.com', Name: 'Kanok Miah' }],
        ReplyTo: { Email: replyTo },
        Subject: subject,
        HTMLPart: htmlContent,
        CustomID: `quote_${Date.now()}`,
      },
    ],
  };

  const res = await fetch('https://api.mailjet.com/v3.1/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${credentials}`,
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error('Mailjet error:', err);
    throw new Error('Failed to send email');
  }

  return res.json();
}

interface QuoteData {
  name: string;
  email: string;
  phone: string;
  company: string;
  productCategory: string;
  quantity: string;
  message: string;
}

export async function POST(req: NextRequest) {
  try {
    const data: QuoteData = await req.json();

    // Save to database
    const supabase = createServerSupabase();
    await supabase.from('form_submissions').insert({
      form_type: 'quote',
      data: {
        name: data.name,
        email: data.email,
        company: data.company || '',
        phone: data.phone || '',
        product_type: data.productCategory,
        quantity: data.quantity,
        message: data.message || '',
        submitted_at: new Date().toISOString(),
      },
      is_read: false,
    });

    // Send email notification
    const emailSubject = `New Quote Request: ${data.name} - ${data.productCategory} (${data.quantity} pcs)`;
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <div style="background: #08CCD4; padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 20px;">New Quote Request - TexVenture</h1>
        </div>
        <div style="padding: 24px; background: #f9f9f9;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; font-weight: bold; color: #1B2A4A; width: 130px;">Name:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; color: #333;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; font-weight: bold; color: #1B2A4A;">Email:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; color: #333;"><a href="mailto:${data.email}">${data.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; font-weight: bold; color: #1B2A4A;">Phone:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; color: #333;">${data.phone || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; font-weight: bold; color: #1B2A4A;">Company:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; color: #333;">${data.company || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; font-weight: bold; color: #1B2A4A;">Product:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; color: #333;">${data.productCategory}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; font-weight: bold; color: #1B2A4A;">Quantity:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; color: #333;">${data.quantity} pieces</td>
            </tr>
            ${data.message ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; font-weight: bold; color: #1B2A4A; vertical-align: top;">Message:</td><td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; color: #333;">${data.message.replace(/\n/g, '<br>')}</td></tr>` : ''}
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #1B2A4A;">Submitted:</td>
              <td style="padding: 10px 0; color: #666; font-size: 12px;">${new Date().toLocaleString('en-US', { timeZone: 'Asia/Dhaka' })} (BST)</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 15px; background: white; border-radius: 8px; border-left: 4px solid #08CCD4;">
            <p style="margin: 0; color: #666; font-size: 12px;">Reply to customer at <a href="mailto:${data.email}">${data.email}</a></p>
          </div>
        </div>
        <div style="background: #f0f0f0; padding: 12px; text-align: center; font-size: 11px; color: #999;">
          TexVenture - Apparel Sourcing & Manufacturing
        </div>
      </div>
    `;

    await sendMailjetEmail('zakir@texventure.com', 'Zakir', data.email, emailSubject, emailHtml);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Quote email error:', error);
    return NextResponse.json({ success: true }); // Still return success
  }
}
