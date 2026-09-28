import { motion } from "framer-motion";

function Education() {
  const education = [
    {
      title: "B.Tech in Information Technology",
      institute: "Vasireddy Venkatadri Institute of Technology (VVIT)",
      score: "CGPA: 8.2",
      year: "2023 - 2027",
    },
    {
      title: "Intermediate",
      institute: "Harika Junior College",
      score: "89%",
      year: "2021 - 2023",
    },
    {
      title: "Secondary School (SSC)",
      institute: "Markaz Darul Bir",
      score: "CGPA: 7.5",
      year: "2020",
    },
  ];

  return (
    <section id="education" className="py-24 px-6 bg-slate-900">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-cyan-400 mb-12"
        >
          Education
        </motion.h2>

        <div className="space-y-8">
          {education.map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-cyan-400 transition"
            >
              <h3 className="text-xl font-semibold">
                {item.title}
              </h3>

              <p className="text-slate-300 mt-2">
                {item.institute}
              </p>

              <div className="flex justify-between mt-4 text-cyan-400">
                <span>{item.score}</span>
                <span>{item.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;