import Rating from "@/components/skills/rating";
import { skillsInterface } from "@/config/skills";

interface SkillsCardProps {
  skills: skillsInterface[];
}

export default function SkillsCard({ skills }: SkillsCardProps) {
  return (
    // Centrar la cuadrícula y las tarjetas, y aprovechar mejor el espacio
    <div className="mx-auto grid justify-center items-center gap-2 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl">
      {skills.map((skill, id) => (
        <div
          key={id}
          className="relative overflow-hidden rounded-lg border bg-background p-1 flex items-center justify-center"
        >
          <div className="flex h-[180px] w-full flex-col justify-between items-center rounded-md p-3 sm:h-[180px]">
            <skill.icon size={40} />
            <div className="space-y-1 text-center w-full">
              <h3 className="font-bold text-base">{skill.name}</h3>
              <p className="text-xs text-muted-foreground">{skill.description}</p>
              <Rating stars={skill.rating} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
