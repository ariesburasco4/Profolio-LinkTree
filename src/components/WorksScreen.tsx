import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Sparkles, Layers, ArrowUpRight, X } from 'lucide-react';
import { PROJECTS } from '../data';
import { Project } from '../types';

interface WorksScreenProps {
  onCopySuccess: (msg: string) => void;
}

export const WorksScreen: React.FC<WorksScreenProps> = ({ onCopySuccess }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = ['All', 'Design Systems', 'Web & SaaS', 'Mobile'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <div className="px-4 pb-24 max-w-md mx-auto">
      {/* Intro Header */}
      <div className="pt-4 pb-3">
        <div className="flex items-center justify-between mb-1">
          <h2 className="text-xl font-bold text-[#0a1e3a] tracking-tight">
            Curated Projects
          </h2>
          <span className="text-xs font-semibold px-2.5 py-1 bg-[#eaedff] text-[#006398] rounded-full">
            {PROJECTS.length} Case Studies
          </span>
        </div>
        <p className="text-xs text-[#75777e]">
          Selected high-impact client systems and commercial products.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-2 mb-3">
        {categories.map((cat) => (
          <button
            key={cat}
            id={`filter-work-${cat.toLowerCase().replace(/\s+/g, '-')}`}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              selectedCategory === cat
                ? 'bg-[#0a1e3a] text-white shadow-sm'
                : 'bg-white border border-[#e2e7ff] text-[#44474d] hover:bg-[#f2f3ff]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid/List */}
      <div className="space-y-4">
        {filteredProjects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: idx * 0.05 }}
            id={`project-card-${project.id}`}
            onClick={() => setActiveProject(project)}
            className="group bg-white rounded-2xl overflow-hidden border border-[#e2e7ff] shadow-[0_2px_8px_rgba(20,30,60,0.03)] hover:shadow-md hover:border-[#c5c6ce] transition-all cursor-pointer"
          >
            {/* Image Preview Banner */}
            <div className="relative h-44 w-full bg-[#0a1e3a] overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e3a]/90 via-transparent to-black/10" />

              {/* Category & Metric Pill */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span className="bg-white/95 text-[#0a1e3a] text-[10px] font-bold px-2 py-0.5 rounded-md backdrop-blur-md shadow-sm">
                  {project.category}
                </span>
                {project.metrics && (
                  <span className="text-[11px] font-semibold text-[#7bd0ff] flex items-center gap-1 bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-md border border-white/10">
                    <Sparkles className="w-3 h-3 text-[#5bb8fe]" />
                    {project.metrics}
                  </span>
                )}
              </div>
            </div>

            {/* Card Body */}
            <div className="p-4">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-base font-bold text-[#0a1e3a] tracking-tight group-hover:text-[#006398] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#75777e] mt-0.5">
                    {project.tagline}
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#f0f4ff] flex items-center justify-center text-[#006398] group-hover:bg-[#006398] group-hover:text-white transition-all shrink-0">
                  <ArrowUpRight className="w-4 h-4 stroke-[2.2]" />
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-[#eaedff]">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-medium bg-[#f2f3ff] text-[#4d5f7e] px-2 py-0.5 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm p-0 sm:p-4">
            <motion.div
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="w-full max-w-md bg-white rounded-t-3xl sm:rounded-3xl overflow-hidden shadow-2xl max-h-[85vh] flex flex-col"
            >
              {/* Header Image */}
              <div className="relative h-48 w-full bg-[#0a1e3a] shrink-0">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <button
                  id="btn-close-project-modal"
                  onClick={() => setActiveProject(null)}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="absolute bottom-3 left-4">
                  <span className="bg-[#006398] text-white text-xs font-bold px-2.5 py-1 rounded-md">
                    {activeProject.category}
                  </span>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-5 overflow-y-auto space-y-4">
                <div>
                  <h3 className="text-xl font-extrabold text-[#0a1e3a] tracking-tight">
                    {activeProject.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#006398] mt-0.5">
                    {activeProject.tagline}
                  </p>
                </div>

                <div className="bg-[#f8fafc] p-3.5 rounded-xl border border-[#e2e8f0]">
                  <p className="text-xs text-[#131b2e] leading-relaxed">
                    {activeProject.description}
                  </p>
                </div>

                {activeProject.metrics && (
                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#eaedff]/60 border border-[#c5c6ce]/40">
                    <Sparkles className="w-4 h-4 text-[#006398]" />
                    <div>
                      <p className="text-[11px] font-medium text-[#44474d]">Verified Impact</p>
                      <p className="text-xs font-bold text-[#0a1e3a]">{activeProject.metrics}</p>
                    </div>
                  </div>
                )}

                <div>
                  <h4 className="text-xs font-bold text-[#0a1e3a] uppercase tracking-wider mb-2">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeProject.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs bg-[#f2f3ff] text-[#0a1e3a] font-medium px-2.5 py-1 rounded-lg border border-[#e2e7ff]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-2 flex items-center gap-2">
                  {activeProject.liveUrl && (
                    <a
                      href={activeProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-[#0a1e3a] hover:bg-[#132d56] text-white text-xs font-bold py-3 rounded-xl flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                    >
                      <span>Visit Live Experience</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(activeProject.liveUrl || window.location.href);
                      onCopySuccess('Project link copied to clipboard');
                    }}
                    className="px-4 py-3 rounded-xl border border-[#e2e7ff] text-[#0a1e3a] hover:bg-[#f2f3ff] text-xs font-bold transition-colors"
                  >
                    Share
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
