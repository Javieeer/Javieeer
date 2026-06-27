export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center">
      <div className="max-w-4xl px-6">

        <p className="text-lg text-zinc-400 mb-6">
          Hola, soy
        </p>

        <h1 className="text-6xl md:text-8xl font-bold mb-8">
          Javier Zapata
        </h1>

        <h2 className="text-3xl md:text-5xl font-semibold mb-10">
          Ingeniero de Sistemas
          <br />
          en Formación
        </h2>

        <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed mb-12">
          Construyendo software con enfoque
          <br />
          en experiencia, calidad e innovación.
        </p>

        <div className="mb-16">
          <p className="italic text-zinc-500">
            Quality first. Solutions always.
          </p>
        </div>

      </div>
    </section>
  );
}