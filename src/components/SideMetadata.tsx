import React from 'react';

interface SideMetadataProps {
  onOpenContact: () => void;
}

export const SideMetadata: React.FC<SideMetadataProps> = ({ onOpenContact }) => {
  return (
    <>
      {/* Fixed Right Editorial Metadata Column (Desktop Only) */}
      <aside
        aria-label="Editorial Sidebar Metadata"
        className="hidden xl:flex fixed right-0 top-0 bottom-0 w-16 flex-col justify-between items-center py-10 z-30 pointer-events-none border-l border-[#292929]/10 bg-[#EAEAE4]/50 backdrop-blur-[2px]"
      >
        {/* Top Node Coordinate */}
        <div className="text-[10px] font-mono tracking-widest text-[#292929]/50 select-none">
          SYS.V2
        </div>

        {/* Center Vertical Action / Indicator */}
        <div className="flex flex-col items-center gap-6 pointer-events-auto">
          <div className="w-[1px] h-16 bg-[#292929]/20"></div>
          <button
            id="vertical-contact-trigger"
            onClick={onOpenContact}
            className="writing-vertical text-[11px] font-mono uppercase tracking-[0.3em] text-[#292929]/70 hover:text-[#8C2545] transition-colors cursor-pointer focus:outline-hidden"
            title="Contact Us Now"
          >
            CONTACT // ARCHITECTURE
          </button>
          <div className="w-[1px] h-16 bg-[#292929]/20"></div>
        </div>

        {/* Bottom Coordinates & Ticker Element */}
        <div className="writing-vertical text-[10px] font-mono tracking-[0.25em] text-[#292929]/40 select-none">
          29.9792° N, 31.1342° E
        </div>
      </aside>

      {/* Fixed Left Thin Editorial Hairline Indicator */}
      <div 
        aria-hidden="true"
        className="hidden xl:block fixed left-6 top-24 bottom-24 w-[1px] bg-[#292929]/10 pointer-events-none z-10"
      />
    </>
  );
};
