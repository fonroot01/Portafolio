import { Metadata } from "next";
import dynamic from "next/dynamic";
import { pagesConfig } from "@/config/pages";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `${pagesConfig.career.metadata.title} | Interactive Developer Timeline`,
  description: `${pagesConfig.career.metadata.description} This interactive career timeline showcases professional experience in a visually appealing way. Part of our open-source Next.js portfolio template.`,
  keywords: [
    "career timeline template",
    "interactive timeline",
    "developer experience",
    "portfolio template",
    "Next.js",
  ],
  alternates: {
    canonical: `${siteConfig.url}/career`,
  },
};

const CareerPageClient = dynamic(() => import("./CareerPageClient"), { ssr: false });

export default function CareerPage() {
  return <CareerPageClient />;
}
