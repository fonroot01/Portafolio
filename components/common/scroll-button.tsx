"use client";

import { Icons } from "./icons";

export default function ScrollButton({ targetId = "skills" }: { targetId?: string }) {
  const handleScroll = () => {
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleScroll}
      className="cursor-pointer"
      aria-label="Scroll to next section"
    >
      <Icons.chevronDown className="h-6 w-6 mt-10" />
    </button>
  );
}
