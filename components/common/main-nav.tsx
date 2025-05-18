"use client";

import { motion } from "framer-motion";
import { Norican } from "next/font/google";
import Link from "next/link";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import * as React from "react";

import { Icons } from "@/components/common/icons";
import { MobileNav } from "@/components/common/mobile-nav";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface MainNavProps {
  items?: any[];
  children?: React.ReactNode;
}

const norican = Norican({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

// Animation variants for the navigation items
const navItemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export function MainNav({ items, children }: MainNavProps) {
  const segment = useSelectedLayoutSegment();
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);
  const pathname = usePathname();

  React.useEffect(() => {
    setShowMobileMenu(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full shadow-sm transition-colors flex justify-center">
      <div className="w-full max-w-6xl flex flex-row items-center justify-between relative" style={{ minHeight: '64px' }}>
        {/* Botón menú solo visible en mobile, a la izquierda */}
        <motion.button
          className="flex items-center space-x-2 md:hidden absolute left-4 top-1/2 -translate-y-1/2 z-20"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {showMobileMenu ? <Icons.close /> : <Icons.menu />}
          <span className="font-bold">Menu</span>
        </motion.button>
        {/* Logo Portafolio: grande en desktop, minimalista en móvil */}
        {/* Desktop: "Portafolio" grande */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="ml-[-96px] md:ml-[-96px] flex-shrink-0 hidden md:flex"
        >
          <Link href="/" className="items-center space-x-2 flex">
            <span
              className={cn(
                norican.className,
                "text-2xl transition-colors duration-300 font-bold drop-shadow-lg",
                // Colores adaptativos para todos los temas
                "text-zinc-900 dark:text-white cyberpunk:text-pink-400 retro:text-yellow-400 paper:text-blue-700 aurora:text-purple-400 synthwave:text-cyan-300"
              )}
            >
              Portafolio
            </span>
          </Link>
        </motion.div>
        {/* Mobile: solo una "P" minimalista a la izquierda, no se superpone */}
        <div className="flex-shrink-0 flex md:hidden absolute left-4 top-2 z-10 items-center">
          <Link href="/" className="flex items-center">
            <span
              className={cn(
                norican.className,
                "text-xl font-bold transition-colors duration-300 drop-shadow-lg",
                "text-zinc-900 dark:text-white cyberpunk:text-pink-400 retro:text-yellow-400 paper:text-blue-700 aurora:text-purple-400 synthwave:text-cyan-300"
              )}
              style={{ letterSpacing: 1 }}
            >
              P
            </span>
          </Link>
        </div>
        {/* Menú de navegación solo visible en desktop, centrado y con menos separación */}
        {items?.length ? (
          <nav className="flex-1 items-center justify-center hidden md:flex">
            <motion.div
              className="flex flex-row items-center gap-6 mx-auto whitespace-nowrap"
              style={{ maxWidth: '650px', justifyContent: 'center', width: '100%' }}
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
              }}
            >
              {items.map((item, index) => {
                const isActive = item.href === pathname;
                return (
                  <motion.div
                    key={item.href}
                    variants={navItemVariants}
                    custom={index}
                    className={
                      cn(
                        "text-sm font-medium flex justify-center items-center transition-colors duration-200",
                        isActive
                          ? "text-primary bg-zinc-800/80 font-bold shadow-md"
                          : "text-foreground hover:text-primary"
                      )
                    }
                    style={{ minWidth: 'auto' }}
                  >
                    <Link
                      href={item.href}
                      className={
                        cn(
                          "relative px-2 py-1 rounded-md text-center",
                          isActive
                            ? "bg-zinc-800/80 text-primary font-bold shadow-md"
                            : "text-foreground hover:text-primary"
                        )
                      }
                      style={{ whiteSpace: 'nowrap' }}
                    >
                      {item.title}
                      {isActive && (
                        <span className="absolute left-0 right-0 -bottom-1 mx-auto h-2 w-5/6 rounded-full bg-zinc-700/60 blur-sm z-[-1]" />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </nav>
        ) : null}
        {/* Icono modo oscuro siempre a la derecha, también en móvil */}
        <div className="flex items-center gap-2 md:gap-5 ml-auto absolute right-4 top-2 md:static md:ml-auto md:relative z-10">
          {children}
        </div>
        {/* Menú móvil desplegable */}
        {showMobileMenu && items && (
          <MobileNav items={items}>{children}</MobileNav>
        )}
      </div>
    </header>
  );
}
