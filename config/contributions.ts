export interface contributionsInterface {
  repo?: string;
  contibutionDescription?: string;
  repoOwner?: string;
  link: string;
  title?: string;
  description?: string;
  techStack?: string[];
  image?: string;
}

export const contributionsUnsorted: contributionsInterface[] = [
  {
    repo: "autogen",
    contibutionDescription:
      "Improved the gallery component to showcase the community work.",
    repoOwner: "Microsoft",
    link: "https://github.com/microsoft/autogen/pull/1445",
  },
  {
    repo: "creativecommons",
    contibutionDescription:
      "Closed Issue: Fixed navbar issue on the main website of creative common.",
    repoOwner: "Creative Commons",
    link: "https://github.com/creativecommons/creativecommons.github.io-source/pull/738",
  },
  {
    repo: "creativecommons",
    contibutionDescription:
      "Added section for 'Other Opportunities' on main page.",
    repoOwner: "Creative Commons",
    link: "https://github.com/creativecommons/creativecommons.github.io-source/pull/719",
  },
];

export const featuredContributions = [
  {
    id: "droid-specter",
    title: "Droid Specter",
    description: "Desarrollo de app de gestión de dispositivos Android para soporte técnico y automatización.",
    link: "https://github.com/fonroot01/Droid-Specter",
    techStack: ["Python", "Git"],
  },
  {
    id: "invensoft",
    title: "Invensoft",
    description: "Contribución en módulos de inventario y reportes para software empresarial.",
    link: "https://github.com/fonroot01/Inventario-de-equipos-TI",
    techStack: ["SQL Server", "Git"],
  },
  {
    id: "usb-doctor",
    title: "USB Doctor",
    description: "Herramienta para análisis y recuperación de dispositivos USB comprometidos.",
    link: "https://github.com/fonroot01/USB-Doctor",
    techStack: ["linux", "Python"],
  },
  {
    id: "winpyx",
    title: "WinPyX",
    description: "Automatización de tareas administrativas en Windows usando Python.",
    link: "https://github.com/fonroot01/WinPyX",
    techStack: ["Python", "Windows"],
  },
];
