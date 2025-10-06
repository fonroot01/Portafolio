"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

export default function BackToList() {
  const router = useRouter();

  const handleBack = () => {
    try {
      const path = sessionStorage.getItem('returnPath') || '/';
      const hash = sessionStorage.getItem('returnHash') || '';
      router.push(path + (hash || ''));
      // do not remove items here; ScrollToSavedHash will clear after scrolling
    } catch (e) {
      router.back();
    }
  };

  return (
    <button onClick={handleBack} className="px-3 py-2 text-sm text-primary hover:underline">
      Volver
    </button>
  );
}
