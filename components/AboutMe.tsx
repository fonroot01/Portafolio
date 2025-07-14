import React from "react";
import ProfileTechStack from "@/components/ProfileTechStack";

const AboutMe = () => (
  <section id="about" className="container bg-background py-2 transition-colors duration-300">
    <div className="mx-auto flex max-w-[58rem] flex-col items-center px-2 sm:px-4">
      <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between w-full">
        <div className="flex-1 text-left w-full">
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
          <div className="space-y-4 w-full">
            <div className="mb-8 space-y-4 text-foreground/90 pl-0 pr-0 sm:pl-4 sm:pr-2 transition-colors duration-300">
              <p className="text-base sm:text-base md:text-lg text-justify mb-6">
                Soy Ingeniero de Sistemas con experiencia en soporte técnico y gestión de plataformas tecnológicas, enfocado en mantener la continuidad operativa y brindar soluciones efectivas en entornos empresariales. He trabajado con herramientas como MS365, Active Directory, SharePoint, sistemas ERP e IP PBX, asegurando una atención oportuna y resolutiva para los usuarios.
              </p>
              
              <p className="text-base sm:text-base md:text-lg text-justify">
                Complemento mi perfil con formación en ciberseguridad, tanto autodidacta como certificada, lo que me ha permitido desarrollar habilidades prácticas en análisis de vulnerabilidades, auditoría de redes, evaluación de contraseñas, monitoreo de tráfico de red y automatización de tareas con Python. Me apasiona explorar nuevas herramientas, fortalecer mi enfoque técnico y transformar el conocimiento en soluciones útiles.
              </p>
            </div>
            <ProfileTechStack />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutMe;