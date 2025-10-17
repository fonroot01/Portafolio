import { Metadata } from "next";
import dynamic from "next/dynamic";
import { pagesConfig } from "@/config/pages";

export const metadata: Metadata = {
  title: pagesConfig.experience.metadata.title,
  description: pagesConfig.experience.metadata.description,
};

const ExperiencePageClient = dynamic(() => import("./ExperiencePageClient"), { ssr: false });

export default function ExperiencePage() {
  return <ExperiencePageClient />;
}
