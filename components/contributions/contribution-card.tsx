import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { contributionsInterface } from "@/config/contributions";

interface ContributionCardProps {
  contributions: contributionsInterface[];
}

export default function ContributionCard({
  contributions,
}: ContributionCardProps) {
  return (
    <div className="mx-auto grid justify-center gap-3 sm:grid-cols-2 lg:grid-cols-3 static">
      {contributions.map((contribution, id) => (
        <a
          href={contribution.link}
          target="_blank"
          rel="noopener noreferrer"
          key={id}
          className="block rounded-lg border bg-background p-3 hover:bg-accent hover:text-accent-foreground transition-all min-h-[120px]"
        >
          <div className="flex flex-col h-full justify-between">
            <div>
              <div className="font-semibold text-base flex items-center gap-2 mb-1">
                <Icons.gitRepoIcon size={16} />
                {contribution.title}
              </div>
              <div className="text-xs text-muted-foreground mb-2 line-clamp-2">
                {contribution.description}
              </div>
              {contribution.techStack && (
                <div className="flex flex-wrap gap-1 mb-1">
                  {contribution.techStack.map((tech: string, idx: number) => (
                    <span key={idx} className="bg-primary/10 text-primary px-1.5 py-0.5 rounded text-[10px] font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <div className="flex justify-end mt-1">
              <Icons.externalLink size={16} className="text-muted-foreground" />
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
