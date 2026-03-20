import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { ProjectsOrbit } from './components/ProjectsOrbit';
import { Certifications } from './components/Certifications';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Publications } from './components/Publications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { LoadingScreen } from './components/LoadingScreen';
import { ScrollProgress } from './components/ScrollProgress';
import { BackToTop } from './components/BackToTop';
import { CursorParticles } from './components/CursorParticles';
import { Toaster } from 'sonner@2.0.3';
import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className={`min-h-screen overflow-x-hidden transition-colors duration-500 ${isDark ? 'bg-[#0A1628]' : 'bg-gray-50'}`}>
      <LoadingScreen />
      <Toaster position="bottom-right" theme={isDark ? 'dark' : 'light'} richColors />
      <ScrollProgress />
      <CursorParticles isDark={isDark} />
      
      {/* Theme Toggle */}
      <button
        onClick={() => setIsDark(!isDark)}
        className="fixed top-8 right-8 z-50 p-3 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] hover:scale-110 transition-transform shadow-lg"
        aria-label="Toggle theme"
      >
        {isDark ? (
          <Moon className="w-6 h-6 text-white" />
        ) : (
          <Sun className="w-6 h-6 text-white" />
        )}
      </button>

      <Hero isDark={isDark} />
      <About isDark={isDark} />
      <Experience isDark={isDark} />
      <ProjectsOrbit isDark={isDark} onProjectClick={setSelectedProject} />
      <Publications isDark={isDark} />
      <Certifications isDark={isDark} />
      <Skills isDark={isDark} />
      <Education isDark={isDark} />
      <Contact isDark={isDark} />
      <Footer isDark={isDark} />
      <BackToTop isDark={isDark} />

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          isDark={isDark}
        />
      )}
    </div>
  );
}