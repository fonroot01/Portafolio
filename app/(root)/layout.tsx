'use client';

import { ModeToggle } from "@/components/common/mode-toggle";
import { SiteFooter } from "@/components/common/site-footer";
import FloatingNav from "@/components/common/floating-nav";
import { useMobileMenu } from "@/hooks/use-mobile-menu";
import { cn } from "@/lib/utils";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  const { isOpen: isMobileMenuOpen } = useMobileMenu();

  return (
    <div className="flex min-h-screen flex-col">
      <FloatingNav />
      <div
        className={cn(
          "fixed z-50 transition-all duration-300",
          "right-4 top-4 md:right-4 md:top-4",
          isMobileMenuOpen
            ? "opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto"
            : ""
        )}
      >
        <ModeToggle />
      </div>
      <main className="flex-1 flex flex-col">{children}</main>
      <SiteFooter />
    </div>
  );
}
