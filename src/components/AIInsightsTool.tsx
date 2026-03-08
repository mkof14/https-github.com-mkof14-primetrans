import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Send, RefreshCw, BrainCircuit, Lightbulb } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import MagneticButton from './MagneticButton';

export default function AIInsightsTool() {
  const [input, setInput] = useState('');
  const [insight, setInsight] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const generateInsight = async () => {
    if (!input.trim()) return;
    
    setIsLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `As a strategic management consultant at Prime Trans, provide a brief (2-3 sentences) high-level strategic insight or recommendation for a business in the following industry or context: ${input}. Focus on technical excellence and operational efficiency.`,
        config: {
          systemInstruction: "You are a world-class strategic management consultant specializing in complex technical projects. Your tone is professional, visionary, and concise.",
        }
      });
      
      setInsight(response.text || "Unable to generate insight at this time.");
    } catch (error) {
      console.error("Error generating insight:", error);
      setInsight("An error occurred while connecting to the strategic engine.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="glass-card-modern p-10 md:p-16 rounded-[4rem] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 rounded-full -mr-32 -mt-32 blur-3xl" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary">
            <BrainCircuit size={24} />
          </div>
          <div>
            <h3 className="text-2xl font-black tracking-tighter">Strategic AI Engine</h3>
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Powered by Gemini</p>
          </div>
        </div>

        <p className="text-slate-500 dark:text-slate-400 mb-10 font-medium leading-relaxed">
          Enter your industry or a specific technical challenge to receive a high-level strategic perspective from our AI-driven management engine.
        </p>

        <div className="space-y-6">
          <div className="relative">
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="e.g., Autonomous Logistics in Southeast Asia"
              className="w-full bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 rounded-2xl px-8 py-5 focus:ring-4 focus:ring-brand-primary/10 focus:border-brand-primary transition-all outline-none font-medium text-lg placeholder:text-slate-300"
              onKeyDown={(e) => e.key === 'Enter' && generateInsight()}
            />
          </div>

          <MagneticButton>
            <button 
              onClick={generateInsight}
              disabled={isLoading || !input.trim()}
              className="w-full bg-slate-950 dark:bg-white text-white dark:text-slate-950 py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-xs shadow-2xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>Analyzing... <RefreshCw size={18} className="animate-spin" /></>
              ) : (
                <>Generate Strategic Insight <Sparkles size={18} /></>
              )}
            </button>
          </MagneticButton>
        </div>

        <AnimatePresence mode="wait">
          {insight && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-12 p-8 bg-brand-primary/5 rounded-3xl border border-brand-primary/10 relative group"
            >
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-brand-primary rounded-xl flex items-center justify-center text-white shadow-lg">
                <Lightbulb size={16} />
              </div>
              <p className="text-slate-700 dark:text-slate-200 font-medium leading-relaxed italic">
                "{insight}"
              </p>
              <button 
                onClick={() => setInsight(null)}
                className="mt-6 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-brand-primary transition-colors"
              >
                Clear Result
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
