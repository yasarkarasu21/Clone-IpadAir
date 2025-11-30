import React, { useState, useEffect } from 'react';
import { Apple, Search, ShoppingBag, Menu, X, ChevronRight, ChevronDown } from 'lucide-react';
import { GLOBAL_NAV_LINKS, LOCAL_NAV_LINKS } from '../constants';

export const GlobalNav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#161617]/95 backdrop-blur-md text-[#f5f5f7] text-xs font-light relative z-50">
      <div className="max-w-[1024px] mx-auto px-4 h-11 flex justify-between items-center">
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>

        {/* Logo */}
        <a href="#" className="hover:opacity-80 transition-opacity">
          <Apple size={16} fill="currentColor" />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8">
          {GLOBAL_NAV_LINKS.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              className="hover:text-white text-[#d6d6d6] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Action Icons */}
        <div className="flex gap-6">
          <a href="#" className="hover:opacity-80 transition-opacity">
            <Search size={16} />
          </a>
          <a href="#" className="hover:opacity-80 transition-opacity">
            <ShoppingBag size={16} />
          </a>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-11 left-0 w-full bg-[#161617] h-screen px-8 py-4 md:hidden">
          <ul className="flex flex-col gap-4 text-xl font-medium">
            {GLOBAL_NAV_LINKS.map((link) => (
              <li key={link.label} className="border-b border-gray-700 pb-2">
                <a href={link.href} className="block">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export const LocalNav: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200 transition-colors duration-300 ${scrolled ? 'border-opacity-100' : 'border-opacity-0'}`}>
      <div className="max-w-[1024px] mx-auto px-4 h-[52px] flex justify-between items-center">
        <a href="#" className="text-[21px] font-semibold text-[#1d1d1f] hover:opacity-80">
          iPad Air
        </a>

        {/* Desktop Local Links */}
        <div className="hidden md:flex items-center gap-6 text-xs">
          {LOCAL_NAV_LINKS.map((link, index) => (
            <a 
              key={link.label} 
              href={link.href}
              className={`${index === 0 ? 'text-[#1d1d1f] cursor-default opacity-50' : 'text-[#1d1d1f] hover:text-[#06c]'} transition-colors`}
            >
              {link.label}
            </a>
          ))}
          <a href="#" className="bg-[#0071e3] text-white rounded-full px-3 py-1 hover:bg-[#0077ed] transition-colors">
            Satın Alın
          </a>
        </div>

        {/* Mobile Local Menu Trigger */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <ChevronDown size={18} className={`transition-transform duration-300 ${mobileMenuOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>
      
      {/* Mobile Local Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white absolute w-full border-b border-gray-200 px-4 py-2">
           {LOCAL_NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} className="block py-2 text-sm text-[#1d1d1f] border-b border-gray-100 last:border-0">
              {link.label}
            </a>
          ))}
           <a href="#" className="block py-2 text-sm text-[#0071e3] font-medium">
            Satın Alın
          </a>
        </div>
      )}
    </div>
  );
};
