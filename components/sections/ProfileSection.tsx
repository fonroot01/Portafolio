import React, { useState, memo } from "react";
import AboutMe from "../AboutMe";

// Componente memoizado para cada tarjeta de certificado
const CertificateCard = memo(function CertificateCard({ cert }: { cert: any }) {
  const [imgError, setImgError] = useState(false);
  const [logoError, setLogoError] = useState(false);

  // Responsive sizes para optimizar transferencia
  const imgSizes = "(max-width: 768px) 100vw, 400px";

  return (
    <div 
      key={cert.id}
      className="rounded-xl border border-border bg-muted/30 p-4 shadow-md flex flex-col relative transition-all duration-300 hover:bg-muted/50 hover:scale-105"
      aria-label={`Certificado: ${cert.title}`}
      role="region"
    >
      {/* Preview del certificado */}
      <div className="w-full max-w-[400px] h-48 mb-4 rounded-lg overflow-hidden relative bg-gray-100 mx-auto">
        {!imgError ? (
          <picture>
            <source srcSet={cert.previewImage.replace('.png', '.avif')} type="image/avif" />
            <source srcSet={cert.previewImage.replace('.png', '.webp')} type="image/webp" />
            <img 
              src={cert.previewImage} 
              alt={`Certificado: ${cert.title} emitido por ${cert.issuer}`} 
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              width={400}
              height={192}
              sizes={imgSizes}
              srcSet={
                cert.previewImage.replace('.png', '-400.png') + ' 400w, ' +
                cert.previewImage.replace('.png', '-600.png') + ' 600w'
              }
              onError={() => setImgError(true)}
            />
          </picture>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600 flex flex-col items-center justify-center text-white p-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3 mx-auto backdrop-blur-sm">
              {!logoError && cert.logo ? (
                <img 
                  src={cert.logo} 
                  alt={cert.alt} 
                  className="w-6 h-6 object-contain" 
                  onError={() => setLogoError(true)}
                />
              ) : (
                <span className="text-white font-bold text-lg">{cert.alt?.charAt(0) || '?'}</span>
              )}
            </div>
            <h3 className="text-sm font-semibold mb-2 text-center line-clamp-2 leading-tight">
              {cert.title}
            </h3>
            <p className="text-xs opacity-90 text-center">
              {cert.issuer}
            </p>
          </div>
        )}
        {/* Overlay sutil para mejor legibilidad */}
        <div className="absolute inset-0 bg-black/5 hover:bg-black/0 transition-colors duration-300" aria-hidden="true"></div>
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
          aria-label={`Ver certificado: ${cert.title}`}
        >
          Ver certificado
        </a>
      </div>
    </div>
  );
});

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
      title: "Diplomado en Ciberseguridad y Desarrollo Organizacional",
      pdfPath: "/Certificado_del_diplomado_en_ciberseguridad_y_desarrollo_organizacional_.pdf",
      previewImage: "/imagenes diplomados/Diplomado en ciberseguridad y desarrollo organizacional.png",
      issuer: "Universidad Americana",
      year: "2024",
      category: "Diplomado Opción de Grado"
    },
     {
      id: 3,
      logo: "/logoamericana.png", 
      alt: "Americana",      
      title: "Diplomado en Seguridad Informática",
      pdfPath: "/Diplomado_en_seguridad_informatica.pdf",
      previewImage: "/imagenes diplomados/Diplomado_en_seguridad_informatica.png",
      issuer: "Universidad Americana",
      year: "2024",
      category: "Diplomado Electiva Profesional"
    },
    {
      id: 4,
      logo: "", 
      alt: "Polisura",      
      title: "Diplomado en Docencia Universitaria",
      pdfPath: "/Certificado_en_Docencia_Universitaria.pdf",
      previewImage: "/imagenes diplomados/Diplomado Docencia Universitaria.png",
      issuer: "Politécnico de Suramérica",
      year: "2025",
      category: "Diplomado Docencia Universitaria"
    },
     {
      id: 5,
      logo: "", 
      alt: "Cisco Networking Academy",      
      title: "Introducción a la Ciberseguridad",
      pdfPath: "/Introducción a la Ciberseguridad.pdf",
      previewImage: "/imagenes diplomados/Introducción a la Ciberseguridad - Cisco.png",
      issuer: "Cirsco Networking Academy",
      year: "2025",
      category: "Curso de Ciberseguridad de Cisco"
    },
    {
      id: 6,
      logo: "/googlelogo.png",
      alt: "Google",
      title: "Fundamentos de la Ciberseguridad",
      pdfPath: "/Fundamentos de la ciberseguridad.pdf",
      previewImage: "/imagenes diplomados/Fundamentos de la ciberseguridad.png",
      issuer: "Google Career Certificates",
      year: "2024",
      category: "Curso de Ciberseguridad de Google"
    },
    {
      id: 7,
      logo: "/googlelogo.png",
      alt: "Google", 
      title: "Juega a los Seguro, Gestiona los riesgos de seguridad",
      pdfPath: "/Juega a los Seguro, Gestiona los riesgos de seguridad.pdf",
      previewImage: "/imagenes diplomados/Juega a los seguro.png",
      issuer: "Google Career Certificates",
      year: "2024",
      category: "Curso de Ciberseguridad de Google"
    },
    {
      id: 8,
      logo: "/logouci.png",
      alt: "UCI",
      title: "Cómo Resolver Problemas y Tomar Decisiones con Eficacia",
      pdfPath: "/Cómo resolver problemas y tomar decisiones con eficacia.pdf",
      previewImage: "/imagenes diplomados/como resolver problemas con eficacia.png",
      issuer: "University of California, Irvine",
      year: "2024",
      category: "Curso de UCI"
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
            <span className="inline-block align-middle mr-3 text-xl animate-bounce" aria-hidden="true">{"📜"}</span>
            Diplomas y Certificados
          </h2>
          {/* Grid de certificados */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {certificatesToShow.map((cert) => (
              <CertificateCard cert={cert} key={cert.id} />
            ))}
          </div>
          {/* Botón Ver más/Ver menos */}
          {hasMoreCertificates && (
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setShowAll(!showAll)}
                className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-md"
                aria-expanded={showAll}
                aria-controls="certificados-lista"
              >
                {showAll ? (
                  <>
                    <span>Ver menos</span>
                    <svg className="w-4 h-4 ml-2 inline-block transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </>
                ) : (
                  <>
                    <span>Ver más certificados</span>
                    <svg className="w-4 h-4 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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