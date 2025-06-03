import Link from "next/link";
import * as React from "react";

import { buttonVariants } from "@/components/ui/button";
import CustomTooltip from "@/components/ui/custom-tooltip";
import { SocialLinks } from "@/config/socials";
import { cn } from "@/lib/utils";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className="container flex items-center justify-center mt-10 py-10 md:h-24">
        <div className="w-full text-center text-muted-foreground text-sm font-medium">
          © 2025 Alfonso Mosquera. Detrás de cada línea, hay café, curiosidad y unas cuantas noches sin dormir.
        </div>
      </div>
    </footer>
  );
}
