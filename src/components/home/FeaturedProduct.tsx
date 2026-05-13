import { motion } from "motion/react";
import { products } from "../../data/products";
import { ShoppingBag, Star, Zap } from "lucide-react";

export default function FeaturedProduct() {
  const product = products[0]; // The Vapor Maker

  return (
    <section className="py-24 bg-[#0d0d0d] overflow-hidden px-12">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="relative order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative z-10 border border-white/5 bg-brand-bg p-2 transition-all duration-1000 shadow-2xl"
          >
            <div className="aspect-square relative overflow-hidden group">
               <img 
                 src={product.image} 
                 alt={product.name}
                 className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-all duration-1000 ease-out"
                 referrerPolicy="no-referrer"
               />
               <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_40%,rgba(0,0,0,0.8)_100%)] pointer-events-none" />
            </div>
            
            {/* Tag Overlay */}
            <div className="absolute top-10 left-10 bg-brand-primary text-white px-5 py-2">
               <span className="font-mono text-[10px] tracking-[0.2em] font-bold uppercase underline underline-offset-4 decoration-white/30">Field Certified</span>
            </div>
          </motion.div>

          {/* Slogan pill from original code adapted */}
          <div className="absolute -bottom-12 -right-12 bg-white/5 border border-white/10 backdrop-blur-3xl p-12 rounded-full w-56 h-56 flex flex-col items-center justify-center text-center shadow-2xl rotate-6 hidden lg:flex">
             <span className="text-[10px] font-mono tracking-widest uppercase mb-2 text-brand-secondary">Precision</span>
             <span className="text-2xl font-serif italic text-white/80 leading-tight">Stealth <br/>Series</span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="order-1 lg:order-2 space-y-10"
        >
          <div className="space-y-4">
            <div className="flex justify-between items-center max-w-sm">
               <span className="text-[10px] text-white/50 uppercase tracking-widest font-mono">Reference: VTS-2022-XM</span>
               <div className="flex items-center space-x-1 text-brand-secondary">
                 {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="currentColor" />)}
               </div>
            </div>

            <h4 className="text-[10px] uppercase tracking-[0.4em] text-brand-secondary font-bold">Flagship Equipment</h4>
            <h2 className="text-5xl md:text-8xl font-light tracking-tighter text-white uppercase leading-none font-serif">
              Vapor <br /><span className="italic text-white/50">Maker™</span>
            </h2>
          </div>

          <div className="flex items-baseline space-x-6">
            <span className="text-5xl font-light text-brand-primary font-serif italic">{product.price}</span>
            <span className="text-white/40 text-sm font-mono tracking-widest line-through">$49.99</span>
          </div>

          <p className="text-white/70 text-lg leading-relaxed max-w-xl font-light">
            {product.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/5">
            {[
              "Complete body coverage",
              "Rex Holmes Jr. Signature",
              "Advanced dispersal tech",
              "Total treat in 15s or less"
            ].map((feature, i) => (
              <div key={i} className="flex items-center space-x-3 text-white/60 text-xs uppercase tracking-widest font-bold">
                <div className="w-1 h-1 bg-brand-secondary rounded-full" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <div className="pt-8">
            <button className="bg-brand-primary text-white px-14 py-5 text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-[#4a241d] transition-all flex items-center gap-4 group">
              Acquire Equipment
              <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                 <ShoppingBag size={16} />
              </motion.div>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
