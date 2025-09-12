'use client';
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useMobileMenu } from "@/hooks/use-mobile-menu";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/common/icons";
import { 
  User,
  Wrench,
  Settings,
  Phone
} from "lucide-react";
import { HiBriefcase } from "react-icons/hi";

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
      icon: <User className="w-4 h-4" /> // Icono de usuario para perfil
    },
    { 
      href: "/#proyectos", 
      label: "Proyectos", 
      icon: <Wrench className="w-4 h-4" /> // Icono de llave para proyectos
    },
    { 
      href: "/#trayectoria", 
      label: "Trayectoria", 
      icon: <HiBriefcase className="w-4 h-4" /> // Maletín para trayectoria profesional
    },
    { 
      href: "https://alfonsosupport.vercel.app/", 
      label: "Servicios", 
      icon: <Settings className="w-4 h-4" /> // Engranaje para servicios
    },
    { 
      href: "/#contacto", 
      label: "Contacto", 
      icon: <Phone className="w-4 h-4" /> // Teléfono para contacto
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
                      "flex items-center md:flex-row flex-col justify-center",
                      "px-2 py-1.5 md:px-4 md:py-2", // Padding reducido en móvil
                      "text-sm font-medium transition-colors",
                      "text-gray-200 hover:text-white hover:text-primary",
                      "whitespace-nowrap rounded-full",
                      "transition-all duration-200",
                      "min-w-[3.5rem] md:min-w-0" // Ancho mínimo en móvil
                    )}
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: "rgba(255, 255, 255, 0.08)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  >
                    <motion.span 
                      className="md:hidden mb-1"
                      whileHover={{ rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                    >
                      {icon}
                    </motion.span>
                    <span className={cn(
                      "md:text-sm text-[10px]",
                      "font-medium leading-none",
                      "transition-opacity",
                      "md:opacity-100 opacity-70"
                    )}>
                      {label}
                    </span>
                  </motion.a>
                ) : (
                  <motion.a
                    href={href}
                    className={cn(
                      "flex items-center md:flex-row flex-col justify-center",
                      "px-2 py-1.5 md:px-4 md:py-2", // Padding reducido en móvil
                      "text-sm font-medium transition-colors",
                      "text-gray-200 hover:text-white hover:text-primary",
                      "whitespace-nowrap rounded-full",
                      "transition-all duration-200",
                      "min-w-[3.5rem] md:min-w-0" // Ancho mínimo en móvil
                    )}
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: "rgba(255, 255, 255, 0.08)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  >
                    <motion.span 
                      className="md:hidden mb-1"
                      whileHover={{ rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                    >
                      {icon}
                    </motion.span>
                    <span className={cn(
                      "md:text-sm text-[10px]",
                      "font-medium leading-none",
                      "transition-opacity",
                      "md:opacity-100 opacity-70"
                    )}>
                      {label}
                    </span>
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