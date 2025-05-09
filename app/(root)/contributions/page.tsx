import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import ContributionCard from "@/components/contributions/contribution-card";
import { contributionsUnsorted } from "@/config/contributions";
import { pagesConfig } from "@/config/pages";

export const metadata: Metadata = {
  title: pagesConfig.contributions.metadata.title,
  description: pagesConfig.contributions.metadata.description,
};

export default function ContributonsPage() {
  return (
    <PageContainer
      title={pagesConfig.contributions.title}
      description={pagesConfig.contributions.description}
    >
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
