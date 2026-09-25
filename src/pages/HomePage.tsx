import React from 'react';
import { Hero } from '../components/Hero.tsx';
import { CLUB_INFO } from '../data/clubData.ts';
import { MapPin, Clock } from 'lucide-react';

interface HomePageProps {
  onOpenJoin: (planId?: string) => void;
  onBookClass?: (cls: any) => void;
  onConsultTrainer?: (trainer: any) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenJoin }) => {
  return (
    <div className="bg-[#07080c] min-h-screen text-white">
      {/* 1. Full-Bleed Cinematic Hero Section */}
      <Hero onOpenJoin={() => onOpenJoin()} />

      {/* 3. Compact Aguda Club Info Strip */}
      <section className="bg-neutral-950 border-t border-neutral-850 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-red-400" />
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-neutral-400">Flagship Location</p>
              <p className="text-sm font-semibold text-white">{CLUB_INFO.address}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-neutral-400">Operating Hours</p>
              <p className="text-sm font-semibold text-white">Mon–Fri 6:00 AM – 10:00 PM · Sat 7:00 AM – 9:00 PM</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenJoin()}
              className="px-6 py-2.5 bg-gradient-to-r from-[#EF4444] to-[#2563EB] hover:opacity-90 text-white text-xs font-bold tracking-wider uppercase rounded-full transition-all duration-200 cursor-pointer shadow-lg"
            >
              Get Membership Pass
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
