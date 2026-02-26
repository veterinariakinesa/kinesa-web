import { useState, useEffect } from 'react';
import { Menu, X, Phone, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useConfig } from '../context/ConfigContext';

const Navbar = () => {
  const { config, updateConfig, editMode, selectAndUploadImage } = useConfig();
  const { SITE_CONFIG, COLORS, NAVIGATION_CONFIG, CONTACT_INFO } = config;

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTextUpdate = (section: any, key: string, value: string) => {
    updateConfig({
      [section]: { ...(config[section as keyof typeof config] as any), [key]: value }
    });
  };

  const updateNavLink = (index: number, name: string) => {
    const newLinks = [...NAVIGATION_CONFIG.links];
    newLinks[index] = { ...newLinks[index], name };
    updateConfig({
      NAVIGATION_CONFIG: { ...NAVIGATION_CONFIG, links: newLinks }
    });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-lg'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative group/logo">
              <img
                src={SITE_CONFIG.logo}
                alt={`${SITE_CONFIG.name} Logo`}
                className="h-12 w-12 rounded-full object-cover"
              />
              {editMode && (
                <div
                  className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover/logo:opacity-100 cursor-pointer transition-opacity"
                  onClick={async () => {
                    const base64 = await selectAndUploadImage();
                    if (base64) handleTextUpdate('SITE_CONFIG', 'logo', base64);
                  }}
                >
                  <Camera size={16} className="text-white" />
                </div>
              )}
            </div>
            <span
              className="text-2xl font-bold transition-colors outline-none"
              style={{ color: isScrolled ? COLORS.primary : '#ffffff' }}
              contentEditable={editMode}
              suppressContentEditableWarning
              onBlur={(e) => handleTextUpdate('SITE_CONFIG', 'name', (e.target as HTMLElement).innerText)}
            >
              {SITE_CONFIG.name}
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAVIGATION_CONFIG.links.map((link, index) => (
              <a
                key={`${link.name}-${index}`}
                href={link.href}
                className="text-base font-semibold transition-colors hover:text-[#00A0B0] outline-none"
                style={{ color: isScrolled ? '#374151' : 'rgba(255,255,255,1)' }}
                contentEditable={editMode}
                suppressContentEditableWarning
                onBlur={(e) => updateNavLink(index, (e.target as HTMLElement).innerText)}
                onClick={(e) => editMode && e.preventDefault()}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a href={editMode ? '#' : `tel:${CONTACT_INFO.phone.replace(/\D/g, '')}`} onClick={(e) => editMode && e.preventDefault()}>
              <Button
                className="gap-2 text-white text-base font-bold px-6 py-6"
                style={{ backgroundColor: COLORS.primary }}
              >
                <Phone className="w-5 h-5" />
                <span
                  contentEditable={editMode}
                  suppressContentEditableWarning
                  onBlur={(e) => handleTextUpdate('NAVIGATION_CONFIG', 'ctaButtonText', (e.target as HTMLElement).innerText)}
                  className="outline-none"
                >
                  {NAVIGATION_CONFIG.ctaButtonText}
                </span>
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
            {NAVIGATION_CONFIG.links.map((link, index) => (
              <a
                key={`${link.name}-${index}-mobile`}
                href={link.href}
                className="block py-4 px-4 rounded-lg transition-colors text-lg font-bold outline-none"
                style={{
                  color: '#374151',
                }}
                onClick={() => !editMode && setIsMobileMenuOpen(false)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = `${COLORS.primary}10`;
                  e.currentTarget.style.color = COLORS.primary;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#374151';
                }}
                contentEditable={editMode}
                suppressContentEditableWarning
                onBlur={(e) => updateNavLink(index, (e.target as HTMLElement).innerText)}
              >
                {link.name}
              </a>
            ))}
            <a
              href={editMode ? '#' : `tel:${CONTACT_INFO.phone.replace(/\D/g, '')}`}
              className="block mt-4"
              onClick={(e) => editMode && e.preventDefault()}
            >
              <Button
                className="w-full gap-2 text-white text-lg font-bold py-7"
                style={{ backgroundColor: COLORS.primary }}
              >
                <Phone className="w-5 h-5" />
                <span
                  contentEditable={editMode}
                  suppressContentEditableWarning
                  onBlur={(e) => handleTextUpdate('NAVIGATION_CONFIG', 'ctaButtonText', e.target.innerText)}
                  className="outline-none"
                >
                  {NAVIGATION_CONFIG.ctaButtonText}
                </span>
              </Button>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
