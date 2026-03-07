import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { servicesData } from '../data/services';
import { ArrowLeft, CheckCircle2, ArrowRight, ShieldCheck, Zap, Rocket, Activity } from 'lucide-react';
import SEO from '../components/SEO';
import { useEffect } from 'react';

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const service = servicesData.find(s => s.id === id);

  useEffect(() => {
    if (!service) {
      navigate('/services');
    }
    window.scrollTo(0, 0);
  }, [service, navigate]);

  if (!service) return null;

  return (
    <div className="pt-32 pb-24">
      <SEO 
        title={service.title}
        description={service.description}
        keywords={`${service.title}, management services, Prime Trans solutions`}
      />
      
      <div className="max-w-7xl mx-auto px-6">
        <Link 
          to="/services" 
          className="inline-flex items-center gap-2 text-slate-500 hover:text-brand-primary transition-colors mb-12 font-bold text-sm uppercase tracking-widest"
        >
          <ArrowLeft size={16} /> Back to Services
        </Link>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary mb-8">
              <service.icon size={32} />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              {service.title} <span className="text-brand-primary">Solutions</span>.
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-10">
              {service.fullDescription}
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {service.features.map((feature, idx) => (
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
              Discuss Your Project <ArrowRight size={20} />
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
                src={service.image} 
                alt={service.title} 
                className="w-full h-auto object-cover aspect-[4/3]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800 hidden md:block">
              <div className="text-4xl font-bold text-brand-primary mb-1">100%</div>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Reliability in Execution</div>
            </div>
          </motion.div>
        </div>

        {/* Benefits Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm text-center"
              >
                <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary mx-auto mb-6">
                  <Activity size={24} />
                </div>
                <p className="font-bold text-slate-800 dark:text-slate-200">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Images Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <img 
            src={`https://picsum.photos/seed/${service.id}-1/600/400`} 
            alt="Service Detail 1" 
            className="rounded-3xl w-full aspect-video object-cover shadow-lg"
            referrerPolicy="no-referrer"
          />
          <img 
            src={`https://picsum.photos/seed/${service.id}-2/600/400`} 
            alt="Service Detail 2" 
            className="rounded-3xl w-full aspect-video object-cover shadow-lg"
            referrerPolicy="no-referrer"
          />
          <img 
            src={`https://picsum.photos/seed/${service.id}-3/600/400`} 
            alt="Service Detail 3" 
            className="rounded-3xl w-full aspect-video object-cover shadow-lg"
            referrerPolicy="no-referrer"
          />
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
            <h2 className="text-4xl font-bold mb-6">Ready to optimize your operations?</h2>
            <p className="text-lg text-white/70 mb-10">
              Our {service.title} experts are ready to help you navigate your next complex project. Let's discuss how we can deliver measurable results for your organization.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-slate-900 px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform"
            >
              Get Started <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
