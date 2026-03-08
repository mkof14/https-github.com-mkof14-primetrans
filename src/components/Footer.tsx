import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Linkedin, Facebook, Youtube, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';
import MagneticButton from './MagneticButton';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900 pt-32 pb-12 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section: Big CTA */}
        <div className="grid lg:grid-cols-2 gap-24 mb-32 items-end">
          <div>
            <h2 className="text-6xl md:text-8xl font-extralight tracking-tighter leading-[0.85] mb-12">
              Ready to <br />
              <span className="font-serif italic font-normal text-gradient">Elevate</span> <br />
              Your Venture?
            </h2>
            <MagneticButton>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-4 bg-slate-950 dark:bg-white text-white dark:text-slate-950 px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs shadow-2xl hover:scale-105 transition-all"
              >
                Start a Conversation <ArrowUpRight size={20} />
              </Link>
            </MagneticButton>
          </div>
          <div className="lg:text-right">
            <p className="text-2xl text-slate-400 dark:text-slate-500 font-light mb-8 max-w-md lg:ml-auto">
              We provide the operational backbone for cutting-edge industries worldwide.
            </p>
            <div className="flex lg:justify-end gap-6">
              {[
                { icon: Linkedin, href: 'https://linkedin.com/company/primetrans', label: 'LinkedIn' },
                { icon: Facebook, href: 'https://facebook.com/primetrans', label: 'Facebook' },
                { icon: Youtube, href: 'https://youtube.com/@primetrans', label: 'YouTube' },
              ].map((social, idx) => (
                <a 
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-400 hover:text-brand-primary hover:border-brand-primary transition-all group"
                  title={social.label}
                >
                  <social.icon size={20} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Middle Section: Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-32 pt-24 border-t border-slate-100 dark:border-slate-900">
          <div className="space-y-8">
            <Logo />
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium">
              A premier management company based in Charlotte, North Carolina. Navigating complex technical landscapes since 2008.
            </p>
            <div className="pt-4">
              <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-4">Subscribe to Insights</h5>
              <form 
                className="relative max-w-xs" 
                onSubmit={async (e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const email = (form.elements.namedItem('email') as HTMLInputElement).value;
                  try {
                    const res = await fetch('/api/newsletter', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({ email })
                    });
                    const data = await res.json();
                    if (res.ok) {
                      alert('Thank you for subscribing!');
                      form.reset();
                    } else {
                      alert(data.error || 'Something went wrong');
                    }
                  } catch (err) {
                    alert('Failed to connect to server');
                  }
                }}
              >
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="Email Address" 
                  className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-xs font-bold uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all"
                />
                <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 text-brand-primary hover:scale-110 transition-transform">
                  <ArrowUpRight size={18} />
                </button>
              </form>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-10">Navigation</h4>
            <ul className="space-y-5">
              {['Home', 'Services', 'Projects', 'Insights', 'About', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : item === 'Insights' ? '/blog' : `/${item.toLowerCase()}`} 
                    className="text-slate-600 dark:text-slate-300 hover:text-brand-primary font-bold transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-brand-primary transition-all" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-10">Industries</h4>
            <ul className="space-y-5">
              {[
                { name: 'IT & Software', id: 'it' },
                { name: 'AI & Machine Learning', id: 'ai' },
                { name: 'Agro-Tech', id: 'agro' },
                { name: 'Scientific Research', id: 'science' },
                { name: 'E-commerce', id: 'ecommerce' }
              ].map((industry) => (
                <li key={industry.id}>
                  <Link 
                    to={`/projects?cat=${industry.id}`} 
                    className="text-slate-600 dark:text-slate-300 hover:text-brand-primary font-bold transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-brand-primary transition-all" />
                    {industry.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-10">Contact</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <MapPin size={20} className="text-brand-primary shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-slate-600 dark:text-slate-300 font-medium">Charlotte, NC, USA</span>
              </li>
              <li className="flex items-center gap-4 group">
                <Phone size={20} className="text-brand-primary shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-slate-600 dark:text-slate-300 font-medium">(704) 776-2775</span>
              </li>
              <li className="flex items-center gap-4 group">
                <Mail size={20} className="text-brand-primary shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-slate-600 dark:text-slate-300 font-medium">contact@primetranco.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="pt-12 border-t border-slate-100 dark:border-slate-900 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
          <p>© {currentYear} Prime Trans Management Co. All rights reserved.</p>
          <div className="flex gap-12">
            <Link to="/privacy" className="hover:text-brand-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-brand-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
