import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ExternalLink, Copy, Check, FileText } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface Publication {
  id: number;
  title: string;
  authors: string;
  venue: string;
  year: string;
  abstract: string;
  link: string;
  doi: string;
  tags: string[];
  citation: string;
}

const publications: Publication[] = [
  {
    id: 1,
    title: 'Elevating Cryptocurrency Predictions: Bidirectional LSTM Methodology',
    authors: 'Pranav Irlapale',
    venue: 'IJSREM, Volume 08, Issue 05',
    year: '2024',
    abstract: 'Proposes a Bi-LSTM-based approach for cryptocurrency price forecasting using historical market data to improve prediction accuracy and capture temporal patterns.',
    link: 'https://ijsrem.com/download/elevating-cryptocurrency-predictions-bidirectional-lstm-methodology/',
    doi: '10.55041/IJSREM34330',
    tags: ['Deep Learning', 'Bi-LSTM', 'Cryptocurrency', 'Time Series'],
    citation: 'Irlapale, P. (2024). Elevating Cryptocurrency Predictions: Bidirectional LSTM Methodology. IJSREM, 8(5). https://doi.org/10.55041/IJSREM34330',
  },
  {
    id: 2,
    title: 'Sign Language Detection',
    authors: 'Pranav Irlapale',
    venue: 'IJSREM, Volume 09, Issue 06',
    year: '2025',
    abstract: 'Presents a sign language detection system using deep learning techniques to recognize hand gestures and translate them into readable outputs.',
    link: 'https://ijsrem.com/download/sign-language-detection-2/',
    doi: '10.55041/IJSREM50810',
    tags: ['Computer Vision', 'CNN', 'Sign Language', 'Accessibility'],
    citation: 'Irlapale, P. (2025). Sign Language Detection. IJSREM, 9(6). https://doi.org/10.55041/IJSREM50810',
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function Publications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const copyCitation = (citation: string, id: number) => {
    navigator.clipboard.writeText(citation);
    setCopiedId(id);
    toast.success('Citation copied to clipboard');
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="publications" className="py-24 md:py-32 px-6 bg-white" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-100 border border-stone-300 mb-4">
            <FileText className="w-4 h-4 text-[#A0725A]" />
            <span className="text-[#A0725A] text-sm font-semibold uppercase tracking-wide">Research</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 mb-4">
            Published <span className="text-[#A0725A]">Research</span>
          </h2>
          <p className="text-stone-500 text-lg max-w-xl mx-auto">
            Peer-reviewed research in deep learning and computer vision.
          </p>
        </motion.div>

        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {publications.map((pub) => (
            <motion.div
              key={pub.id}
              className="group rounded-2xl p-8 md:p-10 bg-[#F7F4F0] border border-stone-200 hover:border-stone-300 hover:shadow-xl transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -3 }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                <h3 className="text-lg md:text-xl font-bold text-stone-900 group-hover:text-[#A0725A] transition-colors flex-1">
                  {pub.title}
                </h3>
                <span className="px-4 py-1.5 rounded-full bg-stone-100 border border-stone-300 text-xs font-bold text-[#A0725A] shrink-0">
                  DOI: {pub.doi}
                </span>
              </div>

              <p className="text-stone-500 text-sm mb-4">
                {pub.venue} · {pub.year}
              </p>

              <p className="text-stone-600 text-sm md:text-base leading-relaxed mb-6">
                {pub.abstract}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {pub.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-md text-xs font-medium text-stone-500 bg-stone-100 border border-stone-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <motion.a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-stone-800 text-white text-sm font-semibold hover:bg-stone-900 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Read Paper
                  <ExternalLink className="w-3.5 h-3.5" />
                </motion.a>
                <motion.button
                  onClick={() => copyCitation(pub.citation, pub.id)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-stone-200 text-stone-600 text-sm font-medium hover:border-stone-300 hover:text-[#A0725A] hover:bg-white transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {copiedId === pub.id ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  {copiedId === pub.id ? 'Copied' : 'Copy Citation'}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
