import React from "react";
import CyberLabs from "../CyberLabs";

const ProjectsSection = () => {
  return (    <section className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto py-20">
        <div className="mb-20">
          <h2 className="text-4xl font-bold mb-8 text-center text-primary/90 dark:text-primary hover:text-primary dark:hover:text-primary/90 transition-colors">Proyectos Destacados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* GestorIP */}
            <div className="group bg-background hover:bg-background/80 rounded-xl shadow-lg p-6 text-left flex flex-col justify-between transition-all duration-300 hover:shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-xl group-hover:text-primary transition-colors">GestorIP</h3>
                  <a href="https://github.com/fonroot01/GestorIP" target="_blank" rel="noopener noreferrer" 
                     className="text-muted-foreground hover:text-primary transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                    </svg>
                  </a>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  GestorIP es una herramienta gráfica desarrollada en Python, que permite cambiar la dirección IP de forma rápida y sencilla sin necesidad de usar la consola. Ideal para administradores de red, técnicos de soporte o entusiastas que necesitan modificar su configuración de red con frecuencia.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-primary/10 text-primary px-2.5 py-0.5 rounded-full">Python</span>
                  <span className="text-xs bg-primary/10 text-primary px-2.5 py-0.5 rounded-full">Tkinter</span>
                  <span className="text-xs bg-primary/10 text-primary px-2.5 py-0.5 rounded-full">Networking</span>
                </div>
              </div>
            </div>

            {/* Droid Specter */}
            <div className="group bg-background hover:bg-background/80 rounded-xl shadow-lg p-6 text-left flex flex-col justify-between transition-all duration-300 hover:shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-xl group-hover:text-primary transition-colors">Droid Specter</h3>
                  <a href="https://github.com/fonroot01/Droid-Specter" target="_blank" rel="noopener noreferrer" 
                     className="text-muted-foreground hover:text-primary transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                    </svg>
                  </a>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Es una herramienta de análisis y auditoría de dispositivos Android, diseñada para facilitar tareas de reconocimiento, extracción de información y pruebas de seguridad en entornos móviles.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-primary/10 text-primary px-2.5 py-0.5 rounded-full">Python</span>
                  <span className="text-xs bg-primary/10 text-primary px-2.5 py-0.5 rounded-full">Android</span>
                  <span className="text-xs bg-primary/10 text-primary px-2.5 py-0.5 rounded-full">Seguridad Móvil</span>
                </div>
              </div>
            </div>

            {/* InvenSoft */}
            <div className="group bg-background hover:bg-background/80 rounded-xl shadow-lg p-6 text-left flex flex-col justify-between transition-all duration-300 hover:shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-xl group-hover:text-primary transition-colors">InvenSoft</h3>
                  <a href="https://github.com/fonroot01/Inventario-de-equipos-TI" target="_blank" rel="noopener noreferrer" 
                     className="text-muted-foreground hover:text-primary transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                    </svg>
                  </a>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Este proyecto nació como una idea durante mi experiencia en soporte técnico en Zeuss SAS. Hoy, lo he desarrollado de forma independiente como una solución moderna y adaptable para la gestión de inventario en cualquier empresa.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-primary/10 text-primary px-2.5 py-0.5 rounded-full">Python</span>
                  <span className="text-xs bg-primary/10 text-primary px-2.5 py-0.5 rounded-full">Tkinter</span>
                  <span className="text-xs bg-primary/10 text-primary px-2.5 py-0.5 rounded-full">SQLite</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-4xl font-bold mb-8 text-center text-primary/90 dark:text-primary hover:text-primary dark:hover:text-primary/90 transition-colors">Laboratorios de Ciberseguridad</h2>
          <CyberLabs />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
