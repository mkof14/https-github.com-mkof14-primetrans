import { motion, AnimatePresence } from 'motion/react';
import { Search, Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { blogPosts } from '../data/blog';

const categories = ['All', 'AI & Logistics', 'Security', 'Agro-Tech', 'Innovation'];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-40 pb-24 relative overflow-hidden">
      <SEO 
        title="Insights & Perspectives"
        description="Deep dives into AI, logistics, security, and the future of technical management."
        keywords="business blog, AI insights, logistics trends, technical management articles"
      />
      
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-32 text-left max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="label-caps mb-8">Insights</h2>
            <h1 className="text-7xl md:text-9xl font-extralight tracking-tighter mb-12 leading-[0.85]">
              Thought <br />
              <span className="font-serif italic font-normal text-gradient">Leadership</span> <br />
              <span className="text-slate-400/50">for the Modern Era.</span>
            </h1>
            <p className="text-xl text-slate-500 dark:text-slate-400 font-light max-w-xl border-l-2 border-brand-primary/20 pl-10">
              Exploring the intersection of technology, management, and global strategy.
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
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-16 pr-8 py-5 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-800/50 rounded-full focus:outline-none focus:ring-4 focus:ring-brand-primary/10 focus:border-brand-primary transition-all text-sm font-black uppercase tracking-widest placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-32">
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post, idx) => (
              <motion.div
                key={post.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Link to={`/blog/${post.slug}`} className="group block h-full">
                  <div className="glass-card-modern rounded-[3rem] overflow-hidden hover:shadow-2xl transition-all flex flex-col h-full">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60" />
                      <div className="absolute top-6 left-6">
                        <span className="px-4 py-1.5 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl rounded-xl text-[9px] font-black uppercase tracking-widest shadow-xl border border-white/10">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-10 flex flex-col flex-grow">
                      <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6">
                        <div className="flex items-center gap-1.5">
                          <Calendar size={12} />
                          {post.date}
                        </div>
                        <div className="w-1 h-1 rounded-full bg-slate-300" />
                        <div className="flex items-center gap-1.5">
                          <Clock size={12} />
                          {post.readTime}
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-black tracking-tighter mb-6 group-hover:text-brand-primary transition-colors leading-tight">
                        {post.title}
                      </h3>
                      
                      <p className="text-slate-500 text-sm mb-10 line-clamp-3 font-medium leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <div className="mt-auto pt-8 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-900 dark:text-white">
                          By {post.author}
                        </span>
                        <div className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-brand-primary group-hover:text-white transition-all">
                          <ArrowRight size={18} />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-48">
            <h3 className="text-3xl font-black tracking-tighter mb-4">No articles found</h3>
            <p className="text-slate-500 text-lg font-light mb-10">Try adjusting your search or filters.</p>
            <button 
              onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
              className="text-brand-primary font-black uppercase tracking-widest text-xs hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
