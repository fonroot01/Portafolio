import React from "react";
import ProfileTechStack from "@/components/ProfileTechStack";
import WavingHand from "@/components/common/WavingHand";

const AboutMe = () => (
  <section id="about" className="w-full max-w-4xl mx-auto px-4 bg-background py-2 transition-colors duration-300">
    <div className="mx-auto flex max-w-[58rem] flex-col md:flex-row items-stretch justify-between w-full">
      <div className="flex-1 text-left w-full md:w-1/2 flex flex-col justify-center items-start">
        <div className="flex flex-col items-start mb-2 h-full justify-center">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl text-left text-primary font-bold transition-colors duration-300 flex items-center gap-2">
            <span className="inline-block align-middle text-2xl md:text-3xl animate-bounce" role="img" aria-label="Sobre mí">👨🏾‍💻</span>
            Sobre mí
          </h2>
        </div>
        <div className="space-y-4 w-full h-full flex flex-col justify-center">
          <div className="mb-8 space-y-4 text-foreground/90 pl-0 pr-0 sm:pl-4 sm:pr-2 transition-colors duration-300">
            <p className="text-sm sm:text-sm md:text-base text-left mb-6">
              Combino experiencia técnica en entornos corporativos con enfoque práctico en ciberseguridad, automatización y uso responsable de IA.
              Como Ingeniero de Sistemas, he gestionado plataformas clave, asegurando soporte continuo y aplicando mis conocimientos en soluciones
              que funcionan y hacen la tecnología más accesible.
            </p>
          </div>
        </div>
      </div>
      <div className="relative w-full flex items-end justify-end md:w-1/2">
        <img
          src="/fondo_sobremi.png"
          alt="Fondo sobre mí"
          className="w-full h-75 object-contain rounded-xl shadow-lg"
          style={{
            maxHeight: '350px',
            maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
          }}
        />
      </div>
    </div>
    <div className="mx-auto max-w-[58rem]">
      <ProfileTechStack />
    </div>
  </section>
);

export default AboutMe;