import React, { useState, memo } from "react";
import AboutMe from "../AboutMe";

// Componente memoizado para cada tarjeta de certificado
// Interfaz para el modal
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  cert: any;
}

// Componente Modal
const CertificateModal = ({ isOpen, onClose, cert }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Vista ampliada: ${cert.title}`}
    >
      <div 
        className="relative bg-background rounded-lg shadow-xl w-full max-w-2xl mx-auto animate-fadeIn"
        onClick={e => e.stopPropagation()}
      >
        <div className="relative p-4">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg p-2 transition-colors"
            aria-label="Cerrar modal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          
          <div className="aspect-[1.414/1] relative overflow-hidden rounded-lg">
            <img
              src={cert.previewImage}
              alt={`${cert.title} - ${cert.issuer}`}
              className="w-full h-full object-contain bg-background"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const CertificateCard = memo(function CertificateCard({ cert }: { cert: any }) {
  const [imgError, setImgError] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Responsive sizes para optimizar transferencia
  const imgSizes = "(max-width: 768px) 100vw, 400px";

  return (
    <div 
      key={cert.id}
      className="bg-card rounded-xl overflow-hidden flex flex-col h-full shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 group border border-border"
      aria-label={`Certificado: ${cert.title}`}
      role="region"
    >
      {/* Preview del certificado */}
      <div className="relative w-full h-[200px] bg-background rounded-t-xl overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          {!imgError ? (
            <picture className="w-full h-full">
              <source srcSet={cert.previewImage.replace('.png', '.avif')} type="image/avif" />
              <source srcSet={cert.previewImage.replace('.png', '.webp')} type="image/webp" />
              <img 
                src={cert.previewImage} 
                alt={`Certificado: ${cert.title} emitido por ${cert.issuer}`} 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                sizes={imgSizes}
                onError={() => setImgError(true)}
              />
            </picture>
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-background to-muted flex flex-col items-center justify-center p-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                {!logoError && cert.logo ? (
                  <img 
                    src={cert.logo} 
                    alt={cert.alt} 
                    className="w-6 h-6 object-contain" 
                    onError={() => setLogoError(true)}
                  />
                ) : (
                  <span className="text-foreground font-bold text-lg">{cert.alt?.charAt(0) || '?'}</span>
                )}
              </div>
              <h3 className="text-sm font-semibold text-foreground text-center line-clamp-2">
                {cert.title}
              </h3>
              <p className="text-xs text-foreground/70 text-center mt-1">
                {cert.issuer}
              </p>
            </div>
          )}
        </div>
        {/* Overlay con título */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent p-5">
          <h3 className="text-2xl font-bold text-foreground text-shadow-lg">
            {cert.title}
          </h3>
        </div>
      </div>

      {/* Información del certificado */}
      <div className="p-2.5 flex flex-col items-center gap-2">
        <p className="text-foreground/90 text-base leading-tight text-center max-w-md">
          {cert.issuer}
        </p>
        {/* Tag de categoría */}
        <div className="flex flex-wrap gap-1.5 justify-center">
          <span className="text-sm bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium font-heading">
            {cert.category}
          </span>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2 text-sm font-medium"
          aria-label={`Ver certificado: ${cert.title}`}
        >
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 2L3 7L12 12L21 7L12 2Z" />
            <path d="M3 12L12 17L21 12" />
            <path d="M7 14V18C7 19.1046 9.23858 20 12 20C14.7614 20 17 19.1046 17 18V14" />
          </svg>
          Ver certificado
        </button>
      </div>
      
      {/* Modal para vista ampliada */}
      <CertificateModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        cert={cert}
      />
    </div>
  );
});

const ProfileSection = () => {
  const [showAll, setShowAll] = useState(false);

  // Array de certificados para mejor manejo
  const certificates = [
    {
      id: 1,
      pdfPath: "/Diploma ingenieria de sistemas.pdf",
      previewImage: "/imagenes diplomados/Diploma ingenieria de sistemas.png",
      issuer: "Diploma de grado en Ingeniería de Sistemas",
      year: "2024",
      category: "Grado en Ingeniería de Sistemas"
    },
    {
      id: 2,
      pdfPath: "/Certificado_del_diplomado_en_ciberseguridad_y_desarrollo_organizacional_.pdf",
      previewImage: "/imagenes diplomados/Diplomado en ciberseguridad y desarrollo organizacional.png",
      issuer: "Diplomado en Ciberseguridad y Desarrollo Organizacional",
      year: "2024",
      category: "Diplomado Opción de Grado"
    },
     {
      id: 3,
      pdfPath: "/Diplomado_en_seguridad_informatica.pdf",
      previewImage: "/imagenes diplomados/Diplomado_en_seguridad_informatica.png",
      issuer: "Diplomado en Seguridad Informática",
      year: "2024",
      category: "Diplomado Electiva Profesional"
    },
    {
      id: 4,
      pdfPath: "/Certificado_en_Docencia_Universitaria.pdf",
      previewImage: "/imagenes diplomados/Diplomado Docencia Universitaria.png",
      issuer: "Diplomado en Docencia Universitaria",
      year: "2025",
      category: "Diplomado Intensivo"
    },
     {
      id: 5,
      pdfPath: "/Introducción a la Ciberseguridad.pdf",
      previewImage: "/imagenes diplomados/Introducción a la Ciberseguridad - Cisco.png",
      issuer: "Introducción a la Ciberseguridad",
      year: "2025",
      category: "Curso de Ciberseguridad de Cisco"
    },
    {
      id: 6,
      pdfPath: "/Fundamentos de la ciberseguridad.pdf",
      previewImage: "/imagenes diplomados/Fundamentos de la ciberseguridad.png",
      issuer: "Fundamentos de la Ciberseguridad",
      year: "2024",
      category: "Curso de Ciberseguridad de Google"
    },
    {
      id: 7,
      pdfPath: "/Juega a los Seguro, Gestiona los riesgos de seguridad.pdf",
      previewImage: "/imagenes diplomados/Juega a los seguro.png",
      issuer: "Juega a los Seguro, Gestiona los riesgos de seguridad",
      year: "2024",
      category: "Curso de Ciberseguridad de Google"
    },
    {
      id: 8,
      pdfPath: "/Cómo resolver problemas y tomar decisiones con eficacia.pdf",
      previewImage: "/imagenes diplomados/como resolver problemas con eficacia.png",
      issuer: "Cómo Resolver Problemas y Tomar Decisiones con Eficacia",
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