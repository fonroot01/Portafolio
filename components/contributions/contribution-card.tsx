import Link from "next/link";
import Image from "next/image";

import { Icons } from "@/components/common/icons";
import { contributionsInterface } from "@/config/contributions";

interface ContributionCardProps {
  contributions: contributionsInterface[];
}

export default function ContributionCard({
  contributions,
}: ContributionCardProps) {
  return (
    <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
      {contributions.map((contribution, id) => (
        <a
          href={contribution.link}
          target="_blank"
          rel="noopener noreferrer"
          key={id}
          className="block rounded-lg border bg-background p-4 hover:bg-accent hover:text-accent-foreground transition-all min-h-[150px] flex flex-col items-center justify-between text-center"
        >
          <div className="w-full">
            <div className="font-semibold text-base flex items-center gap-2 mb-2 justify-center">
              {contribution.title?.includes("Cybersecurity") && (
                <Image src="/googlelogo.png" alt="Google Logo" width={20} height={20} />
              )}
              {contribution.title?.includes("resolver problemas") && (
                <Image src="/logouci.png" alt="UCI Logo" width={20} height={20} />
              )}
              {contribution.title?.includes("Play It Safe") && (
                <Image src="/googlelogo.png" alt="Google Logo" width={20} height={20} />
              )}
              {contribution.title}
            </div>
            <div className="text-xs text-muted-foreground mb-3 line-clamp-2">
              {contribution.description}
            </div>
            {contribution.techStack && (
              <div className="flex flex-wrap gap-2 justify-center">
                {contribution.techStack.map((tech: string, idx: number) => (
                  <span key={idx} className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
          <div className="flex justify-end w-full mt-2">
            <Icons.externalLink size={16} className="text-muted-foreground" />
          </div>
        </a>
      ))}
    </div>
  );
}
