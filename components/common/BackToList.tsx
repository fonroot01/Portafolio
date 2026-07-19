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
    // Forzar navegación directa a la sección de perfil en la raíz para
    // evitar volver al último historial (p.ej. /labs). `ProfileSection`
    // restaurará la posición usando sessionStorage en useLayoutEffect.
    if (typeof window !== 'undefined') {
      window.location.href = '/#perfil';
    } else {
      router.push('/#perfil');
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
