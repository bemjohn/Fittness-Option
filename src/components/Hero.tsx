import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../data/clubData.ts';

interface HeroProps {
  onOpenJoin: () => void;
  onExploreSpaces?: () => void;
  onViewSchedule?: () => void;
  onViewBenefits?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenJoin }) => {
  return (
    <section id="hero" className="relative min-h-screen w-full flex flex-col justify-center items-center text-white overflow-hidden pt-20 pb-16 select-none">
      {/* Background Hero Image with Full Edge-to-Edge Cover */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.hero}
          alt="Athlete training at Fitness Options Aguda Branch Lagos"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-[0.55] contrast-[1.12]"
        />
        {/* Cinematic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07080c] via-black/45 to-black/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
        
        {/* Subtle dual-color ambient glow matching brand palette */}
        <div className="absolute top-1/3 -left-32 w-80 h-80 bg-red-600/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 -right-32 w-80 h-80 bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
      </div>

      {/* Centered Editorial Headline with Brand Slogan */}
      <div className="relative z-20 text-center px-4 sm:px-6 max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="font-serif-luxury text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-normal tracking-tight text-white leading-[1.03] drop-shadow-2xl">
          Enjoy <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#EF4444] via-rose-300 to-[#3B82F6]">your body</span>
        </h1>

        <p className="mt-6 text-sm sm:text-base md:text-lg text-neutral-300 max-w-2xl mx-auto font-light tracking-wide leading-relaxed drop-shadow-md">
          Lagos’s premier sanctuary of physical discipline, human performance, and restoration. 
          World-class conditioning at 9 Rasaq Gbadamosi Avenue, Aguda, Surulere.
        </p>

        {/* Primary Action Buttons */}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full max-w-xl">
          <button
            onClick={onOpenJoin}
            className="px-8 py-3.5 bg-gradient-to-r from-[#EF4444] to-[#2563EB] hover:opacity-95 text-white text-xs font-bold tracking-[0.2em] uppercase rounded-full transition-all duration-200 shadow-xl shadow-red-950/40 hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center gap-2"
          >
            <span>JOIN THE CLUB</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <Link
            to="/membership"
            className="px-7 py-3.5 bg-neutral-950/70 hover:bg-neutral-900 text-white border border-neutral-700 hover:border-neutral-500 text-xs font-semibold tracking-[0.18em] uppercase rounded-full backdrop-blur-md transition-all duration-200 cursor-pointer text-center"
          >
            MEMBERSHIP PLANS
          </Link>

          <Link
            to="/benefits"
            className="px-7 py-3.5 bg-neutral-900/60 hover:bg-neutral-800 text-blue-200 border border-blue-900/40 hover:border-blue-700 text-xs font-semibold tracking-[0.16em] uppercase rounded-full backdrop-blur-md transition-all duration-200 cursor-pointer text-center"
          >
            MEMBER BENEFITS
          </Link>

          <Link
            to="/about"
            className="px-6 py-3.5 bg-neutral-950/50 hover:bg-neutral-900 text-neutral-300 border border-neutral-800 hover:border-neutral-600 text-xs font-medium tracking-[0.16em] uppercase rounded-full backdrop-blur-md transition-all duration-200 cursor-pointer text-center"
          >
            ABOUT CLUB
          </Link>
        </div>
      </div>
    </section>
  );
};
