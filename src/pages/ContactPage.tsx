import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Shield } from "lucide-react";
import { useState } from "react";

const RadarScan = () => (
  <motion.div
    className="absolute left-0 w-full h-[2px] bg-brand-primary/20 z-0 pointer-events-none"
    animate={{ top: ["0%", "100%"] }}
    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
  />
);

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Mouse Tracking for Parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  
  const moveX = useTransform(springX, [-500, 500], [20, -20]);
  const moveY = useTransform(springY, [-500, 500], [20, -20]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX - innerWidth / 2);
    mouseY.set(clientY - innerHeight / 2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate encryption/transmission
    await new Promise(r => setTimeout(r, 1500));
    alert("TRANSMISSION SUCCESSFUL. NODE LOGGED.");
    setIsSubmitting(false);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="pt-52 pb-24 bg-brand-bg px-12 min-h-screen overflow-hidden relative"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-30 mix-blend-luminosity"
        style={{ backgroundImage: 'url("/vts 9.webp")' }}
      />
      
      {/* Interactive Background Grid */}
      <motion.div 
        style={{ x: moveX, y: moveY }}
        className="absolute inset-0 opacity-[0.05] pointer-events-none z-0"
      >
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
      </motion.div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          
          {/* Left Side: Intel & Coordinates */}
          <div className="space-y-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-12 bg-brand-secondary" />
                <h4 className="font-mono text-[10px] uppercase tracking-[0.4em] text-brand-secondary block italic">Protocol 01: Establish Contact</h4>
              </div>
              <h1 className="text-6xl md:text-9xl font-light tracking-tighter text-white uppercase leading-[0.85] font-serif">
                Open <br /><span className="italic text-white/80">Comm-Sync.</span>
              </h1>
              <p className="text-white/70 text-lg leading-relaxed font-light max-w-md pt-4">
                Our secure line is monitored 24/7. Use the form to your right to begin the encrypted transmission for quotes, tactical advice, or inventory queries.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-12"
            >
              {[
                { icon: MapPin, title: "HQ Node", detail: "406 Liberty Road Suite 15, Natchez, MS" },
                { icon: Phone, title: "Voice Link", detail: "(601) 807-2502", sub: "Rex Mobile: (601) 807-3653" },
                { icon: Mail, title: "Data Stream", detail: "vaportrail33@yahoo.com" },
                { icon: Clock, title: "Ops Window", detail: "M-F: 0800-1700", sub: "Sat-Sun: Field Deployment" }
              ].map((item, i) => (
                <div key={i} className="group space-y-4">
                  <div className="flex items-center gap-3 text-brand-secondary group-hover:text-white transition-colors">
                    <item.icon size={18} strokeWidth={1} />
                    <span className="font-mono text-[9px] uppercase tracking-[0.3em] font-bold">{item.title}</span>
                  </div>
                  <div className="space-y-1">
                    <p className="text-white/80 text-sm leading-relaxed group-hover:text-white transition-colors">{item.detail}</p>
                    {item.sub && <p className="text-white/70 text-[10px] italic font-mono uppercase tracking-widest">{item.sub}</p>}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Static HUD Element */}
            <div className="hidden lg:block pt-12">
               <div className="flex items-center gap-6">
                 <div className="text-[10px] font-mono text-white/70 uppercase tracking-[0.3em]">Signature Verification Required</div>
                 <div className="h-[1px] flex-1 bg-white/20" />
                 <Shield size={16} className="text-white/50" />
               </div>
            </div>
          </div>

          {/* Right Side: The Terminal Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="bg-zinc-900/50 border border-white/5 p-12 lg:p-20 relative backdrop-blur-xl group"
          >
            <RadarScan />
            
            {/* Corner Bracket Decorations */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-brand-primary/40" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-brand-primary/40" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-brand-primary/40" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-brand-primary/40" />

            <form onSubmit={handleSubmit} className="relative z-10 space-y-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div className="space-y-2 group/input">
                  <label className="text-[9px] uppercase tracking-[0.4em] font-mono text-white/60 group-focus-within/input:text-brand-secondary transition-colors">Operator Identity</label>
                  <input
                    type="text"
                    required
                    placeholder="ENTER NAME"
                    className="w-full bg-transparent border-b border-white/40 py-4 px-1 text-sm font-mono tracking-[0.2em] text-white focus:outline-none focus:border-brand-primary transition-all placeholder:text-white/40"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2 group/input">
                  <label className="text-[9px] uppercase tracking-[0.4em] font-mono text-white/60 group-focus-within/input:text-brand-secondary transition-colors">Digital Node</label>
                  <input
                    type="email"
                    required
                    placeholder="EMAIL@SERVICE.COM"
                    className="w-full bg-transparent border-b border-white/40 py-4 px-1 text-sm font-mono tracking-[0.2em] text-white focus:outline-none focus:border-brand-primary transition-all placeholder:text-white/40"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2 group/input">
                <label className="text-[9px] uppercase tracking-[0.4em] font-mono text-white/60 group-focus-within/input:text-brand-secondary transition-colors">Transmission Subject</label>
                <input
                  type="text"
                  required
                  placeholder="SUBJECT_CLASSIFICATION"
                  className="w-full bg-transparent border-b border-white/40 py-4 px-1 text-sm font-mono tracking-[0.2em] text-white focus:outline-none focus:border-brand-primary transition-all placeholder:text-white/40"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>

              <div className="space-y-2 group/input">
                <label className="text-[9px] uppercase tracking-[0.4em] font-mono text-white/60 group-focus-within/input:text-brand-secondary transition-colors">Payload Data</label>
                <textarea
                  required
                  rows={4}
                  placeholder="BEGIN TRANSMISSION..."
                  className="w-full bg-transparent border-b border-white/40 py-4 px-1 text-sm font-mono tracking-[0.2em] text-white focus:outline-none focus:border-brand-primary transition-all placeholder:text-white/40 resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <div className="pt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-primary text-white py-6 text-[11px] uppercase tracking-[0.4em] font-bold hover:bg-white hover:text-brand-bg transition-all flex items-center justify-center gap-6 group/btn disabled:opacity-50"
                >
                  {isSubmitting ? "ENCRYPTING DATA..." : "AUTHORIZE TRANSMISSION"}
                  <div className="relative">
                    <Send size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    <motion.div 
                      className="absolute -inset-2 border border-current rounded-full opacity-0 group-hover/btn:opacity-100"
                      animate={{ scale: [1, 1.5], opacity: [1, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  </div>
                </button>
              </div>

              <div className="flex items-center justify-between text-[8px] font-mono text-white/70 uppercase tracking-[0.3em]">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-brand-secondary animate-pulse" />
                  <span>Signal: Strong</span>
                </div>
                <span>SSL_TRANSMISSION_SECURED</span>
                <MessageSquare size={10} />
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
