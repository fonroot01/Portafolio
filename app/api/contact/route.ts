import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

// Configuración actualizada para Gmail
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // usar SSL
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  logger: true, // Habilitar logging para debug
});

export async function POST(request: Request) {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.CONTACT_EMAIL) {
    console.error("Faltan variables de entorno necesarias");
    return NextResponse.json(
      { message: "Configuración de correo incompleta" },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    console.log("[API/CONTACT] Datos recibidos en el backend:", body);
    // Validar los datos del formulario
    const { name, email, message } = formSchema.parse(body);
    console.log(`[API/CONTACT] Datos validados: name=${name}, email=${email}, message=${message}`);
    // Verificar la conexión antes de enviar
    try {
      const verifyResult = await transporter.verify();
      console.log("[API/CONTACT] Resultado de verify:", verifyResult);
      console.log("[API/CONTACT] Servidor SMTP listo para enviar emails");
    } catch (verifyError) {
      console.error("[API/CONTACT] Error al verificar el transportador:", verifyError);
      throw verifyError; // Forzar que cualquier error de conexión detenga el flujo
    }
    // Configurar el correo
    const mailOptions = {
      from: `\"Portafolio Web\" <${process.env.EMAIL_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `Nuevo mensaje de contacto de ${name}`,
      text: `\nNombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`,
      html: `\n        <div style=\"font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 5px;\">\n          <h2 style=\"color: #333; margin-bottom: 20px;\">Nuevo mensaje de contacto</h2>\n          <p><strong>Nombre:</strong> ${name}</p>\n          <p><strong>Email:</strong> ${email}</p>\n          <div style=\"background-color: #f9f9f9; padding: 15px; border-radius: 4px; margin-top: 20px;\">\n            <strong>Mensaje:</strong>\n            <p style=\"white-space: pre-wrap;\">${message}</p>\n          </div>\n        </div>`
    };
    console.log("[API/CONTACT] Opciones de correo:", mailOptions);
    try {
      console.log("[API/CONTACT] Intentando enviar correo...");
      const info = await transporter.sendMail(mailOptions);
      console.log("[API/CONTACT] Mensaje enviado correctamente");
      console.log("[API/CONTACT] ID del mensaje:", info.messageId);
      console.log("[API/CONTACT] Respuesta del servidor:", info.response);
      return NextResponse.json(
        { message: "Mensaje enviado correctamente", smtpInfo: info },
        { status: 200 }
      );
    } catch (emailError: any) {
      console.error("[API/CONTACT] Error detallado al enviar el correo:", emailError);
      throw emailError; // Forzar que cualquier error de envío detenga el flujo
    }
  } catch (error: any) {
    console.error("[API/CONTACT] Error al procesar la solicitud:", error);
    return NextResponse.json(
      { 
        message: "Error al procesar la solicitud",
        error: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 400 }
    );
  }
}
