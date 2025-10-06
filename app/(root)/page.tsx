'use client';

import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from 'react-type-animation';
import { Icons } from "@/components/common/icons";
import { Button, buttonVariants } from "@/components/ui/button";
import { ScrollButton } from "@/components/common/scroll-button";
import WavingHand from "@/components/common/WavingHand";
import { Heart } from "lucide-react";
import alfonsoImg from "@/public/alfonsoimage.jpg";
import ProfileSpecialties from '@/components/common/ProfileSpecialties';
import dynamic from "next/dynamic";

// Dynamic imports para code splitting (client components)
const ProfileSection = dynamic(() => import("@/components/sections/ProfileSection"), { ssr: false });
const ProjectsSection = dynamic(() => import("@/components/sections/ProjectsSection"), { ssr: false });
const CareerSection = dynamic(() => import("@/components/sections/CareerSection"), { ssr: false });
const ContactSection = dynamic(() => import("@/components/sections/ContactSection"), { ssr: false });

export default function IndexPage() {
  return (
    <>
      {/* Sección de bienvenida */}      <section id="inicio" className="min-h-screen flex flex-col items-center justify-center px-4 pt-16 bg-background transition-colors duration-300">
        <div className="flex flex-col items-center w-full max-w-2xl mx-auto">
          <div className="mb-6">
            <ProfileSpecialties src={alfonsoImg} alt="Alfonso Mosquera" size={180} />
          </div>
          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-extrabold text-foreground text-center mb-2 transition-colors duration-300">
            Alfonso Mosquera
          </h1>          
          <div className="text-center space-y-4 mb-8">
            <div className="text-foreground font-heading text-2xl sm:text-3xl mb-2">
              Ingeniero de Sistemas
            </div>
            <div className="text-sky-400 dark:text-sky-300 text-xl sm:text-2xl transition-colors duration-300 font-medium flex items-center justify-center">
              
                
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mb-8">            <Link
              href="https://github.com/fonroot01"
              target="_blank"
              className={buttonVariants({ size: "default" }) + " flex items-center justify-center w-full sm:w-44 px-4 py-2"}
              aria-label="GitHub"
            >
              <Icons.gitHub className="w-4 h-4 mr-2" /> GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/alfonso-ángel-mosquera-a-4a919b341"
              target="_blank"
              className={buttonVariants({ size: "default" }) + " flex items-center justify-center w-full sm:w-44 px-4 py-2"}
              aria-label="LinkedIn"
            >
              <Icons.linkedin className="w-4 h-4 mr-2" /> LinkedIn
            </Link>
            <a
  href="/CV_Ing_Alfonso.pdf"
  download
  className={
    buttonVariants({ size: "default" }) +
    " flex items-center justify-center w-full sm:w-44 px-4 py-2 bg-gray-200 text-black dark:bg-gray-800 dark:text-white pulse-glow-btn"
  }
  aria-label="Descargar CV"
>
  <Icons.user className="w-4 h-4 mr-2" />
  Descargar CV
</a>
          </div>          <div className="flex justify-center mt-8">
            <ScrollButton targetId="perfil" />
          </div>
        </div>
      </section>
      {/* Sección Perfil: Sobre mí y Certificados */}
      <section id="perfil">
        <ProfileSection />
      </section>
      {/* Sección Proyectos: Proyectos destacados y Laboratorios de ciberseguridad */}
      <section id="proyectos">
        <ProjectsSection />
      </section>
      {/* Sección Trayectoria: Experiencia laboral y Contribuciones en GitHub */}
      <section id="trayectoria">
        <CareerSection />
      </section>
      {/* Sección Contacto: Formulario funcional */}
      <section id="contacto">
        <ContactSection />
      </section>
    </>
  );
}
