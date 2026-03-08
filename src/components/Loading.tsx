import { motion } from 'motion/react';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white dark:bg-slate-950">
      <div className="relative">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            borderRadius: ["20%", "50%", "20%"]
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Infinity
          }}
          className="w-16 h-16 bg-vibrant-gradient shadow-2xl shadow-brand-primary/20"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="absolute top-20 left-1/2 -translate-x-1/2 whitespace-nowrap"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
            Loading Experience
          </span>
        </motion.div>
      </div>
    </div>
  );
}
