import { motion } from "motion/react";
import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-brand-bg overflow-hidden pt-32 md:pt-48 pb-24">
      {/* Background with subtle gradient instead of floating layers */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,#1a1c15_0%,#0d0d0d_100%)] opacity-40" />
      </div>

      <div className="relative z-20 max-w-[1400px] mx-auto px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-brand-secondary text-xs uppercase tracking-[0.4em] font-semibold block"
              >
                Disappear into the Woods // Est. 2008
              </motion.span>
              
              <h1 className="text-7xl md:text-9xl font-light leading-[0.85] text-white font-serif tracking-tight uppercase">
                Stop Getting <br/>
                <span className="italic text-white/50">Busted.</span>
              </h1>
            </div>

            <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-md font-light">
              Born from the woods in 2008, Vapor Trail Outdoors combines raw nature with cutting-edge tech to keep you undetected and ahead of the game.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-6 pt-4">
              <Link
                to="/shop"
                className="bg-brand-primary text-white px-10 py-4 text-[11px] uppercase tracking-[0.25em] font-bold hover:bg-[#4a241d] transition-all shadow-xl shadow-brand-primary/5"
              >
                Shop the Vapor Maker
              </Link>
              <Link
                to="/shop"
                className="text-white/80 hover:text-white text-[11px] uppercase tracking-[0.25em] font-semibold flex items-center gap-3 transition-colors border-b border-white/20 pb-1 hover:border-brand-secondary"
              >
                Browse All Gear
                <MoveRight size={14} />
              </Link>
            </div>
          </motion.div>

          <div className="hidden lg:flex flex-col justify-end items-end pb-12">
             <div className="absolute right-12 bottom-12 z-20 flex items-center gap-6 text-[10px] text-white/50 uppercase tracking-[0.3em] font-mono">
                <span className="text-brand-secondary">01 / 04</span>
                <div className="w-48 h-[1px] bg-white/20 relative overflow-hidden">
                  <motion.div 
                    initial={{ x: "-100%" }}
                    animate={{ x: "0%" }}
                    transition={{ duration: 2, delay: 0.5 }}
                    className="absolute top-0 left-0 w-1/4 h-full bg-brand-secondary shadow-[0_0_10px_rgba(59,69,43,0.5)]" 
                  />
                </div>
             </div>
          </div>
        </div>
    </section>
  );
}
