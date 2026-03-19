import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import signLanguageImg from 'figma:asset/abc1c4375f375baf7946b23a18568604c48af785.png';

interface ProjectsProps {
  isDark: boolean;
  onProjectClick: (project: any) => void;
}

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  featured: boolean;
  github?: string;
  research?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Scrum Simulation Tool',
    description: 'Java Swing desktop application simulating Scrum grooming workflow with role-based access and agile ceremonies.',
    longDescription: 'Scrum Simulation Tool is a Java Swing desktop application that simulates a Scrum grooming workflow, including role-based access Product Owner, Scrum Master, Developer, QA. We have delivered the project through structured sprints and agile ceremonies tracking work in Taiga, assigning user stories and tasks, and integrating code via GitHub sprint branches with peer review, conflict resolution, and merges to main. Built with Java 11+ and Maven, with a clean layered structure model, service, navigation, and UI to keep the codebase maintainable and extensible.',
    image: 'https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY3J1bSUyMGFnaWxlJTIwcHJvamVjdCUyMG1hbmFnZW1lbnQlMjBrYW5iYW4lMjBib2FyZHxlbnwxfHx8fDE3NzA3ODcyNDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Java', 'Java Swing', 'Maven', 'Git', 'GitHub', 'Taiga', 'Agile', 'Scrum'],
    featured: true,
    github: 'https://github.com/viraj091/G3_SER515_Agile_Avengers'
  },
  {
    id: 2,
    title: 'BI-LSTM Cryptocurrency Prediction',
    description: 'Advanced deep learning model for predicting cryptocurrency price movements using Bidirectional LSTM networks.',
    longDescription: 'Developed a sophisticated cryptocurrency prediction system using Bidirectional Long Short-Term Memory (BI-LSTM) networks. The model analyzes historical price data, trading volumes, and market sentiment to forecast future price trends with high accuracy. Implemented feature engineering techniques and optimized hyperparameters to achieve 85% prediction accuracy on test data.',
    image: 'https://images.unsplash.com/photo-1672071673701-4c9a564c8046?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnlwdG9jdXJyZW5jeSUyMGJpdGNvaW4lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MDc0NDQ0NHww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Python', 'TensorFlow', 'Deep Learning', 'LSTM', 'Data Science'],
    featured: true,
    research: 'https://ijsrem.com/download/elevating-cryptocurrency-predictions-bidirectional-lstm-methodology/'
  },
  {
    id: 3,
    title: 'Sign Language Detection System',
    description: 'Real-time computer vision system for detecting and translating sign language gestures into text.',
    longDescription: 'Created an innovative real-time sign language detection system using computer vision and deep learning. The system captures hand gestures via webcam, processes them through a convolutional neural network, and translates them into text with 92% accuracy. This project aims to bridge communication gaps and improve accessibility for the deaf and hard-of-hearing community.',
    image: signLanguageImg,
    tags: ['Python', 'OpenCV', 'TensorFlow', 'Computer Vision', 'CNN'],
    featured: true,
    github: 'https://github.com/example/sign-language',
    research: 'https://ijsrem.com/download/sign-language-detection-2/'
  },
  {
    id: 4,
    title: 'Automated Blog Generator',
    description: 'End-to-end pipeline that converts a GitHub repo + project docs into a publish-ready blog in set format.',
    longDescription: 'Built an automation tool that generates high-quality project blogs directly from real project artifacts. The workflow starts with a GitHub repository link as the initial input. Using OAuth-enabled API access, the system fetches the README, extracts the content, and converts it into structured text + JSON for reliable analysis. Next, it prompts for the Project Scope and Project Closure documents, analyzes them to capture objectives, deliverables, outcomes, and learnings, and then merges all insights into one unified narrative. In the final step, it generates a polished blog in the CIC-set format—consistent, structured, and ready to publish.',
    image: 'https://images.unsplash.com/photo-1729184648234-7650c1484905?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbWF0aW9uJTIwd29ya2Zsb3clMjB0ZWNobm9sb2d5JTIwZGFzaGJvYXJkfGVufDF8fHx8MTc3MDc4MzQwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['AWS', 'AWS QuickSight', 'Git', 'JSON', 'OAuth', 'API', 'Automation'],
    featured: false,
    github: 'https://github.com/example/automation'
  },
  {
    id: 5,
    title: 'AI-Powered Data Analytics Dashboard',
    description: 'Interactive dashboard providing real-time insights and predictive analytics for business intelligence.',
    longDescription: 'Built a comprehensive data analytics dashboard using React and AWS QuickSuite. Features include real-time data visualization, predictive analytics, custom report generation, and AI-driven insights. The platform processes millions of data points daily and provides actionable recommendations to stakeholders.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkJTIwY2hhcnRzJTIwZ3JhcGhzfGVufDF8fHx8MTc3MDc4MTg0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['React', 'D3.js', 'AWS', 'Python', 'SQL'],
    featured: false
  },
  {
    id: 6,
    title: 'Neural Network Chatbot',
    description: 'Conversational AI chatbot using natural language processing and deep learning for intelligent responses.',
    longDescription: 'Developed an advanced chatbot leveraging transformer models and NLP techniques. The bot understands context, handles multi-turn conversations, and provides personalized responses. Trained on domain-specific data to achieve 90% user satisfaction rate.',
    image: 'https://images.unsplash.com/photo-1751448582395-27fc57293f1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwY2hhdGJvdCUyMGNvbnZlcnNhdGlvbnxlbnwxfHx8fDE3NzA3ODM0MTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Python', 'PyTorch', 'NLP', 'Transformers', 'MongoDB'],
    featured: false,
    github: 'https://github.com/example/chatbot'
  }
];

export function Projects({ isDark, onProjectClick }: ProjectsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#8B5CF6]/5 to-transparent" />
      
      {/* Tech grid background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, #00D4FF 1px, transparent 1px),
            linear-gradient(to bottom, #8B5CF6 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className={`inline-block mb-4 font-mono ${isDark ? 'text-[#00D4FF]' : 'text-[#0088CC]'}`}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
          >
            <span className={isDark ? 'text-[#8B5CF6]' : 'text-[#7C4EE0]'}>{'<'}</span>
            projects
            <span className={isDark ? 'text-[#8B5CF6]' : 'text-[#7C4EE0]'}>{' />'}</span>
          </motion.div>
          <h2 className={`text-5xl md:text-6xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Featured Projects
          </h2>
          <p className={`mt-4 font-mono text-sm ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
            // Building the future, one line of code at a time
          </p>
        </motion.div>

        {/* Masonry/Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${
                project.featured ? 'md:col-span-2 md:row-span-2' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => onProjectClick(project)}
            >
              {/* Image */}
              <div className="relative h-full min-h-[300px]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                {/* Solid background box for text */}
                <div className="bg-gradient-to-t from-black/95 via-black/90 to-black/70 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0.9 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 drop-shadow-2xl">
                      {project.title}
                    </h3>

                    {/* Tags - Always visible and prominent */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 rounded-full bg-gradient-to-r from-[#00D4FF]/50 to-[#8B5CF6]/50 border border-[#00D4FF]/70 text-sm text-white backdrop-blur-sm font-semibold shadow-xl"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Short description - Always visible */}
                    <p className="text-white mb-4 text-base leading-relaxed drop-shadow-xl">
                      {project.description}
                    </p>

                    {/* Long description - Visible on hover */}
                    <div className="max-h-0 group-hover:max-h-[500px] overflow-hidden transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                      <div className="pt-3 border-t border-white/30 mb-4">
                        <p className="text-white/90 text-sm leading-relaxed">
                          {project.longDescription}
                        </p>
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-2 rounded-lg bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors border border-white/30"
                        >
                          <Github className="w-5 h-5 text-white" />
                        </a>
                      )}
                      {project.research && (
                        <a
                          href={project.research}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-2 rounded-lg bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors border border-white/30"
                        >
                          <ExternalLink className="w-5 h-5 text-white" />
                        </a>
                      )}
                    </div>

                    {/* Hover hint */}
                    <p className="text-xs text-white/40 mt-3 font-mono group-hover:opacity-0 transition-opacity">
                      Hover for details
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}