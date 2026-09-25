import React, { useState } from 'react';
import { X, CheckCircle2, Clock, Calendar, MapPin, User, Flame } from 'lucide-react';
import { GymClass } from '../types.ts';
import { CLUB_INFO } from '../data/clubData.ts';
import { WhatsAppIcon } from './WhatsAppIcon.tsx';

interface BookingModalProps {
  gymClass: GymClass | null;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ gymClass, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [booked, setBooked] = useState(false);

  if (!gymClass) return null;

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setBooked(true);
  };

  const handleClose = () => {
    setBooked(false);
    setName('');
    setPhone('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#0c0e15] border border-neutral-700/80 rounded-sm shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-neutral-800 bg-[#080a10]">
          <div>
            <div className="text-[10px] font-mono tracking-widest uppercase text-blue-400 font-semibold">
              FITNESS OPTIONS · CLASS RESERVATION
            </div>
            <h3 className="font-serif-luxury text-2xl text-white font-normal">
              {gymClass.title}
            </h3>
          </div>
          <button
            onClick={handleClose}
            className="p-2 text-neutral-400 hover:text-white cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 md:p-8">
          {!booked ? (
            <form onSubmit={handleBook} className="space-y-5">
              {/* Class Snapshot */}
              <div className="bg-[#12141e] border border-neutral-800 p-4 rounded-sm space-y-2 text-xs font-mono">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400">Time & Studio</span>
                  <span className="text-white font-medium">{gymClass.time} · {gymClass.studio}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400">Master Instructor</span>
                  <span className="text-white font-medium">{gymClass.instructor}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400">Intensity Rating</span>
                  <span className="text-[#EF4444] flex items-center gap-1 font-semibold">
                    <Flame className="w-3.5 h-3.5" />
                    {gymClass.intensity}
                  </span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-neutral-800">
                  <span className="text-neutral-400">Spots Left Today</span>
                  <span className="text-emerald-400 font-bold">{gymClass.spotsLeft} spots open</span>
                </div>
              </div>

              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-1.5">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Tunde Alabi"
                  className="w-full bg-[#141620] border border-neutral-800 focus:border-[#2563EB] px-4 py-2.5 text-sm text-white rounded-sm outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-1.5">
                  Phone Number (Nigeria) *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="0706 965 1085 or +234..."
                  className="w-full bg-[#141620] border border-neutral-800 focus:border-[#2563EB] px-4 py-2.5 text-sm text-white rounded-sm outline-none font-mono"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-[#EF4444] to-[#2563EB] text-white hover:opacity-95 text-xs font-bold tracking-widest uppercase transition-all rounded-sm cursor-pointer shadow-lg"
                >
                  CONFIRM SPOT RESERVATION
                </button>
              </div>

              <div className="text-center text-[11px] text-neutral-500 font-mono">
                Aguda Branch: 9 Rasaq Gbadamosi Ave, Surulere
              </div>
            </form>
          ) : (
            <div className="text-center py-4 space-y-5">
              <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-1">
                  SPOT RESERVED
                </span>
                <h3 className="font-serif-luxury text-2xl text-white font-normal mb-1">
                  We'll see you on the floor, {name}
                </h3>
                <p className="text-xs text-neutral-300 font-light leading-relaxed max-w-sm mx-auto">
                  Your mat/bike is held for <strong className="text-white">{gymClass.title}</strong> at <strong className="text-white">{gymClass.time}</strong> with {gymClass.instructor}.
                </p>
              </div>

              <div className="bg-[#12141e] border border-neutral-800 p-4 rounded text-xs font-mono text-neutral-300 space-y-1">
                <div>Location: 9 Rasaq Gbadamosi Ave, Aguda</div>
                <div className="text-blue-300">Bring workout towel & water bottle</div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <a
                  href={`https://wa.me/2347069651085?text=Hello%20Fitness%20Options%20Aguda,%20I%20just%20booked%20${encodeURIComponent(
                    gymClass.title
                  )}%20at%20${gymClass.time}%20for%20${encodeURIComponent(name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold tracking-widest uppercase rounded-sm flex items-center justify-center gap-2"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5" />
                  <span>CONFIRM VIA WHATSAPP</span>
                </a>

                <button
                  onClick={handleClose}
                  className="px-5 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-semibold tracking-widest uppercase rounded-sm"
                >
                  CLOSE
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
