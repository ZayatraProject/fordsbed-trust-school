import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { type = 'Website inquiry', data = {} } = await request.json();
    const recipient = process.env.SCHOOL_EMAIL || 'admission@fordsbedschool.com';
    const user = process.env.SMTP_USER;
    const password = process.env.SMTP_PASSWORD;
    if (!user || !password) return NextResponse.json({ error: 'Email service is not configured.' }, { status: 503 });

    const transporter = nodemailer.createTransport({ host: process.env.SMTP_HOST || 'smtp.hostinger.com', port: Number(process.env.SMTP_PORT || 465), secure: true, auth: { user, pass: password } });
    const rows = Object.entries(data).map(([key, value]) => `<tr><td style="padding:8px 12px;font-weight:700;vertical-align:top">${escapeHtml(key)}</td><td style="padding:8px 12px">${escapeHtml(String(value || 'Not provided')).replace(/\n/g, '<br />')}</td></tr>`).join('');
    await transporter.sendMail({ from: `Fordsbed Website <${user}>`, to: recipient, replyTo: typeof data.email === 'string' ? data.email : undefined, subject: `${type} — Fordsbed Trust School`, html: `<div style="font-family:Arial,sans-serif;color:#1f2937"><h2 style="color:#0f2537">${escapeHtml(type)}</h2><p>A new submission was received from the Fordsbed Trust School website.</p><table style="border-collapse:collapse;border:1px solid #e2e8f0">${rows}</table></div>` });
    return NextResponse.json({ ok: true });
  } catch { return NextResponse.json({ error: 'Unable to send the form right now.' }, { status: 500 }); }
}

function escapeHtml(value: string) { return value.replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[character] || character); }
