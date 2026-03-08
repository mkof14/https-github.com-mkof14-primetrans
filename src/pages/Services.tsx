import { motion } from 'motion/react';
import { 
  ArrowRight,
  MessageSquare,
  Compass,
  Zap,
  Activity,
  Trophy,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { servicesData } from '../data/services';
import MagneticButton from '../components/MagneticButton';
import AIInsightsTool from '../components/AIInsightsTool';

const workflowSteps = [
  {
    title: 'Initial Consultation',
    description: 'We begin by understanding your vision, technical requirements, and the unique challenges of your industry.',
    icon: MessageSquare,
  },
  {
    title: 'Strategy Development',
    description: 'Our team crafts a comprehensive strategic roadmap, defining milestones, resource allocation, and risk mitigation strategies.',
    icon: Compass,
  },
  {
    title: 'Execution',
    description: 'We deploy specialized management teams to oversee technical implementation, ensuring precision and adherence to standards.',
    icon: Zap,
  },
  {
    title: 'Monitoring',
    description: 'Continuous oversight and real-time data analysis allow us to optimize performance and address issues before they arise.',
    icon: Activity,
  },
  {
    title: 'Delivery',
    description: 'We ensure a seamless transition and final delivery, meeting all strategic objectives and technical specifications.',
    icon: Trophy,
  },
];

export default function Services() {
  return (
    <div className="pt-40 pb-24 relative overflow-hidden">
      <SEO 
        title="Our Services"
        description="Comprehensive project management solutions across IT, AI, Machine Learning, Cybersecurity, Renewable Energy, and more."
        keywords="management consulting, AI project management, IT solutions, cybersecurity management, renewable energy projects"
      />
      
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-32 text-left max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="label-caps mb-8">Our Services</h2>
            <h1 className="text-7xl md:text-9xl font-extralight tracking-tighter mb-12 leading-[0.85]">
              Comprehensive <br />
              <span className="font-serif italic font-normal text-gradient">Management</span> <br />
              <span className="text-slate-400/50">Solutions.</span>
            </h1>
            <p className="text-xl text-slate-500 dark:text-slate-400 font-light max-w-xl border-l-2 border-brand-primary/20 pl-10">
              We provide the operational backbone for cutting-edge industries and emerging technologies worldwide.
            </p>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-48">
          {servicesData.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-12 glass-card-modern rounded-[4rem] group relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-primary/5 rounded-full -mr-24 -mt-24 group-hover:bg-brand-primary/10 transition-all duration-700" />
              
              <div className="relative">
                <div className="flex items-center gap-8 mb-10">
                  <div className="w-20 h-20 bg-slate-50 dark:bg-slate-800 rounded-[2rem] flex items-center justify-center text-brand-primary group-hover:bg-vibrant-gradient group-hover:text-white group-hover:shadow-2xl group-hover:shadow-brand-primary/30 transition-all duration-700 shrink-0">
                    <service.icon size={40} />
                  </div>
                  <h3 className="text-4xl font-black tracking-tighter group-hover:text-brand-primary transition-colors">{service.title}</h3>
                </div>
                
                <p className="text-slate-500 text-lg leading-relaxed mb-10 font-medium">
                  {service.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-4 text-sm font-black uppercase tracking-widest text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-brand-primary shadow-[0_0_10px_rgba(14,165,233,0.5)]" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <MagneticButton className="mt-auto">
                <Link 
                  to={`/service/${service.id}`} 
                  className="inline-flex items-center gap-4 text-brand-primary font-black uppercase tracking-widest text-xs group/link"
                >
                  Explore Service <ArrowRight className="group-hover/link:translate-x-2 transition-transform" />
                </Link>
              </MagneticButton>
            </motion.div>
          ))}
        </div>

        {/* How We Work Section */}
        <section className="py-32 mb-48 relative">
          <div className="text-center max-w-3xl mx-auto mb-32">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-primary mb-8"
            >
              Our Process
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl font-extralight tracking-tighter mb-10 leading-none"
            >
              How We <span className="font-serif italic font-normal text-gradient">Work.</span>
            </motion.h3>
            <p className="text-xl text-slate-500 font-light">A systematic approach to navigating technical complexity and delivering excellence.</p>
          </div>

          <div className="relative">
            {/* Connection Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-slate-200 dark:bg-slate-800 -translate-y-1/2 -z-10" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
              {workflowSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative flex flex-col items-center text-center group"
                >
                  <div className="w-24 h-24 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 flex items-center justify-center text-brand-primary mb-10 group-hover:bg-vibrant-gradient group-hover:text-white group-hover:border-transparent group-hover:shadow-2xl group-hover:shadow-brand-primary/30 transition-all duration-700 relative z-10">
                    <step.icon size={36} />
                    <div className="absolute -top-4 -right-4 w-10 h-10 bg-slate-950 dark:bg-white text-white dark:text-slate-950 rounded-full flex items-center justify-center text-xs font-black shadow-xl">
                      0{idx + 1}
                    </div>
                  </div>
                  <h4 className="text-2xl font-black tracking-tight mb-6 group-hover:text-brand-primary transition-colors">{step.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Tool Section */}
        <section className="mb-48">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="label-caps mb-6">Interactive Strategy</h2>
            <h3 className="text-5xl md:text-7xl font-extralight tracking-tighter mb-8 leading-none">
              AI-Powered <span className="font-serif italic font-normal text-gradient">Perspectives</span>.
            </h3>
          </div>
          <div className="max-w-4xl mx-auto">
            <AIInsightsTool />
          </div>
        </section>

        {/* Custom Solutions Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-slate-950 dark:bg-brand-primary rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full -mr-300 -mt-300 blur-[120px]" />
          <div className="relative z-10 grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-5xl md:text-7xl font-extralight tracking-tighter mb-10 leading-[0.9]">Custom Solutions for Unique Challenges.</h2>
              <p className="text-xl text-white/70 leading-relaxed font-light">
                Don't see exactly what you're looking for? We specialize in creating tailored management solutions that address your specific technical requirements, industry constraints, and business objectives.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <MagneticButton>
                <Link
                  to="/contact"
                  className="bg-white text-slate-950 px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-sm shadow-2xl hover:scale-105 transition-all flex items-center gap-4"
                >
                  Discuss Your Venture <ArrowRight size={20} />
                </Link>
              </MagneticButton>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
