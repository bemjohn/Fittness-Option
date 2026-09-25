import React, { useState } from 'react';
import { GYM_CLASSES } from '../data/clubData.ts';
import { GymClass } from '../types.ts';
import { Clock, User, Flame, Calendar, ArrowRight, Sparkles } from 'lucide-react';

interface ClassScheduleProps {
  onBookClass: (gymClass: GymClass) => void;
}

type Day = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun';
const DAYS: { id: Day; label: string; full: string }[] = [
  { id: 'Mon', label: 'Mon', full: 'Monday' },
  { id: 'Tue', label: 'Tue', full: 'Tuesday' },
  { id: 'Wed', label: 'Wed', full: 'Wednesday' },
  { id: 'Thu', label: 'Thu', full: 'Thursday' },
  { id: 'Fri', label: 'Fri', full: 'Friday' },
  { id: 'Sat', label: 'Sat', full: 'Saturday' },
  { id: 'Sun', label: 'Sun', full: 'Sunday' },
];

const CATEGORIES = [
  { id: 'all', label: 'All Disciplines' },
  { id: 'hiit', label: 'MetCon & HIIT' },
  { id: 'strength', label: 'Strength' },
  { id: 'combat', label: 'Combat & Boxing' },
  { id: 'cycle', label: 'Afrobeat Spin' },
  { id: 'mindbody', label: 'Mobility & Yoga' },
];

export const ClassSchedule: React.FC<ClassScheduleProps> = ({ onBookClass }) => {
  const [selectedDay, setSelectedDay] = useState<Day>('Mon');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredClasses = GYM_CLASSES.filter((c) => {
    const dayMatches = c.days.includes(selectedDay);
    const categoryMatches = selectedCategory === 'all' || c.category === selectedCategory;
    return dayMatches && categoryMatches;
  });

  return (
    <section id="classes" className="py-24 md:py-32 bg-[#08090d] text-neutral-200 border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs font-semibold tracking-[0.25em] uppercase text-neutral-400 mb-3 flex items-center gap-2">
              <span className="text-[#EF4444]">AGUDA TIMETABLE</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span className="text-[#2563EB]">45+ WEEKLY BOUTIQUE SESSIONS</span>
            </div>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl text-white font-normal">
              Signature group disciplines.
            </h2>
          </div>
          <p className="text-neutral-400 text-sm md:text-base max-w-md font-light">
            Led by certified Nigerian Master Coaches with heart-rate biometric tracking, immersive soundscapes, and small-group squad intensity.
          </p>
        </div>

        {/* Day Selector Bar */}
        <div className="flex overflow-x-auto no-scrollbar gap-2 p-1.5 bg-[#0f1118] border border-neutral-800 rounded-lg mb-6">
          {DAYS.map((day) => {
            const isSelected = selectedDay === day.id;
            return (
              <button
                key={day.id}
                onClick={() => setSelectedDay(day.id)}
                className={`flex-1 min-w-[70px] py-2.5 px-3 rounded-md text-center transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-[#EF4444] to-[#2563EB] text-white font-semibold shadow-md'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800/40'
                }`}
              >
                <div className="text-xs md:text-sm font-mono tracking-wider">{day.label}</div>
                <div className="text-[10px] text-blue-200 uppercase mt-0.5 hidden sm:block font-light">{day.full}</div>
              </button>
            );
          })}
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-neutral-800/80">
          <span className="text-xs text-neutral-400 mr-2 uppercase tracking-wider font-mono">Discipline:</span>
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all cursor-pointer ${
                  isActive
                    ? 'bg-white text-black font-bold shadow'
                    : 'bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Classes Grid / List */}
        {filteredClasses.length === 0 ? (
          <div className="text-center py-16 bg-[#0d0f15] border border-neutral-800 rounded-sm">
            <Calendar className="w-10 h-10 text-neutral-600 mx-auto mb-3" />
            <div className="text-neutral-300 font-medium text-base">No scheduled classes for this discipline on {selectedDay}</div>
            <p className="text-xs text-neutral-500 mt-1">Please select another day or choose 'All Disciplines'.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredClasses.map((item) => (
              <div
                key={item.id}
                className="bg-[#0c0e15] border border-neutral-800/90 hover:border-neutral-700 p-6 rounded-sm transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top line metadata - zero pills */}
                  <div className="flex items-center justify-between text-xs text-neutral-400 mb-3 pb-3 border-b border-neutral-800/60 font-mono">
                    <span className="text-white font-semibold">{item.time}</span>
                    <span className="text-neutral-600">·</span>
                    <span>{item.duration}</span>
                    <span className="text-neutral-600">·</span>
                    <span className="text-[#EF4444] flex items-center gap-1 font-semibold">
                      <Flame className="w-3.5 h-3.5" />
                      {item.intensity}
                    </span>
                  </div>

                  <h3 className="font-serif-luxury text-2xl text-white font-normal group-hover:text-blue-300 transition-colors mb-1">
                    {item.title}
                  </h3>
                  <div className="text-xs text-neutral-400 uppercase tracking-wider mb-4 font-mono">
                    {item.categoryLabel} · {item.studio}
                  </div>

                  <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed mb-6 font-light">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-800/80">
                  <div className="flex items-center justify-between mb-4 text-xs text-neutral-400">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-blue-950 border border-blue-800 flex items-center justify-center text-[10px] font-mono font-bold text-blue-200">
                        {item.instructor.split(' ')[1]?.[0] || 'C'}
                      </div>
                      <span className="text-neutral-200 font-medium">{item.instructor}</span>
                    </div>
                    <span className="font-mono text-[11px] text-emerald-400 font-medium">
                      {item.spotsLeft} spots open
                    </span>
                  </div>

                  <button
                    onClick={() => onBookClass(item)}
                    className="w-full py-2.5 bg-neutral-900 hover:bg-gradient-to-r hover:from-[#EF4444] hover:to-[#2563EB] text-neutral-200 hover:text-white border border-neutral-700/80 hover:border-transparent text-xs font-bold tracking-widest uppercase transition-all duration-200 rounded-sm cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>RESERVE SPOT</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
