"use client";
import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';

interface Props {
  src: StaticImageData | string;
  alt?: string;
  size?: number;
}

export default function ProfileSpecialties({ src, alt = 'Perfil', size = 180 }: Props) {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((s) => !s);
  const close = () => setOpen(false);

  const badgeCommon = 'absolute w-36 text-xs text-center p-2 rounded-lg bg-card text-foreground shadow-md';

  const radius = size / 1.7; // kept for possible future use

  return (
    <div
      className="relative inline-block"
      style={{ width: size, height: size }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <style>{`
        @keyframes orbit { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>

      <div
        className={`relative rounded-full overflow-hidden border-8 border-primary shadow-lg transform transition-transform duration-300 ${open ? 'scale-105' : 'scale-100'}`}
        style={{ width: size, height: size }}
      >
        <button
          aria-label="Mostrar especialidades"
          aria-expanded={open}
          onClick={toggle}
          onBlur={close}
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          className="relative block w-full h-full focus:outline-none"
        >
          <Image src={src} width={size} height={size} alt={alt} className="rounded-full object-cover block" />
        </button>
      </div>

      {/* Badges removed: orbit labels are intentionally omitted per request. */}

      {/* Right-side panel (cuadro rojo en la UI) que muestra las ramas/áreas */}
      <div className={`absolute left-full ml-4 top-1/2 -translate-y-1/2 w-48 p-3 rounded-md shadow-md transition-all duration-200 ${open ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'}`}>
        <h4 className="text-sm font-semibold mb-2">Áreas</h4>
        <ul className="text-sm space-y-1">
          <li>Ciberseguridad</li>
          <li>Automatización</li>
          <li>Soporte</li>
          <li>Infraestructura</li>
        </ul>
      </div>
    </div>
  );
}
