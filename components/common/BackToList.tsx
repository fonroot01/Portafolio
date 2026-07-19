"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

export default function BackToList() {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    // Marcar que estamos volviendo
    sessionStorage.setItem('returningFromCertificate', 'true');
    // Si hay historial, usar router.back() para que el navegador restaure la posición
    // de forma natural. Si no hay historial (p.ej. navegación directa), usar push
    // a la raíz y aplicar un pequeño fallback para restaurar el scroll.
    try {
      if (typeof window !== 'undefined' && window.history && window.history.length > 1) {
        router.back();
      } else {
        // Fallback: navegar a la raíz; ProfileSection también intentará restaurar
        // la posición desde sessionStorage en useLayoutEffect. Añadimos un
        // pequeño timeout por si el app-router no dispara el efecto inmediatamente.
        const scrollPos = sessionStorage.getItem('certificatesScrollPosition');
        router.push('/');
        if (scrollPos) {
          const top = parseInt(scrollPos, 10) || 0;
          const headerEl = document.querySelector('header');
          const headerHeight = headerEl ? (headerEl as HTMLElement).offsetHeight : 120;
          const EXTRA = 40;
          const target = Math.max(0, top - headerHeight - EXTRA);
          setTimeout(() => {
            try { window.scrollTo(0, target); } catch (e) {/* ignore */}
          }, 60);
        }
      }
    } catch (err) {
      router.push('/');
    }
  };

  return (
    <button
      onClick={handleClick}
      className="px-3 py-2 text-sm text-primary hover:underline cursor-pointer"
    >
      Volver
    </button>
  );
}
