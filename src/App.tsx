/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { LinksScreen } from './components/LinksScreen';
import { ResumeModal } from './components/ResumeModal';
import { ShareModal } from './components/ShareModal';
import { ProfileModal } from './components/ProfileModal';
import { EmailModal } from './components/EmailModal';
import { Toast } from './components/Toast';
import { PROFILE } from './data';

export default function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [emailModalOpen, setEmailModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleOpenPortfolio = () => {
    window.open(PROFILE.portfolio, '_blank', 'noopener,noreferrer');
    showToast('Opening portfolio website');
  };

  return (
    <div className="min-h-screen bg-[#f0f2fa] flex justify-center selection:bg-[#38bdf8]/30 selection:text-[#0a1e3a]">
      {/* Mobile-Centric Showcase Container */}
      <div className="w-full max-w-md min-h-screen bg-[#faf8ff] shadow-2xl relative flex flex-col border-x border-[#e2e7ff]/80">
        {/* Top Header */}
        <Header
          activeTab="links"
          onOpenShare={() => setShareModalOpen(true)}
          onOpenProfile={() => setProfileModalOpen(true)}
        />

        {/* Dynamic Screen View */}
        <main className="flex-1 overflow-x-hidden">
          <LinksScreen
            onOpenResume={() => setResumeModalOpen(true)}
            onOpenEmail={() => setEmailModalOpen(true)}
            onOpenPortfolio={handleOpenPortfolio}
            onOpenProfile={() => setProfileModalOpen(true)}
            onCopySuccess={showToast}
          />
        </main>

        {/* Global Modals & Dialogs */}
        <ResumeModal
          isOpen={resumeModalOpen}
          onClose={() => setResumeModalOpen(false)}
          onCopySuccess={showToast}
        />

        <ShareModal
          isOpen={shareModalOpen}
          onClose={() => setShareModalOpen(false)}
          onCopySuccess={showToast}
        />

        <ProfileModal
          isOpen={profileModalOpen}
          onClose={() => setProfileModalOpen(false)}
          onOpenResume={() => setResumeModalOpen(true)}
          onOpenEmail={() => setEmailModalOpen(true)}
        />

        <EmailModal
          isOpen={emailModalOpen}
          onClose={() => setEmailModalOpen(false)}
          onCopySuccess={showToast}
        />

        {/* Floating Toast Notification */}
        <Toast
          message={toastMessage}
          onClose={() => setToastMessage(null)}
        />
      </div>
    </div>
  );
}
