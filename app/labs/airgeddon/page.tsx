'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';

export default function AirgeddonLab() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container py-8 px-4 mx-auto max-w-4xl">
      {/* Encabezado */}
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
        Auditoría de Redes Wi-Fi con Aircrack-ng (Airogeddon)
      </h1>

      {/* Objetivo Principal */}
      <div className="bg-card rounded-lg p-6 mb-8 shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Objetivo Principal</h2>
        <p className="text-muted-foreground">
          Demostrar el proceso de auditoría de seguridad en redes Wi-Fi utilizando la suite Aircrack-ng, 
          facilitada por la herramienta Airogeddon. Este laboratorio tiene fines educativos y de concienciación 
          sobre la seguridad de las redes inalámbricas.
        </p>
      </div>

      {/* Descripción del Laboratorio */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Descripción del Laboratorio</h2>
        <p className="text-muted-foreground mb-4">
          Este laboratorio guía a través de los pasos necesarios para realizar una auditoría básica de seguridad 
          en una red Wi-Fi utilizando la herramienta Airogeddon, que simplifica el uso de la potente suite Aircrack-ng. 
          El objetivo es ilustrar cómo se pueden identificar posibles vulnerabilidades en redes inalámbricas y la 
          importancia de implementar medidas de seguridad robustas.
        </p>
      </div>

      {/* Pasos Detallados con Imágenes */}
      <div className="space-y-12">
        {/* Instalación */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">1. Instalación de Airogeddon</h2>
          <div className="bg-muted p-4 rounded-md mb-4 overflow-x-auto">
            <pre className="text-sm">
              <code>
                git clone https://github.com/v1s1d/Airogeddon.git{'\n'}
                cd Airogeddon{'\n'}
                sudo bash airogeddon.sh
              </code>
            </pre>
          </div>
          <Image
            src="/lab1/airgeddon/1.png"
            alt="Instalación de Airogeddon"
            width={800}
            height={450}
            className="rounded-lg shadow-md mb-4"
          />
        </div>

        {/* Ejecución y Selección del Adaptador */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">2. Ejecución y Selección del Adaptador</h2>
          <p className="text-muted-foreground mb-4">
            Selecciona el adaptador de red inalámbrico que utilizarás para la auditoría. Es importante verificar
            la compatibilidad del adaptador con el modo monitor.
          </p>
          <Image
            src="/lab1/airgeddon/2.png"
            alt="Selección del adaptador de red"
            width={800}
            height={450}
            className="rounded-lg shadow-md mb-4"
          />
        </div>

        {/* Modo Monitor */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">3. Activación del Modo Monitor</h2>
          <p className="text-muted-foreground mb-4">
            El modo monitor es esencial para capturar el tráfico de red. Airogeddon automatiza este proceso
            y te permite confirmar que la tarjeta está operando en el modo correcto.
          </p>
          <Image
            src="/lab1/airgeddon/3.png"
            alt="Modo monitor activado"
            width={800}
            height={450}
            className="rounded-lg shadow-md mb-4"
          />
        </div>

        {/* Selección del Ataque */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">4. Selección y Ejecución del Ataque</h2>
          <p className="text-muted-foreground mb-4">
            Airogeddon ofrece múltiples opciones de ataque. Es crucial realizar estas pruebas solo en redes
            para las que tengas permiso explícito.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src="/lab1/airgeddon/4.png"
              alt="Selección de ataque"
              width={400}
              height={300}
              className="rounded-lg shadow-md"
            />
            <Image
              src="/lab1/airgeddon/5.png"
              alt="Ejecución del ataque"
              width={400}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Funcionalidades Adicionales */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Funcionalidades Adicionales</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>WEP Cracking: Obtención de claves WEP</li>
            <li>WPA/WPA2 Cracking: Recuperación de contraseñas mediante fuerza bruta o diccionario</li>
            <li>WPS PIN Attack: Explotación de vulnerabilidades WPS</li>
            <li>Deauthentication Attack: Desconexión de clientes para forzar handshakes</li>
            <li>Man-in-the-Middle (MITM) Attacks: Intercepción de comunicaciones</li>
            <li>Evil Twin Attacks: Creación de puntos de acceso falsos</li>
          </ul>
        </div>

        {/* Aviso Legal */}
        <div className="bg-destructive/10 p-6 rounded-lg mt-8">
          <h2 className="text-xl font-semibold mb-2 text-destructive">Aviso Legal Importante</h2>
          <p className="text-muted-foreground">
            Las técnicas demostradas en este laboratorio deben utilizarse únicamente en redes para las que se 
            tenga permiso explícito. El uso no autorizado de estas herramientas puede tener consecuencias legales. 
            Este laboratorio tiene fines educativos para comprender mejor la seguridad de las redes Wi-Fi.
          </p>
        </div>
      </div>
    </div>
  );
}
