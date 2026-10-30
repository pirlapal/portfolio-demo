import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Mail, Phone, Linkedin, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import emailjs from '@emailjs/browser';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'pranavirlapale@gmail.com', link: 'mailto:pranavirlapale@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+1 (623) 290-6899', link: 'tel:+16232906899' },
  { icon: Linkedin, label: 'LinkedIn', value: 'pranav-irlapale', link: 'https://www.linkedin.com/in/pranav-irlapale' },
  { icon: MapPin, label: 'Location', value: 'Tempe, Arizona', link: null },
];

export function Contact() {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY ||
        EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID') {
      toast.error('Contact form is not configured yet.');
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await emailjs.sendForm(
        EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY
      );
      if (result.text === 'OK') {
        toast.success('Message sent! I\'ll get back to you soon.');
        formRef.current.reset();
      }
    } catch {
      toast.error('Failed to send. Please email me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-white" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-100 border border-stone-300 mb-4">
            <Mail className="w-4 h-4 text-[#A0725A]" />
            <span className="text-[#A0725A] text-sm font-semibold uppercase tracking-wide">Contact</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 mb-4">
            Let's <span className="text-[#A0725A]">Connect</span>
          </h2>
          <p className="text-stone-500 text-lg max-w-xl mx-auto">
            Open to discussing projects, ideas, or opportunities. Drop me a message.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {contactInfo.map((info) => {
              const Icon = info.icon;
              const content = (
                <motion.div
                  className="group flex items-center gap-4 rounded-2xl border border-stone-200 bg-[#F7F4F0] p-5 hover:border-stone-300 hover:shadow-lg transition-all duration-300"
                  whileHover={{ y: -2 }}
                >
                  <div className="p-2.5 rounded-xl bg-stone-100 border border-stone-300 shrink-0">
                    <Icon className="w-5 h-5 text-[#A0725A]" />
                  </div>
                  <div>
                    <p className="text-stone-500 text-xs mb-0.5">{info.label}</p>
                    <p className="text-stone-900 text-sm font-medium group-hover:text-[#A0725A] transition-colors">{info.value}</p>
                  </div>
                </motion.div>
              );

              return info.link ? (
                <a
                  key={info.label}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {content}
                </a>
              ) : (
                <div key={info.label}>{content}</div>
              );
            })}
          </motion.div>

          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-5"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {[
              { id: 'name', name: 'user_name', type: 'text', label: 'Name', placeholder: 'Your name' },
              { id: 'email', name: 'user_email', type: 'email', label: 'Email', placeholder: 'your@email.com' },
              { id: 'subject', name: 'subject', type: 'text', label: 'Subject', placeholder: 'What\'s this about?' },
            ].map((field) => (
              <div key={field.id}>
                <label htmlFor={field.id} className="block text-stone-900 text-sm font-medium mb-2">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  id={field.id}
                  name={field.name}
                  placeholder={field.placeholder}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-stone-200 text-stone-900 placeholder-stone-400 focus:border-[#A0725A] focus:outline-none focus:ring-2 focus:ring-[#A0725A]/20 transition-all text-sm"
                />
              </div>
            ))}

            <div>
              <label htmlFor="message" className="block text-stone-900 text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell me about your project or idea..."
                required
                disabled={isSubmitting}
                className="w-full px-4 py-3 rounded-xl bg-white border border-stone-200 text-stone-900 placeholder-stone-400 focus:border-[#A0725A] focus:outline-none focus:ring-2 focus:ring-[#A0725A]/20 transition-all resize-none text-sm"
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3.5 rounded-xl bg-stone-800 text-white font-semibold text-sm hover:bg-stone-900 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-stone-800/20"
              style={{ fontFamily: 'Poppins' }}
              whileHover={!isSubmitting ? { scale: 1.01 } : {}}
              whileTap={!isSubmitting ? { scale: 0.99 } : {}}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <Send className="w-4 h-4" />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
