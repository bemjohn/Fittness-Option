import React, { useState, useEffect } from 'react';
import { CLUB_INFO } from '../data/clubData.ts';
import { MapPin, Phone, Clock, Navigation, Copy, Check, ExternalLink, Car, ShieldCheck } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon.tsx';

export const LocationDirections: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(true);

  // Check if currently open based on local Lagos hours (WAT UTC+1)
  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date();
      // Lagos is UTC+1
      const utcHours = now.getUTCHours();
      const lagosHours = (utcHours + 1) % 24;
      const day = now.getUTCDay(); // 0 is Sunday, 6 is Saturday

      if (day >= 1 && day <= 5) {
        // Weekdays: 6 AM to 10 PM
        setIsOpenNow(lagosHours >= 6 && lagosHours < 22);
      } else if (day === 6) {
        // Saturday: 7 AM to 9 PM
        setIsOpenNow(lagosHours >= 7 && lagosHours < 21);
      } else {
        // Sunday: 8 AM to 7 PM
        setIsOpenNow(lagosHours >= 8 && lagosHours < 19);
      }
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(CLUB_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="location" className="py-24 md:py-32 bg-[#08090d] text-neutral-200 border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-xs font-semibold tracking-[0.25em] uppercase text-neutral-400 mb-3 flex items-center gap-2">
              <span className="text-[#EF4444]">PHYSICAL DESTINATION</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span className="text-[#2563EB]">AGUDA SURULERE, LAGOS</span>
            </div>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl text-white font-normal">
              Find your sanctuary.
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono">
            <span
              className={`w-2.5 h-2.5 rounded-full ${
                isOpenNow ? 'bg-emerald-500 animate-pulse' : 'bg-rose-500'
              }`}
            />
            <span className="text-white font-semibold">
              {isOpenNow ? 'OPEN NOW' : 'CURRENTLY CLOSED'}
            </span>
            <span className="text-neutral-600">·</span>
            <span className="text-blue-300">CLOSES 10:00 PM TODAY</span>
          </div>
        </div>

        {/* Location Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Contact & Hours Info (Col 5) */}
          <div className="lg:col-span-5 bg-[#0e1017] border border-neutral-800 p-8 md:p-10 rounded-sm flex flex-col justify-between">
            <div className="space-y-8">
              {/* Address */}
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                  <MapPin className="w-4 h-4 text-[#EF4444]" />
                  <span>Physical Address in Lagos</span>
                </div>
                <p className="text-white text-base md:text-lg font-light leading-snug">
                  {CLUB_INFO.address}
                </p>
                <div className="mt-3 flex items-center gap-3">
                  <button
                    onClick={handleCopyAddress}
                    className="text-xs text-neutral-400 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-mono">Copied to clipboard</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-neutral-400" />
                        <span>Copy address</span>
                      </>
                    )}
                  </button>
                  <span className="text-neutral-700">|</span>
                  <a
                    href={CLUB_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors"
                  >
                    <span>View in Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Direct Phone & WhatsApp */}
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                  <Phone className="w-4 h-4 text-[#2563EB]" />
                  <span>Aguda Concierge Phone & WhatsApp</span>
                </div>
                <a
                  href={`tel:${CLUB_INFO.phoneRaw}`}
                  className="font-serif-luxury text-3xl text-white hover:text-blue-300 transition-colors tabular-nums block"
                >
                  {CLUB_INFO.phone}
                </a>
                <div className="mt-2 flex items-center gap-3">
                  <a
                    href={CLUB_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5 font-mono"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5" />
                    <span>Instant WhatsApp Chat</span>
                  </a>
                </div>
              </div>

              {/* Operating Hours */}
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">
                  <Clock className="w-4 h-4 text-neutral-400" />
                  <span>Aguda Branch Timetable</span>
                </div>
                <div className="space-y-2 text-xs md:text-sm font-mono">
                  <div className="flex justify-between py-1.5 border-b border-neutral-800/80">
                    <span className="text-neutral-400">Monday – Friday</span>
                    <span className="text-white font-medium">{CLUB_INFO.hours.weekdays}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-neutral-800/80">
                    <span className="text-neutral-400">Saturday</span>
                    <span className="text-white font-medium">{CLUB_INFO.hours.saturday}</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-neutral-400">Sunday</span>
                    <span className="text-white font-medium">{CLUB_INFO.hours.sunday}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-800">
              <a
                href={CLUB_INFO.googleMapsUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="w-full py-3.5 bg-gradient-to-r from-[#EF4444] to-[#2563EB] hover:opacity-95 text-white text-xs font-bold tracking-widest uppercase transition-all rounded-sm flex items-center justify-center gap-2 shadow-lg"
              >
                <Navigation className="w-4 h-4" />
                <span>START GPS NAVIGATION TO AGUDA</span>
              </a>
            </div>
          </div>

          {/* Map & Landmark Driving Directions (Col 7) */}
          <div className="lg:col-span-7 bg-[#0f121a] border border-neutral-800 rounded-sm overflow-hidden flex flex-col justify-between relative min-h-[420px]">
            {/* Visual Minimalist Map Graphic */}
            <div className="relative w-full h-full min-h-[300px] flex items-center justify-center p-8 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px]">
              {/* Surulere / Aguda Roads Simulation */}
              <div className="absolute inset-0 opacity-30 pointer-events-none">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0,150 Q400,200 800,100" stroke="#3b82f6" strokeWidth="2.5" fill="none" opacity="0.6" />
                  <path d="M200,0 L350,500" stroke="#ef4444" strokeWidth="2" fill="none" opacity="0.6" />
                  <path d="M500,0 Q520,300 700,500" stroke="#64748b" strokeWidth="2" fill="none" />
                  <path d="M100,320 L750,280" stroke="#94a3b8" strokeWidth="3" fill="none" />
                </svg>
              </div>

              {/* Pinpoint Card */}
              <div className="relative z-10 bg-[#08090f]/95 border border-neutral-700/80 p-6 rounded-md shadow-2xl max-w-sm text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-600 to-blue-600 flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className="text-[11px] font-mono tracking-widest text-blue-400 uppercase mb-1">
                  AGUDA BRANCH DESTINATION
                </div>
                <h4 className="font-serif-luxury text-2xl text-white font-medium mb-1">
                  Fitness Options
                </h4>
                <p className="text-xs text-neutral-300 font-light mb-4">
                  9 Rasaq Gbadamosi Ave, Orile Iganmu / Aguda, Surulere, Lagos
                </p>
                <div className="flex items-center justify-center gap-3 text-[11px] font-mono text-neutral-400">
                  <span>LAT: 6.4862° N</span>
                  <span>·</span>
                  <span>LNG: 3.3481° E</span>
                </div>
              </div>
            </div>

            {/* Turn-by-Turn Local Advice for Lagos Commuters */}
            <div className="p-6 bg-[#0a0c12] border-t border-neutral-800 text-xs text-neutral-300 space-y-2">
              <div className="flex items-center gap-2 text-white font-semibold uppercase tracking-wider">
                <Car className="w-4 h-4 text-blue-400" />
                <span>Lagos Commuter & Landmark Access:</span>
              </div>
              <ul className="space-y-1 text-neutral-400 list-disc list-inside">
                <li><strong className="text-neutral-200">From Bode Thomas:</strong> Drive down south via Enitan Street straight towards Rasaq Gbadamosi Avenue.</li>
                <li><strong className="text-neutral-200">From Island / Eko Bridge:</strong> Take Western Avenue, exit through Stadium / Ojuelegba into Surulere.</li>
                <li><strong className="text-neutral-200">Guarded Compound:</strong> Free, secure on-site gated parking with 24/7 uniformed security & CCTV surveillance.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
