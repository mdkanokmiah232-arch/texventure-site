import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Lazy init to avoid build-time evaluation without API key
function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
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

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
        <div style="background: #08CCD4; padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">New Quote Request - TexVenture</h1>
        </div>
        <div style="padding: 30px; background: #f9f9f9;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; font-weight: bold; color: #1B2A4A; width: 140px;">Name:</td>
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
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; font-weight: bold; color: #1B2A4A;">Message:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; color: #333;">${data.message || 'No message provided'}</td>
            </tr>
          </table>
          
          <div style="margin-top: 30px; padding: 20px; background: white; border-radius: 8px; border-left: 4px solid #08CCD4;">
            <p style="margin: 0; color: #666; font-size: 14px;">
              <strong>Submitted:</strong> ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Dhaka', dateStyle: 'medium', timeStyle: 'short' })} (BST)
            </p>
            <p style="margin: 10px 0 0; color: #666; font-size: 14px;">
              <strong>Source:</strong> TexVenture Website - Get a Quote Form
            </p>
          </div>
        </div>
        <div style="padding: 15px; background: #1B2A4A; border-radius: 0 0 8px 8px; text-align: center;">
          <p style="margin: 0; color: #999; font-size: 12px;">
            TexVenture - Your trusted apparel sourcing partner in Bangladesh
          </p>
        </div>
      </div>
    `;

    await getResend().emails.send({
      from: 'TexVenture Leads <leads@texventure.com>',
      to: ['zakir@texventure.com'],
      replyTo: data.email,
      subject: `New Quote Request from ${data.name} - ${data.productCategory} (${data.quantity} pcs)`,
      html: emailHtml,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Quote email error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
