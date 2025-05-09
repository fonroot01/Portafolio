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
    id: "decision-making",
    title: "Cómo resolver problemas y tomar decisiones con eficacia",
    description: "Certificado de Coursera: habilidades para la toma de decisiones y resolución de problemas.",
    link: "https://coursera.org/share/b1076915e0721e5b81fa4d4550716f46",
    techStack: ["Coursera"]
  },
  {
    id: "cybersecurity-fundamentals",
    title: "Fundamentals of Cybersecurity",
    description: "Certificado de Coursera: fundamentos de ciberseguridad.",
    link: "https://coursera.org/share/6ffe062b0a486c7e0c660e947991f8d5",
    techStack: ["Coursera"]
  },
  {
    id: "play-it-safe",
    title: "Play It Safe: Manage Security Risks",
    description: "Certificado de Coursera: gestión de riesgos de seguridad.",
    link: "https://coursera.org/share/19f5bc9304b74483e66b5e7d59437594",
    techStack: ["Coursera"]
  }
];
