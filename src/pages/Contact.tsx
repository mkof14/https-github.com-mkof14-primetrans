import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import SEO from '../components/SEO';
import MagneticButton from '../components/MagneticButton';

export default function Contact() {
  return (
    <div className="pt-40 pb-24 relative overflow-hidden">
      <SEO 
        title="Contact Us"
        description="Get in touch with Prime Trans for strategic management and complex technical project consultation. Based in Charlotte, NC."
        keywords="contact Prime Trans, business consultation, Charlotte NC office, project management inquiry"
      />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="label-caps mb-8">Contact Us</h2>
            <h1 className="text-7xl md:text-9xl font-extralight tracking-tighter mb-12 leading-[0.85]">
              Let's <br />
              <span className="font-serif italic font-normal text-gradient">Connect</span>.
            </h1>
            <p className="text-xl text-slate-500 dark:text-slate-400 mb-16 leading-relaxed font-light border-l-2 border-brand-primary/20 pl-10 max-w-xl">
              Whether you're looking for strategic management or have a complex technical venture in mind, our team in Charlotte is ready to help.
            </p>

            <div className="space-y-12">
              {[
                { icon: MapPin, title: 'Our Headquarters', value: 'Charlotte, NC, USA' },
                { icon: Mail, title: 'Email Us', value: 'contact@primetranco.com' },
                { icon: Phone, title: 'Call Us', value: '(704) 776-2775', sub: 'Mon-Fri, 9am - 6pm EST' },
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="flex items-start gap-8 group"
                >
                  <div className="w-16 h-16 bg-white dark:bg-slate-900 rounded-2xl flex items-center justify-center text-brand-primary group-hover:bg-vibrant-gradient group-hover:text-white group-hover:shadow-2xl group-hover:rotate-12 transition-all duration-500 shrink-0 border border-slate-100 dark:border-slate-800">
                    <item.icon size={32} />
                  </div>
                  <div>
                    <h4 className="font-black text-2xl tracking-tighter mb-2 group-hover:text-brand-primary transition-colors">{item.title}</h4>
                    <p className="text-slate-500 text-lg font-medium">{item.value}</p>
                    {item.sub && <p className="text-xs text-slate-400 mt-1 uppercase tracking-widest font-black">{item.sub}</p>}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="glass-card-modern p-12 md:p-20 rounded-[4rem] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 rounded-full -mr-32 -mt-32 blur-3xl" />
            
            <form 
              className="space-y-10 relative z-10" 
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const formData = new FormData(form);
                const data = {
                  name: formData.get('name'),
                  email: formData.get('email'),
                  service: formData.get('service'),
                  message: formData.get('message'),
                };
                
                try {
                  const res = await fetch('/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                  });
                  const result = await res.json();
                  if (res.ok) {
                    alert('Message sent successfully!');
                    form.reset();
                  } else {
                    alert(result.error || 'Something went wrong');
                  }
                } catch (err) {
                  alert('Failed to connect to server');
                }
              }}
            >
              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 rounded-2xl px-8 py-5 focus:ring-4 focus:ring-brand-primary/10 focus:border-brand-primary transition-all outline-none font-black uppercase tracking-widest text-xs placeholder:text-slate-300"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 rounded-2xl px-8 py-5 focus:ring-4 focus:ring-brand-primary/10 focus:border-brand-primary transition-all outline-none font-black uppercase tracking-widest text-xs placeholder:text-slate-300"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-2">Industry</label>
                <div className="relative">
                  <select 
                    name="service"
                    className="w-full bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 rounded-2xl px-8 py-5 focus:ring-4 focus:ring-brand-primary/10 focus:border-brand-primary transition-all outline-none appearance-none font-black uppercase tracking-widest text-xs cursor-pointer"
                  >
                    <option>IT & Software</option>
                    <option>AI & Machine Learning</option>
                    <option>Agro-Tech</option>
                    <option>Science & Research</option>
                    <option>Other</option>
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <Send size={16} className="rotate-90" />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-2">Message</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell us about your venture..."
                  className="w-full bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 rounded-3xl px-8 py-6 focus:ring-4 focus:ring-brand-primary/10 focus:border-brand-primary transition-all outline-none resize-none font-medium text-lg placeholder:text-slate-300"
                />
              </div>

              <MagneticButton>
                <button type="submit" className="w-full bg-vibrant-gradient text-white py-6 rounded-3xl font-black uppercase tracking-[0.2em] text-sm shadow-2xl shadow-brand-primary/30 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-4">
                  Send Message <Send size={20} />
                </button>
              </MagneticButton>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
