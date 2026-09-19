import React, { useState } from 'react';
import { motion } from 'motion/react';
import { X, Mail, Send, Copy, Check } from 'lucide-react';
import { PROFILE } from '../data';

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCopySuccess: (msg: string) => void;
}

export const EmailModal: React.FC<EmailModalProps> = ({
  isOpen,
  onClose,
  onCopySuccess
}) => {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState('Project Collaboration & Inquiry');
  const [message, setMessage] = useState('');

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    onCopySuccess('Email address copied to clipboard');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendMailto = () => {
    const mailtoUrl = `mailto:${PROFILE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoUrl;
    onCopySuccess('Opening your default email client');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        className="w-full max-w-md bg-white rounded-3xl overflow-hidden shadow-2xl p-5 border border-[#e2e7ff]"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[#eaedff]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-[#f0f4ff] text-[#006398] flex items-center justify-center">
              <Mail className="w-4 h-4 stroke-[2.2]" />
            </div>
            <div>
              <h3 className="font-bold text-[#0a1e3a] text-base">Send Direct Email</h3>
              <p className="text-[11px] text-[#75777e]">{PROFILE.email}</p>
            </div>
          </div>
          <button
            id="btn-close-email-modal"
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-[#f2f3ff] hover:bg-[#e2e7ff] text-[#44474d] flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Body */}
        <div className="py-4 space-y-3.5 text-xs">
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-[#44474d] mb-1">
              Recipient
            </label>
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#f8fafc] border border-[#e2e8f0]">
              <span className="font-medium text-[#0a1e3a]">{PROFILE.email}</span>
              <button
                id="btn-copy-recipient-email"
                onClick={handleCopy}
                className="text-[11px] font-bold text-[#006398] hover:text-[#0a1e3a] flex items-center gap-1"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-[#44474d] mb-1">
              Subject
            </label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-[#cbd5e1] focus:border-[#006398] focus:ring-2 focus:ring-[#006398]/20 outline-none text-xs bg-[#faf8ff]"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-[#44474d] mb-1">
              Quick Message Note (Optional)
            </label>
            <textarea
              rows={3}
              placeholder="Hi Aries, I came across your portfolio and wanted to discuss..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-[#cbd5e1] focus:border-[#006398] focus:ring-2 focus:ring-[#006398]/20 outline-none text-xs bg-[#faf8ff] resize-none"
            />
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-2 flex items-center gap-2">
          <button
            id="btn-open-mailto"
            onClick={handleSendMailto}
            className="flex-1 py-3 rounded-xl bg-[#0a1e3a] hover:bg-[#132d56] text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-sm"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Open Email Client</span>
          </button>
          <button
            id="btn-copy-email-only"
            onClick={handleCopy}
            className="px-4 py-3 rounded-xl border border-[#e2e7ff] text-[#0a1e3a] hover:bg-[#f2f3ff] text-xs font-bold transition-colors"
          >
            Copy Only
          </button>
        </div>
      </motion.div>
    </div>
  );
};
