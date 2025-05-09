import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ExperienceInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Experiences: ExperienceInterface[] = [
  {
    id: "droid-specter",
    companyName: "Droid Specter",
    type: "Professional",
    category: ["UI/UX", "Web Dev"],
    shortDescription:
      "Droid Specter es una herramienta desarrollada en Python que te permite tomar el control de tus dispositivos Android directamente desde tu PC.",
    websiteLink: undefined,
    githubLink: undefined,
    techStack: [
      "Python",
      "Git",
      "SQL Server",
      "linux"
    ],
    startDate: new Date("2023-01-01"),
    endDate: new Date("2025-05-08"),
    companyLogoImg: "/experience/droid-specter/logo.jpg",
    descriptionDetails: {
      paragraphs: [
        "Droid Specter es una solución multiplataforma que facilita la administración remota de dispositivos Android. Permite ejecutar comandos, transferir archivos, hacer capturas de pantalla y controlar el dispositivo desde una interfaz gráfica intuitiva en tu PC.",
        "El proyecto está construido en Python utilizando una interfaz gráfica multiplataforma y herramientas de automatización para la comunicación con el dispositivo Android. Está pensado tanto para usuarios avanzados como para quienes buscan una herramienta sencilla para gestionar su móvil desde el ordenador.",
        "Entre sus funcionalidades destacan: conexión rápida, explorador de archivos, control de pantalla, instalación de aplicaciones y automatización de tareas comunes en Android."
      ],
      bullets: [
        "Control remoto de dispositivos Android desde PC.",
        "Transferencia de archivos entre PC y Android.",
        "Captura de pantalla y grabación de pantalla.",
        "Instalación y desinstalación de aplicaciones.",
        "Automatización de tareas mediante scripts Python.",
        "Interfaz gráfica amigable y multiplataforma.",
        "Soporte multiplataforma (Windows, Linux)."
      ]
    },
    pagesInfoArr: [
      {
        title: "Pantalla principal",
        description: "Vista principal de la aplicación mostrando el control y estado del dispositivo Android conectado.",
        imgArr: ["/experience/droid-specter/app1.png"]
      },
      {
        title: "Explorador de archivos",
        description: "Permite navegar, copiar y transferir archivos entre el PC y el dispositivo Android.",
        imgArr: ["/experience/droid-specter/app2.png"]
      },
      {
        title: "Logo del proyecto",
        description: "Identidad visual de Droid Specter.",
        imgArr: ["/experience/droid-specter/logo.jpg"]
      }
    ]
  },
  {
    id: "invensoft",
    companyName: "Invensoft",
    type: "Professional",
    category: ["UI/UX", "Web Dev"],
    shortDescription:
      "Esta es una aplicación de escritorio desarrollada en PyQt5 para gestionar inventario de equipos TI.",
    websiteLink: undefined,
    githubLink: undefined,
    techStack: [
      "Python",
      "Git",
      "SQL Server",
      "linux"
    ],
    startDate: new Date("2022-01-01"),
    endDate: new Date("2022-12-31"),
    companyLogoImg: "/experience/invensoft/logoInvensoft.jpg",
    descriptionDetails: {
      paragraphs: [
        "Invensoft es una aplicación de escritorio creada con PyQt5 para la gestión eficiente de inventario de equipos de tecnología de la información.",
        "Permite registrar, actualizar y consultar información de equipos, así como generar reportes y mantener el control de activos TI en organizaciones de cualquier tamaño."
      ],
      bullets: [
        "Gestión de inventario de equipos TI.",
        "Interfaz intuitiva desarrollada en PyQt5.",
        "Generación de reportes y control de activos."
      ]
    },
    pagesInfoArr: [
      {
        title: "Pantalla principal",
        description: "Vista principal de la aplicación de inventario.",
        imgArr: ["/experience/invensoft/app1.png"]
      },
      {
        title: "Logo del proyecto",
        description: "Identidad visual de Invensoft.",
        imgArr: ["/experience/invensoft/logoInvensoft.jpg"]
      }
    ]
  },
  {
    id: "usb-doctor",
    companyName: "USB Doctor",
    type: "Professional",
    category: ["UI/UX", "Web Dev"],
    shortDescription:
      "Herramienta desarrollada en Python diseñada para reparar unidades USB afectadas.",
    websiteLink: undefined,
    githubLink: undefined,
    techStack: [
      "Python",
      "Git",
      "linux"
    ],
    startDate: new Date("2021-01-01"),
    endDate: new Date("2021-12-31"),
    companyLogoImg: "/experience/usb-doctor/logo.jpg",
    descriptionDetails: {
      paragraphs: [
        "USB Doctor es una herramienta creada en Python para la reparación y recuperación de unidades USB dañadas o infectadas.",
        "Permite limpiar, formatear y restaurar el funcionamiento de memorias USB de manera sencilla y segura."
      ],
      bullets: [
        "Reparación de unidades USB dañadas o infectadas.",
        "Interfaz sencilla y proceso guiado.",
        "Compatible con sistemas Windows y Linux."
      ]
    },
    pagesInfoArr: [
      {
        title: "Pantalla principal",
        description: "Vista principal de la herramienta USB Doctor.",
        imgArr: ["/experience/usb-doctor/app1.png"]
      },
      {
        title: "Logo del proyecto",
        description: "Identidad visual de USB Doctor.",
        imgArr: ["/experience/usb-doctor/logo.jpg"]
      }
    ]
  }
];

export const featuredExperiences = Experiences.slice(0, 3);
