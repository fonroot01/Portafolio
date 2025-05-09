import { Server } from "lucide-react";

export type ValidSkills =
  | "Next.js"
  | "Python"
  | "Git"
  | "Vercel"
  | "DMS"
  | "3CX"
  | "Microsoft 365"
  | "SQL Server"
  | "linux"
  | "Git Bash"
  | "Active Directory"
  | "SharePoint"
  | "Virtualización";

  ;

export type ValidCategory =
  | "python";

export type ValidExpType = "Personal Project" | "Professional";

export type ValidPages =
  | "home"
  | "skills"
  | "experience"
  | "career"
  | "contact"
  | "contributions"
  | "resume";

export type ContactPageConfig = {
  title: string;
  description: string;
  metadata: {
    title: string;
    description: string;
  };
  form: {
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    social: string;
    socialPlaceholder: string;
    submit: string;
  };
  template: {
    like: string;
    openSource: string;
    sourceCode: string;
  };
};
