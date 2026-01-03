import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactFormData = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Molimo ispunite sva obavezna polja." },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Molimo unesite ispravnu email adresu." },
        { status: 400 }
      );
    }

    // Send email to Skeki Energy
    const { data, error } = await resend.emails.send({
      from: "Skeki Energy <noreply@skeki-energy.hr>",
      to: ["info@skeki-energy.hr"],
      replyTo: email,
      subject: `Novi upit od ${name} - Skeki Energy`,
      html: `
        <!DOCTYPE html>
        <html lang="hr">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #020202; -webkit-font-smoothing: antialiased;">
          <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
            <!-- Main Card -->
            <div style="background: linear-gradient(180deg, #0a0a0a 0%, #111111 100%); border-radius: 16px; overflow: hidden; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(35, 113, 162, 0.2);">
              
              <!-- Content -->
              <div style="padding: 32px;">
                
                <!-- Contact Info Card -->
                <div style="background: linear-gradient(135deg, rgba(35, 113, 162, 0.1) 0%, rgba(35, 113, 162, 0.05) 100%); border: 1px solid rgba(35, 113, 162, 0.2); border-radius: 12px; padding: 24px; margin-bottom: 24px;">
                  <table style="width: 100%; margin-bottom: 16px;">
                    <tr>
                      <td style="width: 40px; vertical-align: middle;">
                        <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #2371A2 0%, #1a5278 100%); border-radius: 10px; text-align: center; line-height: 40px;">
                          <img src="https://img.icons8.com/ios-filled/24/FFFFFF/user.png" alt="" style="vertical-align: middle; width: 20px; height: 20px;" />
                        </div>
                      </td>
                      <td style="padding-left: 12px; vertical-align: middle;">
                        <h2 style="color: #FFFFFC; margin: 0; font-size: 18px; font-weight: 600;">Podaci o kontaktu</h2>
                      </td>
                    </tr>
                  </table>
                  
                  <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                      <td style="padding: 14px 0; border-bottom: 1px solid rgba(35, 113, 162, 0.15); color: rgba(255, 255, 252, 0.5); font-size: 13px; width: 100px; vertical-align: top;">Ime</td>
                      <td style="padding: 14px 0; border-bottom: 1px solid rgba(35, 113, 162, 0.15); color: #FFFFFC; font-size: 15px; font-weight: 600;">${name}</td>
                    </tr>
                    <tr>
                      <td style="padding: 14px 0; border-bottom: 1px solid rgba(35, 113, 162, 0.15); color: rgba(255, 255, 252, 0.5); font-size: 13px; vertical-align: top;">Email</td>
                      <td style="padding: 14px 0; border-bottom: 1px solid rgba(35, 113, 162, 0.15);">
                        <a href="mailto:${email}" style="color: #2371A2; text-decoration: none; font-size: 15px; font-weight: 500;">${email}</a>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 14px 0; color: rgba(255, 255, 252, 0.5); font-size: 13px; vertical-align: top;">Telefon</td>
                      <td style="padding: 14px 0; color: #FFFFFC; font-size: 15px;">${phone || '<span style="color: rgba(255, 255, 252, 0.4); font-style: italic;">Nije unesen</span>'}</td>
                    </tr>
                  </table>
                </div>
                
                <!-- Message Card -->
                <div style="background: linear-gradient(135deg, rgba(224, 191, 24, 0.1) 0%, rgba(224, 191, 24, 0.05) 100%); border: 1px solid rgba(224, 191, 24, 0.2); border-radius: 12px; padding: 24px; margin-bottom: 28px;">
                  <table style="width: 100%; margin-bottom: 16px;">
                    <tr>
                      <td style="width: 40px; vertical-align: middle;">
                        <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #E0BF18 0%, #c9a915 100%); border-radius: 10px; text-align: center; line-height: 40px;">
                          <img src="https://img.icons8.com/ios-filled/24/000000/speech-bubble.png" alt="" style="vertical-align: middle; width: 20px; height: 20px;" />
                        </div>
                      </td>
                      <td style="padding-left: 12px; vertical-align: middle;">
                        <h2 style="color: #FFFFFC; margin: 0; font-size: 18px; font-weight: 600;">Poruka</h2>
                      </td>
                    </tr>
                  </table>
                  <p style="color: rgba(255, 255, 252, 0.9); line-height: 1.7; margin: 0; font-size: 15px; white-space: pre-wrap;">${message}</p>
                </div>
              </div>
            
            </div>
          </div>
        </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Greška prilikom slanja poruke. Molimo pokušajte ponovno." },
        { status: 500 }
      );
    }

    // Send confirmation email to the user
    await resend.emails.send({
      from: "Skeki Energy <noreply@skeki-energy.hr>",
      to: [email],
      subject: "Hvala na vašem upitu - Skeki Energy",
      html: `
        <!DOCTYPE html>
        <html lang="hr">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #020202; -webkit-font-smoothing: antialiased;">
          <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
            <!-- Main Card -->
            <div style="background: linear-gradient(180deg, #0a0a0a 0%, #111111 100%); border-radius: 16px; overflow: hidden; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(35, 113, 162, 0.2);">
              
              <!-- Content -->
              <div style="padding: 40px 32px;">
                
                <!-- Greeting -->
                <div style="text-align: center; margin-bottom: 32px;">
                  <h2 style="color: #E0BF18; margin: 0 0 12px 0; font-size: 26px; font-weight: 700;">Hvala vam, ${name}!</h2>
                  <p style="color: rgba(255, 255, 252, 0.8); line-height: 1.7; margin: 0; font-size: 16px;">
                    Primili smo vašu poruku i odgovorit ćemo vam u roku od <strong style="color: #2371A2;">24 sata</strong>.
                  </p>
                </div>
                
                <!-- Message Card -->
                <div style="background: linear-gradient(135deg, rgba(35, 113, 162, 0.1) 0%, rgba(35, 113, 162, 0.05) 100%); border: 1px solid rgba(35, 113, 162, 0.2); border-radius: 12px; padding: 24px;">
                  <table style="width: 100%; margin-bottom: 16px;">
                    <tr>
                      <td style="width: 36px; vertical-align: middle;">
                        <div style="width: 36px; height: 36px; background: linear-gradient(135deg, #2371A2 0%, #1a5278 100%); border-radius: 8px; text-align: center; line-height: 36px;">
                          <img src="https://img.icons8.com/ios-filled/20/FFFFFF/edit--v1.png" alt="" style="vertical-align: middle; width: 18px; height: 18px;" />
                        </div>
                      </td>
                      <td style="padding-left: 12px; vertical-align: middle;">
                        <h3 style="color: rgba(255, 255, 252, 0.6); margin: 0; font-size: 13px; font-weight: 500; text-transform: uppercase; letter-spacing: 1px;">Vaša poruka</h3>
                      </td>
                    </tr>
                  </table>
                  <p style="color: rgba(255, 255, 252, 0.85); line-height: 1.7; margin: 0; font-size: 15px; font-style: italic; border-left: 3px solid rgba(35, 113, 162, 0.4); padding-left: 16px;">"${message}"</p>
                </div>
              </div>
              
              <!-- Footer -->
              <div style="background: #050505; padding: 28px 32px; text-align: center; border-top: 1px solid rgba(35, 113, 162, 0.1);">
                <p style="color: rgba(255, 255, 252, 0.5); margin: 0 0 8px 0; font-size: 13px; font-weight: 500;">
                  Skeki Energy d.o.o.
                </p>
                <p style="color: rgba(255, 255, 252, 0.35); margin: 0; font-size: 12px;">
                  <a href="https://skeki-energy.hr" style="color: #2371A2; text-decoration: none;">skeki-energy.hr</a>
                </p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Poruka je uspješno poslana!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Došlo je do greške. Molimo pokušajte ponovno." },
      { status: 500 }
    );
  }
}

