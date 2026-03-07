import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import SEO from '../components/SEO';

export default function Contact() {
  return (
    <div className="pt-32 pb-24">
      <SEO 
        title="Contact Us"
        description="Get in touch with Prime Trans for strategic management and complex technical project consultation. Based in Charlotte, NC."
        keywords="contact Prime Trans, business consultation, Charlotte NC office, project management inquiry"
      />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="label-caps mb-6">Contact Us</h2>
            <h1 className="text-6xl md:text-8xl font-extralight tracking-tight mb-10 leading-none">
              Let's <br />
              <span className="font-serif italic font-normal text-gradient">Connect</span>.
            </h1>
            <p className="text-lg text-slate-500 mb-16 leading-relaxed font-light border-l border-slate-200 dark:border-slate-800 pl-8">
              Whether you're looking for strategic management or have a complex technical venture in mind, our team in Charlotte is ready to help.
            </p>

            <div className="space-y-10">
              <div className="flex items-start gap-8 group">
                <div className="w-16 h-16 bg-slate-50 dark:bg-slate-900 rounded-2xl flex items-center justify-center text-brand-primary group-hover:bg-vibrant-gradient group-hover:text-white group-hover:shadow-lg transition-all duration-500 shrink-0">
                  <MapPin size={32} />
                </div>
                <div>
                  <h4 className="font-black text-xl tracking-tight mb-2">Our Headquarters</h4>
                  <p className="text-slate-500 text-lg font-medium">Charlotte, NC, USA</p>
                </div>
              </div>

              <div className="flex items-start gap-8 group">
                <div className="w-16 h-16 bg-slate-50 dark:bg-slate-900 rounded-2xl flex items-center justify-center text-brand-primary group-hover:bg-vibrant-gradient group-hover:text-white group-hover:shadow-lg transition-all duration-500 shrink-0">
                  <Mail size={32} />
                </div>
                <div>
                  <h4 className="font-black text-xl tracking-tight mb-2">Email Us</h4>
                  <p className="text-slate-500 text-lg font-medium">contact@primetranco.com</p>
                </div>
              </div>

              <div className="flex items-start gap-8 group">
                <div className="w-16 h-16 bg-slate-50 dark:bg-slate-900 rounded-2xl flex items-center justify-center text-brand-primary group-hover:bg-vibrant-gradient group-hover:text-white group-hover:shadow-lg transition-all duration-500 shrink-0">
                  <Phone size={32} />
                </div>
                <div>
                  <h4 className="font-black text-xl tracking-tight mb-2">Call Us</h4>
                  <p className="text-slate-500 text-lg font-medium">(704) 776-2775<br /><span className="text-sm text-slate-400">Mon-Fri, 9am - 6pm EST</span></p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white dark:bg-slate-900 p-10 md:p-16 rounded-[4rem] border border-slate-100 dark:border-slate-800 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-brand-primary/5 rounded-full -mr-20 -mt-20" />
            
            <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="label-caps">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-slate-50 dark:bg-slate-800 border-2 border-transparent rounded-2xl px-8 py-5 focus:ring-0 focus:border-brand-primary transition-all outline-none font-medium"
                  />
                </div>
                <div className="space-y-3">
                  <label className="label-caps">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-slate-50 dark:bg-slate-800 border-2 border-transparent rounded-2xl px-8 py-5 focus:ring-0 focus:border-brand-primary transition-all outline-none font-medium"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="label-caps">Industry</label>
                <select className="w-full bg-slate-50 dark:bg-slate-800 border-2 border-transparent rounded-2xl px-8 py-5 focus:ring-0 focus:border-brand-primary transition-all outline-none appearance-none font-medium">
                  <option>IT & Software</option>
                  <option>AI & Machine Learning</option>
                  <option>Agro-Tech</option>
                  <option>Science & Research</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-3">
                <label className="label-caps">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your venture..."
                  className="w-full bg-slate-50 dark:bg-slate-800 border-2 border-transparent rounded-2xl px-8 py-5 focus:ring-0 focus:border-brand-primary transition-all outline-none resize-none font-medium"
                />
              </div>

              <button className="w-full bg-vibrant-gradient text-white py-6 rounded-[2rem] font-black text-xl shadow-xl shadow-brand-primary/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-3">
                Send Message <Send size={24} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
