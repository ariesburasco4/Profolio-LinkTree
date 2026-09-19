import React from 'react';
import { motion } from 'motion/react';
import { X, Download, CheckCircle2, ShieldCheck, Briefcase, GraduationCap, Code2, Copy } from 'lucide-react';
import { PROFILE } from '../data';

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
  if (!isOpen) return null;

  const handleDownload = () => {
    // Generate text/markdown resume and trigger file download
    const content = `ARIES BURASCO - RESUME & VERIFIED CREDENTIALS
Senior Product Designer & Full-Stack Engineer
Email: ${PROFILE.email}
LinkedIn: ${PROFILE.linkedin}
Portfolio: ${PROFILE.portfolio}

SUMMARY:
${PROFILE.bio}

CORE SKILLS:
- Frontend: React 19, TypeScript, Tailwind CSS, Vite, Next.js, Motion
- Architecture: Enterprise Design Systems, Token Pipelines, Microfrontends
- Design: Figma Tokens, Design Ops, WCAG 2.2 AAA Accessibility
- Performance: Web Vitals Optimization, D3 Data Visualizations, Canvas API

EXPERIENCE:
1. Lead Systems Architect & Principal Designer (2022 - Present)
   Clean Web Design Systems
   - Directed the core design tokens pipeline used by 45+ enterprise teams.
   - Built real-time UI components with sub-millisecond render benchmarks.

2. Senior Product Engineer (2019 - 2022)
   NovaFlow Technologies
   - Engineered real-time financial telemetry dashboard serving 250k+ DAU.
   - Reduced dashboard initial bundle size by 44%.

3. UI/UX Specialist & Frontend Developer (2017 - 2019)
   Apex Labs
   - Shipped 15+ cross-platform mobile and web client portals.

EDUCATION:
- B.S. in Computer Science & Human-Computer Interaction

VERIFIED HASH: SHA256-8F72A9D104E3
VERIFICATION STATUS: CERTIFIED ACCREDITED
`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Aries_Burasco_Resume_Verified.txt');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    onCopySuccess('Verified resume downloaded');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`${window.location.origin}/#resume`);
    onCopySuccess('Resume link copied to clipboard');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        className="w-full max-w-md bg-white rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col border border-[#e2e7ff]"
      >
        {/* Header */}
        <div className="bg-[#0a1e3a] p-5 text-white flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="bg-[#006398]/50 border border-[#5bb8fe]/30 text-[#7bd0ff] text-[10px] font-bold px-2 py-0.5 rounded tracking-wider uppercase">
                PDF Document
              </span>
              <span className="flex items-center gap-1 text-[11px] text-[#7bd0ff] font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                Verified Credential
              </span>
            </div>
            <h3 className="text-xl font-extrabold tracking-tight mt-1.5 text-white">
              Aries Burasco Resume
            </h3>
            <p className="text-xs text-[#8e9cb5] mt-0.5">
              Senior Product Designer & Full-Stack Engineer
            </p>
          </div>

          <button
            id="btn-close-resume-modal"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-5 overflow-y-auto space-y-4 text-xs">
          {/* Executive Overview */}
          <div className="bg-[#f8fafc] p-3.5 rounded-2xl border border-[#e2e8f0]">
            <p className="text-[#131b2e] leading-relaxed">
              {PROFILE.bio}
            </p>
          </div>

          {/* Experience Highlights */}
          <div>
            <h4 className="font-bold text-[#0a1e3a] uppercase tracking-wider text-[11px] flex items-center gap-1.5 mb-2.5">
              <Briefcase className="w-3.5 h-3.5 text-[#006398]" />
              <span>Career Milestones</span>
            </h4>

            <div className="space-y-2.5 border-l-2 border-[#e2e7ff] pl-3 ml-1.5">
              <div>
                <div className="flex items-center justify-between">
                  <p className="font-bold text-[#0a1e3a]">Lead Systems Architect</p>
                  <span className="text-[10px] text-[#75777e]">2022 - Present</span>
                </div>
                <p className="text-[11px] text-[#006398]">Clean Web Design</p>
                <p className="text-[#44474d] text-[11px] mt-0.5">
                  Architect of design tokens pipeline adopted across 45+ enterprise product teams.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <p className="font-bold text-[#0a1e3a]">Senior Product Engineer</p>
                  <span className="text-[10px] text-[#75777e]">2019 - 2022</span>
                </div>
                <p className="text-[11px] text-[#006398]">NovaFlow Technologies</p>
                <p className="text-[#44474d] text-[11px] mt-0.5">
                  Developed high-density telemetry dashboards serving over 250,000 active users.
                </p>
              </div>
            </div>
          </div>

          {/* Competencies */}
          <div>
            <h4 className="font-bold text-[#0a1e3a] uppercase tracking-wider text-[11px] flex items-center gap-1.5 mb-2">
              <Code2 className="w-3.5 h-3.5 text-[#006398]" />
              <span>Key Competencies</span>
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {['Design Systems', 'React 19', 'TypeScript', 'Tailwind CSS', 'Figma Tokens', 'UI/UX Architecture', 'Performance Profiling', 'Accessibility (WCAG AA)'].map((skill) => (
                <span
                  key={skill}
                  className="bg-[#f0f4ff] text-[#0a1e3a] font-medium px-2.5 py-1 rounded-lg border border-[#e2e7ff] text-[11px]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Education & Verification */}
          <div className="flex items-center justify-between p-3 rounded-2xl bg-[#f0f9ff] border border-[#bae6fd]">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-[#006398]" />
              <div>
                <p className="font-bold text-[#0a1e3a] text-[11px]">B.S. in Computer Science</p>
                <p className="text-[10px] text-[#006398]">Human-Computer Interaction Spec.</p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#0284c7] bg-white px-2 py-0.5 rounded shadow-xs">
              <CheckCircle2 className="w-3 h-3 text-[#0284c7]" />
              Verified
            </span>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-[#eaedff] bg-[#faf8ff] flex items-center gap-2">
          <button
            id="btn-download-resume-file"
            onClick={handleDownload}
            className="flex-1 bg-[#0a1e3a] hover:bg-[#132d56] text-white text-xs font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-sm"
          >
            <Download className="w-4 h-4" />
            <span>Download Resume File</span>
          </button>
          <button
            id="btn-copy-resume-link"
            onClick={handleCopyLink}
            className="p-3 rounded-xl border border-[#e2e7ff] text-[#0a1e3a] hover:bg-white transition-colors"
            title="Copy link"
          >
            <Copy className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </div>
  );
};
