import Image from "next/image";
import React from "react";

const techs1 = [
  { name: "Python", src: "/logos_svg_stacks/python.svg" },
  { name: "Git", src: "/logos_svg_stacks/git.svg" },
  { name: "GitHub", src: "/logos_svg_stacks/github.svg" },
  { name: "Bash", src: "/logos_svg_stacks/bash.svg" },
  { name: "Power Shell", src: "/logos_svg_stacks/powershell.svg" },
  { name: "Node.js", src: "/logos_svg_stacks/nodejs.svg" },
];

const techs2 = [
  { name: "Linux", src: "/logos_svg_stacks/linux.svg" },
  { name: "Kali Linux", src: "/logos_svg_stacks/Kali, Linux.svg" },
  { name: "Windows Server", src: "/logos_svg_stacks/Windows Server.svg" },
  { name: "SQL Server", src: "/logos_svg_stacks/sqlserver.svg" },
  { name: "Vercel", src: "/logos_svg_stacks/vercel.svg" },
  { name: "Next.js", src: "/logos_svg_stacks/nextjs.svg" },
];

function InfiniteCarousel({ techs, direction = "right" }: { techs: { name: string; src: string }[]; direction?: "right" | "left" }) {
  return (
    <div className="overflow-hidden w-full py-4 group">
      <div
        className={`marquee-track ${direction === "left" ? "marquee-left" : "marquee-right"} group-hover:[animation-play-state:paused]`}
      >
        {[...techs, ...techs].map((tech, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center bg-background rounded-xl shadow-md border border-muted px-6 py-4 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <Image src={tech.src} alt={tech.name} width={60} height={60} className={`mb-2 ${tech.name === "Kali Linux" ? "!w-[60px] !h-[60px] object-contain" : ""}`} />
            <span className="text-sm font-semibold text-center mt-1">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProfileTechStack() {
  return (
    <section className="w-full max-w-4xl mx-auto my-10 select-none">
      <h2 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-2">
        <span className="inline-block gear-icon">
          <span style={{fontSize: 32, display: 'inline-block'}} role="img" aria-label="tuerca">⚙️</span>
        </span>
        Stack Tecnológico
      </h2>
      <div className="group">
        <InfiniteCarousel techs={techs1} direction="right" />
        <InfiniteCarousel techs={techs2} direction="left" />
      </div>
    </section>
  );
}

/*
Agrega en tu CSS global (globals.css):

.marquee-track {
  display: flex;
  gap: 2rem;
  width: max-content;
}
.marquee-right {
  animation: marquee-right 18s linear infinite;
}
.marquee-left {
  animation: marquee-left 18s linear infinite;
}
@keyframes marquee-right {
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}
@keyframes marquee-left {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
*/
