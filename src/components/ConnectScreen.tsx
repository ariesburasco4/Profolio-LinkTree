import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Mail,
  Send,
  Calendar,
  Download,
  Copy,
  Check,
  CheckCircle2,
  Clock,
  MapPin
} from 'lucide-react';
import { PROFILE } from '../data';

interface ConnectScreenProps {
  onCopySuccess: (msg: string) => void;
}

export const ConnectScreen: React.FC<ConnectScreenProps> = ({ onCopySuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Project Inquiry',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopiedEmail(true);
    onCopySuccess('Email copied');
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleDownloadVCard = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
N:Burasco;Aries;;;
FN:Aries Burasco
ORG:Wilshar Steel / University of Arkansas
TITLE:Procurement & Analytics Specialist
EMAIL;TYPE=INTERNET,PREF:${PROFILE.email}
URL:${PROFILE.linkedin}
NOTE:${PROFILE.headline}
END:VCARD`;

    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Aries_Burasco.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    onCopySuccess('Contact vCard downloaded');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      onCopySuccess('Your message has been dispatched to Aries');
    }, 800);
  };

  return (
    <div className="px-4 pb-28 max-w-md mx-auto">
      {/* Intro Header */}
      <div className="pt-4 pb-3">
        <h2 className="text-xl font-bold text-[#0a1e3a] tracking-tight">
          Direct Channels
        </h2>
        <p className="text-xs text-[#75777e] mt-0.5">
          Available for strategic advisory, product design & consulting.
        </p>
      </div>

      {/* Quick Status Cards */}
      <div className="grid grid-cols-2 gap-2.5 mb-4">
        <div className="bg-white p-3 rounded-2xl border border-[#e2e7ff] flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-[#edf2ff] flex items-center justify-center text-[#006398] shrink-0">
            <Clock className="w-4 h-4" />
          </div>
          <div>
            <p className="text-[10px] uppercase font-bold text-[#75777e] tracking-wider">Response Time</p>
            <p className="text-xs font-bold text-[#0a1e3a]">&lt; 24 Hours</p>
          </div>
        </div>

        <div className="bg-white p-3 rounded-2xl border border-[#e2e7ff] flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-[#edf2ff] flex items-center justify-center text-[#006398] shrink-0">
            <MapPin className="w-4 h-4" />
          </div>
          <div>
            <p className="text-[10px] uppercase font-bold text-[#75777e] tracking-wider">Location</p>
            <p className="text-xs font-bold text-[#0a1e3a]">SF / Remote</p>
          </div>
        </div>
      </div>

      {/* Action Buttons: vCard & Email */}
      <div className="space-y-2.5 mb-5">
        <div className="flex items-center justify-between p-3.5 bg-white rounded-2xl border border-[#e2e7ff] shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#f0f4ff] flex items-center justify-center text-[#006398]">
              <Mail className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#0a1e3a]">{PROFILE.email}</p>
              <p className="text-[11px] text-[#75777e]">Primary verified inbox</p>
            </div>
          </div>

          <button
            id="btn-copy-email-direct"
            onClick={handleCopyEmail}
            className="px-3 py-1.5 rounded-xl bg-[#f2f3ff] hover:bg-[#e2e7ff] text-[#006398] text-xs font-bold flex items-center gap-1.5 transition-colors"
          >
            {copiedEmail ? (
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

        <button
          id="btn-download-vcard"
          onClick={handleDownloadVCard}
          className="w-full py-3 px-4 rounded-2xl bg-[#0a1e3a] hover:bg-[#132d56] text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-sm"
        >
          <Download className="w-4 h-4" />
          <span>Save Contact Card (vCard .vcf)</span>
        </button>
      </div>

      {/* Contact Form */}
      <div className="bg-white rounded-2xl p-5 border border-[#e2e7ff] shadow-[0_2px_8px_rgba(20,30,60,0.03)]">
        <div className="flex items-center gap-2 mb-3">
          <Send className="w-4 h-4 text-[#006398]" />
          <h3 className="text-sm font-bold text-[#0a1e3a] tracking-tight">
            Send a Direct Message
          </h3>
        </div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-8 text-center"
          >
            <div className="w-12 h-12 rounded-full bg-[#e6f4ea] text-[#137333] flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-[#0a1e3a]">Message Sent Successfully</h4>
            <p className="text-xs text-[#75777e] max-w-xs mx-auto mt-1 mb-4">
              Thank you for reaching out. Aries will respond directly to {formData.email}.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: '', email: '', subject: 'Project Inquiry', message: '' });
              }}
              className="text-xs font-bold text-[#006398] underline hover:text-[#0a1e3a]"
            >
              Send another note
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#44474d] mb-1">
                Your Name
              </label>
              <input
                type="text"
                required
                placeholder="Alex Morgan"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-[#cbd5e1] focus:border-[#006398] focus:ring-2 focus:ring-[#006398]/20 outline-none transition-all bg-[#faf8ff]"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#44474d] mb-1">
                Email Address
              </label>
              <input
                type="email"
                required
                placeholder="alex@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-[#cbd5e1] focus:border-[#006398] focus:ring-2 focus:ring-[#006398]/20 outline-none transition-all bg-[#faf8ff]"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#44474d] mb-1">
                Inquiry Topic
              </label>
              <select
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-[#cbd5e1] focus:border-[#006398] focus:ring-2 focus:ring-[#006398]/20 outline-none transition-all bg-[#faf8ff]"
              >
                <option value="Project Inquiry">New Product / Design System</option>
                <option value="Advisory">Executive Advisory / Consultation</option>
                <option value="Speaking">Conference / Podcast Guest</option>
                <option value="Hello">Coffee Chat / Just Saying Hi</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#44474d] mb-1">
                Message
              </label>
              <textarea
                required
                rows={3}
                placeholder="Tell me a bit about your goals, timelines, or questions..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-[#cbd5e1] focus:border-[#006398] focus:ring-2 focus:ring-[#006398]/20 outline-none transition-all bg-[#faf8ff] resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 rounded-xl bg-[#0a1e3a] hover:bg-[#132d56] text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors disabled:opacity-60 shadow-sm"
            >
              {isSubmitting ? (
                <span>Dispatching...</span>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message Directly</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
