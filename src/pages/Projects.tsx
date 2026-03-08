import { motion, AnimatePresence } from 'motion/react';
import { Search, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import SEO from '../components/SEO';
import { projectsData } from '../data/projects';
import { Link } from 'react-router-dom';

const categories = ['All', 'Logistics', 'Finance', 'Agriculture', 'Healthcare', 'Retail', 'Manufacturing'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = projectsData.filter(project => {
    const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-40 pb-24 relative overflow-hidden">
      <SEO 
        title="Case Studies & Projects"
        description="Explore our successful projects and case studies across logistics, finance, agriculture, healthcare, and manufacturing."
        keywords="case studies, project portfolio, business success stories, industry solutions, Prime Trans projects"
      />
      
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-32 text-left max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="label-caps mb-8">Case Studies</h2>
            <h1 className="text-7xl md:text-9xl font-extralight tracking-tighter mb-12 leading-[0.85]">
              Proven <br />
              <span className="font-serif italic font-normal text-gradient">Results</span> <br />
              <span className="text-slate-400/50">Across Industries.</span>
            </h1>
            <p className="text-xl text-slate-500 dark:text-slate-400 font-light max-w-xl border-l-2 border-brand-primary/20 pl-10">
              Explore how Prime Trans delivers measurable results across diverse industries through technical excellence and strategic management.
            </p>
          </motion.div>
        </header>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-12 mb-24">
          <div className="flex flex-wrap items-center gap-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                  activeCategory === cat 
                    ? 'bg-slate-950 dark:bg-white text-white dark:text-slate-950 shadow-xl scale-105' 
                    : 'bg-white/50 dark:bg-slate-900/50 text-slate-500 dark:text-slate-400 border border-slate-200/50 dark:border-slate-800/50 hover:border-brand-primary/30 backdrop-blur-sm'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative max-w-md w-full group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-primary transition-colors" size={20} />
            <input 
              type="text"
              placeholder="Search case studies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-16 pr-8 py-5 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-800/50 rounded-full focus:outline-none focus:ring-4 focus:ring-brand-primary/10 focus:border-brand-primary transition-all text-sm font-black uppercase tracking-widest placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                <Link
                  to={`/project/${project.slug}`}
                  className="block group h-full"
                >
                  <div className="glass-card-modern rounded-[4rem] overflow-hidden hover:shadow-2xl transition-all flex flex-col h-full relative group">
                    <div className="relative overflow-hidden aspect-[16/9]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                      <div className="absolute top-8 left-8">
                        <span className="px-6 py-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl border border-white/20">
                          {project.category}
                        </span>
                      </div>
                      <div className="absolute bottom-8 left-8 right-8">
                        <h3 className="text-4xl font-black tracking-tighter text-white leading-none group-hover:text-brand-primary transition-colors">{project.title}</h3>
                      </div>
                    </div>
                    
                    <div className="p-12 flex flex-col flex-grow">
                      <p className="text-slate-500 text-lg mb-12 line-clamp-3 font-medium leading-relaxed">
                        {project.description}
                      </p>

                      <div className="grid grid-cols-3 gap-8 mt-auto pt-10 border-t border-slate-100 dark:border-slate-800">
                        {project.metrics.map((metric, mIdx) => (
                          <div key={mIdx} className="text-center group/metric">
                            <div className="flex justify-center mb-3 text-brand-primary group-hover/metric:scale-125 transition-transform">
                              <metric.icon size={24} />
                            </div>
                            <div className="text-2xl font-black text-slate-900 dark:text-white leading-none mb-2 tracking-tighter">
                              {metric.value}
                            </div>
                            <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-48"
          >
            <div className="inline-flex items-center justify-center w-24 h-24 bg-slate-100 dark:bg-slate-800 rounded-full mb-8 text-slate-400">
              <Search size={40} />
            </div>
            <h3 className="text-3xl font-black tracking-tighter mb-4">No results found</h3>
            <p className="text-slate-500 text-lg font-light mb-10">Try adjusting your filters or search query.</p>
            <button 
              onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
              className="text-brand-primary font-black uppercase tracking-widest text-xs hover:underline"
            >
              Clear all filters
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
