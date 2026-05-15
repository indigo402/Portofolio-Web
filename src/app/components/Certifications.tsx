import { motion } from "motion/react";
import { Award, BookOpen } from "lucide-react";

const certifications = [
  {
    title: "Software Testing/QA",
    level: "Programming Foundations",
    issuer: "LinkedIn Learning",
    date: "2024",
    url: "https://www.linkedin.com/learning/certificates/100aa7dcb3f1671ccf7e21db86a0a3196ce37593ff09ad77dde41a9902f1ebc0"
  },
  {
    title: "SQL (Advanced) Certificate",
    level: "Professional Certification",
    issuer: "HackerRank",
    date: "2026",
    url: "https://www.hackerrank.com/certificates/iframe/b96c22e5580f"
  },
  {
    title: "Business User Hands On",
    level: "Professional Certification",
    issuer: "Alibaba Cloud Certification",
    date: "2026",
    url: "https://drive.google.com/file/d/1SzH6oy-Hr4sXztF3OkPK6MNUCvkRbmwV/view?usp=sharing"
  },
  {
    title: "Memulai Pemrograman dengan Python",
    level: "Professional Certification",
    issuer: "Dicoding Indonesia",
    date: "2024 - 2027",
    url: "https://www.dicoding.com/certificates/L4PQQO0G4PO1"
  },
  {
    title: "Belajar Dasar AWS Cloud",
    level: "Professional Certification",
    issuer: "Dicoding Indonesia",
    date: "2024 - 2027",
    url: "https://www.dicoding.com/certificates/2VX3OD55NZYQ"
  },
   {
    title: "Belajar Machine Learning untuk Pemula",
    level: "Professional Certification",
    issuer: "Dicoding Indonesia",
    date: "2024 - 2027",
    url: "https://www.dicoding.com/certificates/QLZ97QN07P5D"
  }
];

export function Certifications() {
  return (
    <section className="py-24 bg-slate-900 text-white relative">
      {/* Decorative background overlay */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500 via-slate-900 to-slate-900 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/3">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-6"
            >
              Education & <span className="text-blue-500">Certifications</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-400 mb-8"
            >
              Continuous learning is critical in navigating the complex world of maritime technology and quality assurance.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6"
            >
              <div className="flex items-center gap-4 mb-2">
                <BookOpen className="text-cyan-400" size={24} />
                <h3 className="text-lg font-bold">Bachelor of Computer Science</h3>
              </div>
              <p className="text-slate-300 ml-10">State Polytechnic of Jakarta (PNJ)</p>
              <p className="text-slate-500 text-sm ml-10 mt-1">2017 - 2021</p>
            </motion.div>
          </div>

          <div className="md:w-2/3 space-y-4 w-full">
            {certifications.map((cert, index) => (
              <motion.a
                key={index}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-blue-500 transition-colors group cursor-pointer"
              >
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center shrink-0">
                    <Award className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg group-hover:text-blue-400 transition-colors">{cert.title}</h4>
                    <p className="text-slate-400 text-sm">{cert.issuer} • {cert.level}</p>
                  </div>
                </div>
                <div className="text-cyan-500 font-mono text-sm hidden sm:block">
                  {cert.date}
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}