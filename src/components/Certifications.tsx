import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ExternalLink, Shield, Award } from 'lucide-react';

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  certificateId: string;
  skills: string[];
  certificateUrl?: string;
}

const certifications: Certification[] = [
  {
    id: 1,
    title: 'Getting Started with AWS Pentesting',
    issuer: 'EC-Council',
    date: 'Dec 2023',
    certificateId: '275553',
    skills: ['AWS', 'Cloud Security', 'Pentesting', 'IAM'],
  },
  {
    id: 2,
    title: 'Practical Spring Security',
    issuer: 'EC-Council',
    date: 'Oct 2023',
    certificateId: '260804',
    skills: ['Spring Security', 'AppSec', 'OWASP', 'Secure Coding'],
  },
  {
    id: 3,
    title: 'Penetration Testing with BlackArch Linux',
    issuer: 'EC-Council',
    date: 'Jan 2024',
    certificateId: '290515',
    skills: ['BlackArch', 'Linux', 'Offensive Security'],
  },
  {
    id: 4,
    title: 'AWS Academy – Cloud Foundations',
    issuer: 'Amazon Web Services',
    date: 'Apr 2022',
    certificateId: 'Credly',
    skills: ['AWS Architecture', 'Cloud', 'Core Services'],
    certificateUrl: 'https://www.credly.com/badges/c8028802-8cd9-46b7-82a4-fc6825540417',
  },
  {
    id: 5,
    title: 'AWS Academy – Data Analytics',
    issuer: 'Amazon Web Services',
    date: 'May 2022',
    certificateId: 'Credly',
    skills: ['AWS', 'Analytics', 'Data Infrastructure'],
    certificateUrl: 'https://www.credly.com/badges/2b5c38bc-6633-4a97-95b8-5018d8290469',
  },
  {
    id: 6,
    title: 'Getting Started with Artificial Intelligence',
    issuer: 'IBM SkillsBuild',
    date: 'Jun 2024',
    certificateId: 'Credly',
    skills: ['AI', 'Generative AI', 'Machine Learning', 'Prompt Tuning'],
    certificateUrl: 'https://www.credly.com/badges/c0397397-944b-4325-a844-066acf87b1f9',
  },
];

function getIssuerStyle(issuer: string) {
  if (issuer === 'EC-Council') return { color: '#EF4444', bg: 'bg-red-50', text: 'text-red-600', border: 'border-red-200', iconBg: 'rgba(239, 68, 68, 0.1)' };
  if (issuer.includes('AWS') || issuer.includes('Amazon')) return { color: '#F59E0B', bg: 'bg-amber-50', text: 'text-amber-600', border: 'border-amber-200', iconBg: 'rgba(245, 158, 11, 0.1)' };
  if (issuer.includes('IBM')) return { color: '#3B82F6', bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200', iconBg: 'rgba(59, 130, 246, 0.1)' };
  return { color: '#9CA3AF', bg: 'bg-stone-50', text: 'text-stone-600', border: 'border-stone-200', iconBg: 'rgba(156, 163, 175, 0.1)' };
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
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

export function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="certifications" className="py-24 md:py-32 px-6 bg-[#F7F4F0]" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-100 border border-stone-300 mb-4">
            <Award className="w-4 h-4 text-[#A0725A]" />
            <span className="text-[#A0725A] text-sm font-semibold uppercase tracking-wide">Certifications</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 mb-4">
            Credentials & <span className="text-[#A0725A]">Expertise</span>
          </h2>
          <p className="text-stone-500 text-lg max-w-xl mx-auto">
            Industry-recognized credentials in cybersecurity, cloud, and AI.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {certifications.map((cert) => {
            const style = getIssuerStyle(cert.issuer);
            return (
              <motion.div
                key={cert.id}
                className="group rounded-2xl p-6 bg-white border border-stone-200 hover:border-stone-300 hover:shadow-xl transition-all duration-300 flex flex-col"
                variants={cardVariants}
                whileHover={{ y: -4 }}
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div
                    className="p-2.5 rounded-xl shrink-0"
                    style={{ background: style.iconBg }}
                  >
                    <Shield className="w-5 h-5" style={{ color: style.color }} />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${style.bg} ${style.text} ${style.border} border`}>
                    {cert.issuer.includes('Amazon') ? 'AWS' : cert.issuer.includes('IBM') ? 'IBM' : cert.issuer}
                  </span>
                </div>

                <h3 className="text-base font-bold text-stone-900 mb-2 leading-tight group-hover:text-[#A0725A] transition-colors">
                  {cert.title}
                </h3>

                <p className="text-stone-500 text-xs mb-4">
                  {cert.date} · ID: {cert.certificateId}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5 flex-grow">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md text-xs font-medium text-stone-500 bg-stone-100 border border-stone-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {cert.certificateUrl && (
                  <a
                    href={cert.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-[#A0725A] hover:text-[#8A6049] transition-colors mt-auto font-medium"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Verify on Credly
                  </a>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
