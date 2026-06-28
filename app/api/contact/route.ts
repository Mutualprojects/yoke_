import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import path from 'path';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message, terms } = body;

    if (!name || !email || !message || !terms) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const timestamp = new Date().toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short',
    });

    const htmlTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Contact Submission – Yoke</title>
</head>
<body style="margin:0;padding:0;background-color:#F8F8F8;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">

  <!-- Outer wrapper -->
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#F8F8F8;padding:40px 16px;">
    <tr>
      <td align="center">

        <!-- Card -->
        <table role="presentation" width="100%" style="max-width:600px;background-color:#FFFFFF;border-radius:16px;overflow:hidden;border:1px solid #E5E5E5;box-shadow:0 10px 30px rgba(4,9,26,0.05);">

          <!-- ── TOP ACCENT BAR ── -->
          <tr>
            <td style="background:linear-gradient(90deg,#F18805 0%,#F4A236 50%,#F18805 100%);height:4px;font-size:0;line-height:0;">&nbsp;</td>
          </tr>

          <!-- ── HEADER ── -->
          <tr>
            <td align="center" style="padding:40px 40px 28px;">
              <!-- Logo -->
              <img
                src="cid:logo"
                alt="Yoke Conveyors"
                width="140"
                style="display:block;margin:0 auto 28px;max-width:140px;"
              />
              <!-- Pill label -->
              <div style="display:inline-block;background-color:#FFF4E5;border:1px solid #F18805;border-radius:999px;padding:5px 16px;margin-bottom:20px;">
                <span style="color:#F18805;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;">New Enquiry</span>
              </div>
              <h1 style="margin:0;color:#04091a;font-size:26px;font-weight:700;line-height:1.3;letter-spacing:-0.5px;">
                Contact Form Submission
              </h1>
              <p style="margin:10px 0 0;color:#666666;font-size:13px;line-height:1.6;">
                ${timestamp}
              </p>
            </td>
          </tr>

          <!-- ── DIVIDER ── -->
          <tr>
            <td style="padding:0 40px;">
              <div style="height:1px;background-color:#E5E5E5;"></div>
            </td>
          </tr>

          <!-- ── SENDER DETAILS ── -->
          <tr>
            <td style="padding:32px 40px 24px;">
              <p style="margin:0 0 18px;color:#F18805;font-size:10px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;">Sender Details</p>

              <!-- Name row -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:14px;">
                <tr>
                  <td width="28" valign="middle">
                    <!-- Person icon (using a simple colored square placeholder since external svgs in email can be tricky) -->
                    <div style="width:28px;height:28px;background-color:#FFF4E5;border-radius:6px;text-align:center;line-height:28px;color:#F18805;font-weight:bold;font-size:12px;">
                      N
                    </div>
                  </td>
                  <td style="padding-left:12px;">
                    <p style="margin:0;color:#888888;font-size:11px;text-transform:uppercase;letter-spacing:1px;font-weight:600;">Name</p>
                    <p style="margin:2px 0 0;color:#04091a;font-size:15px;font-weight:600;">${name}</p>
                  </td>
                </tr>
              </table>

              <!-- Email row -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:14px;">
                <tr>
                  <td width="28" valign="middle">
                    <div style="width:28px;height:28px;background-color:#F5F5F5;border-radius:6px;border:1px solid #E5E5E5;text-align:center;line-height:28px;color:#888888;font-size:12px;font-weight:bold;">E</div>
                  </td>
                  <td style="padding-left:12px;">
                    <p style="margin:0;color:#888888;font-size:11px;text-transform:uppercase;letter-spacing:1px;font-weight:600;">Email</p>
                    <a href="mailto:${email}" style="margin:2px 0 0;display:block;color:#F18805;font-size:15px;font-weight:600;text-decoration:none;">${email}</a>
                  </td>
                </tr>
              </table>

              <!-- Phone row -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td width="28" valign="middle">
                    <div style="width:28px;height:28px;background-color:#F5F5F5;border-radius:6px;border:1px solid #E5E5E5;text-align:center;line-height:28px;color:#888888;font-size:12px;font-weight:bold;">P</div>
                  </td>
                  <td style="padding-left:12px;">
                    <p style="margin:0;color:#888888;font-size:11px;text-transform:uppercase;letter-spacing:1px;font-weight:600;">Phone</p>
                    <p style="margin:2px 0 0;color:${phone ? '#04091a' : '#888888'};font-size:15px;font-weight:600;">${phone || 'Not provided'}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ── DIVIDER ── -->
          <tr>
            <td style="padding:0 40px;">
              <div style="height:1px;background-color:#E5E5E5;"></div>
            </td>
          </tr>

          <!-- ── MESSAGE BLOCK ── -->
          <tr>
            <td style="padding:32px 40px;">
              <p style="margin:0 0 16px;color:#F18805;font-size:10px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;">Message</p>
              <div style="background-color:#F8F8F8;border-left:3px solid #F18805;border-radius:0 8px 8px 0;padding:20px 22px;">
                <p style="margin:0;color:#333333;font-size:15px;line-height:1.8;white-space:pre-wrap;">${message.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br/>')}</p>
              </div>
            </td>
          </tr>

          <!-- ── TERMS BADGE ── -->
          <tr>
            <td style="padding:0 40px 32px;">
              <table role="presentation" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background-color:#FFF4E5;border:1px solid #F18805;border-radius:8px;padding:10px 16px;">
                    <p style="margin:0;color:#F18805;font-size:12px;font-weight:600;">
                      ✓ &nbsp;Terms &amp; Conditions accepted
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ── DIVIDER ── -->
          <tr>
            <td style="padding:0 40px;">
              <div style="height:1px;background-color:#E5E5E5;"></div>
            </td>
          </tr>

          <!-- ── CTA ── -->
          <tr>
            <td align="center" style="padding:32px 40px;">
              <a
                href="mailto:${email}?subject=Re: Your enquiry with Yoke"
                style="display:inline-block;background-color:#04091a;color:#FFFFFF;font-size:13px;font-weight:700;letter-spacing:1px;text-transform:uppercase;text-decoration:none;padding:16px 36px;border-radius:4px;"
              >
                Reply to ${name.split(' ')[0]}
              </a>
            </td>
          </tr>

          <!-- ── FOOTER ── -->
          <tr>
            <td style="background-color:#F8F8F8;padding:24px 40px;border-top:1px solid #E5E5E5;">
              <p style="margin:0;color:#888888;font-size:11px;line-height:1.7;text-align:center;">
                This is an automated notification from your Yoke contact form.<br/>
                Do not reply directly to this email — use the button above to respond.
              </p>
            </td>
          </tr>

          <!-- ── BOTTOM ACCENT BAR ── -->
          <tr>
            <td style="background:linear-gradient(90deg,#F18805 0%,#F4A236 50%,#F18805 100%);height:4px;font-size:0;line-height:0;">&nbsp;</td>
          </tr>

        </table>
        <!-- /Card -->

      </td>
    </tr>
  </table>

</body>
</html>
    `;

    const mailOptions = {
      from: `"Yoke" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO,
      replyTo: email,
      subject: `New Enquiry from ${name} – Yoke`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Terms Accepted: ${terms ? 'Yes' : 'No'}

Message:
${message}

Received: ${timestamp}
      `.trim(),
      html: htmlTemplate,
      attachments: [
        {
          filename: 'Conveyors & Equipments.png',
          path: path.join(process.cwd(), 'public', 'Conveyors & Equipments.png'),
          cid: 'logo'
        }
      ]
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Failed to send email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}