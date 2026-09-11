import React, { useState } from 'react';
import { SYSTEM_CAPABILITIES } from '../data/content';
import { SystemCapability } from '../types';
import { ArrowUpRight, CheckCircle2, ChevronRight, Layers, Cpu, Database, Smartphone, Workflow, Server } from 'lucide-react';

const ICONS_MAP: Record<string, React.ReactNode> = {
  'SYS.01': <Server className="w-5 h-5" />,
  'SYS.02': <Layers className="w-5 h-5" />,
  'SYS.03': <Workflow className="w-5 h-5" />,
  'SYS.04': <Cpu className="w-5 h-5" />,
  'SYS.05': <Database className="w-5 h-5" />,
  'SYS.06': <Smartphone className="w-5 h-5" />,
};

interface ServicesProps {
  onOpenContact: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenContact }) => {
  const [selectedSystem, setSelectedSystem] = useState<SystemCapability | null>(null);

  return (
    <section
      id="services"
      aria-label="Services and Capabilities"
      className="py-24 lg:py-32 bg-[#EAEAE4] border-b border-[#292929]/10 relative"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#292929]/15 pb-8 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs font-bold text-[#8C2545]">[SECTION 02]</span>
              <span className="text-[#292929]/30">/</span>
              <span className="text-xs uppercase tracking-[0.25em] text-[#292929]/70 font-mono">
                What we provide
              </span>
            </div>
            <h2 className="font-['Montserrat',sans-serif] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#292929] tracking-tight">
              Services &amp; Capabilities
            </h2>
          </div>

          <p className="mt-4 md:mt-0 text-sm lg:text-base text-[#292929]/70 max-w-md font-sans">
            Each one engineered to operate under heavy enterprise concurrency without state degradation.
          </p>
        </div>

        {/* 6-Grid Matrix with Strict Architectural Borders */}
        <div 
          id="services-grid-container"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#292929]/20"
        >
          {SYSTEM_CAPABILITIES.map((sys) => {
            const isSelected = selectedSystem?.id === sys.id;
            return (
              <div
                key={sys.id}
                id={`capability-${sys.id}`}
                className="group relative p-8 lg:p-10 border-r border-b border-[#292929]/20 bg-[#EAEAE4] hover:bg-[#E2E2DC] transition-colors duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Code & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#8C2545]">
                      <span>[{sys.code}]</span>
                    </div>
                    <div className="w-10 h-10 rounded-xs border border-[#292929]/15 flex items-center justify-center text-[#3D0617] group-hover:bg-[#3D0617] group-hover:text-[#EAEAE4] group-hover:border-[#3D0617] transition-all">
                      {ICONS_MAP[sys.code] || <Server className="w-5 h-5" />}
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-['Montserrat',sans-serif] text-xl lg:text-2xl font-bold text-[#292929] mb-2 tracking-tight">
                    {sys.title}
                  </h3>
                  <p className="text-xs uppercase tracking-[0.18em] font-mono text-[#8C2545] font-semibold mb-4">
                    {sys.tagline}
                  </p>

                  <p className="text-sm text-[#292929]/80 leading-relaxed mb-6 font-sans">
                    {sys.description}
                  </p>

                  {/* Architecture Metrics */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-[#292929]/10">
                    {sys.bestFor.map((metric, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-mono text-[#2C6350]">
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                        <span className="font-semibold">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Interactive Inspect Action */}
                <div className="pt-6 border-t border-[#292929]/10 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {sys.techStack.slice(0, 2).map((stack, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 bg-[#292929]/5 text-[#292929]/80 border border-[#292929]/10"
                      >
                        {stack}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedSystem(sys)}
                    className="p-1.5 text-[#3D0617] group-hover:text-[#8C2545] transition-colors focus:outline-hidden"
                    title={`Inspect ${sys.title} Architecture`}
                    aria-label={`Inspect ${sys.title} architecture specification`}
                  >
                    <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal/Drawer: Deep System Architecture Specification */}
        {selectedSystem && (
          <div
            id="system-spec-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="spec-modal-title"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#292929]/70 backdrop-blur-xs animate-fade-in"
          >
            <div className="relative w-full max-w-2xl bg-[#EAEAE4] border-2 border-[#3D0617] p-8 lg:p-10 shadow-2xl">
              <div className="flex items-center justify-between border-b border-[#292929]/20 pb-4 mb-6">
                <div>
                  <span className="text-xs font-mono font-bold text-[#8C2545] uppercase">
                    [{selectedSystem.code}] // DETAILED SPECIFICATION
                  </span>
                  <h3
                    id="spec-modal-title"
                    className="font-['Montserrat',sans-serif] text-2xl font-bold text-[#292929] mt-1"
                  >
                    {selectedSystem.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedSystem(null)}
                  className="px-3 py-1 bg-[#292929] text-[#EAEAE4] text-xs font-mono hover:bg-[#8C2545] transition-colors"
                  aria-label="Close specification modal"
                >
                  [CLOSE]
                </button>
              </div>

              <p className="text-sm text-[#292929]/80 mb-6 font-sans leading-relaxed">
                {selectedSystem.description}
              </p>

              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-widest text-[#8C2545] mb-3">
                  Best For
                </h4>
                <ul className="space-y-2">
                  {selectedSystem.bestFor.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs font-mono text-[#292929]">
                      <span className="text-[#8C2545] font-bold">›</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="text-xs font-mono uppercase tracking-widest text-[#2C6350] mb-3">
                  Production Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedSystem.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono px-2.5 py-1 bg-[#2C6350]/10 text-[#2C6350] border border-[#2C6350]/20 font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-end gap-4 border-t border-[#292929]/15 pt-6">
                <button
                  onClick={() => setSelectedSystem(null)}
                  className="px-5 py-2.5 text-xs font-mono uppercase text-[#292929] hover:text-[#8C2545]"
                >
                  Dismiss
                </button>
                <button
                  onClick={() => {
                    setSelectedSystem(null);
                    onOpenContact();
                  }}
                  className="px-6 py-2.5 bg-[#3D0617] text-[#EAEAE4] text-xs font-mono uppercase tracking-wider hover:bg-[#8C2545] transition-colors"
                >
                  Consult on {selectedSystem.title}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
