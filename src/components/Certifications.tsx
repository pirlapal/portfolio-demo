import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Award, ExternalLink, Calendar, CheckCircle, Shield, Download, X } from 'lucide-react';

interface CertificationsProps {
  isDark: boolean;
}

interface Certification {
  id: number;
  certificateId: string;
  title: string;
  subtitle: string;
  issuer: string;
  issueDate: string;
  issuedTo: string;
  signedBy: string;
  verified: string;
  description: string;
  skills: string[];
  certificateUrl?: string;
}

const certifications: Certification[] = [
  {
    id: 1,
    certificateId: '275553',
    title: 'Getting Started with AWS Pentesting',
    subtitle: 'Training Certificate',
    issuer: 'EC-Council',
    issueDate: '15th Dec 2023',
    issuedTo: 'Pranav Irlapale',
    signedBy: 'Jay Bavisi (President)',
    verified: 'Verified (Certificate ID)',
    description: 'Completed EC-Council training covering AWS pentesting basics, cloud attack surface, and security testing fundamentals.',
    skills: ['AWS', 'Cloud Security', 'Pentesting', 'Recon', 'IAM/Security', 'Vulnerability Assessment'],
  },
  {
    id: 2,
    certificateId: '260804',
    title: 'Practical Spring Security',
    subtitle: 'Training Certificate',
    issuer: 'EC-Council',
    issueDate: '27th Oct 2023',
    issuedTo: 'Pranav Irlapale',
    signedBy: 'Jay Bavisi (President)',
    verified: 'Verified (Certificate ID)',
    description: 'Completed hands-on training focused on securing Spring apps, auth flows, and common web security hardening.',
    skills: ['Spring Security', 'AppSec', 'Authentication', 'Authorization', 'OWASP', 'Secure Coding'],
  },
  {
    id: 3,
    certificateId: '290515',
    title: 'Hands-on Penetration Testing with BlackArch Linux',
    subtitle: 'Training Certificate',
    issuer: 'EC-Council',
    issueDate: '29th Jan 2024',
    issuedTo: 'Pranav Irlapale',
    signedBy: 'Jay Bavisi (President)',
    verified: 'Verified (Certificate ID)',
    description: 'Completed practical training using BlackArch tools for penetration testing workflows and offensive Linux tooling.',
    skills: ['BlackArch', 'Linux', 'Offensive Security', 'Enumeration', 'Exploitation Basics', 'Tooling'],
  },
  {
    id: 4,
    certificateId: 'Credly',
    title: 'AWS Academy Graduate – Cloud Foundations',
    subtitle: 'Training Badge',
    issuer: 'Amazon Web Services (AWS)',
    issueDate: 'April 2022',
    issuedTo: 'Pranav Irlapale',
    signedBy: 'AWS Academy',
    verified: 'Verified (Credly)',
    description: 'Completed AWS Academy Cloud Foundations training covering core AWS services, cloud architecture basics, pricing models, and support/operational best practices—building a strong foundation for designing and deploying solutions on AWS.',
    skills: ['AWS Architecture', 'AWS Cloud', 'AWS Core Services', 'AWS Pricing', 'AWS Support'],
    certificateUrl: 'https://www.credly.com/badges/c8028802-8cd9-46b7-82a4-fc6825540417?source=linked_in_profile'
  },
  {
    id: 5,
    certificateId: 'Credly',
    title: 'AWS Academy Graduate – AWS Academy Data Analytics',
    subtitle: 'Training Badge',
    issuer: 'Amazon Web Services (AWS)',
    issueDate: 'May 2022',
    issuedTo: 'Pranav Irlapale',
    signedBy: 'AWS Academy',
    verified: 'Verified (Credly)',
    description: 'Completed AWS Academy Data Analytics training focused on core analytics concepts, AWS cloud best practices, and building data/analytics infrastructure on AWS—strengthening my ability to design data-driven solutions in the cloud.',
    skills: ['Amazon Web Services', 'Analytics & Data', 'AWS Cloud Best Practices', 'Building Infrastructure on AWS'],
    certificateUrl: 'https://www.credly.com/badges/2b5c38bc-6633-4a97-95b8-5018d8290469?source=linked_in_profile'
  },
  {
    id: 6,
    certificateId: 'Credly',
    title: 'Getting Started with Artificial Intelligence',
    subtitle: 'Training Badge',
    issuer: 'IBM SkillsBuild',
    issueDate: 'June 2024',
    issuedTo: 'Pranav Irlapale',
    signedBy: 'IBM SkillsBuild',
    verified: 'Verified (Credly)',
    description: 'Earned IBM SkillsBuild credential validating a strong foundation in core AI concepts and real-world AI applications, including an introduction to Generative AI and hands-on practice refining and creating effective prompts.',
    skills: ['Artificial Intelligence', 'AI Applications', 'Generative AI', 'Machine Learning', 'Prompt Tuning', 'Data Structures'],
    certificateUrl: 'https://www.credly.com/badges/c0397397-944b-4325-a844-066acf87b1f9/linked_in_profile'
  }
];

export function Certifications({ isDark }: CertificationsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  // Helper function to get issuer badge styles
  const getIssuerBadge = (issuer: string) => {
    if (issuer === 'EC-Council') {
      return {
        text: 'EC-Council',
        style: isDark
          ? 'bg-red-500/20 text-red-400 border border-red-500/30'
          : 'bg-red-500/10 text-red-600 border border-red-500/20'
      };
    } else if (issuer.includes('AWS')) {
      return {
        text: 'AWS',
        style: isDark
          ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
          : 'bg-orange-500/10 text-orange-600 border border-orange-500/20'
      };
    } else if (issuer.includes('IBM')) {
      return {
        text: 'IBM',
        style: isDark
          ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
          : 'bg-blue-500/10 text-blue-600 border border-blue-500/20'
      };
    }
    return {
      text: issuer,
      style: isDark
        ? 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
        : 'bg-gray-500/10 text-gray-600 border border-gray-500/20'
    };
  };

  return (
    <section id="certifications" className="py-24 px-6 relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            radial-gradient(circle at 2px 2px, ${isDark ? '#00D4FF' : '#0088CC'} 1px, transparent 0)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className={`inline-block mb-4 font-mono ${isDark ? 'text-[#00D4FF]' : 'text-[#0088CC]'}`}
            initial={{ opacity: 0, filter: 'blur(4px)' }}
            animate={isInView ? { opacity: 1, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className={isDark ? 'text-[#8B5CF6]' : 'text-[#7C4EE0]'}>{'<'}</span>
            certifications
            <span className={isDark ? 'text-[#8B5CF6]' : 'text-[#7C4EE0]'}>{' />'}</span>
          </motion.div>
          <motion.h2 
            className={`text-5xl md:text-6xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Certifications
          </motion.h2>
          <motion.p 
            className={`mt-4 text-lg ${isDark ? 'text-white/60' : 'text-gray-600'}`}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Industry-recognized credentials in cybersecurity, penetration testing, and application security.
          </motion.p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ perspective: '1500px' }}>
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 18, filter: 'blur(4px)' }}
              animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{ 
                duration: 0.6, 
                delay: 0.4 + (index * 0.1),
                ease: [0.16, 1, 0.3, 1]
              }}
              className="group"
              onMouseEnter={() => setHoveredCard(cert.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                opacity: hoveredCard === null ? 1 : hoveredCard === cert.id ? 1 : 0.75,
                filter: hoveredCard === null ? 'blur(0px)' : hoveredCard === cert.id ? 'blur(0px)' : 'blur(0.5px)',
                transition: 'opacity 300ms ease-out, filter 300ms ease-out'
              }}
            >
              <motion.div
                className={`h-full rounded-2xl p-8 border-2 relative overflow-hidden flex flex-col ${
                  isDark
                    ? ''
                    : 'bg-white border-gray-200'
                }`}
                style={isDark ? {
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderColor: 'rgba(255, 255, 255, 0.1)',
                  boxShadow: hoveredCard === cert.id 
                    ? '0 20px 60px -15px rgba(0, 212, 255, 0.3), 0 10px 30px -10px rgba(139, 92, 246, 0.2), 0 0 0 1px rgba(0, 212, 255, 0.1)'
                    : 'none',
                  transition: 'box-shadow 300ms ease-out'
                } : {
                  boxShadow: hoveredCard === cert.id 
                    ? '0 20px 60px -15px rgba(0, 136, 204, 0.3), 0 10px 30px -10px rgba(124, 78, 224, 0.2), 0 0 0 1px rgba(0, 136, 204, 0.1)'
                    : 'none',
                  transition: 'box-shadow 300ms ease-out'
                }}
                whileHover={{
                  scale: 1.02,
                  y: -6,
                  transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
                }}
              >
                {/* Grid Dot Pattern Background */}
                <div 
                  className="absolute inset-0 opacity-5 pointer-events-none"
                  style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, ${isDark ? 'rgba(0, 212, 255, 0.04)' : 'rgba(0, 136, 204, 0.03)'} 1px, transparent 0)`,
                    backgroundSize: '20px 20px',
                  }}
                />

                {/* Scanline Overlay on Hover */}
                {hoveredCard === cert.id && (
                  <>
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      style={{
                        backgroundImage: `repeating-linear-gradient(0deg, ${isDark ? 'rgba(0, 212, 255, 0.015)' : 'rgba(0, 136, 204, 0.01)'} 0px, transparent 1px, transparent 2px, ${isDark ? 'rgba(0, 212, 255, 0.015)' : 'rgba(0, 136, 204, 0.01)'} 3px)`,
                      }}
                    />
                    <motion.div
                      className="absolute inset-0 rounded-2xl pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0.2, 0.4, 0.2] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                      style={{
                        boxShadow: isDark
                          ? 'inset 0 0 60px rgba(0, 212, 255, 0.08), inset 0 0 30px rgba(139, 92, 246, 0.05)'
                          : 'inset 0 0 60px rgba(0, 136, 204, 0.05), inset 0 0 30px rgba(124, 78, 224, 0.04)',
                      }}
                    />
                  </>
                )}

                {/* Animated Glow Border */}
                {hoveredCard === cert.id && (
                  <motion.div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{
                      background: isDark
                        ? 'linear-gradient(90deg, rgb(0, 212, 255), rgb(139, 92, 246), rgb(0, 212, 255))'
                        : 'linear-gradient(90deg, rgb(0, 136, 204), rgb(124, 78, 224), rgb(0, 136, 204))',
                      backgroundSize: '200% 100%',
                      padding: '2px',
                      mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      maskComposite: 'exclude',
                      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                    }}
                  >
                    <motion.div
                      animate={{ backgroundPosition: ['0% 0%', '200% 0%'] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: isDark
                          ? 'linear-gradient(90deg, rgb(0, 212, 255), rgb(139, 92, 246), rgb(0, 212, 255))'
                          : 'linear-gradient(90deg, rgb(0, 136, 204), rgb(124, 78, 224), rgb(0, 136, 204))',
                        backgroundSize: '200% 100%',
                      }}
                    />
                  </motion.div>
                )}

                {/* Shield Icon */}
                <motion.div 
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 relative z-10 ${
                    isDark
                      ? 'bg-gradient-to-br from-[#00D4FF]/20 to-[#8B5CF6]/20'
                      : 'bg-gradient-to-br from-[#00D4FF]/10 to-[#8B5CF6]/10'
                  }`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Shield className={`w-8 h-8 ${isDark ? 'text-[#00D4FF]' : 'text-[#0088CC]'}`} />
                </motion.div>

                {/* Title & EC-Council Badge */}
                <div className="mb-4 relative z-10">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className={`text-xl font-bold leading-tight flex-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {cert.title}
                    </h3>
                    <span className={`px-2 py-1 rounded text-xs font-bold whitespace-nowrap ${getIssuerBadge(cert.issuer).style}`}>
                      {getIssuerBadge(cert.issuer).text}
                    </span>
                  </div>
                  <p className={`text-sm font-medium ${isDark ? 'text-[#00D4FF]' : 'text-[#0088CC]'}`}>
                    {cert.subtitle}
                  </p>
                </div>

                {/* Issuer */}
                <div className="mb-4 relative z-10">
                  <p className={`text-sm font-medium ${isDark ? 'text-white/80' : 'text-gray-700'}`}>
                    {cert.issuer}
                  </p>
                </div>

                {/* Metadata Row */}
                <div className="flex flex-col gap-2 mb-4 relative z-10">
                  <div className="flex items-center gap-2">
                    <Award className={`w-4 h-4 ${isDark ? 'text-white/60' : 'text-gray-500'}`} />
                    <span className={`text-sm ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                      Certificate ID: {cert.certificateId}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className={`w-4 h-4 ${isDark ? 'text-white/60' : 'text-gray-500'}`} />
                    <span className={`text-sm ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                      {cert.issueDate}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={isInView ? { scale: 1, rotate: 0 } : {}}
                      transition={{ 
                        duration: 0.5, 
                        delay: 0.6 + (index * 0.1),
                        type: 'spring',
                        stiffness: 200,
                        damping: 15
                      }}
                    >
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    </motion.div>
                    <span className={`text-sm px-2 py-0.5 rounded ${
                      isDark
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                        : 'bg-green-500/10 text-green-600 border border-green-500/20'
                    }`}>
                      {cert.verified}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className={`text-sm leading-relaxed mb-4 flex-grow relative z-10 ${isDark ? 'text-white/70' : 'text-gray-600'}`}>
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="mb-4 relative z-10">
                  <p className={`text-xs font-semibold mb-3 ${isDark ? 'text-white/80' : 'text-gray-700'}`}>
                    Skills / Highlights:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, y: 10 }}
                        animate={
                          hoveredCard === cert.id 
                            ? { opacity: 1, y: 0 }
                            : isInView 
                              ? { opacity: 1, y: 0 }
                              : { opacity: 0, y: 10 }
                        }
                        transition={{ 
                          duration: 0.3,
                          delay: hoveredCard === cert.id ? skillIndex * 0.05 : isInView ? 0.5 + (index * 0.1) + (skillIndex * 0.03) : 0,
                          ease: [0.16, 1, 0.3, 1]
                        }}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          isDark
                            ? 'bg-gradient-to-r from-[#00D4FF]/20 to-[#8B5CF6]/20 border border-[#00D4FF]/30 text-white'
                            : 'bg-gradient-to-r from-[#00D4FF]/10 to-[#8B5CF6]/10 border border-[#00D4FF]/20 text-gray-800'
                        }`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="mt-auto pt-4 space-y-2 relative z-10">
                  {/* View Credential Button */}
                  <motion.button
                    onClick={() => setSelectedCert(cert)}
                    className={`inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg text-sm font-semibold relative overflow-hidden ${
                      isDark
                        ? 'bg-gradient-to-r from-[#00D4FF]/20 to-[#8B5CF6]/20 text-[#00D4FF] border-2 border-[#00D4FF]/40 hover:border-[#00D4FF]/80'
                        : 'bg-gradient-to-r from-[#00D4FF]/15 to-[#8B5CF6]/15 text-[#0088CC] border-2 border-[#00D4FF]/30 hover:border-[#00D4FF]/60'
                    }`}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      boxShadow: hoveredCard === cert.id
                        ? isDark
                          ? '0 0 30px rgba(0, 212, 255, 0.4)'
                          : '0 0 30px rgba(0, 136, 204, 0.4)'
                        : 'none',
                      transition: 'all 300ms ease-out'
                    }}
                  >
                    {/* Shine Sweep Effect */}
                    {hoveredCard === cert.id && (
                      <motion.div
                        className="absolute inset-0 -translate-x-full"
                        animate={{ x: ['0%', '200%'] }}
                        transition={{ duration: 1, ease: 'easeInOut', repeat: Infinity, repeatDelay: 1 }}
                        style={{
                          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                          pointerEvents: 'none'
                        }}
                      />
                    )}
                    <span className="relative z-10">View Credential</span>
                    <ExternalLink className="w-4 h-4 relative z-10" />
                  </motion.button>

                  {/* Download Button - Only visible on hover */}
                  <motion.button
                    onClick={() => {
                      if (cert.certificateUrl) {
                        window.open(cert.certificateUrl, '_blank');
                      }
                    }}
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={hoveredCard === cert.id ? { opacity: 1, height: 'auto', marginTop: '0.5rem' } : { opacity: 0, height: 0, marginTop: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg text-sm font-semibold ${
                      isDark
                        ? 'bg-white/5 text-white/80 border border-white/20 hover:bg-white/10 hover:border-white/30'
                        : 'bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200 hover:border-gray-400'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedCert(null)}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className={`relative w-full max-w-4xl rounded-2xl overflow-hidden ${
              isDark
                ? 'bg-gray-900 border-2 border-[#00D4FF]/40'
                : 'bg-white border-2 border-gray-300'
            }`}
            style={{
              boxShadow: isDark
                ? '0 25px 80px -15px rgba(0, 212, 255, 0.5), 0 15px 40px -10px rgba(139, 92, 246, 0.4)'
                : '0 25px 80px -15px rgba(0, 136, 204, 0.4), 0 15px 40px -10px rgba(124, 78, 224, 0.3)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCert(null)}
              className={`absolute top-4 right-4 p-2 rounded-lg ${
                isDark
                  ? 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-300'
              }`}
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="p-8">
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                  isDark
                    ? 'bg-gradient-to-br from-[#00D4FF]/20 to-[#8B5CF6]/20'
                    : 'bg-gradient-to-br from-[#00D4FF]/10 to-[#8B5CF6]/10'
                }`}>
                  <Shield className={`w-8 h-8 ${isDark ? 'text-[#00D4FF]' : 'text-[#0088CC]'}`} />
                </div>
                <div className="flex-1">
                  <h2 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {selectedCert.title}
                  </h2>
                  <p className={`text-sm font-medium ${isDark ? 'text-[#00D4FF]' : 'text-[#0088CC]'}`}>
                    {selectedCert.subtitle}
                  </p>
                </div>
                <span className={`px-3 py-1 rounded text-sm font-bold ${getIssuerBadge(selectedCert.issuer).style}`}>
                  {getIssuerBadge(selectedCert.issuer).text}
                </span>
              </div>

              {/* Certificate Preview */}
              <div className={`w-full aspect-[1.414/1] rounded-xl mb-6 flex items-center justify-center ${
                isDark
                  ? 'bg-gradient-to-br from-[#00D4FF]/10 to-[#8B5CF6]/10 border-2 border-[#00D4FF]/30'
                  : 'bg-gradient-to-br from-[#00D4FF]/5 to-[#8B5CF6]/5 border-2 border-[#00D4FF]/20'
              }`}>
                <div className="text-center p-8">
                  <Shield className={`w-24 h-24 mx-auto mb-4 ${isDark ? 'text-[#00D4FF]' : 'text-[#0088CC]'}`} />
                  <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {selectedCert.title}
                  </h3>
                  <p className={`text-sm mb-4 ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                    This certificate is awarded to
                  </p>
                  <p className={`text-2xl font-bold mb-6 ${isDark ? 'text-[#00D4FF]' : 'text-[#0088CC]'}`}>
                    {selectedCert.issuedTo}
                  </p>
                  <div className={`grid grid-cols-2 gap-4 text-sm ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                    <div>
                      <p className="font-semibold mb-1">Certificate ID</p>
                      <p>{selectedCert.certificateId}</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Issue Date</p>
                      <p>{selectedCert.issueDate}</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Issuer</p>
                      <p>{selectedCert.issuer}</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Signed By</p>
                      <p>{selectedCert.signedBy}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <motion.button
                  className={`flex-1 px-6 py-3 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 ${
                    isDark
                      ? 'bg-gradient-to-r from-[#00D4FF]/20 to-[#8B5CF6]/20 text-[#00D4FF] border-2 border-[#00D4FF]/40 hover:border-[#00D4FF]/80'
                      : 'bg-gradient-to-r from-[#00D4FF]/15 to-[#8B5CF6]/15 text-[#0088CC] border-2 border-[#00D4FF]/30 hover:border-[#00D4FF]/60'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download className="w-4 h-4" />
                  Download Certificate
                </motion.button>
                <motion.button
                  onClick={() => setSelectedCert(null)}
                  className={`px-6 py-3 rounded-lg text-sm font-semibold ${
                    isDark
                      ? 'bg-white/5 text-white/80 border-2 border-white/20 hover:bg-white/10 hover:border-white/30'
                      : 'bg-gray-100 text-gray-700 border-2 border-gray-300 hover:bg-gray-200 hover:border-gray-400'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Close
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}