import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { CLUB_INFO } from '../data/clubData.ts';
import { WhatsAppIcon } from './WhatsAppIcon.tsx';

interface NavbarProps {
  onOpenJoin: (tierId?: string) => void;
  onOpenCorporate?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenJoin }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/membership', label: 'Membership' },
    { path: '/benefits', label: 'Member Benefits' },
    { path: '/corporate', label: 'Corporate' },
    { path: '/about', label: 'About Us' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#090b10]/95 backdrop-blur-md border-b border-neutral-800/90 py-3 shadow-2xl'
          : 'bg-gradient-to-b from-black/90 via-black/50 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Zone 1: Official Logo Picture (Standalone Picture, Clutter-Free) */}
        <Link
          to="/"
          onClick={() => setMobileMenuOpen(false)}
          className="group flex items-center shrink-0 focus:outline-none transition-transform hover:opacity-95"
          aria-label="Fitness Options Home"
        >
          <img
            src="/fitness-options-logo.png"
            alt="Fitness Options - enjoy your body"
            className="h-10 sm:h-11 w-auto max-w-[170px] sm:max-w-[190px] object-contain filter drop-shadow-md select-none transition-transform group-hover:scale-[1.03] duration-200"
            onError={(e) => {
              e.currentTarget.src = '/image.png';
            }}
          />
        </Link>

        {/* Zone 2: Dedicated Page Links - Clean, uncluttered layout */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-8 text-xs xl:text-[13px] font-semibold tracking-[0.12em] uppercase text-neutral-300">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`relative py-1.5 transition-colors whitespace-nowrap ${
                  isActive
                    ? 'text-white'
                    : 'text-neutral-300 hover:text-white'
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#EF4444] to-[#2563EB] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Zone 3: Clean Actions (WhatsApp + Call + CTA) */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          {/* Quick WhatsApp Link for Lagos Members */}
          <a
            href="https://wa.me/2347069651085?text=Hello%20Fitness%20Options%20Aguda,%20I'd%20like%20to%20inquire%20about%20membership"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 hover:text-emerald-300 transition-all duration-200"
            title="Chat with Club Concierge on WhatsApp (+234 706 965 1085)"
            aria-label="WhatsApp Concierge"
          >
            <WhatsAppIcon className="w-4 h-4" />
          </a>

          {/* Direct Phone Call */}
          <a
            href={`tel:${CLUB_INFO.phoneRaw}`}
            className="hidden md:inline-flex items-center gap-1.5 text-xs text-neutral-300 hover:text-white transition-colors py-1.5 px-2.5 rounded-full hover:bg-white/5 border border-transparent hover:border-neutral-800"
            title="Call Aguda Branch Front Desk: 0706 965 1085"
          >
            <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
            <span className="font-mono text-xs hidden xl:inline">{CLUB_INFO.phone}</span>
          </a>

          {/* Primary Action Button with Brand Accent */}
          <button
            onClick={() => onOpenJoin()}
            className="px-4 py-2 sm:px-5 sm:py-2.5 bg-gradient-to-r from-[#EF4444] to-[#2563EB] text-white text-xs font-bold tracking-widest uppercase transition-all duration-200 shadow-lg shadow-red-900/20 hover:shadow-blue-900/30 hover:scale-[1.02] active:scale-[0.98] cursor-pointer rounded-full whitespace-nowrap"
          >
            JOIN US
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-300 hover:text-white cursor-pointer ml-0.5"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer with Page Links */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0d0f15] border-b border-neutral-800 px-6 py-6 animate-fadeIn shadow-2xl">
          <div className="mb-4 pb-4 border-b border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
            <span className="font-mono text-[11px] text-blue-300">
              AGUDA BRANCH · 4.3 ★ (65 REVIEWS)
            </span>
            <span className="text-emerald-400 font-medium font-mono text-[11px]">
              OPEN TILL 10 PM
            </span>
          </div>

          <div className="flex flex-col gap-2 text-sm font-semibold tracking-wider uppercase text-neutral-200">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-left py-2.5 px-3 rounded-md transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-neutral-800/80 text-white border-l-2 border-[#EF4444]'
                      : 'hover:bg-neutral-900 text-neutral-300'
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="text-neutral-500 text-xs">→</span>
                </Link>
              );
            })}
          </div>

          <div className="mt-6 pt-5 border-t border-neutral-800 flex flex-col gap-3">
            <a
              href="https://wa.me/2347069651085?text=Hello%20Fitness%20Options%20Aguda,%20I'd%20like%20to%20inquire%20about%20membership"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 bg-emerald-950/40 border border-emerald-700/60 text-emerald-300 text-xs font-semibold tracking-wider uppercase rounded-full flex items-center justify-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
              <span>Chat on WhatsApp (+234 706 965 1085)</span>
            </a>

            <div className="grid grid-cols-2 gap-2">
              <a
                href={`tel:${CLUB_INFO.phoneRaw}`}
                className="text-center py-2.5 border border-neutral-700 text-xs font-medium tracking-wider uppercase text-neutral-300 hover:bg-neutral-800 rounded-full flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                <span>Call Branch</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenJoin();
                }}
                className="text-center py-2.5 bg-gradient-to-r from-[#EF4444] to-[#2563EB] text-white text-xs font-bold tracking-widest uppercase hover:opacity-90 rounded-full shadow-md"
              >
                JOIN CLUB
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
