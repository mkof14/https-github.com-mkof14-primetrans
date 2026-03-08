import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { cn } from '../lib/utils';
import Logo from './Logo';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'Insights', path: '/blog' },
  { name: 'Portal', path: '/portal' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled 
          ? 'py-4' 
          : 'py-8'
      )}
    >
      <div className={cn(
        "max-w-5xl mx-auto px-6 transition-all duration-500",
        scrolled ? "scale-95" : "scale-100"
      )}>
        <div className={cn(
          "flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 border",
          scrolled 
            ? "bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border-slate-200/50 dark:border-slate-800/50 shadow-lg" 
            : "bg-transparent border-transparent"
        )}>
          <Link to="/" className="hover:scale-105 transition-transform">
            <Logo />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'text-[10px] font-mono font-bold uppercase tracking-[0.2em] transition-all hover:text-brand-primary relative py-1',
                  location.pathname === link.path ? 'text-brand-primary' : 'text-slate-500 dark:text-slate-400'
                )}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-primary rounded-full"
                  />
                )}
              </Link>
            ))}
            
            <div className="w-px h-4 bg-slate-200 dark:bg-slate-800 mx-2" />

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            <Link
              to="/contact"
              className="bg-slate-900 dark:bg-slate-50 text-white dark:text-slate-900 px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:opacity-90 transition-all hover:shadow-lg active:scale-95"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleTheme} className="p-2 text-slate-500">
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-slate-900 dark:text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="md:hidden absolute top-full left-6 right-6 mt-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl rounded-[2rem] border border-slate-200 dark:border-slate-800 p-8 shadow-2xl flex flex-col gap-6 z-50"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'text-2xl font-black tracking-tighter transition-colors',
                  location.pathname === link.path ? 'text-brand-primary' : 'text-slate-600 dark:text-slate-400'
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="bg-brand-primary text-white px-5 py-4 rounded-2xl text-center font-black uppercase tracking-widest text-sm shadow-xl"
            >
              Start a Project
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
