import React from "react";
import { ContactForm } from "../forms/contact-form";
import { ScrollButton } from "../common/scroll-button";
import { Icons } from "../common/icons";

export const ContactSection: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center" id="contacto">
      <div className="w-full max-w-xl p-8 rounded-xl shadow-lg bg-white/90 dark:bg-gray-800/90">        <h2 className="font-heading text-4xl tracking-tight text-center text-foreground mb-6">
          <span className="inline-block align-middle mr-3 text-xl animate-bounce">{"📧"}</span>
          Contacta conmigo
        </h2>
        <ContactForm />

        {/* Contenedor para los botones sociales y el botón de scroll */}
        <div className="mt-8 flex flex-col items-center gap-6">
          {/* Botones sociales */}
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/fonroot01"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-110 hover:bg-primary/20 hover:border-primary/50"
              aria-label="GitHub Profile"
            >
              <Icons.gitHub className="w-5 h-5 text-primary group-hover:text-primary" />
            </a>
            <a
              href="https://www.linkedin.com/in/alfonso-%C3%A1ngel-mosquera-a-4a919b341/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-110 hover:bg-primary/20 hover:border-primary/50"
              aria-label="LinkedIn Profile"
            >
              <Icons.linkedin className="w-5 h-5 text-primary group-hover:text-primary" />
            </a>
            <a
              href="mailto:alfonsomosque22@gmail.com"
              className="group flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-110 hover:bg-primary/20 hover:border-primary/50"
              aria-label="Send Email"
            >
              <Icons.gmail className="w-5 h-5 text-primary group-hover:text-primary" />
            </a>
          </div>

          {/* Botón de scroll hacia arriba */}
          <div className="fixed bottom-8 right-8">
            <ScrollButton targetId="inicio" direction="up" />
          </div>
        </div>
      </div>
    </section>
  );
};