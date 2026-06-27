export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="backdrop-blur-md bg-black/40 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">

          {/* Logo */}
          <div>
            <h1 className="font-semibold text-lg">
              Javier Zapata
            </h1>
          </div>

          {/* Navegación */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-400">

            <a href="#about" className="hover:text-white transition">
              Sobre mí
            </a>

            <a href="#stack" className="hover:text-white transition">
              Stack
            </a>

            <a href="#projects" className="hover:text-white transition">
              Proyectos
            </a>

            <a href="#certifications" className="hover:text-white transition">
              Certificaciones
            </a>

            <a href="#contact" className="hover:text-white transition">
              Contacto
            </a>

          </nav>

          {/* Idioma */}
          <div className="flex gap-2 text-sm">
            <button className="text-white">
              ES
            </button>

            <span className="text-zinc-600">
              |
            </span>

            <button className="text-zinc-500 hover:text-white">
              EN
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}