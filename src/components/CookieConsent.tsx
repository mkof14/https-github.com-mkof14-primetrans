import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, X } from 'lucide-react';
import MagneticButton from './MagneticButton';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptConsent = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-8 left-8 right-8 md:left-auto md:right-8 md:max-w-md z-[60]"
        >
          <div className="glass-card-modern p-8 rounded-[2.5rem] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full -mr-16 -mt-16" />
            
            <div className="flex items-start gap-6 relative z-10">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary shrink-0">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="text-lg font-black tracking-tighter mb-2">Privacy & Cookies</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-6">
                  We use cookies to enhance your experience and analyze our traffic. By continuing to visit this site you agree to our use of cookies.
                </p>
                <div className="flex items-center gap-4">
                  <MagneticButton>
                    <button
                      onClick={acceptConsent}
                      className="bg-slate-950 dark:bg-white text-white dark:text-slate-950 px-8 py-3 rounded-xl font-black uppercase tracking-widest text-[10px] shadow-xl hover:scale-105 transition-all"
                    >
                      Accept All
                    </button>
                  </MagneticButton>
                  <button
                    onClick={() => setIsVisible(false)}
                    className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-brand-primary transition-colors"
                  >
                    Decline
                  </button>
                </div>
              </div>
              <button 
                onClick={() => setIsVisible(false)}
                className="absolute top-0 right-0 p-2 text-slate-300 hover:text-brand-primary transition-colors"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
