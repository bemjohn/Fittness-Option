import React, { useState } from 'react';
import { 
  Zap, 
  Droplets, 
  ShieldCheck, 
  Wind, 
  Sparkles, 
  Coffee, 
  Wifi, 
  Users, 
  Activity, 
  Award, 
  Check, 
  ArrowRight,
  Flame,
  BadgeCheck
} from 'lucide-react';

interface MemberBenefitsProps {
  onOpenJoin: () => void;
}

export const MemberBenefits: React.FC<MemberBenefitsProps> = ({ onOpenJoin }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'infrastructure' | 'wellness' | 'exclusive'>('all');

  const benefits = [
    {
      id: 'unbroken-power',
      category: 'infrastructure',
      icon: Zap,
      accentColor: 'text-[#EF4444]',
      bgAccent: 'group-hover:border-[#EF4444]/60',
      title: '100% Unbroken Power Guarantee',
      highlight: 'Dual Soundproof Mikano Generators',
      description:
        'Never let grid power fluctuations interrupt your workout. Our dual industrial Perkins & Mikano diesel generators with automatic transfer switches guarantee 24/7 continuous electricity and zero downtime in Lagos.',
      tag: 'LAGOS RELIABILITY',
    },
    {
      id: 'arctic-climate',
      category: 'infrastructure',
      icon: Wind,
      accentColor: 'text-[#2563EB]',
      bgAccent: 'group-hover:border-[#2563EB]/60',
      title: 'Commercial HVAC Microclimate',
      highlight: 'Continuous 20°C Chilled Air',
      description:
        'Escape the Lagos humidity. High-capacity commercial VRF climate units continuously circulate purified, chilled air across all 14,000 sq ft so you can push peak heart rate in absolute comfort.',
      tag: 'CLIMATE CONTROL',
    },
    {
      id: 'hydro-recovery',
      category: 'wellness',
      icon: Sparkles,
      accentColor: 'text-blue-400',
      bgAccent: 'group-hover:border-blue-400/60',
      title: 'Hydrothermal Sauna & Cold Plunge',
      highlight: 'Nordic Cedar & Ice Plunges',
      description:
        'Accelerate muscular recovery with contrast therapy. Relax in our authentic dry Finnish cedar sauna (85°C–95°C) followed by sub-10°C cold plunge tubs to eliminate lactic acid and reduce inflammation.',
      tag: 'RECOVERY SUITE',
    },
    {
      id: 'purified-water',
      category: 'infrastructure',
      icon: Droplets,
      accentColor: 'text-cyan-400',
      bgAccent: 'group-hover:border-cyan-400/60',
      title: 'Treated Water & Rainfall Showers',
      highlight: 'Multi-Stage Industrial Filtration',
      description:
        'Enjoy crystal-clear, treated water. Our multi-stage reverse osmosis plant feeds high-pressure rainfall hot & cold showers, luxury grooming vanities, and touchless chilled hydration stations.',
      tag: 'PURIFIED HYDRATION',
    },
    {
      id: 'guarded-parking',
      category: 'infrastructure',
      icon: ShieldCheck,
      accentColor: 'text-emerald-400',
      bgAccent: 'group-hover:border-emerald-400/60',
      title: 'Guarded Compound & Secure Parking',
      highlight: 'Uniformed Security & CCTV 24/7',
      description:
        'Enjoy complete peace of mind while training. Our gated compound on Rasaq Gbadamosi Avenue features dedicated off-street parking, perimeter CCTV, and round-the-clock trained security personnel.',
      tag: 'PREMISES SECURITY',
    },
    {
      id: 'fuel-bar',
      category: 'wellness',
      icon: Coffee,
      accentColor: 'text-amber-400',
      bgAccent: 'group-hover:border-amber-400/60',
      title: 'The Natural Fuel Protein Bar',
      highlight: 'Cold-Pressed Juices & Superfoods',
      description:
        'Recharge with locally-sourced Nigerian superfood blends: Tigernut & Whey protein shakes, fresh cold-pressed pineapple-ginger stamina shots, electrolyte zobo elixirs, and espresso bar.',
      tag: 'NUTRITION & BAR',
    },
    {
      id: 'biometric-scans',
      category: 'exclusive',
      icon: Activity,
      accentColor: 'text-[#EF4444]',
      bgAccent: 'group-hover:border-[#EF4444]/60',
      title: 'Complimentary InBody Scans',
      highlight: 'Quarterly Body Composition Reviews',
      description:
        'Track authentic progress beyond the scale. Get clinical-grade bioelectrical impedance scans mapping skeletal muscle mass, visceral fat rating, and segmental muscle balance with our head coaches.',
      tag: 'PERFORMANCE DATA',
    },
    {
      id: 'guest-privileges',
      category: 'exclusive',
      icon: Users,
      accentColor: 'text-[#2563EB]',
      bgAccent: 'group-hover:border-[#2563EB]/60',
      title: 'Complimentary Guest Passes',
      highlight: 'Bring a Training Partner',
      description:
        'Share the Fitness Options experience. Active resident members receive complimentary guest passes each month to introduce friends, colleagues, or family to the club.',
      tag: 'COMMUNITY PERK',
    },
    {
      id: 'fiber-lounge',
      category: 'exclusive',
      icon: Wifi,
      accentColor: 'text-indigo-400',
      bgAccent: 'group-hover:border-indigo-400/60',
      title: 'Executive Fiber Wi-Fi & Lounge',
      highlight: 'Seamless Connectivity for Professionals',
      description:
        'Transition effortlessly between physical output and mental focus. Relax in our quiet member lounge with ultra-fast dedicated fiber broadband, laptop charging points, and quiet alcoves.',
      tag: 'REMOTE EXECUTIVE',
    },
  ];

  const filteredBenefits =
    activeCategory === 'all'
      ? benefits
      : benefits.filter((b) => b.category === activeCategory);

  return (
    <section id="benefits" className="py-24 md:py-32 bg-[#090b10] text-neutral-200 border-t border-neutral-900 relative overflow-hidden">
      {/* Subtle brand ambient glow */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-red-950/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-blue-950/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="text-xs font-semibold tracking-[0.25em] uppercase text-neutral-400 mb-3 flex items-center gap-2">
              <span className="text-[#EF4444]">PREMIUM ADVANTAGES</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span className="text-[#2563EB]">THE FITNESS OPTIONS STANDARD</span>
            </div>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl text-white font-normal leading-[1.1]">
              Elevated benefits, tailored for Lagos.
            </h2>
          </div>
          <p className="text-neutral-400 text-sm md:text-base max-w-md font-light leading-relaxed">
            We solved every friction point of working out in Lagos. Uninterrupted power, freezing cold air conditioning, pure water, and restorative luxury so you can truly enjoy your body.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pb-8 border-b border-neutral-800/80 mb-12">
          {[
            { id: 'all', label: 'All Member Benefits' },
            { id: 'infrastructure', label: 'Lagos Infrastructure & Comfort' },
            { id: 'wellness', label: 'Recovery & Nutrition' },
            { id: 'exclusive', label: 'Resident Privileges' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-4 py-2 text-xs font-semibold tracking-wider uppercase rounded-full transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-[#EF4444] to-[#2563EB] text-white shadow-md'
                  : 'bg-neutral-900/80 text-neutral-400 hover:text-white border border-neutral-800 hover:border-neutral-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBenefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.id}
                className={`group relative bg-[#0e1017] border border-neutral-800/90 hover:border-neutral-700 p-8 rounded-sm transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-black/50 ${benefit.bgAccent}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className={`w-6 h-6 ${benefit.accentColor}`} />
                    </div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800/80">
                      {benefit.tag}
                    </span>
                  </div>

                  <h3 className="font-serif-luxury text-2xl text-white font-normal mb-1">
                    {benefit.title}
                  </h3>
                  <div className="text-xs font-mono tracking-wider text-blue-300 font-semibold mb-3">
                    {benefit.highlight}
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-800/60 flex items-center gap-2 text-[11px] text-neutral-400 font-mono">
                  <BadgeCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Standard on all active memberships</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight Banner: Lagos Commuter & Executive Convenience */}
        <div className="mt-12 bg-gradient-to-r from-[#14121a] via-[#101422] to-[#121118] border border-neutral-800 p-8 md:p-10 rounded-sm flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-[#EF4444] uppercase tracking-wider font-semibold">
              <Flame className="w-4 h-4" />
              <span>LAGOS COMMUTER ADVANTAGE</span>
            </div>
            <h4 className="font-serif-luxury text-2xl md:text-3xl text-white font-normal">
              Beat Lagos Traffic: Early 6:00 AM Open & 10:00 PM Late Nights
            </h4>
            <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
              Work out before the morning gridlock on Eko Bridge and Western Avenue, or decompress after evening meetings. With our hot showers and locker suites, you can walk straight into your Lagos boardroom feeling unstoppable.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full lg:w-auto">
            <button
              onClick={onOpenJoin}
              className="px-8 py-3.5 bg-gradient-to-r from-[#EF4444] to-[#2563EB] text-white hover:opacity-95 text-xs font-bold tracking-widest uppercase rounded-full transition-all shadow-lg hover:scale-105 active:scale-95 cursor-pointer text-center"
            >
              EXPERIENCE THE PERKS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
