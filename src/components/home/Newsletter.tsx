import { motion } from "motion/react";
import { Mail, Send } from "lucide-react";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for newsletter signup would go here
    alert("Thank you for subscribing to Vapor Trail Outdoors.");
    setEmail("");
  };

  return (
    <section className="py-32 bg-[#0a0a0a] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-secondary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h4 className="font-mono text-[10px] uppercase tracking-[0.4em] text-brand-secondary block italic">Stay Undetected</h4>
              <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-white uppercase leading-[0.9] font-serif italic">
                Join The <br />
                <span className="text-brand-secondary">Priority List.</span>
              </h2>
            </div>
            
            <p className="text-white/70 text-lg leading-relaxed font-light max-w-md">
              Sign up to hear from us about new products, specials, sales, and events. Get the tactical edge before the rest of the woods.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="relative group">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <div className="absolute left-6 top-1/2 -translate-y-1/2 text-white/50">
                    <Mail size={18} />
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="IDENTIFICATION@SERVICE.COM"
                    className="w-full bg-white/[0.03] border border-white/10 py-6 pl-16 pr-6 text-[11px] font-mono tracking-widest text-white focus:outline-none focus:border-brand-secondary focus:bg-white/[0.05] transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-brand-primary text-white px-10 py-6 text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-[#4a241d] transition-all flex items-center justify-center gap-3 group"
                >
                  Authorize 
                  <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-white/50" />
                </button>
              </div>
              
              <div className="mt-6 flex items-center gap-4 text-white/50">
                <div className="h-[1px] flex-1 bg-white/5" />
                <span className="text-[9px] uppercase tracking-widest font-mono">Transmission Secured</span>
                <div className="h-[1px] flex-1 bg-white/5" />
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
