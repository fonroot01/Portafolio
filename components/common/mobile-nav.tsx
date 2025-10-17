"use client";

import { Norican } from "next/font/google";
import Link from "next/link";
import * as React from "react";
// Switched to using local SVG files in /public/icons to keep icons minimal and consistent.

import { Icons } from "@/components/common/icons";
import { siteConfig } from "@/config/site";
import { useLockBody } from "@/hooks/use-lock-body";
import { cn } from "@/lib/utils";
import { useMobileMenu } from "@/hooks/use-mobile-menu";

interface MobileNavProps {
  items: any[];
  children?: React.ReactNode;
}

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
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        );
      case "proyectos":
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
        );
      case "laboratorios":
      case "labs":
      case "laboratorios de ciberseguridad":
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        );
      case "trayectoria":
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
            <path d="M16 7V5a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2v2" />
          </svg>
        );
      case "servicios":
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M3 18v-2a9 9 0 0 1 18 0v2" />
            <rect x="4" y="13" width="4" height="7" rx="1" />
            <rect x="16" y="13" width="4" height="7" rx="1" />
          </svg>
        );
      case "contacto":
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
            <polyline points="3 7 12 13 21 7" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 top-16 z-50 bg-background/80 backdrop-blur-sm">
      <div className="flex items-center justify-center h-full py-6 px-4">
        <nav className="w-full max-w-sm rounded-lg bg-card shadow-lg border">
          <div className="flex flex-col items-center gap-2 p-4">
            {items.map((item, index) => (
              <div key={index} className="w-full">
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
              </div>
            ))}
          </div>
          <div className="flex justify-center border-t p-4">
            {children}
          </div>
        </nav>
      </div>
    </div>
  );
}
