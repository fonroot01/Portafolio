export interface Certificate {
  id: number;
  pdfPath: string;
  previewImage: string;
  issuer: string;
  institution?: string;
  year: string;
  category: string;
  title?: string;
  logo?: string | null;
  alt?: string;
}

export const certificates: Certificate[] = [
  {
    id: 1,
    pdfPath: "/Diploma ingenieria de sistemas.pdf",
    previewImage: "/imagenes diplomados/Diploma ingenieria de sistemas.png",
    issuer: "Diploma de grado en Ingeniería de Sistemas",
    institution: "Corporación Universitaria Americana",
    year: "2024",
    category: "Grado en Ingeniería de Sistemas",
    title: "Diploma de grado en Ingeniería de Sistemas",
    logo: null,
    alt: "Diploma Ingeniería"
  },
  {
    id: 2,
    pdfPath: "/Certificado_del_diplomado_en_ciberseguridad_y_desarrollo_organizacional_.pdf",
    previewImage: "/imagenes diplomados/Diplomado en ciberseguridad y desarrollo organizacional.png",
    issuer: "Diplomado en Ciberseguridad y Desarrollo Organizacional",
    institution: "Corporación Universitaria Americana",
    year: "2024",
    category: "Diplomado Opción de Grado",
    title: "Diplomado en Ciberseguridad y Desarrollo Organizacional",
    logo: null,
    alt: "Diplomado Ciberseguridad"
  },
  {
    id: 3,
    pdfPath: "/Diplomado_en_seguridad_informatica.pdf",
    previewImage: "/imagenes diplomados/Diplomado_en_seguridad_informatica.png",
    issuer: "Diplomado en Seguridad Informática",
    institution: "Institución de Seguridad Informática",
    year: "2024",
    category: "Diplomado Electiva Profesional",
    title: "Diplomado en Seguridad Informática",
    logo: null,
    alt: "Diplomado Seguridad"
  },
  {
    id: 4,
    pdfPath: "/Certificado_en_Docencia_Universitaria.pdf",
    previewImage: "/imagenes diplomados/Diplomado Docencia Universitaria.png",
    issuer: "Diplomado en Docencia Universitaria",
    institution: "Institución de Formación Docente",
    year: "2025",
    category: "Diplomado Intensivo",
    title: "Diplomado en Docencia Universitaria",
    logo: null,
    alt: "Docencia Universitaria"
  },
  {
    id: 5,
    pdfPath: "/Introducción a la Ciberseguridad.pdf",
    previewImage: "/imagenes diplomados/Introducción a la Ciberseguridad - Cisco.png",
    issuer: "Introducción a la Ciberseguridad",
    institution: "Cisco Networking Academy",
    year: "2025",
    category: "Curso de Ciberseguridad de Cisco",
    title: "Introducción a la Ciberseguridad",
    logo: null,
    alt: "Cisco Ciberseguridad"
  },
  {
    id: 6,
    pdfPath: "/Fundamentos de la ciberseguridad.pdf",
    previewImage: "/imagenes diplomados/Fundamentos de la ciberseguridad.png",
    issuer: "Fundamentos de la Ciberseguridad",
    institution: "Google Actívate",
    year: "2024",
    category: "Curso de Ciberseguridad de Google",
    title: "Fundamentos de la Ciberseguridad",
    logo: null,
    alt: "Fundamentos"
  },
  {
    id: 7,
    pdfPath: "/Juega a los Seguro, Gestiona los riesgos de seguridad.pdf",
    previewImage: "/imagenes diplomados/Juega a los seguro.png",
    issuer: "Juega a los Seguro, Gestiona los riesgos de seguridad",
    institution: "Google Actívate",
    year: "2024",
    category: "Curso de Ciberseguridad de Google",
    title: "Juega a los Seguro",
    logo: null,
    alt: "Juega a los Seguro"
  },
  {
    id: 8,
    pdfPath: "/Cómo resolver problemas y tomar decisiones con eficacia.pdf",
    previewImage: "/imagenes diplomados/como resolver problemas con eficacia.png",
    issuer: "Cómo Resolver Problemas y Tomar Decisiones con Eficacia",
    institution: "Universidad de Ciencias Informáticas (UCI)",
    year: "2024",
    category: "Curso de UCI",
    title: "Cómo Resolver Problemas y Tomar Decisiones con Eficacia",
    logo: null,
    alt: "Resolver Problemas"
  },
  {
    id: 9,
    pdfPath: "/Introducción a la programación en Python I.pdf",
    previewImage: "/imagenes diplomados/Introducción a la programación en Python I.png",
    issuer: "Introducción a la programación en Python I",
    institution: "Universidad de Chile (UC)",
    year: "2025",
    category: "Curso de Python I UC-Chile",
    title: "Introducción a la programación en Python I",
    logo: null,
    alt: "Python I"
  }
];

export default certificates;
