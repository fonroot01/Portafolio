"use client";

import { Icons } from "./icons";
import { cn } from "@/lib/utils";

export function ScrollButton({ targetId = "skills", direction = "down" }: { targetId?: string, direction?: "up" | "down" }) {
  const handleScroll = () => {
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleScroll}
      className="group relative flex items-center justify-center w-10 h-10 transition-all duration-300"
      aria-label={`Scroll ${direction}`}
    >
      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-10 transition-opacity bg-primary" />
      {direction === "up" ? (
        <Icons.chevronUp 
          className={cn(
            "h-5 w-5 transition-all duration-300",
            "text-primary/60 group-hover:text-primary",
            "group-hover:scale-110"
          )} 
        />
      ) : (
        <Icons.chevronDown 
          className={cn(
            "h-5 w-5 transition-all duration-300",
            "text-primary/60 group-hover:text-primary",
            "animate-bounce",
            "group-hover:scale-110"
          )} 
        />
      )}
    </button>
  );
}
