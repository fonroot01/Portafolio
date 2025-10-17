import { Metadata } from "next";
import dynamic from "next/dynamic";
import { pagesConfig } from "@/config/pages";

export const metadata: Metadata = {
  title: pagesConfig.skills.metadata.title,
  description: pagesConfig.skills.metadata.description,
};

const SkillsPageClient = dynamic(() => import("./SkillsPageClient"), { ssr: false });

export default function SkillsPage() {
  return <SkillsPageClient />;
}
