import React, { useState } from 'react';
import { CorporateWellness } from '../components/CorporateWellness.tsx';
import { Building2, Users, TrendingUp, HeartPulse, FileText, CheckCircle2, Calculator, Sparkles, Shield, ArrowRight, Check, Zap } from 'lucide-react';
import { CLUB_INFO, IMAGES } from '../data/clubData.ts';
import { WhatsAppIcon } from '../components/WhatsAppIcon.tsx';

interface CorporatePageProps {
  onOpenCorporateModal: () => void;
}

export const CorporatePage: React.FC<CorporatePageProps> = ({ onOpenCorporateModal }) => {
  const [employeeCount, setEmployeeCount] = useState(15);
  const [billingCycle, setBillingCycle] = useState<'annual' | 'quarterly'>('annual');

  // Corporate tier pricing
  const perEmployeeMonthly = employeeCount >= 50 ? 22000 : employeeCount >= 20 ? 25000 : 28000;
  const cycleMonths = billingCycle === 'annual' ? 12 : 3;
  const discountMultiplier = billingCycle === 'annual' ? 0.85 : 1.0;
  const totalPerEmployee = Math.round(perEmployeeMonthly * cycleMonths * discountMultiplier);
  const totalCorporateBudget = totalPerEmployee * employeeCount;

  const corporateBenefits = [
    {
      icon: TrendingUp,
      title: 'Combat Executive Burnout',
      desc: 'Lagos traffic, long office hours, and high-pressure targets wear down your staff. Regular exercise and sauna recovery restore mental clarity and stamina.',
    },
    {
      icon: HeartPulse,
      title: 'Lower Health Insurance Claims',
      desc: 'Proactive physical conditioning lowers risk of hypertension, cardiovascular issues, and repetitive strain injuries, stabilizing corporate HMO premiums.',
    },
    {
      icon: Users,
      title: 'Attract & Retain Top Lagos Talent',
      desc: 'In Nigeria’s competitive corporate landscape, an active premium fitness benefit is a major differentiator for executive and tech talent recruitment.',
    },
    {
      icon: FileText,
      title: 'Monthly HR Attendance Analytics',
      desc: 'Receive transparent monthly usage reports tracking check-ins, personal training sessions, and health milestones for your corporate wellness audit.',
    },
  ];

  return (
    <div className="bg-[#07080c] min-h-screen">
      {/* Full-Cover Hero Section with Corporate Team Fitness Image */}
      <section className="relative min-h-[75vh] lg:min-h-[82vh] w-full flex flex-col justify-center items-center text-center overflow-hidden pt-28 pb-16 px-4 sm:px-6 lg:px-8 border-b border-neutral-800 select-none">
        {/* Full-Cover Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.corporateHero}
            alt="Corporate team executive training session at Fitness Options"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center filter brightness-[0.48] contrast-[1.12]"
          />
          {/* Cinematic Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#07080c] via-black/55 to-black/75" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
          {/* Subtle Ambient Brand Glows */}
          <div className="absolute top-1/4 -right-32 w-96 h-96 bg-red-600/15 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute top-1/3 -left-32 w-96 h-96 bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
        </div>

        {/* Foreground Centered Content */}
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center space-y-6">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] max-w-3xl drop-shadow-md">
            Energize Your Workforce,{' '}
            <span className="bg-gradient-to-r from-red-500 via-rose-400 to-blue-500 bg-clip-text text-transparent">
              Elevate Performance
            </span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-200 font-light leading-relaxed max-w-2xl drop-shadow">
            Tailored health, fitness, and recovery plans for Nigerian corporations, financial institutions,
            multinationals, and growing SMEs located across Lagos.
          </p>

          {/* Quick Corporate Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-3xl pt-2">
            <div className="flex flex-col items-center p-3 rounded-xl bg-black/60 border border-neutral-700/60 backdrop-blur-md">
              <Check className="w-5 h-5 text-emerald-400 mb-1" />
              <span className="text-xs font-bold text-white">Tiered Group Rates</span>
              <span className="text-[10px] text-neutral-400 font-mono">Up to 35% Off</span>
            </div>

            <div className="flex flex-col items-center p-3 rounded-xl bg-black/60 border border-neutral-700/60 backdrop-blur-md">
              <Zap className="w-5 h-5 text-amber-400 mb-1" />
              <span className="text-xs font-bold text-white">Flexible Slot Transfer</span>
              <span className="text-[10px] text-neutral-400 font-mono">Staff Reassignment</span>
            </div>

            <div className="flex flex-col items-center p-3 rounded-xl bg-black/60 border border-neutral-700/60 backdrop-blur-md">
              <FileText className="w-5 h-5 text-blue-400 mb-1" />
              <span className="text-xs font-bold text-white">Monthly HR Reports</span>
              <span className="text-[10px] text-neutral-400 font-mono">Attendance Analytics</span>
            </div>

            <div className="flex flex-col items-center p-3 rounded-xl bg-black/60 border border-neutral-700/60 backdrop-blur-md">
              <Shield className="w-5 h-5 text-red-400 mb-1" />
              <span className="text-xs font-bold text-white">Tax-Compliant Invoicing</span>
              <span className="text-[10px] text-neutral-400 font-mono">TIN / FIRS Ready</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenCorporateModal}
              className="px-7 py-3.5 rounded-full bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-500 hover:to-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-red-900/40 flex items-center gap-2 transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Request Corporate Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="https://wa.me/2347069651085?text=Hello%20Fitness%20Options%20Aguda,%20I%20am%20inquiring%20about%20a%20Corporate%20Wellness%20package%20for%20our%20company"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-black/70 hover:bg-neutral-900 border border-neutral-700 text-white font-semibold text-xs uppercase tracking-wider flex items-center gap-2 backdrop-blur-md transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
              <span>Talk to Corporate Concierge</span>
            </a>
          </div>
        </div>
      </section>

      {/* Why Invest Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
        <div className="text-center mb-12">
          <span className="text-xs font-mono text-red-400 uppercase tracking-widest font-semibold">
            THE BUSINESS VALUE
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            Why Leading Nigerian Companies Partner with Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {corporateBenefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 hover:border-neutral-700 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-xs text-neutral-400 font-light leading-relaxed">{benefit.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Interactive Corporate Estimator */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
        <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 sm:p-10 relative overflow-hidden">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white">Corporate Investment Estimator</h3>
              <p className="text-xs text-neutral-400">Estimate your company’s monthly or annual wellness allocation</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {/* Employee Slider */}
              <div>
                <div className="flex justify-between items-center text-xs font-mono mb-2">
                  <span className="text-neutral-300">Enrolled Team Members:</span>
                  <span className="text-blue-400 font-bold text-base">{employeeCount} Employees</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="100"
                  step="5"
                  value={employeeCount}
                  onChange={(e) => setEmployeeCount(Number(e.target.value))}
                  className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <div className="flex justify-between text-[10px] text-neutral-500 mt-1 font-mono">
                  <span>5 Staff (SME)</span>
                  <span>25 Staff (Growing Tech)</span>
                  <span>50 Staff (Mid-Corp)</span>
                  <span>100+ Staff (Enterprise)</span>
                </div>
              </div>

              {/* Billing Cycle */}
              <div>
                <span className="block text-xs font-mono text-neutral-300 mb-2">Billing Term:</span>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setBillingCycle('annual')}
                    className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                      billingCycle === 'annual'
                        ? 'bg-red-500/10 border-red-500 text-white'
                        : 'bg-black/30 border-neutral-800 text-neutral-400 hover:border-neutral-700'
                    }`}
                  >
                    <div className="text-xs font-bold">Annual Agreement</div>
                    <div className="text-[10px] text-emerald-400">Save 15% on group rates</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setBillingCycle('quarterly')}
                    className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                      billingCycle === 'quarterly'
                        ? 'bg-red-500/10 border-red-500 text-white'
                        : 'bg-black/30 border-neutral-800 text-neutral-400 hover:border-neutral-700'
                    }`}
                  >
                    <div className="text-xs font-bold">Quarterly Term</div>
                    <div className="text-[10px] text-neutral-400">Billed every 90 days</div>
                  </button>
                </div>
              </div>

              {/* Included perks */}
              <div className="p-4 rounded-xl bg-black/40 border border-neutral-800/80 space-y-2 text-xs text-neutral-300">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold text-[11px] uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" /> Included in Corporate Partnership:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-neutral-400">
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-blue-400" /> Full Gym & Studio Classes</span>
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-blue-400" /> Steam & Sauna Access</span>
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-blue-400" /> Monthly HR Attendance Logs</span>
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-blue-400" /> 1-for-1 Staff Substitution Policy</span>
                </div>
              </div>
            </div>

            {/* Total Budget Card */}
            <div className="bg-black/60 border border-neutral-800 rounded-xl p-5 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">Estimated Corporate Investment</span>
                <div className="text-3xl font-extrabold text-white mt-1">
                  ₦{totalCorporateBudget.toLocaleString()}
                </div>
                <div className="text-[11px] text-neutral-400 mt-1 font-mono">
                  Approx. ₦{Math.round(totalCorporateBudget / employeeCount / cycleMonths).toLocaleString()}/employee/mo
                </div>

                <div className="mt-4 pt-4 border-t border-neutral-800 text-[11px] space-y-1.5 text-neutral-400">
                  <div className="flex justify-between">
                    <span>Enrolled Headcount:</span>
                    <span className="text-white font-semibold">{employeeCount} Staff</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Term:</span>
                    <span className="text-white">{billingCycle === 'annual' ? '12 Months' : '3 Months'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Subsidized Rate:</span>
                    <span className="text-emerald-400 font-semibold">
                      ₦{Math.round(totalCorporateBudget / employeeCount).toLocaleString()}/staff
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={onOpenCorporateModal}
                className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-[#EF4444] to-[#2563EB] text-white text-xs font-bold tracking-wider uppercase hover:opacity-90 transition-opacity cursor-pointer"
              >
                Request Official Quotation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Corporate Wellness Details */}
      <CorporateWellness onOpenCorporateModal={onOpenCorporateModal} />

      {/* Corporate Invoicing FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white">Corporate Program FAQ</h2>
          <p className="text-xs text-neutral-400 mt-1">Details on contracts, tax deductions, and employee roster management</p>
        </div>

        <div className="space-y-4">
          <div className="p-5 rounded-xl bg-neutral-900/40 border border-neutral-800/80">
            <h4 className="text-sm font-semibold text-white mb-1.5">Can we substitute staff members if an employee resigns?</h4>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              Yes! Unlike individual memberships, corporate memberships are company-owned. Simply send an email to our corporate accounts desk, and we will transfer the slot to your new employee immediately at zero transfer fee.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-neutral-900/40 border border-neutral-800/80">
            <h4 className="text-sm font-semibold text-white mb-1.5">Do you issue official FIRS-compliant tax invoices and receipts?</h4>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              Yes. All corporate packages are invoiced with proper company name, RC number, and official receipts suitable for corporate accounting and tax filing.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-neutral-900/40 border border-neutral-800/80">
            <h4 className="text-sm font-semibold text-white mb-1.5">Can our company book the facility for a private weekend team fitness day?</h4>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              Yes. We host private corporate fitness days including custom bootcamps, aerobic classes, nutrition seminars, and recovery sessions for teams of up to 80 people.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
