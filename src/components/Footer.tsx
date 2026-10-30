import { Github, Linkedin, Mail } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Publications', href: '#publications' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: Github, href: 'https://github.com/viraj091', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/pranav-irlapale', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:pirlapal@asu.edu', label: 'Email' },
];

export function Footer() {
  return (
    <footer className="border-t border-stone-200 py-12 px-6 bg-[#F7F4F0]">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-10">
          <div>
            <p className="text-stone-900 font-bold text-lg mb-1" style={{ fontFamily: 'Poppins' }}>
              Pranav Irlapale
            </p>
            <p className="text-stone-500 text-sm">Software Engineer & AI/ML Enthusiast</p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-stone-500 text-sm hover:text-[#A0725A] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pt-8 border-t border-stone-200">
          <p className="text-stone-500 text-sm">
            &copy; {new Date().getFullYear()} Pranav Irlapale. Built with React, Tailwind CSS & Framer Motion.
          </p>

          <div className="flex gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="p-2.5 rounded-lg border border-stone-200 text-stone-500 hover:text-[#A0725A] hover:border-stone-300 transition-all duration-200"
                aria-label={label}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
