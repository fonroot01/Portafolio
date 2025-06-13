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
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
        Auditoría de Redes Wi-Fi con Aircrack-ng (Airgeddon)
      </h1>

      {/* Objetivo Principal */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-4">Objetivo Principal</h2>
        <hr className="mb-6 border-t border-border" />
        <p className="text-justify text-foreground">
          Demostrar el proceso de auditoría de seguridad en redes Wi-Fi utilizando la suite (Aircrack-ng),
          facilitada por la herramienta (Airgeddon). Este laboratorio tiene fines educativos y de concienciación
          sobre la importancia de asegurar adecuadamente las redes inalámbricas. Es fundamental resaltar que las técnicas
          demostradas en este laboratorio se realizan con el permiso explícito del propietario de la red auditada.
        </p>
      </section>

      {/* Descripción del Laboratorio */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-4">Descripción del Laboratorio</h2>
        <hr className="mb-6 border-t border-border" />
        {/* Cambiado a text-white */}
        <p className="text-justify text-foreground mb-4">
          Este laboratorio guía a través de los pasos necesarios para realizar una auditoría básica de seguridad
          en una red Wi-Fi utilizando la herramienta (Airgeddon), que simplifica el uso de la potente suite (Aircrack-ng).
          El objetivo es ilustrar cómo se pueden identificar posibles vulnerabilidades en redes inalámbricas y la
          importancia de implementar medidas de seguridad robustas. Es fundamental destacar que todas las auditorías
          demostradas en este laboratorio se realizan con el permiso explícito del propietario de la red auditada.
        </p>
      </section>

      {/* Pasos Detallados con Imágenes */}
      <section className="space-y-16">

        {/* Paso 1: Instalación y Ejecución de Airgeddon */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">1. Instalación y Ejecución de Airgeddon</h3>
          <p className="text-justify text-foreground mb-4">
            Los siguientes comandos permiten clonar el repositorio de Airgeddon, acceder a su directorio y ejecutar el script principal de la herramienta.
          </p>
          <div className="bg-muted p-4 rounded-md mb-4 overflow-x-auto">
            <pre className="text-sm text-left">
              <code>
                git clone https://github.com/v1s1d/Airgeddon.git{'\n'}
                cd Airgeddon{'\n'}
                sudo bash airgeddon.sh
              </code>
            </pre>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/lab1/airgeddon/1.png"
              alt="Inicio y requisitos de Airgeddon"
              width={500}
              height={320}
              className="rounded-lg shadow-md mb-2"
            />
            <p className="text-sm text-foreground text-left w-full max-w-[800px]">
              La imagen muestra el inicio de Airgeddon, verificando los requisitos del sistema y el estado de la conexión a internet.
            </p>
          </div>
        </div>

        {/* Paso 2: Selección del Adaptador de Red Inalámbrico */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">2. Selección del Adaptador de Red Inalámbrico</h3>
          <p className="text-justify text-foreground mb-4">
            Para este laboratorio, se utilizó la tarjeta de red inalámbrica (TPLink WN722n V3). Se procede a seleccionar el adaptador de red inalámbrico (`wlan0`) que se utilizará para las operaciones de auditoría.
          </p>
          <div className="flex flex-col items-center">
            <Image
              src="/lab1/airgeddon/2.png"
              alt="Selección del adaptador de red"
              width={300}
              height={300}
              className="rounded-lg shadow-md mb-2"
            />
            <p className="text-sm text-foreground text-left w-full max-w-[800px]">
              Airgeddon permite seleccionar el adaptador adecuado para las operaciones de auditoría.
            </p>
          </div>
        </div>

        {/* Paso 3: Activación del Modo Monitor */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">3. Activación del Modo Monitor</h3>
          <p className="text-justify text-foreground mb-4">
            Es fundamental activar el modo monitor en el adaptador seleccionado para poder capturar los paquetes de la red inalámbrica. Airgeddon facilita esta tarea.
          </p>
          <div className="flex flex-col items-center">
            <Image
              src="/lab1/airgeddon/3.png"
              alt="Activación del modo monitor"
              width={500}
              height={320}
              className="rounded-lg shadow-md mb-2"
            />
            <p className="text-sm text-foreground text-left w-full max-w-[800px]">
              El modo monitor permite capturar todo el tráfico inalámbrico, incluso los paquetes que no están destinados a nuestra interfaz.
            </p>
          </div>
        </div>

        {/* Sub-Paso 4: Menú de Opciones de Ataque */}
        <div>
            <h3 className="text-2xl font-semibold mb-4">4. Menú de Opciones de Ataque WPA/WPA2</h3>
            <p className="text-justify text-foreground mb-4">
              Airgeddon presenta un menú con diversas opciones para realizar ataques contra redes WPA/WPA2, incluyendo ataques de diccionario y de PIN WPS.
            </p>
            <div className="flex flex-col items-center">
              <Image
                src="/lab1/airgeddon/4.png"
                alt="Menú de opciones de ataque WPA/WPA2"
                width={500}
                height={320}
                className="rounded-lg shadow-md mb-2"
              />
              <p className="text-sm text-foreground text-left w-full max-w-[800px]">
                Menú de Airgeddon ofreciendo múltiples métodos de ataque para redes WPA/WPA2, con opciones como &quot;WPS attacks menu&quot; y &quot;Handshake/PMKID tools menu&quot;.
              </p>
            </div>
          </div>

        {/* Sub-Paso 5: Detección y Selección de Objetivos */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">5. Detección y Selección de Objetivos</h3>
            <p className="text-justify text-foreground mb-4">
              Airgeddon escanea el entorno para mostrar las redes Wi-Fi disponibles. Se selecciona la red a auditar de la lista.
            </p>
            <div className="flex flex-col items-center">
              <Image
                src="/lab1/airgeddon/5.png"
                alt="Exploración de objetivos WPS"
                width={500}
                height={320}
                className="rounded-lg shadow-md mb-2"
              />
              <p className="text-sm text-foreground text-left w-full max-w-[800px]">
                La herramienta muestra detalles como el BSSID, canal, potencia de señal y tipo de cifrado de cada red detectada.
              </p>
            </div>
          </div>

          {/* Sub-Paso 6: Ejecución Exitosa del Ataque WPS */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">6. Ejecución Exitosa del Ataque WPS</h3>
            <p className="text-justify text-foreground mb-4">
              Se observa la ejecución exitosa del ataque WPS, donde Airgeddon ha logrado descifrar el PIN y ha mostrado la clave WPA/WPA2 de la red.
            </p>
            <div className="flex flex-col items-center">
              <Image
                src="/lab1/airgeddon/6 - copia.png"
                alt="Resultado de explotación WPS exitosa"
                width={500}
                height={320}
                className="rounded-lg shadow-md mb-2"
              />
              <p className="text-sm text-foreground text-left w-full max-w-[600px]">
                Confirmación visual del PIN WPS (&apos;24028554&apos;) y la clave WPA/WPA2 de la red (&apos;Nosemeolvida?$ &apos;), obtenidos exitosamente mediante el ataque.
              </p>
            </div>
          </div>

        {/* Funcionalidades Adicionales */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">7. Funcionalidades Adicionales</h3>
          <p className="text-justify text-foreground mb-4">
            Además de los ataques básicos, (Airgeddon) proporciona un conjunto de funcionalidades avanzadas:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li className="text-foreground">WEP Cracking: Obtención de claves WEP.</li>
            <li className="text-foreground">WPA/WPA2 Cracking: Recuperación de contraseñas mediante fuerza bruta o diccionario.</li>
            <li className="text-foreground">WPS PIN Attack: Explotación de vulnerabilidades WPS.</li>
            <li className="text-foreground">Deauthentication Attack: Desconexión de clientes para forzar handshakes.</li>
            <li className="text-foreground">Man-in-the-Middle (MITM) Attacks: Intercepción de comunicaciones.</li>
            <li className="text-foreground">Evil Twin Attacks: Creación de puntos de acceso falsos.</li>
          </ul>
        </div>

        {/* Aviso Legal */}
        <div className="bg-destructive/10 p-6 rounded-lg mt-10">
          <h4 className="text-lg font-semibold mb-2 text-destructive">⚠️ Aviso Legal Importante</h4>
          <p className="text-justify text-foreground">
            Las técnicas demostradas en este laboratorio deben utilizarse únicamente en redes para las que se
            tenga permiso explícito. El uso no autorizado de estas herramientas puede tener consecuencias legales.
            Este laboratorio tiene fines educativos para comprender mejor la seguridad de las redes Wi-Fi.
          </p>
        </div>

      </section>
    </div>
  );
}