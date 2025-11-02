"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

export default function BackToList() {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    // Marcar que estamos volviendo
    sessionStorage.setItem('returningFromCertificate', 'true');
    
    // Navegar de vuelta
    router.push('/');
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
