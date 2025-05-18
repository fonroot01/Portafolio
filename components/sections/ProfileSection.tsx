import React from "react";
import AboutMe from "../AboutMe";

const ProfileSection = () => {
  return (
    <section className="min-h-screen flex flex-col">
      <div className="container mx-auto pt-8">
        <AboutMe />
        <div className="mt-12 pb-12">
          <h2 className="text-3xl font-bold mb-10 text-center text-foreground">Certificados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Fundamentos de la ciberseguridad (Google) */}
            <div className="rounded-xl border border-border bg-muted/30 p-6 shadow-md flex flex-col items-center relative transition-colors duration-300">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm">
                <img src="/googlelogo.png" alt="Google" className="w-8 h-8 object-contain" onError={(e) => {e.currentTarget.style.display='none';}} />
              </div>
              <span className="font-bold text-lg text-foreground text-center">Fundamentos de la ciberseguridad</span>
              <a href="/Fundamentos de la ciberseguridad.pdf" target="_blank" rel="noopener noreferrer" className="mt-3 text-primary underline underline-offset-2 text-sm">Ver certificado</a>
            </div>
            {/* Juega a los Seguro, Gestiona los riesgos de seguridad (Google) */}
            <div className="rounded-xl border border-border bg-muted/30 p-6 shadow-md flex flex-col items-center relative transition-colors duration-300">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm">
                <img src="/googlelogo.png" alt="Google" className="w-8 h-8 object-contain" onError={(e) => {e.currentTarget.style.display='none';}} />
              </div>
              <span className="font-bold text-lg text-foreground text-center">Juega a los Seguro, Gestiona los riesgos de seguridad</span>
              <a href="/Juega a los Seguro, Gestiona los riesgos de seguridad.pdf" target="_blank" rel="noopener noreferrer" className="mt-3 text-primary underline underline-offset-2 text-sm">Ver certificado</a>
            </div>
            {/* Cómo resolver problemas y tomar decisiones con eficacia (UCI) */}
            <div className="rounded-xl border border-border bg-muted/30 p-6 shadow-md flex flex-col items-center relative transition-colors duration-300">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm">
                <img src="/logouci.png" alt="UCI" className="w-8 h-8 object-contain" onError={(e) => {e.currentTarget.style.display='none';}} />
              </div>
              <span className="font-bold text-lg text-foreground text-center">Cómo resolver problemas y tomar decisiones con eficacia</span>
              <a href="/Cómo resolver problemas y tomar decisiones con eficacia.pdf" target="_blank" rel="noopener noreferrer" className="mt-3 text-primary underline underline-offset-2 text-sm">Ver certificado</a>
            </div>
            {/* Certificado del diplomado en ciberseguridad y desarrollo organizacional (Americana) */}
            <div className="rounded-xl border border-border bg-muted/30 p-6 shadow-md flex flex-col items-center relative transition-colors duration-300">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm">
                <img src="/logoamericana.png" alt="Americana" className="w-8 h-8 object-contain" onError={(e) => {e.currentTarget.style.display='none';}} />
              </div>
              <span className="font-bold text-lg text-foreground text-center">Diplomado en ciberseguridad y desarrollo organizacional</span>
              <a href="/Certificado_del_diplomado_en_ciberseguridad_y_desarrollo_organizacional_.pdf" target="_blank" rel="noopener noreferrer" className="mt-3 text-primary underline underline-offset-2 text-sm">Ver certificado</a>
            </div>
            {/* Diplomado en seguridad informatica (Americana) */}
            <div className="rounded-xl border border-border bg-muted/30 p-6 shadow-md flex flex-col items-center relative transition-colors duration-300">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm">
                <img src="/logoamericana.png" alt="Americana" className="w-8 h-8 object-contain" onError={(e) => {e.currentTarget.style.display='none';}} />
              </div>
              <span className="font-bold text-lg text-foreground text-center">Diplomado en seguridad informática</span>
              <a href="/Diplomado en seguridad informatica.pdf" target="_blank" rel="noopener noreferrer" className="mt-3 text-primary underline underline-offset-2 text-sm">Ver certificado</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
