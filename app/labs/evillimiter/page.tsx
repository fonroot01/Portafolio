'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function EvilLimiterLab() {
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
      <div className="container py-8 px-4 mx-auto max-w-4xl">
        {/* Encabezado Principal */}
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Control de Ancho de Banda con Evillimiter
        </h1>

        {/* Objetivo Principal */}
        <div className="bg-card rounded-lg p-6 mb-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Objetivo Principal</h2>
          {/* Línea divisoria como en Airgeddon */}
          <hr className="mb-6 border-t border-gray-700" /> 
          <p className="text-foreground text-justify">
            Demostrar el uso de Evillimiter para la gestión y limitación del ancho de banda en redes locales (LAN),
            con fines educativos y de análisis de seguridad en entornos controlados.
          </p>
        </div>

        {/* Descripción del Laboratorio */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Descripción del Laboratorio</h2>
          {/* Línea divisoria como en Airgeddon */}
          <hr className="mb-6 border-t border-gray-700" />
          <p className="text-foreground mb-4 text-justify">
            Este laboratorio explora las capacidades de Evil Limiter para controlar el tráfico de red mediante
            técnicas de ARP spoofing. La herramienta permite identificar dispositivos conectados a la red local
            y aplicar limitaciones de ancho de banda específicas, lo que resulta útil para comprender la
            importancia de la seguridad en redes compartidas.
            Es fundamental destacar que todas las demostraciones en este laboratorio se realizan con el permiso explícito
            del propietario de la red y los dispositivos involucrados.
          </p>
        </div>

        {/* Requisitos */}
        <div className="bg-muted p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Requisitos Previos</h2>
          {/* Línea divisoria como en Airgeddon */}
          <hr className="mb-6 border-t border-gray-700" />
          <ul className="list-disc pl-6 space-y-2">
            <li className="text-foreground text-justify">Python 3.x instalado en el sistema</li>
            <li className="text-foreground text-justify">Acceso root/administrador</li>
            <li className="text-foreground text-justify">NetfilterQueue (para el manejo de paquetes)</li>
            <li className="text-foreground text-justify">Conexión a una red local con permisos de prueba</li>
          </ul>
        </div>

        {/* Instalación */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Proceso de Instalación</h2>
          {/* Línea divisoria como en Airgeddon */}
          <hr className="mb-6 border-t border-gray-700" />
          <div className="bg-muted p-4 rounded-md overflow-x-auto mb-4">
            <pre className="text-sm">
              <code>
                git clone https://github.com/jafarlihi/evil-limiter{'\n'}
                cd evil-limiter{'\n'}
                chmod +x evil-limiter.py{'\n'}
                sudo python3 setup.py install {/* Comando de instalación con setup.py */}
              </code>
            </pre>
          </div>
          <div className="flex flex-col items-center mb-6">
            <Image
              src="/lab1/evillimiter/1.png"
              alt="Proceso de instalación de Evil Limiter con setup.py"
              width={500}
              height={320}
              className="rounded-lg shadow-md mb-2"
            />
            <p className="text-sm text-foreground text-center max-w-[800px]">
              Captura de pantalla mostrando la ejecución del script `setup.py install` para la instalación de Evil Limiter.
            </p>
          </div>
          <div className="bg-muted p-4 rounded-md overflow-x-auto mb-4">
            <p className="font-semibold mb-2 text-foreground text-justify">Solución al error común de NetfilterQueue:</p>
            <pre className="text-sm">
              <code>
                sudo apt-get install python3-netfilterqueue
              </code>
            </pre>
          </div>
        </div>

        {/* Proceso Paso a Paso */}
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold mb-6">Proceso Paso a Paso</h2>
          {/* Línea divisoria como en Airgeddon */}
          <hr className="mb-6 border-t border-gray-700" />

          {/* Paso 1: Navegación y Ajuste de Archivos */}
          <div>
            <h3 className="text-xl font-semibold mb-4">1. Configuración Previa y Ajustes de Logging</h3>
            <p className="text-foreground mb-4 text-justify">
              En ocasiones, es posible que sea necesario navegar por la estructura de directorios de Evil Limiter
              para realizar ajustes en los archivos fuente, como silenciar mensajes de depuración excesivos que
              puedan interferir con la claridad de la consola. Esto se logra editando archivos clave como `scan.py`.
            </p>
            <div className="flex flex-col items-center mb-6">
              <Image
                src="/lab1/evillimiter/2.png"
                alt="Navegación y edición de archivos de Evil Limiter"
                width={500}
                height={320}
                className="rounded-lg shadow-md mb-2"
              />
              <p className="text-sm text-foreground text-center max-w-[800px]">
                Captura de pantalla de la terminal mostrando la navegación por los directorios de Evil Limiter y la preparación para editar `scan.py` como root.
              </p>
            </div>
            <div className="flex flex-col items-center mb-6">
              <Image
                src="/lab1/evillimiter/3.png"
                alt="Ajuste del nivel de logging en scan.py"
                width={500}
                height={320}
                className="rounded-lg shadow-md mb-2"
              />
              <p className="text-sm text-foreground text-center max-w-[800px]">
                Fragmento del código de `scan.py` donde se configuran los niveles de logging para reducir la verbosidad de la salida de la herramienta.
              </p>
            </div>
          </div>

          {/* Paso 2: Inicio de Evil Limiter */}
          <div>
            <h3 className="text-xl font-semibold mb-4">2. Inicio de la Herramienta</h3>
            <p className="text-foreground mb-4 text-justify">
              Después de la instalación y cualquier ajuste necesario, se procede a iniciar Evil Limiter.
              La herramienta mostrará su banner y detectará automáticamente la interfaz de red principal.
            </p>
            <div className="flex flex-col items-center mb-6">
              <Image
                src="/lab1/evillimiter/4.png"
                alt="Pantalla de inicio de Evil Limiter"
                width={500}
                height={320}
                className="rounded-lg shadow-md mb-2"
              />
              <p className="text-sm text-foreground text-center max-w-[800px]">
                Captura de pantalla de la consola mostrando el banner de Evil Limiter y la inicialización de la herramienta, detectando la interfaz de red (`eth0`).
              </p>
            </div>
          </div>

          {/* Paso 3: Escaneo de Dispositivos y Aplicación de Límites */}
          <div>
            <h3 className="text-xl font-semibold mb-4">3. Escaneo de Dispositivos y Gestión de Ancho de Banda</h3>
            <p className="text-foreground mb-4 text-justify">
              Una vez iniciada, Evil Limiter escaneará la red local para identificar todos los dispositivos
              conectados, mostrando su ID, direcciones IP y MAC. Posteriormente, se pueden aplicar y liberar
              límites de ancho de banda a los dispositivos seleccionados utilizando comandos intuitivos.
            </p>
            <div className="flex flex-col items-center mb-6">
              <Image
                src="/lab1/evillimiter/5.png"
                alt="Listado de hosts y comandos de limitación/liberación de ancho de banda"
                width={500}
                height={320}
                className="rounded-lg shadow-md mb-2"
              />
              <p className="text-sm text-foreground text-center max-w-[800px]">
                Captura de pantalla mostrando la lista de hosts detectados en la red y los comandos `limit` y `free` aplicados para controlar el ancho de banda de un dispositivo específico.
              </p>
            </div>
          </div>
        </div>

        {/* Aviso Legal */}
        <div className="bg-destructive/10 p-6 rounded-lg mt-8">
          <h4 className="text-lg font-semibold mb-2 text-destructive">⚠️ Aviso Legal Importante</h4>
          <p className="text-foreground text-justify">
            Esta herramienta debe utilizarse únicamente en redes para las que se tenga autorización explícita.
            El uso no autorizado de Evil Limiter puede violar políticas de uso aceptable de red y leyes de
            ciberseguridad. Este laboratorio tiene fines puramente educativos y debe realizarse exclusivamente
            en entornos controlados y autorizados.
          </p>
        </div>
      </div>
    </>
  );
}