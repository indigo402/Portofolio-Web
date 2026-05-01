import { Hero } from "./components/Hero";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Certifications } from "./components/Certifications";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-blue-500/30 text-slate-200">
      <Hero />
      <Experience />
      <Skills />
      <Certifications />
      <Footer />
    </div>
  );
}
