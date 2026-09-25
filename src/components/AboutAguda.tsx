import React from 'react';
import { Star, Shield, Zap, Sparkles, Clock, MapPin, Droplets, Wind, Heart } from 'lucide-react';
import { CLUB_INFO } from '../data/clubData.ts';
import { FitnessOptionsLogo } from './FitnessOptionsLogo.tsx';

interface AboutAgudaProps {
  onOpenJoin: () => void;
  onViewLocation: () => void;
}

export const AboutAguda: React.FC<AboutAgudaProps> = ({ onOpenJoin, onViewLocation }) => {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#08090d] text-neutral-200 border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Editorial Subtitle & Heading */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="text-xs font-semibold tracking-[0.25em] uppercase text-neutral-400 mb-4 flex items-center gap-2">
            <span className="text-[#EF4444]">THE THIRD SPACE OF SURULERE</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span className="text-[#2563EB]">ENJOY YOUR BODY</span>
          </div>
          <h2 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl text-white font-normal leading-[1.15] text-balance">
            Neither work nor home. Your sanctuary in Aguda, Lagos.
          </h2>
          <p className="mt-6 text-base md:text-lg text-neutral-400 font-light leading-relaxed">
            Fitness Options Aguda was conceived for Lagosians who refuse to settle. An uncompromising athletic club where brutalist Olympic conditioning meets restorative hydrothermal luxury.
          </p>
        </div>

        {/* 4 Quantitative Proof Pillars - Zero-pill discipline */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-neutral-800/80 mb-20">
          <div>
            <div className="font-serif-luxury text-4xl md:text-5xl text-white font-light tabular-nums">4.3 ★</div>
            <div className="text-xs tracking-wider uppercase text-neutral-400 mt-2 font-medium">Google Rating</div>
            <div className="text-xs text-neutral-500 mt-1">65+ verified member reviews</div>
          </div>

          <div>
            <div className="font-serif-luxury text-4xl md:text-5xl text-blue-400 font-light tabular-nums">14k</div>
            <div className="text-xs tracking-wider uppercase text-neutral-400 mt-2 font-medium">Square Feet</div>
            <div className="text-xs text-neutral-500 mt-1">Multi-zone athletic architecture</div>
          </div>

          <div>
            <div className="font-serif-luxury text-4xl md:text-5xl text-[#EF4444] font-light tabular-nums">100%</div>
            <div className="text-xs tracking-wider uppercase text-neutral-400 mt-2 font-medium">Unbroken Power</div>
            <div className="text-xs text-neutral-500 mt-1">Dual heavy-duty Mikano generators</div>
          </div>

          <div>
            <div className="font-serif-luxury text-4xl md:text-5xl text-white font-light tabular-nums">10 PM</div>
            <div className="text-xs tracking-wider uppercase text-neutral-400 mt-2 font-medium">Evening Access</div>
            <div className="text-xs text-neutral-500 mt-1">Open 7 days a week</div>
          </div>
        </div>

        {/* Asymmetric Bento Storytelling with Brand Palette */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Main Card */}
          <div className="lg:col-span-2 bg-[#0d0f17] border border-neutral-800 p-8 md:p-12 rounded-sm flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono tracking-widest text-neutral-400 uppercase mb-3 flex items-center gap-2">
                <span className="text-[#EF4444]">01.</span>
                <span>THE FITNESS OPTIONS PROMISE</span>
              </div>
              <h3 className="font-serif-luxury text-3xl md:text-4xl text-white mb-4">
                Engineered for serious athletes and restorative balance in Nigeria.
              </h3>
              <p className="text-neutral-400 text-sm md:text-base leading-relaxed mb-6 font-light">
                Located at 9 Rasaq Gbadamosi Avenue, our Aguda branch was built to provide Lagos residents with a world-class training sanctuary. We recognized the everyday challenges of living in Lagos — traffic gridlock, erratic grid power, humid heat — and built an oasis that insulates you completely. From precision-calibrated competition bars and sprint tracks to our handcrafted Finnish cedar sauna, every detail inspires you to <em className="text-blue-300 font-normal">enjoy your body</em>.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-neutral-300 font-light pt-4 border-t border-neutral-800/80">
                <div className="flex items-start gap-2.5">
                  <Shield className="w-4 h-4 text-[#EF4444] shrink-0 mt-0.5" />
                  <span>Olympic power racks with calibrated cast-iron plates and dumbbells up to 55kg</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Zap className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                  <span>Dual Perkins & Mikano soundproof generators guarantee 100% zero-flicker workout power</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Wind className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Full-facility climate control maintaining an arctic 20°C in the Lagos humidity</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Open from 6:00 AM weekdays for early morning workouts before Lagos traffic</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-800/80 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-neutral-400 font-mono">
                <span>9 Rasaq Gbadamosi Ave, Orile Iganmu / Aguda, Surulere, Lagos</span>
              </div>
              <button
                onClick={onViewLocation}
                className="text-xs font-semibold tracking-widest uppercase text-white hover:text-blue-400 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>View Branch Map & Access</span>
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
              </button>
            </div>
          </div>

          {/* Side Narrative Card */}
          <div className="bg-[#10131d] border border-neutral-800 p-8 rounded-sm flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono tracking-widest text-neutral-400 uppercase mb-3 flex items-center gap-2">
                <span className="text-[#2563EB]">02.</span>
                <span>AUTHENTIC LAGOS REPUTATION</span>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-400" />
                  ))}
                </div>
                <span className="text-xs font-bold text-white">4.3 / 5.0</span>
                <span className="text-xs text-neutral-400">(65 Reviews)</span>
              </div>
              <blockquote className="font-serif-luxury text-xl md:text-2xl text-neutral-200 italic leading-snug mb-6">
                “Hands down the most elite training space in Surulere and Orile. Cold AC, top-tier coaches, and zero power cuts. You leave feeling renewed.”
              </blockquote>
              <div className="text-xs text-neutral-400 space-y-1">
                <div className="text-white font-semibold">Tunde B.</div>
                <div>Surulere Resident & Active Member for 2 Years</div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-800">
              <button
                onClick={onOpenJoin}
                className="w-full py-3 bg-gradient-to-r from-[#EF4444] to-[#2563EB] hover:opacity-95 text-white text-xs font-bold tracking-widest uppercase rounded-sm transition-all cursor-pointer text-center shadow-md"
              >
                CLAIM 1-DAY DISCOVERY PASS
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
