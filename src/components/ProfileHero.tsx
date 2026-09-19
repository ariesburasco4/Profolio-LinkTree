import React from 'react';
import { motion } from 'motion/react';
import { PROFILE } from '../data';

interface ProfileHeroProps {
  onAvatarClick?: () => void;
}

export const ProfileHero: React.FC<ProfileHeroProps> = ({ onAvatarClick }) => {
  return (
    <div className="pt-5 pb-6 flex flex-col items-center text-center">
      {/* Avatar Container with Monogram and Status Indicator */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        onClick={onAvatarClick}
        className="relative mb-4 cursor-pointer group"
      >
        <div
          id="profile-avatar"
          className="w-24 h-24 rounded-[26px] bg-[#0a1e3a] flex items-center justify-center shadow-lg shadow-[#0a1e3a]/15 group-hover:scale-[1.02] transition-transform duration-200"
        >
          {/* Custom Stylized Monogram "A" */}
          <span className="text-white text-5xl font-light tracking-wide select-none font-serif leading-none mt-1">
            A
          </span>
        </div>

        {/* Electric Sky Blue Status Dot */}
        <div
          title="Online / Available for Work"
          className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#5bb8fe] border-[3.5px] border-[#faf8ff] shadow-sm flex items-center justify-center ring-1 ring-black/5"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white/80 animate-pulse"></span>
        </div>
      </motion.div>

      {/* Name */}
      <motion.h2
        initial={{ y: 5, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.05 }}
        className="text-[28px] font-extrabold text-[#0a1e3a] tracking-tight leading-tight"
      >
        {PROFILE.name}
      </motion.h2>
    </div>
  );
};
