import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "Git Bash",
    description: "Herramienta de control de versiones y terminal para flujos de trabajo eficientes.",
    rating: 5,
    icon: Icons.gitbash,
  },
  {
    name: "Vercel",
    description: "Plataforma para desplegar aplicaciones web de manera rápida y sencilla.",
    rating: 5,
    icon: Icons.vercel,
  },
  {
    name: "Virtualización",
    description: "Tecnología para crear entornos virtuales y optimizar recursos de hardware.",
    rating: 5,
    icon: Icons.laptop,
  },
  {
    name: "Python",
    description: "Lenguaje de programación versátil para automatización, análisis de datos y ciberseguridad.",
    rating: 4,
    icon: Icons.python,
  },
  {
    name: "SQL Server",
    description: "Lenguaje para gestión y consulta de bases de datos relacionales.",
    rating: 4,
    icon: Icons.sqlserver,
  },
  {
    name: "Linux",
    description: "Sistema operativo robusto y flexible, ideal para servidores y ciberseguridad.",
    rating: 4,
    icon: Icons.linux,
  },
  {
    name: "CSS 3",
    description: "Hojas de estilo para diseñar y personalizar la apariencia de sitios web.",
    rating: 3,
    icon: Icons.css3,
  },
  {
    name: "Next.js",
    description: "Framework de React para crear aplicaciones web modernas y optimizadas.",
    rating: 3,
    icon: Icons.nextjs,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
