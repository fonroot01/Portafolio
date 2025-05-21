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
        <hr className="mb-6 border-t border-gray-700" />
        {/* Cambiado a text-white */}
        <p className="text-justify text-white">
          Demostrar el proceso de auditoría de seguridad en redes Wi-Fi utilizando la suite (Aircrack-ng),
          facilitada por la herramienta (Airgeddon). Este laboratorio tiene fines educativos y de concienciación
          sobre la seguridad de las redes inalámbricas.
        </p>
      </section>

      {/* Descripción del Laboratorio */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-4">Descripción del Laboratorio</h2>
        <hr className="mb-6 border-t border-gray-700" />
        {/* Cambiado a text-white */}
        <p className="text-justify text-white">
          Este laboratorio guía a través de los pasos necesarios para realizar una auditoría básica de seguridad
          en una red Wi-Fi utilizando la herramienta (Airgeddon), que simplifica el uso de la potente suite (Aircrack-ng).
          El objetivo es ilustrar cómo se pueden identificar posibles vulnerabilidades en redes inalámbricas y la
          importancia de implementar medidas de seguridad robustas. Es fundamental destacar que todas las auditorías
          demostradas en este laboratorio se realizan con el permiso explícito del propietario de la red auditada.
        </p>
      </section>

      {/* Pasos Detallados con Imágenes */}
      <section className="space-y-16">

        {/* Paso 1: Instalación */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">1. Instalación de Airgeddon</h3>
          {/* Cambiado a text-white */}
          <p className="text-justify text-white mb-4">
            A continuación, se detallan los comandos para clonar y ejecutar la herramienta Airgeddon.
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
              alt="Instalación de Airgeddon"
              width={800}
              height={450}
              className="rounded-lg shadow-md mb-2"
            />
            {/* Cambiado a text-white */}
            <p className="text-sm text-white text-left w-full max-w-[800px]">
              Captura de pantalla del proceso de instalación y ejecución inicial de Airgeddon.
            </p>
          </div>
        </div>

        {/* Paso 2: Ejecución y Selección del Adaptador */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">2. Ejecución y Selección del Adaptador</h3>
          {/* Cambiado a text-white */}
          <p className="text-justify text-white mb-4">
            Selecciona el adaptador de red inalámbrico que utilizarás para la auditoría. Es importante verificar
            la compatibilidad del adaptador con el modo monitor.
          </p>
          <div className="flex flex-col items-center">
            <Image
              src="/lab1/airgeddon/2.png"
              alt="Selección del adaptador de red"
              width={800}
              height={450}
              className="rounded-lg shadow-md mb-2"
            />
            {/* Cambiado a text-white */}
            <p className="text-sm text-white text-left w-full max-w-[800px]">
              Selección del adaptador de red inalámbrico dentro de la interfaz de Airgeddon.
            </p>
          </div>
        </div>

        {/* Paso 3: Activación del Modo Monitor */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">3. Activación del Modo Monitor</h3>
          {/* Cambiado a text-white */}
          <p className="text-justify text-white mb-4">
            El modo monitor es esencial para capturar el tráfico de red. (Airgeddon) automatiza este proceso
            y te permite confirmar que la tarjeta está operando en el modo correcto.
          </p>
          <div className="flex flex-col items-center">
            <Image
              src="/lab1/airgeddon/3.png"
              alt="Modo monitor activado"
              width={800}
              height={450}
              className="rounded-lg shadow-md mb-2"
            />
            {/* Cambiado a text-white */}
            <p className="text-sm text-white text-left w-full max-w-[800px]">
              Confirmación de la activación exitosa del modo monitor para la tarjeta de red.
            </p>
          </div>
        </div>

        {/* NUEVA SECCIÓN: Auditoría de Redes */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Auditoría de Redes Wi-Fi</h2>
          <hr className="mb-6 border-t border-gray-700" />
          {/* Cambiado a text-white */}
          <p className="text-justify text-white mb-6">
            Una vez que el entorno está configurado, el siguiente paso es identificar las redes Wi-Fi disponibles
            y analizar posibles vulnerabilidades para llevar a cabo un ataque.
          </p>

          {/* Sub-Paso 4: Exploración de Objetivos (WPS) */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">4. Exploración de Objetivos (WPS)</h3>
            {/* Cambiado a text-white */}
            <p className="text-justify text-white mb-4">
              Airgeddon permite escanear redes y obtener información relevante, como el ESSID, BSSID y si WPS está habilitado.
              Esto es crucial para identificar redes vulnerables a ataques de PIN WPS.
            </p>
            <div className="flex flex-col items-center">
              <Image
                src="/lab1/airgeddon/6.png"
                alt="Exploración de objetivos WPS"
                width={800}
                height={450}
                className="rounded-lg shadow-md mb-2"
              />
              {/* Cambiado a text-white */}
              <p className="text-sm text-white text-left w-full max-w-[800px]">
                Interfaz de Airgeddon mostrando el escaneo de redes Wi-Fi y la identificación de objetivos con WPS habilitado.
              </p>
            </div>
          </div>

          {/* Sub-Paso 5: Explotación WPS y Obtención de Clave */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">5. Explotación WPS y Obtención de Clave</h3>
            {/* Cambiado a text-white */}
            <p className="text-justify text-white mb-4">
              Una vez identificado un objetivo con WPS vulnerable, Airgeddon puede intentar descifrar el PIN y,
              con éxito, obtener la clave WPA/WPA2 de la red.
            </p>
            <div className="flex flex-col items-center">
              <Image
                src="/lab1/airgeddon/7.png"
                alt="Resultado de explotación WPS exitosa"
                width={600}
                height={300}
                className="rounded-lg shadow-md mb-2"
              />
              {/* Cambiado a text-white */}
              <p className="text-sm text-white text-left w-full max-w-[600px]">
                Confirmación del PIN WPS y la clave WPA/WPA2 obtenidos tras un ataque exitoso.
              </p>
            </div>
          </div>
        </div>

        {/* Funcionalidades Adicionales */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">6. Funcionalidades Adicionales</h3>
          {/* Cambiado a text-white */}
          <p className="text-justify text-white mb-4">
            Además de los ataques básicos, (Airgeddon) proporciona un conjunto de funcionalidades avanzadas:
          </p>
          {/* Cambiado a text-white en los <li> */}
          <ul className="list-disc pl-6 space-y-1">
            <li className="text-white">WEP Cracking: Obtención de claves WEP.</li>
            <li className="text-white">WPA/WPA2 Cracking: Recuperación de contraseñas mediante fuerza bruta o diccionario.</li>
            <li className="text-white">WPS PIN Attack: Explotación de vulnerabilidades WPS.</li>
            <li className="text-white">Deauthentication Attack: Desconexión de clientes para forzar handshakes.</li>
            <li className="text-white">Man-in-the-Middle (MITM) Attacks: Intercepción de comunicaciones.</li>
            <li className="text-white">Evil Twin Attacks: Creación de puntos de acceso falsos.</li>
          </ul>
        </div>

        {/* Aviso Legal */}
        <div className="bg-destructive/10 p-6 rounded-lg mt-10">
          <h4 className="text-lg font-semibold mb-2 text-destructive">⚠️ Aviso Legal Importante</h4>
          {/* Cambiado a text-white */}
          <p className="text-justify text-white">
            Las técnicas demostradas en este laboratorio deben utilizarse únicamente en redes para las que se
            tenga permiso explícito. El uso no autorizado de estas herramientas puede tener consecuencias legales.
            Este laboratorio tiene fines educativos para comprender mejor la seguridad de las redes Wi-Fi.
          </p>
        </div>

      </section>
    </div>
  );
}