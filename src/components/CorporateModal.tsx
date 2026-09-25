import React, { useState } from 'react';
import { X, Building2, CheckCircle2, Phone, Mail, FileText, ArrowRight, ShieldCheck, Download } from 'lucide-react';
import { FitnessOptionsLogo } from './FitnessOptionsLogo.tsx';

interface CorporateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CorporateModal: React.FC<CorporateModalProps> = ({ isOpen, onClose }) => {
  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [teamSize, setTeamSize] = useState('16-50');
  const [subsidyModel, setSubsidyModel] = useState('full');
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [referenceCode, setReferenceCode] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!companyName || !contactName || !phone) return;
    const ref = 'FO-CORP-' + Math.floor(100000 + Math.random() * 900000);
    setReferenceCode(ref);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setCompanyName('');
    setContactName('');
    setEmail('');
    setPhone('');
    setAdditionalNotes('');
    onClose();
  };

  // Estimate monthly rate based on team size
  const estimateRate = () => {
    switch (teamSize) {
      case '5-15':
        return { perHead: '₦38,250', discount: '15% Corporate Savings' };
      case '16-50':
        return { perHead: '₦33,750', discount: '25% Corporate Savings' };
      case '50+':
        return { perHead: '₦29,250', discount: '35% Enterprise Savings' };
      default:
        return { perHead: '₦33,750', discount: '25% Corporate Savings' };
    }
  };

  const estimate = estimateRate();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#0e1017] border border-neutral-700/80 rounded-sm shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between p-6 border-b border-neutral-800 bg-[#0a0c12]">
          <div className="flex items-center gap-3">
            <FitnessOptionsLogo size="sm" showTagline={false} />
            <div className="h-6 w-px bg-neutral-800 hidden sm:block" />
            <div className="text-xs font-mono uppercase text-neutral-400 tracking-wider hidden sm:block">
              Corporate Wellness Division
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
              <div>
                <h3 className="font-serif-luxury text-2xl md:text-3xl text-white font-normal mb-2">
                  Request Lagos Corporate Wellness Proposal
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                  Tailored fitness solutions for forward-thinking Nigerian organizations. FIRS-compliant tax invoicing, dedicated account manager, and executive health tracking.
                </p>
              </div>

              {/* Company Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-1.5">
                    Company / Organization Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Zenith Tech Ltd, Flutterwave"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full bg-[#14161f] border border-neutral-800 focus:border-[#2563EB] focus:outline-none rounded px-3.5 py-2.5 text-sm text-white placeholder-neutral-600"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-1.5">
                    Estimated Eligible Team Size *
                  </label>
                  <select
                    value={teamSize}
                    onChange={(e) => setTeamSize(e.target.value)}
                    className="w-full bg-[#14161f] border border-neutral-800 focus:border-[#2563EB] focus:outline-none rounded px-3.5 py-2.5 text-sm text-white"
                  >
                    <option value="5-15">5 – 15 Team Members (15% off)</option>
                    <option value="16-50">16 – 50 Team Members (25% off)</option>
                    <option value="50+">50+ Enterprise Tier (35% off)</option>
                  </select>
                </div>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-1.5">
                    Lead HR / Executive Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Olumide Adeleke"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="w-full bg-[#14161f] border border-neutral-800 focus:border-[#2563EB] focus:outline-none rounded px-3.5 py-2.5 text-sm text-white placeholder-neutral-600"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-1.5">
                    Official Work Phone (Nigeria) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 0802 345 6789 or +234..."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#14161f] border border-neutral-800 focus:border-[#2563EB] focus:outline-none rounded px-3.5 py-2.5 text-sm text-white placeholder-neutral-600 font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-1.5">
                  Corporate Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="hr@yourcompany.com.ng"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#14161f] border border-neutral-800 focus:border-[#2563EB] focus:outline-none rounded px-3.5 py-2.5 text-sm text-white placeholder-neutral-600 font-mono"
                />
              </div>

              {/* Subsidy Structure */}
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-2">
                  Preferred Corporate Sponsorship Model
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                  {[
                    { id: 'full', label: '100% Employer Funded', desc: 'Maximum executive productivity benefit' },
                    { id: 'shared', label: '50/50 Co-Sponsored', desc: 'Shared investment with employees' },
                    { id: 'discount', label: 'Payroll Group Discount', desc: 'Company-negotiated staff rate' },
                  ].map((model) => (
                    <div
                      key={model.id}
                      onClick={() => setSubsidyModel(model.id)}
                      className={`p-3 rounded border cursor-pointer transition-all ${
                        subsidyModel === model.id
                          ? 'bg-neutral-800 border-[#2563EB] text-white'
                          : 'bg-[#12141c] border-neutral-800 text-neutral-400 hover:border-neutral-700'
                      }`}
                    >
                      <div className="font-semibold">{model.label}</div>
                      <div className="text-[10px] text-neutral-500 mt-1">{model.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Estimate Box */}
              <div className="p-4 bg-gradient-to-r from-blue-950/30 to-red-950/20 border border-blue-900/40 rounded-sm flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-mono tracking-wider text-blue-300 uppercase">
                    Indicative Subsidized Rate
                  </div>
                  <div className="text-xl font-serif-luxury text-white">
                    {estimate.perHead} <span className="text-xs font-mono text-neutral-400">/ member / mo</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono text-emerald-400 font-semibold block">
                    {estimate.discount}
                  </span>
                  <span className="text-[10px] text-neutral-400">Standard Aguda Resident Rate: ₦45,000</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-[#EF4444] to-[#2563EB] hover:opacity-95 text-white text-xs font-bold tracking-widest uppercase transition-all rounded-sm shadow-xl flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>GENERATE CORPORATE PROPOSAL</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-4 text-[11px] text-neutral-500 font-mono">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  CAC & LIRS Registered
                </span>
                <span>•</span>
                <span>Direct Corporate Invoicing</span>
              </div>
            </form>
          ) : (
            /* Submission Confirmation */
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <span className="text-xs font-mono text-blue-400 uppercase tracking-widest block mb-1">
                  PROPOSAL PACK READY
                </span>
                <h3 className="font-serif-luxury text-3xl text-white font-normal mb-2">
                  Welcome, {companyName}
                </h3>
                <p className="text-sm text-neutral-300 font-light max-w-md mx-auto leading-relaxed">
                  Your corporate wellness proposal pack has been prepared. Our Aguda Branch Corporate Relations lead will reach out to <strong className="text-white">{contactName}</strong> at <strong className="text-white">{phone}</strong>.
                </p>
              </div>

              {/* Corporate Reference Badge */}
              <div className="max-w-md mx-auto p-4 bg-[#141620] border border-neutral-800 rounded-sm text-left">
                <div className="flex justify-between items-center pb-3 border-b border-neutral-800/80 mb-3">
                  <div>
                    <span className="text-[10px] font-mono text-neutral-500 uppercase block">Reference Code</span>
                    <span className="text-sm font-mono font-bold text-white tracking-widest">{referenceCode}</span>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-950/40 border border-emerald-800/50">
                    APPROVED TIER
                  </span>
                </div>

                <div className="space-y-1.5 text-xs text-neutral-300 font-mono">
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Corporate Account:</span>
                    <span className="text-white">{companyName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Team Bracket:</span>
                    <span className="text-white">{teamSize} Employees</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Subsidized Rate:</span>
                    <span className="text-white font-bold">{estimate.perHead} / staff</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Facility:</span>
                    <span className="text-white">Fitness Options Aguda, Lagos</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`https://wa.me/2347069651085?text=Hello%20Fitness%20Options%20Aguda,%20we%20just%20requested%20a%20corporate%20proposal%20for%20${encodeURIComponent(
                    companyName
                  )}%20(Ref:%20${referenceCode}).`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold tracking-widest uppercase rounded-sm transition-colors flex items-center justify-center gap-2"
                >
                  <span>CONNECT ON WHATSAPP</span>
                </a>

                <button
                  onClick={handleReset}
                  className="px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-semibold tracking-widest uppercase rounded-sm transition-colors"
                >
                  RETURN TO SITE
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
