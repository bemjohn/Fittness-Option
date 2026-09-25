import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  showBranch?: boolean;
  orientation?: 'horizontal' | 'vertical' | 'iconOnly';
  lightText?: boolean;
}

export const FitnessOptionsLogo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showTagline = true,
  showBranch = false,
  orientation = 'horizontal',
  lightText = true,
}) => {
  // Height configurations for official logo picture
  const heights = {
    sm: 'h-9 md:h-10',
    md: 'h-11 md:h-12',
    lg: 'h-14 md:h-16',
    xl: 'h-20 md:h-24',
  }[size];

  const markHeights = {
    sm: 'h-8 w-auto',
    md: 'h-10 w-auto',
    lg: 'h-14 w-auto',
    xl: 'h-18 w-auto',
  }[size];

  if (orientation === 'iconOnly') {
    return (
      <div className={`inline-flex items-center shrink-0 ${className}`}>
        <img
          src="/fitness-options-mark.svg"
          alt="Fitness Options Mark"
          className={`${markHeights} object-contain filter drop-shadow-md select-none transition-transform hover:scale-105 duration-200`}
          onError={(e) => {
            e.currentTarget.src = '/image.png';
          }}
        />
      </div>
    );
  }

  return (
    <div className={`inline-flex flex-col ${orientation === 'vertical' ? 'items-center text-center' : 'items-start'} ${className}`}>
      <div className="relative group inline-flex items-center">
        <img
          src="/fitness-options-logo.png"
          alt="Fitness Options - enjoy your body"
          className={`${heights} w-auto object-contain filter drop-shadow-md select-none transition-transform group-hover:scale-[1.02] duration-200`}
          onError={(e) => {
            e.currentTarget.src = '/fitness-options-logo.svg';
          }}
        />
      </div>

      {showBranch && (
        <div className="mt-1.5 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400">
            AGUDA BRANCH · LAGOS
          </span>
        </div>
      )}
    </div>
  );
};
