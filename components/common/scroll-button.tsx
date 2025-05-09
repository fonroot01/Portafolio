"use client";

import { Icons } from "./icons";

export default function ScrollButton() {
  const handleScrollToSkills = () => {
    const nextSection = document.getElementById("skills");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleScrollToSkills}
      className="cursor-pointer"
      aria-label="Scroll to next section"
    >
      <Icons.chevronDown className="h-6 w-6 mt-10" />
    </button>
  );
}
