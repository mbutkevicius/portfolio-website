import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, subject, message } = req.body;

    try {
      let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.GMAIL_USER, // Your Gmail address
          pass: process.env.GMAIL_PASS, // Your Gmail password or App Password
        },
      });

      let mailOptions = {
        from: email,
        to: process.env.GMAIL_USER,
        subject: subject,
        text: message,
      };

      await transporter.sendMail(mailOptions);

      res.status(200).json({ status: 'success', message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ status: 'error', message: 'Error sending email' });
    }
  } else {
    res.status(405).json({ status: 'error', message: 'Method not allowed' });
  }
}