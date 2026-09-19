import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Download,
  Printer,
  Copy,
  Check,
  CheckCircle2,
  ShieldCheck,
  Briefcase,
  GraduationCap,
  Award,
  ExternalLink,
  Code2,
  Share2
} from 'lucide-react';
import {
  PROFILE,
  RESUME_EDUCATION,
  RESUME_EXPERIENCE,
  RESUME_ACCOLADES,
  RESUME_SKILLS,
  RESUME_PLAIN_TEXT
} from '../data';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCopySuccess: (msg: string) => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  onCopySuccess
}) => {
  const [copiedText, setCopiedText] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(RESUME_PLAIN_TEXT);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = RESUME_PLAIN_TEXT;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopiedText(true);
      onCopySuccess('Formatted resume text copied');
      setTimeout(() => setCopiedText(false), 2200);
    } catch {
      onCopySuccess('Failed to copy');
    }
  };

  const handleDownloadFile = () => {
    const blob = new Blob([RESUME_PLAIN_TEXT], { type: 'text/plain;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Aries_Burasco_Resume.txt');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    onCopySuccess('Official resume downloaded');
  };

  const handleCopyLink = () => {
    const resumeUrl = `${window.location.origin}${window.location.pathname}#resume`;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(resumeUrl);
    }
    onCopySuccess('Resume link copied to clipboard');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#0a1e3a]/75 backdrop-blur-sm animate-in fade-in duration-200">
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 12 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-[#eaedff] flex flex-col max-h-[92vh] overflow-hidden"
      >
        {/* Top Header Bar */}
        <div className="px-5 py-3.5 sm:px-6 sm:py-4 bg-[#0a1e3a] text-white flex items-center justify-between border-b border-[#1e3256]">
          <div className="flex items-center gap-2 sm:gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#5bb8fe] animate-pulse" />
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-none">
                  Official Candidate Dossier & Resume
                </h3>
                <span className="hidden sm:inline-block text-[10px] bg-[#006398]/60 border border-[#5bb8fe]/30 text-[#7bd0ff] font-bold px-2 py-0.5 rounded tracking-wider uppercase">
                  Verified PDF
                </span>
              </div>
              <p className="text-[11px] text-[#8e9cb5] mt-0.5">
                Sam M. Walton College of Business • University of Arkansas
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Print / Save as PDF Button */}
            <button
              type="button"
              id="btn-print-resume"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-[12px] font-semibold transition-colors cursor-pointer border border-white/15"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>

            {/* Copy Text Button */}
            <button
              type="button"
              id="btn-copy-resume-text"
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-[12px] font-semibold transition-colors cursor-pointer border border-white/15"
              title="Copy formatted resume text"
            >
              {copiedText ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#5bb8fe]" />
                  <span className="hidden sm:inline text-[#5bb8fe]">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Copy</span>
                </>
              )}
            </button>

            {/* Close Modal Button */}
            <button
              type="button"
              id="btn-close-resume-modal"
              onClick={onClose}
              className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Body (PDF Preview Layout) */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-6 text-[#131b2e] bg-[#faf8ff]">
          {/* Document Header */}
          <div className="bg-white p-5 rounded-2xl border border-[#e2e7ff] shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-4 border-b border-[#eaedff]">
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl font-extrabold text-[#0a1e3a] tracking-tight">
                    {PROFILE.name}
                  </h1>
                  <span className="inline-flex items-center gap-1 text-[11px] text-[#006398] font-bold bg-[#f0f4ff] px-2 py-0.5 rounded-md border border-[#cce5ff]">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Verified
                  </span>
                </div>
                <p className="text-[#006398] font-semibold text-[14px] mt-1">
                  {PROFILE.headline}
                </p>
                <p className="text-[12px] text-[#44474d] mt-1 flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span>{PROFILE.location}</span>
                  <span>•</span>
                  <span>{PROFILE.email}</span>
                  <span>•</span>
                  <span>linkedin.com/in/aries-burasco-13168b290</span>
                </p>
              </div>

              <div className="shrink-0">
                <span className="inline-block px-3 py-1 bg-[#eaedff] text-[#0a1e3a] font-bold text-[11px] rounded-lg border border-[#c5c6ce]">
                  Top Decile Academic Honors (4.0 GPA)
                </span>
              </div>
            </div>

            {/* Profile Statement */}
            <div className="pt-3.5">
              <h2 className="text-[11px] font-bold uppercase tracking-wider text-[#006398] mb-1">
                Professional Profile
              </h2>
              <p className="text-[13px] text-[#44474d] leading-relaxed">
                {PROFILE.bio}
              </p>
            </div>
          </div>

          {/* Education & Degree Credentials */}
          <div className="bg-white p-5 rounded-2xl border border-[#e2e7ff] shadow-xs">
            <h2 className="text-[12px] font-bold uppercase tracking-wider text-[#006398] mb-3 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-[#006398]" />
              <span>Education & Academic Credentials</span>
            </h2>

            <div className="space-y-3">
              {RESUME_EDUCATION.map((edu) => (
                <div
                  key={edu.id}
                  className="p-3.5 rounded-xl bg-[#f8fafc] border border-[#e2e8f0]"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h3 className="text-[14px] font-bold text-[#0a1e3a]">
                      {edu.degree}
                    </h3>
                    <span className="text-[12px] font-extrabold text-[#006398] bg-[#f0f4ff] px-2 py-0.5 rounded border border-[#e2e7ff]">
                      GPA: {edu.gpa}
                    </span>
                  </div>
                  <p className="text-[12px] text-[#44474d] font-medium mt-0.5">
                    {edu.institution}
                  </p>
                  <div className="mt-1.5 space-y-0.5 text-[11.5px] text-[#006398]">
                    {edu.concentration && (
                      <p className="font-semibold">• {edu.concentration}</p>
                    )}
                    {edu.minor && (
                      <p className="font-medium text-[#44474d]">• {edu.minor}</p>
                    )}
                    {edu.honors && (
                      <p className="font-semibold text-emerald-700">• {edu.honors}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div className="bg-white p-5 rounded-2xl border border-[#e2e7ff] shadow-xs">
            <h2 className="text-[12px] font-bold uppercase tracking-wider text-[#006398] mb-3.5 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-[#006398]" />
              <span>Professional Experience</span>
            </h2>

            <div className="space-y-4">
              {RESUME_EXPERIENCE.map((exp) => (
                <div
                  key={exp.id}
                  className="border-l-2 border-[#006398] pl-3.5 py-0.5"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-0.5">
                    <h3 className="text-[14px] font-bold text-[#0a1e3a] flex items-center gap-1.5">
                      {exp.role}
                      {exp.current && (
                        <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.2 rounded">
                          Current
                        </span>
                      )}
                    </h3>
                    <span className="text-[11px] text-[#75777e] font-medium">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-[12px] font-semibold text-[#006398]">
                    {exp.company} — {exp.location}
                  </p>
                  <ul className="mt-2 space-y-1 text-[12px] text-[#44474d]">
                    {exp.highlights.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-[#006398] font-bold leading-none mt-1">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] bg-[#f0f4ff] text-[#006398] px-2 py-0.5 rounded font-medium border border-[#e2e7ff]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Honors, Leadership & Accolades */}
          <div className="bg-white p-5 rounded-2xl border border-[#e2e7ff] shadow-xs">
            <h2 className="text-[12px] font-bold uppercase tracking-wider text-[#006398] mb-3 flex items-center gap-2">
              <Award className="w-4 h-4 text-[#006398]" />
              <span>Honors & Leadership Accolades</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {RESUME_ACCOLADES.map((accolade) => (
                <div
                  key={accolade.id}
                  className="p-3 rounded-xl bg-[#f8fafc] border border-[#e2e8f0]"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#006398]">
                      {accolade.category}
                    </span>
                    <span className="text-[9px] font-bold bg-[#e0eaff] text-[#0a1e3a] px-1.5 py-0.5 rounded">
                      {accolade.badge}
                    </span>
                  </div>
                  <h4 className="text-[13px] font-bold text-[#0a1e3a] mt-1">
                    {accolade.title}
                  </h4>
                  <p className="text-[11px] text-[#44474d] mt-1 leading-snug">
                    {accolade.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Core Competencies */}
          <div className="bg-white p-5 rounded-2xl border border-[#e2e7ff] shadow-xs">
            <h2 className="text-[12px] font-bold uppercase tracking-wider text-[#006398] mb-2.5 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-[#006398]" />
              <span>Core Competencies & Analytical Tools</span>
            </h2>
            <div className="flex flex-wrap gap-1.5">
              {RESUME_SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="bg-[#f0f4ff] text-[#0a1e3a] font-medium px-2.5 py-1 rounded-lg border border-[#e2e7ff] text-[11px]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-3.5 sm:p-4 bg-white border-t border-[#eaedff] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 text-[11px] text-[#75777e]">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>Official transcript & letters available upon request</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              id="btn-download-resume-file"
              onClick={handleDownloadFile}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0a1e3a] hover:bg-[#132d56] text-white text-xs font-bold transition-colors shadow-sm cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download File</span>
            </button>

            <button
              type="button"
              id="btn-copy-resume-link"
              onClick={handleCopyLink}
              className="p-2.5 rounded-xl border border-[#e2e7ff] text-[#0a1e3a] hover:bg-[#f0f4ff] transition-colors cursor-pointer"
              title="Copy share link"
            >
              <Share2 className="w-3.5 h-3.5" />
            </button>

            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl bg-[#f0f4ff] hover:bg-[#e0eaff] text-[#0a1e3a] text-xs font-bold transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
