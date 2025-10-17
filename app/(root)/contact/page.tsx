import { Metadata } from "next";
import dynamic from "next/dynamic";
import { pagesConfig } from "@/config/pages";

export const metadata: Metadata = {
  title: pagesConfig.contact.metadata.title,
  description: pagesConfig.contact.metadata.description,
};

const ContactPageClient = dynamic(() => import("./ContactPageClient"), { ssr: false });

export default function ContactPage() {
  return <ContactPageClient />;
}
