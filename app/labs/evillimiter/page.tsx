import React from 'react';
import Image from 'next/image';

export default function EvilLimiterLab() {
  return (
    <div className="container py-8 px-4 mx-auto max-w-4xl">
      {/* Encabezado */}
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
        Control de Ancho de Banda con Evil Limiter
      </h1>

      {/* Objetivo Principal */}
      <div className="bg-card rounded-lg p-6 mb-8 shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Objetivo Principal</h2>        <p className="text-muted-foreground text-justify">
          Demostrar el uso de Evil Limiter para la gestión y limitación del ancho de banda en redes locales (LAN),
          con fines educativos y de análisis de seguridad en entornos controlados.
        </p>
      </div>

      {/* Descripción del Laboratorio */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Descripción del Laboratorio</h2>        <p className="text-muted-foreground mb-4 text-justify">
          Este laboratorio explora las capacidades de Evil Limiter para controlar el tráfico de red mediante
          técnicas de ARP spoofing. La herramienta permite identificar dispositivos conectados a la red local
          y aplicar limitaciones de ancho de banda específicas, lo que resulta útil para comprender la
          importancia de la seguridad en redes compartidas.
        </p>
      </div>

      {/* Requisitos */}
      <div className="bg-muted p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4">Requisitos Previos</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>Python 3.x instalado en el sistema</li>
          <li>Acceso root/administrador</li>
          <li>NetfilterQueue (para el manejo de paquetes)</li>
          <li>Conexión a una red local con permisos de prueba</li>
        </ul>
      </div>

      {/* Instalación */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Proceso de Instalación</h2>
        <div className="bg-muted p-4 rounded-md overflow-x-auto mb-4">
          <pre className="text-sm">
            <code>
              git clone https://github.com/jafarlihi/evil-limiter{'\n'}
              cd evil-limiter{'\n'}
              chmod +x evil-limiter.py{'\n'}
              sudo python3 evil-limiter.py
            </code>
          </pre>
        </div>
        <div className="bg-muted p-4 rounded-md overflow-x-auto mb-4">
          <p className="font-semibold mb-2">Solución al error común de NetfilterQueue:</p>
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

        {/* Paso 1 */}        <div>
          <h3 className="text-xl font-semibold mb-4">1. Selección de Interfaz de Red</h3>          <p className="text-muted-foreground mb-4 text-justify">
            Al iniciar Evil Limiter, primero debes seleccionar la interfaz de red que se utilizará
            para el monitoreo y control del tráfico. Generalmente será tu adaptador de red principal
            conectado a la red local.
          </p>
          <Image
            src="/lab1/evillimiter/1.png"
            alt="Selección de interfaz de red en Evil Limiter"
            width={800}
            height={450}
            className="rounded-lg shadow-md mb-4"
          />
        </div>

        {/* Paso 2 */}
        <div>
          <h3 className="text-xl font-semibold mb-4">2. Escaneo de Dispositivos</h3>          <p className="text-muted-foreground mb-4 text-justify">
            La herramienta realizará un escaneo de la red local para identificar todos los dispositivos
            conectados, mostrando sus direcciones IP y MAC. Esto permite obtener una visión completa de
            todos los dispositivos presentes en la red local.
          </p>
          <Image
            src="/lab1/evillimiter/2.png"
            alt="Escaneo de dispositivos en la red"
            width={800}
            height={450}
            className="rounded-lg shadow-md mb-4"
          />
        </div>

        {/* Paso 3 */}
        <div>
          <h3 className="text-xl font-semibold mb-4">3. Aplicación de Límites</h3>          <p className="text-muted-foreground mb-4 text-justify">
            Una vez identificados los dispositivos, puedes seleccionar uno o varios objetivos y establecer
            límites específicos de ancho de banda tanto para la descarga como para la carga. La herramienta
            permite una configuración granular de las limitaciones de velocidad para cada dispositivo.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <Image
              src="/lab1/evillimiter/3.png"
              alt="Selección de dispositivos para limitar"
              width={400}
              height={300}
              className="rounded-lg shadow-md"
            />
            <Image
              src="/lab1/evillimiter/4.png"
              alt="Configuración de límites de ancho de banda"
              width={400}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Paso 4 */}
        <div>
          <h3 className="text-xl font-semibold mb-4">4. Monitoreo en Tiempo Real</h3>          <p className="text-muted-foreground mb-4 text-justify">
            Evil Limiter permite monitorear el tráfico en tiempo real y ajustar los límites según sea
            necesario, proporcionando una vista detallada del consumo de ancho de banda. Esta capacidad
            de monitoreo en tiempo real facilita la verificación inmediata de la efectividad de las
            limitaciones aplicadas.
          </p>
          <Image
            src="/lab1/evillimiter/5.png"
            alt="Monitoreo de tráfico en tiempo real"
            width={800}
            height={450}
            className="rounded-lg shadow-md mb-4"
          />
        </div>
      </div>

      {/* Aviso Legal */}
      <div className="bg-destructive/10 p-6 rounded-lg mt-8">
        <h4 className="text-lg font-semibold mb-2 text-destructive">Aviso Legal Importante</h4>        <p className="text-justify">
          Esta herramienta debe utilizarse únicamente en redes para las que se tenga autorización explícita.
          El uso no autorizado de Evil Limiter puede violar políticas de uso aceptable de red y leyes de
          ciberseguridad. Este laboratorio tiene fines puramente educativos y debe realizarse exclusivamente
          en entornos controlados y autorizados.
        </p>
      </div>
    </div>
  );
}
