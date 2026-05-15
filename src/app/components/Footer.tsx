import { Anchor, Mail, Linkedin, Github } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 py-12 border-t border-slate-800 text-slate-400">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <Anchor className="text-blue-500" size={24} />
          <span className="text-white font-bold text-lg">Indigo Noor Muin</span>
        </div>
        
        <p className="text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} Indigo Noor Muin. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <a href="mailto:indigo.pasmer@gmail.com" className="hover:text-blue-400 transition-colors">
            <Mail size={20} />
          </a>
          <a href="https://www.linkedin.com/in/indigo402/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="https://github.com/indigo402" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
            <Github size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
