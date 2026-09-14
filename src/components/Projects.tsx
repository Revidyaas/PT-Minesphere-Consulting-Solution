import React, { useState } from 'react';
import { MapPin, Layers, CheckCircle2, ArrowRight, X } from 'lucide-react';
import { Language, ProjectItem, Theme } from '../types';
import { PROJECTS } from '../data/companyData';
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from './ScrollReveal';

interface ProjectsProps {
  lang: Language;
  theme?: Theme;
}

export const Projects: React.FC<ProjectsProps> = ({ lang, theme }) => {
  const isLight = theme === 'light';
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section className={`py-24 relative border-t transition-colors duration-300 ${
      isLight ? 'bg-white border-slate-200' : 'bg-[#0B1118] border-slate-800/80'
    }`} id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" className="max-w-3xl mb-16">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 shadow-xs ${
            isLight
              ? 'bg-[#1F7A63]/15 text-[#1F7A63]'
              : 'bg-[#1F7A63]/30 text-[#5EEAD4]'
          }`}>
            {lang === 'EN' ? 'REPRESENTATIVE PORTFOLIO' : 'PORTOFOLIO PROYEK'}
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-black tracking-tight font-heading mb-4 ${
            isLight ? 'text-[#0F172A]' : 'text-white'
          }`}>
            {lang === 'EN' ? 'FEATURED ENGAGEMENTS' : 'PROYEK & DOKUMEN TEKNIS'}
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${
            isLight ? 'text-[#475569]' : 'text-slate-300'
          }`}>
            {lang === 'EN'
              ? 'Verified mining engineering, environmental approvals (Pertek/UKL-UPL), and hydrogeological studies delivered for operating concession holders.'
              : 'Studi teknis pertambangan, persetujuan teknis lingkungan (Pertek/UKL-UPL), dan kajian hidrogeologi yang telah dikerjakan untuk pemegang izin usaha pertambangan.'}
          </p>
        </ScrollReveal>

        {/* Project Cards Grid with Staggered Scroll Animations */}
        <ScrollStagger staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <ScrollStaggerItem key={project.id} className="h-full">
              <div
                id={`project-${project.id}`}
                className={`scroll-mt-28 rounded-2xl border overflow-hidden transition-all duration-300 flex flex-col justify-between group h-full ${
                  isLight
                    ? 'bg-white border-[#E2E8F0] shadow-sm hover:border-[#CBD5E1] hover:shadow-md'
                    : 'bg-slate-900/60 border-slate-800/90 hover:border-emerald-500/50 shadow-xl'
                }`}
              >
                <div>
                  {/* Image Banner with Mining Visual */}
                  <div className="relative h-56 overflow-hidden bg-slate-950 dark-surface">
                    <img
                      src={project.imageUrl}
                      alt={project.companyName}
                      referrerPolicy="no-referrer"
                     onError={(e) => {
                      e.currentTarget.src = `${import.meta.env.BASE_URL}open-pit.jpg`;
                        }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-60 filter contrast-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent pointer-events-none" />
                    
                    {/* Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="text-[11px] font-mono font-bold text-white px-3 py-1 rounded-full bg-[#1F7A63] shadow-md">
                        {project.tag}
                      </span>
                    </div>

                    {project.areaSize && (
                      <div className="absolute top-4 right-4">
                        <span className="text-[11px] font-mono text-slate-200 px-3 py-1 rounded-full bg-slate-950/85 backdrop-blur-sm shadow-sm">
                          {project.areaSize}
                        </span>
                      </div>
                    )}

                    {/* Title overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white font-heading tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                        {project.companyName}
                      </h3>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    {/* Location & Commodity */}
                    <div className={`flex flex-col gap-1.5 mb-4 text-xs ${
                      isLight ? 'text-[#64748B]' : 'text-slate-400'
                    }`}>
                      <div className="flex items-center gap-2">
                        <MapPin className={`w-3.5 h-3.5 flex-shrink-0 ${isLight ? 'text-[#059669]' : 'text-emerald-400'}`} />
                        <span className="truncate">{project.location}</span>
                      </div>
                      {project.commodity && (
                        <div className={`flex items-center gap-2 ${isLight ? 'text-[#334155]' : 'text-slate-300'}`}>
                          <Layers className={`w-3.5 h-3.5 flex-shrink-0 ${isLight ? 'text-[#059669]' : 'text-emerald-400'}`} />
                          <span>{project.commodity}</span>
                        </div>
                      )}
                    </div>

                    {/* Scope of Work Pills */}
                    <div className="mb-4">
                      <span className={`text-[10px] uppercase font-mono tracking-wider block mb-1.5 ${
                        isLight ? 'text-[#64748B]' : 'text-slate-500'
                      }`}>
                        {lang === 'EN' ? 'Scope of Work' : 'Lingkup Pekerjaan'}
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.scopeOfWork.map((sow, idx) => (
                          <span
                            key={idx}
                            className={`text-xs px-3 py-1 rounded-full font-medium ${
                              isLight
                                ? 'bg-[#1F7A63]/10 text-[#1F7A63]'
                                : 'bg-[#1F7A63]/25 text-[#5EEAD4]'
                            }`}
                          >
                            {sow}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Short description */}
                    <p className={`text-xs sm:text-sm line-clamp-3 leading-relaxed mb-4 ${
                      isLight ? 'text-[#475569]' : 'text-slate-300'
                    }`}>
                      {lang === 'EN' ? project.description.EN : project.description.ID}
                    </p>

                    {/* Highlights checklist */}
                    <div className={`space-y-1.5 pt-3 border-t ${
                      isLight ? 'border-[#E2E8F0]' : 'border-slate-800/80'
                    }`}>
                      {project.highlights.map((item, idx) => (
                        <div key={idx} className={`flex items-center gap-2 text-xs ${
                          isLight ? 'text-[#475569]' : 'text-slate-400'
                        }`}>
                          <CheckCircle2 className={`w-3.5 h-3.5 flex-shrink-0 ${
                            isLight ? 'text-[#059669]' : 'text-emerald-400'
                          }`} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className={`w-full py-2.5 px-4 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      isLight
                        ? 'bg-slate-50 hover:bg-slate-100 border-[#E2E8F0] text-[#0F172A] hover:border-slate-300'
                        : 'bg-slate-800/80 hover:bg-slate-800 border-slate-700/80 hover:border-emerald-500/40 text-white'
                    }`}
                  >
                    <span>{lang === 'EN' ? 'View Technical Scope Details' : 'Rincian Teknis Pekerjaan'}</span>
                    <ArrowRight className={`w-3.5 h-3.5 ${isLight ? 'text-[#059669]' : 'text-emerald-400'}`} />
                  </button>
                </div>
              </div>
            </ScrollStaggerItem>
          ))}
        </ScrollStagger>
      </div>

      {/* In-Depth Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn">
          <div className={`relative w-full max-w-2xl max-h-[90vh] border rounded-2xl overflow-hidden flex flex-col shadow-2xl ${
            isLight ? 'bg-white border-slate-200' : 'bg-[#0E1622] border-slate-700'
          }`}>
            {/* Header */}
            <div className={`flex items-center justify-between p-6 border-b ${
              isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#0A0F17] border-slate-800'
            }`}>
              <div>
                <span className={`text-[10px] font-mono uppercase tracking-widest font-bold ${
                  isLight ? 'text-[#059669]' : 'text-emerald-400'
                }`}>
                  {lang === 'EN' ? 'PROJECT BRIEF' : 'RINGKASAN PROYEK RESMI'}
                </span>
                <h3 className={`text-xl font-bold font-heading ${
                  isLight ? 'text-[#0F172A]' : 'text-white'
                }`}>
                  {selectedProject.companyName}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className={`p-2 rounded-lg cursor-pointer transition-colors ${
                  isLight
                    ? 'text-slate-500 hover:text-slate-800 hover:bg-slate-200'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className={`p-6 overflow-y-auto space-y-5 text-sm ${
              isLight ? 'text-[#334155]' : 'text-slate-300'
            }`}>
              <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl border text-xs ${
                isLight ? 'bg-slate-50 border-[#E2E8F0]' : 'bg-slate-900/80 border-slate-800'
              }`}>
                <div>
                  <span className={`block ${isLight ? 'text-[#64748B]' : 'text-slate-500'}`}>
                    {lang === 'EN' ? 'Location' : 'Lokasi'}
                  </span>
                  <span className={`font-semibold ${isLight ? 'text-[#0F172A]' : 'text-white'}`}>
                    {selectedProject.location}
                  </span>
                </div>
                <div>
                  <span className={`block ${isLight ? 'text-[#64748B]' : 'text-slate-500'}`}>
                    {lang === 'EN' ? 'Commodity & Size' : 'Komoditas & Luas Area'}
                  </span>
                  <span className={`font-semibold ${isLight ? 'text-[#0F172A]' : 'text-white'}`}>
                    {selectedProject.commodity} {selectedProject.areaSize ? `• ${selectedProject.areaSize}` : ''}
                  </span>
                </div>
              </div>

              <div>
                <h4 className={`text-xs font-bold uppercase tracking-wider mb-2 ${
                  isLight ? 'text-[#64748B]' : 'text-slate-400'
                }`}>
                  {lang === 'EN' ? 'Scope of Work (SOW)' : 'Lingkup Pekerjaan'}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.scopeOfWork.map((sow, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        isLight
                          ? 'bg-[#1F7A63]/10 text-[#1F7A63]'
                          : 'bg-[#1F7A63]/25 text-[#5EEAD4]'
                      }`}
                    >
                      {sow}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className={`text-xs font-bold uppercase tracking-wider mb-2 ${
                  isLight ? 'text-[#64748B]' : 'text-slate-400'
                }`}>
                  {lang === 'EN' ? 'Technical Delivery Overview' : 'Uraian Teknis Pelaksanaan'}
                </h4>
                <p className={`text-xs sm:text-sm leading-relaxed p-4 rounded-xl border ${
                  isLight
                    ? 'bg-slate-50 border-[#E2E8F0] text-[#334155]'
                    : 'bg-slate-950/60 border-slate-800/80 text-slate-300'
                }`}>
                  {lang === 'EN' ? selectedProject.description.EN : selectedProject.description.ID}
                </p>
              </div>

              <div>
                <h4 className={`text-xs font-bold uppercase tracking-wider mb-2 ${
                  isLight ? 'text-[#64748B]' : 'text-slate-400'
                }`}>
                  {lang === 'EN' ? 'Key Technical Standards & Compliance' : 'Standar Teknis & Kepatuhan'}
                </h4>
                <div className="space-y-2">
                  {selectedProject.highlights.map((hl, idx) => (
                    <div key={idx} className={`flex items-center gap-2 text-xs ${
                      isLight ? 'text-[#334155]' : 'text-slate-200'
                    }`}>
                      <CheckCircle2 className={`w-4 h-4 ${isLight ? 'text-[#059669]' : 'text-emerald-400'}`} />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className={`p-4 border-t flex justify-end ${
              isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#0A0F17] border-slate-800'
            }`}>
              <button
                onClick={() => setSelectedProject(null)}
                className={`px-4 py-2 text-xs font-bold rounded-lg cursor-pointer transition-colors ${
                  isLight
                    ? 'text-slate-700 bg-slate-200 hover:bg-slate-300'
                    : 'text-white bg-slate-800 hover:bg-slate-700'
                }`}
              >
                {lang === 'EN' ? 'Close' : 'Tutup'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

