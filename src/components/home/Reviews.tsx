import { motion } from "motion/react";
import { Quote } from "lucide-react";

export default function Reviews() {
  const reviews = [
    {
      name: "Cade Jamison",
      role: "Professional Tracker",
      text: "The Vapor Maker changed my morning routine. I can cover my gear and body in seconds. Haven't been busted since.",
      stars: 5
    },
    {
      name: "Sarah Miller",
      role: "Field Photographer",
      text: "Vapor Trail's LED headlights are the only ones that hold up in the MS humidity. Pure quality.",
      stars: 5
    },
    {
      name: "Marcus Thorne",
      role: "Backcountry Hunter",
      text: "The optics on their scopes are comparable to glass twice the price. Exceptional clarity.",
      stars: 5
    }
  ];

  return (
    <section className="py-24 bg-brand-bg px-12 border-b border-white/5">
      <div className="max-w-[1400px] mx-auto">
         <div className="mb-20 space-y-3">
            <span className="text-[10px] text-brand-secondary uppercase tracking-[0.4em] font-bold block italic font-serif">Field Reports</span>
            <h2 className="text-4xl md:text-6xl font-light tracking-tighter text-white uppercase leading-none font-serif">
              Trusted <br />In Conflict.
            </h2>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 border border-white/10 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {reviews.map((rev, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                whileHover={{ y: -12, backgroundColor: "rgba(255, 255, 255, 0.03)" }}
                transition={{ 
                  opacity: { delay: i * 0.2, duration: 1 },
                  y: { duration: 0.4, ease: "easeOut" },
                  backgroundColor: { duration: 0.4 }
                }}
                viewport={{ once: true }}
                className="p-10 space-y-8 transition-all duration-500 group flex flex-col justify-between relative overflow-hidden"
              >
                {/* Tactical HUD Highlight lines */}
                <div className="absolute top-0 left-0 w-0 h-[1px] bg-brand-secondary group-hover:w-full transition-all duration-700" />
                <div className="absolute top-0 left-0 w-[1px] h-0 bg-brand-secondary group-hover:h-full transition-all duration-700" />
                
                <div className="space-y-6 relative z-10">
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 rounded-full border border-brand-secondary/20 flex items-center justify-center italic text-brand-secondary font-serif text-xl group-hover:bg-brand-secondary group-hover:text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                      {rev.name.charAt(0)}
                    </div>
                    <div className="text-[8px] font-mono text-white/20 uppercase tracking-[0.3em] group-hover:text-brand-secondary transition-colors">
                      Verified Ops <br /> Response: OK
                    </div>
                  </div>
                  <p className="text-white/60 group-hover:text-white/90 text-base md:text-lg italic font-serif leading-relaxed line-clamp-4 transition-colors">
                    "{rev.text}"
                  </p>
                </div>

                <div className="pt-6 border-t border-white/5 relative z-10">
                   <div className="flex justify-between items-end">
                     <div>
                       <h5 className="text-white font-semibold uppercase tracking-[0.1em] text-xs">{rev.name}</h5>
                       <span className="text-brand-secondary text-[10px] font-mono uppercase tracking-[0.2em] mt-1 block">{rev.role}</span>
                     </div>
                     <Quote size={20} className="text-white/5 group-hover:text-brand-secondary/20 group-hover:scale-125 transition-all duration-500" />
                   </div>
                </div>

                {/* Subtle depth gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </motion.div>
            ))}
         </div>
      </div>
    </section>
  );
}
