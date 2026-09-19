import React, { useState } from 'react';
import { motion } from 'motion/react';
import { X, Copy, Check, Share2, MessageSquare, Linkedin, Mail } from 'lucide-react';
import { PROFILE } from '../data';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCopySuccess: (msg: string) => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({
  isOpen,
  onClose,
  onCopySuccess
}) => {
  const [copied, setCopied] = useState(false);
  if (!isOpen) return null;

  const profileUrl = window.location.href;

  const handleCopy = () => {
    navigator.clipboard.writeText(profileUrl);
    setCopied(true);
    onCopySuccess('Profile URL copied to clipboard');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Aries Burasco - Portfolio',
          text: 'Check out Aries Burasco\'s executive portfolio and verified credentials.',
          url: profileUrl
        });
      } catch {
        // Ignored if cancelled
      }
    } else {
      handleCopy();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        className="w-full max-w-sm bg-white rounded-3xl overflow-hidden shadow-2xl p-5 border border-[#e2e7ff]"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[#eaedff]">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#f0f4ff] text-[#006398] flex items-center justify-center">
              <Share2 className="w-4 h-4 stroke-[2.2]" />
            </div>
            <h3 className="font-bold text-[#0a1e3a] text-base">Share Profile</h3>
          </div>
          <button
            id="btn-close-share-modal"
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-[#f2f3ff] hover:bg-[#e2e7ff] text-[#44474d] flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* QR Code SVG preview */}
        <div className="my-5 flex flex-col items-center justify-center">
          <div className="p-3 bg-white border-2 border-[#e2e7ff] rounded-2xl shadow-sm flex items-center justify-center">
            {/* Elegant SVG QR Matrix Mock */}
            <svg
              className="w-36 h-36 text-[#0a1e3a]"
              viewBox="0 0 100 100"
              fill="currentColor"
            >
              {/* Corner 1 */}
              <rect x="10" y="10" width="24" height="24" rx="4" fill="#0a1e3a" />
              <rect x="14" y="14" width="16" height="16" rx="2" fill="white" />
              <rect x="18" y="18" width="8" height="8" rx="1" fill="#006398" />

              {/* Corner 2 */}
              <rect x="66" y="10" width="24" height="24" rx="4" fill="#0a1e3a" />
              <rect x="70" y="14" width="16" height="16" rx="2" fill="white" />
              <rect x="74" y="18" width="8" height="8" rx="1" fill="#006398" />

              {/* Corner 3 */}
              <rect x="10" y="66" width="24" height="24" rx="4" fill="#0a1e3a" />
              <rect x="14" y="70" width="16" height="16" rx="2" fill="white" />
              <rect x="18" y="74" width="8" height="8" rx="1" fill="#006398" />

              {/* Random QR code blocks */}
              <rect x="40" y="12" width="6" height="6" rx="1" />
              <rect x="50" y="12" width="8" height="6" rx="1" />
              <rect x="42" y="24" width="12" height="6" rx="1" />
              <rect x="12" y="42" width="8" height="6" rx="1" />
              <rect x="24" y="44" width="6" height="10" rx="1" />
              <rect x="36" y="38" width="8" height="8" rx="1" fill="#006398" />
              <rect x="52" y="40" width="8" height="6" rx="1" />
              <rect x="66" y="42" width="10" height="6" rx="1" />
              <rect x="80" y="44" width="8" height="8" rx="1" />
              <rect x="40" y="56" width="10" height="6" rx="1" />
              <rect x="56" y="54" width="6" height="12" rx="1" />
              <rect x="70" y="58" width="8" height="6" rx="1" />
              <rect x="42" y="70" width="8" height="8" rx="1" />
              <rect x="54" y="72" width="10" height="6" rx="1" />
              <rect x="70" y="70" width="6" height="10" rx="1" />
              <rect x="82" y="74" width="8" height="8" rx="1" />
            </svg>
          </div>
          <p className="text-[11px] text-[#75777e] mt-2 font-medium">
            Scan to open on your mobile device
          </p>
        </div>

        {/* Copy Link Input */}
        <div className="flex items-center gap-1.5 p-1.5 bg-[#f8fafc] rounded-xl border border-[#e2e8f0] mb-4">
          <input
            type="text"
            readOnly
            value={profileUrl}
            className="flex-1 bg-transparent text-xs text-[#131b2e] px-2 outline-none select-all truncate"
          />
          <button
            id="btn-copy-share-url"
            onClick={handleCopy}
            className="px-3 py-1.5 rounded-lg bg-[#0a1e3a] hover:bg-[#132d56] text-white text-xs font-bold flex items-center gap-1 transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Share Channels */}
        <div className="grid grid-cols-3 gap-2">
          <button
            onClick={handleNativeShare}
            className="p-2.5 rounded-xl border border-[#e2e7ff] hover:bg-[#f0f4ff] flex flex-col items-center justify-center gap-1 text-[11px] font-bold text-[#0a1e3a] transition-colors"
          >
            <Share2 className="w-4 h-4 text-[#006398]" />
            <span>Device</span>
          </button>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(profileUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl border border-[#e2e7ff] hover:bg-[#f0f4ff] flex flex-col items-center justify-center gap-1 text-[11px] font-bold text-[#0a1e3a] transition-colors"
          >
            <Linkedin className="w-4 h-4 text-[#006398]" />
            <span>LinkedIn</span>
          </a>
          <a
            href={`mailto:?subject=${encodeURIComponent('Aries Burasco Portfolio')}&body=${encodeURIComponent(profileUrl)}`}
            className="p-2.5 rounded-xl border border-[#e2e7ff] hover:bg-[#f0f4ff] flex flex-col items-center justify-center gap-1 text-[11px] font-bold text-[#0a1e3a] transition-colors"
          >
            <Mail className="w-4 h-4 text-[#006398]" />
            <span>Email</span>
          </a>
        </div>
      </motion.div>
    </div>
  );
};
