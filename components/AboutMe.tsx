import React from "react";
import ProfileTechStack from "@/components/ProfileTechStack";

const AboutMe = () => (
  <section id="about" className="container bg-background py-2 transition-colors duration-300">
    <div className="mx-auto flex max-w-[58rem] flex-col items-center">
      <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between w-full">
        <div className="flex-1 text-left">
          <div className="flex flex-col items-center mb-2">
            <img
              src="https://raw.githubusercontent.com/7oSkaaa/7oSkaaa/refs/heads/main/Images/about_me.gif"
              alt="Sobre mí gif"
              className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover mb-2"
            />
            <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl text-center text-primary font-bold transition-colors duration-300">
              Sobre mí
            </h2>
          </div>
          <div className="space-y-4">
            <p className="mb-8 text-foreground/90 text-justify pl-4 pr-2 font-medium transition-colors duration-300">
              Soy Ingeniero de Sistemas, pero sobre todo, alguien que disfruta entender cómo funcionan las cosas para mejorarlas. Mi camino en la tecnología empezó resolviendo problemas en soporte técnico y fue creciendo hacia la administración de sistemas y la ciberseguridad. He trabajado con entornos Windows y Linux, gestionando infraestructura TI, directorios, redes y plataformas empresariales como MS365 y sistemas de telefonía IP. Con Python desarrollo herramientas que automatizan tareas, analizan entornos y hacen la vida más fácil a usuarios y técnicos. Me gusta lo práctico, lo que funciona, pero también lo que se puede hacer mejor.
            </p>
            <ProfileTechStack />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutMe;