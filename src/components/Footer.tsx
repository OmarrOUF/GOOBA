import React, { useState, useEffect } from 'react';
// import { GLOBAL_TIMEZONES } from '../data/content';
import { ArrowUp, ArrowUpRight, Github, Smile , Linkedin, Shield, Terminal, Facebook, Instagram } from 'lucide-react';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const [times, setTimes] = useState<Record<string, string>>({});

  // useEffect(() => {
  //   const updateClocks = () => {
  //     const newTimes: Record<string, string> = {};
  //     GLOBAL_TIMEZONES.forEach(tz => {
  //       try {
  //         const formatter = new Intl.DateTimeFormat('en-GB', {
  //           timeZone: tz.timezone,
  //           hour: '2-digit',
  //           minute: '2-digit',
  //           second: '2-digit',
  //           hour12: false
  //         });
  //         newTimes[tz.code] = formatter.format(new Date());
  //       } catch {
  //         newTimes[tz.code] = '--:--:--';
  //       }
  //     });
  //     setTimes(newTimes);
  //   };

  //   updateClocks();
  //   const interval = setInterval(updateClocks, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="gooba-footer"
      role="contentinfo"
      aria-label="Editorial Footer"
      className="bg-[#292929] text-[#EAEAE4] border-t-2 border-[#3D0617] pt-20 pb-12 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Global Timezones Ticker Bar */}
        {/* <div className="border-b border-[#EAEAE4]/10 pb-8 mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#2C6350]"></span>
            <span className="text-[11px] font-mono tracking-widest text-[#EAEAE4]/50 uppercase">
              DISTRIBUTED ENGINEERING HUBS // ACTIVE CLOCKS
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 font-mono">
            {GLOBAL_TIMEZONES.map(tz => (
              <div key={tz.code} className="border-l border-[#EAEAE4]/20 pl-3">
                <span className="block text-[10px] text-[#EAEAE4]/50 tracking-wider">
                  {tz.city} [{tz.code}]
                </span>
                <span className="text-sm font-bold text-[#EAEAE4] tracking-widest">
                  {times[tz.code] || '12:00:00'}
                </span>
              </div>
            ))}
          </div>
        </div> */}

        {/* Main Footer Editorial Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-['Montserrat',sans-serif] text-3xl font-black tracking-[0.22em] text-[#EAEAE4]">
                GOOBA
              </span>
              <span className="inline-block w-2 h-2 bg-[#8C2545] rounded-full"></span>
            </div>
            <span className="text-[11px] tracking-[0.3em] font-medium text-[#EAEAE4]/60 uppercase font-mono block mb-6">
              Software House • Estd. 2024
            </span>

            <p className="text-sm text-[#EAEAE4]/70 font-sans leading-relaxed max-w-sm mb-6">
              Ready to Scale Your Operations? GOOBA is a software house that builds generational software systems for enterprises, ensuring longevity, maintainability, and sub-100ms latency.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/goobaeg"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-[#EAEAE4]/10 hover:bg-[#8C2545] text-[#EAEAE4] transition-colors rounded-xs"
                aria-label="GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://huggingface.co/GOOBAEG"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-[#EAEAE4]/10 hover:bg-[#8C2545] text-[#EAEAE4] transition-colors rounded-xs"
                aria-label="Hugging Face Profile"
              >
                <Smile className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/goobasoftware"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-[#EAEAE4]/10 hover:bg-[#8C2545] text-[#EAEAE4] transition-colors rounded-xs"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="http://facebook.com/profile.php?id=61587888975000"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-[#EAEAE4]/10 hover:bg-[#8C2545] text-[#EAEAE4] transition-colors rounded-xs"
                aria-label="Facebook Profile"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/gooba.software/"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-[#EAEAE4]/10 hover:bg-[#8C2545] text-[#EAEAE4] transition-colors rounded-xs"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
             
              <button
                onClick={scrollToTop}
                className="p-2.5 bg-[#EAEAE4]/10 hover:bg-[#8C2545] text-[#EAEAE4] transition-colors rounded-xs ml-auto"
                aria-label="Back to top"
                title="Scroll back to top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-[0.25em] text-[#8C2545] mb-5 font-bold">
              OUR SERVICES
            </h4>
            <ul className="space-y-3 text-xs font-mono text-[#EAEAE4]/80">
              <li>
                <a href="#systems" className="hover:text-[#8C2545] transition-colors flex items-center gap-1.5">
                  <span>[01] Software Management Systems</span>
                </a>
              </li>
              <li>
                <a href="#systems" className="hover:text-[#8C2545] transition-colors flex items-center gap-1.5">
                  <span>[02] SaaS Platforms</span>
                </a>
              </li>
              <li>
                <a href="#systems" className="hover:text-[#8C2545] transition-colors flex items-center gap-1.5">
                  <span>[03] Operational Software</span>
                </a>
              </li>
              <li>
                <a href="#systems" className="hover:text-[#8C2545] transition-colors flex items-center gap-1.5">
                  <span>[04] Automation</span>
                </a>
              </li>
              <li>
                <a href="#systems" className="hover:text-[#8C2545] transition-colors flex items-center gap-1.5">
                  <span>[05] Data Systems</span>
                </a>
              </li>
              <li>
                <a href="#systems" className="hover:text-[#8C2545] transition-colors flex items-center gap-1.5">
                  <span>[06] Mobile Apps</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Case Studies & Operations */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.25em] text-[#8C2545] mb-5 font-bold">
              PREVIOUS WORK & CASE STUDIES
            </h4>
            <ul className="space-y-3 text-xs font-mono text-[#EAEAE4]/80 mb-6">
              <li>
                <a href="#case-studies" className="hover:text-[#8C2545] transition-colors flex items-center justify-between">
                  <span>GOOBA MUN Sites</span>
                  <span className="text-emerald-400">5W → 5M</span>
                </a>
              </li>
              <li>
                <a href="#case-studies" className="hover:text-[#8C2545] transition-colors flex items-center justify-between">
                  <span>MIANU-SM III</span>
                  <span className="text-[#EAEAE4]/50">160% INCREASE IN OPERATIONS</span>
                </a>
              </li>
              <li>
                <a href="#case-studies" className="hover:text-[#8C2545] transition-colors flex items-center justify-between">
                  <span>CMDMNU-I</span>
                  <span className="text-[#EAEAE4]/50">THE 1ST FULLY DIGITAL MUN IN EGYPT</span>
                </a>
              </li>
            </ul>

            <div className="p-4 bg-[#3D0617] border border-[#8C2545]/40">
              <span className="text-[10px] font-mono text-[#EAEAE4]/60 uppercase block mb-1">
                EXECUTIVE CONSULTATION
              </span>
              <p className="text-xs font-sans text-[#EAEAE4]/90 mb-3">
                Ready to scale?
              </p>
              <button
                onClick={onOpenContact}
                className="w-full py-2 bg-[#8C2545] hover:bg-[#A82E55] text-center text-xs font-mono uppercase tracking-wider text-[#EAEAE4] transition-colors font-bold"
              >
                Consult with GOOBA
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Ticker & Definitive Brand Statement */}
        <div className="border-t border-[#EAEAE4]/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-[#EAEAE4]/50">
          <div>
            <span>COPYRIGHT © {new Date().getFullYear()} GOOBA SOFTWARE HOUSE. ALL RIGHTS RESERVED.</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-emerald-400">Based in Alexandria</span>
            <span>•</span>
            <span>Ready to scale?</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
