import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { HOTEL_INFO } from '../../data/hotelData';

interface NavItem {
  name: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { name: 'The Residence', href: '/residence' },
  { name: 'Experiences', href: '/experiences' },
  { name: 'Architecture', href: '/architecture' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#10100F]/90 backdrop-blur-md py-4 border-b border-[#292825]/60 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
            : 'bg-gradient-to-b from-[#10100F]/80 via-[#10100F]/30 to-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            to="/"
            className="group flex items-center gap-3 text-white transition-opacity hover:opacity-90 focus:outline-none"
            aria-label="NOCTRA Home"
          >
            {/* Geometric Mountain Monolith Icon */}
            <div className="w-8 h-8 flex items-center justify-center relative">
              <svg
                viewBox="0 0 32 32"
                className="w-7 h-7 text-[#C5AE8B] group-hover:scale-105 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <polygon points="16,3 29,27 3,27" strokeLinecap="round" strokeLinejoin="round" />
                <polygon points="16,11 23,25 9,25" fill="rgba(197, 174, 139, 0.25)" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="16" cy="19" r="1.5" fill="#C5AE8B" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl tracking-[0.2em] font-light text-[#EAE4D9] uppercase leading-none">
                NOCTRA
              </span>
              <span className="text-[8px] tracking-[0.3em] uppercase text-[#77736A] font-light mt-1">
                Subterranean
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-[12px] uppercase tracking-[0.2em] font-light">
            {NAV_ITEMS.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative py-1 transition-colors duration-300 ${
                    isActive ? 'text-[#C5AE8B]' : 'text-[#EAE4D9]/80 hover:text-[#EAE4D9]'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.span
                      layoutId="navUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#C5AE8B]"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTA & Mobile Trigger */}
          <div className="flex items-center gap-5">
            <Link
              to="/reservations"
              className="relative hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-[11px] uppercase tracking-[0.22em] font-medium text-[#10100F] bg-[#C5AE8B] hover:bg-[#DFCDB4] transition-all duration-300 border border-[#C5AE8B] group shadow-[0_4px_18px_rgba(197,174,139,0.15)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Reserve Escape
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#EAE4D9] hover:text-[#C5AE8B] focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between items-end">
                <span
                  className={`h-[1px] bg-current transition-all duration-300 ${
                    mobileMenuOpen ? 'w-6 translate-y-2 rotate-45' : 'w-6'
                  }`}
                />
                <span
                  className={`h-[1px] bg-current transition-all duration-300 ${
                    mobileMenuOpen ? 'opacity-0' : 'w-4'
                  }`}
                />
                <span
                  className={`h-[1px] bg-current transition-all duration-300 ${
                    mobileMenuOpen ? 'w-6 -translate-y-2 -rotate-45' : 'w-5'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Overlay Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#10100F]/98 backdrop-blur-2xl flex flex-col justify-between px-6 pt-28 pb-10 overflow-y-auto lg:hidden"
          >
            {/* Background subtle watermark */}
            <div className="absolute right-0 bottom-10 select-none pointer-events-none opacity-5 font-serif text-[180px] leading-none text-[#C5AE8B]">
              N
            </div>

            <div className="flex flex-col gap-6">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#77736A]">
                Subterranean Navigation
              </span>

              <nav className="flex flex-col gap-4">
                <Link
                  to="/"
                  className={`font-serif text-3xl sm:text-4xl font-light tracking-wide transition-colors ${
                    location.pathname === '/' ? 'text-[#C5AE8B]' : 'text-[#EAE4D9] hover:text-[#C5AE8B]'
                  }`}
                >
                  Home
                </Link>

                {NAV_ITEMS.map((item, idx) => {
                  const isActive = location.pathname === item.href;
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * idx, duration: 0.3 }}
                    >
                      <Link
                        to={item.href}
                        className={`font-serif text-3xl sm:text-4xl font-light tracking-wide transition-colors ${
                          isActive ? 'text-[#C5AE8B]' : 'text-[#EAE4D9] hover:text-[#C5AE8B]'
                        }`}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
            </div>

            <div className="pt-8 border-t border-[#292825] flex flex-col gap-6">
              <Link
                to="/reservations"
                className="w-full py-4 bg-[#C5AE8B] text-[#10100F] uppercase text-xs tracking-[0.25em] font-medium text-center flex items-center justify-center gap-2"
              >
                Reserve Your Escape
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <div className="flex flex-col sm:flex-row justify-between text-[11px] text-[#77736A] tracking-wider font-mono gap-2">
                <span>{HOTEL_INFO.coordinates}</span>
                <span>{HOTEL_INFO.phone}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
