import React from 'react';
import { TRAINERS } from '../data/clubData.ts';
import { Trainer } from '../types.ts';
import { Award, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

interface PersonalTrainingProps {
  onConsultTrainer: (trainer: Trainer) => void;
}

export const PersonalTraining: React.FC<PersonalTrainingProps> = ({ onConsultTrainer }) => {
  return (
    <section id="training" className="py-24 md:py-32 bg-[#08090d] text-neutral-200 border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-xs font-semibold tracking-[0.25em] uppercase text-neutral-400 mb-3 flex items-center gap-2">
              <span className="text-[#EF4444]">INDIVIDUALIZED EXCELLENCE</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span className="text-[#2563EB]">MASTER COACHES</span>
            </div>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl text-white font-normal">
              Coached by the master tier.
            </h2>
          </div>
          <p className="text-neutral-400 text-sm md:text-base max-w-md font-light">
            No generic routines. Every personal training protocol is built upon biometric assessment, joint biomechanics, and periodized progression tailored for your lifestyle in Lagos.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRAINERS.map((trainer) => (
            <div
              key={trainer.id}
              className="bg-[#0c0e15] border border-neutral-800 rounded-sm overflow-hidden flex flex-col justify-between group hover:border-[#2563EB]/70 transition-all duration-300"
            >
              <div>
                {/* Trainer Photo with Fallback Container */}
                <div className="relative h-64 bg-neutral-900 overflow-hidden">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                    className="w-full h-full object-cover object-top filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                  {/* Styled Monogram Fallback underneath */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 -z-10 text-neutral-600">
                    <span className="font-serif-luxury text-5xl font-bold">{trainer.name[0]}</span>
                    <span className="text-xs uppercase tracking-widest mt-1">Master Coach</span>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e15] via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-[11px] font-mono tracking-wider text-blue-400 uppercase block font-semibold">
                      {trainer.experience}
                    </span>
                    <h3 className="font-serif-luxury text-xl md:text-2xl text-white font-normal">
                      {trainer.name}
                    </h3>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5">
                  <div className="text-xs text-neutral-400 font-mono uppercase tracking-wider mb-3">
                    {trainer.role}
                  </div>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed mb-4">
                    {trainer.bio}
                  </p>

                  {/* Certifications */}
                  <div className="space-y-1.5 pt-3 border-t border-neutral-800/80 mb-2">
                    {trainer.certifications.map((cert, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-[11px] text-neutral-300">
                        <Award className="w-3 h-3 text-[#EF4444] shrink-0" />
                        <span className="truncate">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => onConsultTrainer(trainer)}
                  className="w-full py-2.5 bg-neutral-900 hover:bg-gradient-to-r hover:from-[#EF4444] hover:to-[#2563EB] text-neutral-300 hover:text-white border border-neutral-800 hover:border-transparent text-xs font-bold tracking-widest uppercase transition-all duration-200 rounded-sm cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>REQUEST 1-ON-1</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
