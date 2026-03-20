import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Briefcase, Calendar, CheckCircle } from 'lucide-react';

interface ExperienceProps {
  isDark: boolean;
}

interface ExperienceItem {
  company: string;
  role: string;
  date: string;
  location: string;
  skills: string[];
  description: string[];
  category: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: 'Accolade Electronics',
    role: 'Technical Support Engineer',
    date: 'Jun 2023 - Aug 2023',
    location: 'India',
    skills: ['Embedded Systems', 'Hardware Debugging', 'Python', 'Automation', 'Technical Documentation'],
    description: [
      'Provided technical support for embedded systems and industrial applications',
      'Collaborated with hardware teams to debug and enhance product performance',
      'Implemented automation scripts reducing testing time by 30%',
      'Created technical documentation for engineering processes'
    ],
    category: ['Technical']
  },
  {
    company: 'AI CIC - Arizona State University',
    role: 'Marketing and Content Specialist',
    date: 'Aug 2024 - Present',
    location: 'Tempe, AZ',
    skills: ['Amazon QuickSight', 'AWS', 'API Integrations (REST)', 'GitHub', 'Google Drive', 'Spreadsheet Automation', 'JSON Parsing'],
    description: [
      'Built and maintained Amazon QuickSight dashboards for CIC project reporting, automating weekly/monthly updates and cutting manual reporting by 40%',
      'Automated content-pipeline tracking with spreadsheet workflows, centralizing 50+ assets and boosting team productivity by 40%',
      'Developed an internal blog-generation tool that merges GitHub README → JSON + Google Drive Project Closure inputs into CIC-standard drafts, reducing draft time by 60% and increasing throughput by 30%'
    ],
    category: ['Leadership']
  },
  {
    company: 'Microsoft Learn Student Ambassadors',
    role: 'Design Team Lead',
    date: 'Jun 2022 - May 2024',
    location: 'Remote',
    skills: ['Team Leadership', 'Canva', 'Adobe Creative Suite', 'Video Production', 'Git', 'Agile Workflows'],
    description: [
      'Managed end-to-end creative production for Microsoft student community, leading team of 5 designers to produce 20+ promotional videos and graphics that boosted event registrations by 30% quarter-over-quarter',
      'Architected centralized media library and Git-based version control workflow, improving team productivity by 40% and ensuring zero missed deadlines across 15+ campaign launches',
      'Strengthened skills in team leadership, agile content workflows, Canva, Adobe Creative Suite, and data-driven storytelling translating technical concepts into engaging visual narratives for diverse student audiences'
    ],
    category: ['Design']
  }
];

export function Experience({ isDark }: ExperienceProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [filter, setFilter] = useState('All');

  const filters = ['All', 'Technical', 'Leadership', 'Design'];

  const filteredExperiences = filter === 'All' 
    ? experiences 
    : experiences.filter(exp => exp.category.includes(filter));

  return (
    <section id="experience" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00D4FF]/5 to-transparent" />
      
      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto relative z-10" ref={ref}>
        <motion.h2
          className={`text-5xl md:text-6xl font-bold text-center mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>

        {/* Filters */}
        <motion.div
          className="flex flex-wrap gap-4 justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filters.map((filterName) => (
            <button
              key={filterName}
              onClick={() => setFilter(filterName)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                filter === filterName
                  ? 'bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] text-white'
                  : isDark 
                    ? 'bg-white/5 text-white/70 hover:bg-white/10' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {filterName}
            </button>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00D4FF] via-[#8B5CF6] to-[#00D4FF]" />

          {filteredExperiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`relative mb-16 md:mb-24 ${
                index % 2 === 0 ? 'md:pr-[50%]' : 'md:pl-[50%]'
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Timeline dot */}
              <div className={`hidden md:block absolute top-0 ${
                index % 2 === 0 ? 'right-0' : 'left-0'
              } w-12 h-12 -translate-x-1/2 left-1/2`}>
                <motion.div
                  className="w-full h-full rounded-full bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] flex items-center justify-center"
                  whileHover={{ scale: 1.2, rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <Briefcase className="w-6 h-6 text-white" />
                </motion.div>
              </div>

              {/* Card */}
              <motion.div
                className={`group rounded-2xl p-8 border transition-all duration-500 overflow-hidden ${
                  isDark 
                    ? 'backdrop-blur-sm hover:border-[#00D4FF]/50' 
                    : 'bg-white border-gray-200 hover:border-[#00D4FF] shadow-lg'
                } ${
                  index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                }`}
                style={isDark ? {
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderColor: 'rgba(255, 255, 255, 0.1)'
                } : undefined}
                whileHover={{ 
                  y: -10, 
                  boxShadow: isDark ? '0 20px 60px rgba(0, 212, 255, 0.3)' : '0 20px 60px rgba(0, 0, 0, 0.15)'
                }}
              >
                {/* Company logo placeholder */}
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#00D4FF] to-[#8B5CF6] mb-4 flex items-center justify-center">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>

                <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{exp.role}</h3>
                <p className="text-xl text-[#00D4FF] mb-3">{exp.company}</p>
                
                <div className={`flex items-center gap-2 mb-4 ${
                  isDark ? 'text-white/60' : 'text-gray-600'
                }`}>
                  <Calendar className="w-4 h-4" />
                  <span>{exp.date}</span>
                  <span className="mx-2">•</span>
                  <span>{exp.location}</span>
                </div>

                {/* Skills - Always visible */}
                <div className="mb-4">
                  <p className={`text-sm mb-2 font-mono ${isDark ? 'text-white/50' : 'text-gray-500'}`}>Skills & Tools:</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-3 py-1 rounded-full bg-gradient-to-r from-[#00D4FF]/20 to-[#8B5CF6]/20 border border-[#00D4FF]/30 text-sm ${
                          isDark ? 'text-white/90' : 'text-gray-800'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description - Hidden by default, visible on hover */}
                <div className="max-h-0 group-hover:max-h-[1000px] overflow-hidden transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                  <div className={`pt-4 mt-4 border-t ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
                    <p className={`text-sm mb-3 font-mono ${isDark ? 'text-white/50' : 'text-gray-500'}`}>Key Achievements:</p>
                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <li key={i} className={`flex gap-3 text-sm ${
                          isDark ? 'text-white/80' : 'text-gray-700'
                        }`}>
                          <CheckCircle className="w-5 h-5 text-[#00D4FF] flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Hover hint */}
                <p className={`text-xs mt-4 font-mono group-hover:opacity-0 transition-opacity ${
                  isDark ? 'text-white/30' : 'text-gray-400'
                }`}>
                  Hover to see details
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}