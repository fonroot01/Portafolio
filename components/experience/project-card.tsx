import Image from "next/image";
import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import ChipContainer from "@/components/ui/chip-container";
import { ExperienceInterface } from "@/config/experience";

interface ProjectCardProps {
  project: ExperienceInterface;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="relative flex flex-col bg-background border border-border rounded-lg p-6 w-full max-w-[350px] min-h-[420px] mx-auto">
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
      <div className="flex flex-col gap-2 mb-4">
        <h5 className="text-lg font-bold tracking-tight text-foreground text-left">{project.companyName}</h5>
        {project.id === "droid-specter" ? (
          <p className="line-clamp-3 font-normal text-muted-foreground text-left">
            Droid Specter es una herramienta de análisis y auditoría de dispositivos Android
          </p>
        ) : project.id === "invensoft" ? (
          <p className="line-clamp-3 font-normal text-muted-foreground text-left">
            Esta es una aplicación de escritorio desarrollada en Python para gestionar inventario de equipos TI.
          </p>
        ) : (
          <p className="line-clamp-3 font-normal text-muted-foreground text-left">{project.shortDescription}</p>
        )}
      </div>
      <div className="flex flex-wrap justify-start gap-2 mb-6">
        {project.techStack && project.techStack.map((tech, idx) => (
          <span key={idx} className="bg-primary/10 text-primary px-2 py-0.5 rounded text-xs font-medium">{tech}</span>
        ))}
      </div>
      <div className="flex items-center justify-between mt-auto">
        <Link href={`/experience/${project.id}`}>
          <Button variant={"default"}>
            Leer más
            <Icons.chevronRight className="w-4 ml-1" />
          </Button>
        </Link>
        <div className="p-2 rounded-full bg-background border border-border">
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
