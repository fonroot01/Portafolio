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
    id: "icbf-hogar-gestor",
    position: "Asistente de Hogar Gestor",
    company: "ICBF",
    location: "Florencia, Caquetá, Colombia",
    startDate: new Date("2017-04-18"),
    endDate: new Date("2017-04-30"),
    description: [
      "Apoyo en el diligenciamiento de formularios para evaluación de casos.",
      "Revisión y organización de casos relacionados con violencia intrafamiliar, abuso, abandono y otros factores psicosociales.",
      "Acompañamiento en la gestión de documentación y seguimiento de procesos."
    ],
    achievements: [
      "Empatía y sensibilidad social.",
      "Comunicación efectiva."
    ],
    skills: [],
    companyUrl: undefined,
    logo: "/career/logobienestar.png"
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
