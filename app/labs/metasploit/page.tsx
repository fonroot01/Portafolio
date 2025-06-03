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
        {/* Línea divisoria */}
        <hr className="mb-6 border-t border-border" />
        <p className="text-foreground text-justify">
          Este laboratorio detalla el proceso de explotación de una vulnerabilidad en un sistema operativo
          Windows 7 utilizando la herramienta Metasploit Framework. El objetivo es demostrar la capacidad
          de identificar, explotar y obtener acceso a un sistema vulnerable, así como realizar acciones
          post-explotación.
        </p>
      </div>

      {/* Configuración del Entorno */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Configuración del Entorno</h2>
        {/* Línea divisoria */}
        <hr className="mb-6 border-t border-gray-700" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Máquina Atacante</h3>
            <ul className="list-disc pl-6 space-y-2 text-foreground">
              <li>Sistema Operativo: Kali Linux</li>
              <li>Herramientas: Metasploit Framework</li>
              <li>IP: 192.168.88.128</li>
            </ul>
          </div>
          <div className="bg-card p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Máquina Víctima</h3>
            <ul className="list-disc pl-6 space-y-2 text-foreground">
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
        {/* Línea divisoria */}
        <hr className="mb-6 border-t border-gray-700" />
        {/* Cambiado a text-white */}
        <p className="text-foreground mb-4">
          Verificación de conectividad entre la máquina atacante y la víctima:
        </p>

        <div className="grid grid-cols-1 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Verificación en Windows 7 (Víctima)</h3>
            <p className="text-foreground mb-4">
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
                <p className="text-foreground mb-2">Iniciando msfconsole:</p>
                <Image
                  src="/lab1/metasploit/0.png"
                  alt="Inicio de msfconsole"
                  width={800}
                  height={450}
                  className="rounded-lg shadow-md mb-4"
                />
              </div>

              <div>
                <p className="text-foreground mb-2">Verificación de red y conectividad:</p>
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
          <hr className="mb-6 border-t border-border" />
          <p className="text-foreground mb-4">
            Configuración y ejecución del exploit EternalBlue:
          </p>

          <div>
            <h2 className="text-2xl font-semibold mb-4">4. Post-Explotación</h2>
            <hr className="mb-6 border-t border-border" />
            <p className="text-foreground mb-4">
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
        </div>

        {/* ¿Por qué este método es mejor que Armitage? */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">¿Por qué este método es mejor que Armitage?</h3>
          <hr className="mb-6 border-t border-border" />
          <p className="text-foreground mb-4">
            Aclarando dudas sobre el porque usar Metasploit en lugar de Armitage:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-foreground">
            <li>Control Total y Precisión: Usando Metasploit directamente con comandos (msfconsole) tienes control fino de cada parámetro, payload, target, y explotación.</li>
            <li>Mejor Post-explotación: Con Meterpreter puedes hacer todo el post-exploit pro: keyloggers, webcam, VNC, escalamiento, robo de credenciales, etc.</li>
            <li>Mayor compatibilidad: Meterpreter se adapta mejor a entornos reales (x64, antivirus, firewalls, etc).</li>
            <li>Más rápido y ligero: Sin interfaz gráfica pesada, no requiere Java ni dependencia de conexión gráfica como lo hace Armitage.</li>
          </ul>
        </div>


        {/* Aviso Legal */}
        <div className="bg-destructive/10 p-6 rounded-lg mt-8">
          <h4 className="text-lg font-semibold mb-2 text-destructive">⚠️ Aviso Legal Importante</h4>
          <p className="text-foreground">
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