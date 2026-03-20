import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { Code, Sparkles, Award } from 'lucide-react';
import profileImage from 'figma:asset/4b859c5fa9845a63f90c2c4a6fe2116b27774b8f.png';

interface AboutProps {
  isDark: boolean;
}

function AnimatedCounter({ end, label, icon: Icon, isDark }: { end: number; label: string; icon: any; isDark: boolean }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-center gap-2 mb-2">
        <Icon className="w-6 h-6 text-[#00D4FF]" />
        <span className="text-4xl font-bold bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] bg-clip-text text-transparent">
          {count}+
        </span>
      </div>
      <p className={isDark ? 'text-white/70' : 'text-gray-600'}>{label}</p>
    </motion.div>
  );
}

export function About({ isDark }: AboutProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skills = [
    'Python', 'Java', 'JavaScript', 'React', 'Node.js', 'TensorFlow',
    'PyTorch', 'AWS', 'SQL', 'MongoDB', 'Git', 'AWS Bedrock',
    'Amazon QuickSight', 'AWS Lambda', 'API Gateway', 'n8n', 'OAuth 2.0',
    'REST APIs', 'Webhooks', 'Docker', 'Postman', 'Agentic AI', 'RAG',
    'Workflow Automation', 'API Integrations'
  ];

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#8B5CF6]/5 to-transparent" />
      
      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto relative z-10" ref={ref}>
        <motion.h2
          className={`text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold text-center mb-16 ${isDark ? 'text-white' : 'text-gray-900'}`}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-80 h-80 mx-auto">
              {/* Tech grid overlay */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <div 
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage: `
                      linear-gradient(to right, #00D4FF 1px, transparent 1px),
                      linear-gradient(to bottom, #00D4FF 1px, transparent 1px)
                    `,
                    backgroundSize: '20px 20px',
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] rounded-full blur-xl opacity-50" />
              <div className="relative rounded-full w-full h-full overflow-hidden border-4 border-[#00D4FF]/50">
                <img
                  src={profileImage}
                  alt="Pranav Irlapale"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 35%' }}
                />
              </div>
              {/* Corner brackets */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-[#00D4FF] rounded-tl-full" />
              <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-[#8B5CF6] rounded-tr-full" />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-[#8B5CF6] rounded-bl-full" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-[#00D4FF] rounded-br-full" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <p className={`text-base md:text-lg 2xl:text-xl leading-relaxed ${isDark ? 'text-white/80' : 'text-gray-700'}`}>
              Software Engineering grad student at Arizona State University focused on AI/ML + automation. I build full-stack systems and intelligent tools that turn complex problems into reliable products.
            </p>
            <p className={`text-base md:text-lg 2xl:text-xl leading-relaxed ${isDark ? 'text-white/80' : 'text-gray-700'}`}>
              My background includes research in deep learning applications, and I'm now focused on building core software engineering projects, automation solutions, and agentic AI tools that execute workflows end-to-end. I enjoy designing scalable backends, integrating intelligent models, and shipping systems that are reliable, measurable, and built to last.
            </p>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-3 gap-8 mb-16 max-w-4xl 2xl:max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <AnimatedCounter end={2} label="Years Experience" icon={Code} isDark={isDark} />
          <AnimatedCounter end={5} label="Projects" icon={Sparkles} isDark={isDark} />
          <AnimatedCounter end={2} label="Research Papers" icon={Award} isDark={isDark} />
        </motion.div>

        {/* Skills tag cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className={`text-2xl font-semibold text-center mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>Core Technologies</h3>
          <div className="flex flex-wrap gap-4 justify-center max-w-5xl 2xl:max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                className={`px-6 py-3 rounded-full backdrop-blur-sm border border-[#00D4FF]/30 hover:bg-gradient-to-r hover:from-[#00D4FF]/20 hover:to-[#8B5CF6]/20 hover:border-[#8B5CF6]/50 hover:scale-110 transition-all duration-300 cursor-pointer ${
                  isDark ? 'text-white' : 'bg-gray-100 text-gray-800'
                }`}
                style={isDark ? {
                  backgroundColor: 'rgba(255, 255, 255, 0.05)'
                } : undefined}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                whileHover={{ y: -5 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}