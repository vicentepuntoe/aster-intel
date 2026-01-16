'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollDifference = scrollPosition - lastScrollY.current;
      
      // Change header style after scrolling past hero section (approximately 600px)
      setIsScrolled(scrollPosition > 600);
      
      // Hide navbar when scrolling down more than 200px, show when scrolling up
      if (scrollDifference > 0 && scrollPosition > 200) {
        setIsVisible(false);
      } else if (scrollDifference < 0) {
        setIsVisible(true);
      }
      
      lastScrollY.current = scrollPosition;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
      style={{
        backgroundColor: '#00152E',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 md:h-28 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/aster.svg"
              alt="Aster Intel"
              width={300}
              height={100}
              className="h-[70px] md:h-[90px] w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-white hover:text-cyan-300 transition-colors font-medium relative group pb-1"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-300 transition-all group-hover:w-full"></span>
            </Link>

            {/* About Dropdown */}
            <div
              className="relative z-10"
              onMouseEnter={() => {
                if (dropdownTimeoutRef.current) {
                  clearTimeout(dropdownTimeoutRef.current);
                  dropdownTimeoutRef.current = null;
                }
                setIsAboutDropdownOpen(true);
              }}
              onMouseLeave={() => {
                dropdownTimeoutRef.current = setTimeout(() => {
                  setIsAboutDropdownOpen(false);
                }, 150);
              }}
            >
              <button className="flex items-center space-x-1 text-white hover:text-cyan-300 transition-colors font-medium relative group pb-1">
                <span>About</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${isAboutDropdownOpen ? 'rotate-180' : ''}`}
                />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-300 transition-all group-hover:w-full"></span>
              </button>

              {isAboutDropdownOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                  style={{ backgroundColor: '#00152E', borderColor: 'rgba(255, 255, 255, 0.2)' }}
                  onMouseEnter={() => {
                    if (dropdownTimeoutRef.current) {
                      clearTimeout(dropdownTimeoutRef.current);
                      dropdownTimeoutRef.current = null;
                    }
                    setIsAboutDropdownOpen(true);
                  }}
                  onMouseLeave={() => {
                    dropdownTimeoutRef.current = setTimeout(() => {
                      setIsAboutDropdownOpen(false);
                    }, 150);
                  }}
                >
                  <Link
                    href="/about/partners"
                    className="block px-4 py-2 text-white hover:bg-white/10 hover:text-cyan-300 transition-colors"
                    onClick={() => setIsAboutDropdownOpen(false)}
                  >
                    Partners
                  </Link>
                  <Link
                    href="/about/team"
                    className="block px-4 py-2 text-white hover:bg-white/10 hover:text-cyan-300 transition-colors"
                    onClick={() => setIsAboutDropdownOpen(false)}
                  >
                    Team Members
                  </Link>
                  <Link
                    href="/about/contact"
                    className="block px-4 py-2 text-white hover:bg-white/10 hover:text-cyan-300 transition-colors"
                    onClick={() => setIsAboutDropdownOpen(false)}
                  >
                    Contact
                  </Link>
                </div>
              )}
            </div>

            {/* CTA Button - Request a Demo */}
            <Link
              href="/about/contact"
              className="px-6 py-2.5 rounded-lg font-semibold text-white transition-all shadow-sm hover:scale-105 relative z-50 overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgb(109, 118, 235), rgb(83, 213, 232) 25%, rgb(90, 189, 233) 47%, rgb(121, 76, 236) 93%)',
                backgroundSize: '200% 200%',
                animation: 'gradientShiftSlow 6s ease infinite, gradientGlowSubtle 4s ease-in-out infinite',
              }}
            >
              <span className="relative z-10">Request a Demo</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white hover:text-cyan-300 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-white/20 py-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-white hover:text-cyan-300 transition-colors font-medium px-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>

              <div className="flex flex-col space-y-2">
                <div className="text-white font-medium px-2">About</div>
                <Link
                  href="/about/partners"
                  className="text-gray-300 hover:text-cyan-300 transition-colors pl-6"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Partners
                </Link>
                <Link
                  href="/about/team"
                  className="text-gray-300 hover:text-cyan-300 transition-colors pl-6"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Team Members
                </Link>
                <Link
                  href="/about/contact"
                  className="text-gray-300 hover:text-cyan-300 transition-colors pl-6"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>

              <Link
                href="/about/contact"
                className="px-6 py-2.5 rounded-lg font-semibold text-white transition-all text-center mt-4 hover:scale-105 relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgb(109, 118, 235), rgb(83, 213, 232) 25%, rgb(90, 189, 233) 47%, rgb(121, 76, 236) 93%)',
                  backgroundSize: '200% 200%',
                  animation: 'gradientShiftSlow 6s ease infinite, gradientGlowSubtle 4s ease-in-out infinite',
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="relative z-10">Request a Demo</span>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
