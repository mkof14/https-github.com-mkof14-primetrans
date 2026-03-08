import { motion } from 'motion/react';
import { Briefcase, MapPin, Clock, ArrowRight, Users, Trophy, Heart } from 'lucide-react';
import { useEffect, useState } from 'react';
import SEO from '../components/SEO';
import MagneticButton from '../components/MagneticButton';

interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string;
}

export default function Careers() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/api/jobs')
      .then(res => res.json())
      .then(data => {
        setJobs(data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error('Error fetching jobs:', err);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="pt-40 pb-24 relative overflow-hidden">
      <SEO 
        title="Careers"
        description="Join the Prime Trans team and help manage the future of technical excellence."
        keywords="careers, jobs, project management jobs, AI consulting careers, Charlotte NC jobs"
      />
      
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-32 text-left max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="label-caps mb-8">Join Our Team</h2>
            <h1 className="text-7xl md:text-9xl font-extralight tracking-tighter mb-12 leading-[0.85]">
              Manage the <br />
              <span className="font-serif italic font-normal text-gradient">Future</span> <br />
              <span className="text-slate-400/50">with Us.</span>
            </h1>
            <p className="text-xl text-slate-500 dark:text-slate-400 font-light max-w-xl border-l-2 border-brand-primary/20 pl-10">
              We're looking for visionary leaders and technical experts to solve the world's most complex management challenges.
            </p>
          </motion.div>
        </header>

        {/* Culture Section */}
        <div className="grid md:grid-cols-3 gap-12 mb-48">
          {[
            { icon: Users, title: 'Collaborative Excellence', desc: 'Work with the brightest minds in AI, logistics, and technical management.' },
            { icon: Trophy, title: 'Impactful Work', desc: 'Manage projects that redefine industries and solve global-scale problems.' },
            { icon: Heart, title: 'Holistic Growth', desc: 'We invest in your professional development and personal well-being.' },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card-modern p-10 rounded-[3rem] group"
            >
              <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary mb-8 group-hover:bg-vibrant-gradient group-hover:text-white transition-all duration-500">
                <item.icon size={32} />
              </div>
              <h3 className="text-2xl font-black tracking-tight mb-4">{item.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Jobs Listing */}
        <section>
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-4xl font-black tracking-tighter">Open Positions</h2>
            <div className="px-4 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-400">
              {jobs.length} Roles Available
            </div>
          </div>

          {isLoading ? (
            <div className="space-y-6">
              {[1, 2, 3].map(i => (
                <div key={i} className="h-32 bg-slate-50 dark:bg-slate-900 rounded-3xl animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {jobs.map((job, idx) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-card-modern p-8 md:p-12 rounded-[3rem] group hover:border-brand-primary/30 transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                    <div className="flex-grow">
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <span className="px-3 py-1 bg-brand-primary/10 text-brand-primary rounded-lg text-[10px] font-black uppercase tracking-widest">
                          {job.department}
                        </span>
                        <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-slate-400">
                          <MapPin size={12} /> {job.location}
                        </div>
                        <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-slate-400">
                          <Clock size={12} /> {job.type}
                        </div>
                      </div>
                      <h3 className="text-3xl font-black tracking-tighter mb-4 group-hover:text-brand-primary transition-colors">
                        {job.title}
                      </h3>
                      <p className="text-slate-500 dark:text-slate-400 font-medium max-w-2xl">
                        {job.description}
                      </p>
                    </div>
                    <MagneticButton>
                      <button className="bg-slate-950 dark:bg-white text-white dark:text-slate-950 px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl hover:scale-105 transition-all flex items-center gap-3">
                        Apply Now <ArrowRight size={16} />
                      </button>
                    </MagneticButton>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </section>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-48 bg-vibrant-gradient rounded-[4rem] p-12 md:p-24 text-white text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full -mr-300 -mt-300 blur-[120px]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-extralight tracking-tighter mb-10 leading-none">Don't see a fit?</h2>
            <p className="text-xl text-white/80 leading-relaxed font-light mb-12">
              We're always looking for exceptional talent. Send us your resume and tell us how you can help Prime Trans manage the future.
            </p>
            <MagneticButton>
              <a 
                href="mailto:careers@primetranco.com"
                className="inline-flex items-center gap-4 bg-white text-slate-950 px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-sm shadow-2xl hover:scale-105 transition-all"
              >
                General Application <ArrowRight size={20} />
              </a>
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
