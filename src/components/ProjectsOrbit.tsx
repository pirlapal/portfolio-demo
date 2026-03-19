import { motion, AnimatePresence } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import signLanguageImg from 'figma:asset/abc1c4375f375baf7946b23a18568604c48af785.png';

interface ProjectsOrbitProps {
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
    github: 'https://github.com/viraj091/G3_SER515_Agile_Avengers'
  },
  {
    id: 2,
    title: 'Automated Blog Generator',
    description: 'End-to-end pipeline that converts a GitHub repo + project docs into a publish-ready blog in set format.',
    longDescription: 'Built an automation tool that generates high-quality project blogs directly from real project artifacts. The workflow starts with a GitHub repository link as the initial input. Using OAuth-enabled API access, the system fetches the README, extracts the content, and converts it into structured text + JSON for reliable analysis. Next, it prompts for the Project Scope and Project Closure documents, analyzes them to capture objectives, deliverables, outcomes, and learnings, and then merges all insights into one unified narrative. In the final step, it generates a polished blog in the CIC-set format—consistent, structured, and ready to publish.',
    image: 'https://images.unsplash.com/photo-1729184648234-7650c1484905?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbWF0aW9uJTIwd29ya2Zsb3clMjB0ZWNobm9sb2d5JTIwZGFzaGJvYXJkfGVufDF8fHx8MTc3MDc4MzQwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['AWS', 'AWS QuickSight', 'Git', 'JSON', 'OAuth', 'API', 'Automation'],
    github: 'https://github.com/example/automation'
  },
  {
    id: 3,
    title: 'LinkedIn Job Application Automation',
    description: 'Automates job discovery, fit scoring, document drafting, and application tracking with a human-in-the-loop flow.',
    longDescription: 'Built an end-to-end job application automation system using n8n that streamlines the entire process from discovery to follow-ups. The workflow collects job opportunities from alerts and feeds (email/job sources), extracts role details, and deduplicates repeated postings across platforms. It then analyzes each job against my skills and preferences to generate a fit score and priority ranking. For shortlisted roles, it auto-generates tailored content—resume bullet suggestions, cover letter drafts, and recruiter messages—while keeping the final submission step manual for compliance and accuracy. Every application is logged into a tracker (Notion/Airtable/Sheets), status updates are detected from incoming emails, and follow-up reminders are triggered automatically based on timelines and outcomes.',
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbWF0aW9uJTIwd29ya2Zsb3clMjBwaXBlbGluZSUyMHRlY2hub2xvZ3klMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzcxNDgyOTk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['n8n', 'Automation', 'LinkedIn', 'Gmail', 'Notion', 'APIs', 'OAuth', 'LLM', 'JSON'],
    github: 'https://github.com/example/linkedin-automation'
  },
  {
    id: 4,
    title: 'News2Post Automation',
    description: 'Fetches trending AI news, generates post-ready captions + hashtags, creates branded images, and queues content for approval/publishing.',
    longDescription: 'Developed a content automation pipeline in n8n that turns trending AI news into publish-ready social posts for a company page. The workflow continuously pulls updates from trusted sources using RSS feeds and supported APIs, then cleans and normalizes articles into structured JSON. It deduplicates repeated stories, ranks items by recency and frequency, and generates concise summaries with "why it matters" takeaways. For each selected story, the system produces a complete posting package: a LinkedIn-ready caption in multiple tones, relevant hashtags, and a branded image generated from a reusable template (headline, source, date, company branding). Posts are sent into an approval queue (Slack/Notion), and once approved, the workflow schedules or publishes and logs performance data for future optimization.',
    image: 'https://images.unsplash.com/photo-1614028480987-73081d86a38b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXdzJTIwZmVlZCUyMGNvbnRlbnQlMjBhdXRvbWF0aW9uJTIwc29jaWFsJTIwbWVkaWElMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzcxNDgzMjIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['n8n', 'RSS/APIs', 'Content Pipeline', 'Image Generation', 'Hashtags', 'Scheduling', 'Automation', 'JSON', 'LLM'],
    github: 'https://github.com/example/news2post'
  },
  {
    id: 5,
    title: 'BI-LSTM Cryptocurrency Prediction',
    description: 'Advanced deep learning model for predicting cryptocurrency price movements using Bidirectional LSTM networks.',
    longDescription: 'Developed a sophisticated cryptocurrency prediction system using Bidirectional Long Short-Term Memory (BI-LSTM) networks. The model analyzes historical price data, trading volumes, and market sentiment to forecast future price trends with high accuracy. Implemented feature engineering techniques and optimized hyperparameters to achieve 85% prediction accuracy on test data.',
    image: 'https://images.unsplash.com/photo-1672071673701-4c9a564c8046?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnlwdG9jdXJyZW5jeSUyMGJpdGNvaW4lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MDc0NDQ0NHww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Python', 'TensorFlow', 'Deep Learning', 'LSTM', 'Data Science'],
    research: 'https://ijsrem.com/download/elevating-cryptocurrency-predictions-bidirectional-lstm-methodology/'
  },
  {
    id: 6,
    title: 'Sign Language Detection System',
    description: 'Real-time computer vision system for detecting and translating sign language gestures into text.',
    longDescription: 'Created an innovative real-time sign language detection system using computer vision and deep learning. The system captures hand gestures via webcam, processes them through a convolutional neural network, and translates them into text with 92% accuracy. This project aims to bridge communication gaps and improve accessibility for the deaf and hard-of-hearing community.',
    image: signLanguageImg,
    tags: ['Python', 'OpenCV', 'TensorFlow', 'Computer Vision', 'CNN'],
    github: 'https://github.com/example/sign-language',
    research: 'https://ijsrem.com/download/sign-language-detection-2/'
  }
];

export function ProjectsOrbit({ isDark, onProjectClick }: ProjectsOrbitProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeIndex, setActiveIndex] = useState(0);
  const [isRotating, setIsRotating] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [rotation, setRotation] = useState(0);

  const rotateOrbit = (direction: number) => {
    if (isRotating) return;
    setIsRotating(true);
    
    // Update rotation angle for smooth orbital motion - 60 degrees for 6 projects
    const angleChange = direction * 60;
    setRotation(prev => prev + angleChange);
    
    setActiveIndex((prev) => (prev + direction + projects.length) % projects.length);
    
    setTimeout(() => {
      setIsRotating(false);
    }, 900);
  };

  const getCardPosition = (index: number) => {
    // Calculate angle for each card in the orbit
    const baseAngle = index * 60; // 60 degrees apart (360/6 cards)
    const currentAngle = baseAngle - rotation;
    const angleRad = (currentAngle * Math.PI) / 180;
    
    // Orbital radius
    const radius = 450;
    
    // Calculate position on the orbit circle
    const x = Math.sin(angleRad) * radius;
    const z = Math.cos(angleRad) * radius;
    const y = Math.sin(angleRad) * 30; // Slight vertical movement for 3D effect
    
    // Determine which card is in front (closest to viewer)
    const normalizedAngle = ((currentAngle % 360) + 360) % 360;
    const distanceFromFront = Math.min(
      Math.abs(normalizedAngle),
      Math.abs(normalizedAngle - 360)
    );
    
    const isFront = distanceFromFront < 30; // 60/2 for 6 cards
    
    // Scale and opacity based on position
    const scale = isFront ? 1 : 0.65 + (1 - distanceFromFront / 180) * 0.15;
    const opacity = isFront ? 1 : 0.4 + (1 - distanceFromFront / 180) * 0.2;
    
    // Z-index based on z position (cards further back have lower z-index)
    const zIndex = Math.round(50 + z);
    
    // Rotation for 3D perspective - keep cards facing forward
    const rotateY = 0; // Don't rotate cards, keep them facing viewer
    
    // Blur for depth
    const blur = isFront ? 0 : (distanceFromFront / 180) * 3;
    
    return {
      x,
      y,
      z,
      scale,
      opacity,
      zIndex,
      rotateY,
      blur,
      isFront,
    };
  };

  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden" style={{ perspective: '2000px' }}>
      {/* Parallax rotating background grid */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          rotate: isRotating ? [0, -2, 0] : 0,
        }}
        transition={{ duration: 0.7 }}
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
          className="text-center mb-32"
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
            // Orbit through innovation
          </p>
        </motion.div>

        {/* Orbit Container */}
        <div className="relative h-[700px] flex items-center justify-center">
          {projects.map((project, index) => {
            const position = getCardPosition(index);
            const isActive = index === activeIndex;

            return (
              <motion.div
                key={project.id}
                className="absolute cursor-pointer"
                style={{
                  zIndex: position.zIndex,
                }}
                initial={{
                  x: position.x,
                  y: position.y,
                  scale: 0,
                  opacity: 0,
                }}
                animate={{
                  x: position.x,
                  y: position.y,
                  scale: position.scale,
                  opacity: position.opacity,
                  rotateY: position.rotateY,
                  filter: `blur(${position.blur}px)`,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 80,
                  damping: 25,
                  mass: 1.2,
                  duration: 0.9,
                }}
                onClick={() => !isActive && rotateOrbit(index - activeIndex)}
                onMouseEnter={() => isActive && setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={isActive ? { scale: 1.02 } : {}}
              >
                <motion.div
                  className={`w-[500px] rounded-2xl overflow-visible transition-all ${
                    isActive ? 'ring-4 ring-[#00D4FF] shadow-2xl shadow-[#00D4FF]/50' : ''
                  }`}
                  animate={{
                    height: isActive && hoveredIndex === index ? 'auto' : '300px'
                  }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                >
                  {/* Image */}
                  <motion.div 
                    className="relative rounded-t-2xl overflow-hidden"
                    animate={{
                      height: isActive && hoveredIndex === index ? '250px' : '300px'
                    }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30" />
                  </motion.div>

                  {/* Content */}
                  <div className="relative bg-gradient-to-b from-black/95 to-black/90 p-8 rounded-b-2xl">
                    <h3 className="text-3xl font-bold text-white mb-3 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                      {project.title}
                    </h3>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.slice(0, isActive && hoveredIndex === index ? project.tags.length : 4).map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-gradient-to-r from-[#00D4FF]/50 to-[#8B5CF6]/50 border border-[#00D4FF]/70 text-xs text-white backdrop-blur-sm font-semibold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Short Description - Always visible */}
                    <p className="text-white text-base leading-relaxed mb-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                      {project.description}
                    </p>

                    {/* Long Description - Only visible on hover */}
                    {isActive && hoveredIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-3 border-t border-white/30 mb-4">
                          <p className="text-white/90 text-sm leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                            {project.longDescription}
                          </p>
                        </div>
                      </motion.div>
                    )}

                    {/* Links - Only show on hover */}
                    {isActive && hoveredIndex === index && (
                      <motion.div
                        className="flex gap-3"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2, delay: 0.1 }}
                      >
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="px-4 py-2 rounded-lg bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors border border-white/30 flex items-center gap-2 text-white text-sm"
                          >
                            <Github className="w-4 h-4" />
                            <span>View Code</span>
                          </a>
                        )}
                        {project.research && (
                          <a
                            href={project.research}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="px-4 py-2 rounded-lg bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors border border-white/30 flex items-center gap-2 text-white text-sm"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span>Read Paper</span>
                          </a>
                        )}
                      </motion.div>
                    )}

                    {isActive && hoveredIndex !== index && (
                      <p className="text-xs text-white/50 font-mono mt-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                        Hover for details →
                      </p>
                    )}

                    {!isActive && (
                      <p className="text-xs text-white/50 font-mono mt-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                        Click to view →
                      </p>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}

          {/* Navigation Arrows */}
          <button
            onClick={() => rotateOrbit(-1)}
            disabled={isRotating}
            className={`absolute left-4 top-1/2 -translate-y-1/2 z-50 p-4 rounded-full transition-all ${
              isDark
                ? 'bg-white/10 hover:bg-white/20 text-white'
                : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
            } backdrop-blur-sm disabled:opacity-50`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => rotateOrbit(1)}
            disabled={isRotating}
            className={`absolute right-4 top-1/2 -translate-y-1/2 z-50 p-4 rounded-full transition-all ${
              isDark
                ? 'bg-white/10 hover:bg-white/20 text-white'
                : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
            } backdrop-blur-sm disabled:opacity-50`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}