'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';

export default function ArmitageLab() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container py-8 px-4 mx-auto max-w-4xl">
      {/* Encabezado */}
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        Explotación de Vulnerabilidades en Windows con Armitage
      </h1>

      {/* Objetivo */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Objetivo Principal</h2>
        {/* Línea divisoria */}
        <hr className="mb-6 border-t border-border" />
        <p className="text-justify text-foreground">
          Demostrar el proceso de identificación y explotación de vulnerabilidades en un sistema Windows
          utilizando la interfaz gráfica de Armitage. Este laboratorio proporciona una comprensión práctica
          de la metodología de pentesting y las capacidades de las herramientas de explotación.
        </p>
      </section>

      {/* Descripción */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Descripción del Laboratorio</h2>
        {/* Línea divisoria */}
        <hr className="mb-6 border-t border-border" />
        <p className="text-justify text-foreground">
          Este laboratorio guía a través del proceso de utilizar Armitage para realizar un escaneo de
          vulnerabilidades y posteriormente explotar una de ellas en un sistema Windows objetivo. Se demuestra
          cómo una herramienta gráfica puede simplificar el flujo de trabajo del pentesting y proporcionar
          una visión clara de las vulnerabilidades en un sistema.
        </p>
      </section>

      {/* Pasos */}
      <section className="space-y-16">

        {/* Paso 1 */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">1. Inicio de Armitage</h3>
          <p className="text-justify text-foreground mb-4">
            El primer paso es iniciar Armitage y conectarse al servicio de Metasploit. Esto requiere que
            PostgreSQL esté funcionando y la base de datos de Metasploit esté inicializada.
          </p>
          <div className="bg-muted p-4 rounded-md mb-4 overflow-x-auto">
            <pre className="text-sm text-foreground">
              <code>
                sudo systemctl start postgresql{'\n'}
                sudo msfdb init{'\n'}
                sudo armitage
              </code>
            </pre>
          </div>
          <Image
            src="/lab1/armitage/1.png"
            alt="Inicio de Armitage"
            width={800}
            height={450}
            className="rounded-lg shadow-md mx-auto"
          />
        </div>

        {/* Paso 2 */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">2. Escaneo de Objetivos</h3>
          {/* Cambiado a text-white */}
          <p className="text-justify text-white mb-4">
            Una vez iniciado Armitage, el siguiente paso es agregar y escanear los hosts objetivo para
            identificar servicios y posibles vulnerabilidades.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Image
              src="/lab1/armitage/2.png"
              alt="Agregar host objetivo"
              width={400}
              height={300}
              className="rounded-lg shadow-md"
            />
            <Image
              src="/lab1/armitage/3.png"
              alt="Escaneo de servicios"
              width={400}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Paso 3 */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">3. Análisis de Vulnerabilidades</h3>
          <p className="text-justify text-foreground mb-4">
            Armitage resalta los servicios vulnerables y muestra los exploits disponibles. Esta fase es crucial
            para identificar los vectores de ataque potenciales.
          </p>
          <Image
            src="/lab1/armitage/4.png"
            alt="Análisis de vulnerabilidades"
            width={800}
            height={450}
            className="rounded-lg shadow-md mx-auto"
          />
        </div>

        {/* Paso 4 */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">4. Selección y Configuración del Exploit</h3>
          <p className="text-justify text-foreground mb-4">
            La interfaz gráfica de Armitage facilita la selección y configuración de exploits. Es importante
            configurar correctamente los parámetros como <code>RHOST</code> y <code>LHOST</code>.
          </p>
          <Image
            src="/lab1/armitage/5.png"
            alt="Configuración del exploit"
            width={800}
            height={450}
            className="rounded-lg shadow-md mx-auto"
          />
        </div>

        {/* Paso 5 */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">5. Explotación y Acceso</h3>
          {/* Cambiado a text-white */}
          <p className="text-justify text-white mb-4">
            Una vez configurado el exploit, se procede a la explotación. Si es exitosa, se obtiene una sesión
            de Meterpreter que permite interactuar con el sistema comprometido.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Image
              src="/lab1/armitage/6.png"
              alt="Explotación exitosa"
              width={400}
              height={300}
              className="rounded-lg shadow-md"
            />
            <Image
              src="/lab1/armitage/7.png"
              alt="Sesión de Meterpreter"
              width={400}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Comandos */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Comandos Útiles de Meterpreter</h3>
          <div className="bg-muted p-4 rounded-md">
            <pre className="text-sm text-foreground">
              <code>
                sysinfo      # Obtener información del sistema{'\n'}
                getuid      # Obtener el usuario actual{'\n'}
                ps          # Listar procesos{'\n'}
                screenshot  # Capturar pantalla{'\n'}
                hashdump    # Extraer hashes de contraseñas{'\n'}
                shell       # Obtener shell del sistema
              </code>
            </pre>
          </div>
        </div>

        {/* Aviso */}
        <div className="bg-destructive/10 p-6 rounded-lg mt-8">
          <h4 className="text-lg font-semibold mb-2 text-destructive">⚠️ Aviso Legal Importante</h4>
          <p className="text-foreground">
            Este laboratorio debe realizarse únicamente en un entorno controlado y con permiso explícito.
            La explotación no autorizada de sistemas puede tener graves consecuencias legales. El objetivo
            es puramente educativo para comprender las vulnerabilidades y mejorar las defensas de los sistemas.
          </p>
        </div>

      </section>
    </div>
  );
}