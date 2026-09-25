import React, { useState } from 'react';
import { MEMBERSHIP_PLANS } from '../data/clubData.ts';
import { Check, ShieldCheck, Sparkles, ChevronDown, CreditCard, Building2, Zap } from 'lucide-react';

interface MembershipTiersProps {
  onSelectPlan: (planId: string) => void;
}

export const MembershipTiers: React.FC<MembershipTiersProps> = ({ onSelectPlan }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'all'>('monthly');

  const faqs = [
    {
      q: 'Where exactly is the Aguda Branch located?',
      a: 'We are situated at 9 Rasaq Gbadamosi Ave, Orile Iganmu / Aguda, Lagos 101241. We have secure gated parking and dedicated security staff on duty during all operational hours.',
    },
    {
      q: 'Are group fitness classes and sauna included in the membership?',
      a: 'Yes. All scheduled group fitness classes (MetCon, Iron Forge, Combat Boxing, Cycle, and Athletic Vinyasa) as well as the Nordic cedar dry sauna and cold shower facilities are fully included in our monthly memberships.',
    },
    {
      q: 'What Nigerian payment methods do you accept?',
      a: 'We accept Paystack, Flutterwave, Nigerian Naira Debit Cards (Mastercard, Visa, Verve), Direct Bank Transfer (GTBank, Access Bank, Zenith Bank, Moniepoint) with instant virtual verification, as well as POS payment at our front desk.',
    },
    {
      q: 'Can I try the gym before committing to a full monthly contract?',
      a: 'Yes. You can purchase an Executive Day Pass (₦5,000) or request a complimentary 1-Day Discovery Trial Pass through our booking concierge to test our rigs, locker rooms, and atmosphere.',
    },
    {
      q: 'What are your operational hours in Aguda?',
      a: 'We open at 6:00 AM on weekdays and close at 10:00 PM (Monday through Friday). On Saturday we operate 7:00 AM to 9:00 PM, and Sunday 8:00 AM to 7:00 PM.',
    },
    {
      q: 'Do you offer Corporate and Group memberships for Lagos offices?',
      a: 'Yes! We offer corporate wellness packages for companies of 5+ employees with discounts from 15% to 35%, tax invoices compliant with LIRS/FIRS, and monthly attendance reporting for HR.',
    },
  ];

  const displayedPlans =
    billingCycle === 'monthly'
      ? MEMBERSHIP_PLANS.filter((p) => p.id !== 'aguda-annual')
      : MEMBERSHIP_PLANS;

  return (
    <section id="membership" className="py-24 md:py-32 bg-[#090b10] text-neutral-200 border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-semibold tracking-[0.25em] uppercase text-neutral-400 mb-3 flex items-center justify-center gap-2">
            <span className="text-[#EF4444]">MEMBERSHIP RESIDENCY</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span className="text-[#2563EB]">LAGOS ACCESS</span>
          </div>
          <h2 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl text-white font-normal">
            Invest in your physical capital.
          </h2>
          <p className="mt-4 text-neutral-400 text-sm md:text-base font-light">
            Transparent pricing in Nigerian Naira (₦). Zero hidden joining penalties, full access to high-performance rigs, group classes, and restorative recovery.
          </p>

          {/* Toggle between All Plans and Monthly */}
          <div className="mt-8 inline-flex items-center p-1 bg-[#12151e] border border-neutral-800 rounded-full">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2 text-xs font-semibold tracking-wider uppercase rounded-full transition-all cursor-pointer ${
                billingCycle === 'monthly'
                  ? 'bg-gradient-to-r from-[#EF4444] to-[#2563EB] text-white shadow'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Standard Monthly Tiers
            </button>
            <button
              onClick={() => setBillingCycle('all')}
              className={`px-5 py-2 text-xs font-semibold tracking-wider uppercase rounded-full transition-all cursor-pointer ${
                billingCycle === 'all'
                  ? 'bg-gradient-to-r from-[#EF4444] to-[#2563EB] text-white shadow'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              All Plans + Annual VIP
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch mb-20">
          {displayedPlans.map((plan) => {
            const isHighlight = plan.popular;
            return (
              <div
                key={plan.id}
                className={`relative rounded-sm p-8 md:p-10 flex flex-col justify-between transition-all duration-300 ${
                  isHighlight
                    ? 'bg-[#0f121c] border-2 border-[#2563EB] shadow-2xl shadow-blue-950/40 md:-translate-y-2'
                    : 'bg-[#0c0e14] border border-neutral-800 hover:border-neutral-700'
                }`}
              >
                {/* Popular Marker */}
                {isHighlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#EF4444] to-[#2563EB] text-white text-[10px] font-bold tracking-[0.2em] uppercase py-1 px-4 rounded-full shadow-lg flex items-center gap-1.5 whitespace-nowrap">
                    <Sparkles className="w-3 h-3 fill-white" />
                    <span>MOST POPULAR IN LAGOS</span>
                  </div>
                )}

                <div>
                  <div className="text-[11px] font-mono tracking-widest uppercase text-blue-300 font-semibold mb-2">
                    {plan.subtitle}
                  </div>
                  <h3 className="font-serif-luxury text-3xl text-white mb-4">
                    {plan.name}
                  </h3>

                  {/* Price Block */}
                  <div className="mb-6 pb-6 border-b border-neutral-800/80">
                    <div className="flex items-baseline gap-2">
                      <span className="font-serif-luxury text-4xl sm:text-5xl text-white font-normal tabular-nums">
                        {plan.priceNaira}
                      </span>
                      <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                        / {plan.billingPeriod}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-400 mt-2 font-light">
                      {plan.idealFor}
                    </p>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 mb-8">
                    <div className="text-xs font-semibold tracking-wider uppercase text-neutral-400 mb-2">
                      Included Privileges
                    </div>
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3 text-xs md:text-sm text-neutral-300 font-light">
                        <Check className="w-4 h-4 text-[#EF4444] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-neutral-800/80">
                  <button
                    onClick={() => onSelectPlan(plan.id)}
                    className={`w-full py-3.5 text-xs font-bold tracking-[0.2em] uppercase rounded-sm transition-all cursor-pointer ${
                      isHighlight
                        ? 'bg-gradient-to-r from-[#EF4444] to-[#2563EB] hover:opacity-95 text-white shadow-lg'
                        : 'bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-700/80'
                    }`}
                  >
                    SELECT {plan.name.toUpperCase()}
                  </button>
                  <p className="text-center text-[10px] text-neutral-500 uppercase tracking-widest mt-3 font-mono">
                    Instant Nigerian Payment Activation
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Accepted Payment Channels in Nigeria */}
        <div className="p-6 bg-[#0c0e14] border border-neutral-800 rounded-sm mb-16 flex flex-wrap items-center justify-between gap-6 text-xs text-neutral-400">
          <div className="flex items-center gap-2">
            <CreditCard className="w-4 h-4 text-blue-400" />
            <span className="text-white font-medium uppercase tracking-wider">Accepted Payment Methods:</span>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-neutral-300 font-mono text-[11px]">
            <span className="px-2.5 py-1 bg-neutral-900 border border-neutral-800 rounded">Paystack (Cards, USSD, Apple Pay)</span>
            <span className="px-2.5 py-1 bg-neutral-900 border border-neutral-800 rounded">Flutterwave</span>
            <span className="px-2.5 py-1 bg-neutral-900 border border-neutral-800 rounded">Direct Nigerian Bank Transfer</span>
            <span className="px-2.5 py-1 bg-neutral-900 border border-neutral-800 rounded">Front Desk POS & Cash</span>
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto pt-6 border-t border-neutral-900">
          <h3 className="font-serif-luxury text-2xl md:text-3xl text-white text-center mb-8">
            Frequently Answered Questions
          </h3>

          <div className="divide-y divide-neutral-800/80">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className="py-5">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between text-left gap-4 text-sm md:text-base font-medium text-neutral-200 hover:text-white cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-neutral-400 transition-transform shrink-0 ${
                        isOpen ? 'rotate-180 text-white' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="mt-3 text-xs md:text-sm text-neutral-400 font-light leading-relaxed animate-fadeIn">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
