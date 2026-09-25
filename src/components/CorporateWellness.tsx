import React from 'react';
import { 
  Building2, 
  Users2, 
  TrendingUp, 
  FileCheck2, 
  Award, 
  HeartHandshake, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2,
  Briefcase
} from 'lucide-react';

interface CorporateWellnessProps {
  onOpenCorporateModal: () => void;
}

export const CorporateWellness: React.FC<CorporateWellnessProps> = ({ onOpenCorporateModal }) => {
  const corporateTiers = [
    {
      id: 'growth',
      name: 'Emerging & Tech Teams',
      badge: '15% CORPORATE SAVINGS',
      teamSize: '5 – 15 Employees',
      rate: '₦38,250',
      period: 'per employee / mo',
      desc: 'Ideal for Lagos tech startups, boutique creative agencies, and growing ventures investing in peak staff vitality.',
      features: [
        'Universal all-hours Aguda Branch access',
        'Full free weights, rig, & boutique classes',
        'Monthly aggregate attendance report for HR',
        'Flexible month-to-month billing or quarterly invoice',
        'Initial biometric body composition scans',
      ],
      cta: 'SELECT GROWTH TIER',
      accent: 'border-neutral-800 hover:border-blue-700/80',
    },
    {
      id: 'enterprise',
      name: 'Corporate & Banking',
      badge: '25% CORPORATE SAVINGS',
      popular: true,
      teamSize: '16 – 50 Employees',
      rate: '₦33,750',
      period: 'per employee / mo',
      desc: 'Engineered for financial institutions, consulting firms, and commercial enterprises seeking high-impact wellness returns.',
      features: [
        'All Aguda Branch privileges + Hydrothermal Sauna suite',
        'Dedicated private team bootcamps & spin sessions',
        'On-site desk posture & ergonomic workshop by Coach Aisha',
        'Direct corporate invoicing (FIRS/LIRS compliant Tax Invoices)',
        'Quarterly executive fitness assessments & progress audits',
        'Dedicated corporate concierge account manager',
      ],
      cta: 'REQUEST CORPORATE PACK',
      accent: 'border-[#2563EB] shadow-lg shadow-blue-950/40',
    },
    {
      id: 'conglomerate',
      name: 'Enterprise & Conglomerate',
      badge: '35% MAXIMUM SAVINGS',
      teamSize: '50+ Employees',
      rate: '₦29,250',
      period: 'per employee / mo',
      desc: 'Comprehensive multi-branch wellness partnership for Lagos conglomerates, telecom leaders, and FMCG giants.',
      features: [
        'Universal passport across all Fitness Options branches in Lagos',
        'Bespoke internal corporate fitness league & inter-dept games',
        'Executive tier pass with private laundry & VIP guest privileges',
        'HMO integration support (Reliance, AXA Mansard, Hygeia)',
        'Personalized executive nutrition guidance & desk ergonomics',
        'Annual C-Suite executive wellness retreat hosting',
      ],
      cta: 'CUSTOM ENTERPRISE QUOTE',
      accent: 'border-neutral-800 hover:border-red-700/80',
    },
  ];

  return (
    <section id="corporate" className="py-24 md:py-32 bg-[#08090d] text-neutral-200 border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold tracking-[0.25em] uppercase text-neutral-400 mb-3 flex items-center gap-2">
              <span className="text-[#2563EB]">NIGERIAN CORPORATE WELLNESS</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span className="text-[#EF4444]">EXECUTIVE PERFORMANCE</span>
            </div>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl text-white font-normal leading-[1.1]">
              Empower your Lagos team to enjoy their body.
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-neutral-400 text-sm md:text-base font-light leading-relaxed mb-4">
              Combat sedentary desk hours, Lagos traffic fatigue, and executive burnout. Fitness Options delivers measurable productivity boosts and lower health claims for Nigeria’s leading teams.
            </p>
            <div className="flex items-center gap-3 text-xs font-mono text-neutral-400">
              <span className="text-emerald-400 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> LIRS / FIRS Compliant
              </span>
              <span>•</span>
              <span>CAC Invoicing</span>
            </div>
          </div>
        </div>

        {/* 4 Quantitative Business Impacts */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-neutral-800/80 mb-16">
          <div className="space-y-1">
            <div className="font-serif-luxury text-3xl md:text-4xl text-white tabular-nums">-32%</div>
            <div className="text-xs uppercase tracking-wider text-neutral-400 font-medium">Sick Leave Claims</div>
            <div className="text-[11px] text-neutral-500 font-light">Documented reduction in absenteeism</div>
          </div>
          <div className="space-y-1">
            <div className="font-serif-luxury text-3xl md:text-4xl text-blue-400 tabular-nums">+44%</div>
            <div className="text-xs uppercase tracking-wider text-neutral-400 font-medium">Afternoon Energy</div>
            <div className="text-[11px] text-neutral-500 font-light">Sustained executive cognitive output</div>
          </div>
          <div className="space-y-1">
            <div className="font-serif-luxury text-3xl md:text-4xl text-white tabular-nums">100%</div>
            <div className="text-xs uppercase tracking-wider text-neutral-400 font-medium">Tax Deductible</div>
            <div className="text-[11px] text-neutral-500 font-light">Recognized staff welfare expenditure</div>
          </div>
          <div className="space-y-1">
            <div className="font-serif-luxury text-3xl md:text-4xl text-[#EF4444] tabular-nums">4.3 ★</div>
            <div className="text-xs uppercase tracking-wider text-neutral-400 font-medium">Employee Satisfaction</div>
            <div className="text-[11px] text-neutral-500 font-light">Rated top fringe benefit in Lagos</div>
          </div>
        </div>

        {/* Corporate Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-16">
          {corporateTiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative bg-[#0d0f17] border p-8 rounded-sm flex flex-col justify-between transition-all duration-300 hover:shadow-2xl ${tier.accent}`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#EF4444] to-[#2563EB] text-white text-[10px] font-bold tracking-widest uppercase rounded-full shadow-md">
                  MOST POPULAR FOR LAGOS FIRMS
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-400">
                    {tier.teamSize}
                  </span>
                  <span className="text-[11px] font-mono font-bold text-blue-400 bg-blue-950/40 px-2 py-0.5 rounded border border-blue-900/50">
                    {tier.badge}
                  </span>
                </div>

                <h3 className="font-serif-luxury text-2xl text-white font-normal mb-2">
                  {tier.name}
                </h3>
                <p className="text-xs text-neutral-400 font-light leading-relaxed mb-6">
                  {tier.desc}
                </p>

                <div className="mb-6 pb-6 border-b border-neutral-800/80">
                  <div className="flex items-baseline gap-1">
                    <span className="font-serif-luxury text-4xl text-white font-medium">
                      {tier.rate}
                    </span>
                    <span className="text-xs font-mono text-neutral-400">
                      /{tier.period}
                    </span>
                  </div>
                  <span className="text-[10px] text-neutral-500 font-mono block mt-1">
                    Standard Aguda rate: ₦45,000 / month
                  </span>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8 text-xs text-neutral-300">
                  {tier.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="font-light leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <button
                  onClick={onOpenCorporateModal}
                  className={`w-full py-3 text-xs font-bold tracking-widest uppercase rounded-sm transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-[#EF4444] to-[#2563EB] text-white hover:opacity-95 shadow-lg'
                      : 'bg-neutral-800 hover:bg-neutral-700 text-white'
                  }`}
                >
                  <span>{tier.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate Trust & HMO Partnerships */}
        <div className="p-8 bg-[#0d0f15] border border-neutral-800 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Seamless Integration with Nigerian HMOs & Corporate Insurers
            </h4>
            <p className="text-xs text-neutral-400 font-light">
              We work directly with major health maintenance organizations across Lagos: Reliance HMO, AXA Mansard, Hygeia, and Leadway Health.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenCorporateModal}
              className="px-6 py-2.5 bg-white text-black hover:bg-neutral-200 text-xs font-bold tracking-widest uppercase rounded-full transition-all cursor-pointer shadow-md"
            >
              REQUEST CORPORATE CONSULTATION
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
