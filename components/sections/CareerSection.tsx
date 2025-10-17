'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Briefcase } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

// Define una interfaz para las props del componente CompanyIcon
interface CompanyIconProps {
  children: React.ReactNode;
  isActive?: boolean;
}

const CompanyIcon: React.FC<CompanyIconProps> = ({ children, isActive = false }) => (
  <div className={`
    flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center 
    transition-all duration-500 ease-out transform
    ${isActive 
      ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white scale-110 shadow-lg shadow-blue-500/30' 
      : 'bg-primary/10 text-primary hover:bg-primary/20 hover:scale-105'
    }
  `}>
    {children}
  </div>
);

const ExperienceSection = () => {
  const { t } = useTranslation();
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());

  const experiences = [
    {
      id: 1,
      key: "utch",
      role: t('experience.items.utch.role'),
      company: t('experience.items.utch.company'),
      dates: t('experience.items.utch.dates'),
      duration: t('experience.items.utch.duration'),
      description: t('experience.items.utch.description') as unknown as string[],
      color: "from-blue-500 to-indigo-500",
      icon: (
        <Image
          src="/career/logoutch.png" 
          alt="UTCh Logo" 
          width={32}
          height={32}
          className="object-contain"
          onError={(e) => {
            // Fallback to SVG icon if image fails to load
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            (e.currentTarget as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
          }}
        />
      ),
      fallbackIcon: (
        <svg className="w-6 h-6 hidden" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 18c-3.87 0-7-3.13-7-7V6.39l7-3.11V19z" />
        </svg>
      ),
    },
    {
      id: 2,
      key: "zeuss_tech",
      role: t('experience.items.zeuss_tech.role'),
      company: t('experience.items.zeuss_tech.company'),
      dates: t('experience.items.zeuss_tech.dates'),
      duration: t('experience.items.zeuss_tech.duration'),
      description: t('experience.items.zeuss_tech.description') as unknown as string[],
      color: "from-blue-500 to-cyan-500",
      icon: (
        <Image
          src="/career/logozeuss.png" 
          alt="Zeuss Logo" 
          width={32}
          height={32}
          className="object-contain"
          onError={(e) => {
            // Fallback to SVG icon if image fails to load
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            (e.currentTarget as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
          }}
        />
      ),
      fallbackIcon: (
        <svg className="w-6 h-6 hidden" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
        </svg>
      ),
    },
    {
      id: 3,
      key: "zeuss_support",
      role: t('experience.items.zeuss_support.role'),
      company: t('experience.items.zeuss_support.company'),
      dates: t('experience.items.zeuss_support.dates'),
      duration: t('experience.items.zeuss_support.duration'),
      description: t('experience.items.zeuss_support.description') as unknown as string[],
      color: "from-purple-500 to-pink-500",
      icon: (
        <Image
          src="/career/logozeuss.png" 
          alt="Zeuss Logo" 
          width={32}
          height={32}
          className="object-contain"
          onError={(e) => {
            // Fallback to SVG icon if image fails to load
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            target.nextElementSibling?.classList.remove('hidden');
          }}
        />
      ),
      fallbackIcon: (
        <svg className="w-6 h-6 hidden" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"/>
        </svg>
      ),
    },
  ];

  // Intersection Observer para animaciones al hacer scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = parseInt(entry.target.getAttribute('data-card-id') || '0');
            setVisibleCards(prev => new Set(Array.from(prev).concat(cardId)));
          }
        });
      },
      { threshold: 0.3, rootMargin: '0px 0px -100px 0px' }
    );

    const cards = document.querySelectorAll('[data-card-id]');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 px-4 bg-background relative overflow-hidden max-w-full">
      {/* Decorative background elements - más sutiles y sin reflejo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Header con animación - más compacto */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-3 text-center text-foreground font-heading tracking-tight flex items-center justify-center gap-4">
            <Briefcase className="w-8 h-8 animate-bounce" />
            {t('experience.title') || 'Experiencia Laboral'}
          </h2>
          <div className="w-16 h-0.5 bg-primary/50 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Timeline container con fondo sólido */}
        <div className="relative bg-background/95 backdrop-blur-sm rounded-lg p-6">
          {/* Línea de tiempo central más sutil */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-border/50 rounded-full">
            <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse blur-sm"></div>
          </div>

          {experiences.map((exp, index) => (
            <div 
              key={exp.id} 
              data-card-id={exp.id}
              className={`
                mb-16 relative transition-all duration-1000 ease-out
                ${visibleCards.has(exp.id) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
                }
              `}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Experience card con fondo más sólido */}
              <div 
                className={`
                  ml-16 md:ml-0 md:grid md:grid-cols-2 md:gap-8 lg:gap-12 md:items-start max-w-5xl mx-auto
                  bg-card/95 backdrop-blur-sm rounded-xl shadow-sm
                  ${index % 2 === 0 ? '' : 'md:grid-flow-dense'}
                `}
                onMouseEnter={() => setActiveCard(exp.id)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* Company info */}
                <div className={`
                  mb-6 md:mb-0 ${index % 2 === 0 ? '' : 'md:col-start-2 md:text-right'}
                  transform transition-all duration-500 ease-out p-4
                  ${activeCard === exp.id ? 'scale-105' : ''}
                `}>
                  <div className={`
                    flex items-center gap-4 mb-4
                    ${index % 2 === 0 ? '' : 'md:flex-row-reverse md:justify-end'}
                  `}>
                    <CompanyIcon isActive={activeCard === exp.id}>
                      {exp.icon}
                      {exp.fallbackIcon}
                    </CompanyIcon>
                    <div className={index % 2 === 0 ? '' : 'md:text-right'}>
                      <h3 className="text-2xl font-bold text-foreground mb-1 leading-tight font-heading">
                        {exp.role}
                      </h3>
                      <p className="text-lg font-semibold text-muted-foreground font-heading">
                        {exp.company}
                      </p>
                    </div>
                  </div>
                  
                  <div className={`
                    flex items-center gap-4 text-sm text-muted-foreground
                    ${index % 2 === 0 ? '' : 'md:justify-end'}
                  `}>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 11H7v8h2v-8zm4 0h-2v8h2v-8zm4 0h-2v8h2v-8zm2.5-9L21 4v2h-1.5l-2.5 14H7L4.5 6H3V4l1.5-2h12zM6.5 8h11l-1 6h-9l-1-6z"/>
                      </svg>
                      {exp.dates}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 6L12 10.5 8.5 8 12 5.5 15.5 8zM12 17.5c-3.04 0-5.5-2.46-5.5-5.5 0-.55.45-1 1-1s1 .45 1 1c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5c0-.55.45-1 1-1s1 .45 1 1c0 3.04-2.46 5.5-5.5 5.5z"/>
                      </svg>
                      {exp.duration}
                    </span>
                  </div>
                </div>

                {/* Experience details */}
                <div className={`
                  ${index % 2 === 0 ? '' : 'md:col-start-1'}
                  transform transition-all duration-500 ease-out
                  ${activeCard === exp.id ? 'scale-105' : ''}
                `}>
                  <div className={`
                    relative p-6 sm:p-8 rounded-2xl transition-all duration-500 ease-out
                    bg-card/80 backdrop-blur-sm
                    border border-border
                    h-full
                    ${activeCard === exp.id 
                      ? 'bg-primary/5' 
                      : ''
                    }
                  `}>
                    {/* Description */}
                    <div className="mb-6 relative z-10">
                      {(Array.isArray(exp.description) ? exp.description : (exp.description ? [String(exp.description)] : [])).map((line, descIndex) => (
                        <p key={descIndex} className={`mb-2 last:mb-0 leading-relaxed ${descIndex === 0 ? 'mb-4' : 'text-base'}`}>
                          {descIndex === 0 ? (
                            <span className="text-xl font-extrabold text-foreground font-heading block">{line}</span>
                          ) : (
                            <span className="flex items-start gap-2">
                              <span className="text-primary mt-1.5 text-xs">▶</span>
                              <span className="text-foreground/90">{line.replace('• ', '')}</span>
                            </span>
                          )}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats section con fondo sólido */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-card/95 backdrop-blur-sm rounded-xl border border-border/50 shadow-sm">
            <div className="text-3xl font-extrabold text-primary mb-2 font-heading">2</div>
            <div className="text-sm text-muted-foreground font-heading">{t('experience.companies') || 'Empresas'}</div>
          </div>
          <div className="text-center p-6 bg-card/95 backdrop-blur-sm rounded-xl border border-border/50 shadow-sm">
            <div className="text-3xl font-extrabold text-primary mb-2 font-heading">10</div>
            <div className="text-sm text-muted-foreground font-heading">{t('experience.months') || 'Meses de Experiencia'}</div>
          </div>
          <div className="text-center p-6 bg-card/95 backdrop-blur-sm rounded-xl border border-border/50 shadow-sm">
            <div className="text-3xl font-extrabold text-primary mb-2 font-heading">15+</div>
            <div className="text-sm text-muted-foreground font-heading">{t('skills.title')}</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default ExperienceSection;