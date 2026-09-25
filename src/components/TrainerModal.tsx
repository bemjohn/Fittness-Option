import React, { useState } from 'react';
import { X, CheckCircle2, Award, Calendar, Phone } from 'lucide-react';
import { Trainer } from '../types.ts';
import { CLUB_INFO } from '../data/clubData.ts';
import { WhatsAppIcon } from './WhatsAppIcon.tsx';

interface TrainerModalProps {
  trainer: Trainer | null;
  onClose: () => void;
}

export const TrainerModal: React.FC<TrainerModalProps> = ({ trainer, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [goal, setGoal] = useState('hypertrophy');
  const [sent, setSent] = useState(false);

  if (!trainer) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSent(true);
  };

  const handleClose = () => {
    setSent(false);
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
              FITNESS OPTIONS · MASTER CONSULTATION
            </div>
            <h3 className="font-serif-luxury text-2xl text-white font-normal">
              1-on-1 with {trainer.name}
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

        {/* Content */}
        <div className="p-6 md:p-8">
          {!sent ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="flex items-center gap-3 p-3 bg-[#12141e] border border-neutral-800 rounded text-xs">
                <Award className="w-4 h-4 text-[#EF4444] shrink-0" />
                <div>
                  <span className="text-white font-semibold">{trainer.role}</span>
                  <span className="text-blue-300 block text-[11px] font-mono">{trainer.experience}</span>
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
                  placeholder="e.g. Dapo Adeleke"
                  className="w-full bg-[#141620] border border-neutral-800 focus:border-[#2563EB] px-4 py-2.5 text-sm text-white rounded-sm outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-1.5">
                  Phone (Nigeria / WhatsApp) *
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

              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-1.5">
                  Primary Transformation Objective
                </label>
                <select
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className="w-full bg-[#141620] border border-neutral-800 focus:border-[#2563EB] px-4 py-2.5 text-sm text-white rounded-sm outline-none"
                >
                  <option value="hypertrophy">Muscle Hypertrophy & Density</option>
                  <option value="olympic">Olympic Weightlifting & Power</option>
                  <option value="metcon">Fat Loss & MetCon Threshold</option>
                  <option value="mobility">Joint Mobility & Decompression</option>
                  <option value="combat">Boxing Fundamentals & Agility</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-[#EF4444] to-[#2563EB] text-white hover:opacity-95 text-xs font-bold tracking-widest uppercase transition-all rounded-sm cursor-pointer shadow-lg"
                >
                  REQUEST CONSULTATION SESSION
                </button>
              </div>

              <div className="text-center text-[11px] text-neutral-500 font-mono">
                Conducted at Fitness Options Aguda Branch
              </div>
            </form>
          ) : (
            <div className="text-center py-4 space-y-5">
              <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs font-mono text-blue-400 uppercase tracking-widest block mb-1 font-semibold">
                  REQUEST LOGGED
                </span>
                <h3 className="font-serif-luxury text-2xl text-white font-normal mb-1">
                  Thank You, {name}
                </h3>
                <p className="text-xs text-neutral-300 font-light leading-relaxed max-w-sm mx-auto">
                  {trainer.name}’s scheduling concierge will reach out to you via WhatsApp at <strong className="text-white">{phone}</strong> within 3 business hours.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <a
                  href={`https://wa.me/2347069651085?text=Hello%20Fitness%20Options%20Aguda,%20I%20just%20requested%20a%201-on-1%20consultation%20with%20${encodeURIComponent(
                    trainer.name
                  )}%20for%20${encodeURIComponent(name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold tracking-widest uppercase rounded-sm flex items-center justify-center gap-2"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5" />
                  <span>SPEED UP VIA WHATSAPP</span>
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
