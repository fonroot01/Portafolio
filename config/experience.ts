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
    category: ["python"],
    shortDescription:
      "Droid Specter es una solución multiplataforma que facilita la administración remota de dispositivos Android.",
    websiteLink: undefined,
    githubLink: undefined,
    techStack: [
      "Python",
      "Git"
    ],
    startDate: new Date("2023-01-01"),
    endDate: new Date("2025-05-08"),
    companyLogoImg: "/experience/droid-specter/logo.jpg",
    descriptionDetails: {
      paragraphs: [
        "Droid Specter es una herramienta desarrollada en Python que te permite tomar el control de tus dispositivos Android directamente desde tu PC. Con una interfaz gráfica amigable, podrás gestionar tus dispositivos a través de ADB (Android Debug Bridge) de forma sencilla. Conecta tus dispositivos, visualiza las aplicaciones instaladas, instala o desinstala aplicaciones, e incluso deshabilita aquellas que no necesites, todo desde la comodidad de tu PC."
      ],
      bullets: [
        "Permite conectarte fácilmente a cualquier dispositivo Android (teléfonos, tablets o Android TV) mediante ADB, ya sea por cable USB o por red Wi-Fi.",
        "Muestra la lista de aplicaciones instaladas en el dispositivo.",
        "Permite instalar archivos APK y desinstalar aplicaciones con un clic.",
        "Ofrece la opción de deshabilitar apps que no necesites, ayudando a optimizar el rendimiento del dispositivo.",
        "Requisitos del sistema:",
        "- Tener Python 3 instalado en tu PC.",
        "- Tener ADB (Android Debug Bridge) correctamente configurado y accesible desde la terminal.",
        "- Instalar las siguientes librerías de Python: tkinter, ttkbootstrap, Pillow."
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
    category: ["python"],
    shortDescription:
      "Esta es una aplicación de escritorio desarrollada en PyQt5 para gestionar inventario de equipos TI.",
    websiteLink: undefined,
    githubLink: undefined,
    techStack: [
      "Python",
      "SQL Server"
    ],
    startDate: new Date("2022-01-01"),
    endDate: new Date("2022-12-31"),
    companyLogoImg: "/experience/invensoft/logoInvensoft.jpg",
    descriptionDetails: {
      paragraphs: [
        "Inventario de Equipos TI - InvenSoft\nEste proyecto nació como una idea durante mi experiencia en soporte técnico en Zeuss SAS. Hoy, lo he desarrollado de forma independiente como una solución moderna y adaptable para la gestión de inventario en cualquier empresa. Se trata de una aplicación de escritorio desarrollada en Python con PyQt5, conectada a una base de datos SQL Server para el almacenamiento y manejo eficiente de la información."
      ],
      bullets: [
        "Funcionalidades Principales:",
        "Gestión de Inventario:",
        "- Registro de equipos con los campos: Nombre, Tipo, Marca, Modelo, N° Serie, Estado.",
        "- Edición de información de equipos existentes.",
        "- Eliminación de registros desde la interfaz.",
        "- Visualización de equipos en una tabla organizada y moderna.",
        "- Filtro por estado del equipo (Operativo, En reparación, Dañado, etc.).",
        "- Búsqueda por nombre, tipo o número de serie.",
        "Exportación de Datos:",
        "- Exportación de los registros a formato Excel (.xlsx) y CSV (.csv).",
        "Búsqueda y Filtros:",
        "- Búsqueda inteligente en tiempo real.",
        "- Filtro por estado desde una lista desplegable.",
        "Interfaz Gráfica:",
        "- Estilo visual minimalista con colores corporativos.",
        "- Tipografías modernas y botones estilizados.",
        "- Soporte para imagen de fondo institucional.",
        "- Componentes personalizados con una paleta de colores profesional."
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
    category: ["python"],
    shortDescription:
      "Herramienta desarrollada en Python diseñada para reparar unidades USB afectadas.",
    websiteLink: undefined,
    githubLink: undefined,
    techStack: [
      "Python",
      "Git"
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
