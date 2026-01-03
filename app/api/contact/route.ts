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
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #020202;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #0a0a0a; border: 1px solid #2371A2;">
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #2371A2 0%, #1a5a7a 100%); padding: 30px; text-align: center;">
              <h1 style="color: #FFFFFC; margin: 0; font-size: 24px; font-weight: bold;">
                🌞 Novi upit s web stranice
              </h1>
            </div>
            
            <!-- Content -->
            <div style="padding: 30px;">
              <div style="background-color: #111111; border: 1px solid #2371A2; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
                <h2 style="color: #E0BF18; margin: 0 0 15px 0; font-size: 18px;">📋 Podaci o kontaktu</h2>
                
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #222222; color: #888888; width: 120px;">Ime:</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #222222; color: #FFFFFC; font-weight: bold;">${name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #222222; color: #888888;">Email:</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #222222;">
                      <a href="mailto:${email}" style="color: #2371A2; text-decoration: none;">${email}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #222222; color: #888888;">Telefon:</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #222222; color: #FFFFFC;">${phone || "Nije unesen"}</td>
                  </tr>
                </table>
              </div>
              
              <div style="background-color: #111111; border: 1px solid #2371A2; border-radius: 8px; padding: 20px;">
                <h2 style="color: #E0BF18; margin: 0 0 15px 0; font-size: 18px;">💬 Poruka</h2>
                <p style="color: #FFFFFC; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
              </div>
              
              <!-- Quick Reply Button -->
              <div style="text-align: center; margin-top: 25px;">
                <a href="mailto:${email}?subject=Re: Vaš upit - Skeki Energy" 
                   style="display: inline-block; background: linear-gradient(135deg, #E0BF18 0%, #d4b317 100%); color: #020202; padding: 12px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 14px;">
                  📧 Odgovori na upit
                </a>
              </div>
            </div>
            
            <!-- Footer -->
            <div style="background-color: #050505; padding: 20px; text-align: center; border-top: 1px solid #222222;">
              <p style="color: #666666; margin: 0; font-size: 12px;">
                Ovaj email je automatski poslan s web stranice skeki-energy.hr
              </p>
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
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #020202;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #0a0a0a; border: 1px solid #2371A2;">
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #2371A2 0%, #1a5a7a 100%); padding: 30px; text-align: center;">
              <h1 style="color: #FFFFFC; margin: 0; font-size: 24px; font-weight: bold;">
                🌞 Skeki Energy
              </h1>
            </div>
            
            <!-- Content -->
            <div style="padding: 30px;">
              <h2 style="color: #E0BF18; margin: 0 0 20px 0; font-size: 22px;">Hvala vam, ${name}!</h2>
              
              <p style="color: #FFFFFC; line-height: 1.6; margin-bottom: 20px;">
                Primili smo vašu poruku i odgovorit ćemo vam u roku od <strong style="color: #2371A2;">24 sata</strong>.
              </p>
              
              <div style="background-color: #111111; border: 1px solid #2371A2; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
                <h3 style="color: #2371A2; margin: 0 0 10px 0; font-size: 16px;">Vaša poruka:</h3>
                <p style="color: #888888; line-height: 1.6; margin: 0; font-style: italic;">"${message}"</p>
              </div>
              
              <p style="color: #FFFFFC; line-height: 1.6; margin-bottom: 20px;">
                U međuvremenu, slobodno nas kontaktirajte:
              </p>
              
              <div style="background-color: #111111; border: 1px solid #E0BF18; border-radius: 8px; padding: 20px;">
                <p style="color: #FFFFFC; margin: 5px 0;">📧 <a href="mailto:info@skeki-energy.hr" style="color: #2371A2; text-decoration: none;">info@skeki-energy.hr</a></p>
                <p style="color: #FFFFFC; margin: 5px 0;">📍 Sinjska ulica 11, Zagreb</p>
              </div>
            </div>
            
            <!-- Footer -->
            <div style="background-color: #050505; padding: 20px; text-align: center; border-top: 1px solid #222222;">
              <p style="color: #666666; margin: 0 0 10px 0; font-size: 12px;">
                Skeki Energy d.o.o. | Profesionalna montaža solarnih elektrana
              </p>
              <p style="color: #444444; margin: 0; font-size: 11px;">
                <a href="https://skeki-energy.hr" style="color: #2371A2; text-decoration: none;">skeki-energy.hr</a>
              </p>
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

