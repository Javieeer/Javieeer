import FadeIn from "../ui/fade-in";

export default function Projects() {
  return (
    <FadeIn>

      <section
        id="projects"
        className="min-h-screen py-32"
      >
        <div className="max-w-7xl mx-auto px-8">

          <p className="text-zinc-500 mb-6">
            Proyectos
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-16 md:mb-20">
            Productos construidos
            <br />
            para resolver problemas reales.
          </h2>

          <div className="grid gap-8">

          {/* Proyecto principal */}
          <div className="border border-zinc-800 rounded-3xl p-6 md:p-10 transition-all duration-300 hover:-translate-y-2 hover:border-zinc-700">
            <p className="text-zinc-500 mb-4">
              Proyecto destacado
            </p>

            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Rendimoto
            </h3>

            <p className="text-zinc-400 mb-8 max-w-2xl">
              Plataforma para la gestión logística de domicilios,
              repartidores y operaciones empresariales.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 border border-zinc-800 rounded-full">
                Next.js
              </span>
              <span className="px-4 py-2 border border-zinc-800 rounded-full">
                Spring Boot
              </span>
              <span className="px-4 py-2 border border-zinc-800 rounded-full">
                PostgreSQL
              </span>
            </div>

            <button>
              Ver proyecto →
            </button>
          </div>

          {/* Secundarios */}
          <div className="grid md:grid-cols-2 gap-8 ">

            <div className="border border-zinc-800 rounded-3xl p-5 md:p-8 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-zinc-700">
              <h3 className="text-2xl font-semibold mb-4">
                Inventario Bedoya
              </h3>

              <p className="text-zinc-400">
                Sistema de gestión de inventarios y productos.
              </p>
            </div>

            <div className="border border-zinc-800 rounded-3xl p-5 md:p-8 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-zinc-700">
              <h3 className="text-2xl font-semibold mb-4">
                Tic Tac Toe
              </h3>

              <p className="text-zinc-400">
                Juego desarrollado en Python para Code in Place.
              </p>
            </div>

          </div>
        </div>

        </div>
      </section>
    </FadeIn>
  );
}