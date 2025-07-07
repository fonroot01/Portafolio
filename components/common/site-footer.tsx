import Link from "next/link";
import * as React from "react";

import { buttonVariants } from "@/components/ui/button";
import CustomTooltip from "@/components/ui/custom-tooltip";
import { SocialLinks } from "@/config/socials";
import { cn } from "@/lib/utils";
import { HeartBeat } from "@/components/common/heartbeat";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className="container flex items-center justify-center mt-10 py-10 md:h-24">
        <div className="w-full text-center text-muted-foreground text-sm font-medium">
          Template hecho por Naman Barkiya y adapatado por su servidor, Alfonso Mosquera, con mucho cariño{" "}
          <HeartBeat className="text-red-500" />
        </div>
      </div>
    </footer>
  );
}
