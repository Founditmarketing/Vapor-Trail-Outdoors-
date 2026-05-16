import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import { motion } from "motion/react";
import { ChevronLeft, Target, ShieldCheck, Zap, Globe } from "lucide-react";

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="h-screen flex items-center justify-center text-white bg-brand-bg">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-serif">Unit Not Found</h1>
          <Link to="/shop" className="text-brand-accent uppercase tracking-widest text-xs">Back to Armory</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-52 pb-24 bg-brand-bg px-12 min-h-screen">
      <div className="max-w-[1400px] mx-auto">
        <Link 
          to="/shop" 
          className="inline-flex items-center gap-2 text-white/60 hover:text-white text-[10px] uppercase tracking-widest font-bold mb-12 transition-colors group"
        >
          <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Return to Armory
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <div className="aspect-square bg-[#0d0d0d] border border-white/10 p-2 shadow-2xl relative overflow-hidden group">
               <img 
                 src={product.image} 
                 className="w-full h-full object-cover opacity-100 group-hover:scale-105 transition-all duration-1000"
                 referrerPolicy="no-referrer"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/40 to-transparent" />
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              {[product.image, ...(product.additionalImages || [])].slice(0, 3).map((imgSrc, i) => (
                <div key={i} className="aspect-square bg-white/10 border border-white/10 opacity-80 hover:opacity-100 transition-opacity cursor-pointer overflow-hidden group">
                   <img src={imgSrc} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000" alt="View" />
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                 <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-brand-accent py-1 px-3 border border-brand-accent/20">Active Unit</span>
                 <span className="text-[10px] text-white/50 uppercase tracking-widest font-mono">Series Log: {product.id.toUpperCase()}</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-light tracking-tighter text-white uppercase font-serif italic">
                {product.name}
              </h1>
            </div>

            <div className="flex items-baseline gap-6">
              <span className="text-6xl font-light text-brand-accent font-serif italic">{product.price}</span>
              <span className="text-white/50 text-sm font-mono tracking-[0.3em] uppercase">In stock // Local Depot</span>
            </div>

            <p className="text-white/70 text-lg leading-relaxed font-light whitespace-pre-wrap">
              {product.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 py-10 border-y border-white/10">
               <div className="flex items-center gap-4">
                  <ShieldCheck size={18} className="text-brand-accent" />
                  <div>
                    <p className="text-white text-xs uppercase tracking-widest font-bold">Field Tested</p>
                    <p className="text-white/50 text-[10px] uppercase tracking-widest">Mississippi Delta Spec</p>
                  </div>
               </div>
               <div className="flex items-center gap-4">
                  <Zap size={18} className="text-brand-accent" />
                  <div>
                    <p className="text-white text-xs uppercase tracking-widest font-bold">Deployable</p>
                    <p className="text-white/50 text-[10px] uppercase tracking-widest">Rapid Field Setup</p>
                  </div>
               </div>
               <div className="flex items-center gap-4">
                  <Globe size={18} className="text-brand-accent" />
                  <div>
                    <p className="text-white text-xs uppercase tracking-widest font-bold">Free Shipping</p>
                    <p className="text-white/50 text-[10px] uppercase tracking-widest">Domestic Logistics</p>
                  </div>
               </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 pt-4">
               <button className="bg-brand-accent text-brand-bg px-14 py-6 text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-[#b39373] transition-all flex items-center justify-center gap-4 group flex-1">
                 Initial Acquisition
                 <Target size={16} className="group-hover:scale-110 transition-transform" />
               </button>
               <button className="border border-white/20 text-white/80 hover:text-white px-10 py-6 text-[11px] uppercase tracking-[0.3em] font-bold transition-all hover:bg-white/5">
                 Compare
               </button>
            </div>
            
            <div className="space-y-4 pt-10">
               <p className="text-[10px] text-white/50 uppercase tracking-[0.3em] font-mono leading-relaxed">
                 * Every unit is inspected by R. Holmes Jr. personally before dispatch to ensure terminal performance in high-stress field environments.
               </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
