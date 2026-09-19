import React from 'react';
import { motion } from 'motion/react';
import { X, MapPin, Mail, Linkedin, FileText, CheckCircle2 } from 'lucide-react';
import { PROFILE } from '../data';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
  onOpenEmail: () => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({
  isOpen,
  onClose,
  onOpenResume,
  onOpenEmail
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        className="w-full max-w-md bg-white rounded-3xl overflow-hidden shadow-2xl p-5 border border-[#e2e7ff] max-h-[90vh] flex flex-col"
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-3 border-b border-[#eaedff]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#0a1e3a] flex items-center justify-center text-white font-serif text-2xl font-light">
              A
            </div>
            <div>
              <h3 className="font-extrabold text-[#0a1e3a] text-lg tracking-tight">
                {PROFILE.name}
              </h3>
              <p className="text-xs font-semibold text-[#006398]">
                {PROFILE.headline}
              </p>
            </div>
          </div>
          <button
            id="btn-close-profile-modal"
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-[#f2f3ff] hover:bg-[#e2e7ff] text-[#44474d] flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="py-4 overflow-y-auto space-y-4 text-xs">
          {/* Status & Location badge */}
          <div className="flex items-center gap-2 text-[11px] text-[#44474d] bg-[#f8fafc] p-2.5 rounded-xl border border-[#e2e8f0]">
            <span className="w-2 h-2 rounded-full bg-[#5bb8fe] animate-ping" />
            <span className="font-bold text-[#0a1e3a]">Status:</span>
            <span>{PROFILE.availability}</span>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-[#75777e]">
            <MapPin className="w-3.5 h-3.5 text-[#006398]" />
            <span>{PROFILE.location}</span>
          </div>

          {/* Bio text */}
          <div className="space-y-2">
            <h4 className="font-bold text-[#0a1e3a] uppercase tracking-wider text-[11px]">
              About
            </h4>
            <p className="text-[#131b2e] leading-relaxed">
              {PROFILE.bio}
            </p>
            <p className="text-[#44474d] leading-relaxed">
              Passionate about architectural craftsmanship, type rhythm, and building software that feels crisp, effortless, and reliably fast.
            </p>
          </div>

          {/* Stats Bento */}
          <div>
            <h4 className="font-bold text-[#0a1e3a] uppercase tracking-wider text-[11px] mb-2">
              Track Record
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {PROFILE.stats.map((s) => (
                <div key={s.label} className="p-3 bg-[#f0f4ff] rounded-xl border border-[#e2e7ff]">
                  <p className="text-xl font-extrabold text-[#0a1e3a] tracking-tight">{s.value}</p>
                  <p className="text-[11px] font-medium text-[#75777e] mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-3 border-t border-[#eaedff] flex items-center gap-2">
          <button
            onClick={() => {
              onClose();
              onOpenResume();
            }}
            className="flex-1 py-2.5 rounded-xl bg-[#0a1e3a] hover:bg-[#132d56] text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>View Resume</span>
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenEmail();
            }}
            className="px-4 py-2.5 rounded-xl border border-[#e2e7ff] text-[#0a1e3a] hover:bg-[#f2f3ff] text-xs font-bold flex items-center gap-1.5 transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};
