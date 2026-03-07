import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface LogoProps {
  className?: string;
  showText?: boolean;
  isFooter?: boolean;
}

export default function Logo({ className, showText = true, isFooter = false }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-4 group logo-glow", className)}>
      <div className="relative w-10 h-10 flex items-center justify-center">
        {/* Background geometric shapes */}
        <motion.div 
          initial={false}
          animate={{ rotate: 45 }}
          whileHover={{ rotate: 90, scale: 1.2 }}
          className="absolute inset-0 bg-vibrant-gradient rounded-xl opacity-10 transition-transform duration-700" 
        />
        <motion.div 
          initial={false}
          animate={{ rotate: 45 }}
          whileHover={{ rotate: 0, scale: 1.1 }}
          className="absolute inset-1.5 bg-vibrant-gradient rounded-lg shadow-lg shadow-brand-primary/20 transition-all duration-500" 
        />
        
        {/* The "P" letter with a custom look */}
        <motion.span 
          whileHover={{ scale: 1.2, rotate: -5 }}
          className="relative z-10 font-serif italic font-bold text-white text-xl select-none"
        >
          P
        </motion.span>
        
        {/* Decorative elements */}
        <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-brand-accent rounded-full border-2 border-white dark:border-slate-950 shadow-sm" />
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className={cn(
            "font-sans font-light tracking-[0.2em] leading-none",
            "text-lg",
            "text-slate-900 dark:text-white"
          )}>
            PRIME<span className="font-bold">TRANS</span>
          </span>
          <span className="text-[9px] font-mono font-bold uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500 leading-none mt-1.5">
            Management Co.
          </span>
        </div>
      )}
    </div>
  );
}
