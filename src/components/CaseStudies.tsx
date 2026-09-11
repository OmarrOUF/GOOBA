import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/content';
import { CaseStudy } from '../types';
import { ArrowUpRight, Check, Clock, Globe, Shield, Sparkles, Terminal, Vote } from 'lucide-react';

interface CaseStudiesProps {
  onOpenContact: () => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onOpenContact }) => {
  const [activeStudy, setActiveStudy] = useState<CaseStudy>(CASE_STUDIES[0]);
  const [munTab, setMunTab] = useState<'simulation' | 'screenshot'>('simulation');
  
  // Interactive mini-demonstration for GOOBA MUN Sites
  const [demoVotes, setDemoVotes] = useState({ yes: 142, no: 18, abstain: 4 });
  const [hasVoted, setHasVoted] = useState(false);
  const [elapsedTime, setElapsedTime] = useState('00:04.28');

  const castSimulatedVote = (type: 'yes' | 'no' | 'abstain') => {
    if (hasVoted) return;
    setDemoVotes(prev => ({ ...prev, [type]: prev[type] + 1 }));
    setHasVoted(true);
  };

  const totalVotes = demoVotes.yes + demoVotes.no + demoVotes.abstain;
  const yesPercentage = Math.round((demoVotes.yes / totalVotes) * 100);

  return (
    <section
      id="case-studies"
      aria-label="Case Studies & Real Work"
      className="py-24 lg:py-32 bg-[#3D0617] text-[#EAEAE4] border-b border-[#292929]/10 relative overflow-hidden"
    >
      {/* Background Subtle Editorial Grid in Dark Theme */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 editorial-grid-dark pointer-events-none opacity-20" 
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Eyebrow */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#EAEAE4]/15 pb-8 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs font-bold text-[#8C2545] bg-[#EAEAE4] px-2 py-0.5 rounded-xs">
                [SECTION 03]
              </span>
              <span className="text-[#EAEAE4]/30">/</span>
              <span className="text-xs uppercase tracking-[0.25em] text-[#EAEAE4]/70 font-mono">
                FLAGSHIP CASE ARCHITECTURES
              </span>
            </div>
            <h2 className="font-['Montserrat',sans-serif] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#EAEAE4] tracking-tight">
              Featured Case Studies
            </h2>
          </div>

          {/* Tab Selector for Case Studies */}
          <div className="mt-6 md:mt-0 flex gap-2 overflow-x-auto pb-2">
            {CASE_STUDIES.map((study) => (
              <button
                key={study.id}
                onClick={() => setActiveStudy(study)}
                className={`px-4 py-2 text-xs font-mono tracking-wider uppercase transition-all duration-200 border ${
                  activeStudy.id === study.id
                    ? 'bg-[#8C2545] text-[#EAEAE4] border-[#8C2545]'
                    : 'bg-transparent text-[#EAEAE4]/60 border-[#EAEAE4]/20 hover:text-[#EAEAE4] hover:border-[#EAEAE4]/40'
                }`}
              >
                {study.client}
              </button>
            ))}
          </div>
        </div>

        {/* PRIMARY FEATURED CASE: GOOBA MUN SITES */}
        {activeStudy.id === 'gooba-mun-sites' && (
          <div 
            id="featured-case-gooba-mun"
            className="border-2 border-[#8C2545] bg-[#340413] p-8 lg:p-12 mb-16 shadow-2xl relative"
          >
            {/* Top Badge: What used to take 5 weeks can now be done in 5 minutes */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#EAEAE4]/15 pb-6 mb-8">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#2C6350] animate-ping"></span>
                <span className="font-mono text-xs font-bold tracking-widest text-[#EAEAE4] uppercase">
                  OPEN SOURCE
                </span>
              </div>

              {/* The Precision Proof Highlight */}
              <div className="bg-[#8C2545] text-[#EAEAE4] px-4 py-1.5 text-xs sm:text-sm font-mono font-bold tracking-widest uppercase shadow-md">
                5 WEEKS → 5 MINUTES
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: Story & Before/After Proof */}
              <div className="lg:col-span-7">
                <p className="text-xs uppercase tracking-[0.25em] font-mono text-[#8C2545] mb-2 font-bold">
                  {activeStudy.category} • {activeStudy.timeframe}
                </p>
                <h3 className="font-['Montserrat',sans-serif] text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#EAEAE4] mb-4 leading-tight">
                  {activeStudy.title}
                </h3>

                <p className="text-sm sm:text-base text-[#EAEAE4]/80 leading-relaxed font-sans mb-8">
                  {activeStudy.overview}
                </p>

                {/* Direct Before & After Comparison Box */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 font-mono text-xs">
                  <div className="bg-[#292929]/50 border border-red-900/40 p-4">
                    <span className="text-red-400 font-bold block mb-2">[BEFORE GOOBA]</span>
                    <p className="text-[#EAEAE4]/70 leading-relaxed">
                      {activeStudy.metricComparison.before}
                    </p>
                  </div>
                  <div className="bg-[#2C6350]/20 border border-[#2C6350]/40 p-4">
                    <span className="text-emerald-400 font-bold block mb-2">[AFTER GOOBA INFRASTRUCTURE]</span>
                    <p className="text-[#EAEAE4]/90 leading-relaxed font-medium">
                      {activeStudy.metricComparison.after}
                    </p>
                  </div>
                </div>

                {/* Key Technical Systems Deployed */}
                <div className="space-y-2 mb-8">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-[#EAEAE4]/60">
                    Architectural Systems Implemented:
                  </h4>
                  {activeStudy.architecturePoints.map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#EAEAE4]/90 font-sans">
                      <span className="text-[#8C2545] font-mono font-bold">0{idx + 1}.</span>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {activeStudy.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-mono px-3 py-1 bg-[#EAEAE4]/10 text-[#EAEAE4] border border-[#EAEAE4]/15"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Live Interactive Parliamentary Consensus Simulation & Platform Screenshot */}
              <div className="lg:col-span-5 bg-[#292929] border border-[#EAEAE4]/20 p-6 rounded-xs shadow-2xl">


                <div className="relative border border-[#EAEAE4]/20 mb-4 overflow-hidden bg-black/40">
                      <img
                        src="/assets/1.PNG"
                        alt="GOOBA MUN Sites Production Platform Interface"
                        className="w-full h-56 object-cover object-top hover:scale-105 transition-transform duration-500 cursor-zoom-in"
                      />
                      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-3">
                        <p className="text-[11px] font-mono text-[#EAEAE4] font-semibold">
                          GOOBA MUN Sites Production Platform Interface
                        </p>
                        <p className="text-[10px] font-mono text-[#EAEAE4]/60">
                          A modern, responsive interface designed for seamless conference management and branding.
                        </p>
                      </div>
                    </div>


                    <div className="relative border border-[#EAEAE4]/20 mb-4 overflow-hidden bg-black/40">
                      <img
                        src="/assets/2.PNG"
                        alt="GOOBA MUN Sites Production Platform Interface"
                        className="w-full h-56 object-cover object-top hover:scale-105 transition-transform duration-500 cursor-zoom-in"
                      />
                      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-3">
                        <p className="text-[11px] font-mono text-[#EAEAE4] font-semibold">
                          Color Palette & Design System for GOOBA MUN Sites
                        </p>
                        <p className="text-[10px] font-mono text-[#EAEAE4]/60">
                          No-Code Design System for Rapid Conference Deployment & Branding
                        </p>
                      </div>
                    </div>
                    
                    
                    
                    <div className="relative border border-[#EAEAE4]/20 mb-4 overflow-hidden bg-black/40">
                      <img
                        src="/assets/3.PNG"
                        alt="GOOBA MUN Sites Production Platform Interface"
                        className="w-full h-56 object-cover object-top hover:scale-105 transition-transform duration-500 cursor-zoom-in"
                      />
                      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-3">
                        <p className="text-[11px] font-mono text-[#EAEAE4] font-semibold">
                          Desktop, Tablet, Mobile Mockups for testing & responsive design validation
                        </p>
                        <p className="text-[10px] font-mono text-[#EAEAE4]/60">
                          Ensuring a seamless experience across all devices and screen sizes
                        </p>
                      </div>
                    </div>



              </div>

            </div>
          </div>
        )}

        {/* OTHER CASE STUDIES */}
        {activeStudy.id !== 'gooba-mun-sites' && (
          <div className="border-2 border-[#8C2545]/60 bg-[#340413] p-8 lg:p-12 mb-16 shadow-2xl">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#EAEAE4]/15 pb-6 mb-8">
              <span className="font-mono text-xs font-bold tracking-widest text-[#EAEAE4] uppercase">
                {activeStudy.category} • {activeStudy.timeframe}
              </span>
              <span className="bg-[#8C2545] text-[#EAEAE4] px-4 py-1.5 text-xs font-mono font-bold uppercase">
                {activeStudy.metricHighlight}
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <h3 className="font-['Montserrat',sans-serif] text-2xl sm:text-3xl font-extrabold text-[#EAEAE4] mb-4">
                  {activeStudy.title}
                </h3>
                <p className="text-sm sm:text-base text-[#EAEAE4]/80 leading-relaxed mb-6 font-sans">
                  {activeStudy.overview}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 font-mono text-xs">
                  <div className="bg-[#292929]/50 border border-red-900/40 p-4">
                    <span className="text-red-400 font-bold block mb-1">[BEFORE]</span>
                    <p className="text-[#EAEAE4]/70">{activeStudy.metricComparison.before}</p>
                  </div>
                  <div className="bg-[#2C6350]/20 border border-[#2C6350]/40 p-4">
                    <span className="text-emerald-400 font-bold block mb-1">[AFTER]</span>
                    <p className="text-[#EAEAE4]/90">{activeStudy.metricComparison.after}</p>
                  </div>
                </div>

                <div className="space-y-2 mb-8">
                  {activeStudy.architecturePoints.map((pt, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#EAEAE4]/80">
                      <span className="text-[#8C2545] font-mono font-bold">›</span>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {activeStudy.tags.map((tag, i) => (
                    <span key={i} className="text-[11px] font-mono px-3 py-1 bg-[#EAEAE4]/10 text-[#EAEAE4]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative border border-[#EAEAE4]/20 p-2 bg-[#292929]">
                  <img
                    src={activeStudy.image}
                    alt={activeStudy.title}
                    className="w-full h-64 sm:h-80 object-cover filter contrast-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="p-4 bg-[#292929] border-t border-[#EAEAE4]/10 flex justify-between items-center">
                    <span className="text-xs font-mono text-[#EAEAE4]/70">PRODUCTION STATUS: VERIFIED</span>
                    <button
                      onClick={onOpenContact}
                      className="text-xs font-mono text-[#8C2545] hover:text-[#EAEAE4] flex items-center gap-1 uppercase"
                    >
                      <span>Inquire</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Global Statistics Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-[#EAEAE4]/15 pt-12">
          <div>
            <span className="block text-[10px] font-mono uppercase tracking-widest text-[#EAEAE4]/50 mb-1">
              Time Savings
            </span>
            <span className="font-['Montserrat',sans-serif] text-2xl sm:text-3xl font-extrabold text-[#EAEAE4]">
              98.6%
            </span>
            <span className="block text-xs font-mono text-[#8C2545] mt-1">5 WEEKS → 5 MINS</span>
          </div>

          <div>
            <span className="block text-[10px] font-mono uppercase tracking-widest text-[#EAEAE4]/50 mb-1">
              System Availability
            </span>
            <span className="font-['Montserrat',sans-serif] text-2xl sm:text-3xl font-extrabold text-[#EAEAE4]">
              99.998%
            </span>
            <span className="block text-xs font-mono text-[#2C6350] mt-1">SLA BACKED</span>
          </div>

          <div>
            <span className="block text-[10px] font-mono uppercase tracking-widest text-[#EAEAE4]/50 mb-1">
              Open Source
            </span>
            <span className="font-['Montserrat',sans-serif] text-2xl sm:text-3xl font-extrabold text-[#EAEAE4]">
              1
            </span>
            <span className="block text-xs font-mono text-[#EAEAE4]/70 mt-1">Open Source Project</span>
          </div>

          <div>
            <span className="block text-[10px] font-mono uppercase tracking-widest text-[#EAEAE4]/50 mb-1">
              Data Integrity
            </span>
            <span className="font-['Montserrat',sans-serif] text-2xl sm:text-3xl font-extrabold text-[#EAEAE4]">
              100.0%
            </span>
            <span className="block text-xs font-mono text-[#2C6350] mt-1">CRYPTOGRAPHIC CONSENSUS</span>
          </div>
        </div>

      </div>
    </section>
  );
};
