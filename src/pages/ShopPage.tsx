import { motion } from "motion/react";
import { products } from "../data/products";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

export default function ShopPage() {
  return (
    <div className="pt-52 pb-24 bg-brand-bg px-12 min-h-screen">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-24 space-y-4">
          <h4 className="font-mono text-[10px] uppercase tracking-[0.4em] text-brand-accent block italic">Best Sellers</h4>
          <h1 className="text-6xl md:text-9xl font-light tracking-tighter text-white uppercase leading-none font-serif">
            The Armory.
          </h1>
          <div className="h-[1px] w-32 bg-brand-accent/30 mt-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group"
            >
              <Link to={`/shop/${product.id}`} className="block space-y-8">
                <div className="relative aspect-[4/5] bg-[#0d0d0d] overflow-hidden border border-white/5 p-1 group-hover:border-brand-accent/20 transition-all duration-700">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/80 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-all" />
                  
                  <button className="absolute bottom-8 right-8 bg-brand-accent text-brand-bg p-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:bg-white shadow-2xl">
                    <ShoppingCart size={20} strokeWidth={1.5} />
                  </button>
                </div>

                <div className="flex justify-between items-start gap-4">
                  <div className="space-y-4 flex-1">
                    <div className="flex items-center gap-3">
                      <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-brand-accent py-1 px-2 border border-brand-accent/20">{product.category}</span>
                      <span className="text-[10px] text-white/50 uppercase tracking-widest font-mono italic">Ref: {product.id.slice(0,6).toUpperCase()}</span>
                    </div>
                    <h3 className="text-2xl font-light text-white uppercase tracking-tight font-serif italic group-hover:text-brand-accent transition-colors">{product.name}</h3>
                    <p className="text-white/60 text-sm leading-relaxed font-light line-clamp-2">{product.description}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-light text-brand-accent font-serif italic">{product.price}</span>
                    <p className="text-[9px] text-white/50 uppercase tracking-widest font-mono mt-1">Acquisition Cost</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
