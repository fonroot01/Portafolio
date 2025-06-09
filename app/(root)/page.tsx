'use client';

import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from 'react-type-animation';
import { Icons } from "@/components/common/icons";
import { Button, buttonVariants } from "@/components/ui/button";
import { ScrollButton } from "@/components/common/scroll-button";
import alfonsoImg from "@/public/alfonsoimage.jpg";
import ProfileSection from "@/components/sections/ProfileSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import CareerSection from "@/components/sections/CareerSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function IndexPage() {
  return (
    <>
      {/* Sección de bienvenida */}      <section id="inicio" className="min-h-screen flex flex-col items-center justify-center px-4 pt-16 bg-background transition-colors duration-300">
        <div className="flex flex-col items-center w-full max-w-2xl mx-auto">
          <Image
            src={alfonsoImg}
            height={180}
            width={180}
            className="rounded-full border-8 border-primary mb-6 object-cover shadow-lg"
            alt="Alfonso Mosquera"
            priority
          />
          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-extrabold text-foreground text-center mb-2 transition-colors duration-300">
            Alfonso Mosquera
          </h1>          <div className="font-heading text-lg sm:text-2xl md:text-3xl text-foreground text-center min-h-[2.5rem] mb-4 transition-colors duration-300">
            <TypeAnimation
              sequence={[
                'Ingeniero de Sistemas 💻', 2000,
                'Fan de la Ciberseguridad 🔐', 2000,
                'Python Dev 🐍', 2000,
                'Automatizo todo ⚡', 2000,
                'Soporte TI Pro ⚙️', 2000,
                'Linux Lover 🐧', 2000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: 'inherit', display: 'inline-block' }}
              repeat={Infinity}
            />
          </div><p className="text-sky-400 dark:text-sky-300 text-base sm:text-lg text-center mb-8 max-w-xl transition-colors duration-300 font-medium">
            ¡Hola!👋🏾 Soy Ingeniero de Sistemas, curioso por naturaleza, fanático de resolver problemas informaticos y apasionado por la ciberseguridad. 🚀
          </p>
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
              href="/CV_IngAlfonsoMosquera.pdf"
              download
              className={buttonVariants({ size: "default" }) + " flex items-center justify-center w-full sm:w-44 px-4 py-2 bg-gray-200 text-black dark:bg-gray-800 dark:text-white"}
              aria-label="Descargar CV"
            >
              <span className="w-4 h-4 mr-2" role="img" aria-label="CV">🗂️</span> Descargar CV
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
