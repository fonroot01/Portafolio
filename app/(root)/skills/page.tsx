import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import TechStackCarousel from "@/components/skills/TechStackCarousel";
import { pagesConfig } from "@/config/pages";

export const metadata: Metadata = {
  title: pagesConfig.skills.metadata.title,
  description: pagesConfig.skills.metadata.description,
};

export default function SkillsPage() {
  return (
    <PageContainer
      title={pagesConfig.skills.title}
      description={pagesConfig.skills.description}
    >
      <TechStackCarousel />
      {/* <SkillsCard skills={skills} /> */}
    </PageContainer>
  );
}
