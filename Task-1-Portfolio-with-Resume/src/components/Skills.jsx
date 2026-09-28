import { motion } from "framer-motion";

function Skills() {
  const programming = [
    "Java",
    "C",
    "HTML",
    "CSS",
    "JavaScript",
    "SQL",
  ];

  const tools = [
    "React.js",
    "Node.js",
    "REST APIs",
    "Git",
    "GitHub",
    "VS Code",
  ];

  const softSkills = [
    "Quick Learner",
    "Problem Solving",
    "Adaptability",
    "Good Communication",
    "Teamwork",
  ];

  const SkillButton = ({ skill, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.05,
      }}
      viewport={{ once: true }}
      className="
        px-5
        py-3
        rounded-full
        bg-slate-800
        border
        border-slate-700
        hover:border-cyan-400
        hover:bg-cyan-500/10
        hover:scale-105
        transition-all
        duration-300
        cursor-pointer
      "
    >
      {skill}
    </motion.div>
  );

  return (
    <section
      id="skills"
      className="py-24 px-6 bg-slate-950"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-cyan-400 mb-12">
          Skills
        </h2>

        {/* Programming Languages */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">
            Programming Languages
          </h3>

          <div className="flex flex-wrap gap-4">
            {programming.map((skill, index) => (
              <SkillButton
                key={skill}
                skill={skill}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Tools & Technologies */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">
            Tools & Technologies
          </h3>

          <div className="flex flex-wrap gap-4">
            {tools.map((skill, index) => (
              <SkillButton
                key={skill}
                skill={skill}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">
            Soft Skills
          </h3>

          <div className="flex flex-wrap gap-4">
            {softSkills.map((skill, index) => (
              <SkillButton
                key={skill}
                skill={skill}
                index={index}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;