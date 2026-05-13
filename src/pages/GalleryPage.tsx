import { motion } from "motion/react";

const galleryImages = [
  { url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1000&auto=format&fit=crop", title: "Dawn Tracking", size: "lg" },
  { url: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1000&auto=format&fit=crop", title: "Forest Operations", size: "sm" },
  { url: "https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=1000&auto=format&fit=crop", title: "Mist Protocol", size: "sm" },
  { url: "https://images.unsplash.com/photo-1533633396064-9dfc1fb20d7d?q=80&w=1000&auto=format&fit=crop", title: "Night Visibility", size: "sm" },
  { url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=1000&auto=format&fit=crop", title: "Field Setup", size: "lg" },
  { url: "https://images.unsplash.com/photo-1563297777-06aaa39a489c?q=80&w=1000&auto=format&fit=crop", title: "Optical Precision", size: "sm" },
  { url: "https://images.unsplash.com/photo-1605206963493-2771d9fd53ec?q=80&w=1000&auto=format&fit=crop", title: "Silent Watch", size: "sm" },
];

export default function GalleryPage() {
  return (
    <div className="pt-52 pb-24 bg-brand-bg px-12 min-h-screen">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-24 space-y-4">
          <h4 className="font-mono text-[10px] uppercase tracking-[0.4em] text-brand-accent block italic text-center">Visual Archives</h4>
          <h1 className="text-6xl md:text-9xl font-light tracking-tighter text-white uppercase leading-none font-serif text-center underline decoration-white/5 underline-offset-[20px]">
            In The Field.
          </h1>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[300px] gap-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 1 }}
              className={`relative overflow-hidden group cursor-crosshair ${
                img.size === 'lg' ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <img 
                src={img.url} 
                alt={img.title}
                className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-[10px] font-mono uppercase tracking-widest text-brand-accent italic mb-1 block">Log: {img.title}</span>
                <p className="text-white text-xs uppercase tracking-[0.2em] font-bold">Field Capture</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
