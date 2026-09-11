import React from 'react';
import { Compass, ShieldCheck, Sparkles, Terminal } from 'lucide-react';

export const Philosophy: React.FC = () => {
  return (
    <section
      id="philosophy"
      aria-label="Brand Philosophy and Manifesto"
      className="py-24 lg:py-36 bg-[#EAEAE4] text-[#292929] border-b border-[#292929]/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Editorial Eyebrow */}
        <div className="flex items-center gap-3 mb-10 border-b border-[#292929]/15 pb-4">
          <span className="font-mono text-xs font-bold text-[#8C2545]">[SECTION 04]</span>
          <span className="text-[#292929]/30">/</span>
          <span className="text-xs uppercase tracking-[0.25em] text-[#292929]/70 font-mono">
            CORE PHILOSOPHY &amp; ARCHITECTURAL VISION
          </span>
        </div>

        {/* High-Contrast Serif Pull Quote */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <span className="block text-xs font-mono uppercase tracking-[0.3em] text-[#8C2545] mb-6 font-bold">
            — THE GOOBA MANIFESTO —
          </span>
          <blockquote className="font-['Playfair_Display',serif] text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.25] text-[#292929] tracking-tight italic">
            &ldquo;We believe software should not merely automate routines, it must follow the{' '}
            <br />
            <span className="text-[#3D0617] font-semibold not-italic underline decoration-[#8C2545]/40 underline-offset-8">
              three principles
            </span>{' '}
            of GOOBA upon which generational organizations expand.&rdquo;
          </blockquote>
          <p className="mt-8 font-mono text-xs text-[#292929]/60 tracking-[0.2em] uppercase">
          Zero Disposable Code • Architectural Precision • Sovereign Intellectual Property
          </p>
        </div>

        {/* The Three Non-Negotiable Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-[#292929]/15 pt-12">
          
          <div className="p-6 border-l-2 border-[#8C2545] bg-[#E2E2DC]/50">
            <span className="font-mono text-xs font-bold text-[#8C2545] block mb-2">[Principle 01]</span>
            <h3 className="font-['Montserrat',sans-serif] text-lg font-bold text-[#292929] mb-3">
              No Bloat, No Disposable Code
            </h3>
            <p className="text-sm text-[#292929]/80 font-sans leading-relaxed">
              Every line of code we write is a permanent asset, not a disposable script. We engineer for longevity, maintainability, and scalability, ensuring that your software remains robust and adaptable for decades.
            </p>
          </div>

          <div className="p-6 border-l-2 border-[#3D0617] bg-[#E2E2DC]/50">
            <span className="font-mono text-xs font-bold text-[#3D0617] block mb-2">[Principle 02]</span>
            <h3 className="font-['Montserrat',sans-serif] text-lg font-bold text-[#292929] mb-3">
              Sub-100ms Latency
            </h3>
            <p className="text-sm text-[#292929]/80 font-sans leading-relaxed">
              Speed is not an optimization; it is a foundational architectural constraint. We measure latency at the 99th percentile across worldwide edges to guarantee seamless executive interactions.
            </p>
          </div>

          <div className="p-6 border-l-2 border-[#2C6350] bg-[#E2E2DC]/50">
            <span className="font-mono text-xs font-bold text-[#2C6350] block mb-2">[Principle 03]</span>
            <h3 className="font-['Montserrat',sans-serif] text-lg font-bold text-[#292929] mb-3">
              You Own Your Software
            </h3>
            <p className="text-sm text-[#292929]/80 font-sans leading-relaxed">
              You own your software, your schemas, and your deployments. We build on open cloud standards and battle-tested engines so your company remains in absolute control of its digital destiny.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
