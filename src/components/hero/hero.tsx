import FadeIn from "../ui/fade-in";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="max-w-5xl mx-auto px-6 md:px-8 text-center">

        <FadeIn delay={0}>
          <p className="text-zinc-500 text-lg mb-8">
            Hola, soy
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-16">
            Javier Zapata
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h2 className="text-2xl md:text-5xl font-semibold leading-tight mb-16">
            Estudiante de Ingeniería de Sistemas
            <br />
            Construyendo productos reales
          </h2>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-zinc-400 text-xl md:text-2xl leading-relaxed mb-20">
            Construyendo software con enfoque
            <br />
            en experiencia, calidad e innovación.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p className="text-zinc-600 italic text-lg">
            La calidad primero.
            <br />
            Las soluciones siempre.
          </p>
        </FadeIn>

        <FadeIn delay={0.5}>
          <div className="flex flex-col md:flex-row gap-4 justify-center mt-12">
              <button className="transition-all duration-300 hover:-translate-y-1 px-8 py-3 bg-white text-black rounded-xl font-medium">
                Ver proyectos
              </button>

              <button className="transition-all duration-300 hover:-translate-y-1 px-8 py-3 border border-zinc-700 rounded-xl font-medium">
                Descargar CV
              </button>
            </div>
        </FadeIn>

      </div>
    </section>
  );
}