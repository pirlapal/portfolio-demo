import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Award, Briefcase, FileText } from 'lucide-react';
import profileImage from 'figma:asset/4b859c5fa9845a63f90c2c4a6fe2116b27774b8f.png';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const highlights = [
    { label: 'Experience', value: '2+', unit: 'Years', icon: Briefcase },
    { label: 'Projects', value: '6+', unit: 'Built', icon: FileText },
    { label: 'Research', value: '2', unit: 'Papers', icon: Award },
  ];

  return (
    <section id="about" className="py-24 md:py-32 px-6 bg-[#F7F4F0]" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid md:grid-cols-[360px_1fr] lg:grid-cols-[400px_1fr] gap-12 lg:gap-20 items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="relative mx-auto md:mx-0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-stone-200 shadow-xl bg-white">
              <img
                src={profileImage}
                alt="Pranav Irlapale"
                className="w-full h-full object-cover object-center scale-110"
              />
            </div>

            <motion.div
              className="absolute -bottom-4 -right-4 px-5 py-3 rounded-2xl bg-white border border-stone-200 shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.4 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-green-600 animate-pulse" />
                <span className="text-sm font-bold text-stone-900">Available for Work</span>
              </div>
            </motion.div>
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-stone-200 mb-4">
                <span className="text-[#A0725A] text-sm font-semibold uppercase tracking-wide">About Me</span>
              </div>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Software Engineering
              <br />
              <span className="text-[#A0725A]">Meets Intelligence</span>
            </motion.h2>

            <motion.div
              className="space-y-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <p className="text-stone-500 text-lg leading-relaxed">
                Software Engineering grad student at Arizona State University focused on AI/ML and automation. I build full-stack systems and intelligent tools that turn complex problems into reliable products.
              </p>
              <p className="text-stone-500 text-lg leading-relaxed">
                My background includes research in deep learning applications, and I'm now focused on building core software engineering projects, automation solutions, and agentic AI tools that execute workflows end-to-end.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    className="p-5 rounded-2xl bg-white border border-stone-200 hover:border-stone-300 hover:shadow-lg transition-all duration-300"
                    whileHover={{ y: -4 }}
                  >
                    <Icon className="w-5 h-5 text-[#A0725A] mb-3" />
                    <p className="text-3xl font-black text-stone-900 mb-0.5">{item.value}</p>
                    <p className="text-sm text-stone-500 font-medium">{item.unit}</p>
                    <p className="text-stone-500 text-xs font-semibold uppercase tracking-wide mt-1">{item.label}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
