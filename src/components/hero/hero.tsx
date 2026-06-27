export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-5xl px-8 text-center">

        <p className="text-zinc-500 text-lg mb-12">
          Hola, soy
        </p>

        <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-20">
          Javier Zapata
        </h1>

        <h2 className="text-3xl md:text-5xl font-semibold leading-tight mb-16">
          Estudiante de Ingeniería de Sistemas
          <br />
          Construyendo productos reales
        </h2>

        <p className="max-w-2xl mx-auto text-zinc-400 text-xl md:text-2xl leading-relaxed mb-24">
          Construyendo software con enfoque
          <br />
          en experiencia, calidad e innovación.
        </p>

        <p className="text-zinc-500 italic text-lg mb-12">
          La calidad primero.
          <br />
          Las soluciones siempre.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center mt-12">
          <button className="px-8 py-3 bg-white text-black rounded-xl font-medium">
            Ver proyectos
          </button>

          <button className="px-8 py-3 border border-zinc-700 rounded-xl font-medium">
            Descargar CV
          </button>
        </div>
      </div>
    </section>
  );
}