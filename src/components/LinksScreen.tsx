import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  FileText,
  Download,
  ExternalLink,
  Mail,
  Globe,
  ArrowUpRight,
  Send,
  Copy,
  Check
} from 'lucide-react';
import { ProfileHero } from './ProfileHero';
import { PROFILE } from '../data';

interface LinksScreenProps {
  onOpenResume: () => void;
  onOpenEmail: () => void;
  onOpenPortfolio: () => void;
  onOpenProfile: () => void;
  onCopySuccess: (msg: string) => void;
}

export const LinksScreen: React.FC<LinksScreenProps> = ({
  onOpenResume,
  onOpenEmail,
  onOpenPortfolio,
  onOpenProfile,
  onCopySuccess
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [showPop, setShowPop] = useState(false);
  const popTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleLinkedInClick = () => {
    window.open(PROFILE.linkedin, '_blank', 'noopener,noreferrer');
    onCopySuccess('Opening LinkedIn profile');
  };

  const handleEmailClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(PROFILE.email);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = PROFILE.email;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
    } catch {
      // Fallback
    }

    setCopiedEmail(true);
    setShowPop(true);
    onCopySuccess('Email copied');

    if (popTimerRef.current) clearTimeout(popTimerRef.current);
    popTimerRef.current = setTimeout(() => {
      setCopiedEmail(false);
      setShowPop(false);
    }, 2500);
  };

  return (
    <div className="px-4 pb-8 max-w-md mx-auto">
      {/* Profile Hero with Avatar and Monogram "A" */}
      <ProfileHero onAvatarClick={onOpenProfile} />

      {/* Main Links Container */}
      <div className="space-y-3.5 mt-1">
        {/* Card 1: Download Resume (Featured Deep Navy Card) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, delay: 0.05 }}
          id="link-card-resume"
          onClick={onOpenResume}
          role="button"
          tabIndex={0}
          className="group relative bg-[#0a1e3a] text-white rounded-2xl p-4 sm:p-4.5 flex items-center justify-between shadow-md shadow-[#0a1e3a]/15 hover:shadow-lg hover:shadow-[#0a1e3a]/25 hover:bg-[#0d2446] transition-all duration-200 cursor-pointer border border-[#1e3256]"
        >
          <div className="flex items-center min-w-0 pr-3">
            {/* Document Icon Box */}
            <div className="w-12 h-12 rounded-xl bg-[#15345f] flex items-center justify-center text-[#5bb8fe] shrink-0 mr-3.5 group-hover:scale-105 transition-transform">
              <FileText className="w-6 h-6 stroke-[2]" />
            </div>

            {/* Content Text */}
            <div className="truncate">
              <div className="flex items-center gap-2">
                <span className="font-bold text-[17px] text-white tracking-tight">
                  Download Resume
                </span>
                <span className="bg-[#006398]/40 border border-[#5bb8fe]/30 text-[#7bd0ff] text-[10px] font-bold px-2 py-0.5 rounded tracking-wider uppercase">
                  PDF
                </span>
              </div>
              <p className="text-[#8e9cb5] text-[13px] font-normal truncate mt-0.5">
                Direct access to verified credentials...
              </p>
            </div>
          </div>

          {/* Download Button on Right */}
          <div
            className="w-10 h-10 rounded-xl bg-[#15345f]/90 text-white flex items-center justify-center shrink-0 group-hover:bg-[#006398] transition-colors shadow-inner"
            title="Download verified resume"
          >
            <Download className="w-5 h-5 stroke-[2.2]" />
          </div>
        </motion.div>

        {/* Card 2: LinkedIn Profile */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, delay: 0.1 }}
          id="link-card-linkedin"
          onClick={handleLinkedInClick}
          role="button"
          tabIndex={0}
          className="group bg-white rounded-2xl p-4 sm:p-4.5 flex items-center justify-between border border-[#e2e7ff] shadow-[0_2px_8px_rgba(20,30,60,0.03)] hover:border-[#c5c6ce] hover:shadow-md transition-all duration-200 cursor-pointer"
        >
          <div className="flex items-center min-w-0 pr-3">
            {/* LinkedIn Icon Box */}
            <div className="w-12 h-12 rounded-xl bg-[#f0f4ff] flex items-center justify-center text-[#006398] shrink-0 mr-3.5 group-hover:bg-[#e0eaff] transition-colors">
              <span className="font-bold text-lg tracking-tighter leading-none">
                in
              </span>
            </div>

            {/* Content Text */}
            <div className="truncate">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-[17px] text-[#0a1e3a] tracking-tight">
                  LinkedIn Profile
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-[#75777e] shrink-0 stroke-[2.2]" />
              </div>
              <p className="text-[#75777e] text-[13px] font-normal truncate mt-0.5">
                linkedin.com/in/aries-burasco-1...
              </p>
            </div>
          </div>

          {/* Arrow Icon */}
          <div className="w-8 h-8 rounded-full flex items-center justify-center text-[#44474d] group-hover:text-[#006398] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0">
            <ArrowUpRight className="w-5 h-5 stroke-[2.2]" />
          </div>
        </motion.div>

        {/* Card 3: Email Address (Click to Copy with Animated Pop) */}
        <div className="relative">
          {/* Pop Bubble saying 'Email copied' */}
          <AnimatePresence>
            {showPop && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.85 }}
                animate={{ opacity: 1, y: -8, scale: 1 }}
                exit={{ opacity: 0, y: -4, scale: 0.9 }}
                transition={{ type: 'spring', damping: 18, stiffness: 350 }}
                className="absolute -top-3 right-5 z-20 bg-[#0a1e3a] text-white text-xs font-semibold px-3 py-1.5 rounded-xl shadow-xl border border-white/20 flex items-center gap-1.5 pointer-events-none"
              >
                <Check className="w-3.5 h-3.5 text-[#38bdf8] stroke-[2.5]" />
                <span className="tracking-tight">Email copied</span>
                {/* Arrow pointer */}
                <div className="absolute -bottom-1 right-5 w-2 h-2 bg-[#0a1e3a] rotate-45 border-r border-b border-white/20" />
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: 0.15 }}
            id="link-card-email"
            onClick={handleEmailClick}
            role="button"
            tabIndex={0}
            title="Click to copy email address"
            className={`group bg-white rounded-2xl p-4 sm:p-4.5 flex items-center justify-between border transition-all duration-200 cursor-pointer ${
              copiedEmail
                ? 'border-[#006398] bg-[#f8fbff] shadow-md'
                : 'border-[#e2e7ff] shadow-[0_2px_8px_rgba(20,30,60,0.03)] hover:border-[#006398]/50 hover:shadow-md'
            }`}
          >
            <div className="flex items-center min-w-0 pr-3">
              {/* Mail Icon Box */}
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 mr-3.5 transition-colors ${
                  copiedEmail
                    ? 'bg-[#006398] text-white'
                    : 'bg-[#f0f4ff] text-[#006398] group-hover:bg-[#e0eaff]'
                }`}
              >
                {copiedEmail ? (
                  <Check className="w-5 h-5 stroke-[2.5]" />
                ) : (
                  <Mail className="w-5 h-5 stroke-[2.2]" />
                )}
              </div>

              {/* Content Text */}
              <div className="truncate">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[17px] text-[#0a1e3a] tracking-tight">
                    Email Address
                  </span>
                  <span
                    className={`text-[10px] font-semibold px-2 py-0.5 rounded-full transition-all tracking-tight ${
                      copiedEmail
                        ? 'bg-[#006398] text-white'
                        : 'bg-[#eaedff] text-[#006398] group-hover:bg-[#006398] group-hover:text-white'
                    }`}
                  >
                    {copiedEmail ? 'Copied!' : 'Click to copy'}
                  </span>
                </div>
                <p className="text-[#75777e] text-[13px] font-normal truncate mt-0.5">
                  {PROFILE.email}
                </p>
              </div>
            </div>

            {/* Action / Copy Indicator */}
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all shrink-0 ${
                copiedEmail
                  ? 'text-[#006398] scale-110'
                  : 'text-[#44474d] group-hover:text-[#006398] group-hover:scale-105'
              }`}
            >
              {copiedEmail ? (
                <Check className="w-4 h-4 stroke-[2.5]" />
              ) : (
                <Copy className="w-4 h-4 stroke-[2.2]" />
              )}
            </div>
          </motion.div>
        </div>

        {/* Card 4: Portfolio Website */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, delay: 0.2 }}
          id="link-card-portfolio"
          onClick={onOpenPortfolio}
          role="button"
          tabIndex={0}
          className="group bg-white rounded-2xl p-4 sm:p-4.5 flex items-center justify-between border border-[#e2e7ff] shadow-[0_2px_8px_rgba(20,30,60,0.03)] hover:border-[#c5c6ce] hover:shadow-md transition-all duration-200 cursor-pointer"
        >
          <div className="flex items-center min-w-0 pr-3">
            {/* Globe Icon Box */}
            <div className="w-12 h-12 rounded-xl bg-[#f0f4ff] flex items-center justify-center text-[#006398] shrink-0 mr-3.5 group-hover:bg-[#e0eaff] transition-colors">
              <Globe className="w-5 h-5 stroke-[2.2]" />
            </div>

            {/* Content Text */}
            <div className="truncate">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-[17px] text-[#0a1e3a] tracking-tight">
                  Portfolio Website
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-[#75777e] shrink-0 stroke-[2.2]" />
              </div>
              <p className="text-[#75777e] text-[13px] font-normal truncate mt-0.5">
                Explore Full Portfolio & Projects
              </p>
            </div>
          </div>

          {/* Arrow Icon */}
          <div className="w-8 h-8 rounded-full flex items-center justify-center text-[#44474d] group-hover:text-[#006398] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0">
            <ArrowUpRight className="w-5 h-5 stroke-[2.2]" />
          </div>
        </motion.div>
      </div>

      {/* Footer text exactly from design */}
      <footer className="mt-10 mb-6 text-center px-4">
        <p className="text-[11px] sm:text-xs text-[#75777e] font-medium leading-relaxed">
          Aries Burasco • Portfolio Link Tree • Powered by Clean Web Design
        </p>
      </footer>
    </div>
  );
};
