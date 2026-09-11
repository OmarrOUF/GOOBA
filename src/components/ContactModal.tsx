import React, { useState } from 'react';
import { X, Check, ArrowUpRight, ShieldCheck, Terminal, Send } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    organization: '',
    scope: 'Software Systems',
    timeline: 'Immediate (< 30 days)',
    brief: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    onClose();
  };

  const scopeOptions = [
    'Software Systems',
    'SaaS Platforms',
    'Operational Systems',
    'Automation',
    'Data Systems',
    'Mobile Apps'
  ];

  return (
    <div
      id="contact-modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#292929]/80 backdrop-blur-sm animate-fade-in"
    >
      <div className="relative w-full max-w-2xl bg-[#EAEAE4] text-[#292929] border-2 border-[#3D0617] p-8 lg:p-10 shadow-2xl max-h-[92vh] overflow-y-auto">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-[#292929]/20 pb-5 mb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#8C2545]"></span>
              <span className="text-xs font-mono font-bold tracking-widest text-[#8C2545] uppercase">
                GOOBA // Contact Form
              </span>
            </div>
            <h3
              id="contact-modal-title"
              className="font-['Montserrat',sans-serif] text-2xl sm:text-3xl font-extrabold text-[#292929] mt-1"
            >
              Architectural Consultation
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#292929] hover:text-[#8C2545] border border-[#292929]/20 hover:border-[#8C2545] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-10 text-center animate-fade-in">
            <div className="w-16 h-16 mx-auto bg-[#2C6350] text-[#EAEAE4] flex items-center justify-center rounded-full mb-6">
              <Check className="w-8 h-8" />
            </div>
            <h4 className="font-['Montserrat',sans-serif] text-2xl font-bold text-[#292929] mb-3">
              Transmission Confirmed
            </h4>
            <p className="text-sm font-sans text-[#292929]/80 max-w-md mx-auto leading-relaxed mb-6">
              Your architectural brief has been routed directly to our Lead Systems Architect. We review technical parameters within 4 hours.
            </p>
            <div className="inline-block bg-[#292929] text-[#EAEAE4] px-4 py-2 font-mono text-xs mb-8">
              TICKET: #GBA-{Math.floor(100000 + Math.random() * 900000)} • SLA: 4H
            </div>
            <div>
              <button
                onClick={resetForm}
                className="px-8 py-3 bg-[#3D0617] text-[#EAEAE4] text-xs font-mono uppercase tracking-widest hover:bg-[#8C2545] transition-colors"
              >
                Return to Flagship
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <p className="text-xs font-sans text-[#292929]/70 leading-relaxed">
              Every consultation connects you directly with principal engineers. We conduct an initial architecture assessment and feasibility analysis before any formal engagement.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-widest text-[#292929]/70 mb-1.5">
                  Full Name *
                </label>
                <input
                  required
                  type="text"
                  placeholder="Alexandria Vance"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white/80 border border-[#292929]/20 text-sm font-sans focus:outline-hidden focus:border-[#8C2545]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-widest text-[#292929]/70 mb-1.5">
                  Work Email *
                </label>
                <input
                  required
                  type="email"
                  placeholder="vance@enterprise.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white/80 border border-[#292929]/20 text-sm font-sans focus:outline-hidden focus:border-[#8C2545]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-widest text-[#292929]/70 mb-1.5">
                  Organization / Entity
                </label>
                <input
                  type="text"
                  placeholder="Aether Cargo / MUN Conference"
                  value={formState.organization}
                  onChange={(e) => setFormState({ ...formState, organization: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white/80 border border-[#292929]/20 text-sm font-sans focus:outline-hidden focus:border-[#8C2545]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-widest text-[#292929]/70 mb-1.5">
                  Target Timeline
                </label>
                <select
                  value={formState.timeline}
                  onChange={(e) => setFormState({ ...formState, timeline: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white/80 border border-[#292929]/20 text-sm font-sans focus:outline-hidden focus:border-[#8C2545]"
                >
                  <option>Immediate (&lt; 30 days)</option>
                  <option>Q2 Deployment (30–90 days)</option>
                  <option>Next Generation R&amp;D (&gt; 90 days)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono uppercase tracking-widest text-[#292929]/70 mb-1.5">
                Primary System Focus
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {scopeOptions.map((opt) => (
                  <button
                    type="button"
                    key={opt}
                    onClick={() => setFormState({ ...formState, scope: opt })}
                    className={`py-2 px-3 text-left text-xs font-mono border transition-all ${
                      formState.scope === opt
                        ? 'bg-[#3D0617] text-[#EAEAE4] border-[#3D0617]'
                        : 'bg-white/60 text-[#292929]/80 border-[#292929]/15 hover:border-[#8C2545]'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono uppercase tracking-widest text-[#292929]/70 mb-1.5">
                Technical Brief / Current Bottleneck
              </label>
              <textarea
                rows={3}
                placeholder="Describe legacy stack, concurrency limits, or operational failure points..."
                value={formState.brief}
                onChange={(e) => setFormState({ ...formState, brief: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-white/80 border border-[#292929]/20 text-sm font-sans focus:outline-hidden focus:border-[#8C2545]"
              ></textarea>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#292929]/15">
              <div className="flex items-center gap-2 text-xs font-mono text-[#2C6350]">
                <ShieldCheck className="w-4 h-4" />
                <span>ALL DATA REMAINS CONFIDENTIAL</span>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 bg-[#3D0617] hover:bg-[#8C2545] text-[#EAEAE4] text-xs font-mono uppercase tracking-[0.2em] font-bold flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
              >
                <span>SEND REQUEST</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
