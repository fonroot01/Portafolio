'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';

export default function MetasploitLab() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container py-12 px-4 mx-auto max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center">
        Explotación de Vulnerabilidades en Windows con Metasploit
      </h1>

      {/* Objetivo del laboratorio */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3">Objetivo del laboratorio</h2>
        <hr className="mb-6 border-t border-border" />
        <p className="text-foreground text-justify">
          Este laboratorio detalla el proceso de explotación de una vulnerabilidad en un sistema operativo
          Windows 7 utilizando la herramienta Metasploit Framework. El objetivo es demostrar la capacidad
          de identificar, explotar y obtener acceso a un sistema vulnerable, así como realizar acciones
          post-explotación.
        </p>
      </section>

      {/* Herramientas utilizadas */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3">Herramientas utilizadas</h2>
        <hr className="mb-6 border-t border-border" />
        <ul className="list-disc pl-6 space-y-2 text-foreground">
          <li><b>Kali Linux</b> (máquina atacante)</li>
          <li><b>Windows 7 Ultimate SP1</b> (máquina víctima)</li>
          <li><b>Metasploit Framework</b></li>
        </ul>
      </section>

      {/* Procedimiento paso a paso */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3">Procedimiento paso a paso</h2>
        <hr className="mb-6 border-t border-border" />
        <div className="space-y-10">
          {/* Paso 1 */}
          <div>
            <h3 className="text-xl font-semibold mb-2">1. Configuración del entorno</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div className="bg-card p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-2">Máquina Atacante</h4>
                <ul className="list-disc pl-6 space-y-2 text-foreground">
                  <li>Sistema Operativo: Kali Linux</li>
                  <li>Herramientas: Metasploit Framework</li>
                  <li>IP: 192.168.88.128</li>
                </ul>
              </div>
              <div className="bg-card p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-2">Máquina Víctima</h4>
                <ul className="list-disc pl-6 space-y-2 text-foreground">
                  <li>Sistema Operativo: Windows 7 Ultimate SP1</li>
                  <li>Versión: 6.1.7601</li>
                  <li>IP: 192.168.88.129</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Paso 2 */}
          <div>
            <h3 className="text-xl font-semibold mb-2">2. Reconocimiento de la red</h3>
            <p className="mb-4">Verificación de conectividad entre la máquina atacante y la víctima:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold mb-2">Verificación en Windows 7 (Víctima)</h4>
                <p className="mb-2">Obtenemos la dirección IP del sistema usando ipconfig:</p>
                <Image
                  src="/lab1/metasploit/2.png"
                  alt="Configuración IP de Windows"
                  width={500}
                  height={320}
                  className="rounded-lg shadow mb-4"
                />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Verificación en Kali Linux (Atacante)</h4>
                <p className="mb-2">Iniciando msfconsole:</p>
                <Image
                  src="/lab1/metasploit/0.png"
                  alt="Inicio de msfconsole"
                  width={500}
                  height={320}
                  className="rounded-lg shadow mb-4"
                />
                <p className="mb-2">Verificación de red y conectividad:</p>
                <Image
                  src="/lab1/metasploit/3.png"
                  alt="Verificación de red"
                  width={500}
                  height={320}
                  className="rounded-lg shadow mb-4"
                />
              </div>
            </div>
          </div>
          {/* Paso 3 */}
          <div>
            <h3 className="text-xl font-semibold mb-2">3. Explotación de la vulnerabilidad MS17-010 (EternalBlue)</h3>
            <p className="mb-4">
              Configuración y ejecución del exploit EternalBlue para obtener acceso remoto a la máquina víctima.
            </p>
            {/* Aquí podrías agregar imágenes del proceso si las tienes */}
          </div>
          {/* Paso 4 */}
          <div>
            <h3 className="text-xl font-semibold mb-2">4. Post-explotación</h3>
            <p className="mb-4">
              Acciones realizadas después de obtener acceso al sistema:
            </p>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold mb-2">Información del sistema</h4>
                <Image
                  src="/lab1/metasploit/lanzamos el primer ataque para ver la info del sistema.png"
                  alt="Información del sistema"
                  width={500}
                  height={320}
                  className="rounded-lg shadow mb-4"
                />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Captura de pantalla remota</h4>
                <Image
                  src="/lab1/metasploit/segundo ataque, screenshot, pantallazo a la pantalla del equipo de la victima.png"
                  alt="Captura de pantalla del sistema víctima"
                  width={500}
                  height={320}
                  className="rounded-lg shadow mb-4"
                />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Shell del sistema</h4>
                <Image
                  src="/lab1/metasploit/tercer ataque, shell,escalamiento de privilegios.png"
                  alt="Shell del sistema"
                  width={500}
                  height={320}
                  className="rounded-lg shadow mb-4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resultados esperados */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3">Resultados esperados</h2>
        <hr className="mb-6 border-t border-border" />
        <p className="text-foreground text-justify">
          Se espera obtener acceso remoto a la máquina Windows 7 víctima, demostrando la explotación exitosa de la vulnerabilidad y la capacidad de realizar acciones de post-explotación como obtención de información, captura de pantalla y acceso a la shell del sistema.
        </p>
      </section>

      {/* Conclusiones */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3">Conclusiones</h2>
        <hr className="mb-6 border-t border-border" />
        <ul className="list-disc pl-6 space-y-2 text-foreground">
          <li>La explotación de vulnerabilidades conocidas puede comprometer sistemas desactualizados.</li>
          <li>El uso de herramientas como Metasploit facilita la automatización y el éxito de ataques complejos.</li>
          <li>La post-explotación permite un control avanzado sobre el sistema comprometido.</li>
        </ul>
      </section>

      {/* Aviso legal */}
      <div className="bg-destructive/10 p-6 rounded-lg mt-8">
        <h4 className="text-lg font-semibold mb-2 text-destructive">⚠️ Aviso legal</h4>
        <p className="text-foreground">
          Este laboratorio debe realizarse únicamente en un entorno controlado y con permiso explícito. La explotación no autorizada de sistemas puede tener graves consecuencias legales. El objetivo es puramente educativo para comprender el funcionamiento de las vulnerabilidades y mejorar las defensas de los sistemas.
        </p>
      </div>
    </div>
  );
}