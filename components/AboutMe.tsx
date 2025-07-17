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
              <p className="text-sm sm:text-sm md:text-base text-justify mb-6">
                Soy Ingeniero de Sistemas con experiencia en soporte técnico y gestión de plataformas tecnológicas. He brindado apoyo en entornos empresariales con soluciones 
                como MS365, Active Directory, SharePoint, IP PBX y sistemas ERP. Mi trabajo se ha enfocado en mantener la continuidad operativa y ofrecer soporte oportuno a los usuarios.
                </p>
          
              <p className="text-sm sm:text-sm md:text-base text-justify mb-6">
                También he profundizado en el campo de la ciberseguridad, aprendiendo tanto de forma autodidacta como a través de formación certificada. 
                Esto me ha permitido aplicar mis conocimientos en proyectos propios con enfoque en automatización, buenas prácticas de seguridad y uso de IA para optimizar procesos. 
              </p>   

              <p className="text-sm sm:text-sm md:text-base text-justify mb-6">
              Me gusta resolver problemas, aprender nuevas tecnologías y hacer que la tecnología trabaje a favor de las personas.
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