'use client';
import { useMemo } from 'react';
import { useLanguage } from '../providers/language-provider';
import es from '../i18n/es.json';
import en from '../i18n/en.json';

const dictionaries = { es, en } as const;

type Dictionary = typeof es;

export const useTranslation = () => {
  const { language } = useLanguage();
  const dict: Dictionary = useMemo(() => dictionaries[language], [language]);

  // Función para acceder a traducciones anidadas usando dot notation
  const t = (key: string): any => {
    const keys = key.split('.');
    let value: any = dict;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Retorna la clave si no se encuentra la traducción
      }
    }
    
    // Retornar el valor tal cual (string, array, object, etc.)
    return value !== undefined ? value : key;
  };

  return { t, language };
};
