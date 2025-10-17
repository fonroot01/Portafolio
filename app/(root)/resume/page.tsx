'use client';
import { redirect } from "next/navigation";
import React, { useEffect } from "react";
import { useTranslation } from "@/hooks/useTranslation";

export default function ResumePage() {
  const { t } = useTranslation();
  
  useEffect(() => {
    redirect(process.env.NEXT_PUBLIC_RESUME_LINK || "/");
  }, []);
  
  return <div>{t('common.loading')}...</div>;
}
