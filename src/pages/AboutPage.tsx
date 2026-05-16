import { motion } from "motion/react";

export default function AboutPage() {
  return (
    <div className="pt-52 pb-24 bg-brand-bg px-12 min-h-screen">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="space-y-12">
          <div className="space-y-6">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.4em] text-brand-accent block italic text-center lg:text-left">Our Story</h4>
            <h1 className="text-6xl md:text-9xl font-light tracking-tighter text-white uppercase leading-[0.85] font-serif text-center lg:text-left">
              Real Gear <br /><span className="italic text-white/50">For Real Woodsmen.</span>
            </h1>
          </div>

          <div className="space-y-8 text-white/70 text-lg leading-relaxed font-light border-l border-brand-accent/30 pl-10">
            <p>
              We didn’t start in a boardroom; we started in a tree stand. In 2008, we got tired of watching deer blow and run because of our scent. As lifelong woodsmen, we knew the solution was already in the forest.
            </p>
            <p>
              We developed a scent eliminator and attractant made simply from gathered plants, giving you a natural edge that synthetic sprays can’t touch. Our founder, <span className="text-white font-medium italic font-serif text-xl">Rex Holmes Jr.</span>, spent years engineering the <span className="text-brand-accent font-semibold italic">Vapor Maker™</span>—a signature system designed to provide total coverage in seconds.
            </p>
            <p>
              We build what we need because we’re out there with you—on the water and in the brush. Whether it’s our dispersal systems or our exclusive LCD headlights (the only ones in the world that show your battery life in real-time), we utilize the newest technology to ensure you never run out of light or cover.
            </p>
            <p>
              In partnership with <span className="text-white">Bresser Scientific Explorer</span>, we manufacture professional-grade gear for hunters, fishermen, and outdoorsmen who demand the best at an honest price.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-12 pt-10 border-t border-white/5">
             <div>
                <span className="text-5xl font-light text-white font-serif italic tracking-tighter">2008</span>
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/50 mt-3 font-mono font-bold">Foundation Marker</p>
             </div>
             <div>
                <span className="text-5xl font-light text-brand-accent font-serif italic tracking-tighter">Gold</span>
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/50 mt-3 font-mono font-bold">Standard Grade</p>
             </div>
          </div>
        </div>

        <div className="relative">
           <motion.div
             initial={{ opacity: 0, scale: 1.05 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{ duration: 2 }}
             viewport={{ once: true }}
             className="aspect-[3/4] overflow-hidden border border-white/5 p-1 group"
           >
              <img 
                src="/vts 2.webp"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                alt="Vapor Trail Outdoors Gear"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent" />
           </motion.div>
           
           <div className="absolute -bottom-12 -left-12 bg-white/[0.03] border border-white/10 p-10 max-w-sm backdrop-blur-3xl shadow-2xl">
              <p className="text-base text-zinc-100 italic font-serif leading-relaxed">
                "We don't build gear for the shelf. We build it for the 4:00 AM trek through the mist, where every second and every sound counts."
              </p>
              <h5 className="mt-6 text-[10px] uppercase tracking-[0.4em] text-brand-accent font-bold">— R. Holmes Jr.</h5>
           </div>
        </div>
      </div>
    </div>
  );
}
