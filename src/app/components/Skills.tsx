import { motion } from "motion/react";
import { Terminal, Database, ShieldAlert, MonitorPlay, Wifi, PenTool } from "lucide-react";

const skillCategories = [
  {
    title: "Quality Assurance",
    icon: ShieldAlert,
    skills: ["Manual Testing", "Automated Testing", "API Testing (Postman)", "Selenium WebDriver", "JIRA / Bug Tracking", "Test Planning"]
  },
  {
    title: "IT Support & Infrastructure",
    icon: MonitorPlay,
    skills: ["Hardware Troubleshooting", "Windows/Linux Administration", "Active Directory", "Helpdesk Ticketing", "Remote Support", "System Maintenance"]
  },
  {
    title: "Networking & Databases",
    icon: Database,
    skills: ["SQL / MySQL", "Network Troubleshooting", "TCP/IP & DNS", "LAN/WAN Setup", "Cisco Routers", "Data Backup"]
  }
];

export function Skills() {
  return (
    <section className="py-24 bg-slate-950 text-white relative">
      {/* Decorative Wave from top */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none rotate-180 pointer-events-none z-0">
        <svg className="relative block w-full h-[40px] md:h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.06,151.71,130.4,223.39,105.44,258.4,93.26,290.49,71.27,321.39,56.44Z" className="fill-slate-900"></path>
        </svg>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10 pt-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Technical Expertise
          </motion.h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:bg-slate-800/80 transition-all group"
            >
              <div className="w-14 h-14 bg-blue-900/50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <cat.icon className="text-cyan-400" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 bg-slate-950 border border-slate-700 rounded-full text-sm text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
