import { motion } from 'motion/react';
import { Users, Globe, Award, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const stats = [
  { label: 'Years of Excellence', value: '15+' },
  { label: 'Strategic Hubs', value: '4' },
  { label: 'Specialized Experts', value: 'Elite' },
  { label: 'Success Rate', value: '99%' },
];

export default function About() {
  return (
    <div className="pt-32 pb-24">
      <SEO 
        title="About Us"
        description="Learn about Prime Trans, a premier management company based in Charlotte, NC, dedicated to bridging the gap between visionary ideas and technical execution."
        keywords="about Prime Trans, management team, company mission, Charlotte NC business, leadership team"
      />
      <div className="max-w-7xl mx-auto px-6">
        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-40">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="label-caps mb-6">Our Story</h2>
            <h1 className="text-6xl md:text-8xl font-extralight tracking-tight mb-10 leading-none">
              Navigating <br />
              <span className="font-serif italic font-normal text-gradient">Complexity</span> <br />
              <span className="text-slate-400/50">Since 2009.</span>
            </h1>
            <div className="space-y-8 text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-light border-l border-slate-200 dark:border-slate-800 pl-8">
              <p>
                Founded in Charlotte, North Carolina, Prime Trans began with a simple mission: to bridge the gap between visionary ideas and technical execution.
              </p>
              <p>
                Today, we are a global leader in project management, overseeing diverse portfolios that range from artificial intelligence startups to large-scale agricultural transformations.
              </p>
            </div>
          </motion.div>
          <div className="relative">
            <div className="rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border-8 border-white dark:border-slate-900">
              <img
                src="https://picsum.photos/seed/charlotte-innovation/1000/800"
                alt="Charlotte Innovation"
                className="w-full h-full object-cover aspect-[4/3] hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <motion.div 
              animate={{ rotate: [0, 5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -right-10 w-56 h-56 bg-vibrant-gradient rounded-full flex items-center justify-center text-white text-center p-8 shadow-2xl border-8 border-white dark:border-slate-950 z-20"
            >
              <div className="font-black text-xs uppercase tracking-[0.2em] leading-tight">Proudly Based in North Carolina</div>
            </motion.div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-40">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center p-12 bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="text-6xl font-black text-gradient mb-4 tracking-tighter">{stat.value}</div>
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Values Section */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-primary mb-4">Our Values</h2>
          <h2 className="text-4xl font-bold mb-4">The Principles That Guide Us</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Our management approach is built on a foundation of technical excellence and unwavering integrity.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {[
            { icon: ShieldCheck, title: 'Integrity', desc: 'Transparent management and ethical decision-making in every project.' },
            { icon: Globe, title: 'Global Vision', desc: 'Thinking beyond borders to bring world-class standards to local projects.' },
            { icon: Users, title: 'Collaboration', desc: 'Working as an extension of your team to ensure seamless execution.' },
            { icon: Award, title: 'Excellence', desc: 'A relentless pursuit of quality and technical precision in all we do.' },
          ].map((value, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 text-center group bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-primary group-hover:text-white transition-all">
                <value.icon size={32} />
              </div>
              <h4 className="text-xl font-bold mb-3">{value.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Mission Section */}
        <div className="bg-slate-900 dark:bg-slate-800 rounded-[3rem] p-12 md:p-20 text-white mb-32 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 rounded-full -mr-48 -mt-48 blur-3xl" />
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-primary mb-6">Our Mission</h2>
              <h3 className="text-4xl font-bold mb-8 leading-tight">Empowering Innovation Through Strategic Management.</h3>
              <p className="text-xl text-white/70 leading-relaxed mb-8">
                Our mission is to provide the operational backbone for the world's most ambitious initiatives. We believe that great ideas deserve flawless execution, and we are here to ensure that complexity never stands in the way of progress.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-primary/20 rounded-xl flex items-center justify-center text-brand-primary">
                    <Award size={24} />
                  </div>
                  <span className="text-lg font-medium">Setting industry standards for technical project management.</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-primary/20 rounded-xl flex items-center justify-center text-brand-primary">
                    <Globe size={24} />
                  </div>
                  <span className="text-lg font-medium">Fostering a global network of specialized expertise.</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/seed/mission1/400/500" alt="Mission" className="rounded-2xl w-full h-64 object-cover mt-12" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/mission2/400/500" alt="Vision" className="rounded-2xl w-full h-64 object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center py-24 border-t border-slate-100 dark:border-slate-800"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to build the future together?</h2>
          <p className="text-slate-500 mb-10 max-w-2xl mx-auto text-lg">
            Whether you're a potential client or a talented professional looking to join our mission, we'd love to hear from you.
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-brand-primary text-white px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform"
            >
              Contact Us
            </Link>
            <Link 
              to="/services" 
              className="px-10 py-4 rounded-full font-bold border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
            >
              Our Services
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
