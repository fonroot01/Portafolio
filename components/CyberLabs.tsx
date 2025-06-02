import React from "react";
import Link from "next/link";
import { labsData } from "@/config/labs";

const CyberLabs = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
    {labsData.map(lab => (
      <div 
        key={lab.slug} 
        className="rounded-xl border border-border bg-muted/30 p-4 shadow-md flex flex-col items-center relative transition-all duration-300 hover:bg-muted/50 hover:scale-105"
      >
        {/* Icono del laboratorio en círculo */}
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mb-3 shadow-sm">
          <svg 
            xmlns='http://www.w3.org/2000/svg' 
            className='h-6 w-6 text-gray-700' 
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
        <p className="text-sm text-muted-foreground text-center leading-relaxed mb-3 line-clamp-3">
          {lab.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 justify-center mb-2">
          {lab.badges?.map(badge => (
            <span 
              key={badge}
              className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium"
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
);

export default CyberLabs;