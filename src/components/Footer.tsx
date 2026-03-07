import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Linkedin, Github, Facebook, Youtube } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/">
              <Logo isFooter />
            </Link>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              A premier management company based in Charlotte, North Carolina. We specialize in navigating complex technical landscapes across diverse industries.
            </p>
            <div className="flex flex-wrap gap-3">
              <a 
                href="https://linkedin.com/company/primetrans" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700 hover:text-brand-primary transition-colors" 
                title="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://facebook.com/primetrans" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700 hover:text-brand-primary transition-colors" 
                title="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://youtube.com/@primetrans" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700 hover:text-brand-primary transition-colors" 
                title="YouTube"
              >
                <Youtube size={18} />
              </a>
              <a 
                href="https://x.com/primetrans" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700 hover:text-brand-primary transition-colors" 
                title="X"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
              </a>
              <a 
                href="https://github.com/primetrans" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700 hover:text-brand-primary transition-colors" 
                title="GitHub"
              >
                <Github size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
              <li><Link to="/" className="hover:text-brand-primary transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-brand-primary transition-colors">Our Services</Link></li>
              <li><Link to="/projects" className="hover:text-brand-primary transition-colors">Projects & Industries</Link></li>
              <li><Link to="/about" className="hover:text-brand-primary transition-colors">About Company</Link></li>
              <li><Link to="/contact" className="hover:text-brand-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Industries</h4>
            <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
              <li><Link to="/projects?cat=it" className="hover:text-brand-primary transition-colors">IT & Software</Link></li>
              <li><Link to="/projects?cat=ai" className="hover:text-brand-primary transition-colors">AI & Machine Learning</Link></li>
              <li><Link to="/projects?cat=agro" className="hover:text-brand-primary transition-colors">Agro-Tech</Link></li>
              <li><Link to="/projects?cat=science" className="hover:text-brand-primary transition-colors">Scientific Research</Link></li>
              <li><Link to="/projects?cat=ecommerce" className="hover:text-brand-primary transition-colors">E-commerce</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-primary shrink-0" />
                <span>Charlotte, NC, USA</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-primary shrink-0" />
                <span>(704) 776-2775</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-primary shrink-0" />
                <span>contact@primetranco.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400 uppercase tracking-widest">
          <p>© {currentYear} Prime Trans Management. All rights reserved.</p>
          <div className="flex gap-8">
            <Link to="/privacy" className="hover:text-brand-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-brand-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
