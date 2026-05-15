import { motion } from "motion/react";
import { Ship, Server, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Quality Assurance & IT Support Engineer",
    company: "Innovez One Pte Ltd",
    period: "April 2024 - Present",
    icon: Ship,
    description: "Leading QA efforts for terminal operating systems (TOS) and port community systems.",
    achievements: [
      "Designed and executed automated API and UI test suites using Selenium and Postman, reducing manual testing time by 40%.",
      "Collaborated with developers and maritime domain experts to ensure software complies with international shipping standards.",
      "Identified and tracked critical bugs in all modules, preventing potential operational delays."
    ]
  },
  {
    id: 2,
    role: "Operational Business Service Staff",
    company: "PT. Permodalan Nasional Madani (PNM)",
    period: "May 2023 - Dec 2023",
    icon: Server,
    description: "Manage branch operations, perform monitoring, and assist with branch issues via tickets.",
    achievements: [
      "Oversaw closing operations and ensured targets were met according to SOP.",
      "Generated daily, weekly, monthly, and yearly reports.",
      "Maintained financial balance stability and identified discrepancies including potential fraud cases."
    ]
  },
  {
    id: 3,
    role: "Support System Management Staff",
    company: "PT. Sigma Cipta Caraka (Telkomsigma)",
    period: "May 2022 - May 2023",
    icon: Server,
    description: "Managed IT infrastructure and provided 24/7 (shift-based) technical monitoring across all bank branches.",
    achievements: [
      "Managed end-of-day and beginning-of-day banking batch processes for Bank BTN.",
      "Performed data backup and restoration for critical banking operations."
    ]
  },
  {
    id: 4,
    role: "Programmer",
    company: "PT. Signa Arta Technology",
    period: "Dec 2021 - Apr 2022",
    icon: Server,
    description: "Junior Programmer",
    achievements: [
      "Developed and maintained PSAK71 accounting system using Java Spring Boot and Vue.js.",
      "Built dashboard application for SIPlah cash management system using Vue.js and Laravel Lumen."
    ]
  },
  {
    id: 5,
    role: "Website Developer (Internship)",
    company: "Badan Informasi Geospasial (BIG)",
    period: "Feb 2020 - Mar 2020",
    icon: Server,
    description: "Developed GIS-based website using Laravel framework.",
    achievements: []
  },
  {
    id: 6,
    role: "Website Developer (Internship)",
    company: "Sada Technology",
    period: "Jan 2020 - Feb 2020",
    icon: Server,
    description: "Built web applications using Laravel framework.",
    achievements: []
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-900 text-white relative">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Professional Experience
          </motion.h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full" />
        </div>

        <div className="relative border-l border-slate-700 ml-4 md:ml-0 md:space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 md:pl-0 mb-12 md:mb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-[-41px] md:left-1/2 md:-ml-[21px] top-0 p-2 bg-slate-900 border-4 border-blue-500 rounded-full z-10">
                <exp.icon size={20} className="text-cyan-400" />
              </div>

              <div className={`md:flex items-center justify-between w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-5/12 hidden md:block" />
                <div className="md:w-5/12 bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-xl hover:border-blue-500/50 transition-colors">
                  <span className="text-cyan-400 font-mono text-sm block mb-2">{exp.period}</span>
                  <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                  <h4 className="text-blue-300 font-medium mb-4">{exp.company}</h4>
                  <p className="text-slate-400 mb-4">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                        <CheckCircle2 size={16} className="text-blue-500 mt-1 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
