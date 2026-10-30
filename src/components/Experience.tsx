import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Calendar, MapPin, TrendingUp } from 'lucide-react';

interface ExperienceItem {
  company: string;
  role: string;
  date: string;
  location: string;
  skills: string[];
  description: string[];
  current?: boolean;
}

const experiences: ExperienceItem[] = [
  {
    company: 'AI CIC — Arizona State University',
    role: 'Marketing and Content Specialist',
    date: 'Aug 2024 – Present',
    location: 'Tempe, AZ',
    current: true,
    skills: ['Amazon QuickSight', 'AWS', 'API Integrations', 'GitHub', 'JSON Parsing'],
    description: [
      'Built and maintained Amazon QuickSight dashboards for CIC project reporting, automating weekly/monthly updates and cutting manual reporting by 40%',
      'Automated content-pipeline tracking with spreadsheet workflows, centralizing 50+ assets and boosting team productivity by 40%',
      'Developed an internal blog-generation tool that merges GitHub README → JSON + Google Drive inputs into CIC-standard drafts, reducing draft time by 60%',
    ],
  },
  {
    company: 'Microsoft Learn Student Ambassadors',
    role: 'Design Team Lead',
    date: 'Jun 2022 – May 2024',
    location: 'Remote',
    skills: ['Team Leadership', 'Adobe Creative Suite', 'Video Production', 'Agile Workflows'],
    description: [
      'Led team of 5 designers to produce 20+ promotional videos and graphics that boosted event registrations by 30% quarter-over-quarter',
      'Architected centralized media library and Git-based version control workflow, improving team productivity by 40%',
      'Strengthened skills in agile content workflows and data-driven storytelling for diverse student audiences',
    ],
  },
  {
    company: 'Accolade Electronics',
    role: 'Technical Support Engineer',
    date: 'Jun 2023 – Aug 2023',
    location: 'India',
    skills: ['Embedded Systems', 'Python', 'Automation', 'Hardware Debugging'],
    description: [
      'Provided technical support for embedded systems and industrial applications',
      'Collaborated with hardware teams to debug and enhance product performance',
      'Implemented automation scripts reducing testing time by 30%',
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="experience" className="py-24 md:py-32 px-6 bg-white" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-100 border border-stone-300 mb-4">
            <TrendingUp className="w-4 h-4 text-[#A0725A]" />
            <span className="text-[#A0725A] text-sm font-semibold uppercase tracking-wide">Career Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 mb-4">
            Where I've <span className="text-[#A0725A]">Grown</span>
          </h2>
          <p className="text-stone-500 text-lg max-w-2xl mx-auto">
            Building impactful solutions across automation, content systems, and technical leadership
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-stone-300 via-stone-200 to-transparent" />

          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {experiences.map((exp) => (
              <motion.div
                key={exp.company}
                className="relative group"
                variants={itemVariants}
              >
                <div className="hidden md:flex absolute left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-[#A0725A] border-4 border-white shadow-md z-10 group-hover:scale-125 transition-transform duration-300" />

                <div className="md:ml-20 rounded-2xl border border-stone-200 bg-[#F7F4F0] p-8 hover:border-stone-300 hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-stone-900 group-hover:text-[#A0725A] transition-colors">
                          {exp.role}
                        </h3>
                        {exp.current && (
                          <span className="px-3 py-1 rounded-full bg-green-50 border border-green-200 text-green-700 text-xs font-bold uppercase tracking-wide">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-stone-500 text-base font-medium">{exp.company}</p>
                    </div>
                    <div className="flex flex-col gap-2 text-stone-500 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#A0725A]" />
                        <span className="font-medium">{exp.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#A0725A]" />
                        <span className="font-medium">{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex gap-3 text-stone-600 text-sm leading-relaxed">
                        <span className="text-[#A0725A] font-bold mt-0.5 shrink-0">▸</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-md text-xs font-semibold text-stone-600 bg-stone-100 border border-stone-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
