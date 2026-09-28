import { motion } from "framer-motion";

function Certifications() {
  const certificates = [
    {
      title: "NPTEL Cloud Computing",
      file: "NPTEL_CLOUD_COMPUTING.pdf",
    },
    {
      title: "AWS Cloud Computing - DevOps Intern",
      file: "AWS-CLOUD-DevOps-Intern.pdf",
    },
    {
      title: "Infosys Springboard",
      file: "SpringBoard-Infosys.pdf",
    },
    {
      title: "CodeChef Java Programming",
      file: "codechef500DF.pdf",
    },
  ];

  return (
    <section
      id="certifications"
      className="py-24 px-6 bg-slate-900"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-cyan-400 mb-12">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="bg-slate-800 border border-slate-700 p-5 rounded-xl hover:border-cyan-400 transition"
            >
              <div className="flex items-center justify-between">
                <span className="text-white">
                  🏆 {certificate.title}
                </span>

                <a
                  href={`/certificates/${encodeURIComponent(certificate.file)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-cyan-400/40 px-3 py-1 text-sm text-cyan-400 hover:bg-cyan-400/10"
                >
                  View
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Certifications;