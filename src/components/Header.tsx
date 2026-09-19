import React from 'react';
import { Share2, User } from 'lucide-react';
import { TabType } from '../types';

interface HeaderProps {
  activeTab: TabType;
  onOpenShare: () => void;
  onOpenProfile: () => void;
}

const TAB_TITLES: Record<TabType, string> = {
  links: 'Quick Links',
  works: 'Featured Works',
  press: 'Press & Media',
  connect: 'Connect'
};

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onOpenShare,
  onOpenProfile
}) => {
  return (
    <header className="sticky top-0 z-30 w-full bg-[#faf8ff]/90 backdrop-blur-md px-4 py-3.5 border-b border-[#e2e7ff]/60">
      <div className="max-w-md mx-auto flex items-center justify-between">
        {/* Left: AB Badge & Title */}
        <div className="flex items-center gap-2.5">
          <div
            id="brand-badge-ab"
            className="w-8 h-8 rounded-lg bg-[#0a1e3a] text-white font-bold text-xs flex items-center justify-center tracking-tight shadow-sm"
          >
            AB
          </div>
          <h1 className="text-xl font-bold text-[#0a1e3a] tracking-tight">
            {TAB_TITLES[activeTab]}
          </h1>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          <button
            id="btn-share-profile"
            onClick={onOpenShare}
            aria-label="Share profile"
            className="w-9 h-9 rounded-full flex items-center justify-center text-[#131b2e] hover:bg-[#eaedff] active:scale-95 transition-all"
          >
            <Share2 className="w-5 h-5 stroke-[2.2]" />
          </button>

          <button
            id="btn-view-profile"
            onClick={onOpenProfile}
            aria-label="View biography"
            className="w-9 h-9 rounded-full bg-[#0a1e3a] text-white flex items-center justify-center hover:bg-[#132d56] active:scale-95 transition-all shadow-sm"
          >
            <User className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
