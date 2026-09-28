import { motion } from "framer-motion";

function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-slate-900">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold text-cyan-400 mb-6">
          Contact Me
        </h2>

        <p className="text-slate-300 text-lg mb-10">
          Feel free to reach out for collaborations, internships, or any exciting opportunities.
        </p>

        <div className="space-y-4 text-lg text-slate-300">
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:shaiksumayya137@gmail.com"
              className="text-cyan-400 hover:underline"
            >
              shaiksumayya137@gmail.com
            </a>
          </p>

          <p>
            <strong>Phone:</strong> +91 6300443917
          </p>

          <p>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/shaiksumayya137-ai"
              target="_blank"
              rel="noreferrer"
              className="text-cyan-400 hover:underline"
            >
              github.com/shaiksumayya137-ai
            </a>
          </p>

          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/sumiya-shaik-533477381"
              target="_blank"
              rel="noreferrer"
              className="text-cyan-400 hover:underline"
            >
              linkedin.com/in/sumiya-shaik-533477381
            </a>
          </p>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;