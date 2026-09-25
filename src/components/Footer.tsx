import React from 'react';
import { Link } from 'react-router-dom';
import { CLUB_INFO } from '../data/clubData.ts';
import { Phone, MapPin, Star, ArrowUp, ShieldCheck, Heart } from 'lucide-react';
import { FitnessOptionsLogo } from './FitnessOptionsLogo.tsx';
import { WhatsAppIcon } from './WhatsAppIcon.tsx';

interface FooterProps {
  onOpenJoin: () => void;
  onOpenCorporate?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenJoin, onOpenCorporate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050609] text-neutral-400 border-t border-neutral-900 pt-20 pb-12 relative overflow-hidden">
      {/* Subtle ambient brand color reflections in footer */}
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-red-950/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-blue-950/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Top Tier */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-neutral-900">
          {/* Brand Column (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <Link
              to="/"
              onClick={scrollToTop}
              className="inline-block focus:outline-none"
            >
              <FitnessOptionsLogo size="md" showTagline={true} showBranch={true} />
            </Link>

            <p className="text-xs text-neutral-400 font-light max-w-sm leading-relaxed mt-3">
              Lagos's benchmark for athletic performance, strength conditioning, and hydrothermal restoration. An uncompromising sanctuary to enjoy your body.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-mono text-neutral-400">
              <div className="flex items-center gap-1 text-amber-400">
                <Star className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
                <span className="text-white font-semibold">{CLUB_INFO.rating}</span>
              </div>
              <span className="text-neutral-700">·</span>
              <span>{CLUB_INFO.reviewCount} Verified Reviews</span>
              <span className="text-neutral-700">·</span>
              <span className="text-blue-400">Surulere / Aguda</span>
            </div>
          </div>

          {/* Quick Navigation Matching Requested 5 Pages */}
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-neutral-200 mb-4 font-semibold">
              Explore Pages
            </div>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <Link
                  to="/"
                  className="hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/membership"
                  className="hover:text-white transition-colors text-red-300 hover:text-white"
                >
                  Membership Plans
                </Link>
              </li>
              <li>
                <Link
                  to="/benefits"
                  className="hover:text-white transition-colors text-blue-300 hover:text-white"
                >
                  Member Benefits
                </Link>
              </li>
              <li>
                <Link
                  to="/corporate"
                  className="hover:text-white transition-colors"
                >
                  Corporate Wellness
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us & Coaches
                </Link>
              </li>
            </ul>
          </div>

          {/* Location & Nigerian Contact */}
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-neutral-200 mb-4 font-semibold">
              Aguda Branch
            </div>
            <div className="space-y-3 text-xs text-neutral-400 font-light">
              <div className="text-neutral-300">
                9 Rasaq Gbadamosi Ave<br />
                Orile Iganmu / Aguda<br />
                Lagos 101241, Nigeria
              </div>

              <div className="pt-1 flex flex-col gap-2">
                <a
                  href={`tel:${CLUB_INFO.phoneRaw}`}
                  className="inline-flex items-center gap-2 hover:text-white transition-colors font-mono text-xs"
                >
                  <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>{CLUB_INFO.phone}</span>
                </a>

                <a
                  href="https://wa.me/2347069651085?text=Hello%20Fitness%20Options%20Aguda,%20I'd%20like%20to%20inquire%20about%20membership"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors font-mono text-xs"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 shrink-0" />
                  <span>WhatsApp Concierge</span>
                </a>
              </div>
            </div>
          </div>

          {/* Club Hours */}
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-neutral-200 mb-4 font-semibold">
              Club Hours
            </div>
            <div className="space-y-2 text-xs font-mono">
              <div>
                <div className="text-neutral-400 text-[11px]">Mon – Fri</div>
                <div className="text-white font-medium">6:00 AM – 9:00 PM</div>
              </div>
              <div>
                <div className="text-neutral-400 text-[11px]">Saturday</div>
                <div className="text-white font-medium">7:00 AM – 8:00 PM</div>
              </div>
              <div>
                <div className="text-neutral-400 text-[11px]">Sunday</div>
                <div className="text-white font-medium">1:00 PM – 7:00 PM</div>
              </div>
              <div className="pt-2 text-[10px] text-emerald-400 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                <span>24/7 Generator Power</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Tier */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Fitness Options Ltd. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[11px] text-neutral-400 font-sans italic flex items-center gap-1">
              <span>"enjoy your body"</span>
              <Heart className="w-3 h-3 text-red-500 fill-red-500 inline" />
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer border border-neutral-800"
              aria-label="Scroll to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
