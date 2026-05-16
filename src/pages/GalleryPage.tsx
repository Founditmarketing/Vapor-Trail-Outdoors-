import { motion } from "motion/react";

const galleryImages = [
  { url: "/vts 5.webp", title: "Dawn Tracking", size: "lg" },
  { url: "/vts 6.webp", title: "Forest Operations", size: "sm" },
  { url: "/vts 7.webp", title: "Mist Protocol", size: "sm" },
  { url: "/vts 8.webp", title: "Night Visibility", size: "sm" },
  { url: "/vts 10.webp", title: "Field Setup", size: "lg" },
  { url: "/vts 9.webp", title: "Optical Precision", size: "sm" },
  { url: "/vts 2.webp", title: "Silent Watch", size: "sm" },
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

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[300px] gap-4 grid-flow-row-dense">
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
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000"
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
