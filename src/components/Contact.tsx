import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Mail, Phone, Linkedin, MapPin, Send, Check } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import emailjs from '@emailjs/browser';

interface ContactProps {
  isDark: boolean;
}

export function Contact({ isDark }: ContactProps) {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // EmailJS Configuration
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'pranavirlapale@gmail.com',
      link: 'mailto:pranavirlapale@gmail.com',
      copyable: true
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (623) 290-6899',
      link: 'tel:+16232906899',
      copyable: false
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/pranav-irlapale',
      link: 'https://www.linkedin.com/in/pranav-irlapale',
      copyable: false
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Tempe, Arizona',
      link: null,
      copyable: false
    }
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    toast.success('Email copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formRef.current) return;

    // Check if EmailJS is configured
    if (EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID' || 
        EMAILJS_TEMPLATE_ID === 'YOUR_TEMPLATE_ID' || 
        EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
      toast.error('EmailJS is not configured yet. Please set up your EmailJS credentials.');
      console.log('📧 To set up EmailJS:');
      console.log('1. Sign up at https://www.emailjs.com/');
      console.log('2. Create an email service (Gmail, Outlook, etc.)');
      console.log('3. Create an email template');
      console.log('4. Replace the credentials in Contact.tsx');
      return;
    }

    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      const result = await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );

      if (result.text === 'OK') {
        toast.success('Message sent successfully! I\'ll get back to you soon.');
        formRef.current.reset();
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error('Failed to send message. Please try again or email me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00D4FF]/5 to-transparent" />
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(0, 212, 255, 0.2) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className={`text-5xl md:text-6xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Let's Connect
          </h2>
          <p className={`text-2xl ${isDark ? 'text-white/70' : 'text-gray-600'}`}>
            Let's build something amazing together
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className={`text-lg mb-8 ${isDark ? 'text-white/80' : 'text-gray-700'}`}>
              I'm always open to discussing new projects, creative ideas, or opportunities 
              to be part of your vision. Feel free to reach out!
            </p>

            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.label}
                  className="group"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <div className={`rounded-xl p-6 border transition-all duration-300 group-hover:scale-105 ${
                    isDark 
                      ? 'bg-white/5 backdrop-blur-sm border-white/10 hover:border-[#00D4FF]/50' 
                      : 'bg-white border-gray-200 hover:border-[#00D4FF] shadow-md'
                  }`}>
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-gradient-to-br from-[#00D4FF] to-[#8B5CF6]">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className={`text-sm mb-1 ${isDark ? 'text-white/60' : 'text-gray-500'}`}>{info.label}</p>
                        {info.link ? (
                          <a
                            href={info.link}
                            target={info.link.startsWith('http') ? '_blank' : undefined}
                            rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className={`transition-colors ${
                              isDark ? 'text-white hover:text-[#00D4FF]' : 'text-gray-900 hover:text-[#00D4FF]'
                            }`}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className={isDark ? 'text-white' : 'text-gray-900'}>{info.value}</p>
                        )}
                      </div>
                      {info.copyable && (
                        <button
                          onClick={() => copyToClipboard(info.value)}
                          className={`p-2 rounded-lg transition-colors ${
                            isDark 
                              ? 'bg-white/10 hover:bg-white/20' 
                              : 'bg-gray-100 hover:bg-gray-200'
                          }`}
                          title="Copy to clipboard"
                        >
                          {copied ? (
                            <Check className="w-5 h-5 text-green-400" />
                          ) : (
                            <svg className={`w-5 h-5 ${isDark ? 'text-white' : 'text-gray-700'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form
              ref={formRef}
              className="space-y-6"
              onSubmit={handleSubmit}
            >
              <div>
                <label htmlFor="name" className={`block mb-2 ${isDark ? 'text-white/80' : 'text-gray-700'}`}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  className={`w-full px-4 py-3 rounded-xl border focus:border-[#00D4FF] focus:outline-none focus:ring-2 focus:ring-[#00D4FF]/20 transition-all ${
                    isDark 
                      ? 'bg-white/5 border-white/10 text-white placeholder-white/40' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                  }`}
                  placeholder="Your name"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="email" className={`block mb-2 ${isDark ? 'text-white/80' : 'text-gray-700'}`}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  className={`w-full px-4 py-3 rounded-xl border focus:border-[#00D4FF] focus:outline-none focus:ring-2 focus:ring-[#00D4FF]/20 transition-all ${
                    isDark 
                      ? 'bg-white/5 border-white/10 text-white placeholder-white/40' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                  }`}
                  placeholder="your.email@example.com"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="subject" className={`block mb-2 ${isDark ? 'text-white/80' : 'text-gray-700'}`}>
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className={`w-full px-4 py-3 rounded-xl border focus:border-[#00D4FF] focus:outline-none focus:ring-2 focus:ring-[#00D4FF]/20 transition-all ${
                    isDark 
                      ? 'bg-white/5 border-white/10 text-white placeholder-white/40' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                  }`}
                  placeholder="What's this about?"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="message" className={`block mb-2 ${isDark ? 'text-white/80' : 'text-gray-700'}`}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className={`w-full px-4 py-3 rounded-xl border focus:border-[#00D4FF] focus:outline-none focus:ring-2 focus:ring-[#00D4FF]/20 transition-all resize-none ${
                    isDark 
                      ? 'bg-white/5 border-white/10 text-white placeholder-white/40' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                  }`}
                  placeholder="Tell me about your project or idea..."
                  required
                  disabled={isSubmitting}
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-8 py-4 rounded-xl bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] text-white font-semibold hover:scale-105 hover:shadow-lg hover:shadow-[#00D4FF]/50 transition-all duration-300 flex items-center justify-center gap-2 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                <Send className={`w-5 h-5 ${isSubmitting ? 'animate-pulse' : ''}`} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}