import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabase } from '@/lib/supabase';

const MJ_APIKEY = '1a252a8f2bc5bce171386e15ec95a754';
const MJ_SECRET = process.env.MAILJET_SECRET || '';
const FROM_EMAIL = 'TexVenture@notifications.mailjet.com';
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
        CustomID: `contact_${Date.now()}`,
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

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, phone, category, quantity, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email and message are required' }, { status: 400 });
    }

    // Get IP from request headers
    const forwardedFor = req.headers.get('x-forwarded-for');
    const ip = forwardedFor ? forwardedFor.split(',')[0].trim() : 'unknown';

    // Save to database - use exact column names
    const supabase = createServerSupabase();
    const { error: dbError } = await supabase.from('form_submissions').insert({
      form_type: 'contact',
      name,
      email,
      company: company || null,
      phone: phone || null,
      country: null,
      product_type: category || null,
      quantity: quantity || null,
      message,
      status: 'new',
      ip_address: ip,
    });

    if (dbError) {
      console.error('DB error:', dbError);
    }

    // Send email notification
    const emailSubject = `New Contact Form: ${name} - ${company || 'No Company'}`;
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <div style="background: #1B2A4A; padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 20px;">New Contact Form Submission</h1>
        </div>
        <div style="padding: 24px; background: #f9f9f9;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; font-weight: bold; color: #1B2A4A; width: 130px;">Name:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; color: #333;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; font-weight: bold; color: #1B2A4A;">Email:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; color: #333;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            ${company ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; font-weight: bold; color: #1B2A4A;">Company:</td><td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; color: #333;">${company}</td></tr>` : ''}
            ${phone ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; font-weight: bold; color: #1B2A4A;">Phone:</td><td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; color: #333;">${phone}</td></tr>` : ''}
            ${category ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; font-weight: bold; color: #1B2A4A;">Product:</td><td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; color: #333;">${category}</td></tr>` : ''}
            ${quantity ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; font-weight: bold; color: #1B2A4A;">Quantity:</td><td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; color: #333;">${quantity}</td></tr>` : ''}
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; font-weight: bold; color: #1B2A4A; vertical-align: top;">Message:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; color: #333;">${message.replace(/\n/g, '<br>')}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #1B2A4A;">Submitted:</td>
              <td style="padding: 10px 0; color: #666; font-size: 12px;">${new Date().toLocaleString('en-US', { timeZone: 'Asia/Dhaka' })} (BST)</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 15px; background: white; border-radius: 8px; border-left: 4px solid #08CCD4;">
            <p style="margin: 0; color: #666; font-size: 12px;">Reply to this customer at <a href="mailto:${email}">${email}</a> or call ${phone || 'N/A'}</p>
          </div>
        </div>
        <div style="background: #f0f0f0; padding: 12px; text-align: center; font-size: 11px; color: #999;">
          TexVenture - Apparel Sourcing & Manufacturing
        </div>
      </div>
    `;

    try {
      await sendMailjetEmail('zakir@texventure.com', 'Zakir', email, emailSubject, emailHtml);
    } catch (emailErr) {
      console.error('Email error:', emailErr);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact form error:', err);
    return NextResponse.json({ success: true }); // Still return success to user
  }
}
