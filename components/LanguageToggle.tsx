'use client';
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1 rounded border border-gray-400 bg-white text-gray-800 hover:bg-gray-100 transition"
      aria-label="Cambiar idioma"
    >
      {language === 'es' ? 'EN' : 'ES'}
    </button>
  );
};

export default LanguageToggle;
