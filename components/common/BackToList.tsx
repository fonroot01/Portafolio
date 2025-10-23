"use client";
import React from 'react';
import Link from 'next/link';

export default function BackToList() {
  return (
    <Link
      href="/#perfil"
      className="px-3 py-2 text-sm text-primary hover:underline"
      onClick={() => {
        // Restaurar scroll al volver
        const scrollPos = sessionStorage.getItem('certificatesScrollPosition');
        if (scrollPos) {
          setTimeout(() => {
            window.scrollTo(0, parseInt(scrollPos));
            sessionStorage.removeItem('certificatesScrollPosition');
          }, 100);
        }
      }}
    >
      Volver
    </Link>
  );
}
