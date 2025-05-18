import { ModeToggle } from "@/components/common/mode-toggle";
import { SiteFooter } from "@/components/common/site-footer";
import FloatingNav from "@/components/common/floating-nav";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <FloatingNav />
      <div className="fixed top-4 right-4 z-50">
        <ModeToggle />
      </div>
      <main className="flex-1 flex flex-col">
        {/* Contenido principal */}
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
