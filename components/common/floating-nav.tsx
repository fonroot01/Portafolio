'use client';
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useMobileMenu } from "@/hooks/use-mobile-menu";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/common/icons";
import { BiSolidUser } from "react-icons/bi";
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
    { href: "/#perfil", label: "Perfil", icon: <BiSolidUser className="w-4 h-4" /> },
    { href: "/#proyectos", label: "Proyectos", icon: <Icons.media className="w-4 h-4" /> },
    { href: "/#trayectoria", label: "Trayectoria", icon: <HiBriefcase className="w-4 h-4" /> },
    { href: "/#contacto", label: "Contacto", icon: <Icons.contact className="w-4 h-4" /> },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ 
          y: isVisible ? 0 : -20, 
          opacity: isVisible ? 1 : 0,
          display: isMobileMenuOpen ? "none" : "flex"
        }}
        transition={{ duration: 0.3 }}
        className={cn(
          "fixed z-50 transition-all duration-300 ease-in-out w-full flex justify-center top-4 left-0",
          isMobileMenuOpen && "md:flex hidden"
        )}
      >
        <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 shadow-lg rounded-full">
          <ul className="flex items-center justify-center space-x-2 md:space-x-4">
            {links.map(({ href, label, icon }) => (
              <li key={href} className="flex-shrink-0">
                <motion.a
                  href={href}
                  className={cn(
                    "flex items-center gap-2",
                    "px-3 py-2 md:px-4 md:py-2",
                    "text-sm font-medium transition-colors",
                    "text-gray-200 hover:text-white hover:text-primary",
                    "whitespace-nowrap"
                  )}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="md:hidden">{icon}</span>
                  <span className="hidden md:inline">{label}</span>
                </motion.a>
              </li>
            ))}
          </ul>
        </div>
      </motion.nav>
      {/* Logo Portafolio - Responsive */}      <motion.a
        href="/#"
        className={cn(
          "fixed left-4 z-[60] select-none transition-all duration-300",
          "text-primary font-bold tracking-tight",
          "text-xl sm:text-2xl md:text-3xl lg:text-4xl",
          "p-2 rounded-lg",
          "top-3 sm:top-4",
          "hover:scale-105 active:scale-95",
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
          scale: 1.05,
          transition: { duration: 0.2 }
        }}
        whileTap={{ 
          scale: 0.95,
          transition: { duration: 0.1 }
        }}
      >
        <span className="hidden sm:inline font-heading">Portafolio</span>
        <span className="sm:hidden font-heading">P</span>
      </motion.a>
    </>
  );
};

export default FloatingNav;
