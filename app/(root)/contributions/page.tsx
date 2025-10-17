import { Metadata } from "next";
import dynamic from "next/dynamic";
import { pagesConfig } from "@/config/pages";

export const metadata: Metadata = {
  title: pagesConfig.contributions.metadata.title,
  description: "Repos públicos con soluciones reales, ideas en desarrollo y aprendizaje continuo.",
};

const ContributionsPageClient = dynamic(() => import("./ContributionsPageClient"), { ssr: false });

export default function ContributionsPage() {
  return <ContributionsPageClient />;
}
