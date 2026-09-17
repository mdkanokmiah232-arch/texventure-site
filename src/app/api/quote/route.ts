import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabase } from '@/lib/supabase';
import { Resend } from 'resend';

const RESEND_API_KEY = process.env.RESEND_API_KEY || '';
const FROM_EMAIL = 'TexVenture <onboarding@resend.com>';

async function sendEmail(toEmail: string, toName: string, subject: string, htmlContent: string) {
  const resend = new Resend(RESEND_API_KEY);
  
  const { data, error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: [toEmail],
    bcc: ['mdkanokmiah232@gmail.com'],
    subject: subject,
    html: htmlContent,
  });

  if (error) {
    console.error('Resend error:', error);
    throw new Error('Failed to send email');
  }

  return data;
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

    // Get IP from request headers
    const forwardedFor = req.headers.get('x-forwarded-for');
    const ip = forwardedFor ? forwardedFor.split(',')[0].trim() : 'unknown';

    // Save to database
    const supabase = createServerSupabase();
    await supabase.from('form_submissions').insert({
      form_type: 'quote',
      name: data.name,
      email: data.email,
      company: data.company || null,
      phone: data.phone || null,
      country: null,
      product_type: data.productCategory,
      quantity: data.quantity,
      message: data.message || null,
      status: 'new',
      ip_address: ip,
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

    try {
      await sendEmail('zakir@texventure.com', 'Zakir', emailSubject, emailHtml);
    } catch (emailErr) {
      console.error('Email error:', emailErr);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Quote email error:', error);
    return NextResponse.json({ success: true });
  }
}
