"use client";
import { useEffect } from 'react';

export default function ScrollToSavedHash() {
  useEffect(() => {
    try {
      const hash = sessionStorage.getItem('returnHash');
      if (hash) {
        // Intentar hacer scroll con reintentos para dar tiempo al DOM a renderizar
        const attemptScroll = (attempts = 0) => {
          const el = document.querySelector(hash);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            // focus to help keyboard users
            (el as HTMLElement).focus?.();
            sessionStorage.removeItem('returnHash');
          } else if (attempts < 5) {
            // Reintentar si el elemento no existe aún (máximo 5 intentos)
            setTimeout(() => attemptScroll(attempts + 1), 100);
          } else {
            // Limpiar después de intentos fallidos
            sessionStorage.removeItem('returnHash');
          }
        };
        
        // Timeout inicial para asegurar que el DOM esté listo
        setTimeout(() => attemptScroll(), 150);
      }
    } catch (e) {
      // ignore
    }
  }, []);

  return null;
}
