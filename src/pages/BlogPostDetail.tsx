import { motion } from 'motion/react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Tag, Share2, Linkedin, Facebook } from 'lucide-react';
import SEO from '../components/SEO';
import { blogPosts } from '../data/blog';
import Markdown from 'react-markdown';

export default function BlogPostDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="pt-48 pb-24 text-center">
        <h1 className="text-4xl font-black mb-8">Article not found</h1>
        <Link to="/blog" className="text-brand-primary font-bold hover:underline">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="pt-40 pb-24">
      <SEO 
        title={post.title}
        description={post.excerpt}
        keywords={post.tags.join(', ')}
        ogType="article"
      />
      
      <div className="max-w-4xl mx-auto px-6">
        <motion.button
          onClick={() => navigate('/blog')}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-brand-primary transition-colors mb-16 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Insights
        </motion.button>

        <header className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="px-4 py-1.5 bg-brand-primary/10 text-brand-primary rounded-xl text-[10px] font-black uppercase tracking-widest">
                {post.category}
              </span>
              <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-slate-400">
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
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extralight tracking-tighter mb-12 leading-[0.9]">
              {post.title}
            </h1>
            
            <p className="text-2xl text-slate-500 dark:text-slate-400 font-light leading-relaxed border-l-4 border-brand-primary/20 pl-10 italic">
              {post.excerpt}
            </p>
          </motion.div>
        </header>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="rounded-[4rem] overflow-hidden mb-24 shadow-2xl border-8 border-white dark:border-slate-900"
        >
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full aspect-[16/9] object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_200px] gap-20">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="prose prose-lg dark:prose-invert prose-slate max-w-none"
          >
            <div className="markdown-body">
              <Markdown>{post.content}</Markdown>
            </div>
            
            <div className="mt-20 pt-12 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-3">
              {post.tags.map(tag => (
                <span key={tag} className="px-4 py-2 bg-slate-50 dark:bg-slate-900 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-400 border border-slate-100 dark:border-slate-800">
                  #{tag}
                </span>
              ))}
            </div>
          </motion.article>

          <aside className="space-y-12">
            <div className="sticky top-40">
              <div className="mb-12">
                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-6">Author</h4>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-vibrant-gradient flex items-center justify-center text-white font-black text-xl">
                    {post.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-black tracking-tight">{post.author}</div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Contributor</div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-6">Share</h4>
                <div className="flex gap-4">
                  <button className="w-12 h-12 rounded-2xl border border-slate-100 dark:border-slate-800 flex items-center justify-center text-slate-400 hover:text-brand-primary hover:border-brand-primary transition-all">
                    <Linkedin size={20} />
                  </button>
                  <button className="w-12 h-12 rounded-2xl border border-slate-100 dark:border-slate-800 flex items-center justify-center text-slate-400 hover:text-brand-primary hover:border-brand-primary transition-all">
                    <Facebook size={20} />
                  </button>
                  <button className="w-12 h-12 rounded-2xl border border-slate-100 dark:border-slate-800 flex items-center justify-center text-slate-400 hover:text-brand-primary hover:border-brand-primary transition-all">
                    <Share2 size={20} />
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
