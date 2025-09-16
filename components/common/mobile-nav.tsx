"use client";

import { Norican } from "next/font/google";
import Link from "next/link";
import * as React from "react";
import { BsPerson, BsCodeSlash } from "react-icons/bs";
import { HiOutlineBriefcase } from "react-icons/hi";
import { BiSupport } from "react-icons/bi";
import { GoProject } from "react-icons/go";

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
        return <BsPerson className="w-5 h-5" />;
      case "proyectos":
        return <GoProject className="w-5 h-5" />;
      case "trayectoria":
        return <HiOutlineBriefcase className="w-5 h-5" />;
      case "servicios":
        return <BsCodeSlash className="w-5 h-5" />;
      case "contacto":
        return <BiSupport className="w-5 h-5" />;
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
