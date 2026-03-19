import { motion, AnimatePresence } from 'motion/react';
import { X, Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect } from 'react';

interface ProjectModalProps {
  project: any;
  onClose: () => void;
  isDark: boolean;
}

export function ProjectModal({ project, onClose, isDark }: ProjectModalProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />

        {/* Modal */}
        <motion.div
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0A1628]/95 backdrop-blur-md rounded-3xl border border-white/10 shadow-2xl"
          initial={{ scale: 0.9, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 50 }}
          transition={{ type: 'spring', damping: 25 }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Project image */}
          <div className="relative h-80 overflow-hidden rounded-t-3xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] to-transparent" />
          </div>

          {/* Content */}
          <div className="p-8 md:p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {project.title}
            </h2>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-[#00D4FF]/20 to-[#8B5CF6]/20 border border-[#00D4FF]/30 text-sm text-white backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-white mb-4">
                About This Project
              </h3>
              <p className="text-lg text-white/80 leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            {/* Key Features */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Key Features
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-white/80">
                  <span className="text-[#00D4FF] text-xl">•</span>
                  <span>Advanced algorithms and optimized performance</span>
                </li>
                <li className="flex items-start gap-3 text-white/80">
                  <span className="text-[#00D4FF] text-xl">•</span>
                  <span>Scalable architecture designed for production</span>
                </li>
                <li className="flex items-start gap-3 text-white/80">
                  <span className="text-[#00D4FF] text-xl">•</span>
                  <span>Comprehensive testing and documentation</span>
                </li>
                <li className="flex items-start gap-3 text-white/80">
                  <span className="text-[#00D4FF] text-xl">•</span>
                  <span>Real-world application with measurable impact</span>
                </li>
              </ul>
            </div>

            {/* Technologies */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Technologies Used
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {project.tags.map((tech: string) => (
                  <div
                    key={tech}
                    className="p-4 rounded-xl bg-white/5 border border-white/10 text-center"
                  >
                    <p className="text-white font-medium">{tech}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center gap-2 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span>View on GitHub</span>
                </a>
              )}
              {project.research && (
                <a
                  href={project.research}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] text-white flex items-center gap-2 hover:scale-105 transition-transform"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>Read Research Paper</span>
                </a>
              )}
            </div>
          </div>

          {/* Navigation arrows (optional for future enhancement) */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
            <button className="p-3 rounded-full bg-white/10 backdrop-blur-sm opacity-50 hover:opacity-100 transition-opacity pointer-events-auto">
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button className="p-3 rounded-full bg-white/10 backdrop-blur-sm opacity-50 hover:opacity-100 transition-opacity pointer-events-auto">
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
