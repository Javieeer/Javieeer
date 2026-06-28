import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/navigation/footer";
import Link from "next/link";
import Image from "next/image";

export default function RendimotoPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-8 py-32">
        <Link
          href="/"
          className="
            inline-flex
            items-center
            gap-2
            text-zinc-500
            hover:text-white
            transition
            mb-12
          "
        >
          ← Volver al portfolio
        </Link>

        <p className="text-zinc-500 mb-6">
          Case Study
        </p>

        <div className="
          w-full
          max-w-8xl
          h-[440px]
          overflow-hidden
          rounded-2xl
          border border-zinc-800
          bg-zinc-950
          flex items-center
          justify-center
          mb-12
        ">
          <Image
            src="/projects/rendimoto/logo.png"
            alt="Rendimoto"
            width={1500}
            height={1500}
            className="
              w-full
              object-cover
              scale-105
              -translate-y-0
            "
          />
        </div>

        <h1 className="text-6xl font-bold mb-8">
          Rendimoto
        </h1>

        <p className="text-zinc-400 text-xl">
          Aplicación móvil full stack para gestión
          financiera y operativa de repartidores.
        </p>

        <div className="flex flex-wrap gap-3 mt-10 mb-12">

          <span className="px-4 py-2 rounded-full border border-zinc-800 bg-zinc-950">
            React Native
          </span>

          <span className="px-4 py-2 rounded-full border border-zinc-800 bg-zinc-950">
            Spring Boot
          </span>

          <span className="px-4 py-2 rounded-full border border-zinc-800 bg-zinc-950">
            JWT
          </span>

          <span className="px-4 py-2 rounded-full border border-zinc-800 bg-zinc-950">
            MySQL
          </span>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div>
            <p className="text-zinc-500 mb-2">
              Año
            </p>

            <p className="text-lg">
              2025
            </p>
          </div>

          <div>
            <p className="text-zinc-500 mb-2">
              Estado
            </p>

            <p className="text-lg">
              En desarrollo
            </p>
          </div>

          <div>
            <p className="text-zinc-500 mb-2">
              Tipo
            </p>

            <p className="text-lg">
              Aplicación móvil
            </p>
          </div>

        </div>

        {/* Problema */}
        <section className="py-24 border-t border-zinc-900">

          <p className="text-zinc-500 mb-6">
            El problema
          </p>

          <h2 className="text-4xl font-bold mb-10">
            Centralizar la operación
            de repartidores.
          </h2>

          <div className="max-w-3xl space-y-8 text-xl text-zinc-400 leading-relaxed">

            <p>
              La gestión de repartidores suele realizarse
              mediante múltiples herramientas y procesos
              manuales, dificultando el control operativo
              y financiero.
            </p>

            <p>
              Rendimoto fue diseñado para centralizar
              la administración de repartidores,
              movimientos financieros y operaciones
              empresariales dentro de una sola plataforma.
            </p>

            <p>
              El objetivo principal fue construir una
              solución escalable, segura y fácil de usar
              para la gestión diaria de la operación.
            </p>

          </div>

        </section>

        {/* Mi rol */}
        <section className="py-24 border-t border-zinc-900">

          <p className="text-zinc-500 mb-6">
            Mi rol
          </p>

          <h2 className="text-4xl font-bold mb-10">
            Desarrollo full stack.
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="border border-zinc-800 rounded-2xl p-6">
              Diseño de arquitectura
            </div>

            <div className="border border-zinc-800 rounded-2xl p-6">
              Modelado de base de datos
            </div>

            <div className="border border-zinc-800 rounded-2xl p-6">
              Desarrollo backend
            </div>

            <div className="border border-zinc-800 rounded-2xl p-6">
              Desarrollo frontend móvil
            </div>

            <div className="border border-zinc-800 rounded-2xl p-6">
              Diseño de APIs REST
            </div>

            <div className="border border-zinc-800 rounded-2xl p-6">
              Implementación de seguridad JWT
            </div>

          </div>

        </section>

        {/* Arquitectura */}
        <section className="py-24 border-t border-zinc-900">

          <p className="text-zinc-500 mb-6">
            Arquitectura
          </p>

          <h2 className="text-4xl font-bold mb-12">
            Stack tecnológico.
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="border border-zinc-800 rounded-3xl p-8">
              <h3 className="text-xl font-semibold mb-6">
                Frontend
              </h3>

              <ul className="space-y-3 text-zinc-400">
                <li>• React Native</li>
                <li>• TypeScript</li>
                <li>• React Navigation</li>
              </ul>
            </div>

            <div className="border border-zinc-800 rounded-3xl p-8">
              <h3 className="text-xl font-semibold mb-6">
                Backend
              </h3>

              <ul className="space-y-3 text-zinc-400">
                <li>• Java</li>
                <li>• Spring Boot</li>
                <li>• JWT</li>
                <li>• REST API</li>
              </ul>
            </div>

            <div className="border border-zinc-800 rounded-3xl p-8">
              <h3 className="text-xl font-semibold mb-6">
                Base de datos
              </h3>

              <ul className="space-y-3 text-zinc-400">
                <li>• MySQL</li>
                <li>• Relaciones normalizadas</li>
              </ul>
            </div>

            <div className="border border-zinc-800 rounded-3xl p-8">
              <h3 className="text-xl font-semibold mb-6">
                Herramientas
              </h3>

              <ul className="space-y-3 text-zinc-400">
                <li>• Git</li>
                <li>• GitHub</li>
                <li>• Postman</li>
                <li>• Docker</li>
              </ul>
            </div>

          </div>

        </section>

        {/* Funcionalidades */}
        <section className="py-24 border-t border-zinc-900">

          <p className="text-zinc-500 mb-6">
            Funcionalidades
          </p>

          <h2 className="text-4xl font-bold mb-12">
            Características principales.
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              "Autenticación JWT",
              "Gestión de repartidores",
              "Gestión financiera",
              "Control operativo",
              "Roles y permisos",
              "Cambio seguro de contraseña",
              "Historial de movimientos",
              "Administración de usuarios",
              "APIs REST"
            ].map((feature) => (
              <div
                key={feature}
                className="border border-zinc-800 rounded-2xl p-6 bg-zinc-950"
              >
                {feature}
              </div>
            ))}

          </div>

        </section>

        {/* Retos */}
        <section className="py-24 border-t border-zinc-900">

          <p className="text-zinc-500 mb-6">
            Retos técnicos
          </p>

          <h2 className="text-4xl font-bold mb-12">
            Desafíos durante el desarrollo.
          </h2>

          <div className="space-y-6">

            <div className="border border-zinc-800 rounded-3xl p-8">
              <h3 className="text-xl font-semibold mb-4">
                Arquitectura escalable
              </h3>

              <p className="text-zinc-400">
                Diseñar una arquitectura que permitiera separar
                responsabilidades y facilitar el crecimiento
                futuro del sistema.
              </p>
            </div>

            <div className="border border-zinc-800 rounded-3xl p-8">
              <h3 className="text-xl font-semibold mb-4">
                Seguridad y autenticación
              </h3>

              <p className="text-zinc-400">
                Implementar autenticación basada en JWT,
                control de acceso y cambio seguro
                de contraseñas.
              </p>
            </div>

            <div className="border border-zinc-800 rounded-3xl p-8">
              <h3 className="text-xl font-semibold mb-4">
                Modelado de datos
              </h3>

              <p className="text-zinc-400">
                Diseñar relaciones complejas para
                operaciones, usuarios, repartidores
                y movimientos financieros.
              </p>
            </div>

          </div>

        </section>

        {/* Aprendizajes */}
        <section className="py-24 border-t border-zinc-900">

          <p className="text-zinc-500 mb-6">
            Aprendizajes
          </p>

          <h2 className="text-4xl font-bold mb-12">
            Lo que este proyecto me enseñó.
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            {[
              "Arquitectura de software",
              "Desarrollo full stack",
              "Diseño de APIs REST",
              "Autenticación JWT",
              "Modelado de bases de datos",
              "Buenas prácticas de ingeniería",
              "Experiencia de usuario",
              "Escalabilidad"
            ].map((item) => (
              <div
                key={item}
                className="border border-zinc-800 rounded-2xl p-6"
              >
                {item}
              </div>
            ))}

          </div>

        </section>

        {/* Capturas */}
        <section className="py-24 border-t border-zinc-900">

          <p className="text-zinc-500 mb-6">
            Capturas
          </p>

          <h2 className="text-4xl font-bold mb-12">
            La experiencia del producto.
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <Image
              src="/projects/rendimoto/screens/login.jpg"
              alt="Login"
              width={500}
              height={1000}
              className="
                w-full
                rounded-3xl
                border
                border-zinc-800
              "
            />

            <Image
              src="/projects/rendimoto/screens/dash.jpg"
              alt="Dashboard"
              width={500}
              height={1000}
              className="
                w-full
                rounded-3xl
                border
                border-zinc-800
              "
            />

            <Image
              src="/projects/rendimoto/screens/register.jpg"
              alt="Register"
              width={500}
              height={1000}
              className="
                w-full
                rounded-3xl
                border
                border-zinc-800
              "
            />
          </div>

        </section>
      </div>
      <Footer />
    </main>
  );
}