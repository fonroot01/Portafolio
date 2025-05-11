'use client';
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { useCallback } from "react";
import { TypeAnimation } from 'react-type-animation';

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
            <span
              style={{
                whiteSpace: 'nowrap',
                display: 'inline-block',
                width: '25ch',
                height: '1.5em', // Fija la altura para evitar movimiento vertical
                textAlign: 'center',
                verticalAlign: 'middle',
              }}
            >
              <TypeAnimation
                sequence={[
                  '💻 Ingeniero de Sistemas', 2000,
                  '🔐 Fan de la Ciberseguridad', 2000,
                  '🐍 Python Dev', 2000,
                  '⚡ Automatizo todo', 2000,
                  '⚙ Soporte TI Pro', 2000,
                  '🐧 Linux Lover', 2000,
                ]}
                wrapper="span"
                speed={15} // Más lento al escribir (valor permitido por la librería)
                deletionSpeed={75} // Más lento al borrar
                repeat={Infinity}
                cursor={true}
                style={{ display: 'inline' }}
              />
            </span>
          </AnimatedText>
          <div className="mt-4 max-w-[42rem] text-center">
            <p className="leading-normal text-blue-300 text-sm sm:text-base">
              ¡Hola!👋🏾 Soy Ingeniero de Sistemas, curioso por naturaleza, fanático de resolver problemas tecnológicos y apasionado por la ciberseguridad. 🚀
            </p>
          </div>

          <div className="flex flex-col mt-10 items-center justify-center sm:flex-row sm:space-x-4 gap-3">
            <AnimatedText delay={0.6}>
              <Link
                href={"https://github.com/fonroot01"}
                target="_blank"
                className={cn(buttonVariants({ size: "lg" }), "w-48 flex items-center justify-center")}
                aria-label="View Alfonso Mosquera's GitHub profile"
              >
                <Icons.gitHub className="w-4 h-4 mr-2" /> GitHub
              </Link>
            </AnimatedText>
            <AnimatedText delay={0.8}>
              <Link
                href={"https://www.linkedin.com/in/alfonso-ángel-mosquera-a-4a919b341"}
                target="_blank"
                className={cn(buttonVariants({ size: "lg" }), "w-48 flex items-center justify-center")}
                aria-label="View Alfonso Mosquera's LinkedIn profile"
              >
                <Icons.linkedin className="w-4 h-4 mr-2" /> LinkedIn
              </Link>
            </AnimatedText>
            <AnimatedText delay={1.0}>
              <a
                href={"/CV.pdf"}
                download
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "w-48 flex items-center justify-center bg-gray-200 text-black"
                )}
                aria-label="Download Alfonso Mosquera's CV"
              >
                <span className="w-4 h-4 mr-2">🫂​</span> Descargar CV
              </a>
            </AnimatedText>
          </div>
          <AnimatedText delay={1.2}>
            <div className="flex justify-center mt-0 mb-16">
              <ScrollButton />
            </div>
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
              <Icons.chevronDown className="mr-2 h-4 w-4" /> Ver todas
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>
      {/* Sección de Proyectos con estilo destacado */}
      <AnimatedSection
        direction="left"
        className="container space-y-6 bg-muted py-10 my-14"
        id="projects"
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
            className="text-muted-foreground text-lg sm:text-xl"
          >
            Desde scripts hasta apps, esto es lo que pasa cuando la curiosidad se junta con el teclado.
          </AnimatedText>
        </div>
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 py-4">
          {featuredExperiences.map((exp) => (
            <ProjectCard project={exp} key={exp.id} />
          ))}
        </div>
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/experience">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> Ver todas
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>
      <AnimatedSection
        direction="left"
        className="container space-y-6 bg-muted py-10 my-14"
        id="contributions"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y=4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {pagesConfig.contributions.title}
          </AnimatedText>
          {/* Eliminado el mensaje de descripción de contribuciones */}
        </div>
        <div className="mx-auto justify-center gap-4 md:w-full lg:grid-cols-3">
          <ContributionCard contributions={[
            {
              title: "Inventario de equipos TI",
              description: "Sistema de inventario para equipos de tecnología de la información.",
              link: "https://github.com/fonroot01/Inventario-de-equipos-Ti",
              repoOwner: "fonroot01",
              repo: "Inventario-de-equipos-TI",
              techStack: ["Python", "Tkinter"]
            },
            {
              title: "Droid-Specter",
              description: "Herramienta de análisis y automatización para dispositivos Android.",
              link: "https://github.com/fonroot01/Droid-Specter",
              repoOwner: "fonroot01",
              repo: "Droid-Specter",
              techStack: ["Python", "Android"]
            },
            {
              title: "USB-Doctor",
              description: "Utilidad para la protección y análisis de dispositivos USB.",
              link: "https://github.com/fonroot01/USB-Doctor",
              repoOwner: "fonroot01",
              repo: "USB-Doctor",
              techStack: ["Python", "USB"]
            },
            {
              title: "WinPyX",
              description: "Framework para automatización y utilidades en Windows usando Python.",
              link: "https://github.com/fonroot01/WinPyX",
              repoOwner: "fonroot01",
              repo: "WinPyX",
              techStack: ["Python", "Windows"]
            }
          ]} />
        </div>
        {/* Efecto Snake de GitHub Contributions con typewriter */}
        <div className="flex flex-col items-center justify-center my-8">
          <span
            style={{
              whiteSpace: 'nowrap',
              display: 'inline-block',
              width: '32ch',
              height: '1.5em',
              textAlign: 'center',
              verticalAlign: 'middle',
              fontWeight: 500,
              fontSize: '1.15rem',
              marginBottom: '0.5em',
              color: 'white',
              transition: 'color 0.3s',
            }}
            className="transition-colors duration-300 text-white dark:text-white"
          >
            <TypeAnimation
              sequence={[
                '🐍 Una serpiente que se come mis contribuciones...', 2200,
                '🧩 Cada cuadrito, una mini victoria', 2200,
                '👀 Mira cómo crece... mi jardín de commits', 2200,
              ]}
              wrapper="span"
              speed={15} // Más lento al escribir (valor permitido por la librería)
              deletionSpeed={75} // Más lento al borrar
              repeat={Infinity}
              cursor={true}
              style={{ display: 'inline' }}
            />
          </span>
          <img
            src="https://raw.githubusercontent.com/7oSkaaa/7oSkaaa/output/github-contribution-grid-snake.svg"
            alt="GitHub Contribution Snake Animation"
            style={{ maxWidth: '100%', height: 'auto', background: 'transparent' }}
            loading="lazy"
          />
        </div>
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/contributions">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> Ver todas
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>
      <style jsx global>{`
        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        .typewriter-cursor {
          font-weight: bold;
          color: #fff;
          font-size: inherit;
        }
      `}</style>
    </ClientPageWrapper>
  );
}
