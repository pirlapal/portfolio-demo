import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Publications } from './components/Publications';
import { Certifications } from './components/Certifications';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { Toaster } from 'sonner@2.0.3';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F7F4F0] text-stone-800">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-stone-800 focus:text-white focus:text-sm focus:font-semibold focus:outline-none focus:ring-2 focus:ring-[#A0725A]"
      >
        Skip to main content
      </a>
      <Toaster position="bottom-right" theme="light" richColors />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Publications />
      <Certifications />
      <Skills />
      <Education />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}
