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
              className="inline-flex items-center gap-2 px-3 py-2 bg-primary text-primary-foreground rounded-md text-sm hover:opacity-95 transition h-9 min-w-[88px] leading-none"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
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
