import React, { useState } from "react";
import Link from "next/link";
import { labsData } from "@/config/labs";

const CyberLabs = () => {
  const [showAllLabs, setShowAllLabs] = useState(false);
  const visibleLabs = showAllLabs ? labsData : labsData.slice(0, 3);
  const hasMoreLabs = labsData.length > 3;

  return (
    <section className="space-y-8 container mx-auto py-8 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {visibleLabs.map(lab => (
          <div 
            key={lab.slug} 
            className="rounded-xl border border-border bg-muted/30 p-4 shadow-md flex flex-col items-center relative transition-all duration-300 hover:bg-muted/50 hover:scale-105"
          >
            {/* Icono del laboratorio */}
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
              <svg 
                xmlns='http://www.w3.org/2000/svg' 
                className='h-6 w-6 text-primary' 
                fill='none' 
                viewBox='0 0 24 24' 
                stroke='currentColor'
              >
                <path 
                  strokeLinecap='round' 
                  strokeLinejoin='round' 
                  strokeWidth={2} 
                  d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' 
                />
              </svg>
            </div>

            {/* Título del laboratorio */}
            <span className="font-semibold text-base text-foreground text-center leading-tight mb-2">
              {lab.title}
            </span>

            {/* Descripción breve */}
            <p className="text-base text-foreground text-center leading-relaxed mb-3 line-clamp-3">
              {lab.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 justify-center mb-2">
              {lab.badges?.map(badge => (
                <span 
                  key={badge}
                  className="text-base bg-primary/10 text-primary px-2 py-1 rounded-full font-medium"
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* Enlace Ver laboratorio */}
            <Link
              href={`/labs/${lab.slug}`}
              scroll={false}
              shallow={true}
              className="text-primary underline underline-offset-2 text-sm hover:text-primary/80 transition-colors"
            >
              Ver laboratorio
            </Link>
          </div>
        ))}
      </div>

      {hasMoreLabs && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAllLabs(!showAllLabs)}
            className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-md flex items-center justify-center gap-2"
          >
            <span>{showAllLabs ? 'Ver menos' : 'Ver más laboratorios'}</span>
            <svg
              className={`w-5 h-5 transition-transform duration-300 ${
                showAllLabs ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
};

export default CyberLabs;