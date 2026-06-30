'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function verstuurContact(formData: FormData) {
  const naam    = formData.get('naam')    as string;
  const email   = formData.get('email')   as string;
  const bericht = formData.get('bericht') as string;

  if (!naam || !email || !bericht) {
    return { ok: false, fout: 'Vul alle velden in.' };
  }

  try {
    await resend.emails.send({
      from:    'Momtrail <onboarding@resend.dev>',
      to:      'info@momtrail.nl',
      replyTo: email,
      subject: `Contactformulier: ${naam}`,
      html: `
        <p><strong>Naam:</strong> ${naam}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <hr />
        <p>${bericht.replace(/\n/g, '<br />')}</p>
      `,
    });
    return { ok: true };
  } catch (err) {
    console.error('Mail error:', err);
    return { ok: false, fout: 'Er ging iets mis. Probeer het later opnieuw.' };
  }
}
