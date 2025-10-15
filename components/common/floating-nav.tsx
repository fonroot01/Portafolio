'use client';
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useMobileMenu } from "@/hooks/use-mobile-menu";
import { cn } from "@/lib/utils";
// Usamos SVGs locales minimalistas en /public/icons para mantener estilo outline

const FloatingNav = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();
  const { isOpen: isMobileMenuOpen } = useMobileMenu();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  
  const links = [
    {
      href: "/#perfil",
      label: "Perfil",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
    },
    {
      href: "/#proyectos",
      label: "Proyectos",
      icon: (
        <svg className="w-6 h-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
    },
    {
      href: "/#trayectoria",
      label: "Trayectoria",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 7V5a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2v2" />
        </svg>
      ),
    },
    {
      href: "https://alfonsosupport.vercel.app/",
      label: "Servicios",
      icon: (
        <svg className="w-6 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M3 18v-2a9 9 0 0 1 18 0v2" />
          <rect x="4" y="13" width="4" height="7" rx="1" />
          <rect x="16" y="13" width="4" height="7" rx="1" />
        </svg>
      ),
    },
    {
      href: "/#contacto",
      label: "Contacto",
      icon: (
        <svg className="w-6 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
          <polyline points="3 7 12 13 21 7" />
        </svg>
      ),
    },
  ];

  return (
    <AnimatePresence>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ 
          y: isVisible ? 0 : -20, 
          opacity: isVisible ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        style={{ display: isMobileMenuOpen ? "none" : "flex" }}
        className={cn(
          "fixed z-50 transition-all duration-300 ease-in-out w-full flex justify-center top-4 left-0",
          isMobileMenuOpen && "md:flex hidden"
        )}
      >
        <motion.div 
          className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 shadow-lg rounded-full"
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <ul className="flex items-center justify-center space-x-1 md:space-x-2">
            {links.map(({ href, label, icon }) => (
              <li key={href} className="flex-shrink-0">
                {href.startsWith('http') ? (
                  <motion.a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "flex items-center gap-2",
                      "px-3 py-2 md:px-4 md:py-2",
                      "text-sm font-medium transition-colors",
                      "text-gray-200 hover:text-white hover:text-primary",
                      "whitespace-nowrap rounded-full",
                      "transition-all duration-200"
                    )}
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: "rgba(255, 255, 255, 0.1)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  >
                    <motion.span 
                      className="md:hidden"
                      whileHover={{ rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                    >
                      {icon}
                    </motion.span>
                    <span className="hidden md:inline">{label}</span>
                  </motion.a>
                ) : (
                  <motion.a
                    href={href}
                    className={cn(
                      "flex items-center gap-2",
                      "px-3 py-2 md:px-4 md:py-2",
                      "text-sm font-medium transition-colors",
                      "text-gray-200 hover:text-white hover:text-primary",
                      "whitespace-nowrap rounded-full",
                      "transition-all duration-200"
                    )}
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: "rgba(255, 255, 255, 0.1)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  >
                    <motion.span 
                      className="md:hidden"
                      whileHover={{ rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                    >
                      {icon}
                    </motion.span>
                    <span className="hidden md:inline">{label}</span>
                  </motion.a>
                )}
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.nav>
      
      {/* Logo Portafolio - Responsive */}
      <motion.a
        href="/#"
        className={cn(
          "fixed left-4 z-[60] select-none transition-all duration-300",
          "text-primary font-bold tracking-tight",
          "text-xl sm:text-2xl md:text-3xl lg:text-4xl",
          "p-2 rounded-lg",
          "top-3 sm:top-4",
          "bg-background/80 backdrop-blur-sm",
          "shadow-lg hover:shadow-xl",
          "border border-border/50",
          "flex items-center justify-center",
          "min-w-[40px] sm:min-w-[auto]",
          isMobileMenuOpen ? "opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto" : ""
        )}
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          scale: isMobileMenuOpen ? 0.8 : 1
        }}
        transition={{ 
          duration: 0.5,
          ease: "easeOut"
        }}
        whileHover={{ 
          scale: 1.08,
          transition: { type: 'spring', stiffness: 300, damping: 15 }
        }}
        whileTap={{ 
          scale: 0.92,
          transition: { duration: 0.1 }
        }}
      >
        <span className="hidden sm:inline font-heading">Portafolio</span>
        <span className="sm:hidden font-heading">P</span>
      </motion.a>
    </AnimatePresence>
  );
};

export default FloatingNav;