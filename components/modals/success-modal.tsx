"use client";

import { Check } from "lucide-react";
import { useCallback, useEffect } from "react";
import { useModalStore } from "@/store/use-modal-store";

export function SuccessModal() {
  const { isOpen, closeModal } = useModalStore();
  
  const handleBackdropClick = useCallback((e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  }, [closeModal]);

  const handleEscapeKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  }, [closeModal]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
      return () => {
        document.removeEventListener('keydown', handleEscapeKey);
      };
    }
  }, [isOpen, handleEscapeKey]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label="Mensaje enviado"
    >
      <div 
        className="relative bg-background rounded-lg shadow-xl max-w-md w-full animate-fadeIn"
      >
        <button
          onClick={closeModal}
          className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-full p-2 hover:bg-primary/90 transition-colors"
          aria-label="Cerrar modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        <div className="p-6 flex flex-col items-center space-y-4">
          <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900">
            <Check className="h-8 w-8 text-emerald-600 dark:text-emerald-300" />
          </div>
          
          <h3 className="text-lg font-medium text-center text-foreground">
            ¡Gracias por tu mensaje!
          </h3>
          <p className="text-sm text-center text-foreground/70">
            Te responderé en un momento. Saludos.
          </p>
          
          <button
            onClick={closeModal}
            className="mt-4 w-full inline-flex justify-center rounded-md border border-transparent bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 transition-colors duration-200"
            type="button"
          >
            Listo
          </button>
        </div>
      </div>
    </div>
  );
}