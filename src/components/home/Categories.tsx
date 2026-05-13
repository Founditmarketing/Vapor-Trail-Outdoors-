import { motion } from "motion/react";
import { categories } from "../../data/products";
import { Link } from "react-router-dom";

export default function Categories() {
  return (
    <section className="py-24 bg-brand-bg border-y border-white/10">
      <div className="max-w-[1400px] mx-auto">
        <div className="px-12 py-12 flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-brand-secondary mb-3 block">Equipment Series</span>
            <h2 className="text-4xl md:text-6xl font-light tracking-tighter text-white font-serif uppercase">
              Best Sellers.
            </h2>
          </div>
          <Link to="/shop" className="text-white/70 hover:text-white uppercase tracking-[0.2em] text-[10px] font-bold border-b border-brand-primary/30 pb-2 transition-all">
            View full Armory
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border-t border-white/10">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="group relative h-[500px] bg-brand-bg overflow-hidden cursor-pointer flex flex-col justify-between p-10 hover:bg-[#111] transition-colors duration-500"
            >
              <div className="flex justify-between items-start z-20">
                <span className="text-[10px] text-white/60 uppercase tracking-widest font-mono">Series: 00{i + 1}</span>
                <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center group-hover:border-brand-secondary transition-colors duration-500">
                  <div className="w-2 h-2 bg-brand-secondary rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
                </div>
              </div>

              <div className="absolute inset-0 z-0">
                <img 
                  src={cat.image} 
                  alt={cat.name}
                  className="w-full h-full object-cover transition-all duration-1000 grayscale opacity-20 group-hover:opacity-40 group-hover:scale-110 group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent" />
              </div>
              
              <div className="relative z-20 space-y-4">
                <h3 className="text-3xl font-light text-white uppercase tracking-tight font-serif italic">
                  {cat.name}
                </h3>
                <div className="h-[1px] w-12 bg-brand-secondary/50 group-hover:w-full transition-all duration-700" />
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/50 group-hover:text-white/80 transition-colors">
                  Explore Equipment
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
