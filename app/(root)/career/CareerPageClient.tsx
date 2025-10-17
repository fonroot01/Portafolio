'use client';
import Timeline from "@/components/career/timeline";
import PageContainer from "@/components/common/page-container";
import { careerExperiences } from "@/config/career";
import { useTranslation } from "@/hooks/useTranslation";

export default function CareerPageClient() {
  const { t } = useTranslation();
  
  return (
    <PageContainer
      title={t('pages.career.title')}
      description={t('pages.career.description')}
    >
      <Timeline experiences={careerExperiences} />
    </PageContainer>
  );
}
