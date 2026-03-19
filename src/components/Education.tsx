import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

interface EducationProps {
  isDark: boolean;
}

interface EducationItem {
  school: string;
  degree: string;
  field: string;
  date: string;
  location: string;
  gpa?: string;
  achievements?: string[];
}

const education: EducationItem[] = [
  {
    school: 'Arizona State University',
    degree: 'Master of Science',
    field: 'Software Engineering',
    date: '2024 - Present',
    location: 'Tempe, AZ',
    gpa: '4.0',
    achievements: [
      'Focus on AI/ML and Distributed Systems',
      'Graduate Research Assistant',
      'Teaching Assistant for Software Development'
    ]
  },
  {
    school: 'D.Y. Patil College of Engineering & Technology',
    degree: 'Bachelor of Engineering',
    field: 'Computer Engineering',
    date: '2019 - 2023',
    location: 'India',
    gpa: '3.8',
    achievements: [
      'Published 2 research papers in AI/ML',
      'President of Technical Club',
      'Winner of multiple hackathons'
    ]
  }
];

export function Education({ isDark }: EducationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="education" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#8B5CF6]/5 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] mb-6">
            <GraduationCap className="w-10 h-10 text-white" />
          </div>
          <h2 className={`text-5xl md:text-6xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Education
          </h2>
          <p className={`text-xl ${isDark ? 'text-white/70' : 'text-gray-600'}`}>
            Academic foundation and continuous learning
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <motion.div
                className={`rounded-2xl p-8 border h-full ${
                  isDark 
                    ? 'backdrop-blur-sm' 
                    : 'bg-white border-gray-200 shadow-lg'
                }`}
                style={isDark ? {
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderColor: 'rgba(255, 255, 255, 0.1)'
                } : undefined}
                whileHover={{ 
                  y: -10, 
                  borderColor: 'rgba(0, 212, 255, 0.5)',
                  boxShadow: isDark ? '0 20px 60px rgba(139, 92, 246, 0.3)' : '0 20px 60px rgba(0, 0, 0, 0.15)'
                }}
                transition={{ duration: 0.3 }}
              >
                {/* School logo placeholder */}
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#00D4FF] to-[#8B5CF6] mb-6 flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>

                {/* School name */}
                <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {edu.school}
                </h3>

                {/* Degree */}
                <div className="mb-4">
                  <p className="text-xl text-[#00D4FF] font-semibold">
                    {edu.degree}
                  </p>
                  <p className={`text-lg ${isDark ? 'text-white/80' : 'text-gray-700'}`}>
                    {edu.field}
                  </p>
                </div>

                {/* Date and location */}
                <div className={`flex flex-wrap gap-4 mb-4 ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                {/* GPA */}
                {edu.gpa && (
                  <div className="mb-4">
                    <span className={`px-4 py-2 rounded-full bg-gradient-to-r from-[#00D4FF]/20 to-[#8B5CF6]/20 border border-[#00D4FF]/30 ${
                      isDark ? 'text-white' : 'text-gray-800'
                    }`}>
                      GPA: {edu.gpa}/4.0
                    </span>
                  </div>
                )}

                {/* Achievements */}
                {edu.achievements && (
                  <div className="mt-6">
                    <h4 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className={`flex items-start gap-2 ${isDark ? 'text-white/70' : 'text-gray-700'}`}>
                          <span className="text-[#00D4FF] mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional certifications or courses */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Certifications & Learning
          </h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              'AWS Certified Developer',
              'Deep Learning Specialization',
              'Microsoft Azure Fundamentals',
              'Python for Data Science'
            ].map((cert, index) => (
              <motion.div
                key={cert}
                className={`px-6 py-3 rounded-xl border transition-all ${
                  isDark 
                    ? 'bg-white/5 backdrop-blur-sm border-white/10 text-white hover:border-[#8B5CF6]/50' 
                    : 'bg-gray-100 border-gray-200 text-gray-800 hover:border-[#8B5CF6]'
                }`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {cert}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}