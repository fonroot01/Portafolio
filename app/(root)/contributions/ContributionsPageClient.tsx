'use client';
import PageContainer from "@/components/common/page-container";
import ContributionCard from "@/components/contributions/contribution-card";
import { contributionsUnsorted } from "@/config/contributions";
import { pagesConfig } from "@/config/pages";
import { AnimatedText } from "@/components/common/animated-text";

export default function ContributionsPageClient() {
  return (
    <PageContainer
      title={pagesConfig.contributions.title}
      description="Repos públicos con soluciones reales, ideas en desarrollo y aprendizaje continuo."
    >
      <AnimatedText
        as="p"
        className="text-muted-foreground text-lg sm:text-xl"
      >
        Repos públicos con soluciones reales, ideas en desarrollo y aprendizaje continuo.
      </AnimatedText>
      <ContributionCard
        contributions={contributionsUnsorted.map((c) => ({
          title: c.repo ? c.repo : c.title,
          description: c.contibutionDescription ? c.contibutionDescription : c.description,
          link: c.link,
          techStack: c.repoOwner ? [c.repoOwner] : c.techStack,
        }))}
      />
    </PageContainer>
  );
}
