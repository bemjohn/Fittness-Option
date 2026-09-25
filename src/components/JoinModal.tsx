import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  QrCode, 
  ShieldCheck, 
  ArrowRight, 
  Download, 
  Sparkles, 
  CreditCard, 
  Building2, 
  Copy,
  Check
} from 'lucide-react';
import { MEMBERSHIP_PLANS, CLUB_INFO } from '../data/clubData.ts';
import { FitnessOptionsLogo } from './FitnessOptionsLogo.tsx';
import { WhatsAppIcon } from './WhatsAppIcon.tsx';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlanId?: string;
}

export const JoinModal: React.FC<JoinModalProps> = ({ isOpen, onClose, initialPlanId }) => {
  const [selectedPlan, setSelectedPlan] = useState<string>(initialPlanId || 'aguda-classic');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'paystack' | 'flutterwave' | 'bank_transfer' | 'front_desk'>('paystack');
  const [passType, setPassType] = useState<'membership' | 'trial'>('membership');
  const [submitted, setSubmitted] = useState(false);
  const [passCode, setPassCode] = useState('');
  const [copiedBank, setCopiedBank] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;
    const code = 'FO-AGUDA-' + Math.floor(100000 + Math.random() * 900000);
    setPassCode(code);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFullName('');
    setEmail('');
    setPhone('');
    onClose();
  };

  const currentPlan = MEMBERSHIP_PLANS.find((p) => p.id === selectedPlan) || MEMBERSHIP_PLANS[1];

  const handleCopyAccount = () => {
    navigator.clipboard.writeText('1012398471');
    setCopiedBank(true);
    setTimeout(() => setCopiedBank(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#0c0e15] border border-neutral-700/80 rounded-sm shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between p-6 border-b border-neutral-800 bg-[#080a0f]">
          <div className="flex items-center gap-3">
            <FitnessOptionsLogo size="sm" showTagline={false} />
            <div className="h-5 w-px bg-neutral-800 hidden sm:block" />
            <div className="text-[11px] font-mono tracking-widest uppercase text-neutral-400 hidden sm:block">
              Aguda Branch · Lagos
            </div>
          </div>
          <button
            onClick={handleReset}
            className="p-2 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8 overflow-y-auto">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Type Switcher */}
              <div className="grid grid-cols-2 gap-2 p-1 bg-[#131620] border border-neutral-800 rounded-md">
                <button
                  type="button"
                  onClick={() => setPassType('membership')}
                  className={`py-2 text-xs font-semibold tracking-wider uppercase rounded transition-all cursor-pointer ${
                    passType === 'membership'
                      ? 'bg-gradient-to-r from-[#EF4444] to-[#2563EB] text-white shadow'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  Full Membership
                </button>
                <button
                  type="button"
                  onClick={() => setPassType('trial')}
                  className={`py-2 text-xs font-semibold tracking-wider uppercase rounded transition-all cursor-pointer ${
                    passType === 'trial'
                      ? 'bg-gradient-to-r from-[#EF4444] to-[#2563EB] text-white shadow'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  Complimentary 1-Day Trial
                </button>
              </div>

              {/* Plan Choice (if membership) */}
              {passType === 'membership' && (
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 block">
                    Choose Your Residency Tier (Naira ₦)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {MEMBERSHIP_PLANS.slice(0, 3).map((plan) => {
                      const isSelected = selectedPlan === plan.id;
                      return (
                        <div
                          key={plan.id}
                          onClick={() => setSelectedPlan(plan.id)}
                          className={`p-3.5 rounded-sm border cursor-pointer transition-all ${
                            isSelected
                              ? 'bg-blue-950/40 border-[#2563EB] text-white shadow-md'
                              : 'bg-neutral-900/60 border-neutral-800 text-neutral-400 hover:border-neutral-700'
                          }`}
                        >
                          <div className="text-xs font-semibold truncate text-white">{plan.name}</div>
                          <div className="text-base font-serif-luxury text-white mt-1">
                            {plan.priceNaira}
                          </div>
                          <div className="text-[10px] text-blue-300 font-mono mt-0.5">
                            /{plan.billingPeriod}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* User Information */}
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Babatunde Adeleke"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-[#131620] border border-neutral-800 focus:border-[#2563EB] focus:outline-none rounded px-3.5 py-2.5 text-sm text-white placeholder-neutral-600"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-1.5">
                      Phone Number (Nigeria) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0706 965 1085 or +234..."
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#131620] border border-neutral-800 focus:border-[#2563EB] focus:outline-none rounded px-3.5 py-2.5 text-sm text-white placeholder-neutral-600 font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="babatunde@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#131620] border border-neutral-800 focus:border-[#2563EB] focus:outline-none rounded px-3.5 py-2.5 text-sm text-white placeholder-neutral-600 font-mono"
                  />
                </div>
              </div>

              {/* Nigerian Payment Channels */}
              {passType === 'membership' && (
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-2">
                    Payment Preference (Nigeria)
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                    {[
                      { id: 'paystack', label: 'Paystack', desc: 'Cards & USSD' },
                      { id: 'flutterwave', label: 'Flutterwave', desc: 'Instant Debit' },
                      { id: 'bank_transfer', label: 'Bank Transfer', desc: 'GTB / Zenith / Moniepoint' },
                      { id: 'front_desk', label: 'Front Desk', desc: 'POS at Aguda Branch' },
                    ].map((m) => (
                      <div
                        key={m.id}
                        onClick={() => setPaymentMethod(m.id as any)}
                        className={`p-2.5 rounded border cursor-pointer transition-all text-center ${
                          paymentMethod === m.id
                            ? 'bg-neutral-800 border-[#2563EB] text-white'
                            : 'bg-[#12141c] border-neutral-800 text-neutral-400 hover:border-neutral-700'
                        }`}
                      >
                        <div className="font-semibold">{m.label}</div>
                        <div className="text-[10px] text-neutral-500 mt-0.5">{m.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-[#EF4444] to-[#2563EB] hover:opacity-95 text-white text-xs font-bold tracking-widest uppercase transition-all rounded-sm shadow-xl flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>
                    {passType === 'membership'
                      ? `COMPLETE REGISTRATION (${currentPlan.priceNaira})`
                      : 'GENERATE COMPLIMENTARY 1-DAY PASS'}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="text-center text-[11px] text-neutral-500 font-mono flex items-center justify-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Instant membership card generation · Show at reception</span>
              </div>
            </form>
          ) : (
            /* Digital Pass Confirmation */
            <div className="text-center py-4 space-y-6">
              <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs font-mono text-[#EF4444] uppercase tracking-widest block mb-1">
                  OFFICIAL ACCESS PASS CONFIRMED
                </span>
                <h3 className="font-serif-luxury text-3xl text-white font-normal mb-1">
                  Welcome to Fitness Options
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 font-light max-w-md mx-auto">
                  Hello <strong className="text-white">{fullName}</strong>, your digital pass is ready for access at 9 Rasaq Gbadamosi Ave, Aguda.
                </p>
              </div>

              {/* Digital Pass Card styled with Brand Colors */}
              <div className="max-w-md mx-auto bg-gradient-to-b from-[#131622] to-[#0c0e16] border border-neutral-700/80 rounded-sm p-6 text-left shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-red-500/10 rounded-full blur-2xl pointer-events-none" />

                <div className="flex justify-between items-start pb-4 border-b border-neutral-800">
                  <div>
                    <FitnessOptionsLogo size="sm" showTagline={false} />
                    <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 block mt-1">
                      AGUDA BRANCH · LAGOS
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-mono uppercase text-emerald-400 block font-semibold">
                      VERIFIED ACCESS
                    </span>
                    <span className="text-xs font-mono text-white font-bold">{passCode}</span>
                  </div>
                </div>

                <div className="py-4 space-y-2 text-xs font-mono">
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Member:</span>
                    <span className="text-white font-medium">{fullName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Pass Type:</span>
                    <span className="text-blue-300 font-medium">
                      {passType === 'membership' ? currentPlan.name : 'Complimentary 1-Day Trial'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Location:</span>
                    <span className="text-white">9 Rasaq Gbadamosi Ave, Aguda</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Hours:</span>
                    <span className="text-emerald-400">Open till 10:00 PM</span>
                  </div>
                </div>

                {/* Bank transfer info if selected */}
                {paymentMethod === 'bank_transfer' && passType === 'membership' && (
                  <div className="p-3 bg-neutral-900/90 border border-neutral-800 rounded text-xs space-y-1 my-2">
                    <div className="flex justify-between items-center text-neutral-400">
                      <span>GTBank Dedicated Account:</span>
                      <button
                        onClick={handleCopyAccount}
                        className="text-blue-400 hover:text-white flex items-center gap-1 text-[11px]"
                      >
                        {copiedBank ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                        <span>{copiedBank ? 'Copied' : 'Copy'}</span>
                      </button>
                    </div>
                    <div className="font-mono text-white font-bold">1012398471</div>
                    <div className="text-[10px] text-neutral-500">Account Name: Fitness Options Aguda</div>
                  </div>
                )}

                <div className="pt-3 border-t border-neutral-800 flex items-center justify-between text-[11px] text-neutral-400">
                  <span>Show this screen or quote {passCode} at front desk</span>
                  <QrCode className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <a
                  href={`https://wa.me/2347069651085?text=Hello%20Fitness%20Options%20Aguda,%20I%20just%20generated%20my%20pass%20(${passCode})%20for%20${encodeURIComponent(
                    fullName
                  )}.%20Looking%20forward%20to%20training!`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold tracking-widest uppercase rounded-sm transition-colors flex items-center justify-center gap-2"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>NOTIFY CONCIERGE ON WHATSAPP</span>
                </a>

                <button
                  onClick={handleReset}
                  className="px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-semibold tracking-widest uppercase rounded-sm transition-colors"
                >
                  DONE
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
