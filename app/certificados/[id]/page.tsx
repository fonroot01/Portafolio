import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BackToList from '@/components/common/BackToList';
import { notFound } from 'next/navigation';
import certificates, { Certificate } from '../../../config/certificates';

interface Props {
  params: { id: string };
}

export default function CertificatePage({ params }: Props) {
  const id = parseInt(params.id, 10);
  const cert: Certificate | undefined = certificates.find((c: Certificate) => c.id === id);
  if (!cert) return notFound();

  return (
    <main className="min-h-screen bg-background text-foreground p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">{cert.title ?? cert.institution}</h1>
          <div className="flex items-center gap-3">
            <BackToList />
            <a
              href={cert.pdfPath}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-2 bg-primary text-primary-foreground rounded-md text-sm hover:opacity-95"
            >
              Abrir PDF
            </a>
          </div>
        </div>

        <div className="bg-card rounded-lg p-4 shadow-lg">
          <div className="w-full relative overflow-hidden rounded">
              <Image
                src={cert.previewImage}
                alt={`${cert.title ?? cert.institution}`}
                width={1200}
                height={850}
                className="w-full h-auto object-contain"
              />
            </div>
          <p className="mt-4 text-sm text-foreground/80">Emitido por: {cert.institution ?? cert.title} — {cert.year}</p>
        </div>
      </div>
    </main>
  );
}
