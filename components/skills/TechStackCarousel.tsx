import Image from "next/image";
import React from "react";

const techs = [
  { name: "Bash", src: "/logos_svg_stacks/bash.svg" },
  { name: "Git", src: "/logos_svg_stacks/git.svg" },
  { name: "GitHub", src: "/logos_svg_stacks/github.svg" },
  { name: "Kali Linux", src: "/logos_svg_stacks/Kali, Linux.svg" },
  { name: "Linux", src: "/logos_svg_stacks/linux.svg" },
  { name: "Python", src: "/logos_svg_stacks/python.svg" },
  { name: "SQL Server", src: "/logos_svg_stacks/sqlserver.svg" },
  { name: "VirtualBox", src: "/logos_svg_stacks/VirtualBox.svg" },
  { name: "VMware", src: "/logos_svg_stacks/Vmware.svg" },
  { name: "VSCode", src: "/logos_svg_stacks/vscode.svg" },
  { name: "Windows Server", src: "/logos_svg_stacks/Windows Server.svg" },
];

function InfiniteCarousel({ direction = "right" }: { direction?: "right" | "left" }) {
  return (
    <div className="overflow-hidden w-full py-4">
      <div
        className={`flex gap-8 animate-marquee-${direction} hover:[animation-play-state:paused]`}
        style={{ minWidth: "max-content" }}
      >
        {[...techs, ...techs].map((tech, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center bg-background rounded-xl shadow-md border border-muted px-6 py-4 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <Image src={tech.src} alt={tech.name} width={60} height={60} className="mb-2" />
            <span className="text-sm font-semibold text-center mt-1">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TechStackCarousel() {
  return (
    <section className="w-full max-w-5xl mx-auto my-12">
      <h2 className="text-3xl font-bold mb-8 text-center">⚙️ Stack Tecnológico</h2>
      <InfiniteCarousel direction="right" />
      <InfiniteCarousel direction="left" />
    </section>
  );
}

// Animaciones Tailwind personalizadas necesarias:
// .animate-marquee-right { animation: marquee-right 30s linear infinite; }
// .animate-marquee-left { animation: marquee-left 30s linear infinite; }
// @keyframes marquee-right { 0% { transform: translateX(0); } 100% { transform: translateX(100%); } }
// @keyframes marquee-left { 0% { transform: translateX(0); } 100% { transform: translateX(-100%); } }
