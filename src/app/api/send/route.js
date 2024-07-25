import { Resend } from 'resend';
import * as React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['delivered@resend.dev'],
      subject: "Hello world",
      react: (
        <>
            <p>Email Body</p>
        </>
      ),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

// import { Resend } from 'resend';

// const resend = new Resend('••••••••••••••••••••••••••••••••••••');

// resend.emails.send({
//   from: '<mjbutkevicius@gmail.com>',
//   to: '<mjbutkevicius@gmail.com>',
//   subject: 'Hello World',
//   html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
// });