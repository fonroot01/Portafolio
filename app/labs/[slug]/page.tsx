import { notFound } from "next/navigation";
import { labsData } from "../../../config/labs";
import type { LabData } from "../../../config/labs.d";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const lab = labsData.find((l: LabData) => l.slug === params.slug);
  if (!lab) return {};
  return {
    title: lab.title + " | Laboratorio de Ciberseguridad",
    description: lab.description,
  };
}

export default function LabDetailPage({ params }: { params: { slug: string } }) {
  const lab = labsData.find((l: LabData) => l.slug === params.slug);
  if (!lab) return notFound();

  return (
    <div className="container py-10">
      <h1 className="font-heading text-4xl mb-4">{lab.title}</h1>
      <div className="mb-4 text-muted-foreground">{lab.date}</div>
      <div className="mb-6">{lab.badges?.map((b: string) => (
        <span key={b} className="inline-block bg-primary/10 text-primary px-2 py-0.5 rounded text-xs font-medium mr-2">{b}</span>
      ))}</div>
      <div className="prose prose-invert max-w-none mb-8">
        <p>{lab.description}</p>
        {lab.details && <div dangerouslySetInnerHTML={{ __html: lab.details }} />}
      </div>
      {lab.images?.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {lab.images.map((img: string, i: number) => (
            <img key={i} src={img} alt={lab.title + " imagen " + (i + 1)} className="rounded shadow w-full object-cover" />
          ))}
        </div>
      )}
      {lab.links?.length > 0 && (
        <div className="mt-6">
          <h3 className="font-bold mb-2">Enlaces útiles:</h3>
          <ul className="list-disc ml-6">
            {lab.links.map((link: { label: string; url: string }) => (
              <li key={link.url}><a href={link.url} className="underline text-primary" target="_blank" rel="noopener noreferrer">{link.label}</a></li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
