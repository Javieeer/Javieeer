export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center py-32"
    >
      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-[1.6fr_1fr] gap-20">

        {/* Texto */}
        <div>
          <p className="text-zinc-500 mb-6">
            Sobre mí
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Construyendo software
            <br />
            con propósito.
          </h2>

          <div className="space-y-8 text-xl leading-relaxed text-zinc-400">

            <p>
              Soy estudiante de Ingeniería de Sistemas
              con interés en el desarrollo de software,
              la arquitectura de aplicaciones y la
              construcción de productos digitales.
            </p>

            <p>
              Disfruto transformar ideas en soluciones
              reales, prestando especial atención a la
              experiencia de usuario, la calidad del
              código y la escalabilidad.
            </p>

            <p>
              Actualmente continúo fortaleciendo mis
              habilidades en desarrollo full stack,
              diseño de sistemas y buenas prácticas
              de ingeniería.
            </p>

            <blockquote className="border-l-2 border-zinc-700 pl-6 italic text-zinc-500">
              {'"Creo que el mejor software es el que'}
              {' resuelve problemas reales de forma simple."'}
            </blockquote>

          </div>
        </div>

        {/* Tarjeta */}
        <div className="flex items-center justify-center">

          <div className="w-full max-w-md p-10 border border-zinc-800 rounded-3xl bg-zinc-950">

            <h3 className="text-2xl font-semibold mb-2">
              Javier Zapata
            </h3>

            <div className="space-y-2 text-zinc-500 mb-10">
              <p>🎓 Ingeniería de Sistemas · 5° semestre</p>
              <p>📍 Colombia</p>
              <p>💻 Enfoque en desarrollo Full Stack</p>
              <p>🚀 Construyendo productos reales</p>
            </div>

            <div>
              <h4 className="font-medium mb-5">
                Intereses
              </h4>

              <div className="flex flex-wrap gap-3">

                <span className="px-4 py-2 rounded-full border border-zinc-800 text-zinc-300">
                  Full Stack
                </span>

                <span className="px-4 py-2 rounded-full border border-zinc-800 text-zinc-300">
                  Arquitectura
                </span>

                <span className="px-4 py-2 rounded-full border border-zinc-800 text-zinc-300">
                  UX
                </span>

                <span className="px-4 py-2 rounded-full border border-zinc-800 text-zinc-300">
                  Calidad
                </span>

                <span className="px-4 py-2 rounded-full border border-zinc-800 text-zinc-300">
                  Escalabilidad
                </span>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}