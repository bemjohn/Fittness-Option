import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero.tsx';
import { IMAGES, CLUB_INFO } from '../data/clubData.ts';
import { ArrowRight, Sparkles, Shield, MapPin, Clock, Phone } from 'lucide-react';

interface HomePageProps {
  onOpenJoin: (planId?: string) => void;
  onBookClass?: (cls: any) => void;
  onConsultTrainer?: (trainer: any) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenJoin }) => {
  const pages = [
    {
      title: 'Membership Residencies',
      tagline: 'Transparent Nigerian Naira tiers with no fuel or generator surcharges.',
      image: IMAGES.membershipHero,
      link: '/membership',
      cta: 'Explore Plans & Pricing',
    },
    {
      title: 'Member Amenities & Benefits',
      tagline: 'Finnish cedar sauna, steam bath, chilled VRF climate, and heavy strength zones.',
      image: IMAGES.benefitsHero,
      link: '/benefits',
      cta: 'View All Amenities',
    },
    {
      title: 'Corporate Wellness',
      tagline: 'Executive group wellness, tax-deductible health programs, and team conditioning.',
      image: IMAGES.corporateHero,
      link: '/corporate',
      cta: 'Corporate Solutions',
    },
    {
      title: 'About Fitness Options Aguda',
      tagline: 'Our heritage, certified personal trainers, studio class schedules, and facility location.',
      image: IMAGES.aboutHero,
      link: '/about',
      cta: 'Discover Our Story',
    },
  ];

  return (
    <div className="bg-[#07080c] min-h-screen text-white">
      {/* 1. Full-Bleed Cinematic Hero Section */}
      <Hero onOpenJoin={() => onOpenJoin()} />

      {/* 2. Streamlined Club Directory — Clean Portal to Dedicated Pages */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-neutral-850">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-mono uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#EF4444]" />
            <span>Dedicated Club Spaces</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Explore Fitness Options Aguda
          </h2>
          <p className="mt-3 text-neutral-400 text-sm sm:text-base leading-relaxed">
            Navigate through our dedicated club sections to find the right plan, explore luxury recovery amenities, or book private training.
          </p>
        </div>

        {/* 4 Clean Visual Cards linking to each dedicated page */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {pages.map((p, idx) => (
            <Link
              key={idx}
              to={p.link}
              className="group relative h-80 sm:h-96 rounded-2xl overflow-hidden border border-neutral-800/90 hover:border-neutral-600 transition-all duration-300 shadow-2xl flex flex-col justify-end p-6 sm:p-8"
            >
              {/* Background Cover Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={p.image}
                  alt={p.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center filter brightness-[0.5] contrast-[1.1] transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              </div>

              {/* Foreground Card Content */}
              <div className="relative z-10 space-y-2">
                <span className="text-[11px] font-mono tracking-widest uppercase text-red-400 font-semibold">
                  0{idx + 1} · Dedicated Page
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-red-400 transition-colors">
                  {p.title}
                </h3>
                <p className="text-neutral-300 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                  {p.tagline}
                </p>
                <div className="pt-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white group-hover:translate-x-1.5 transition-transform duration-200">
                  <span>{p.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-red-400" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

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
