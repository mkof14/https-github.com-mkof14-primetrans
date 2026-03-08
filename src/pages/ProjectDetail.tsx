import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { projectsData } from '../data/projects';
import { ArrowLeft, CheckCircle2, ArrowRight, Calendar, Tag, Activity } from 'lucide-react';
import SEO from '../components/SEO';
import { useEffect } from 'react';

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = projectsData.find(p => p.slug === slug);

  useEffect(() => {
    if (!project) {
      // If project not found by slug, try by ID as fallback or redirect
      navigate('/projects');
    }
    window.scrollTo(0, 0);
  }, [project, navigate]);

  if (!project) return null;

  return (
    <div className="pt-32 pb-24">
      <SEO 
        title={project.title}
        description={project.description}
        keywords={`${project.category}, case study, ${project.title}, Prime Trans`}
      />
      
      <div className="max-w-7xl mx-auto px-6">
        <Link 
          to="/projects" 
          className="inline-flex items-center gap-2 text-slate-500 hover:text-brand-primary transition-colors mb-12 font-bold text-sm uppercase tracking-widest"
        >
          <ArrowLeft size={16} /> Back to Projects
        </Link>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="px-4 py-1.5 bg-brand-primary/10 text-brand-primary rounded-full text-xs font-bold uppercase tracking-widest">
                {project.category}
              </span>
              <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-slate-400">
                <Activity size={14} /> {project.status}
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              {project.title}
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-10">
              {project.fullDescription}
            </p>
            
            <div className="grid grid-cols-3 gap-8 p-8 bg-slate-50 dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="text-center">
                  <div className="flex justify-center mb-2 text-brand-primary">
                    <metric.icon size={24} />
                  </div>
                  <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                    {metric.value}
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-800"
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover aspect-[4/3]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        {/* Challenge & Solution */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          <div className="space-y-8">
            <div className="p-10 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm">
              <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {project.challenge}
              </p>
            </div>
            <div className="p-10 bg-brand-primary text-white rounded-[2.5rem] shadow-xl shadow-brand-primary/20">
              <h2 className="text-3xl font-bold mb-6">Our Solution</h2>
              <p className="text-white/90 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8">Measurable Results</h2>
            <div className="space-y-6">
              {project.results.map((result, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-4 p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800"
                >
                  <div className="w-8 h-8 bg-brand-primary/10 rounded-lg flex items-center justify-center text-brand-primary shrink-0">
                    <CheckCircle2 size={20} />
                  </div>
                  <p className="font-medium text-slate-700 dark:text-slate-300 leading-relaxed">
                    {result}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Deep Dive: Timeline & Technical Specs */}
        {(project.timeline || project.technicalSpecs) && (
          <div className="grid lg:grid-cols-[1fr_350px] gap-16 mb-24">
            {project.timeline && (
              <div>
                <h2 className="text-3xl font-bold mb-12">Project Timeline</h2>
                <div className="space-y-12 relative before:absolute before:left-[15px] before:top-2 before:bottom-2 before:w-px before:bg-slate-200 dark:before:bg-slate-800">
                  {project.timeline.map((item, idx) => (
                    <div key={idx} className="relative pl-12">
                      <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-white dark:bg-slate-950 border-2 border-brand-primary flex items-center justify-center z-10">
                        <div className="w-2 h-2 rounded-full bg-brand-primary" />
                      </div>
                      <div className="text-xs font-black uppercase tracking-widest text-brand-primary mb-2">{item.date}</div>
                      <h4 className="text-xl font-bold mb-2">{item.event}</h4>
                      <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {project.technicalSpecs && (
              <div className="space-y-8">
                <h2 className="text-3xl font-bold mb-12">Technical Specs</h2>
                <div className="glass-card-modern p-8 rounded-[2.5rem] space-y-6">
                  {project.technicalSpecs.map((spec, idx) => (
                    <div key={idx} className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-4 last:border-0 last:pb-0">
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{spec.label}</span>
                      <span className="font-bold text-sm text-slate-900 dark:text-white">{spec.value}</span>
                    </div>
                  ))}
                  <div className="pt-6">
                    <button className="w-full py-4 rounded-xl border border-brand-primary/20 text-brand-primary text-[10px] font-black uppercase tracking-widest hover:bg-brand-primary hover:text-white transition-all">
                      Download Whitepaper
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Gallery */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-12 text-center">Project Implementation</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {project.gallery.map((img, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="rounded-3xl overflow-hidden shadow-lg aspect-video"
              >
                <img 
                  src={img} 
                  alt={`Gallery ${idx + 1}`} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900 dark:bg-slate-800 rounded-[3rem] p-12 md:p-20 text-white text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/20 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Have a similar challenge?</h2>
            <p className="text-lg text-white/70 mb-10">
              Our team of experts is ready to help you navigate your next complex project. Let's discuss how we can deliver measurable results for your organization.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-slate-900 px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform"
            >
              Get in Touch <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
