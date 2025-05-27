import React, { useState } from "react";
import Image from "next/image";

// Definición de tipos para evitar errores de tipo implícito
interface ExperienceItemProps {
  experience: {
    title: string;
    company: string;
    period: string;
    location: string;
    logo: string;
    responsibilities: string[];
    description?: string;
    skills?: string[];
  };
}

const CareerExperienceItem: React.FC<ExperienceItemProps> = ({ experience }) => {
  const [expanded, setExpanded] = useState(false);
  const MAX_DESC_LENGTH = 180;
  const MAX_RESPONSIBILITIES = 2;
  const showDescButton = experience.description && experience.description.length > MAX_DESC_LENGTH;
  const showRespButton = experience.responsibilities.length > MAX_RESPONSIBILITIES;
  const shortDesc = experience.description?.slice(0, MAX_DESC_LENGTH).trim();
  const fullDesc = experience.description;
  const shortResponsibilities = experience.responsibilities.slice(0, MAX_RESPONSIBILITIES);
  const allResponsibilities = experience.responsibilities;

  return (
    <div className="relative pl-8 sm:pl-32 py-6 group">
      {/* Línea vertical */}
      <div className="hidden sm:block absolute left-0 top-0 h-full w-0.5 bg-muted-foreground group-last:h-6"></div>

      {/* Contenido */}
      <div className="flex flex-col sm:flex-row items-start mb-1 group-hover:text-primary transition-colors">
        <div className="flex items-center mb-4 sm:mb-0">
          {/* Logo */}
          <div className="absolute left-0 sm:left-8 mt-1.5">
            <Image
              src={experience.logo}
              alt={`${experience.company} logo`}
              width={40}
              height={40}
              className="rounded-full border border-border"
            />
          </div>
        </div>

        {/* Periodo y ubicación */}
        <div className="hidden sm:block absolute left-28 text-sm text-muted-foreground max-w-[130px]">
          <span className="font-semibold">{experience.period}</span>
          <br />
          <span className="text-xs">{experience.location}</span>
        </div>
      </div>

      {/* Detalles */}
      <div className="sm:ml-[200px]">
        <h3 className="text-lg font-semibold mb-1">{experience.title}</h3>
        <p className="text-muted-foreground mb-3">{experience.company}</p>
        <div className="sm:hidden text-sm text-muted-foreground mb-3">
          <span className="font-semibold">{experience.period}</span> ·{" "}
          {experience.location}
        </div>
        {experience.description && (
          <p className="text-sm text-muted-foreground mb-4 text-justify">
            {expanded || !showDescButton ? fullDesc : shortDesc + "..."}
            {showDescButton && (
              <button
                className="ml-2 text-blue-500 hover:underline text-xs font-semibold"
                onClick={() => setExpanded((v) => !v)}
              >
                {expanded ? "Ver menos" : "Ver más"}
              </button>
            )}
          </p>
        )}
        <ul className="list-disc pl-4 text-sm text-muted-foreground space-y-2">
          {(expanded || !showRespButton ? allResponsibilities : shortResponsibilities).map((resp: string, idx: number) => (
            <li key={idx} className="text-justify">{resp}</li>
          ))}
          {showRespButton && (
            <li className="mt-2">
              <button
                className="text-blue-500 hover:underline text-xs font-semibold"
                onClick={() => setExpanded((v) => !v)}
              >
                {expanded ? "Ver menos" : `Ver más (${allResponsibilities.length - MAX_RESPONSIBILITIES} más)`}
              </button>
            </li>
          )}
        </ul>
        {experience.skills && (
          <div className="mt-6">
            <p className="text-sm font-semibold mb-3">Aptitudes:</p>
            <div className="flex flex-wrap gap-2">
              {experience.skills.map((skill: string, idx: number) => (
                <span
                  key={idx}
                  className="text-xs bg-background border border-border rounded-full px-3 py-1"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const CareerSection = () => {
  const experiences = [
    {
      title: "Formación técnica y práctica en ciberseguridad",
      company: "Formación Autodidacta",
      period: "ene. 2024 - may. 2025",
      location: "Colombia",
      logo: "/career/autodidacta.png",
      responsibilities: [
        "Automatización con Python para tareas de ciberseguridad",
        "Consulta y análisis de datos mediante SQL",
        "Auditorías de redes WiFi con Kali Linux: técnicas de desautenticación, captura de paquetes (sniffing) y crackeo de contraseñas.",
        "Pruebas de penetración en entornos controlados con máquinas vulnerables.",
        "Configuración de entornos con Windows Server y administración de Active Directory.",
      ],
      description:
     
      "Durante este tiempo, he reforzado mis conocimientos técnicos mediante cursos, laboratorios y práctica constante en entornos controlados. Como consiguiente les comparto lo aprendido en este periodo:",
      skills: [
        "Automatización con Python",
        "SQL",
        "Pentesting",
        "Kali Linux",
        "Administración de redes y servidores",
        "Formación continua",
      ],
    },
    {
      title: "Auxiliar de Plataformas TI",
      company: "Zeuss S.A.S",
      period: "oct. 2022 - ene. 2023",
      location: "Medellín, Antioquia, Colombia · Híbrido",
      logo: "/career/logozeuss.png",
      responsibilities: [
        "Configurar y monitorear sistemas de telefonía IP (3CX)",
        "Gestión de usuarios y permisos en Directorio Activo.",
        "Realizar backup de información y verificación de licencias en entorno Microsoft 365",
        "Mantenimiento y seguimiento de plataformas (ERP, DMS)",
      ],
      skills: [
        "Servicio de soporte técnico",
        "Configuración de sistemas de telefonía IP",
        "Gestion de usuarios y permisos",
        "Backup y verificación de licencias",
        "Aplicacion de buenas prácticas de seguridad",
      ],
    },
    {
      title: "Aprendiz de Soporte y Servicio TI",
      company: "Zeuss S.A.S",
      period: "abr. 2022 - oct. 2022",
      location: "Medellín, Antioquia, Colombia · Híbrido",
      logo: "/career/logozeuss.png",
      responsibilities: [
        "Brindar soporte técnico, escalamiento de tickets y seguimiento básico de incidentes",
        "Realizar actividades de mantenimiento preventivo y correctivo de equipos de cómputo",
        "Tareas de supervisión de servidores en plantas y estaciones de servicio.",
        "Documentar procedimientos y sesiones básicas de capacitación a usuarios",
        "Gestionar y actualizar inventario de equipos tecnológicos",
      ],
      skills: [
        "Soporte técnico",
        "Documentación tecnica",
        "mantenimiento y reparaciones",
        "Gestion de inventario",
        "Capacitación a usuarios",
      ],
    },
    {
      title: "Asistente - Hogar Gestor",
      company: "ICBF",
      period: "nov. 2017 - dic. 2017",
      location: "Florencia, Caquetá, Colombia · Presencial",
      logo: "/career/logobienestar.png",
      responsibilities: [
        "Apoyo del diligenciamiento de formularios para evaluación de casos",
        "Revisión y organización de casos relacionados con violencia intrafamiliar, abuso, abandono y otros factores psicosociales",
        "Acompañamiento en la gestión de documentación y seguimiento de procesos",
      ],
      skills: [
        "Empatia y sensibilidad social",
        "Comunicación efectiva",
        "Manejo de la confidencialidad",
      ],
    },
  ];
  return (
    <section className="min-h-screen">
      <div className="container mx-auto py-20">
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Experiencia Laboral
          </h2>
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <CareerExperienceItem key={index} experience={experience} />
            ))}
          </div>
        </div>

        {/* Resto del contenido existente (sección de GitHub) */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center">
            Contribuciones en GitHub
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* GestorIP */}
            <div className="rounded-xl border border-border bg-muted/30 p-6 shadow-md flex flex-col items-start relative transition-colors duration-300">
              <div className="flex items-center w-full justify-between">
                <span className="font-bold text-lg text-foreground">GestorIP</span>
                <a
                  href="https://github.com/fonroot01/GestorIP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 text-muted-foreground hover:text-primary"
                  title="Ver en GitHub"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42L17.59 5H14V3ZM5 5h7v2H7.41l9.3 9.29-1.42 1.42L5 7.41V14h2v7H3v-7h2V5Z"
                    />
                  </svg>
                </a>
              </div>
              <p className="text-muted-foreground mt-2 mb-4">
                Aplicación para la gestión y control de direcciones IP en redes
                empresariales.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-background border border-border rounded px-2 py-1 text-xs font-semibold">
                  Python
                </span>
                <span className="bg-background border border-border rounded px-2 py-1 text-xs font-semibold">
                  Tkinter
                </span>
                <span className="bg-background border border-border rounded px-2 py-1 text-xs font-semibold">
                  SQLite
                </span>
              </div>
            </div>
            {/* Droid Specter */}
            <div className="rounded-xl border border-border bg-muted/30 p-6 shadow-md flex flex-col items-start relative transition-colors duration-300">
              <div className="flex items-center w-full justify-between">
                <span className="font-bold text-lg text-foreground">Droid-Specter</span>
                <a
                  href="https://github.com/fonroot01/Droid-Specter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 text-muted-foreground hover:text-primary"
                  title="Ver en GitHub"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42L17.59 5H14V3ZM5 5h7v2H7.41l9.3 9.29-1.42 1.42L5 7.41V14h2v7H3v-7h2V5Z"
                    />
                  </svg>
                </a>
              </div>
              <p className="text-muted-foreground mt-2 mb-4">
                Herramienta de análisis y automatización para dispositivos Android.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-background border border-border rounded px-2 py-1 text-xs font-semibold">
                  Python
                </span>
                <span className="bg-background border border-border rounded px-2 py-1 text-xs font-semibold">
                  Android
                </span>
              </div>
            </div>
            {/* Invensoft */}
            <div className="rounded-xl border border-border bg-muted/30 p-6 shadow-md flex flex-col items-start relative transition-colors duration-300">
              <div className="flex items-center w-full justify-between">
                <span className="font-bold text-lg text-foreground">Invensoft</span>
                <a
                  href="https://github.com/fonroot01/Inventario-de-equipos-TI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 text-muted-foreground hover:text-primary"
                  title="Ver en GitHub"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42L17.59 5H14V3ZM5 5h7v2H7.41l9.3 9.29-1.42 1.42L5 7.41V14h2v7H3v-7h2V5Z"
                    />
                  </svg>
                </a>
              </div>
              <p className="text-muted-foreground mt-2 mb-4">
                Sistema para inventario y control de equipos de TI en
                organizaciones.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-background border border-border rounded px-2 py-1 text-xs font-semibold">
                  Python
                </span>
                <span className="bg-background border border-border rounded px-2 py-1 text-xs font-semibold">
                  Tkinter
                </span>
                <span className="bg-background border border-border rounded px-2 py-1 text-xs font-semibold">
                  SQLite
                </span>
              </div>
            </div>
            {/* USB Doctor */}
            <div className="rounded-xl border border-border bg-muted/30 p-6 shadow-md flex flex-col items-start relative transition-colors duration-300">
              <div className="flex items-center w-full justify-between">
                <span className="font-bold text-lg text-foreground">USB Doctor</span>
                <a
                  href="https://github.com/fonroot01/USB-Doctor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 text-muted-foreground hover:text-primary"
                  title="Ver en GitHub"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42L17.59 5H14V3ZM5 5h7v2H7.41l9.3 9.29-1.42 1.42L5 7.41V14h2v7H3v-7h2V5Z"
                    />
                  </svg>
                </a>
              </div>
              <p className="text-muted-foreground mt-2 mb-4">
                Utilidad para analizar y limpiar dispositivos USB de amenazas
                comunes.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-background border border-border rounded px-2 py-1 text-xs font-semibold">
                  Python
                </span>
                <span className="bg-background border border-border rounded px-2 py-1 text-xs font-semibold">
                  Tkinter
                </span>
              </div>
            </div>
            {/* WinPyX */}
            <div className="rounded-xl border border-border bg-muted/30 p-6 shadow-md flex flex-col items-start relative transition-colors duration-300">
              <div className="flex items-center w-full justify-between">
                <span className="font-bold text-lg text-foreground">WinPyX</span>
                <a
                  href="https://github.com/fonroot01/WinPyX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 text-muted-foreground hover:text-primary"
                  title="Ver en GitHub"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42L17.59 5H14V3ZM5 5h7v2H7.41l9.3 9.29-1.42 1.42L5 7.41V14h2v7H3v-7h2V5Z"
                    />
                  </svg>
                </a>
              </div>
              <p className="text-muted-foreground mt-2 mb-4">
                Colección de scripts y utilidades para automatización de tareas en
                sistemas Windows.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-background border border-border rounded px-2 py-1 text-xs font-semibold">
                  Python
                </span>
                <span className="bg-background border border-border rounded px-2 py-1 text-xs font-semibold">
                  PowerShell
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
