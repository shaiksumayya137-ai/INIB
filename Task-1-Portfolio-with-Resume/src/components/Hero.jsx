import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h2 className="text-cyan-400 text-xl mb-4">
          Hello, I'm
        </h2>

        <h1 className="text-5xl md:text-7xl font-bold text-white">
          Shaik Sumayya
        </h1>

        <p className="mt-6 text-xl text-slate-300">
          Information Technology Student | Aspiring Backend Developer
        </p>

        <p className="max-w-3xl mt-6 mx-auto text-slate-400 text-lg leading-8">
          Passionate about backend development, web technologies, and Data Structures & Algorithms.
          I enjoy building real-world applications, exploring new technologies,
          and continuously improving my programming and problem-solving skills.
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-8 mt-8 text-3xl">
          <a
            href="https://github.com/shaiksumayya137-ai"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/sumiya-shaik-533477381"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition duration-300"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Resume Button */}
        <div className="mt-10">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-600 transition duration-300 shadow-lg"
          >
            Download Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;