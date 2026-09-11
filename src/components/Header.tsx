import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Terminal, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  onOpenContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Philosophy', href: '#philosophy' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <header
        id="gooba-main-navigation"
        role="banner"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#EAEAE4]/95 backdrop-blur-md border-b border-[#292929]/10 py-3 shadow-xs'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Brand Wordmark & Descriptor */}
          <a
            href="#"
            id="brand-logo-link"
            className="group flex flex-col items-start focus:outline-hidden focus:ring-2 focus:ring-[#8C2545]"
            aria-label="GOOBA Software House Home"
          >
            <div className="flex items-center gap-2">
              <span className="font-['Montserrat',sans-serif] text-2xl lg:text-3xl font-black tracking-[0.22em] text-[#292929] group-hover:text-[#8C2545] transition-colors">
                GOOBA

              </span>
                                            

              <span className="inline-block w-1.5 h-1.5 bg-[#8C2545] rounded-full"></span>
            </div>
            <span className="text-[10px] tracking-[0.32em] font-medium text-[#292929]/70 uppercase font-mono mt-0.5">
              Software House
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            id="desktop-nav-items"
            aria-label="Main Navigation"
            className="hidden md:flex items-center space-x-8"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs uppercase tracking-[0.2em] font-medium text-[#292929]/80 hover:text-[#3D0617] hover:tracking-[0.25em] transition-all relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#8C2545] hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Live System Indicator & CTA */}
          <div className="hidden sm:flex items-center space-x-5">
            <div
              id="system-status-indicator"
              className="flex items-center gap-2 px-2.5 py-1 bg-[#2C6350]/10 border border-[#2C6350]/20 rounded-xs text-[11px] font-mono text-[#2C6350]"
              title="All production systems operational"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2C6350] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2C6350]"></span>
              </span>
              <span className="tracking-wider">CONNECTED</span>
            </div>

            <button
              id="header-contact-btn"
              onClick={onOpenContact}
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 bg-[#3D0617] text-[#EAEAE4] text-xs uppercase tracking-[0.2em] font-medium rounded-xs hover:bg-[#8C2545] transition-all duration-200 active:scale-[0.98] focus:outline-hidden focus:ring-2 focus:ring-[#8C2545]"
            >
              <span>Contact now</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#292929] hover:text-[#8C2545] focus:outline-hidden focus:ring-2 focus:ring-[#8C2545]"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close Navigation' : 'Open Navigation'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Slide-Out Navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-overlay"
          className="fixed inset-0 z-50 bg-[#3D0617]/90 backdrop-blur-lg flex flex-col justify-between p-8 text-[#EAEAE4] md:hidden animate-fade-in"
        >
          <div className="flex items-center justify-between border-b border-[#EAEAE4]/10 pb-6">
            <div className="flex flex-col">

              <span className="font-['Montserrat',sans-serif] text-2xl font-black tracking-[0.22em]">
                GOOBA
              </span>
              <span className="text-[10px] tracking-[0.3em] font-mono text-[#EAEAE4]/70">
                SOFTWARE HOUSE
              </span>
            </div>
            <button
              id="mobile-nav-close-btn"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#EAEAE4] hover:text-[#8C2545] focus:outline-hidden"
              aria-label="Close menu"
            >
              <X className="w-7 h-7" />
            </button>
          </div>

          <div className="flex flex-col space-y-6 my-auto">
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="group flex items-baseline justify-between text-2xl font-['Montserrat',sans-serif] font-bold tracking-[0.1em] text-[#EAEAE4] hover:text-[#8C2545] transition-colors py-2 border-b border-[#EAEAE4]/10"
              >
                <span>{link.label}</span>
                <span className="text-xs font-mono text-[#EAEAE4]/40 group-hover:text-[#8C2545]">
                  [0{idx + 1}]
                </span>
              </a>
            ))}
          </div>

          <div className="space-y-4 pt-6 border-t border-[#EAEAE4]/10">
            <div className="flex items-center justify-between text-xs font-mono text-[#EAEAE4]/60">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#2C6350]" />
                INFRASTRUCTURE LEVEL 4
              </span>
              <span>EST. 2024</span>
            </div>

            <button
              id="mobile-cta-contact-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-4 bg-[#8C2545] text-[#EAEAE4] text-xs font-bold uppercase tracking-[0.25em] flex items-center justify-center gap-2 active:bg-[#3D0617]"
            >
              <span>Initiate Architecture Call</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
