import { Metadata } from "next";
import { AnimatedSection } from "@/components/common/animated-section";
import { AnimatedText } from "@/components/common/animated-text";
import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import ContributionCard from "@/components/contributions/contribution-card";
import { pagesConfig } from "@/config/pages";
import { featuredContributions } from "@/config/contributions";

export const metadata: Metadata = {
  title: pagesConfig.certificaciones.title,
  description: pagesConfig.certificaciones.description,
};

export default function CertificacionesPage() {
  return (
    <ClientPageWrapper>
      <AnimatedSection
        direction="left"
        className="container space-y-6 bg-muted py-10 my-14"
        id="certificaciones"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {pagesConfig.certificaciones.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {pagesConfig.certificaciones.description}
          </AnimatedText>
        </div>
        <div className="mx-auto justify-center gap-4 md:w-full lg:grid-cols-3">
          <ContributionCard contributions={featuredContributions} />
        </div>
      </AnimatedSection>
    </ClientPageWrapper>
  );
}
