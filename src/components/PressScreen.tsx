import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Newspaper, Mic, Award, ExternalLink, BookOpen } from 'lucide-react';
import { PRESS_ITEMS } from '../data';

interface PressScreenProps {
  onCopySuccess: (msg: string) => void;
}

export const PressScreen: React.FC<PressScreenProps> = ({ onCopySuccess }) => {
  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', 'Article', 'Talk', 'Award'];

  const filteredItems = filter === 'All'
    ? PRESS_ITEMS
    : PRESS_ITEMS.filter(item => item.category === filter);

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'Article':
        return <BookOpen className="w-4 h-4 text-[#006398]" />;
      case 'Talk':
        return <Mic className="w-4 h-4 text-[#006398]" />;
      case 'Award':
        return <Award className="w-4 h-4 text-[#006398]" />;
      default:
        return <Newspaper className="w-4 h-4 text-[#006398]" />;
    }
  };

  return (
    <div className="px-4 pb-24 max-w-md mx-auto">
      {/* Intro Header */}
      <div className="pt-4 pb-3">
        <div className="flex items-center justify-between mb-1">
          <h2 className="text-xl font-bold text-[#0a1e3a] tracking-tight">
            Press & Insights
          </h2>
          <span className="text-xs font-semibold px-2.5 py-1 bg-[#eaedff] text-[#006398] rounded-full">
            {PRESS_ITEMS.length} Publications
          </span>
        </div>
        <p className="text-xs text-[#75777e]">
          Keynotes, published technical essays, and industry recognition.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-2 mb-3">
        {categories.map((cat) => (
          <button
            key={cat}
            id={`filter-press-${cat.toLowerCase()}`}
            onClick={() => setFilter(cat)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              filter === cat
                ? 'bg-[#0a1e3a] text-white shadow-sm'
                : 'bg-white border border-[#e2e7ff] text-[#44474d] hover:bg-[#f2f3ff]'
            }`}
          >
            {cat}s
          </button>
        ))}
      </div>

      {/* Items List */}
      <div className="space-y-3.5">
        {filteredItems.map((item, idx) => (
          <motion.article
            key={item.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: idx * 0.05 }}
            id={`press-item-${item.id}`}
            className="bg-white rounded-2xl p-4 border border-[#e2e7ff] shadow-[0_2px_8px_rgba(20,30,60,0.03)] hover:border-[#c5c6ce] hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              {/* Meta row */}
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#f0f4ff] flex items-center justify-center">
                    {getCategoryIcon(item.category)}
                  </div>
                  <span className="text-[11px] font-bold text-[#006398] tracking-tight">
                    {item.outlet}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-[#75777e]">
                  <span>{item.date}</span>
                  {item.readTime && <span>• {item.readTime}</span>}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-[#0a1e3a] tracking-tight leading-snug">
                {item.title}
              </h3>

              {/* Summary */}
              <p className="text-xs text-[#44474d] leading-relaxed mt-2">
                {item.summary}
              </p>
            </div>

            {/* Bottom Actions */}
            <div className="mt-3.5 pt-3 border-t border-[#eaedff] flex items-center justify-between">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#75777e] bg-[#f2f3ff] px-2 py-0.5 rounded">
                {item.category}
              </span>
              <button
                onClick={() => {
                  onCopySuccess(`Read "${item.title}"`);
                }}
                className="inline-flex items-center gap-1 text-xs font-bold text-[#006398] hover:text-[#0a1e3a] transition-colors"
              >
                <span>Read Feature</span>
                <ExternalLink className="w-3.5 h-3.5 stroke-[2.2]" />
              </button>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
};
