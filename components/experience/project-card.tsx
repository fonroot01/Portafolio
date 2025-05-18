import Image from "next/image";
import Link from "next/link";

import { Icons } from "@/components/common/icons";
import ExperienceDescription from "@/components/experience/exp-description";
import { Button } from "@/components/ui/button";
import ChipContainer from "@/components/ui/chip-container";
import { ExperienceInterface } from "@/config/experience";

interface ProjectCardProps {
  project: ExperienceInterface;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-background rounded-lg shadow p-6 text-left flex flex-col justify-between w-full max-w-[350px] mx-auto border border-border">
      <div className="relative w-full h-48 flex items-center justify-center mb-4">
        <Image
          className="rounded-lg border border-border object-cover"
          src={project.companyLogoImg}
          alt={project.companyName}
          fill
          sizes="(max-width: 768px) 100vw, 350px"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="flex flex-col gap-2">
        <h5 className="text-lg font-bold tracking-tight text-foreground text-left">
          {project.id === "lame"
            ? "Auditoría Wi-Fi con Airgeddon"
            : project.companyName}
        </h5>
        <div className="min-h-[100px]">
          <ExperienceDescription
            paragraphs={[project.shortDescription]}
            bullets={project.descriptionDetails.bullets.slice(0, 2)}
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-start gap-2 mb-6 mt-4">
        {project.techStack && project.techStack.map((tech, idx) => (
          <span key={idx} className="bg-primary/10 text-primary px-2 py-0.5 rounded text-xs font-medium">{tech}</span>
        ))}
      </div>
      <div className="flex items-center justify-between mt-auto">
        <Link href={`/experience/${project.id}`} className="w-full">
          <span className="block text-center bg-muted text-foreground px-4 py-2 rounded font-semibold border border-border hover:bg-muted/80 transition-colors w-full cursor-pointer">
            Leer más
          </span>
        </Link>
        <div className="p-2 rounded-full bg-background border border-border ml-2">
          {project.type === "Personal Project" ? (
            <Icons.userFill className="h-4 w-4" />
          ) : (
            <Icons.work className="h-4 w-4" />
          )}
        </div>
      </div>
    </div>
  );
}
