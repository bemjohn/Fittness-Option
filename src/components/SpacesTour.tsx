import React, { useState } from 'react';
import { FACILITY_SPACES } from '../data/clubData.ts';
import { ArrowUpRight, CheckCircle2, Dumbbell, Sparkles } from 'lucide-react';

interface SpacesTourProps {
  onOpenJoin: () => void;
}

export const SpacesTour: React.FC<SpacesTourProps> = ({ onOpenJoin }) => {
  const [activeTab, setActiveTab] = useState(0);
  const currentSpace = FACILITY_SPACES[activeTab];

  return (
    <section id="spaces" className="py-24 md:py-32 bg-[#090b10] text-neutral-200 border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="text-xs font-semibold tracking-[0.25em] uppercase text-neutral-400 mb-3 flex items-center gap-2">
              <span className="text-[#EF4444]">THE AGUDA ARCHITECTURE</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span className="text-[#2563EB]">14,000 SQ FT</span>
            </div>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl text-white font-normal">
              Designed for physical mastery.
            </h2>
          </div>
          <p className="text-neutral-400 text-sm md:text-base max-w-md font-light">
            Every zone is optimized for biomechanical flow, acoustic absorption, and maximum training focus in Lagos.
          </p>
        </div>

        {/* Space Selector Tabs */}
        <div className="flex overflow-x-auto no-scrollbar gap-2 p-1.5 bg-[#0f121a] border border-neutral-800 rounded-lg mb-10">
          {FACILITY_SPACES.map((space, index) => {
            const isActive = index === activeTab;
            return (
              <button
                key={space.id}
                onClick={() => setActiveTab(index)}
                className={`px-5 py-3 text-xs md:text-sm font-medium tracking-wider uppercase rounded-md transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-[#EF4444] to-[#2563EB] text-white shadow-lg font-bold'
                    : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/40'
                }`}
              >
                {space.name}
              </button>
            );
          })}
        </div>

        {/* Active Space Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Visual Canvas (Col 7) */}
          <div className="lg:col-span-7 relative group overflow-hidden rounded-sm border border-neutral-800 bg-[#0c0e15] min-h-[380px] md:min-h-[480px]">
            <img
              src={currentSpace.image}
              alt={currentSpace.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[11px] font-mono tracking-widest uppercase text-blue-400 block mb-1 font-semibold">
                ZONE 0{activeTab + 1} · FITNESS OPTIONS AGUDA
              </span>
              <h3 className="font-serif-luxury text-3xl md:text-4xl text-white font-normal">
                {currentSpace.name}
              </h3>
            </div>
          </div>

          {/* Space Breakdown (Col 5) */}
          <div className="lg:col-span-5 bg-[#0d0f17] border border-neutral-800 p-8 md:p-10 rounded-sm flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono tracking-widest text-[#EF4444] uppercase mb-2 font-semibold">
                {currentSpace.tagline}
              </div>
              <p className="text-neutral-300 text-sm md:text-base font-light leading-relaxed mb-6">
                {currentSpace.description}
              </p>

              {/* Space Specifications */}
              <div className="space-y-3 pt-4 border-t border-neutral-800/80 mb-6">
                <div className="text-xs font-semibold tracking-wider uppercase text-neutral-400 mb-2">
                  Key Specifications
                </div>
                {currentSpace.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-neutral-300 font-light">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Equipment Brands */}
              <div className="pt-4 border-t border-neutral-800/80">
                <div className="text-xs font-semibold tracking-wider uppercase text-neutral-400 mb-2">
                  Featured Hardware
                </div>
                <div className="flex flex-wrap gap-2">
                  {currentSpace.equipment.map((item, i) => (
                    <span
                      key={i}
                      className="text-xs font-mono bg-neutral-900 border border-neutral-800 text-neutral-300 px-3 py-1 rounded-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-neutral-800/80 mt-6">
              <button
                onClick={onOpenJoin}
                className="w-full py-3.5 bg-neutral-900 hover:bg-gradient-to-r hover:from-[#EF4444] hover:to-[#2563EB] text-white text-xs font-bold tracking-widest uppercase transition-all duration-200 rounded-sm cursor-pointer flex items-center justify-center gap-2 border border-neutral-700 hover:border-transparent"
              >
                <span>BOOK AGUDA DISCOVERY TOUR</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
