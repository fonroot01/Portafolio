import { NextResponse } from "next/server";

export async function POST(req: Request) {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.CONTACT_EMAIL) {
    return NextResponse.json(
      { message: "Configuración de correo incompleta" },
      { status: 500 }
    );
  }

  try {
    const body = await req.json();
    const { name, email, message } = body;

    console.log("Recibido mensaje de:", name, email);
    
    // Aquí simularemos el envío exitoso
    return NextResponse.json(
      { message: "Mensaje enviado correctamente" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error al procesar el mensaje:", error);
    return NextResponse.json(
      { message: "Error al enviar el mensaje" },
      { status: 500 }
    );
  }
}
