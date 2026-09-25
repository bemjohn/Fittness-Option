import React from 'react';
import { MemberBenefits } from '../components/MemberBenefits.tsx';
import { SpacesTour } from '../components/SpacesTour.tsx';
import { Zap, Droplets, Wind, ShieldCheck, Flame, Coffee, Award, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { IMAGES, CLUB_INFO } from '../data/clubData.ts';

interface BenefitsPageProps {
  onOpenJoin: () => void;
}

export const BenefitsPage: React.FC<BenefitsPageProps> = ({ onOpenJoin }) => {
  const pillars = [
    {
      icon: Zap,
      color: 'text-amber-400',
      bg: 'bg-amber-500/10',
      border: 'border-amber-500/30',
      title: '24/7 Guaranteed Power Grid Immunity',
      desc: 'Dual heavy-duty 150kVA soundproof Lister generators combined with automatic ATS switchers ensure you never drop a barbell in the dark or lose air conditioning during Lagos grid collapse.',
    },
    {
      icon: Wind,
      color: 'text-blue-400',
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/30',
      title: 'High-Volume Commercial Air Conditioning',
      desc: 'Dedicated commercial chilling units continuously push fresh, dehumidified, chilled air throughout the strength floor and aerobic studios, combating Lagos humidity.',
    },
    {
      icon: Droplets,
      color: 'text-cyan-400',
      bg: 'bg-cyan-500/10',
      border: 'border-cyan-500/30',
      title: 'Reverse-Osmosis Water & Rain Showers',
      desc: 'On-site borehole coupled with industrial 5-stage filtration and pressurized water heating gives you spotless, high-pressure hot/cold showers every single time.',
    },
    {
      icon: Flame,
      color: 'text-red-400',
      bg: 'bg-red-500/10',
      border: 'border-red-500/30',
      title: 'Finnish Cedar Sauna & Steam Room',
      desc: 'Hydrothermal contrast therapy accelerates lactic acid breakdown, lowers cortisol, enhances cardiovascular health, and eases muscular soreness.',
    },
    {
      icon: Coffee,
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/30',
      title: 'Smoothie, Electrolyte & Protein Bar',
      desc: 'Freshly blended whey and plant-based protein shakes, cold-pressed citrus juices, pre-workout stimulants, and post-workout nutritional sustenance.',
    },
    {
      icon: ShieldCheck,
      color: 'text-indigo-400',
      bg: 'bg-indigo-500/10',
      border: 'border-indigo-500/30',
      title: 'Private Gated Parking & 24/7 Security',
      desc: 'Located on serene Rasaq Gbadamosi Avenue with dedicated security personnel, CCTV coverage, and secure vehicle parking for complete peace of mind.',
    },
    {
      icon: Award,
      color: 'text-purple-400',
      bg: 'bg-purple-500/10',
      border: 'border-purple-500/30',
      title: 'Certified Master Coaching Guidance',
      desc: 'Every member receives guidance from ISSA and ACE-certified fitness directors, ensuring proper biomechanics and steady progressive overload.',
    },
    {
      icon: Clock,
      color: 'text-rose-400',
      bg: 'bg-rose-500/10',
      border: 'border-rose-500/30',
      title: 'Extended Operating Hours for Busy Executives',
      desc: 'Open from 6:00 AM to 9:00 PM on weekdays, 7:00 AM on Saturdays, and afternoon Sunday sessions to fit the demanding Lagos business schedule.',
    },
  ];

  const routineSteps = [
    {
      time: '06:30 AM',
      title: 'Dawn Strength & Aerobics',
      text: 'Step into chilled AC, energetic music, and Olympic lifting platforms while Lagos wakes up.',
    },
    {
      time: '07:45 AM',
      title: 'Steam Bath & Hydrotherapy',
      text: '15 minutes of eucalyptus steam to detoxify and open airways before your workday.',
    },
    {
      time: '08:15 AM',
      title: 'Rain Shower & Fuel Bar',
      text: 'Grab a customized whey protein smoothie and head to your office in Victoria Island or Ikeja fully charged.',
    },
    {
      time: '06:30 PM',
      title: 'Evening Sunset Combat Class',
      text: 'Decompress from mainland traffic with high-energy boxing and core conditioning.',
    },
  ];

  return (
    <div className="bg-[#07080c] min-h-screen">
      {/* Full-Cover Hero Section with Wellness & Recovery Image */}
      <section className="relative min-h-[75vh] lg:min-h-[82vh] w-full flex flex-col justify-center items-center text-center overflow-hidden pt-28 pb-16 px-4 sm:px-6 lg:px-8 border-b border-neutral-800 select-none">
        {/* Full-Cover Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.benefitsHero}
            alt="Wellness & recovery amenities at Fitness Options Aguda"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center filter brightness-[0.5] contrast-[1.12]"
          />
          {/* Cinematic Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#07080c] via-black/55 to-black/75" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
          {/* Subtle Ambient Brand Glows */}
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute top-1/3 -right-32 w-96 h-96 bg-red-600/15 rounded-full blur-[120px] pointer-events-none" />
        </div>

        {/* Foreground Centered Content */}
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center space-y-6">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] max-w-3xl drop-shadow-md">
            Designed for Reliability,{' '}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-red-400 bg-clip-text text-transparent">
              Built for Luxury
            </span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-200 font-light leading-relaxed max-w-2xl drop-shadow">
            In a fast-paced metropolis like Lagos, your fitness center should be an oasis of pure consistency.
            Dual industrial generators, chilled AC, pure treated water, and recovery therapy.
          </p>

          {/* Quick Highlight Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-3xl pt-2">
            <div className="flex flex-col items-center p-3 rounded-xl bg-black/60 border border-neutral-700/60 backdrop-blur-md">
              <Zap className="w-5 h-5 text-amber-400 mb-1" />
              <span className="text-xs font-bold text-white">Dual Lister Generators</span>
              <span className="text-[10px] text-neutral-400 font-mono">100% Guaranteed</span>
            </div>

            <div className="flex flex-col items-center p-3 rounded-xl bg-black/60 border border-neutral-700/60 backdrop-blur-md">
              <Wind className="w-5 h-5 text-blue-400 mb-1" />
              <span className="text-xs font-bold text-white">Chilled Climate Control</span>
              <span className="text-[10px] text-neutral-400 font-mono">Zero Humidity</span>
            </div>

            <div className="flex flex-col items-center p-3 rounded-xl bg-black/60 border border-neutral-700/60 backdrop-blur-md">
              <Flame className="w-5 h-5 text-red-400 mb-1" />
              <span className="text-xs font-bold text-white">Sauna & Eucalyptus Steam</span>
              <span className="text-[10px] text-neutral-400 font-mono">Full Recovery</span>
            </div>

            <div className="flex flex-col items-center p-3 rounded-xl bg-black/60 border border-neutral-700/60 backdrop-blur-md">
              <Droplets className="w-5 h-5 text-cyan-400 mb-1" />
              <span className="text-xs font-bold text-white">RO Treated Rain Showers</span>
              <span className="text-[10px] text-neutral-400 font-mono">Pure Water</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => {
                const el = document.getElementById('pillars-section');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-7 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-900/40 flex items-center gap-2 transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Explore Member Pillars</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <Link
              to="/membership"
              className="px-6 py-3.5 rounded-full bg-black/70 hover:bg-neutral-900 border border-neutral-700 text-white font-semibold text-xs uppercase tracking-wider flex items-center gap-2 backdrop-blur-md transition-colors"
            >
              <span>View Pricing Plans</span>
              <ArrowRight className="w-4 h-4 text-neutral-400" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8 Infrastructure Pillars Grid */}
      <section id="pillars-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
        <div className="text-center mb-12">
          <span className="text-xs font-mono text-red-400 uppercase tracking-widest font-semibold">
            THE AGUDA ADVANTAGE
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            Eight Pillars of Member Excellence
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className={`w-11 h-11 rounded-xl ${pillar.bg} ${pillar.border} border flex items-center justify-center ${pillar.color} mb-4 transition-transform group-hover:scale-110`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-2 leading-snug">{pillar.title}</h3>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed">{pillar.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-neutral-800/60 flex items-center text-[10px] font-mono text-neutral-500 uppercase">
                  <span>Standard on all memberships</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Interactive Member Benefits Showcase */}
      <MemberBenefits onOpenJoin={onOpenJoin} />

      {/* Virtual Spaces Walkthrough */}
      <div className="my-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 text-center">
          <span className="text-xs font-mono text-blue-400 uppercase tracking-widest font-semibold">
            FACILITY PREVIEW
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
            Explore the Sanctuary at 9 Rasaq Gbadamosi
          </h2>
        </div>
        <SpacesTour onOpenJoin={onOpenJoin} />
      </div>

      {/* "A Day in the Life" Timeline */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-20">
        <div className="text-center mb-10">
          <span className="text-xs font-mono text-red-400 uppercase tracking-widest font-semibold">
            THE MEMBER RHYTHM
          </span>
          <h2 className="text-2xl font-bold text-white mt-1">A Day in the Life of an Aguda Member</h2>
        </div>

        <div className="relative border-l border-neutral-800 ml-4 md:ml-32 space-y-8 pl-6 md:pl-8">
          {routineSteps.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-neutral-900 border-2 border-red-500 group-hover:bg-red-500 transition-colors" />
              <div className="hidden md:block absolute -left-36 top-1 text-xs font-mono text-neutral-400 font-bold">
                {step.time}
              </div>
              <div className="md:hidden text-[11px] font-mono text-red-400 font-bold mb-1">
                {step.time}
              </div>
              <h4 className="text-sm font-bold text-white">{step.title}</h4>
              <p className="text-xs text-neutral-400 mt-1 font-light leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-blue-950/40 via-neutral-900 to-red-950/40 border border-neutral-800">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">Experience the Benefits in Person</h3>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-md mx-auto mt-2">
            Book a complimentary club walkthrough or register for residency today.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenJoin}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#EF4444] to-[#2563EB] text-white text-xs font-bold tracking-wider uppercase shadow-lg hover:scale-105 transition-transform"
            >
              Join the Club
            </button>
            <Link
              to="/membership"
              className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-bold tracking-wider uppercase transition-colors"
            >
              <span>View Membership Plans</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
