import { motion } from "motion/react";
import { Award, BookOpen } from "lucide-react";

const certifications = [
  {
    title: "ISTQB Certified Tester",
    level: "Foundation Level",
    issuer: "International Software Testing Qualifications Board",
    date: "2021"
  },
  {
    title: "CompTIA Network+",
    level: "Professional Certification",
    issuer: "CompTIA",
    date: "2020"
  },
  {
    title: "AWS Certified Cloud Practitioner",
    level: "Foundational",
    issuer: "Amazon Web Services",
    date: "2022"
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
              <p className="text-slate-300 ml-10">Institute of Technology Nusantara</p>
              <p className="text-slate-500 text-sm ml-10 mt-1">2014 - 2018</p>
            </motion.div>
          </div>

          <div className="md:w-2/3 space-y-4 w-full">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-blue-500 transition-colors group cursor-default"
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
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
