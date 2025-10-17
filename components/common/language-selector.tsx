"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

type Language = "es" | "en";

interface LanguageSelectorProps {
  currentLanguage: Language;
  onLanguageChange: (language: Language) => void;
}

const languages = [
  { code: "es" as Language, name: "Español", flag: "🇪🇸" },
  { code: "en" as Language, name: "English", flag: "🇺🇸" },
];

export function LanguageSelector({ currentLanguage, onLanguageChange }: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  const currentLang = languages.find(lang => lang.code === currentLanguage);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className="h-8 px-2 bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 hover:bg-gray-800/80 transition-all duration-200"
        >
          <span className="text-sm font-medium text-gray-200">
            {currentLang?.code.toUpperCase()}
          </span>
          <ChevronDown className="ml-1 h-3 w-3 text-gray-400 transition-transform duration-200" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="w-32 bg-gray-900/95 backdrop-blur-sm border border-gray-700/50 shadow-lg"
      >
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => {
              onLanguageChange(language.code);
              setIsOpen(false);
            }}
            className={`flex items-center gap-2 px-3 py-2 text-sm cursor-pointer transition-colors duration-200 ${
              currentLanguage === language.code
                ? "bg-blue-600/20 text-blue-400"
                : "text-gray-200 hover:bg-gray-800/50 hover:text-white"
            }`}
          >
            <span className="text-base">{language.flag}</span>
            <span className="font-medium">{language.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

