import React from "react";

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
            />            <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl text-center text-primary font-bold transition-colors duration-300">
              Sobre mí
            </h2>
          </div>          <div className="space-y-4">            
            <p className="mb-8 text-foreground/90 text-justify pl-4 pr-2 font-medium transition-colors duration-300">
              Soy Ingeniero de Sistemas, pero sobre todo, alguien que disfruta entender cómo funcionan las cosas para mejorarlas. Mi camino en la tecnología empezó resolviendo problemas en soporte técnico y fue creciendo hacia la administración de sistemas y la ciberseguridad. He trabajado con entornos Windows y Linux, gestionando infraestructura TI, directorios, redes y plataformas empresariales como MS365 y sistemas de telefonía IP. Con Python desarrollo herramientas que automatizan tareas, analizan entornos y hacen la vida más fácil a usuarios y técnicos. Me gusta lo práctico, lo que funciona, pero también lo que se puede hacer mejor.
            </p>
            <div className="mt-16">
            <h3 className="font-bold text-xl mb-2 text-center text-primary/90 transition-colors duration-300">
              Lenguajes de Programación
            </h3>
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              <img
                src="https://img.shields.io/badge/Python-%2314354C.svg?style=flat&logo=python&logoColor=white"
                alt="Python"
              />
              <img
                src="https://img.shields.io/badge/Bash-4EAA25.svg?style=flat&logo=gnu-bash&logoColor=white"
                alt="Bash"
              />
              <img
                src="https://img.shields.io/badge/SQL-%2300f.svg?style=flat&logo=sqlite&logoColor=white"
                alt="SQL"
              />
              <img
                src="https://img.shields.io/badge/Markdown-%23000000.svg?logo=markdown&logoColor=white"
                alt="Markdown"
              />
            </div>
            <h3 className="font-bold text-xl mb-2 mt-6 text-center text-primary/90 transition-colors duration-300">
              Herramientas y Plataformas
            </h3>
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              <img
                src="https://img.shields.io/badge/Linux-FCC624?style=flat&logo=linux&logoColor=black"
                alt="Linux"
              />
              <img
                src="https://img.shields.io/badge/Kali%20Linux-557C94?logo=kalilinux&logoColor=fff"
                alt="Kali Linux"
              />
              <img
                src="https://img.shields.io/badge/Git-%23F05033.svg?style=flat&logo=git&logoColor=white"
                alt="Git"
              />
              <img
                src="https://img.shields.io/badge/GitHub-%23121011.svg?logo=github&logoColor=white"
                alt="GitHub"
              />
              <img
                src="https://img.shields.io/badge/VirtualBox-%23007ACC.svg?style=flat&logo=virtualbox&logoColor=white"
                alt="VirtualBox"
              />
              <img
                src="https://custom-icon-badges.demolab.com/badge/Windows-0078D6?logo=windows11&logoColor=white"
                alt="Windows"
              />
              <img
                src="https://img.shields.io/badge/Windows_Server-0078D6.svg?style=flat&logo=windows&logoColor=white"
                alt="Windows Server"
              />
            </div>
            <h3 className="font-bold text-xl mb-2 mt-6 text-center text-primary/90 transition-colors duration-300">
              IDEs y Terminales
            </h3>
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              <img
                src="https://custom-icon-badges.demolab.com/badge/Visual%20Studio%20Code-0078d7.svg?logo=vsc&logoColor=white"
                alt="Visual Studio Code"
              />
              <img
                src="https://img.shields.io/badge/Git_Bash-%23181717.svg?style=flat&logo=git&logoColor=white"
                alt="Git Bash"
              />
              <img
                src="https://img.shields.io/badge/Vercel-%23000000.svg?logo=vercel&logoColor=white"
                alt="Vercel"
              />
              <img
                src="https://img.shields.io/badge/Terminal-%23000000.svg?style=flat&logo=gnome-terminal&logoColor=white"
                alt="Terminal"
              />
            </div>
            <h3 className="font-bold text-xl mb-2 mt-6 text-center text-primary/90 transition-colors duration-300">
              Frameworks
            </h3>
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              <img
                src="https://img.shields.io/badge/Next.js-black?logo=next.js&logoColor=white"
                alt="Next.js"
              />              <img
                src="https://img.shields.io/badge/Node.js-6DA55F?logo=node.js&logoColor=white"
                alt="NodeJS"
              />
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutMe;
