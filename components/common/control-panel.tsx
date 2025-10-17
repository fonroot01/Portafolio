"use client";

import { ModeToggle } from "@/components/common/mode-toggle";
import { LanguageSelector } from "@/components/common/language-selector";
import { useLanguage } from "../../providers/language-provider";

export function ControlPanel() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex flex-col md:flex-row items-center gap-2">
      <ModeToggle />
      <LanguageSelector 
        currentLanguage={language} 
        onLanguageChange={setLanguage} 
      />
    </div>
  );
}

