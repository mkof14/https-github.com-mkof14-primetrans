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
    <div className="pt-32 pb-24">
      <SEO 
        title="Our Services"
        description="Comprehensive project management solutions across IT, AI, Machine Learning, Cybersecurity, Renewable Energy, and more."
        keywords="management consulting, AI project management, IT solutions, cybersecurity management, renewable energy projects"
      />
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-24 text-left max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="label-caps mb-6">Our Services</h2>
            <h1 className="text-6xl md:text-8xl font-extralight tracking-tight mb-8 leading-none">
              Comprehensive <br />
              <span className="font-serif italic font-normal text-gradient">Management</span> <br />
              <span className="text-slate-400/50">Solutions.</span>
            </h1>
            <p className="text-lg text-slate-500 font-light max-w-xl border-l border-slate-200 dark:border-slate-800 pl-6">
              We provide the operational backbone for cutting-edge industries and emerging technologies worldwide.
            </p>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-32">
          {servicesData.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="p-12 bg-white dark:bg-slate-900 rounded-[3.5rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full -mr-16 -mt-16 group-hover:bg-brand-primary/10 transition-colors" />
              
              <div className="flex flex-col lg:flex-row items-start gap-8 mb-10">
                <div className="w-20 h-20 bg-slate-50 dark:bg-slate-800 rounded-[2rem] flex items-center justify-center text-brand-primary group-hover:bg-vibrant-gradient group-hover:text-white group-hover:shadow-xl group-hover:shadow-brand-primary/20 transition-all duration-500 shrink-0">
                  <service.icon size={40} />
                </div>
                <div>
                  <h3 className="text-3xl font-black tracking-tight mb-4">{service.title}</h3>
                  <p className="text-slate-500 text-base leading-relaxed mb-6 font-medium">
                    {service.description}
                  </p>
                  <Link 
                    to={`/service/${service.id}`} 
                    className="text-brand-primary font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all"
                  >
                    Learn More <ArrowRight size={18} />
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 border-t border-slate-50 dark:border-slate-800">
                {service.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-3 text-sm font-bold text-slate-600 dark:text-slate-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                    {feature}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* How We Work Section */}
        <section className="py-24 mb-32">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-primary mb-6">Our Process</h2>
            <h3 className="text-5xl font-black tracking-tighter mb-8 leading-none">How We <span className="text-gradient">Work</span>.</h3>
            <p className="text-lg text-slate-500 font-medium">A systematic approach to navigating technical complexity and delivering excellence.</p>
          </div>

          <div className="relative">
            {/* Connection Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-100 dark:bg-slate-800 -translate-y-1/2 -z-10" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {workflowSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative flex flex-col items-center text-center group"
                >
                  <div className="w-20 h-20 bg-white dark:bg-slate-900 rounded-[2rem] border-2 border-slate-100 dark:border-slate-800 flex items-center justify-center text-brand-primary mb-8 group-hover:bg-vibrant-gradient group-hover:text-white group-hover:border-transparent group-hover:shadow-xl group-hover:shadow-brand-primary/20 transition-all duration-500 relative z-10">
                    <step.icon size={32} />
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-slate-900 dark:bg-slate-50 text-white dark:text-slate-900 rounded-full flex items-center justify-center text-xs font-black">
                      0{idx + 1}
                    </div>
                  </div>
                  <h4 className="text-xl font-black tracking-tight mb-4">{step.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Solutions Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-slate-900 dark:bg-slate-800 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/20 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Custom Solutions for Unique Challenges</h2>
              <p className="text-lg text-white/70 leading-relaxed">
                Don't see exactly what you're looking for? We specialize in creating tailored management solutions that address your specific technical requirements, industry constraints, and business objectives.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Link
                to="/contact"
                className="bg-white text-slate-900 px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2"
              >
                Discuss Your Venture <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
