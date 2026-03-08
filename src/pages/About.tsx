import { motion } from 'motion/react';
import { Users, Globe, Award, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import MagneticButton from '../components/MagneticButton';

const stats = [
  { label: 'Years of Excellence', value: '17+' },
  { label: 'Strategic Hubs', value: '4' },
  { label: 'Specialized Experts', value: 'Elite' },
  { label: 'Success Rate', value: '99%' },
];

export default function About() {
  return (
    <div className="pt-40 pb-24 relative overflow-hidden">
      <SEO 
        title="About Us"
        description="Learn about Prime Trans, a premier management company based in Charlotte, NC, dedicated to bridging the gap between visionary ideas and technical execution."
        keywords="about Prime Trans, management team, company mission, Charlotte NC business, leadership team"
      />
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-24 items-start mb-48">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="label-caps mb-8">Our Story</h2>
            <h1 className="text-7xl md:text-9xl font-extralight tracking-tighter mb-12 leading-[0.85]">
              Navigating <br />
              <span className="font-serif italic font-normal text-gradient">Complexity</span> <br />
              <span className="text-slate-400/50">Since 2008.</span>
            </h1>
            <div className="space-y-10 text-xl text-slate-500 dark:text-slate-400 leading-relaxed font-light border-l-2 border-brand-primary/20 pl-10 max-w-xl">
              <p>
                Founded in Charlotte, North Carolina, Prime Trans began with a simple mission: to bridge the gap between visionary ideas and technical execution.
              </p>
              <p>
                Today, we are a global leader in project management, overseeing diverse portfolios that range from artificial intelligence startups to large-scale agricultural transformations.
              </p>
              <MagneticButton>
                <Link to="/contact" className="inline-flex items-center gap-4 text-brand-primary font-black uppercase tracking-widest text-sm group">
                  Work with us <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </MagneticButton>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-[5rem] overflow-hidden shadow-2xl border-[12px] border-white dark:border-slate-900 aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000"
                alt="Charlotte Innovation Hub"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-[2s]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
            </div>
            
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-12 -left-12 glass-card-modern p-10 rounded-[3rem] z-20 max-w-[280px]"
            >
              <div className="text-3xl font-black text-brand-primary tracking-tighter mb-2">Charlotte</div>
              <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 leading-tight">Strategic Headquarters & Innovation Hub</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-48">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-12 glass-card-modern rounded-[3rem] text-center hover:shadow-2xl transition-all group"
            >
              <div className="text-6xl font-black text-gradient mb-4 tracking-tighter group-hover:scale-110 transition-transform duration-500">{stat.value}</div>
              <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 group-hover:text-brand-primary transition-colors">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Values Section */}
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-primary mb-6"
          >
            Our Core Values
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-extralight tracking-tight mb-8"
          >
            Principles of <br />
            <span className="font-serif italic font-normal text-gradient text-6xl md:text-8xl">Excellence.</span>
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-48">
          {[
            { icon: ShieldCheck, title: 'Integrity', desc: 'Transparent management and ethical decision-making in every project.' },
            { icon: Globe, title: 'Global Vision', desc: 'Thinking beyond borders to bring world-class standards to local projects.' },
            { icon: Users, title: 'Collaboration', desc: 'Working as an extension of your team to ensure seamless execution.' },
            { icon: Award, title: 'Excellence', desc: 'A relentless pursuit of quality and technical precision in all we do.' },
          ].map((value, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 group bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 hover:shadow-2xl transition-all flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-primary group-hover:text-white group-hover:shadow-lg group-hover:rotate-12 transition-all duration-500">
                <value.icon size={32} />
              </div>
              <h4 className="text-2xl font-black tracking-tight mb-4 group-hover:text-brand-primary transition-colors">{value.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">{value.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Mission Section */}
        <div className="bg-slate-950 dark:bg-brand-primary rounded-[4rem] p-12 md:p-24 text-white mb-48 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full -mr-300 -mt-300 blur-[120px]" />
          <div className="relative z-10 grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-primary dark:text-white/50 mb-8">Our Mission</h2>
              <h3 className="text-5xl md:text-7xl font-extralight tracking-tight mb-12 leading-[0.9]">Empowering Innovation Through Strategic Management.</h3>
              <p className="text-xl text-white/70 leading-relaxed mb-12 font-light">
                Our mission is to provide the operational backbone for the world's most ambitious initiatives. We believe that great ideas deserve flawless execution, and we are here to ensure that complexity never stands in the way of progress.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-brand-primary">
                    <Award size={28} />
                  </div>
                  <span className="text-lg font-medium opacity-90">Setting industry standards for technical project management.</span>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-brand-primary">
                    <Globe size={28} />
                  </div>
                  <span className="text-lg font-medium opacity-90">Fostering a global network of specialized expertise.</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600" 
                  alt="Modern Office" 
                  className="rounded-[3rem] w-full h-[400px] object-cover mt-24 shadow-2xl" 
                  referrerPolicy="no-referrer" 
                />
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=600" 
                  alt="Collaboration" 
                  className="rounded-[3rem] w-full h-[400px] object-cover shadow-2xl" 
                  referrerPolicy="no-referrer" 
                />
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center py-32 border-t border-slate-100 dark:border-slate-800"
        >
          <h2 className="text-5xl md:text-7xl font-extralight tracking-tight mb-10">Ready to build the <br /><span className="font-serif italic font-normal text-gradient">future</span> together?</h2>
          <p className="text-slate-500 mb-14 max-w-2xl mx-auto text-xl font-light">
            Whether you're a potential client or a talented professional looking to join our mission, we'd love to hear from you.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <MagneticButton>
              <Link 
                to="/contact" 
                className="bg-vibrant-gradient text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl hover:shadow-2xl transition-all"
              >
                Contact Us
              </Link>
            </MagneticButton>
            <Link 
              to="/services" 
              className="px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-sm border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 transition-all text-slate-500 hover:text-slate-900 dark:hover:text-white"
            >
              Our Services
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
