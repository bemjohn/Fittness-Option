import React from 'react';
import { REVIEWS, CLUB_INFO } from '../data/clubData.ts';
import { Star, CheckCircle, ExternalLink, Quote } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-[#0b0d10] text-neutral-200 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-xs font-semibold tracking-[0.25em] uppercase text-neutral-400 mb-3 flex items-center gap-2">
              <span>MEMBER DISPATCHES</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span>VERIFIED GOOGLE PROOF</span>
            </div>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl text-white font-normal">
              4.3 Stars. 65+ Voices.
            </h2>
          </div>

          <div className="flex items-center gap-4 bg-[#12141a] border border-neutral-800 p-4 rounded-sm">
            <div className="text-center pr-4 border-r border-neutral-800">
              <div className="font-serif-luxury text-3xl font-bold text-white tabular-nums">4.3</div>
              <div className="text-[10px] text-neutral-400 font-mono uppercase tracking-wider">Overall</div>
            </div>
            <div>
              <div className="flex text-amber-400 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < 4 ? 'fill-amber-400 stroke-amber-400' : 'fill-amber-400/40 stroke-amber-400'
                    }`}
                  />
                ))}
              </div>
              <a
                href={CLUB_INFO.googleMapsUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="text-xs text-neutral-400 hover:text-white flex items-center gap-1 transition-colors"
              >
                <span>Read all 65 reviews on Google</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#0e1014] border border-neutral-800 p-8 rounded-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono text-neutral-500">{rev.relativeTime}</span>
                </div>

                <p className="text-neutral-300 text-sm md:text-base font-light leading-relaxed mb-6 italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-neutral-800/80 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-neutral-800 flex items-center justify-center font-bold text-neutral-300 text-xs">
                    {rev.author[0]}
                  </div>
                  <span className="text-white font-medium">{rev.author}</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-neutral-400 font-mono">
                  <CheckCircle className="w-3 h-3 text-emerald-400" />
                  <span>Verified Google Review</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
