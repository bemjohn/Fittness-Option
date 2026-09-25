import React from 'react';
import { AboutAguda } from '../components/AboutAguda.tsx';
import { PersonalTraining } from '../components/PersonalTraining.tsx';
import { ClassSchedule } from '../components/ClassSchedule.tsx';
import { ReviewsSection } from '../components/ReviewsSection.tsx';
import { LocationDirections } from '../components/LocationDirections.tsx';
import { GymClass, Trainer } from '../types.ts';
import { Sparkles, Heart, Compass, Shield, Phone, MapPin, ArrowRight, Star, Award, Zap } from 'lucide-react';
import { CLUB_INFO, IMAGES } from '../data/clubData.ts';

interface AboutPageProps {
  onOpenJoin: () => void;
  onBookClass: (cls: GymClass) => void;
  onConsultTrainer: (trainer: Trainer) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onOpenJoin,
  onBookClass,
  onConsultTrainer,
}) => {
  return (
    <div className="bg-[#07080c] min-h-screen">
      {/* Full-Cover Hero Section with Architectural Aguda Facility Image */}
      <section className="relative min-h-[75vh] lg:min-h-[82vh] w-full flex flex-col justify-center items-center text-center overflow-hidden pt-28 pb-16 px-4 sm:px-6 lg:px-8 border-b border-neutral-800 select-none">
        {/* Full-Cover Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.aboutHero}
            alt="Fitness Options Aguda flagship gym floor in Lagos"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center filter brightness-[0.5] contrast-[1.12]"
          />
          {/* Cinematic Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#07080c] via-black/55 to-black/75" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
          {/* Subtle Ambient Brand Glows */}
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-red-600/15 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute top-1/3 -right-32 w-96 h-96 bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
        </div>

        {/* Foreground Centered Content */}
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center space-y-6">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] max-w-3xl drop-shadow-md">
            Our Story, Your Sanctuary —{' '}
            <span className="bg-gradient-to-r from-red-500 via-rose-400 to-blue-500 bg-clip-text text-transparent">
              Enjoy Your Body
            </span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-200 font-light leading-relaxed max-w-2xl drop-shadow">
            Fitness Options was established on the simple belief that physical movement should be a celebratory habit,
            not an exhausting chore. Step into our world-class facility at 9 Rasaq Gbadamosi Avenue.
          </p>

          {/* Tagline Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1 rounded-full bg-black/60 border border-white/20 backdrop-blur-md text-neutral-300 text-xs tracking-wider">
            <span className="text-[11px] font-mono text-neutral-400 uppercase">Founding Ethos:</span>
            <span className="text-white font-serif italic text-sm">"enjoy your body"</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline ml-0.5" />
          </div>

          {/* Quick Credibility Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-3xl pt-2">
            <div className="flex flex-col items-center p-3 rounded-xl bg-black/60 border border-neutral-700/60 backdrop-blur-md">
              <Star className="w-5 h-5 fill-amber-400 text-amber-400 mb-1" />
              <span className="text-xs font-bold text-white">4.3 ★ Rating</span>
              <span className="text-[10px] text-neutral-400 font-mono">65+ Lagos Reviews</span>
            </div>

            <div className="flex flex-col items-center p-3 rounded-xl bg-black/60 border border-neutral-700/60 backdrop-blur-md">
              <MapPin className="w-5 h-5 text-red-400 mb-1" />
              <span className="text-xs font-bold text-white">Surulere / Aguda</span>
              <span className="text-[10px] text-neutral-400 font-mono">9 Rasaq Gbadamosi</span>
            </div>

            <div className="flex flex-col items-center p-3 rounded-xl bg-black/60 border border-neutral-700/60 backdrop-blur-md">
              <Award className="w-5 h-5 text-blue-400 mb-1" />
              <span className="text-xs font-bold text-white">Master Coaches</span>
              <span className="text-[10px] text-neutral-400 font-mono">ISSA & ACE Certified</span>
            </div>

            <div className="flex flex-col items-center p-3 rounded-xl bg-black/60 border border-neutral-700/60 backdrop-blur-md">
              <Zap className="w-5 h-5 text-amber-400 mb-1" />
              <span className="text-xs font-bold text-white">24/7 Lister Power</span>
              <span className="text-[10px] text-neutral-400 font-mono">Zero Interruption</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => {
                const el = document.getElementById('about-story');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-7 py-3.5 rounded-full bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-500 hover:to-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-red-900/40 flex items-center gap-2 transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Explore Our Story</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`tel:${CLUB_INFO.phoneRaw}`}
              className="px-6 py-3.5 rounded-full bg-black/70 hover:bg-neutral-900 border border-neutral-700 text-white font-semibold text-xs uppercase tracking-wider flex items-center gap-2 backdrop-blur-md transition-colors"
            >
              <Phone className="w-4 h-4 text-blue-400" />
              <span>Call Front Desk: {CLUB_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>

      {/* 1. The Core Philosophy & Aguda Branch Distinction */}
      <div id="about-story">
        <AboutAguda
          onOpenJoin={onOpenJoin}
          onViewLocation={() => {
            const el = document.getElementById('location-section');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      </div>

      {/* 2. Master Coaching Staff */}
      <div className="my-8">
        <PersonalTraining onConsultTrainer={onConsultTrainer} />
      </div>

      {/* 3. Live Class Timetable */}
      <div className="my-8">
        <ClassSchedule onBookClass={onBookClass} />
      </div>

      {/* 4. Google Reviews from Lagos Members */}
      <div className="my-8">
        <ReviewsSection />
      </div>

      {/* 5. Physical Directions & Hours */}
      <div id="location-section" className="my-8">
        <LocationDirections />
      </div>
    </div>
  );
};
