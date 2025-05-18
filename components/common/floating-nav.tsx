'use client';
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const FloatingNav = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

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
    { href: "#perfil", label: "Perfil" },
    { href: "#proyectos", label: "Proyectos" },
    { href: "#trayectoria", label: "Trayectoria" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <>
      {/* Logo Portafolio */}
      <a
        href="https://alfonsom.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed top-4 left-8 z-[60] text-white text-3xl font-bold italic select-none font-[cursive] drop-shadow-lg transition-transform hover:scale-105"
        style={{ fontFamily: 'cursive' }}
      >
        Portafolio
      </a>
      {/* Menú flotante */}
      <nav
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ease-in-out ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="bg-gray-900/80 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-700/50 shadow-lg">
          <ul className="flex items-center space-x-8">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-sm font-medium transition-colors hover:text-primary text-gray-200 hover:text-white"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default FloatingNav;
