import { Facebook, Youtube, Instagram, Mail, Phone, MapPin, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="bg-brand-bg text-white pt-32 pb-16 px-12 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-24">
        <div className="space-y-8">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-brand-primary rounded-sm flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-brand-bg rotate-45"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-[0.2em] uppercase leading-none">
                Vapor Trail
              </span>
              <span className="text-[10px] tracking-[0.4em] font-mono text-white/50 uppercase mt-1">
                Field Logistics
              </span>
            </div>
          </Link>
          <p className="text-white/60 text-sm leading-relaxed max-w-xs font-light">
            Providing technical advantage through superior scent dispersal and optical accuracy. 
            Mississippi born. Field certified.
          </p>
          <div className="flex space-x-6 text-white/50">
            <a href="#" className="hover:text-brand-secondary transition-colors"><Facebook size={18} strokeWidth={1} /></a>
            <a href="#" className="hover:text-brand-secondary transition-colors"><Youtube size={18} strokeWidth={1} /></a>
            <a href="#" className="hover:text-brand-secondary transition-colors"><Instagram size={18} strokeWidth={1} /></a>
          </div>
        </div>

        <div>
          <h4 className="font-mono text-[10px] uppercase tracking-[0.4em] text-brand-secondary mb-10">Digital Nodes</h4>
          <ul className="space-y-5 text-[11px] uppercase tracking-widest font-semibold text-white/70">
            <li><Link to="/shop" className="hover:text-white transition-colors">The Armory</Link></li>
            <li><Link to="/gallery" className="hover:text-white transition-colors">Visual Archives</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Direct Channel</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">Operational Ethos</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-[10px] uppercase tracking-[0.4em] text-brand-secondary mb-10">Coordinates</h4>
          <ul className="space-y-6 text-sm text-white/70 font-light">
            <li className="flex items-start space-x-4">
              <MapPin size={16} className="text-brand-primary shrink-0 mt-0.5" strokeWidth={1.5} />
              <span>406 Liberty Road Suite 15,<br />Natchez, MS 39120</span>
            </li>
            <li className="flex items-center space-x-4">
              <Phone size={16} className="text-brand-primary" strokeWidth={1.5} />
              <div className="flex flex-col">
                <span>(601) 807-2502</span>
                <span className="text-[10px] opacity-50 italic">Rex (Mobile): (601) 807-3653</span>
              </div>
            </li>
            <li className="flex items-center space-x-4">
              <Mail size={16} className="text-brand-primary" strokeWidth={1.5} />
              <span className="italic font-serif">vaportrail33@yahoo.com</span>
            </li>
          </ul>
        </div>

        <div>
           <h4 className="font-mono text-[10px] uppercase tracking-[0.4em] text-brand-secondary mb-10">Deployment Hours</h4>
           <div className="space-y-4 text-[11px] uppercase tracking-widest text-white/70 font-semibold">
              <div className="flex justify-between border-b border-white/5 pb-2">
                 <span>Mon – Fri</span>
                 <span className="text-white">8:00 AM – 5:00 PM</span>
              </div>
              <div className="flex justify-between text-[10px] text-brand-secondary/50 italic">
                 <span>Recess / Lunch</span>
                 <span>12:30 PM – 1:30 PM</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2 pt-2">
                 <span>Sat – Sun</span>
                 <span className="text-brand-primary">Field Ops Only</span>
              </div>
           </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[9px] uppercase tracking-[0.4em] font-mono text-white/40 space-y-6 md:space-y-0 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-8">
           <span>© 2025 Vapor Trail Scents</span>
           <span className="text-white/5 hidden md:block">|</span>
           <span className="text-brand-accent/40 italic">Signature Series Equipment</span>
        </div>
        <div className="flex space-x-10">
          <Link to="/returns" className="hover:text-white transition-colors underline decoration-white/5 underline-offset-4">Logistics Policy</Link>
          <Link to="/terms" className="hover:text-white transition-colors underline decoration-white/5 underline-offset-4">Service Protocols</Link>
        </div>
      </div>
    </footer>
  );
}
