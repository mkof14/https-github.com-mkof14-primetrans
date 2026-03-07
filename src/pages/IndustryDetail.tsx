import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { industriesData } from '../data/industries';
import { ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { useEffect } from 'react';

export default function IndustryDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const industry = industriesData.find(ind => ind.id === id);

  useEffect(() => {
    if (!industry) {
      navigate('/projects');
    }
  }, [industry, navigate]);

  if (!industry) return null;

  return (
    <div className="pt-32 pb-24">
      <SEO 
        title={industry.name}
        description={industry.shortDesc}
        keywords={`${industry.name}, project management, ${industry.name} solutions`}
      />
      
      <div className="max-w-7xl mx-auto px-6">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-slate-500 hover:text-brand-primary transition-colors mb-12 font-bold text-sm uppercase tracking-widest"
        >
          <ArrowLeft size={16} /> Back to Expertise
        </Link>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary mb-8">
              <industry.icon size={32} />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              {industry.name} <span className="text-brand-primary">Management</span>.
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-10">
              {industry.fullDesc}
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {industry.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="text-brand-primary shrink-0 mt-1" size={20} />
                  <span className="font-medium text-slate-700 dark:text-slate-300">{feature}</span>
                </div>
              ))}
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-slate-900 dark:bg-slate-50 text-white dark:text-slate-900 px-10 py-5 rounded-full font-bold hover:scale-105 transition-transform"
            >
              Discuss a Project <ArrowRight size={20} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-800">
              <img 
                src={industry.image} 
                alt={industry.name} 
                className="w-full h-auto object-cover aspect-[4/3]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800 hidden md:block">
              <div className="text-4xl font-bold text-brand-primary mb-1">98%</div>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Success Rate in {industry.name}</div>
            </div>
          </motion.div>
        </div>

        {/* Additional Content / Images */}
        <div className="grid md:grid-cols-3 gap-8">
          <img 
            src={`https://picsum.photos/seed/${industry.id}-1/600/400`} 
            alt="Detail 1" 
            className="rounded-3xl w-full aspect-video object-cover shadow-lg"
            referrerPolicy="no-referrer"
          />
          <img 
            src={`https://picsum.photos/seed/${industry.id}-2/600/400`} 
            alt="Detail 2" 
            className="rounded-3xl w-full aspect-video object-cover shadow-lg"
            referrerPolicy="no-referrer"
          />
          <img 
            src={`https://picsum.photos/seed/${industry.id}-3/600/400`} 
            alt="Detail 3" 
            className="rounded-3xl w-full aspect-video object-cover shadow-lg"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </div>
  );
}
