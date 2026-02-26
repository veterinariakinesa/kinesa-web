import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SITE_CONFIG, COLORS, NAVIGATION_CONFIG, CONTACT_INFO } from '@/config';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3">
            <img
              src={SITE_CONFIG.logo}
              alt={`${SITE_CONFIG.name} Logo`}
              className="h-12 w-12 rounded-full object-cover"
            />
            <span 
              className="text-2xl font-bold transition-colors"
              style={{ color: isScrolled ? COLORS.primary : '#ffffff' }}
            >
              {SITE_CONFIG.name}
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAVIGATION_CONFIG.links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-[#00A0B0]"
                style={{ color: isScrolled ? '#374151' : 'rgba(255,255,255,0.9)' }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a href={`tel:${CONTACT_INFO.phone.replace(/\D/g, '')}`}>
              <Button 
                className="gap-2 text-white"
                style={{ backgroundColor: COLORS.primary }}
              >
                <Phone className="w-4 h-4" />
                {NAVIGATION_CONFIG.ctaButtonText}
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" style={{ color: isScrolled ? '#1f2937' : '#ffffff' }} />
            ) : (
              <Menu className="w-6 h-6" style={{ color: isScrolled ? '#1f2937' : '#ffffff' }} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white rounded-2xl shadow-xl mt-2 p-4">
            {NAVIGATION_CONFIG.links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-3 px-4 rounded-lg transition-colors"
                style={{ 
                  color: '#374151',
                }}
                onClick={() => setIsMobileMenuOpen(false)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = `${COLORS.primary}10`;
                  e.currentTarget.style.color = COLORS.primary;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#374151';
                }}
              >
                {link.name}
              </a>
            ))}
            <a 
              href={`tel:${CONTACT_INFO.phone.replace(/\D/g, '')}`} 
              className="block mt-4"
            >
              <Button 
                className="w-full gap-2 text-white"
                style={{ backgroundColor: COLORS.primary }}
              >
                <Phone className="w-4 h-4" />
                {NAVIGATION_CONFIG.ctaButtonText}
              </Button>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
