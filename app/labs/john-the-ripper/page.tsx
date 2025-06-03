'use client';

import React from 'react';
import Image from 'next/image';

export default function JohnthereaperLab() {
  return (
    <div className="container py-12 px-4 mx-auto max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center">
        Auditoría de contraseñas en archivos .rar utilizando John the Ripper
      </h1>

      {/* Objetivo del laboratorio */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3">Objetivo del laboratorio</h2>
        <hr className="mb-6 border-t border-border" />
        <p className="text-foreground text-justify">
          Aplicar un ataque de diccionario con John the Ripper para evaluar la fortaleza de las contraseñas en un archivo .rar. El laboratorio demuestra cómo obtener el hash del archivo, emplear una lista de contraseñas común (como rockyou.txt) y recuperar la contraseña mediante fuerza bruta controlada.
        </p>
      </section>

      {/* Herramientas utilizadas */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3">Herramientas utilizadas</h2>
        <hr className="mb-6 border-t border-border" />
        <ul className="list-disc pl-6 space-y-2 text-foreground">
          <li><b>John the Ripper</b> (con soporte para archivos .rar)</li>
          <li><b>rar2john</b> (utilidad para generar hashes de archivos .rar)</li>
          <li><b>rockyou.txt</b> (lista de contraseñas comúnmente utilizada)</li>
          <li><b>Kali Linux</b> o una distribución GNU/Linux compatible</li>
        </ul>
      </section>

      {/* Procedimiento paso a paso */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3">Procedimiento paso a paso</h2>
        <hr className="mb-6 border-t border-border" />
        <div className="space-y-10">
          {/* Paso 1 */}
          <div>
            <h3 className="text-xl font-semibold mb-2">1. Crear archivo .rar protegido con contraseña</h3>
            <p className="mb-4">Antes de comenzar, crea un archivo .rar y asígnale una contraseña segura.</p>
            <div className="flex justify-center my-4">
              <Image src={"/lab1/johntheripper/1_colocandole_contraseña_al_rar.png"} alt="Colocando contraseña al archivo .rar" width={500} height={320} className="rounded-lg shadow" />
            </div>
          </div>
          {/* Paso 2 */}
          <div>
            <h3 className="text-xl font-semibold mb-2">2. Preparar el entorno</h3>
            <p className="mb-4">Instalar las herramientas necesarias:</p>
            <div className="bg-muted p-4 rounded-md my-2 overflow-x-auto">
              <pre className="text-sm"><code>sudo apt update && sudo apt install john rar2john</code></pre>
            </div>
          </div>

            {/* Paso 3 */}
          <div>
            <h3 className="text-xl font-semibold mb-2">3. Descomprimir el diccionario Rockyou</h3>
            <p className="mb-4">Rockyou.txt viene comprimido por defecto en muchas distribuciones de Kali Linux (y otras distros enfocadas en seguridad), para descomprimirlo puedes hacerlo con:</p>
            <div className="bg-muted p-4 rounded-md my-2 overflow-x-auto">
              <pre className="text-sm"><code>gzip -d /usr/share/wordlists/rockyou.txt.gz</code></pre>
            </div>
            <div className="flex justify-center my-4">
              <Image src={"/lab1/johntheripper/3_descomprimiendo_diccionario.png"} alt="Descomprimiendo el diccionario rockyou.txt" width={500} height={320} className="rounded-lg shadow" />
            </div>
          </div>

          {/* Paso 4 */}
          <div>
            <h3 className="text-xl font-semibold mb-2">4. Extraer el hash del archivo .rar</h3>
            <p className="mb-4">Utiliza rar2john para obtener el hash del archivo protegido:</p>
            <div className="bg-muted p-4 rounded-md my-2 overflow-x-auto">
              <pre className="text-sm"><code>rar2john archivo_protegido.rar &gt; prueba1.txt</code></pre>
            </div>
            <div className="flex justify-center my-4">
              <Image src={"/lab1/johntheripper/4_extraer_hash.png"} alt="Extraer hash" width={500} height={320} className="rounded-lg shadow" />
            </div>
          </div>
          {/* Paso 5 */}
          <div>
            <h3 className="text-xl font-semibold mb-2">5. Ejecutar ataque de diccionario con John the Ripper</h3>
            <p className="mb-4">Utiliza el diccionario rockyou.txt para intentar recuperar la contraseña:</p>
            <div className="bg-muted p-4 rounded-md my-2 overflow-x-auto">
              <pre className="text-sm"><code>john --wordlist=/usr/share/wordlists/rockyou.txt prueba1.txt</code></pre>
            </div>
            <div className="flex justify-center my-4">
              <Image src={"/lab1/johntheripper/5_ejecutar_ataque de_diccionario.png"} alt="Ejecutar ataque de diccionario" width={500} height={320} className="rounded-lg shadow" />
            </div>
          </div>
          {/* Paso 6 */}
          <div>
            <h3 className="text-xl font-semibold mb-2">6. Contraseña recuperada con éxito</h3>
            <p className="mb-4">Contraseña recuperada exitosamente mediante ataque de diccionario, validando la eficacia del diccionario Rockyou.txt y la configuración del entorno, Para mostrar las contraseñas que John the Ripper ya ha descifrado, usa el siguiente comando:</p>
            <div className="bg-muted p-4 rounded-md my-2 overflow-x-auto">
              <pre className="text-sm"><code>john --show hash.txt</code></pre>
            </div>
            <div className="flex justify-center my-4">
              <Image src={"/lab1/johntheripper/6_Verifica_los_resultados.png"} alt="Verificando los resultados" width={500} height={320} className="rounded-lg shadow" />
            </div>
          </div>
        </div>
      </section>

      {/* Resultados esperados */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3">Resultados esperados</h2>
        <hr className="mb-6 border-t border-border" />
        <p className="text-foreground text-justify">
          Si la contraseña está en el diccionario, John the Ripper mostrará la contraseña recuperada del archivo .rar. En caso contrario, el ataque no tendrá éxito y se deberá utilizar otro método o diccionario.
        </p>
      </section>

      {/* Conclusiones */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3">Conclusiones</h2>
        <hr className="mb-6 border-t border-border" />
        <ul className="list-disc pl-6 space-y-2 text-foreground">
          <li>Las contraseñas simples o comunes pueden romperse fácilmente mediante ataques de diccionario.</li>
          <li>La seguridad de un archivo .rar depende en gran medida de la complejidad de la contraseña.</li>
          <li>Herramientas como John the Ripper permiten comprender cómo operan los ataques de fuerza bruta y la importancia de implementar contraseñas seguras.</li>
        </ul>
      </section>

      {/* Aviso legal */}
      <div className="bg-destructive/10 p-6 rounded-lg mt-8">
        <h4 className="text-lg font-semibold mb-2 text-destructive">⚠️ Aviso legal</h4>
        <p className="text-foreground">
          Este laboratorio fue realizado con fines exclusivamente educativos y dentro de un entorno de pruebas controlado. No se promueve ni se justifica su uso sobre sistemas reales o sin la debida autorización.
        </p>
      </div>
    </div>
  );
}