import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { BarChart3, Users, Mail, MessageSquare, ArrowUpRight, Calendar, ExternalLink } from 'lucide-react';
import SEO from '../components/SEO';

interface AdminStats {
  stats: {
    subscribers: number;
    inquiries: number;
  };
  recentContacts: any[];
  recentSubscribers: any[];
}

export default function AdminDashboard() {
  const [data, setData] = useState<AdminStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/api/admin/stats')
      .then(res => res.json())
      .then(setData)
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <div className="pt-48 text-center font-black uppercase tracking-widest text-slate-400">Loading Intelligence...</div>;

  return (
    <div className="pt-40 pb-24 px-6">
      <SEO title="Admin Dashboard" description="Internal management dashboard for Prime Trans." />
      
      <div className="max-w-7xl mx-auto">
        <header className="mb-16">
          <h2 className="label-caps mb-6">Management Console</h2>
          <h1 className="text-5xl md:text-7xl font-extralight tracking-tighter leading-none">
            Operational <span className="font-serif italic font-normal text-gradient">Intelligence</span>.
          </h1>
        </header>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            { label: 'Total Subscribers', value: data?.stats.subscribers || 0, icon: Mail, color: 'text-brand-primary' },
            { label: 'Total Inquiries', value: data?.stats.inquiries || 0, icon: MessageSquare, color: 'text-brand-vibrant' },
            { label: 'Conversion Rate', value: '4.2%', icon: BarChart3, color: 'text-emerald-500' },
            { label: 'Active Projects', value: '12', icon: Users, color: 'text-brand-accent' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card-modern p-8 rounded-[3rem]"
            >
              <div className={`w-12 h-12 bg-slate-50 dark:bg-slate-900 rounded-2xl flex items-center justify-center ${stat.color} mb-6`}>
                <stat.icon size={24} />
              </div>
              <div className="text-4xl font-black tracking-tighter mb-2">{stat.value}</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Recent Inquiries */}
          <section className="glass-card-modern p-10 rounded-[4rem]">
            <div className="flex items-center justify-between mb-10">
              <h3 className="text-2xl font-black tracking-tighter">Recent Inquiries</h3>
              <button className="text-[10px] font-black uppercase tracking-widest text-brand-primary hover:underline">View All</button>
            </div>
            <div className="space-y-6">
              {data?.recentContacts.map((contact, idx) => (
                <div key={idx} className="p-6 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 group hover:border-brand-primary/30 transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="font-black tracking-tight text-lg">{contact.name}</div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">{contact.company || 'Private Individual'}</div>
                    </div>
                    <div className="text-[9px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
                      <Calendar size={12} /> {new Date(contact.created_at).toLocaleDateString()}
                    </div>
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 mb-4">{contact.message}</p>
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-brand-primary/10 text-brand-primary rounded-lg text-[9px] font-black uppercase tracking-widest">
                      {contact.service}
                    </span>
                    <button className="text-slate-400 hover:text-brand-primary transition-colors">
                      <ExternalLink size={16} />
                    </button>
                  </div>
                </div>
              ))}
              {data?.recentContacts.length === 0 && <div className="text-center py-12 text-slate-400 font-bold">No inquiries yet.</div>}
            </div>
          </section>

          {/* Recent Subscribers */}
          <section className="glass-card-modern p-10 rounded-[4rem]">
            <div className="flex items-center justify-between mb-10">
              <h3 className="text-2xl font-black tracking-tighter">New Subscribers</h3>
              <button className="text-[10px] font-black uppercase tracking-widest text-brand-primary hover:underline">Export List</button>
            </div>
            <div className="space-y-4">
              {data?.recentSubscribers.map((sub, idx) => (
                <div key={idx} className="flex items-center justify-between p-5 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary">
                      <Mail size={18} />
                    </div>
                    <div>
                      <div className="font-bold text-sm">{sub.email}</div>
                      <div className="text-[9px] font-black uppercase tracking-widest text-slate-400">Joined {new Date(sub.created_at).toLocaleDateString()}</div>
                    </div>
                  </div>
                  <ArrowUpRight size={16} className="text-slate-300" />
                </div>
              ))}
              {data?.recentSubscribers.length === 0 && <div className="text-center py-12 text-slate-400 font-bold">No subscribers yet.</div>}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
