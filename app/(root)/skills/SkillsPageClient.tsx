'use client';
import PageContainer from "@/components/common/page-container";
import TechStackCarousel from "@/components/skills/TechStackCarousel";
import { useTranslation } from "@/hooks/useTranslation";

export default function SkillsPageClient() {
  const { t } = useTranslation();
  
  return (
    <PageContainer
      title={t('pages.skills.title')}
      description={t('pages.skills.description')}
    >
      <TechStackCarousel />
      {/* <SkillsCard skills={skills} /> */}
    </PageContainer>
  );
}
