import { ValidPages } from "./constants";
import { ContactPageConfig } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
    // featuredDescription: string;
  };
};

export const pagesConfig: PagesConfig & { contact: ContactPageConfig } = {
  home: {
    title: "Home",
    description: "Desde scripts hasta apps, esto es lo que pasa cuando la curiosidad se junta con el teclado.",
    metadata: {
      title: "Home",
      description: "Naman Barkiya's portfolio website.",
    },
  },
  skills: {
    title: "Habilidades",
    description: "Habilidades clave que definen mi identidad profesional.",
    metadata: {
      title: "Habilidades",
      description:
        "Habilidades clave de Alfonso Mosquera que definen su identidad profesional.",
    },
  },
  experience: {
    title: "Proyectos",
    description: "Destacando el recorrido profesional y proyectos impactantes.",
    metadata: {
      title: "Proyectos",
      description: "Proyectos de Alfonso Mosquera en el desarrollo de aplicaciones y tecnología.",
    },
  },
  contact: {
    title: "Contáctame",
    description: "¡Conectemos y exploremos colaboraciones!",
    metadata: {
      title: "Contact",
      description: "Contact Naman Barkiya.",
    },
    form: {
      name: "Nombre",
      namePlaceholder: "Ingresa tu nombre",
      email: "Correo electrónico",
      emailPlaceholder: "Ingresa tu correo electrónico",
      message: "Mensaje",
      messagePlaceholder: "Escribe tu mensaje",
      social: "Red social (opcional)",
      socialPlaceholder: "Enlace a tu red social",
      submit: "Enviar",
    },
    template: {
      like: "¿Te gusta este portafolio?",
      openSource: "Es open source. Explora y contribuye en GitHub.",
      sourceCode: "Código fuente",
    },
  },
  certificaciones: {
    title: "Certificaciones",
    description: "Certificaciones obtenidas en plataformas reconocidas como Coursera.",
    metadata: {
      title: "Certificaciones",
      description:
        "Certificaciones de Alfonso Mosquera obtenidas en cursos y programas reconocidos.",
    },
  },
  contributions: {
    title: "Contribuciones",
    description: "Contribuciones de código abierto y participación en la comunidad.",
    metadata: {
      title: "Contribuciones",
      description:
        "Contribuciones de Alfonso Mosquera a proyectos de código abierto y comunidad.",
    },
  },
  resume: {
    title: "Resume",
    description: "Naman Barkiya's resume.",
    metadata: {
      title: "Resume",
      description: "Naman Barkiya's resume.",
    },
  },
  career: {
    title: "Línea de Carrera",
    description: "Recorrido profesional y línea de tiempo de experiencia.",
    metadata: {
      title: "Línea de Carrera",
      description: "Recorrido profesional y línea de tiempo de experiencia de Alfonso Mosquera.",
    },
  },
};
