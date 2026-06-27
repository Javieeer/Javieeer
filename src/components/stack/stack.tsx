export default function Stack() {

  const sections = [
    {
      title: "Frontend",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS"
      ]
    },
    {
      title: "Backend",
      technologies: [
        "Java",
        "Spring Boot",
        "Node.js"
      ]
    },
    {
      title: "Bases de datos",
      technologies: [
        "MySQL",
        "PostgreSQL"
      ]
    },
    {
      title: "Herramientas",
      technologies: [
        "Git",
        "GitHub",
        "Docker",
        "Postman"
      ]
    },
    {
      title: "Actualmente aprendiendo",
      technologies: [
        "AWS",
        "Arquitectura de Software",
        "DevOps"
      ]
    }
  ];

  return (
    <section
      id="stack"
      className="min-h-screen py-32"
    >
      <div className="max-w-7xl mx-auto px-8">

        <p className="text-zinc-500 mb-6">
          Stack
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-20">
          Tecnologías con las que
          <br />
          construyo productos.
        </h2>

        <div className="space-y-6">

          {sections.map((section) => (
            <div key={section.title}>

              <h3 className="text-xl font-semibold mb-6">
                {section.title}
              </h3>

              <div className="flex flex-wrap gap-4">

                {section.technologies.map((tech) => (
                  <div
                    key={tech}
                    className="
                        px-6 py-3
                        rounded-2xl
                        border border-zinc-800
                        bg-zinc-950
                        text-zinc-300
                        hover:border-zinc-700
                        transition
                    "
                  >
                    {tech}
                  </div>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}