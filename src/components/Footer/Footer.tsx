import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, ArrowUpRight, Check, Send } from 'lucide-react';
import { HOTEL_INFO } from '../../data/hotelData';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    // Subterranean Indian Standard Time (IST / UTC+5:30)
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setCurrentTime(new Intl.DateTimeFormat('en-IN', options).format(now) + ' IST');
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#10100F] text-[#EAE4D9] border-t border-[#292825] overflow-hidden pt-20 pb-12">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[radial-gradient(ellipse_at_top,rgba(197,174,139,0.06),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 relative z-10">
        {/* Top Section: Giant Brand Statement */}
        <div className="border-b border-[#292825] pb-16 mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <span className="text-[10px] uppercase tracking-[0.35em] text-[#C5AE8B] font-mono block mb-3">
                Subterranean Sanctuary · Sector 04
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#EAE4D9] tracking-tight">
                Escape the Surface.
              </h2>
            </div>
            <button
              onClick={scrollToTop}
              className="group self-start md:self-end flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#77736A] hover:text-[#C5AE8B] transition-colors duration-300 pb-2 border-b border-[#292825] hover:border-[#C5AE8B]"
            >
              <span>Back to Surface</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Middle Section: Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-16 border-b border-[#292825]">
          {/* Col 1 & 2: Brand & Newsletter */}
          <div className="lg:col-span-2 flex flex-col justify-between pr-0 lg:pr-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <svg
                  viewBox="0 0 32 32"
                  className="w-6 h-6 text-[#C5AE8B]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <polygon points="16,3 29,27 3,27" />
                  <circle cx="16" cy="19" r="1.5" fill="#C5AE8B" />
                </svg>
                <span className="font-serif text-2xl tracking-[0.25em] text-[#EAE4D9]">NOCTRA</span>
              </div>
              <p className="text-xs text-[#77736A] leading-relaxed max-w-sm mb-8 font-light">
                An ultra-luxury subterranean sanctuary carved deep within monolithic mountain rock.
                Preserving silence, natural mineral hydrotherapy, and architectural purity.
              </p>
            </div>

            {/* Newsletter Dispatch */}
            <div className="bg-[#191918]/60 p-5 border border-[#292825] backdrop-blur-sm">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5AE8B] block mb-2 font-mono">
                Subterranean Dispatch
              </span>
              <p className="text-xs text-[#77736A] mb-4 font-light">
                Receive private invitations to seasonal subterranean degustations and architectural previews.
              </p>

              {subscribed ? (
                <div className="flex items-center gap-2 text-xs text-[#C5AE8B] py-2">
                  <Check className="w-4 h-4" />
                  <span>Your frequency has been recorded into the mountain archives.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter private email"
                    required
                    className="flex-1 bg-[#10100F] border border-[#292825] focus:border-[#C5AE8B] px-3 py-2 text-xs text-[#EAE4D9] placeholder-[#77736A] focus:outline-none transition-colors"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe to newsletter"
                    className="px-3 py-2 bg-[#C5AE8B] text-[#10100F] hover:bg-[#DFCDB4] transition-colors flex items-center justify-center"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h3 className="text-[11px] uppercase tracking-[0.25em] text-[#C5AE8B] font-mono mb-6">
              Sanctuary
            </h3>
            <ul className="space-y-3 text-xs tracking-wider font-light">
              <li>
                <Link to="/residence" className="text-[#77736A] hover:text-[#EAE4D9] transition-colors">
                  The Residences
                </Link>
              </li>
              <li>
                <Link to="/experiences" className="text-[#77736A] hover:text-[#EAE4D9] transition-colors">
                  Underground Spa
                </Link>
              </li>
              <li>
                <Link to="/experiences" className="text-[#77736A] hover:text-[#EAE4D9] transition-colors">
                  Cripta Gastronomy
                </Link>
              </li>
              <li>
                <Link to="/experiences" className="text-[#77736A] hover:text-[#EAE4D9] transition-colors">
                  The Abyss Pool
                </Link>
              </li>
              <li>
                <Link to="/architecture" className="text-[#77736A] hover:text-[#EAE4D9] transition-colors">
                  Architectural Archive
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-[#77736A] hover:text-[#EAE4D9] transition-colors">
                  Visual Exhibition
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Coordinates & Protocol */}
          <div>
            <h3 className="text-[11px] uppercase tracking-[0.25em] text-[#C5AE8B] font-mono mb-6">
              Coordinates
            </h3>
            <div className="space-y-3 text-xs text-[#77736A] font-light">
              <p className="leading-relaxed">
                {HOTEL_INFO.location}
              </p>
              <p className="font-mono text-[10px] text-[#C5AE8B]/80">
                {HOTEL_INFO.coordinates}
              </p>
              <div className="pt-2">
                <span className="block text-[10px] uppercase text-[#C5AE8B] tracking-wider mb-1">
                  Mountain Clock
                </span>
                <span className="font-mono text-xs text-[#EAE4D9]">{currentTime || '12:00:00 IST'}</span>
              </div>
              <div className="pt-2">
                <span className="block text-[10px] uppercase text-[#C5AE8B] tracking-wider mb-1">
                  Arrival Protocol
                </span>
                <p className="text-[11px] leading-relaxed">
                  Confidential Sahyadri Funicular Gate 07 or Private Helipad drop.
                </p>
              </div>
            </div>
          </div>

          {/* Col 5: Enquiries & Concierge */}
          <div>
            <h3 className="text-[11px] uppercase tracking-[0.25em] text-[#C5AE8B] font-mono mb-6">
              Concierge
            </h3>
            <div className="space-y-3 text-xs text-[#77736A] font-light">
              <div>
                <span className="block text-[10px] uppercase text-[#77736A] tracking-wider">Direct Dial</span>
                <a href={`tel:${HOTEL_INFO.phone}`} className="text-[#EAE4D9] hover:text-[#C5AE8B] transition-colors font-mono">
                  {HOTEL_INFO.phone}
                </a>
              </div>
              <div>
                <span className="block text-[10px] uppercase text-[#77736A] tracking-wider">Sanctuary Desk</span>
                <a href={`mailto:${HOTEL_INFO.reservationsEmail}`} className="text-[#EAE4D9] hover:text-[#C5AE8B] transition-colors break-all">
                  {HOTEL_INFO.reservationsEmail}
                </a>
              </div>

              <div className="pt-4 flex flex-col gap-2">
                <Link
                  to="/reservations"
                  className="inline-flex items-center gap-1.5 text-xs text-[#C5AE8B] hover:text-[#DFCDB4] transition-colors"
                >
                  <span>Book Private Residence</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-xs text-[#77736A] hover:text-[#EAE4D9] transition-colors"
                >
                  <span>General Enquiries</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#77736A] font-light gap-4">
          <div className="flex flex-wrap items-center gap-6">
            <span>© {new Date().getFullYear()} NOCTRA SANCTUARY HOSPITALITY PVT. LTD. All rights reserved.</span>
            <span className="hidden sm:inline text-[#292825]">|</span>
            <Link to="/privacy-policy" className="hover:text-[#C5AE8B] transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="hover:text-[#C5AE8B] transition-colors">
              Terms & Conditions
            </Link>
          </div>

          <div className="flex items-center gap-5 text-xs tracking-widest uppercase">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5AE8B] transition-colors">
              IG
            </a>
            <a href="https://vimeo.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5AE8B] transition-colors">
              VM
            </a>
            <a href="https://artsy.net" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5AE8B] transition-colors">
              AR
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
