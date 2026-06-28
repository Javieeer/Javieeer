import FadeIn from "../ui/fade-in";

export default function Contact() {
  return (
    <FadeIn>

      <section
        id="contact"
        className="min-h-screen flex items-center py-32"
      >
        <div className="max-w-7xl mx-auto px-8 w-full">

          <p className="text-zinc-500 mb-6">
            Contacto
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-12">
            Construyamos algo
            <br />
            juntos.
          </h2>

          <p className="text-xl text-zinc-400 max-w-2xl mb-16 leading-relaxed">
            Actualmente estoy abierto a oportunidades de práctica,
            colaboraciones y nuevos retos en desarrollo de software.
          </p>

          <div className="space-y-6">

            <a
              href="mailto:javierzapata.dev@gmail.com"
              className="block text-2xl hover:text-zinc-400 transition-colors"
            >
              javierzapata.dev@gmail.com
            </a>

            <a
              href="https://github.com/Javieeer"
              target="_blank"
              className="block text-2xl hover:text-zinc-400 transition-colors"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/javieerzapata"
              target="_blank"
              className="block text-2xl hover:text-zinc-400 transition-colors"
            >
              LinkedIn
            </a>

          </div>

        </div>
      </section>
    </FadeIn>
  );
}