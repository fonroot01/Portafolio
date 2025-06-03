import { labsData } from "@/config/labs";
import type { LabData } from "@/config/labs.d";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const lab = labsData.find((l: LabData) => l.slug === "john-the-ripper");
  if (!lab) return {};
  return {
    title: lab.title + " | Laboratorio de Ciberseguridad",
    description: lab.description,
  };
}

export default function JohnTheRipperPage() {
  const lab = labsData.find((l: LabData) => l.slug === "john-the-ripper");
  if (!lab) return null;
  return (
    <div className="prose dark:prose-invert max-w-none">
      <div dangerouslySetInnerHTML={{ __html: lab.details }} />
      
      {/* Galería de imágenes */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {lab.images?.map((image, index) => (
          <div key={index} className="relative aspect-video overflow-hidden rounded-lg border border-border">
            <img
              src={image}
              alt={`Paso ${index + 1} del laboratorio John the Ripper`}
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* Enlaces útiles */}
      {lab.links && lab.links.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Enlaces útiles</h3>
          <div className="flex flex-col gap-2">
            {lab.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 underline underline-offset-4"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
