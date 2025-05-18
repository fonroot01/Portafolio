"use client";

import { motion } from "framer-motion";
import { Norican } from "next/font/google";
import Link from "next/link";
import * as React from "react";
import { BiSolidUser } from "react-icons/bi";
import { HiBriefcase } from "react-icons/hi";

import { Icons } from "@/components/common/icons";
import { siteConfig } from "@/config/site";
import { useLockBody } from "@/hooks/use-lock-body";
import { cn } from "@/lib/utils";
import { useMobileMenu } from "@/hooks/use-mobile-menu";

interface MobileNavProps {
  items: any[];
  children?: React.ReactNode;
}

const menuVariants = {
  closed: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.2,
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  closed: { opacity: 0, y: -10 },
  open: { opacity: 1, y: 0 },
};

const norican = Norican({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export function MobileNav({ items, children }: MobileNavProps) {
  useLockBody();
  const { onClose } = useMobileMenu();

  const getIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case "perfil":
        return <BiSolidUser className="w-5 h-5" />;
      case "proyectos":
        return <Icons.media className="w-5 h-5" />;
      case "trayectoria":
        return <HiBriefcase className="w-5 h-5" />;
      case "contacto":
        return <Icons.contact className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      className="fixed inset-0 top-16 z-50 bg-background/80 backdrop-blur-sm"
      initial="closed"
      animate="open"
      exit="closed"
      variants={menuVariants}
    >      <div className="flex items-center justify-center h-full py-6 px-4">
        <motion.nav
          className="w-full max-w-sm rounded-lg bg-card shadow-lg border"
          variants={menuVariants}
        >
          <div className="flex flex-col items-center gap-2 p-4">
            {items.map((item, index) => (
              <motion.div key={index} variants={itemVariants} className="w-full">
                <Link
                  href={item.disabled ? "#" : item.href}
                  className={cn(
                    "flex items-center justify-center gap-3",
                    "w-full px-4 py-3 text-base font-medium",
                    "rounded-md transition-colors",
                    "hover:bg-accent hover:text-accent-foreground",
                    "text-center",
                    item.disabled && "cursor-not-allowed opacity-60"
                  )}
                  onClick={() => {
                    if (!item.disabled) {
                      onClose();
                    }
                  }}
                >
                  {getIcon(item.title)}
                  <span>{item.title}</span>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center border-t p-4"
          >
            {children}
          </motion.div>
        </motion.nav>
      </div>
    </motion.div>
  );
}
