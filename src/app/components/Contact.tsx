import { motion } from "motion/react";
import { Mail, Linkedin, Github, Calendar } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-900/50 backdrop-blur-sm border-y border-slate-800 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500 via-slate-900 to-slate-900 pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's <span className="text-blue-500">Connect</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Got an exciting project or opportunity? I'd love to hear from you!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto"
        >
          {/* Email */}
          <a
            href="mailto:indigo.pasmer@gmail.com"
            className="group flex items-center justify-center gap-3 p-6 bg-slate-800 hover:bg-blue-900/50 border border-slate-700 hover:border-blue-500 rounded-xl transition-all"
          >
            <Mail className="text-blue-400 group-hover:text-blue-300 transition-colors" size={24} />
            <div className="text-left">
              <p className="text-xs text-slate-400">Email Me</p>
              <p className="text-white font-semibold group-hover:text-blue-300 transition-colors">indigo.pasmer@gmail.com</p>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/indigo402/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 p-6 bg-slate-800 hover:bg-blue-900/50 border border-slate-700 hover:border-blue-500 rounded-xl transition-all"
          >
            <Linkedin className="text-blue-400 group-hover:text-blue-300 transition-colors" size={24} />
            <div className="text-left">
              <p className="text-xs text-slate-400">LinkedIn</p>
              <p className="text-white font-semibold group-hover:text-blue-300 transition-colors">Connect with me</p>
            </div>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/indigo402"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 p-6 bg-slate-800 hover:bg-blue-900/50 border border-slate-700 hover:border-blue-500 rounded-xl transition-all"
          >
            <Github className="text-blue-400 group-hover:text-blue-300 transition-colors" size={24} />
            <div className="text-left">
              <p className="text-xs text-slate-400">GitHub</p>
              <p className="text-white font-semibold group-hover:text-blue-300 transition-colors">View my projects</p>
            </div>
          </a>

          {/* Calendar */}
          <a
            href="https://calendly.com/indigopasmer/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 p-6 bg-slate-800 hover:bg-blue-900/50 border border-slate-700 hover:border-blue-500 rounded-xl transition-all"
          >
            <Calendar className="text-blue-400 group-hover:text-blue-300 transition-colors" size={24} />
            <div className="text-left">
              <p className="text-xs text-slate-400">Schedule Call</p>
              <p className="text-white font-semibold group-hover:text-blue-300 transition-colors">Book a meeting</p>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
