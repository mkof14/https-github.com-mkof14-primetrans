import { motion } from 'motion/react';
import { ArrowRight, Cpu, Beaker, Leaf, ShoppingCart, FlaskConical, Binary, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { industriesData } from '../data/industries';
import MagneticButton from '../components/MagneticButton';

export default function Home() {
  return (
    <div className="flex flex-col">
      <SEO 
        title="Global Innovation Management"
        description="Prime Trans is a premier management company based in Charlotte, NC, overseeing high-complexity projects across IT, AI, Science, and more."
        keywords="project management, AI management, IT solutions, Charlotte NC, business consulting, innovation management"
      />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-primary/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-brand-vibrant/20 rounded-full blur-[120px] animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-secondary/5 rounded-full blur-[150px]" />
          
          {/* Decorative Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[10px] font-black tracking-[0.2em] uppercase mb-8 shadow-sm w-fit"
            >
              <span className="w-2 h-2 rounded-full bg-brand-accent animate-ping" />
              <span className="text-slate-500 dark:text-slate-400">Charlotte, NC • Global Reach</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40, skewY: 2 }}
              animate={{ opacity: 1, y: 0, skewY: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-7xl md:text-9xl font-extralight tracking-tight leading-[0.85] mb-12"
            >
              Managing the <br />
              <span className="font-serif italic font-normal text-gradient">Future</span> <br />
              <span className="text-slate-400/50">of Global Innovation.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-lg text-slate-500 dark:text-slate-400 mb-14 max-w-lg leading-relaxed font-light border-l-2 border-brand-primary/20 pl-8"
            >
              Prime Trans is a premier management company overseeing high-complexity initiatives across IT, AI, Science, and beyond. We turn technical challenges into strategic advantages.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
              className="flex flex-wrap gap-6"
            >
              <MagneticButton>
                <Link
                  to="/projects"
                  className="bg-vibrant-gradient text-white px-10 py-5 rounded-2xl font-black text-lg shadow-xl shadow-brand-primary/20 hover:scale-105 hover:shadow-2xl transition-all flex items-center gap-3"
                >
                  Explore Portfolios <ArrowRight size={22} />
                </Link>
              </MagneticButton>
              <Link
                to="/about"
                className="px-10 py-5 rounded-2xl font-medium border border-slate-200 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-900 hover:border-brand-primary/30 transition-all flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:hover:text-white"
              >
                Our Story
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] dark:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border-8 border-white dark:border-slate-900">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000&h=1200"
                alt="Global Technology and Innovation"
                className="w-full h-auto object-cover aspect-[4/5] hover:scale-110 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60" />
            </div>
            
            {/* Dynamic Floating Elements */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 glass-card p-8 rounded-[2.5rem] z-20"
            >
              <div className="text-4xl font-black text-brand-primary tracking-tighter">Global</div>
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mt-1">Strategic Reach</div>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -top-10 -right-10 glass-card p-8 rounded-[2.5rem] z-20"
            >
              <div className="text-4xl font-black text-brand-vibrant tracking-tighter">Expert</div>
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mt-1">Technical Teams</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white/50 dark:bg-slate-950/50 backdrop-blur-sm border-y border-slate-100 dark:border-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { label: 'Years of Experience', value: '17+' },
              { label: 'Projects Managed', value: '240+' },
              { label: 'Industries Served', value: '12' },
              { label: 'Global Offices', value: '4' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  delay: idx * 0.1 
                }}
                className="text-center group"
              >
                <div className="text-4xl md:text-6xl font-extralight tracking-tighter text-brand-primary mb-2 group-hover:scale-110 transition-transform duration-500">
                  {stat.value}
                </div>
                <div className="label-caps text-slate-400 group-hover:text-brand-primary transition-colors">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 overflow-hidden opacity-50 hover:opacity-100 transition-opacity duration-700">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <div className="label-caps text-center">Trusted by Global Leaders</div>
        </div>
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-24 px-12">
              {['TECHCORP', 'GLOBAL AI', 'BIO-GEN', 'AGRO-SYS', 'NEXUS IT', 'PRIME LOGISTICS'].map((partner, j) => (
                <span key={j} className="text-2xl font-black tracking-[0.3em] text-slate-300 dark:text-slate-700 hover:text-brand-primary transition-colors cursor-default">
                  {partner}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Marquee Section */}
      <section className="py-12 bg-slate-900 overflow-hidden border-y border-white/5">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 px-6">
              {['AI STRATEGY', 'DIGITAL TRANSFORMATION', 'ENTERPRISE SYSTEMS', 'AGRO-TECH', 'SCIENTIFIC R&D', 'GLOBAL LOGISTICS'].map((text, j) => (
                <div key={j} className="flex items-center gap-12">
                  <span className="text-4xl md:text-6xl font-black text-transparent stroke-text tracking-tighter opacity-20 hover:opacity-100 transition-opacity cursor-default">
                    {text}
                  </span>
                  <div className="w-3 h-3 rounded-full bg-brand-primary" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-32 relative overflow-hidden section-grid">
        <div className="absolute inset-0 bg-slate-50/30 dark:bg-slate-900/10 -z-10" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-left max-w-3xl mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="label-caps mb-6">Our Expertise</h2>
              <h3 className="text-5xl md:text-7xl font-extralight tracking-tight mb-8 leading-none">
                Diverse Portfolios, <br />
                <span className="font-serif italic font-normal text-gradient">Unified Excellence</span>.
              </h3>
              <p className="text-lg text-slate-500 font-light max-w-xl border-l border-slate-200 dark:border-slate-800 pl-6">
                From artificial intelligence to sustainable agriculture, we manage the technical conditions that define modern industry.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            {industriesData.map((industry, idx) => {
              const colors = [
                'from-blue-500 to-cyan-400',
                'from-indigo-500 to-purple-400',
                'from-emerald-500 to-teal-400',
                'from-rose-500 to-orange-400',
                'from-amber-500 to-yellow-400',
                'from-violet-500 to-fuchsia-400',
                'from-slate-500 to-zinc-400',
              ];
              const colorClass = colors[idx % colors.length];
              
              // Bento Grid logic: first item is large, others vary
              const isLarge = idx === 0;
              const isWide = idx === 3;
              
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -10 }}
                  className={`p-10 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all group relative overflow-hidden flex flex-col justify-between ${
                    isLarge ? 'md:col-span-2 md:row-span-2' : isWide ? 'md:col-span-2' : ''
                  }`}
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${colorClass} opacity-0 group-hover:opacity-10 rounded-full -mr-16 -mt-16 transition-opacity duration-500`} />
                  
                  <div className="relative">
                    <motion.div 
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className={`w-14 h-14 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-slate-600 dark:text-slate-400 group-hover:bg-gradient-to-br group-hover:${colorClass} group-hover:text-white group-hover:shadow-lg transition-all duration-500 mb-6`}
                    >
                      <industry.icon size={28} />
                    </motion.div>
                    
                    <h4 className={`font-black tracking-tight mb-4 group-hover:text-gradient transition-all ${isLarge ? 'text-4xl' : 'text-2xl'}`}>{industry.name}</h4>
                    <p className={`text-slate-500 leading-relaxed mb-6 font-medium ${isLarge ? 'text-lg max-w-md' : 'text-sm'}`}>{industry.shortDesc}</p>
                  </div>

                  <Link to={`/industry/${industry.id}`} className="text-brand-primary font-black text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                    Explore Sector <ArrowRight size={18} />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="label-caps mb-6">Social Proof</h2>
            <h3 className="text-5xl md:text-7xl font-extralight tracking-tighter mb-8 leading-none">
              Trusted by <span className="font-serif italic font-normal text-gradient">Visionaries</span>.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Prime Trans didn't just manage our project; they redefined our operational framework for the AI era.",
                author: "Sarah Chen",
                role: "CTO, Global AI Systems",
                image: "https://picsum.photos/seed/sarah/100/100"
              },
              {
                quote: "Their technical depth and strategic oversight are unparalleled in the management consulting space.",
                author: "Marcus Thorne",
                role: "Director of R&D, TechCorp",
                image: "https://picsum.photos/seed/marcus/100/100"
              },
              {
                quote: "Navigating the complexities of agro-tech was seamless with their specialized management teams.",
                author: "Elena Rodriguez",
                role: "Founder, Agro-Sys",
                image: "https://picsum.photos/seed/elena/100/100"
              }
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card-modern p-10 rounded-[3rem] relative group"
              >
                <div className="mb-8 text-brand-primary">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">★</span>
                  ))}
                </div>
                <p className="text-lg text-slate-600 dark:text-slate-300 italic mb-10 font-medium leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                    className="w-12 h-12 rounded-full grayscale group-hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <div className="font-black tracking-tight text-slate-900 dark:text-white">{testimonial.author}</div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-slate-900 dark:bg-brand-primary rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 max-w-4xl mx-auto">Ready to navigate your next complex venture?</h2>
              <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">Join the ranks of global leaders who trust Prime Trans with their most critical technical assets.</p>
              <Link
                to="/contact"
                className="bg-white text-slate-900 px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform inline-block"
              >
                Start a Conversation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
