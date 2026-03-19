import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

interface FooterProps {
  isDark: boolean;
}

export function Footer({ isDark }: FooterProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Education', id: 'education' },
    { name: 'Publications', id: 'publications' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <footer className={`relative py-12 px-6 border-t ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
      <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-t from-[#0A1628] to-transparent' : 'bg-gradient-to-t from-gray-50 to-transparent'}`} />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {quickLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`transition-colors ${
                isDark ? 'text-white/70 hover:text-[#00D4FF]' : 'text-gray-600 hover:text-[#00D4FF]'
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-8">
          <motion.a
            href="https://github.com/viraj091"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-full transition-all ${
              isDark 
                ? 'bg-white/5 text-white/70 hover:bg-gradient-to-r hover:from-[#00D4FF] hover:to-[#8B5CF6] hover:text-white' 
                : 'bg-gray-100 text-gray-600 hover:bg-gradient-to-r hover:from-[#00D4FF] hover:to-[#8B5CF6] hover:text-white'
            }`}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/pranav-irlapale"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-full transition-all ${
              isDark 
                ? 'bg-white/10 text-white hover:bg-[#00D4FF] hover:text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-[#00D4FF] hover:text-white'
            }`}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Linkedin className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="mailto:pirlapal@asu.edu"
            className={`p-3 rounded-full transition-all ${
              isDark 
                ? 'bg-white/5 text-white/70 hover:bg-gradient-to-r hover:from-[#00D4FF] hover:to-[#8B5CF6] hover:text-white' 
                : 'bg-gray-100 text-gray-600 hover:bg-gradient-to-r hover:from-[#00D4FF] hover:to-[#8B5CF6] hover:text-white'
            }`}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Mail className="w-5 h-5" />
          </motion.a>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className={`flex items-center justify-center gap-2 ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
            <span>Designed & Built by Pranav Irlapale © 2025</span>
            <Heart className="w-4 h-4 text-[#8B5CF6]" />
          </p>
          <p className={`text-sm mt-2 ${isDark ? 'text-white/40' : 'text-gray-500'}`}>
            Made with React, Tailwind CSS, and Motion
          </p>
        </div>
      </div>
    </footer>
  );
}