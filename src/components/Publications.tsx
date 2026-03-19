import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { BookOpen, ExternalLink, Calendar, Users, Copy, Check, FileText, X } from 'lucide-react';
import { toast } from 'sonner';

interface PublicationsProps {
  isDark: boolean;
}

interface Publication {
  id: number;
  title: string;
  authors: string;
  venue: string;
  year: string;
  abstract: string;
  link: string;
  doi?: string;
  tags: string[];
  keywords?: string[];
  citation?: string;
}

const publications: Publication[] = [
  {
    id: 1,
    title: 'Elevating Cryptocurrency Predictions: Bidirectional LSTM Methodology',
    authors: 'Pranav Irlapale',
    venue: 'International Journal of Scientific Research in Engineering and Management (IJSREM), Volume 08, Issue 05',
    year: '2024',
    abstract: 'This paper proposes a Bi-LSTM-based approach for cryptocurrency price forecasting using historical market data to improve prediction accuracy and capture temporal patterns in time-series movements.',
    link: 'https://ijsrem.com/download/elevating-cryptocurrency-predictions-bidirectional-lstm-methodology/',
    doi: '10.55041/IJSREM34330',
    tags: ['Deep Learning', 'Bi-LSTM', 'Cryptocurrency', 'Time Series', 'Forecasting'],
    keywords: ['Bidirectional LSTM', 'Cryptocurrency Prediction', 'Time Series Analysis', 'Deep Learning', 'Financial Forecasting'],
    citation: 'Irlapale, P. (2024). Elevating Cryptocurrency Predictions: Bidirectional LSTM Methodology. International Journal of Scientific Research in Engineering and Management, 8(5). https://doi.org/10.55041/IJSREM34330'
  },
  {
    id: 2,
    title: 'Sign Language Detection',
    authors: 'Pranav Irlapale',
    venue: 'International Journal of Scientific Research in Engineering and Management (IJSREM), Volume 09, Issue 06',
    year: '2025',
    abstract: 'This paper presents a sign language detection system using machine learning/deep learning techniques to recognize hand gestures and translate them into readable outputs, improving accessibility and communication.',
    link: 'https://ijsrem.com/download/sign-language-detection-2/',
    doi: '10.55041/IJSREM50810',
    tags: ['Deep Learning', 'Computer Vision', 'Sign Language', 'Gesture Recognition'],
    keywords: ['Sign Language Detection', 'Computer Vision', 'Gesture Recognition', 'Accessibility', 'Deep Learning'],
    citation: 'Irlapale, P. (2025). Sign Language Detection. International Journal of Scientific Research in Engineering and Management, 9(6). https://doi.org/10.55041/IJSREM50810'
  }
];

export function Publications({ isDark }: PublicationsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [copiedDOI, setCopiedDOI] = useState<number | null>(null);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const copyDOI = (doi: string, id: number) => {
    navigator.clipboard.writeText(doi);
    setCopiedDOI(id);
    toast.success('DOI copied to clipboard!');
    setTimeout(() => setCopiedDOI(null), 2000);
  };

  const copyCitation = (citation: string) => {
    navigator.clipboard.writeText(citation);
    toast.success('Citation copied to clipboard!');
  };

  return (
    <section id="publications" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#8B5CF6]/5 to-transparent" />
      
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 20h40M20 0v40\' stroke=\'%2300D4FF\' stroke-width=\'1\' fill=\'none\'/%3E%3C/svg%3E")',
          backgroundSize: '40px 40px'
        }}
      />
      
      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
          animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] mb-6"
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <BookOpen className="w-10 h-10 text-white" />
          </motion.div>
          <motion.div
            className={`inline-block mb-4 font-mono ${isDark ? 'text-[#00D4FF]' : 'text-[#0088CC]'}`}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
          >
            <span className={isDark ? 'text-[#8B5CF6]' : 'text-[#7C4EE0]'}>{'<'}</span>
            publications
            <span className={isDark ? 'text-[#8B5CF6]' : 'text-[#7C4EE0]'}>{' />'}</span>
          </motion.div>
          <h2 className={`text-5xl md:text-6xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Research & Publications
          </h2>
          <p className={`text-xl font-mono text-sm ${isDark ? 'text-white/70' : 'text-gray-600'}`}>
            // Contributing to the scientific community
          </p>
        </motion.div>

        <div className="space-y-8" style={{ perspective: '1500px' }}>
          {publications.map((pub, index) => (
            <motion.div
              key={pub.id}
              className="group relative"
              initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
              animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{ 
                duration: 0.6, 
                delay: 0.3 + (index * 0.1),
                ease: [0.16, 1, 0.3, 1]
              }}
              onMouseEnter={() => setHoveredCard(pub.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <motion.div
                className={`rounded-2xl p-8 border-2 relative overflow-hidden cursor-pointer ${
                  isDark 
                    ? 'backdrop-blur-sm' 
                    : 'bg-white border-gray-200 shadow-lg'
                }`}
                style={isDark ? {
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderColor: 'rgba(255, 255, 255, 0.1)',
                  transformStyle: 'preserve-3d',
                  boxShadow: hoveredCard === pub.id
                    ? '0 20px 60px -15px rgba(0, 212, 255, 0.4), 0 10px 30px -10px rgba(139, 92, 246, 0.3)'
                    : 'none'
                } : {
                  transformStyle: 'preserve-3d',
                  boxShadow: hoveredCard === pub.id
                    ? '0 20px 60px -15px rgba(0, 136, 204, 0.4), 0 10px 30px -10px rgba(124, 78, 224, 0.3)'
                    : '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
                whileHover={{
                  scale: 1.02,
                  y: -8,
                  rotateX: 1,
                  rotateY: 1,
                  transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
                }}
                onClick={() => setExpandedCard(expandedCard === pub.id ? null : pub.id)}
              >
                {/* Animated Glow Border */}
                {hoveredCard === pub.id && (
                  <motion.div
                    className="absolute inset-0 rounded-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{
                      background: isDark
                        ? 'linear-gradient(90deg, #00D4FF, #8B5CF6, #00D4FF)'
                        : 'linear-gradient(90deg, #0088CC, #7C4EE0, #0088CC)',
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
                          ? 'linear-gradient(90deg, #00D4FF, #8B5CF6, #00D4FF)'
                          : 'linear-gradient(90deg, #0088CC, #7C4EE0, #0088CC)',
                        backgroundSize: '200% 100%',
                      }}
                    />
                  </motion.div>
                )}

                {/* Scanline sweep effect */}
                {hoveredCard === pub.id && (
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ x: '-100%' }}
                    animate={{ x: '200%' }}
                    transition={{ duration: 1.5, ease: 'easeInOut', repeat: Infinity, repeatDelay: 1 }}
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                      width: '50%',
                    }}
                  />
                )}

                {/* Featured Badge for first publication */}
                {index === 0 && (
                  <motion.div
                    className="absolute top-4 right-4"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : {}}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.6,
                      type: 'spring',
                      stiffness: 200,
                      damping: 15
                    }}
                  >
                    <div className={`px-3 py-1 rounded-full font-semibold text-xs flex items-center gap-2 ${
                      isDark
                        ? 'bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] text-white'
                        : 'bg-gradient-to-r from-[#0088CC] to-[#7C4EE0] text-white'
                    }`}>
                      <motion.span
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        ⭐
                      </motion.span>
                      Featured Paper
                    </div>
                  </motion.div>
                )}

                {/* Publication badge */}
                <div className={`inline-block px-4 py-1 rounded-full bg-gradient-to-r from-[#00D4FF]/20 to-[#8B5CF6]/20 border border-[#00D4FF]/30 text-sm font-mono mb-4 ${
                  isDark ? 'text-[#00D4FF]' : 'text-[#0088CC]'
                }`}>
                  Research Paper
                </div>

                {/* Title */}
                <h3 className={`text-2xl md:text-3xl font-bold mb-3 group-hover:text-[#00D4FF] transition-colors ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {pub.title}
                </h3>

                {/* Metadata */}
                <div className={`flex flex-wrap gap-4 mb-4 ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">{pub.authors}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{pub.year}</span>
                  </div>
                </div>

                {/* Venue */}
                <p className={`text-lg font-semibold mb-4 ${isDark ? 'text-[#8B5CF6]' : 'text-[#7C4EE0]'}`}>
                  {pub.venue}
                </p>

                {/* DOI if available */}
                {pub.doi && (
                  <div className="mb-4 flex items-center gap-2">
                    <span className={`text-sm font-mono ${isDark ? 'text-white/50' : 'text-gray-500'}`}>DOI: </span>
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-sm font-mono hover:underline ${isDark ? 'text-[#00D4FF]' : 'text-[#0088CC]'}`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {pub.doi}
                    </a>
                    <motion.button
                      onClick={(e) => {
                        e.stopPropagation();
                        copyDOI(pub.doi!, pub.id);
                      }}
                      className={`p-1.5 rounded-lg transition-colors ${
                        isDark
                          ? 'hover:bg-white/10 text-white/60 hover:text-white'
                          : 'hover:bg-gray-100 text-gray-500 hover:text-gray-900'
                      }`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {copiedDOI === pub.id ? (
                        <Check className="w-4 h-4 text-green-500" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </motion.button>
                  </div>
                )}

                {/* Abstract */}
                <p className={`leading-relaxed mb-6 ${isDark ? 'text-white/70' : 'text-gray-700'}`}>
                  {pub.abstract}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {pub.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={
                        hoveredCard === pub.id
                          ? { opacity: 1, scale: 1 }
                          : isInView
                            ? { opacity: 1, scale: 1 }
                            : { opacity: 0, scale: 0.8 }
                      }
                      transition={{
                        duration: 0.3,
                        delay: hoveredCard === pub.id ? tagIndex * 0.05 : 0.5 + (index * 0.1) + (tagIndex * 0.03),
                        ease: [0.16, 1, 0.3, 1]
                      }}
                      className={`px-3 py-1 rounded-full border text-sm ${
                        isDark 
                          ? 'bg-white/5 border-white/10 text-white/70' 
                          : 'bg-gray-100 border-gray-200 text-gray-700'
                      }`}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* Expanded content */}
                {expandedCard === pub.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`border-t pt-6 mb-6 ${isDark ? 'border-white/10' : 'border-gray-200'}`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* Keywords */}
                    {pub.keywords && (
                      <div className="mb-6">
                        <h4 className={`text-sm font-semibold mb-3 ${isDark ? 'text-white/80' : 'text-gray-900'}`}>
                          Keywords:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {pub.keywords.map((keyword) => (
                            <span
                              key={keyword}
                              className={`px-3 py-1 rounded-full text-xs font-medium ${
                                isDark
                                  ? 'bg-gradient-to-r from-[#00D4FF]/20 to-[#8B5CF6]/20 border border-[#00D4FF]/30 text-white'
                                  : 'bg-gradient-to-r from-[#00D4FF]/10 to-[#8B5CF6]/10 border border-[#00D4FF]/20 text-gray-800'
                              }`}
                            >
                              {keyword}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Citation */}
                    {pub.citation && (
                      <div className="mb-4">
                        <h4 className={`text-sm font-semibold mb-2 ${isDark ? 'text-white/80' : 'text-gray-900'}`}>
                          Citation:
                        </h4>
                        <div className={`p-4 rounded-lg font-mono text-sm relative ${
                          isDark ? 'bg-white/5 text-white/70' : 'bg-gray-100 text-gray-700'
                        }`}>
                          {pub.citation}
                          <motion.button
                            onClick={() => copyCitation(pub.citation!)}
                            className={`absolute top-2 right-2 p-2 rounded-lg transition-colors ${
                              isDark
                                ? 'hover:bg-white/10 text-white/60 hover:text-white'
                                : 'hover:bg-gray-200 text-gray-500 hover:text-gray-900'
                            }`}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <FileText className="w-4 h-4" />
                          </motion.button>
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}

                {/* Action buttons */}
                <div className="flex flex-wrap gap-3">
                  <motion.a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] text-white font-semibold relative overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {hoveredCard === pub.id && (
                      <motion.div
                        className="absolute inset-0"
                        initial={{ x: '-100%' }}
                        animate={{ x: '100%' }}
                        transition={{ duration: 0.6, ease: 'easeInOut' }}
                        style={{
                          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                        }}
                      />
                    )}
                    <span>Read Paper</span>
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>

                  <motion.button
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedCard(expandedCard === pub.id ? null : pub.id);
                    }}
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold border-2 transition-colors ${
                      isDark
                        ? 'border-[#00D4FF]/30 text-[#00D4FF] hover:bg-[#00D4FF]/10'
                        : 'border-[#0088CC]/30 text-[#0088CC] hover:bg-[#0088CC]/10'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>{expandedCard === pub.id ? 'Show Less' : 'View Details'}</span>
                    <FileText className="w-4 h-4" />
                  </motion.button>
                </div>

                {/* Decorative corner */}
                <div className={`absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity ${
                  isDark ? 'bg-gradient-to-br from-[#00D4FF]/10 to-transparent' : 'bg-gradient-to-br from-[#0088CC]/10 to-transparent'
                }`} />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Citation note */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <p className={`text-sm font-mono ${isDark ? 'text-white/50' : 'text-gray-500'}`}>
            // For citations and collaborations, feel free to reach out
          </p>
        </motion.div>
      </div>
    </section>
  );
}