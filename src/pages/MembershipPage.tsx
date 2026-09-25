import React, { useState } from 'react';
import { MembershipTiers } from '../components/MembershipTiers.tsx';
import { Check, HelpCircle, Shield, CreditCard, Sparkles, ArrowRight, Calculator, MapPin, Star, Flame, Zap } from 'lucide-react';
import { CLUB_INFO, IMAGES } from '../data/clubData.ts';
import { WhatsAppIcon } from '../components/WhatsAppIcon.tsx';

interface MembershipPageProps {
  onOpenJoin: (planId?: string) => void;
}

export const MembershipPage: React.FC<MembershipPageProps> = ({ onOpenJoin }) => {
  // Calculator state
  const [calcMonths, setCalcMonths] = useState(3);
  const [includeTrainer, setIncludeTrainer] = useState(false);
  const [includeLocker, setIncludeLocker] = useState(true);

  // Calculate estimated total
  const baseMonthlyRate = calcMonths >= 12 ? 26666 : calcMonths >= 3 ? 31666 : 35000;
  const baseTotal = baseMonthlyRate * calcMonths;
  const trainerAddon = includeTrainer ? 40000 * calcMonths : 0;
  const lockerAddon = includeLocker ? 5000 * calcMonths : 0;
  const grandTotal = baseTotal + trainerAddon + lockerAddon;

  const faqs = [
    {
      q: 'Are there extra generator or fuel surcharges during power grid cuts?',
      a: 'Never. At Fitness Options Aguda, guaranteed 24/7 power backed by our industrial Lister generators and inverters is 100% baked into your subscription. You will never be asked for fuel levies.',
    },
    {
      q: 'Can I freeze or pause my membership if I travel outside Lagos?',
      a: 'Yes! Quarterly members can pause for up to 14 days, and Annual Diamond members can freeze their membership for up to 30 days with prior notice to the Aguda front desk.',
    },
    {
      q: 'What payment methods do you accept at the club?',
      a: 'We accept direct Nigerian bank transfer (Zenith Bank / GTBank), POS terminal payments (Mastercard, Visa, Verve) at reception, and corporate invoicing for registered businesses.',
    },
    {
      q: 'Are group fitness classes and sauna access included?',
      a: 'Yes! Monthly Gold, Quarterly, and Annual memberships include unlimited access to studio classes (Spinning, HIIT, Combat, Zumba) and full use of the Finnish sauna and steam room.',
    },
    {
      q: 'Can I bring a guest or workout buddy?',
      a: 'Quarterly and Annual members receive complimentary guest passes each month. Otherwise, your guest can obtain a single Day Pass for ₦5,000 at the front desk.',
    },
  ];

  return (
    <div className="bg-[#07080c] min-h-screen">
      {/* Full-Cover Hero Section with Facility Image */}
      <section className="relative min-h-[75vh] lg:min-h-[82vh] w-full flex flex-col justify-center items-center text-center overflow-hidden pt-28 pb-16 px-4 sm:px-6 lg:px-8 border-b border-neutral-800 select-none">
        {/* Full-Cover Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.membershipHero}
            alt="Members training at Fitness Options Aguda Branch Lagos"
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
            Invest in Your Health with{' '}
            <span className="bg-gradient-to-r from-red-500 via-rose-400 to-blue-500 bg-clip-text text-transparent">
              Uncompromising Quality
            </span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-200 font-light leading-relaxed max-w-2xl drop-shadow">
            Experience Lagos' premier athletic sanctuary. 14,000 sq ft of Olympic standard equipment, 
            daily signature classes, Finnish sauna & steam therapy, and 100% uninterrupted 24/7 generator power.
          </p>

          {/* Tagline Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1 rounded-full bg-black/60 border border-white/20 backdrop-blur-md text-neutral-300 text-xs tracking-wider">
            <span className="text-[11px] font-mono text-neutral-400 uppercase">Club Ethos:</span>
            <span className="text-white font-serif italic text-sm">"enjoy your body"</span>
          </div>

          {/* Trust Highlights Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-3xl pt-2">
            <div className="flex flex-col items-center p-3 rounded-xl bg-black/60 border border-neutral-700/60 backdrop-blur-md">
              <Check className="w-5 h-5 text-emerald-400 mb-1" />
              <span className="text-xs font-bold text-white">Zero Hidden Fees</span>
              <span className="text-[10px] text-neutral-400 font-mono">Transparent Pricing</span>
            </div>

            <div className="flex flex-col items-center p-3 rounded-xl bg-black/60 border border-neutral-700/60 backdrop-blur-md">
              <Zap className="w-5 h-5 text-amber-400 mb-1" />
              <span className="text-xs font-bold text-white">24/7 Lister Power</span>
              <span className="text-[10px] text-neutral-400 font-mono">Zero Grid Downtime</span>
            </div>

            <div className="flex flex-col items-center p-3 rounded-xl bg-black/60 border border-neutral-700/60 backdrop-blur-md">
              <Flame className="w-5 h-5 text-red-400 mb-1" />
              <span className="text-xs font-bold text-white">Sauna & Steam Bath</span>
              <span className="text-[10px] text-neutral-400 font-mono">All Plans Included</span>
            </div>

            <div className="flex flex-col items-center p-3 rounded-xl bg-black/60 border border-neutral-700/60 backdrop-blur-md">
              <Star className="w-5 h-5 fill-amber-400 text-amber-400 mb-1" />
              <span className="text-xs font-bold text-white">4.3 ★ Google Rating</span>
              <span className="text-[10px] text-neutral-400 font-mono">65+ Lagos Reviews</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => {
                const el = document.getElementById('pricing-plans');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-7 py-3.5 rounded-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-red-900/40 flex items-center gap-2 transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Explore Residency Plans</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={CLUB_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-black/70 hover:bg-neutral-900 border border-neutral-700 text-white font-semibold text-xs uppercase tracking-wider flex items-center gap-2 backdrop-blur-md transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Aguda Desk</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Pricing Cards */}
      <div id="pricing-plans" className="py-12">
        <MembershipTiers onSelectPlan={(planId) => onOpenJoin(planId)} />
      </div>

      {/* Interactive Fee Estimator */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
        <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 sm:p-10 relative overflow-hidden">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white">Interactive Membership Calculator</h3>
              <p className="text-xs text-neutral-400">Customize your duration and optional add-ons to see real-time Naira pricing</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {/* Duration Slider */}
              <div>
                <div className="flex justify-between items-center text-xs font-mono mb-2">
                  <span className="text-neutral-300">Commitment Period:</span>
                  <span className="text-red-400 font-bold text-sm">{calcMonths} {calcMonths === 1 ? 'Month' : 'Months'}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="12"
                  step="1"
                  value={calcMonths}
                  onChange={(e) => setCalcMonths(Number(e.target.value))}
                  className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-red-500"
                />
                <div className="flex justify-between text-[10px] text-neutral-500 mt-1 font-mono">
                  <span>1 Month (Monthly)</span>
                  <span>3 Months (Executive)</span>
                  <span>6 Months</span>
                  <span>12 Months (Diamond 25% Off)</span>
                </div>
              </div>

              {/* Add-ons */}
              <div className="space-y-3 pt-2">
                <label className="flex items-center justify-between p-3.5 rounded-xl bg-black/40 border border-neutral-800 cursor-pointer hover:border-neutral-700 transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={includeTrainer}
                      onChange={(e) => setIncludeTrainer(e.target.checked)}
                      className="w-4 h-4 rounded text-red-500 accent-red-500"
                    />
                    <div>
                      <div className="text-xs font-semibold text-white">Master Personal Trainer Pack</div>
                      <div className="text-[11px] text-neutral-400">8 private 1-on-1 coaching sessions per month</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 font-bold">+₦40,000/mo</span>
                </label>

                <label className="flex items-center justify-between p-3.5 rounded-xl bg-black/40 border border-neutral-800 cursor-pointer hover:border-neutral-700 transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={includeLocker}
                      onChange={(e) => setIncludeLocker(e.target.checked)}
                      className="w-4 h-4 rounded text-red-500 accent-red-500"
                    />
                    <div>
                      <div className="text-xs font-semibold text-white">Dedicated Reserved Locker Suite</div>
                      <div className="text-[11px] text-neutral-400">Leave your gym gear and shoes in your personal locker</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 font-bold">+₦5,000/mo</span>
                </label>
              </div>
            </div>

            {/* Total summary */}
            <div className="bg-black/60 border border-neutral-800 rounded-xl p-5 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">Estimated Total</span>
                <div className="text-3xl font-extrabold text-white mt-1">
                  ₦{grandTotal.toLocaleString()}
                </div>
                <div className="text-[11px] text-neutral-400 mt-1 font-mono">
                  Approx. ₦{Math.round(grandTotal / calcMonths).toLocaleString()}/month
                </div>

                <div className="mt-4 pt-4 border-t border-neutral-800 text-[11px] space-y-1.5 text-neutral-400">
                  <div className="flex justify-between">
                    <span>Base Membership:</span>
                    <span className="text-white">₦{baseTotal.toLocaleString()}</span>
                  </div>
                  {includeTrainer && (
                    <div className="flex justify-between">
                      <span>Personal Training:</span>
                      <span className="text-white">₦{trainerAddon.toLocaleString()}</span>
                    </div>
                  )}
                  {includeLocker && (
                    <div className="flex justify-between">
                      <span>Reserved Locker:</span>
                      <span className="text-white">₦{lockerAddon.toLocaleString()}</span>
                    </div>
                  )}
                </div>
              </div>

              <button
                onClick={() => onOpenJoin()}
                className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-[#EF4444] to-[#2563EB] text-white text-xs font-bold tracking-wider uppercase hover:opacity-90 transition-opacity"
              >
                Apply for this Plan
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison Matrix */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-white">Plan Comparison Breakdown</h2>
          <p className="text-xs text-neutral-400 mt-1">Side-by-side comparison of membership benefits at Aguda</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border border-neutral-800 rounded-xl overflow-hidden">
            <thead className="bg-neutral-900/90 text-neutral-200 uppercase font-mono text-[11px]">
              <tr>
                <th className="p-4 border-b border-neutral-800">Privilege</th>
                <th className="p-4 border-b border-neutral-800 text-center">Day Pass (₦5k)</th>
                <th className="p-4 border-b border-neutral-800 text-center">Monthly Gold (₦35k)</th>
                <th className="p-4 border-b border-neutral-800 text-center">Quarterly (₦95k)</th>
                <th className="p-4 border-b border-neutral-800 text-center text-red-400">Annual Diamond (₦320k)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-850 bg-black/40 text-neutral-300">
              <tr>
                <td className="p-4 font-semibold text-white">Full Strength & Cardio Floor</td>
                <td className="p-4 text-center">Single Day</td>
                <td className="p-4 text-center text-emerald-400">Unlimited</td>
                <td className="p-4 text-center text-emerald-400">Unlimited</td>
                <td className="p-4 text-center text-emerald-400">VIP Priority</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-white">Group Studio Classes</td>
                <td className="p-4 text-center text-neutral-500">—</td>
                <td className="p-4 text-center text-emerald-400">Included</td>
                <td className="p-4 text-center text-emerald-400">Included</td>
                <td className="p-4 text-center text-emerald-400">Priority Booking</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-white">Finnish Sauna & Steam Room</td>
                <td className="p-4 text-center">₦2,000 Add-on</td>
                <td className="p-4 text-center text-emerald-400">Unlimited</td>
                <td className="p-4 text-center text-emerald-400">Unlimited</td>
                <td className="p-4 text-center text-emerald-400">Unlimited + Guest</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-white">Complimentary Guest Passes</td>
                <td className="p-4 text-center text-neutral-500">—</td>
                <td className="p-4 text-center text-neutral-500">—</td>
                <td className="p-4 text-center">1 Pass / mo</td>
                <td className="p-4 text-center text-emerald-400">3 Passes / mo</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-white">Membership Freeze Allowance</td>
                <td className="p-4 text-center text-neutral-500">—</td>
                <td className="p-4 text-center text-neutral-500">—</td>
                <td className="p-4 text-center">14 Days</td>
                <td className="p-4 text-center text-emerald-400">Up to 30 Days</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-white">Initial Master Coach Assessment</td>
                <td className="p-4 text-center text-neutral-500">—</td>
                <td className="p-4 text-center text-emerald-400">1 Session</td>
                <td className="p-4 text-center text-emerald-400">2 Sessions</td>
                <td className="p-4 text-center text-emerald-400">Full Assessment + Plan</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Payment Channels in Lagos */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
        <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <CreditCard className="w-5 h-5 text-blue-400" />
            <h3 className="text-base sm:text-lg font-bold text-white">Convenient Nigerian Payment Channels</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs text-neutral-300">
            <div className="p-4 rounded-xl bg-neutral-900/50 border border-neutral-800">
              <div className="font-bold text-white mb-1">Direct Bank Wire / Transfer</div>
              <p className="text-neutral-400 text-[11px] leading-relaxed">
                Pay directly into our club bank accounts with instant notification. Forward receipt via WhatsApp for immediate registration.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-neutral-900/50 border border-neutral-800">
              <div className="font-bold text-white mb-1">POS Terminal at Aguda Desk</div>
              <p className="text-neutral-400 text-[11px] leading-relaxed">
                Instant card payment at 9 Rasaq Gbadamosi Ave front desk using any Nigerian Mastercard, Visa, or Verve card.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-neutral-900/50 border border-neutral-800">
              <div className="font-bold text-white mb-1">Corporate Cheque & Invoicing</div>
              <p className="text-neutral-400 text-[11px] leading-relaxed">
                Available for corporate wellness partners and SME accounts with official tax invoices and company receipts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Membership FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1 text-red-400 text-xs font-mono uppercase tracking-wider mb-2">
            <HelpCircle className="w-4 h-4" /> Membership Queries
          </div>
          <h2 className="text-2xl font-bold text-white">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="p-5 rounded-xl bg-neutral-900/40 border border-neutral-800/80">
              <h4 className="text-sm font-semibold text-white mb-2">{faq.q}</h4>
              <p className="text-xs text-neutral-400 leading-relaxed font-light">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-red-950/40 via-neutral-900 to-blue-950/40 border border-neutral-800">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">Ready to Enjoy Your Body?</h3>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-md mx-auto mt-2">
            Sign up today online or visit our front desk at 9 Rasaq Gbadamosi Avenue, Aguda.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenJoin()}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#EF4444] to-[#2563EB] text-white text-xs font-bold tracking-wider uppercase shadow-lg shadow-red-900/30 hover:scale-105 transition-transform"
            >
              Select Your Plan
            </button>
            <a
              href="https://wa.me/2347069651085?text=Hello%20Fitness%20Options%20Aguda,%20I'd%20like%20to%20inquire%20about%20membership%20plans"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-bold tracking-wider uppercase transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
