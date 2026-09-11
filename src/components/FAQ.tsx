import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/content';
import { ChevronDown, HelpCircle, MessageSquare, Search } from 'lucide-react';

interface FAQProps {
  onOpenContact: () => void;
}

export const FAQ: React.FC<FAQProps> = ({ onOpenContact }) => {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'faq-01': true, // default first item open
    'faq-02': false,
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const toggleItem = (id: string) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const categories = ['all', 'Architecture & Migration', 'Engineering Philosophy', 'Engagement & Discovery', 'IP & Sovereignty', 'AI & Intelligence', 'Scale & SLAs'];

  const filteredItems = FAQ_ITEMS.filter(item => {
    const matchesSearch = 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section
      id="faq"
      aria-label="Frequently Asked Questions"
      className="py-24 lg:py-32 bg-[#EAEAE4] border-b border-[#292929]/10 relative"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="border-b border-[#292929]/15 pb-8 mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs font-bold text-[#8C2545]">[SECTION 05]</span>
            <span className="text-[#292929]/30">/</span>
            <span className="text-xs uppercase tracking-[0.25em] text-[#292929]/70 font-mono">
              FAQ
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="font-['Montserrat',sans-serif] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#292929] tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#292929]/70 font-sans">
                Clear, concise answers to high-stakes enterprise technical questions.
              </p>
            </div>

            {/* Search Input for fast query */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#292929]/40" />
              <input
                id="faq-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search protocols, SLAs..."
                className="w-full pl-9 pr-4 py-2 bg-white/60 border border-[#292929]/20 text-xs font-mono placeholder:text-[#292929]/40 focus:outline-hidden focus:border-[#8C2545] focus:bg-white"
              />
            </div>
          </div>
        </div>

        {/* Accordion List with Monospace Numbers */}
        <div className="border-t border-[#292929]/20 divide-y divide-[#292929]/15">
          {filteredItems.map((item) => {
            const isOpen = !!openItems[item.id];
            return (
              <div
                key={item.id}
                id={item.id}
                className={`transition-colors duration-200 ${
                  isOpen ? 'bg-[#E4E4DE]' : 'hover:bg-[#E4E4DE]/60'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  className="w-full py-6 px-4 sm:px-6 flex items-start sm:items-center justify-between gap-4 text-left focus:outline-hidden focus:ring-2 focus:ring-[#8C2545]"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                >
                  <div className="flex items-start sm:items-center gap-4 sm:gap-6">
                    <span className="font-mono text-sm sm:text-base font-bold text-[#8C2545] shrink-0 pt-0.5 sm:pt-0">
                      [{item.num}]
                    </span>
                    <div>
                      <span className="block text-[10px] font-mono uppercase tracking-widest text-[#292929]/50 mb-1">
                        {item.category}
                      </span>
                      <span className="font-['Montserrat',sans-serif] text-base sm:text-lg font-bold text-[#292929] leading-snug">
                        {item.question}
                      </span>
                    </div>
                  </div>

                  <div className={`p-1 text-[#3D0617] transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#8C2545]' : ''}`}>
                    <ChevronDown className="w-5 h-5 shrink-0" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${item.id}`}
                    role="region"
                    className="px-4 sm:px-6 pb-6 pt-2 pl-14 sm:pl-20 pr-8 animate-fade-in"
                  >
                    <p className="text-sm sm:text-base text-[#292929]/85 font-sans leading-relaxed">
                      {item.answer}
                    </p>
                    <div className="mt-4 pt-3 border-t border-[#292929]/10 flex items-center justify-between text-xs font-mono text-[#292929]/50">
                      <span>VERIFIED ARCHITECTURAL STANDARD</span>
                      <button
                        onClick={onOpenContact}
                        className="text-[#8C2545] hover:text-[#3D0617] font-bold uppercase transition-colors"
                      >
                        Discuss With Architects →
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {filteredItems.length === 0 && (
            <div className="py-12 text-center text-sm font-mono text-[#292929]/60">
              No matching architectural entries found for &ldquo;{searchQuery}&rdquo;.
            </div>
          )}
        </div>

        {/* Bottom Direct CTA Box */}
        <div className="mt-12 p-6 sm:p-8 bg-[#3D0617] text-[#EAEAE4] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-['Montserrat',sans-serif] text-xl font-bold mb-1">
              Have a custom infrastructure question?
            </h3>
            <p className="text-xs sm:text-sm text-[#EAEAE4]/70 font-sans">
              Speak directly with our Lead Systems Architects. No intermediate sales reps.
            </p>
          </div>
          <button
            onClick={onOpenContact}
            className="shrink-0 px-6 py-3 bg-[#8C2545] hover:bg-[#A82E55] text-[#EAEAE4] text-xs font-mono uppercase tracking-widest font-bold transition-colors"
          >
            Direct Inquiry
          </button>
        </div>

      </div>
    </section>
  );
};
