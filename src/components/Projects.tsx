import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import signLanguageImg from 'figma:asset/abc1c4375f375baf7946b23a18568604c48af785.png';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  research?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Scrum Simulation Tool',
    description: 'Java Swing desktop application simulating Scrum grooming workflow with role-based access, agile ceremonies, and sprint tracking via Taiga and GitHub.',
    image: 'https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY3J1bSUyMGFnaWxlJTIwcHJvamVjdCUyMG1hbmFnZW1lbnQlMjBrYW5iYW4lMjBib2FyZHxlbnwxfHx8fDE3NzA3ODcyNDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Java', 'Swing', 'Maven', 'Agile', 'Scrum'],
    github: 'https://github.com/viraj091/G3_SER515_Agile_Avengers',
    featured: true,
  },
  {
    id: 2,
    title: 'Automated Blog Generator',
    description: 'End-to-end pipeline converting GitHub repos + project docs into publish-ready blogs using OAuth APIs and structured JSON analysis.',
    image: 'https://images.unsplash.com/photo-1729184648234-7650c1484905?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbWF0aW9uJTIwd29ya2Zsb3clMjB0ZWNobm9sb2d5JTIwZGFzaGJvYXJkfGVufDF8fHx8MTc3MDc4MzQwN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['AWS', 'OAuth', 'API', 'Automation'],
  },
  {
    id: 3,
    title: 'LinkedIn Job Automation',
    description: 'Automates job discovery, fit scoring, document drafting, and application tracking with a human-in-the-loop flow using n8n.',
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbWF0aW9uJTIwd29ya2Zsb3clMjBwaXBlbGluZSUyMHRlY2hub2xvZ3klMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzcxNDgyOTk0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['n8n', 'Automation', 'APIs', 'LLM'],
  },
  {
    id: 4,
    title: 'News2Post Automation',
    description: 'Content pipeline that fetches trending AI news, generates captions and branded images, and queues posts for approval and publishing.',
    image: 'https://images.unsplash.com/photo-1614028480987-73081d86a38b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXdzJTIwZmVlZCUyMGNvbnRlbnQlMjBhdXRvbWF0aW9uJTIwc29jaWFsJTIwbWVkaWElMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzcxNDgzMjIzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['n8n', 'RSS', 'Image Gen', 'LLM'],
  },
  {
    id: 5,
    title: 'BI-LSTM Crypto Prediction',
    description: 'Deep learning model predicting cryptocurrency price movements using Bidirectional LSTM networks with 85% accuracy on test data.',
    image: 'https://images.unsplash.com/photo-1672071673701-4c9a564c8046?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnlwdG9jdXJyZW5jeSUyMGJpdGNvaW4lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MDc0NDQ0NHww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Python', 'TensorFlow', 'LSTM', 'Data Science'],
    research: 'https://ijsrem.com/download/elevating-cryptocurrency-predictions-bidirectional-lstm-methodology/',
  },
  {
    id: 6,
    title: 'Sign Language Detection',
    description: 'Real-time computer vision system detecting and translating sign language gestures into text with 92% accuracy using CNNs.',
    image: signLanguageImg,
    tags: ['Python', 'OpenCV', 'TensorFlow', 'CNN'],
    github: 'https://github.com/viraj091',
    research: 'https://ijsrem.com/download/sign-language-detection-2/',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="projects" className="py-24 md:py-32 px-6 bg-[#F7F4F0]" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-100 border border-stone-300 mb-4">
            <span className="w-2 h-2 rounded-full bg-stone-800 animate-pulse" />
            <span className="text-[#A0725A] text-sm font-semibold uppercase tracking-wide">Featured Projects</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 mb-4">
            Building Solutions That <span className="text-[#A0725A]">Matter</span>
          </h2>
          <p className="text-stone-500 text-lg max-w-2xl mx-auto">
            From automation pipelines to deep learning systems — projects that solve real problems at scale
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className={`group relative rounded-2xl overflow-hidden bg-white border border-stone-200 hover:border-stone-300 shadow-sm hover:shadow-xl transition-all duration-300 ${
                project.featured ? 'lg:col-span-8' : 'lg:col-span-4'
              }`}
              variants={cardVariants}
              whileHover={{ y: -6 }}
            >
              <div className={`relative overflow-hidden ${project.featured ? 'h-72' : 'h-56'} bg-stone-100`}>
                <img
                  src={project.image}
                  alt=""
                  aria-hidden="true"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {project.featured && (
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-stone-800 shadow-lg">
                    <span className="text-xs font-bold text-white uppercase tracking-wide">Featured</span>
                  </div>
                )}

                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-white/95 backdrop-blur-sm text-stone-900 hover:text-[#A0725A] border border-white/20 shadow-lg transition-all"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.research && (
                    <a
                      href={project.research}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-white/95 backdrop-blur-sm text-stone-900 hover:text-[#A0725A] border border-white/20 shadow-lg transition-all"
                      aria-label={`Read ${project.title} paper`}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>

              </div>

              <div className="p-6">
                <h3 className={`font-bold text-stone-900 mb-2 group-hover:text-[#A0725A] transition-colors leading-tight ${
                  project.featured ? 'text-xl md:text-2xl' : 'text-lg'
                }`}>
                  {project.title}
                </h3>

                <p className={`text-stone-500 leading-relaxed mb-4 ${
                  project.featured ? 'text-sm md:text-base' : 'text-sm'
                }`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-md text-xs font-semibold text-stone-600 bg-stone-100 border border-stone-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
