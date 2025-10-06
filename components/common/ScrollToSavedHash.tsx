"use client";
import { useEffect } from 'react';

export default function ScrollToSavedHash() {
  useEffect(() => {
    try {
      const hash = sessionStorage.getItem('returnHash');
      if (hash) {
        // small timeout to ensure DOM is ready
        setTimeout(() => {
          const el = document.querySelector(hash);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            // focus to help keyboard users
            (el as HTMLElement).focus?.();
          }
          sessionStorage.removeItem('returnHash');
        }, 80);
      }
    } catch (e) {
      // ignore
    }
  }, []);

  return null;
}
