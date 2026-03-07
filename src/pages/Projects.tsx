import { motion } from 'motion/react';
import { Search, Filter, ExternalLink, TrendingUp, Clock, ShieldCheck, Users } from 'lucide-react';
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
    <div className="pt-32 pb-24">
      <SEO 
        title="Case Studies & Projects"
        description="Explore our successful projects and case studies across logistics, finance, agriculture, healthcare, and manufacturing."
        keywords="case studies, project portfolio, business success stories, industry solutions, Prime Trans projects"
      />
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-24 text-left max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="label-caps mb-6">Case Studies</h2>
            <h1 className="text-6xl md:text-8xl font-extralight tracking-tight mb-8 leading-none">
              Proven <br />
              <span className="font-serif italic font-normal text-gradient">Results</span> <br />
              <span className="text-slate-400/50">Across Industries.</span>
            </h1>
            <p className="text-lg text-slate-500 font-light max-w-xl border-l border-slate-200 dark:border-slate-800 pl-6">
              Explore how Prime Trans delivers measurable results across diverse industries through technical excellence and strategic management.
            </p>
          </motion.div>
        </header>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-10 mb-20">
          <div className="flex flex-wrap items-center gap-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${
                  activeCategory === cat 
                    ? 'bg-vibrant-gradient text-white shadow-lg shadow-brand-primary/20 scale-105' 
                    : 'bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 border border-slate-100 dark:border-slate-800 hover:border-brand-primary/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative max-w-md w-full">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text"
              placeholder="Search case studies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-14 pr-6 py-4 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[2rem] focus:outline-none focus:ring-4 focus:ring-brand-primary/10 focus:border-brand-primary transition-all text-sm font-medium"
            />
          </div>
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32"
        >
          {filteredProjects.map((project, idx) => (
            <Link
              key={project.id}
              to={`/project/${project.slug}`}
              className="block group"
            >
              <motion.div
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-white dark:bg-slate-900 rounded-[3.5rem] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all flex flex-col md:flex-row h-full relative"
              >
                <div className="md:w-2/5 relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 aspect-[4/5] md:aspect-auto"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-1.5 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-xl text-[10px] font-black uppercase tracking-widest shadow-sm border border-white/20">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-10 md:w-3/5 flex flex-col">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-3xl font-black tracking-tight leading-none group-hover:text-brand-primary transition-colors">{project.title}</h3>
                    <div className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-brand-primary group-hover:text-white transition-all shrink-0">
                      <ExternalLink size={20} />
                    </div>
                  </div>
                  
                  <p className="text-slate-500 text-base mb-10 line-clamp-2 font-medium leading-relaxed">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-3 gap-6 mt-auto pt-8 border-t border-slate-50 dark:border-slate-800">
                    {project.metrics.map((metric, mIdx) => (
                      <div key={mIdx} className="text-center">
                        <div className="flex justify-center mb-2 text-brand-primary">
                          <metric.icon size={20} />
                        </div>
                        <div className="text-xl font-black text-slate-900 dark:text-white leading-none mb-1 tracking-tighter">
                          {metric.value}
                        </div>
                        <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-24"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-full mb-6 text-slate-400">
              <Search size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">No projects found</h3>
            <p className="text-slate-500">Try adjusting your filters or search query to find what you're looking for.</p>
            <button 
              onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
              className="mt-6 text-brand-primary font-bold hover:underline"
            >
              Clear all filters
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
