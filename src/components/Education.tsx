import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

interface EducationItem {
  school: string;
  degree: string;
  field: string;
  date: string;
  location: string;
  gpa: string;
  highlights: string[];
}

const education: EducationItem[] = [
  {
    school: 'Arizona State University',
    degree: 'Master of Science',
    field: 'Software Engineering',
    date: 'Aug 2025 – May 2027',
    location: 'Tempe, AZ',
    gpa: '4.0',
    highlights: ['Focus on AI/ML and modern engineering', 'Graduate research in intelligent systems'],
  },
  {
    school: 'DYPCET, India',
    degree: 'Bachelor of Technology',
    field: 'Computer Science Engineering',
    date: 'Jun 2020 – May 2024',
    location: 'India',
    gpa: '3.8',
    highlights: ['Published 2 research papers in AI/ML', 'Multiple hackathon winner'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
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

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="education" className="py-24 md:py-32 px-6 bg-[#F7F4F0]" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-100 border border-stone-300 mb-4">
            <GraduationCap className="w-4 h-4 text-[#A0725A]" />
            <span className="text-[#A0725A] text-sm font-semibold uppercase tracking-wide">Education</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900">
            Academic <span className="text-[#A0725A]">Journey</span>
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {education.map((edu) => (
            <motion.div
              key={edu.school}
              className="group rounded-2xl p-8 md:p-10 bg-white border border-stone-200 hover:border-stone-300 hover:shadow-xl transition-all duration-300"
              variants={cardVariants}
              whileHover={{ y: -4 }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-stone-100 border border-stone-300 shrink-0">
                  <GraduationCap className="w-6 h-6 text-[#A0725A]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-stone-900 group-hover:text-[#A0725A] transition-colors">
                    {edu.school}
                  </h3>
                  <p className="text-[#A0725A] text-sm font-semibold mt-1">{edu.degree}</p>
                  <p className="text-stone-500 text-sm">{edu.field}</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-stone-500 text-xs mb-6">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#A0725A]" />
                  {edu.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#A0725A]" />
                  {edu.location}
                </span>
                <span className="px-3 py-1 rounded-full bg-stone-100 border border-stone-300 text-[#A0725A] text-xs font-bold">
                  GPA: {edu.gpa}/4.0
                </span>
              </div>

              <ul className="space-y-3">
                {edu.highlights.map((item, i) => (
                  <li key={i} className="flex gap-3 text-stone-600 text-sm leading-relaxed">
                    <span className="text-[#A0725A] mt-0.5 shrink-0">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
