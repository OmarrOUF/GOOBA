import React, { useState, useEffect } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Cpu,
  Layers,
  ShieldCheck,
  Terminal,
} from "lucide-react";

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeConsoleTab, setActiveConsoleTab] = useState<
    "topology" | "telemetry" | "consensus"
  >("topology");

  // Interactive subtle 3D tilt tracking for the gemstone
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 16;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section
      id="hero"
      aria-label="Hero Section"
      className="relative min-h-[92vh] pt-28 pb-16 lg:pt-36 lg:pb-24 flex flex-col justify-between overflow-hidden border-b border-[#292929]/10"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Architectural Grid Lines */}
      <div
        aria-hidden="true"
        className="absolute inset-0 editorial-grid pointer-events-none opacity-40"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full my-auto">
        {/* Editorial Header Eyebrow with Monospace Index */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 lg:mb-12 border-b border-[#292929]/15 pb-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold tracking-widest text-[#8C2545] uppercase">
              [Section 01]
            </span>
            <span className="text-[#292929]/30">/</span>
            <span className="text-xs uppercase tracking-[0.25em] text-[#292929]/70 font-medium">
              Who are we?
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-6 text-[11px] font-mono text-[#292929]/60">
            <span>GOOBA Software House</span>
            <span>•</span>
            <span className="text-[#2C6350] font-bold">ESTD.2024</span>
          </div>
        </div>

        {/* Asymmetric Dual Hero Layout (Gemstone Left, Editorial Typography Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT: 3D Faceted GOOBA Gemstone Artifact with Dynamic Lighting & Perspective */}
          <div className="lg:col-span-5 relative flex flex-col items-center lg:items-start order-2 lg:order-1">
            <div className="relative w-full max-w-[420px] lg:max-w-full aspect-square flex items-center justify-center">
              {/* Architectural Radiating Accent Rings (Precision Geometry) */}
              <div
                aria-hidden="true"
                className="absolute inset-4 rounded-full border border-[#8C2545]/20 animate-spin-slow pointer-events-none"
                style={{ animationDuration: "60s" }}
              />
              <div
                aria-hidden="true"
                className="absolute inset-12 rounded-full border border-dashed border-[#3D0617]/15 pointer-events-none"
              />

              {/* Deep Burgundy Glow Caustics */}
              <div
                aria-hidden="true"
                className="absolute w-72 h-72 rounded-full bg-[#8C2545]/15 blur-3xl -z-10 pointer-events-none transition-transform duration-500"
                style={{
                  transform: `translate(${mousePos.x * 1.5}px, ${mousePos.y * 1.5}px)`,
                }}
              />

              {/* The Gemstone Artifact */}
              <div
                id="gemstone-artifact-container"
                className="relative z-10 w-4/5 h-4/5 flex items-center justify-center cursor-crosshair transition-transform duration-300 ease-out"
                style={{
                  transform: `perspective(1000px) rotateX(${-mousePos.y}deg) rotateY(${mousePos.x}deg) scale3d(1.02, 1.02, 1.02)`,
                }}
              >
                <img
                  src="/GEM.png"
                  alt="GOOBA 3D Faceted Burgundy Gemstone Artifact"
                  className="w-full h-full object-contain filter drop-shadow-[0_25px_35px_rgba(61,6,23,0.35)] select-none transition-all duration-300"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />

                {/* Interactive Facet Metadata Tag Floating */}
                <div
                  className="absolute -bottom-3 -right-2 sm:right-4 bg-[#3D0617] text-[#EAEAE4] px-3.5 py-1.5 border border-[#8C2545]/40 text-[10px] font-mono tracking-widest uppercase flex items-center gap-2 shadow-lg"
                  style={{
                    transform: `translate(${mousePos.x * -0.5}px, ${mousePos.y * -0.5}px)`,
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8C2545] animate-pulse"></span>
                  ARTIFACT // RUBY
                </div>
              </div>
            </div>

            {/* Gemstone Architecture Spec Notes */}
            {/* <div className="mt-4 w-full grid grid-cols-3 gap-2 text-left border-t border-[#292929]/10 pt-4">
              <div>
                <p className="text-[10px] font-mono text-[#292929]/50 uppercase">
                  Density
                </p>
                <p className="text-xs font-mono font-bold text-[#292929]">
                  3.52 g/cm³
                </p>
              </div>
              <div>
                <p className="text-[10px] font-mono text-[#292929]/50 uppercase">
                  Refraction
                </p>
                <p className="text-xs font-mono font-bold text-[#8C2545]">
                  2.417 Index
                </p>
              </div>
              <div>
                <p className="text-[10px] font-mono text-[#292929]/50 uppercase">
                  Integrity
                </p>
                <p className="text-xs font-mono font-bold text-[#2C6350]">
                  100% Solid
                </p>
              </div>
            </div> */}
          </div>

          {/* RIGHT: Stark, Editorial Typography & Mission Statement */}
          <div className="lg:col-span-7 flex flex-col justify-center order-1 lg:order-2">
            {/* Editorial Category Tag */}
            <div className="inline-flex items-center gap-2 mb-4 text-[#8C2545]">
              <span className="w-6 h-[1px] bg-[#8C2545]"></span>
              <span className="text-xs uppercase tracking-[0.28em] font-mono font-bold">
                Systems Engineering & Architecture
              </span>
            </div>

            {/* Massive Century Gothic Display Headline */}
            <h1
              id="hero-headline"
              className="font-['Montserrat',sans-serif] text-4xl sm:text-5xl lg:text-[4rem] xl:text-[4.35rem] font-extrabold text-[#292929] leading-[1.08] tracking-[-0.03em] mb-6"
            >
              Digital infrastructure for organizations that are{" "}
              <span className="relative inline-block text-[#3D0617] italic font-['Playfair_Display',serif] font-normal">
                ready to scale.
                <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#8C2545]/40"></span>
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg lg:text-xl text-[#292929]/80 font-normal leading-relaxed max-w-2xl mb-8 font-sans">
              We design and build software systems that turn complex operations
              into scalable, intelligent infrastructure. Zero legacy
              bottlenecks. Zero compromises on uptime.
            </p>

            {/* Action Buttons & Proof Metric */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                id="hero-explore-systems-btn"
                href="#services"
                className="group inline-flex items-center gap-3 px-7 py-4 bg-[#3D0617] text-[#EAEAE4] text-xs font-bold uppercase tracking-[0.22em] rounded-xs hover:bg-[#8C2545] transition-all duration-200 active:scale-[0.98] shadow-sm"
              >
                <span>Explore Services</span>
                <span className="font-mono text-[10px] text-[#EAEAE4]/60 group-hover:text-[#EAEAE4]">
                  [02]
                </span>
              </a>

              <button
                id="hero-initiate-call-btn"
                onClick={onOpenContact}
                className="group inline-flex items-center gap-2 px-7 py-4 bg-transparent border border-[#292929]/25 text-[#292929] text-xs font-bold uppercase tracking-[0.22em] rounded-xs hover:border-[#8C2545] hover:text-[#8C2545] transition-all duration-200 active:scale-[0.98]"
              >
                <span>Contact us now</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>

            {/* Live Interactive Architectural Telemetry Card */}
            {/* <div
              id="hero-telemetry-console"
              className="border border-[#292929]/20 bg-[#EAEAE4] p-4 lg:p-5 rounded-xs shadow-xs"
            >
              <div className="flex items-center justify-between border-b border-[#292929]/15 pb-2.5 mb-3">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#8C2545]" />
                  <span className="text-xs font-mono font-bold tracking-wider text-[#292929]">
                    GOOBA_CORE_TELEMETRY.RUN
                  </span>
                </div>
                <div className="flex gap-1.5">
                  {(["topology", "telemetry", "consensus"] as const).map(
                    (tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveConsoleTab(tab)}
                        className={`text-[10px] font-mono px-2 py-0.5 uppercase transition-colors ${
                          activeConsoleTab === tab
                            ? "bg-[#3D0617] text-[#EAEAE4]"
                            : "text-[#292929]/60 hover:text-[#292929]"
                        }`}
                      >
                        {tab}
                      </button>
                    ),
                  )}
                </div>
              </div>

              {activeConsoleTab === "topology" && (
                <div className="font-mono text-[11px] text-[#292929]/80 space-y-1">
                  <div className="flex justify-between">
                    <span className="text-[#8C2545]">&gt; INGRESS.GATEWAY</span>
                    <span>ACTIVE_MULTI_REGION [L4 LB]</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#2C6350]">&gt; EVENT_BUS</span>
                    <span>KAFKA_STREAMING [0.8ms AVG]</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#292929]">
                      &gt; PARLIAMENTARY_DB
                    </span>
                    <span>CRDT_CONSENSUS [0 DIVERGENCE]</span>
                  </div>
                </div>
              )}

              {activeConsoleTab === "telemetry" && (
                <div className="font-mono text-[11px] text-[#292929]/80 space-y-1">
                  <div className="flex justify-between">
                    <span>GLOBAL CONCURRENT DELEGATES</span>
                    <span className="font-bold text-[#8C2545]">
                      14,280 ACTIVE
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>P99 RESPONSE DURATION</span>
                    <span className="font-bold text-[#2C6350]">14.2 MS</span>
                  </div>
                  <div className="flex justify-between">
                    <span>ANOMALY REJECTION RATE</span>
                    <span className="font-bold text-[#292929]">100.00%</span>
                  </div>
                </div>
              )}

              {activeConsoleTab === "consensus" && (
                <div className="font-mono text-[11px] text-[#292929]/80 space-y-1">
                  <div className="flex justify-between">
                    <span>VOTING PROTOCOL QUORUM</span>
                    <span className="text-[#2C6350] font-bold">
                      VERIFIED [2/3 SUPERMAJORITY]
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>ROLLING RECOVERY WINDOW</span>
                    <span>&lt; 3.2 SECONDS</span>
                  </div>
                  <div className="flex justify-between">
                    <span>SECURITY ISOLATION</span>
                    <span className="text-[#8C2545] font-bold">
                      ENCLAVE SECURE
                    </span>
                  </div>
                </div>
              )}
            </div> */}
          </div>
        </div>
      </div>

      {/* Editorial Bottom Ticker Strip (Adapted from Reference Template) */}
      {/* <div
        id="hero-bottom-ticker"
        className="w-full border-t border-[#292929]/15 pt-5 mt-10"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#292929]/70">
          <div className="flex items-center gap-4">
            <span className="text-[#8C2545] font-bold">●</span>
            <span className="tracking-wider">
              COPYRIGHT © 2024–2026 GOOBA INC.
            </span>
            <span className="hidden md:inline text-[#292929]/30">|</span>
            <span className="hidden md:inline tracking-wider">
              ALL ARCHITECTURAL RIGHTS RESERVED
            </span>
          </div>

          <div className="flex items-center gap-6 overflow-x-auto py-1">
            <span className="hover:text-[#8C2545] transition-colors cursor-pointer">
              SYSTEMS
            </span>
            <span>•</span>
            <span className="hover:text-[#8C2545] transition-colors cursor-pointer">
              ARCHITECTURE
            </span>
            <span>•</span>
            <span className="hover:text-[#8C2545] transition-colors cursor-pointer">
              AUTOMATION
            </span>
            <span>•</span>
            <span className="hover:text-[#8C2545] transition-colors cursor-pointer">
              AI ENGINES
            </span>
          </div>

          <a
            href="#systems"
            className="flex items-center gap-1.5 text-[#3D0617] hover:text-[#8C2545] transition-colors"
            aria-label="Scroll down to explore systems"
          >
            <span>DISCOVER</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </a>
        </div>
      </div> */}
    </section>
  );
};
