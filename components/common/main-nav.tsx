"use client";


import { Norican } from "next/font/google";
import Link from "next/link";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import * as React from "react";

import { Icons } from "@/components/common/icons";
import { MobileNav } from "@/components/common/mobile-nav";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { useMobileMenu } from "@/hooks/use-mobile-menu";

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

// Animation variants for the container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function MainNav({ items = [], children }: MainNavProps) {
  const { motion } = require('framer-motion');
  const segment = useSelectedLayoutSegment();
  const pathname = usePathname();
  const { isOpen: showMobileMenu, toggle: toggleMobileMenu } = useMobileMenu();

  React.useEffect(() => {
    useMobileMenu.getState().onClose();
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full shadow-sm transition-colors flex justify-center bg-background/80 backdrop-blur-sm">
      <div className="container flex flex-row items-center justify-between relative px-4 max-w-6xl mx-auto" style={{ minHeight: '64px' }}>
        {/* Botón menú mobile */}
        <button
          className="flex items-center space-x-2 md:hidden"
          onClick={toggleMobileMenu}
        >
          {showMobileMenu ? <Icons.close /> : <Icons.menu />}
        </button>

        {/* Logo - Responsivo */}
        <div
          className={cn(
            "absolute left-1/2 transform -translate-x-1/2",
            showMobileMenu && "md:flex hidden"
          )}
        >
          <Link href="/" className="items-center space-x-2 flex">
            <span className={cn(
              norican.className,
              "text-xl md:text-2xl transition-colors duration-300 font-bold drop-shadow-lg",
              "text-zinc-900 dark:text-white"
            )}>
              <span className="hidden md:inline">Portafolio</span>
              <span className="md:hidden">P</span>
            </span>
          </Link>
        </div>

        {/* Navegación Desktop */}
        {items.length > 0 && (
          <nav className="hidden md:flex flex-1 items-center justify-center">
            <div className="flex flex-row items-center gap-4 md:gap-6">
              {items.map((item, index) => {
                const isActive = item.href === pathname;
                return (
                  <div
                    key={item.href}
                    className={cn(
                      "text-sm font-medium transition-all duration-200",
                      isActive ? "text-primary" : "text-muted-foreground"
                    )}
                  >
                    <Link
                      href={item.href}
                      className="relative px-3 py-2 rounded-md inline-flex items-center"
                    >
                      {item.title}
                      {isActive && (
                        <motion.span
                          className="absolute inset-0 bg-primary/10 rounded-md -z-10"
                          layoutId="activeNavItem"
                        />
                      )}
                    </Link>
                  </div>
                );
              })}
            </div>
          </nav>
        )}
        
        {/* Toggle de tema */}
        <div className={cn(
          "flex items-center gap-2",
          showMobileMenu && "hidden md:flex"
        )}>
          {children}
        </div>

        {/* Menú móvil */}
        {showMobileMenu && items && (
          <MobileNav items={items}>{children}</MobileNav>
        )}
      </div>
    </header>
  );
}

