'use client';
import React, { useState, memo } from "react";
import Image from "next/image";
import Link from "next/link";
import AboutMe from "../AboutMe";
import { ScrollText } from "lucide-react";
import { User, Briefcase, GraduationCap, Code, Mail, FileText } from "lucide-react";
import certificates from "../../config/certificates";
import ScrollToSavedHash from "../common/ScrollToSavedHash";
import { useTranslation } from "@/hooks/useTranslation";

// Componente memoizado para cada tarjeta de certificado

const CertificateCard = memo(function CertificateCard({ cert }: { cert: any }) {
  const [imgError, setImgError] = useState(false);
  const { t } = useTranslation();
  // Toggle para mostrar el texto completo del badge
  const [showFullBadge, setShowFullBadge] = useState(false);

  // Responsive sizes para optimizar transferencia
  const imgSizes = "(max-width: 768px) 100vw, 400px";

  return (
    <div 
      id={`cert-${cert.id}`}
      key={cert.id}
      className="bg-card rounded-xl overflow-hidden flex flex-col md:flex-row items-stretch h-full shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 group border border-border"
      aria-label={`Certificado: ${cert.title}`}
      role="region"
    >
      <div className="flex-0 w-full md:w-40 lg:w-56 bg-muted/5 flex items-center justify-center p-3 md:rounded-l-xl">
        {!imgError ? (
          <picture className="w-full">
            <source srcSet={cert.previewImage.replace('.png', '.avif')} type="image/avif" />
            <source srcSet={cert.previewImage.replace('.png', '.webp')} type="image/webp" />
            <Image
              src={cert.previewImage}
              alt={`${cert.title ?? cert.institution}`}
              width={420}
              height={280}
              className="w-full h-auto object-cover rounded-md md:rounded-none md:rounded-l"
              onError={() => setImgError(true)}
              sizes={imgSizes}
            />
          </picture>
        ) : (
          <div className="w-full h-28 flex items-center justify-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-foreground font-bold">{(cert.title || cert.institution)?.charAt(0) || '?'}</span>
            </div>
          </div>
        )}
      </div>

      <div className="flex-1 p-4 flex flex-col justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-foreground">{cert.title}</h3>
          {/* Mostrar preferentemente la institución; si no existe, usar issuer */}
          <p className="text-sm text-foreground/80 mt-1 truncate max-w-full">{cert.institution ?? cert.issuer}</p>
          <div className="mt-2 flex items-center gap-2 flex-wrap">
            {/* Badge normalizado: tamaño, padding y truncamiento para no cambiar su apariencia entre tarjetas */}
            <button
              type="button"
              aria-expanded={showFullBadge}
              onClick={() => setShowFullBadge(!showFullBadge)}
              className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full font-medium max-w-[14rem] truncate inline-block text-left"
              title={cert.category}
            >
              {showFullBadge ? cert.category : (
                <span className="truncate block">{cert.category}</span>
              )}
            </button>
            <span className="text-sm text-foreground/60">• {cert.year}</span>
          </div>
        </div>

        <div className="mt-2 flex items-center gap-3">
          <Link
            href={`/certificados/${cert.id}`}
            className="inline-flex items-center gap-2 px-3 py-2 border border-border rounded-md text-sm text-primary hover:bg-primary/5 transition"
            onClick={() => {
              try {
                sessionStorage.setItem('returnPath', window.location.pathname + window.location.search);
                sessionStorage.setItem('returnHash', `#cert-${cert.id}`);
              } catch (e) {
                // ignore (server-side or privacy settings)
              }
            }}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            {t('profile.certificates.view_more')}
          </Link>

          <a href={cert.pdfPath} target="_blank" rel="noreferrer" className="pdf-button inline-flex items-center gap-2 px-3 py-2 bg-primary text-primary-foreground rounded-md text-sm hover:opacity-95 transition h-9 min-w-[88px] leading-none">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            {t('common.open')} PDF
          </a>
        </div>
      </div>
      
      {/* Enlace a la página del certificado (evita modal problemático) */}

    </div>
  );
});

const ProfileSection = () => {
  const [showAll, setShowAll] = useState(false);
  const { t } = useTranslation();

  // Usar la lista centralizada de config
  const certificatesToShow = showAll ? certificates : certificates.slice(0, 4);
  const hasMoreCertificates = certificates.length > 4;

  return (
    <section className="min-h-screen flex flex-col max-w-full overflow-x-hidden">
      <ScrollToSavedHash />
      <div className="container mx-auto pt-8 px-4">
        <AboutMe />
        <div className="mt-12 pb-12">
          <h2 className="text-3xl font-bold mb-10 text-center text-foreground flex items-center justify-center gap-4">
            <ScrollText className="w-8 h-8 animate-bounce" />
            {t('profile.certificates.title')}
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
                    <span>{t('common.show_less')}</span>
                    <svg className="w-4 h-4 ml-2 inline-block transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </>
                ) : (
                  <>
                    <span>{t('profile.certificates.view_more_button')}</span>
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