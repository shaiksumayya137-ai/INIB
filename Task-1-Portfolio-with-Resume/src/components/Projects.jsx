import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "GrowDay",
      description:
        "A habit-tracking web application designed to help users build better habits one day at a time.",
      technologies: [
        "React.js",
        "Vite",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "JWT Authentication",
        "CSS",
      ],
      github:
        "https://github.com/shaiksumayya137-ai/Growday",
    },
    {
      title: "E-Commerce Product Catalog",
      description:
        "A Flask-based e-commerce web application for browsing products, managing a shopping cart, user authentication, and handling orders.",
      technologies: [
        "Python",
        "Flask",
        "HTML",
        "CSS",
        "JavaScript",
      ],
      github:
        "https://github.com/shaiksumayya137-ai/E-Commerce-Product-Catalog",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 px-6 bg-slate-950"
    >
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-cyan-400 mb-12"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.github}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="
                block
                bg-slate-900
                border border-slate-700
                rounded-xl
                p-6
                hover:border-cyan-400
                transition
                duration-300
                cursor-pointer
              "
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                {project.title}
              </h3>

              <p className="text-slate-300 leading-7 mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="
                      px-3
                      py-1
                      rounded-full
                      bg-slate-800
                      border border-slate-700
                      text-cyan-400
                      text-sm
                    "
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <span className="text-cyan-400 font-semibold">
                View Project →
              </span>
            </motion.a>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Projects;