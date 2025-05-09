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
    <div className="flex gap-6 md:gap-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Link href="/" className="hidden items-center space-x-2 md:flex">
          <span className={cn(norican.className, "text-2xl")}>
            {siteConfig.authorName}
          </span>
        </Link>
      </motion.div>
      {items?.length ? (
        <nav className="hidden gap-6 md:flex items-center">
          <motion.div
            className="flex items-center space-x-4"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            {items && items.length > 0 ? (
              items.map((item, index) => (
                <motion.div
                  key={item.href}
                  variants={navItemVariants}
                  custom={index}
                  className="text-sm font-medium"
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "text-gray-200 hover:text-primary transition-colors duration-200",
                      item.href === pathname ? "text-primary" : "text-gray-200"
                    )}
                  >
                    {item.title}
                  </Link>
                </motion.div>
              ))
            ) : (
              <p className="text-muted">No navigation items available</p>
            )}
          </motion.div>
        </nav>
      ) : null}
      <motion.button
        className="flex items-center space-x-2 md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {showMobileMenu ? <Icons.close /> : <Icons.menu />}
        <span className="font-bold">Menu</span>
      </motion.button>
      {showMobileMenu && items && (
        <MobileNav items={items}>{children}</MobileNav>
      )}
    </div>
  );
}
