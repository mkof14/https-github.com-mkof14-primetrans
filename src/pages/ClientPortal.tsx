import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Lock, LayoutDashboard, FileText, MessageSquare, Settings, LogOut, CheckCircle2, Clock, AlertCircle } from 'lucide-react';
import SEO from '../components/SEO';
import MagneticButton from '../components/MagneticButton';

export default function ClientPortal() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation: any login works for demo
    if (email && password) {
      setIsLoggedIn(true);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen pt-40 pb-24 flex items-center justify-center px-6">
        <SEO title="Client Portal Login" description="Secure access for Prime Trans clients." />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-card-modern p-12 md:p-16 rounded-[4rem] max-w-md w-full relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 rounded-full -mr-16 -mt-16 blur-2xl" />
          
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary mx-auto mb-6">
              <Lock size={32} />
            </div>
            <h1 className="text-4xl font-black tracking-tighter mb-4">Client Portal</h1>
            <p className="text-slate-500 font-medium">Secure access to your project milestones and assets.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Email Address</label>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="client@company.com"
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-brand-primary/10 focus:border-brand-primary transition-all outline-none font-medium"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Password</label>
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-brand-primary/10 focus:border-brand-primary transition-all outline-none font-medium"
              />
            </div>
            <MagneticButton>
              <button type="submit" className="w-full bg-slate-950 dark:bg-white text-white dark:text-slate-950 py-5 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl hover:scale-[1.02] active:scale-95 transition-all">
                Access Portal
              </button>
            </MagneticButton>
          </form>

          <p className="mt-8 text-center text-[10px] font-black uppercase tracking-widest text-slate-400">
            Need access? <a href="/contact" className="text-brand-primary hover:underline">Contact your manager</a>
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-32 pb-24 px-6">
      <SEO title="Client Dashboard" description="Manage your projects with Prime Trans." />
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[280px_1fr] gap-12">
        {/* Sidebar */}
        <aside className="space-y-8">
          <div className="glass-card-modern p-8 rounded-[3rem] space-y-2">
            {[
              { icon: LayoutDashboard, label: 'Dashboard', active: true },
              { icon: FileText, label: 'Documents' },
              { icon: MessageSquare, label: 'Messages' },
              { icon: Settings, label: 'Settings' },
            ].map((item, idx) => (
              <button 
                key={idx}
                className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all ${
                  item.active 
                    ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/20' 
                    : 'text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <item.icon size={18} />
                {item.label}
              </button>
            ))}
            <div className="pt-8 mt-8 border-t border-slate-100 dark:border-slate-800">
              <button 
                onClick={() => setIsLoggedIn(false)}
                className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] text-brand-accent hover:bg-brand-accent/10 transition-all"
              >
                <LogOut size={18} />
                Sign Out
              </button>
            </div>
          </div>

          <div className="glass-card-modern p-8 rounded-[3rem] bg-vibrant-gradient text-white">
            <h4 className="font-black uppercase tracking-widest text-[10px] mb-4 opacity-80">Your Manager</h4>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center font-black">AT</div>
              <div>
                <div className="font-black tracking-tight">Aris Thorne</div>
                <div className="text-[10px] font-black uppercase tracking-widest opacity-60">Senior Partner</div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="space-y-12">
          <header className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <h1 className="text-4xl font-black tracking-tighter mb-2">Welcome back, Global Logistics Corp.</h1>
              <p className="text-slate-500 font-medium">Here is the latest update on your AI Supply Chain project.</p>
            </div>
            <div className="flex gap-4">
              <div className="glass-card-modern px-6 py-4 rounded-2xl text-center">
                <div className="text-2xl font-black text-brand-primary">84%</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Completion</div>
              </div>
              <div className="glass-card-modern px-6 py-4 rounded-2xl text-center">
                <div className="text-2xl font-black text-brand-primary">12</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Days Left</div>
              </div>
            </div>
          </header>

          {/* Milestones */}
          <section className="glass-card-modern p-10 md:p-12 rounded-[4rem]">
            <h2 className="text-2xl font-black tracking-tighter mb-10">Project Milestones</h2>
            <div className="space-y-8 relative before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-px before:bg-slate-100 dark:before:bg-slate-800">
              {[
                { status: 'completed', title: 'Phase 1: Technical Audit', date: 'Jan 15, 2026', desc: 'Full system analysis and bottleneck identification completed.' },
                { status: 'completed', title: 'Phase 2: Model Training', date: 'Feb 20, 2026', desc: 'ML models trained on historical datasets with 95% accuracy.' },
                { status: 'active', title: 'Phase 3: Pilot Deployment', date: 'In Progress', desc: 'Currently deploying AI sorting in the primary regional hub.' },
                { status: 'pending', title: 'Phase 4: Global Rollout', date: 'Scheduled for April', desc: 'Full integration across all international hubs.' },
              ].map((m, idx) => (
                <div key={idx} className="relative pl-14">
                  <div className={`absolute left-0 top-1 w-10 h-10 rounded-full flex items-center justify-center z-10 ${
                    m.status === 'completed' ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20' :
                    m.status === 'active' ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/20 animate-pulse' :
                    'bg-slate-100 dark:bg-slate-800 text-slate-400'
                  }`}>
                    {m.status === 'completed' ? <CheckCircle2 size={20} /> :
                     m.status === 'active' ? <Clock size={20} /> :
                     <AlertCircle size={20} />}
                  </div>
                  <div>
                    <div className="flex items-center gap-4 mb-2">
                      <h4 className="text-xl font-black tracking-tight">{m.title}</h4>
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{m.date}</span>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 font-medium">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Recent Documents */}
          <section className="grid md:grid-cols-2 gap-8">
            <div className="glass-card-modern p-10 rounded-[3rem]">
              <h3 className="text-xl font-black tracking-tighter mb-8">Recent Documents</h3>
              <div className="space-y-4">
                {['Q1_Technical_Audit.pdf', 'ML_Model_Specs_v2.docx', 'Strategic_Roadmap_2026.pdf'].map((doc, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl group cursor-pointer hover:bg-brand-primary/5 transition-all">
                    <div className="flex items-center gap-4">
                      <FileText size={20} className="text-slate-400 group-hover:text-brand-primary" />
                      <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{doc}</span>
                    </div>
                    <button className="text-[10px] font-black uppercase tracking-widest text-brand-primary opacity-0 group-hover:opacity-100 transition-opacity">Download</button>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-card-modern p-10 rounded-[3rem]">
              <h3 className="text-xl font-black tracking-tighter mb-8">Latest Messages</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary font-black text-xs">AT</div>
                  <div className="flex-grow bg-slate-50 dark:bg-slate-900 p-4 rounded-2xl rounded-tl-none">
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-300">The pilot deployment is showing 15% better efficiency than expected. Great progress!</p>
                    <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 mt-2 block">2 hours ago</span>
                  </div>
                </div>
                <div className="flex gap-4 justify-end">
                  <div className="flex-grow bg-brand-primary/10 p-4 rounded-2xl rounded-tr-none text-right">
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Excellent. We are ready for the next phase review.</p>
                    <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 mt-2 block">1 hour ago</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-slate-950 dark:bg-white flex items-center justify-center text-white dark:text-slate-950 font-black text-xs">GL</div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
