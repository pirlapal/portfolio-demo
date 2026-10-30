import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Code2, Brain, Workflow, Database, Wrench, Camera } from 'lucide-react';

interface SkillCategory {
  name: string;
  icon: React.ElementType;
  skills: string[];
  color: string;
  lightBg: string;
  lightBorder: string;
}

const categories: SkillCategory[] = [
  {
    name: 'Programming',
    icon: Code2,
    skills: ['Python', 'Java', 'JavaScript', 'TypeScript'],
    color: '#C75B39',
    lightBg: 'rgba(199, 91, 57, 0.10)',
    lightBorder: 'rgba(199, 91, 57, 0.20)',
  },
  {
    name: 'AI / ML',
    icon: Brain,
    skills: ['TensorFlow', 'PyTorch', 'Deep Learning', 'NLP', 'Computer Vision'],
    color: '#7B6BA5',
    lightBg: 'rgba(123, 107, 165, 0.10)',
    lightBorder: 'rgba(123, 107, 165, 0.20)',
  },
  {
    name: 'Web Development',
    icon: Workflow,
    skills: ['React', 'Node.js', 'Express', 'MongoDB', 'REST APIs'],
    color: '#5A8A6D',
    lightBg: 'rgba(90, 138, 109, 0.10)',
    lightBorder: 'rgba(90, 138, 109, 0.20)',
  },
  {
    name: 'Data & Cloud',
    icon: Database,
    skills: ['SQL', 'AWS', 'QuickSight', 'Docker', 'Lambda'],
    color: '#5B8A96',
    lightBg: 'rgba(91, 138, 150, 0.10)',
    lightBorder: 'rgba(91, 138, 150, 0.20)',
  },
  {
    name: 'Automation',
    icon: Wrench,
    skills: ['n8n', 'Agentic AI', 'RAG', 'Webhooks', 'API Integrations'],
    color: '#B8863B',
    lightBg: 'rgba(184, 134, 59, 0.10)',
    lightBorder: 'rgba(184, 134, 59, 0.20)',
  },
  {
    name: 'Creative',
    icon: Camera,
    skills: ['Photography', 'Videography', 'Video Editing', 'Content Creation'],
    color: '#B5627A',
    lightBg: 'rgba(181, 98, 122, 0.10)',
    lightBorder: 'rgba(181, 98, 122, 0.20)',
  },
];

const additionalSkills = ['GraphQL', 'Redux', 'Microservices', 'CI/CD', 'Agile', 'Scrum', 'Git', 'Postman'];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="skills" className="py-24 md:py-32 px-6 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-100 border border-stone-300 mb-4">
            <Code2 className="w-4 h-4 text-[#A0725A]" />
            <span className="text-[#A0725A] text-sm font-semibold uppercase tracking-wide">Skills</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 mb-4">
            Tech <span className="text-[#A0725A]">Stack</span>
          </h2>
          <p className="text-stone-500 text-lg max-w-2xl mx-auto">
            Tools and technologies I work with across engineering, AI, and creative domains.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.name}
                className="group rounded-2xl p-7 bg-[#F7F4F0] border border-stone-200 hover:border-stone-300 hover:shadow-xl transition-all duration-300"
                variants={cardVariants}
                whileHover={{ y: -4 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="p-3 rounded-xl"
                    style={{ background: category.lightBg, border: `1px solid ${category.lightBorder}` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: category.color }} />
                  </div>
                  <h3 className="text-lg font-bold text-stone-900">{category.name}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg text-sm font-medium text-stone-600 bg-stone-100 border border-stone-300 hover:bg-stone-200 hover:border-stone-400 transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="p-8 rounded-2xl bg-[#F7F4F0] border border-stone-200"
        >
          <p className="text-[#A0725A] text-sm font-semibold uppercase tracking-wide mb-4">Also experienced with</p>
          <div className="flex flex-wrap gap-2">
            {additionalSkills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-lg text-sm font-medium text-stone-600 bg-stone-100 border border-stone-300 hover:border-stone-300 hover:text-[#A0725A] transition-all duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
