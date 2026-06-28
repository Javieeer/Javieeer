import FadeIn from "../ui/fade-in";

export default function Certifications() {
  return (
    <FadeIn>

      <section
        id="certifications"
        className="min-h-screen flex items-center py-32"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 w-full">

          <p className="text-zinc-500 mb-6">
            Certificaciones
          </p>

          <h2 className="text-3xl md:text-6xl font-bold mb-16 md:mb-20">
            Formación y
            <br />
            aprendizaje continuo.
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Stanford */}
            <div className="
              border
              border-zinc-800
              rounded-3xl
              p-10
              bg-zinc-950
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-zinc-700"
            >
              <p className="text-zinc-500 mb-4">
                2025
              </p>

              <h3 className="text-2xl font-semibold mb-2">
                Code in Place
              </h3>

              <p className="text-zinc-400 mb-6">
                Stanford University
              </p>

              <p className="text-zinc-500">
                Python · Algoritmos · Programación
              </p>
            </div>

            {/* Espacio para futuras certificaciones */}
            <div className="border border-dashed border-zinc-800 rounded-3xl p-6 md:p-10 flex items-center justify-center">
              <p className="text-zinc-600">
                Próximas certificaciones
              </p>
            </div>

          </div>

        </div>
      </section>
    </FadeIn>
  );
}