import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const ProjectsSection = () => {
  // Estados para controlar la visibilidad de los proyectos
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);

  // Array de proyectos para mejor manejo
  const projects = [
    {
      id: 1,
      title: "GIP Pro",
      description: "Permite gestionar de manera gráfica y sencilla la configuración de interfaces de red, servidores DNS y configuraciones de proxy.",
      githubUrl: "https://github.com/fonroot01/GIP-Pro-V1.0",
      tags: ["Python", "CSS", "Tkinter", "Networking"],
      image: "/portadasp/gippro.webp",
    },
    {
      id: 2,
      title: "Droid Specter",
      description: "Herramienta que permite interactuar con dispositivos Android de forma remota, ideal para pruebas de seguridad móvil.",
      githubUrl: "https://github.com/fonroot01/Droid-Specter",
      tags: ["Python", "Tkinter", "Android", "Seguridad Móvil"],
      image: "/portadasp/droid.webp",
    },
    {
      id: 3,
      title: "GestorIP",
      description: "Cambia tu dirección IP de forma rápida y sencilla, sin necesidad de usar la consola. Permite gestionar múltiples conexiones de red y restablecer dhcp.",
      githubUrl: "https://github.com/fonroot01/GestorIP",
      tags: ["Python", "Tkinter", "Network Tools"],
      image: "/portadasp/gestorip.webp",
    },
    {
      id: 4,
      title: "InvenSoft",
      description: "Sistema de inventario de equipos TI. Permite registrar, buscar y gestionar equipos de forma eficiente.",
      githubUrl: "https://github.com/fonroot01/Inventario-de-equipos-TI",
      tags: ["Python", "Tkinter", "PyQt5", "SQL Server"],
      image: "/portadasp/invensoft.webp",
    },
    {
      id: 5,
      title: "USB Doctor",
      description: "Utilidad grafica para reparar unidades USB afectadas por virus, eliminando archivos sospechosos y restaurando la funcionalidad de la unidad.",
      githubUrl: "https://github.com/fonroot01/USB-Doctor",
      tags: ["Python", "Tkinter"],
      image: "/portadasp/usbdoctor.webp",
    },
    {
      id: 6,
      title: "WinPyX",
      description: "Herramienta para limpiar archivos temporales, eliminar el historial de navegadores y vaciar la papelera de reciclaje en Windows.",
      githubUrl: "https://github.com/fonroot01/WinPyX",
      tags: ["Python", "Tkinter"],
      image: "/portadasp/winpyx.webp",
    },
  ];
  // Array de laboratorios para mejor manejo
  const labs = [
    {
      id: 1,
      slug: "metasploit",
      title: "Explotación de Vulnerabilidades en Windows con Metasploit",
      description: "Ejecución detallada de exploits y payloads utilizando la interfaz de línea de comandos (CLI) de Metasploit Framework para pentesting profesional.",
      badges: ["Post-Explotación", "Escalamiento de Privilegios", "Análisis de Vulnerabilidades", "CLI", "Windows"],
      teamType: "red",
      date: "Domingo, 6 de abril de 2025",
      link: "/labs/metasploit"
    },
    {
      id: 2,
      slug: "armitage",
      title: "Explotación de Vulnerabilidades en Windows con Armitage",
      description: "Explotación gráfica de vulnerabilidades y gestión visual de sesiones con Metasploit. Demostración del proceso completo de pentesting desde el escaneo hasta la post-explotación.",
      badges: ["Pentesting Ofensivo", "Explotación de Vulnerabilidades", "Post-Explotación", "Windows"],
      teamType: "red",
      date: "Martes, 11 de marzo de 2025",
      link: "/labs/armitage"
    },
    {
      id: 3,
      slug: "airgeddon",
      title: "Auditoría Wi-Fi con Airgeddon",
      description: "Evaluación de seguridad en redes Wi-Fi mediante ataques WPS/WPA2, captura de handshakes y técnicas de desautenticación y spoofing.",
      badges: ["Pentesting Wi-Fi", "Análisis de Protocolos", "Ingeniería Social"],
      teamType: "red",
      date: "Viernes, 29 de noviembre de 2024",
      link: "/labs/airgeddon"
    },
    {
      id: 4,
      slug: "evillimiter",
      title: "Limitación de Ancho de Banda en la Red con Evil Limiter",
      description: "Demostración práctica de control de ancho de banda en redes LAN mediante técnicas de ARP spoofing y herramientas especializadas de gestión de tráfico.",
      badges: ["Análisis de Red", "Control de Tráfico", "ARP Spoofing"],
      teamType: "blue",
      date: "Jueves, 17 de octubre de 2024",
      link: "/labs/evillimiter"
    },
    {
      id: 5,
      slug: "john-the-ripper",
      title: "Auditoría de Contraseñas con John the Ripper",
      description: "Demostración práctica del uso de John the Ripper para evaluar la fortaleza de contraseñas en archivos .rar mediante ataques de diccionario.",
      badges: ["Red Team", "Auditoría", "Forense"],
      teamType: "red",
      date: "Lunes, 3 de junio de 2025",
      link: "/labs/john-the-ripper"
    }
  ];

  // Iconos SVG para los equipos
  const RedTeamIcon = () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2M12 8L11.5 10.5L9 11L11.5 11.5L12 14L12.5 11.5L15 11L12.5 10.5L12 8Z"/>
    </svg>
  );

  const BlueTeamIcon = () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1Z"/>
    </svg>
  );

  const ShieldIcon = () => (
    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11C15.4,11 16,11.4 16,12V16C16,16.6 15.6,17 15,17H9C8.4,17 8,16.6 8,16V12C8,11.4 8.4,11 9,11V10C9,8.6 10.2,9.2 10.2,10V11H13.8V10C13.8,9.2 12.8,8.2 12,8.2Z"/>
    </svg>
  );

  // Iconos de hover overlay
  const RedTeamHoverIcon = () => (
    <svg className="w-16 h-16 opacity-80" viewBox="0 0 100 100" fill="none">
      <path
        d="M50 15 L60 30 L80 30 L65 45 L70 65 L50 55 L30 65 L35 45 L20 30 L40 30 Z"
        fill="currentColor"
        className="text-red-500"
      />
      <circle
        cx="50"
        cy="50"
        r="35"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="text-red-500"
      />
    </svg>
  );

  const BlueTeamHoverIcon = () => (
    <svg className="w-16 h-16 opacity-80" viewBox="0 0 100 100" fill="none">
      <path
        d="M25 30 L50 15 L75 30 M25 70 L50 85 L75 70 M25 30 L25 70 M75 30 L75 70"
        stroke="currentColor"
        strokeWidth="3"
        className="text-blue-500"
      />
      <circle
        cx="50"
        cy="50"
        r="35"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="text-blue-500"
      />
    </svg>
  );

  // Lógica para mostrar solo los primeros 4 proyectos o todos
  const projectsToShow = showAllProjects ? projects : projects.slice(0, 4);
  const hasMoreProjects = projects.length > 4;

  // Lógica para mostrar solo los primeros 4 laboratorios o todos
  const [showAllLabs, setShowAllLabs] = useState(false);
  const labsToShow = showAllLabs ? labs : labs.slice(0, 4);
  const hasMoreLabs = labs.length > 4;

  return (
    <section className="min-h-screen">
      <div className="container mx-auto py-20 px-4">
        {/* Sección de Proyectos */}
        <div className="mb-20">          <h2 className="text-4xl font-extrabold mb-12 text-center text-foreground font-heading tracking-tight">
            <span className="inline-block align-middle mr-3 text-xl animate-bounce">{"🛠️"}</span> Proyectos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {projectsToShow.map((project) => (
              <div
                key={project.id}
                className="bg-card rounded-xl overflow-hidden flex flex-col h-full shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 group border border-border"
              >
                {/* Contenedor de imagen mejorado */}
                <div className="relative w-full h-[250px] bg-background rounded-t-xl overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src={project.image}
                      alt={`${project.title} preview`}
                      fill
                      style={{ objectFit: "cover" }}
                      className="transition-transform duration-300 group-hover:scale-105"
                      priority={project.id === 1}
                      quality={100}
                    />
                  </div>
                  {/* Overlay con título */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent p-5">
                    <h3 className="text-2xl font-bold text-foreground text-shadow-lg">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Contenido de la tarjeta */}
                <div className="p-4 flex flex-col items-center gap-3">
                  <p className="text-foreground/90 text-base leading-relaxed text-center max-w-md">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-sm bg-primary/10 text-primary px-2.5 py-1 rounded-full font-medium font-heading"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Botones de acción */}
                  <div className="flex flex-row items-center justify-center gap-3 mt-1" role="group" aria-label="Acciones del proyecto">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline underline-offset-2 text-sm hover:text-primary/80 transition-colors flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      Ver en GitHub
                    </a>

                    {project.title === "InvenSoft" && (
                      <button
                        onClick={() => setShowDemoModal(true)}
                        className="flex items-center justify-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium gap-2"
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                        </svg>
                        Ver Demo
                      </button>
                    )}

                    {(project.title === "GIP Pro" ||
                      project.title === "Droid Specter" || 
                      project.title === "GestorIP" || 
                      project.title === "USB Doctor" || 
                      project.title === "WinPyX") && (
                      <a
                        href={`/Instaladores/${
                          project.title === "GIP Pro" ? "GIPPro_setup" :
                          project.title === "Droid Specter" ? "DroidSpecter_setup" :
                          project.title === "GestorIP" ? "GestorIP_setup" :
                          project.title === "USB Doctor" ? "USBDoctor_setup" :
                          "WinPyX_setup"
                        }.rar`}
                        className="flex items-center justify-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium gap-2"
                        download
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                          <polyline points="7 10 12 15 17 10"/>
                          <line x1="12" y1="15" x2="12" y2="3"/>
                        </svg>
                        Instalar
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {hasMoreProjects && (
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setShowAllProjects(!showAllProjects)}
                className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-md"
              >
                {showAllProjects ? (
                  <>
                    <span>Ver menos</span>
                    <svg
                      className="w-4 h-4 ml-2 inline-block transform rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </>
                ) : (
                  <>
                    <span>Ver más proyectos</span>
                    <svg
                      className="w-4 h-4 ml-2 inline-block"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </>
                )}
              </button>
            </div>
          )}
        </div>

        {/* Sección de Laboratorios de Ciberseguridad */}
        <div id="labs" className="mt-20">          <h2 className="text-4xl font-extrabold mb-12 text-center text-foreground font-heading tracking-tight">
            <span className="inline-block align-middle mr-3 text-xl animate-bounce">{"🔒"}</span>
            Laboratorios de Ciberseguridad
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {labsToShow.map((lab) => (
              <div
                key={lab.id}
                className={`
                  rounded-xl border border-border bg-card p-6 shadow-lg
                  relative transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2
                  group overflow-hidden
                  ${lab.teamType === 'red' ? 'hover:border-red-500/30' : 'hover:border-blue-500/30'}
                `}
              >
                {/* Borde superior de equipo */}
                <div
                  className={`
                    absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100
                    transition-opacity duration-300
                    ${lab.teamType === 'red' ? 'bg-red-500' : 'bg-blue-500'}
                  `}
                />

                {/* Header con badge de equipo (Red/Blue Team) */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`
                      flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium
                      uppercase tracking-wider border
                      ${lab.teamType === 'red'
                        ? 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20'
                        : 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20'
                      }
                    `}
                  >
                    {lab.teamType === 'red' ? <RedTeamIcon /> : <BlueTeamIcon />}
                    {lab.teamType === 'red' ? 'Red Team' : 'Blue Team'}
                  </div>
                  {/* Icono de escudo - Ahora al final del header, alineado con el badge */}
                  <div className="w-10 h-10 rounded-full bg-muted/50 flex-shrink-0 flex items-center justify-center">
                    <ShieldIcon />
                  </div>
                </div>
                {/* Título de la tarjeta */}
                <h3 className="text-xl font-bold text-foreground leading-tight text-center mb-3 font-heading">
                  {lab.title}
                </h3>

                {/* Descripción */}
                <p className="text-foreground/90 text-base leading-relaxed text-center max-w-md mb-3">
                  {lab.description}
                </p>

                {/* Tags - Centrados */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {lab.badges.map((badge, index) => (
                    <span
                      key={index}
                      className="text-sm bg-primary/10 text-primary px-2.5 py-1 rounded-full font-medium font-heading"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                {/* Overlay de hover con icono y texto "Auditar laboratorio" */}
                <Link
                  href={lab.link}
                  className="absolute inset-0 bg-black/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center cursor-pointer text-center"
                >                  <div className="transform scale-90 group-hover:scale-100 transition-transform duration-300 mb-3">
                    {lab.teamType === 'red' ? <RedTeamHoverIcon /> : <BlueTeamHoverIcon />}
                  </div>
                  <span className="text-xl font-extrabold text-foreground tracking-wide font-heading">
                    Auditar Laboratorio
                  </span>
                  <div className="w-1/2 h-0.5 bg-gradient-to-r from-transparent via-foreground to-transparent mt-2 opacity-50"></div>
                </Link>
              </div>
            ))}
          </div>

          {hasMoreLabs && (
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setShowAllLabs(!showAllLabs)}
                className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-md"
              >
                {showAllLabs ? (
                  <>
                    <span>Ver menos laboratorios</span>
                    <svg
                      className="w-4 h-4 ml-2 inline-block transform rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </>
                ) : (
                  <>
                    <span>Ver más laboratorios</span>
                    <svg
                      className="w-4 h-4 ml-2 inline-block"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Modal de demostración */}
      {showDemoModal && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowDemoModal(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Demo de InvenSoft"
        >
          <div 
            className="relative bg-background rounded-lg shadow-xl max-w-4xl w-full animate-fadeIn"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setShowDemoModal(false)}
              className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-full p-2 hover:bg-primary/90 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            
            <div className="aspect-video relative overflow-hidden rounded-lg">
              <img
                src="/gif_invensoft.gif"
                alt="InvenSoft Demo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;