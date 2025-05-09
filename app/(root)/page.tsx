import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { useCallback } from "react";

import { AnimatedSection } from "@/components/common/animated-section";
import { AnimatedText } from "@/components/common/animated-text";
import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { Icons } from "@/components/common/icons";
import ContributionCard from "@/components/contributions/contribution-card";
import ProjectCard from "@/components/experience/project-card";
import SkillsCard from "@/components/skills/skills-card";
import { Button, buttonVariants } from "@/components/ui/button";
import { featuredContributions } from "@/config/contributions";
import { featuredExperiences } from "@/config/experience";
import { pagesConfig } from "@/config/pages";
import { siteConfig } from "@/config/site";
import { featuredSkills } from "@/config/skills";
import { cn } from "@/lib/utils";
import alfonsoImg from "@/public/alfonsoimage.jpg";
import ScrollButton from "@/components/common/scroll-button";

export const metadata: Metadata = {
  title: `${pagesConfig.home.metadata.title} | Modern Next.js Developer Portfolio Template`,
  description: `${pagesConfig.home.metadata.description} This open-source Next.js portfolio template is customizable to showcase your skills and projects.`,
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function IndexPage() {
  // Structured data for personal portfolio
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.authorName,
    url: siteConfig.url,
    image: siteConfig.ogImage,
    jobTitle: "Ingeniero de Sistemas",
    sameAs: [siteConfig.links.github, siteConfig.links.twitter],
  };

  // Structured data for website as a software application (template)
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Next.js Portfolio Template",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Person",
      name: siteConfig.authorName,
      url: siteConfig.url,
    },
  };

  const handleScrollToSkills = useCallback(() => {
    const nextSection = document.getElementById('skills');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <ClientPageWrapper>
      <Script
        id="schema-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Script
        id="schema-software"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      <section className="space-y-6 pb-0 pt-0 mb-0 md:pb-1 md:py-2 lg:py-4 h-full flex items-center justify-center">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <Image
            src={alfonsoImg}
            height={200}
            width={200}
            sizes="100vw"
            className="bg-primary rounded-full mb-0 h-[200px] w-[200px] object-cover md:mb-2 border-8 border-primary"
            alt="Alfonso - Full Stack Developer Portfolio"
            priority
          />
          <AnimatedText
            as="h1"
            delay={0.2}
            className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Alfonso Mosquera
          </AnimatedText>
          <AnimatedText
            as="h3"
            delay={0.4}
            className="font-heading text-base sm:text-xl md:text-xl lg:text-2xl"
          >
            Ingeniero de Sistemas
          </AnimatedText>
          <div className="mt-4 max-w-[42rem] text-center">
            <p className="leading-normal text-blue-300 text-sm sm:text-base">
              ¡Hola!👋🏾 Soy Ingeniero de Sistemas, curioso por naturaleza, fanático de resolver gallos tecnológicos y apasionado por la ciberseguridad. 🚀
            </p>
          </div>

          <div className="flex flex-col mt-10 items-center justify-center sm:flex-row sm:space-x-4 gap-3">
            <AnimatedText delay={0.6}>
              <Link
                href={"https://github.com/fonroot01"}
                target="_blank"
                className={cn(buttonVariants({ size: "lg" }))}
                aria-label="View Alfonso Mosquera's GitHub profile"
              >
                <Icons.gitHub className="w-4 h-4 mr-2" /> GitHub
              </Link>
            </AnimatedText>
            <AnimatedText delay={0.8}>              <Link
                href={"https://www.linkedin.com/in/alfonso-ángel-mosquera-a-4a919b341"}
                target="_blank"
                className={cn(buttonVariants({ size: "lg" }))}
                aria-label="View Alfonso Mosquera's LinkedIn profile"
              >
                <Icons.linkedin className="w-4 h-4 mr-2" /> LinkedIn
              </Link>
            </AnimatedText>
            <AnimatedText delay={1.0}>
              <Link
                href={"/CV.pdf"}
                download
                className={cn(
                  buttonVariants({
                    size: "lg",
                  }), "bg-gray-200 text-black flex items-center justify-center py-2 px-4")}
                aria-label="Download Alfonso Mosquera's CV"
              >
                <span className="w-4 h-4 mr-2">🫂</span> Descargar CV
              </Link>
            </AnimatedText>
          </div>
          <AnimatedText delay={1.2}>
            <ScrollButton />
          </AnimatedText>
        </div>
      </section>
      <AnimatedSection
        className="container space-y-6 bg-muted py-10"
        id="skills"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {pagesConfig.skills.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {pagesConfig.skills.description}
          </AnimatedText>
        </div>
        <SkillsCard skills={featuredSkills} />
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/skills">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>
      <AnimatedSection
        direction="right"
        className="container space-y-6 py-10 my-14"
        id="experience"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {pagesConfig.experience.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {pagesConfig.experience.description}
          </AnimatedText>
        </div>
        <div className="mx-auto grid justify-center gap-4 md:w-full lg:grid-cols-3">
          {featuredExperiences.map((exp, index) => (
            <AnimatedSection
              key={exp.id}
              delay={0.1 * (index + 1)}
              direction="up"
            >
              <ProjectCard project={exp} />
            </AnimatedSection>
          ))}
        </div>
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/experience">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
            </Button>
          </Link>
        </AnimatedText>
        {/* <div className="mx-auto text-center md:max-w-[58rem]">
                    <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                        See all the relevant experiences.
                    </p>
                </div> */}
      </AnimatedSection>
      <AnimatedSection
        direction="left"
        className="container space-y-6 bg-muted py-10 my-14"
        id="contributions"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {pagesConfig.contributions.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {pagesConfig.contributions.description}
          </AnimatedText>
        </div>
        <div className="mx-auto justify-center gap-4 md:w-full lg:grid-cols-3">
          <ContributionCard contributions={featuredContributions} />
        </div>
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/contributions">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>
    </ClientPageWrapper>
  );
}
