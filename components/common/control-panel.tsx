"use client";

import { ModeToggle } from "@/components/common/mode-toggle";
import { LanguageSelector } from "@/components/common/language-selector";
import { useLanguage } from "../../providers/language-provider";

export function ControlPanel() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <LanguageSelector 
        currentLanguage={language} 
        onLanguageChange={setLanguage} 
      />
      <ModeToggle />
    </div>
  );
}

