import React, { useState } from "react";
import AboutMe from "../AboutMe";

const ProfileSection = () => {
  const [showAll, setShowAll] = useState(false);

  // Array de certificados para mejor manejo
  const certificates = [
    {
      id: 1,
      logo: "/logoamericana.png",
      alt: "Americana",
      title: "Ingeniería de Sistemas",
      pdfPath: "/Diploma ingenieria de sistemas.pdf",
      previewImage: "/imagenes diplomados/Diploma ingenieria de sistemas.png",
      issuer: "Diploma de grado en Ingeniería de Sistemas",
      year: "2024",
      category: "Grado en Ingeniería de Sistemas"
    },
    {
      id: 2,
      logo: "/logoamericana.png",
      alt: "Americana",
      title: "Diplomado en ciberseguridad y desarrollo organizacional",
      pdfPath: "/Certificado_del_diplomado_en_ciberseguridad_y_desarrollo_organizacional_.pdf",
      previewImage: "/imagenes diplomados/Diplomado en ciberseguridad y desarrollo organizacional.png",
      issuer: "Universidad Americana",
      year: "2024",
      category: "Diplomado"
    },
    {
      id: 3,
      logo: "/logoamericana.png", 
      alt: "Americana",
      title: "Diplomado en seguridad informática",
      pdfPath: "/Diplomado en seguridad informatica.pdf",
      previewImage: "/imagenes diplomados/Diplomado en ciberseguridad informatica.png",
      issuer: "Universidad Americana",
      year: "2024",
      category: "Seguridad Informática"
    },
    {
      id: 4,
      logo: "/googlelogo.png",
      alt: "Google",
      title: "Fundamentos de la ciberseguridad",
      pdfPath: "/Fundamentos de la ciberseguridad.pdf",
      previewImage: "/imagenes diplomados/Fundamentos de la ciberseguridad.png",
      issuer: "Google Career Certificates",
      year: "2024",
      category: "Ciberseguridad"
    },
    {
      id: 5,
      logo: "/googlelogo.png",
      alt: "Google", 
      title: "Juega a los Seguro, Gestiona los riesgos de seguridad",
      pdfPath: "/Juega a los Seguro, Gestiona los riesgos de seguridad.pdf",
      previewImage: "/imagenes diplomados/Juega a los seguro.png",
      issuer: "Google Career Certificates",
      year: "2024",
      category: "Gestión de Riesgos"
    },
    {
      id: 6,
      logo: "/logouci.png",
      alt: "UCI",
      title: "Cómo resolver problemas y tomar decisiones con eficacia",
      pdfPath: "/Cómo resolver problemas y tomar decisiones con eficacia.pdf",
      previewImage: "/imagenes diplomados/como resolver problemas con eficacia.png",
      issuer: "University of California, Irvine",
      year: "2024",
      category: "Resolución de Problemas"
    }
  ]; // Aquí estaba el problema - faltaba cerrar el array

  // Mostrar solo los primeros 4 o todos
  const certificatesToShow = showAll ? certificates : certificates.slice(0, 4);
  const hasMoreCertificates = certificates.length > 4;

  return (
    <section className="min-h-screen flex flex-col">
      <div className="container mx-auto pt-8 px-4">
        <AboutMe />
        <div className="mt-12 pb-12">
          <h2 className="text-3xl font-bold mb-10 text-center text-foreground">
            <span className="inline-block align-middle mr-3 text-xl animate-bounce">{"📜"}</span>
            Diplomas y Certificados
          </h2>
          
          {/* Grid de certificados */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {certificatesToShow.map((cert) => (
              <div 
                key={cert.id}
                className="rounded-xl border border-border bg-muted/30 p-4 shadow-md flex flex-col relative transition-all duration-300 hover:bg-muted/50 hover:scale-105"
              >
                {/* Preview del certificado */}
                <div className="w-full h-48 mb-4 rounded-lg overflow-hidden relative bg-gray-100">
                  <img 
                    src={cert.previewImage} 
                    alt={`Preview de ${cert.title}`}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    onError={(e) => {
                      // Fallback si la imagen no carga
                      const target = e.currentTarget as HTMLImageElement;
                      const nextElement = target.nextElementSibling as HTMLElement;
                      target.style.display = 'none';
                      if (nextElement) {
                        nextElement.style.display = 'flex';
                      }
                    }}
                  />
                  
                  {/* Fallback con gradiente si la imagen no carga */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600 hidden flex-col items-center justify-center text-white p-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3 mx-auto backdrop-blur-sm">
                      <img 
                        src={cert.logo} 
                        alt={cert.alt} 
                        className="w-6 h-6 object-contain" 
                        onError={(e) => {
                          const target = e.currentTarget as HTMLImageElement;
                          const nextElement = target.nextElementSibling as HTMLElement;
                          target.style.display = 'none';
                          if (nextElement) {
                            nextElement.style.display = 'block';
                          }
                        }} 
                      />
                      <span 
                        className="text-white font-bold text-lg hidden"
                      >
                        {cert.alt.charAt(0)}
                      </span>
                    </div>
                    
                    <h3 className="text-sm font-semibold mb-2 text-center line-clamp-2 leading-tight">
                      {cert.title}
                    </h3>
                    
                    <p className="text-xs opacity-90 text-center">
                      {cert.issuer}
                    </p>
                  </div>
                  
                  {/* Overlay sutil para mejor legibilidad */}
                  <div className="absolute inset-0 bg-black/5 hover:bg-black/0 transition-colors duration-300"></div>
                </div>

                {/* Información del certificado */}
                <div className="flex flex-col items-center flex-grow">
                  <span className="font-semibold text-base text-foreground text-center leading-tight mb-3">
                    {cert.title}
                  </span>
                  
                  {/* Tag de categoría */}
                  <div className="mb-3">
                    <span className="text-sm bg-primary/10 text-primary px-3 py-1.5 rounded-full font-semibold font-heading">
                      {cert.category}
                    </span>
                  </div>
                  
                  <a 
                    href={cert.pdfPath} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary underline underline-offset-2 text-sm hover:text-primary/80 transition-colors mt-auto"
                  >
                    Ver certificado
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Botón Ver más/Ver menos */}
          {hasMoreCertificates && (
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setShowAll(!showAll)}
                className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-md"
              >
                {showAll ? (
                  <>
                    <span>Ver menos</span>
                    <svg className="w-4 h-4 ml-2 inline-block transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </>
                ) : (
                  <>
                    <span>Ver más certificados</span>
                    <svg className="w-4 h-4 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;