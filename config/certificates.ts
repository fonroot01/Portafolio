export interface Certificate {
  id: number;
  pdfPath: string;
  previewImage: string;
  institution?: string;
  year: string;
  category: string;
  title?: string;
}

export const certificates: Certificate[] = [
  {
    id: 1,
    pdfPath: "/Diploma ingenieria de sistemas.pdf",
    previewImage: "/imagenes diplomados/Diploma ingenieria de sistemas.png",
    institution: "Corporación Universitaria Americana",
    year: "2024",
    category: "Grado en Ingeniería de Sistemas",
    title: "Diploma de grado en Ingeniería de Sistemas",
  },
  {
    id: 2,
    pdfPath: "/Certificado_del_diplomado_en_ciberseguridad_y_desarrollo_organizacional_.pdf",
    previewImage: "/imagenes diplomados/Diplomado en ciberseguridad y desarrollo organizacional.png",
    institution: "Corporación Universitaria Americana",
    year: "2024",
    category: "Diplomado Opción de Grado",
    title: "Diplomado en Ciberseguridad y Desarrollo Organizacional",
  },
  {
    id: 3,
    pdfPath: "/Diplomado_en_seguridad_informatica.pdf",
    previewImage: "/imagenes diplomados/Diplomado_en_seguridad_informatica.png",
    institution: "Corporación Universitaria Americana",
    year: "2023",
    category: "Diplomado Electiva",
    title: "Diplomado en Seguridad Informática",
  },
  {
    id: 4,
    pdfPath: "/Certificado_en_Docencia_Universitaria.pdf",
    previewImage: "/imagenes diplomados/Diplomado Docencia Universitaria.png",
    institution: "Politecnico de Suramerica",
    year: "2025",
    category: "Diplomado Intensivo",
    title: "Diplomado en Docencia Universitaria",
  },
  {
    id: 5,
    pdfPath: "/Introducción a la Ciberseguridad.pdf",
    previewImage: "/imagenes diplomados/Introducción a la Ciberseguridad - Cisco.png",
    institution: "Cisco",
    year: "2025",
    category: "Curso de Ciberseguridad de Cisco",
    title: "Introducción a la Ciberseguridad",
  },
  {
    id: 6,
    pdfPath: "/Fundamentos de la ciberseguridad.pdf",
    previewImage: "/imagenes diplomados/Fundamentos de la ciberseguridad.png",
    institution: "Google",
    year: "2025",
    category: "Curso de Ciberseguridad de Google",
    title: "Fundamentos de la Ciberseguridad",
  },
  {
    id: 7,
    pdfPath: "/Juega a los Seguro, Gestiona los riesgos de seguridad.pdf",
    previewImage: "/imagenes diplomados/Juega a los seguro.png",
    institution: "Google",
    year: "2025",
    category: "Curso de Ciberseguridad de Google",
    title: "Juega a los Seguro",
  },
  {
    id: 8,
    pdfPath: "/Cómo resolver problemas y tomar decisiones con eficacia.pdf",
    previewImage: "/imagenes diplomados/como resolver problemas con eficacia.png",
    institution: "University of California, Irvine (UCI)",
    year: "2025",
    category: "Toma de Decisiones",
    title: "Cómo Resolver Problemas y Tomar Decisiones con Eficacia",
  },
  {
    id: 9,
    pdfPath: "/Introducción a la programación en Python I.pdf",
    previewImage: "/imagenes diplomados/Introducción a la programación en Python I.png",
    institution: "Universidad Católica de Chile",
    year: "2025",
    category: "Python I",
    title: "Introducción a la programación en Python I",
  }
];

export default certificates;
