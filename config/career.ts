import { ValidSkills } from "./constants";

export interface CareerExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const careerExperiences: CareerExperienceInterface[] = [
  {
    id: "profesional-universitario",
    position: "Profesional Universitario - Auxiliar Administrativo de Sistemas",
    company: "Instituto Tecnológico del Putumayo",
    location: "Mocoa, Putumayo, Colombia",
    startDate: new Date("2025-01-01"),
    endDate: "Present",
    description: [
      "Gestión y mantenimiento de sistemas informáticos institucionales",
      "Administración de redes y servicios tecnológicos",
      "Soporte técnico a usuarios y equipos",
      "Implementación de políticas de seguridad informática",
      "Desarrollo y mantenimiento de soluciones tecnológicas",
      "Gestión de inventario de recursos tecnológicos"
    ],
    achievements: [
      "Optimización de procesos tecnológicos institucionales",
      "Mejora en la seguridad de sistemas informáticos",
      "Implementación de soluciones eficientes"
    ],
    skills: ["Active Directory", "SQL Server", "Microsoft 365", "Virtualización"],
    companyUrl: undefined,
    logo: "/career/ubpd.png"
  },
  {
    id: "aprendiz-soporte-ti",
    position: "Aprendiz de Soporte y Servicio TI",
    company: "Contrato de prácticas",
    location: "Colombia",
    startDate: new Date("2022-04-01"),
    endDate: new Date("2022-10-31"),
    description: [
      "Mantenimiento preventivo y correctivo de equipos de cómputo, asegurando su óptimo funcionamiento.",
      "Atención a incidentes y solicitudes de usuarios, proporcionando soporte técnico eficiente.",
      "Supervisión de servidores en plantas y estaciones de servicio para garantizar la estabilidad de los sistemas.",
      "Colaboración en la documentación de procedimientos y capacitación de usuarios, contribuyendo a la mejora de procesos tecnológicos y operativos."
    ],
    achievements: [
      "Mejora de la eficiencia operativa mediante soporte técnico oportuno.",
      "Contribución a la estabilidad de los sistemas y satisfacción de usuarios."
    ],
    skills: ["linux", "SQL Server"],
    companyUrl: undefined, 
    logo: "/career/logozeuss.png"
  },
  {
    id: "zeuss-auxiliar-ti",
    position: "Auxiliar de Plataformas Tecnológicas",
    company: "Zeuss S.A.S",
    location: "Medellín, Antioquia, Colombia",
    startDate: new Date("2022-10-01"),
    endDate: new Date("2023-01-31"),
    description: [
      "Administración y configuración de sistemas de telefonía IP.",
      "Gestión de software contable y control de licencias ofimáticas.",
      "Respaldo de información y supervisión de plataformas para administración de plantas de combustible.",
      "Gestión de inventario de equipos tecnológicos.",
      "Soporte técnico mediante escalamiento de tickets y seguimiento de incidentes.",
      "Documentación de casos y procedimientos para optimizar la gestión y eficiencia de procesos tecnológicos."
    ],
    achievements: [
      "Mejora de la eficiencia operativa y continuidad de los servicios tecnológicos.",
      "Optimización de la gestión documental y soporte técnico."
    ],
    skills: ["3CX", "DMS", "Microsoft 365"],
    companyUrl: undefined,
    logo: "/career/logozeuss.png"
  },
  {
    id: "formacion-autodidacta",
    position: "Formación Autodidacta en Ciberseguridad y Sistemas",
    company: "Autodidacta",
    location: "Medellín, Antioquia",
    startDate: new Date("2024-01-01"),
    endDate: new Date("2025-05-01"),
    description: [
      "Dedicación al refuerzo de conocimientos técnicos en ciberseguridad y administración de sistemas mediante cursos, laboratorios y práctica constante.",
      "Auditorías de redes WiFi con Kali Linux: desautenticación, sniffing y crackeo de contraseñas.",
      "Pruebas de penetración con Metasploit en máquinas virtuales vulnerables.",
      "Montaje y administración de dominios con Windows Server y Directorio Activo.",
      "Automatización de tareas de ciberseguridad con Python.",
      "Consultas y análisis de datos con SQL."
    ],
    achievements: [
      "Adquisición de experiencia práctica y base sólida en ciberseguridad y sistemas.",
      "Actualmente cursando Ciberseguridad con Google (Coursera/SENATIC)."
    ],
    skills: ["linux", "Python", "SQL Server"],
    companyUrl: undefined,
    logo: "/career/autodidacta.png"
  }
];
