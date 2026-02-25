import { Facebook, Instagram, Twitter, Youtube, Phone, Mail, MapPin, Camera } from 'lucide-react';
import { useConfig } from '../context/ConfigContext';

const Footer = () => {
  const { config, updateConfig, editMode, selectAndUploadImage } = useConfig();
  const { FOOTER_CONFIG, SITE_CONFIG, CONTACT_INFO, COLORS } = config;

  const currentYear = new Date().getFullYear();

  const handleTextUpdate = (sectionKey: any, key: string, value: string) => {
    updateConfig({
      [sectionKey]: { ...(config[sectionKey as keyof typeof config] as any), [key]: value }
    });
  };

  const updateListLink = (listKey: 'quickLinks' | 'servicesList', index: number, field: string, value: string) => {
    const list = [...FOOTER_CONFIG[listKey]];
    list[index] = { ...list[index], [field]: value };
    updateConfig({
      FOOTER_CONFIG: { ...FOOTER_CONFIG, [listKey]: list }
    });
  };

  const socialLinks = [
    { icon: Facebook, href: CONTACT_INFO.social.facebook, label: 'Facebook', key: 'facebook' },
    { icon: Instagram, href: CONTACT_INFO.social.instagram, label: 'Instagram', key: 'instagram' },
    { icon: Twitter, href: CONTACT_INFO.social.twitter, label: 'Twitter', key: 'twitter' },
    { icon: Youtube, href: CONTACT_INFO.social.youtube, label: 'YouTube', key: 'youtube' },
  ].filter(link => (link.href && link.href !== '') || editMode);

  return (
    <footer style={{ backgroundColor: '#111827' }} className="text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative group/logo">
                <img
                  src={SITE_CONFIG.logo}
                  alt={`${SITE_CONFIG.name} Logo`}
                  className="h-14 w-14 rounded-full object-cover"
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
                className="text-2xl font-bold outline-none"
                contentEditable={editMode}
                suppressContentEditableWarning
                onBlur={(e) => handleTextUpdate('SITE_CONFIG', 'name', (e.target as HTMLElement).innerText)}
              >
                {SITE_CONFIG.name}
              </span>
            </div>
            <p
              className="text-gray-400 mb-6 leading-relaxed outline-none"
              contentEditable={editMode}
              suppressContentEditableWarning
              onBlur={(e) => handleTextUpdate('FOOTER_CONFIG', 'description', (e.target as HTMLElement).innerText)}
            >
              {FOOTER_CONFIG.description}
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={editMode ? '#' : social.href}
                  onClick={(e) => {
                    if (editMode) {
                      e.preventDefault();
                      const newUrl = prompt(`URL de ${social.label}:`, social.href);
                      if (newUrl !== null) {
                        const newSocial = { ...CONTACT_INFO.social, [social.key]: newUrl };
                        updateConfig({ CONTACT_INFO: { ...CONTACT_INFO, social: newSocial } });
                      }
                    }
                  }}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${!social.href && !editMode ? 'hidden' : ''}`}
                  style={{ backgroundColor: social.href ? 'rgba(255,255,255,0.1)' : 'rgba(255,0,0,0.2)' }}
                  onMouseEnter={(e) => {
                    if (social.href) (e.currentTarget as HTMLAnchorElement).style.backgroundColor = COLORS.primary;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = social.href ? 'rgba(255,255,255,0.1)' : 'rgba(255,0,0,0.2)';
                  }}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className={`w-5 h-5 ${!social.href ? 'opacity-30' : ''}`} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {FOOTER_CONFIG.quickLinks.map((link, index) => (
                <li key={`${link.name}-${index}`}>
                  <a
                    href={editMode ? '#' : link.href}
                    className="text-gray-400 hover:text-white transition-colors outline-none"
                    contentEditable={editMode}
                    suppressContentEditableWarning
                    onBlur={(e) => updateListLink('quickLinks', index, 'name', (e.target as HTMLElement).innerText)}
                    onClick={(e) => editMode && e.preventDefault()}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Nuestros Servicios</h4>
            <ul className="space-y-3">
              {FOOTER_CONFIG.servicesList.map((service, index) => (
                <li key={`${service.name}-${index}`}>
                  <a
                    href={editMode ? '#' : service.href}
                    className="text-gray-400 hover:text-white transition-colors outline-none"
                    contentEditable={editMode}
                    suppressContentEditableWarning
                    onBlur={(e) => updateListLink('servicesList', index, 'name', (e.target as HTMLElement).innerText)}
                    onClick={(e) => editMode && e.preventDefault()}
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: COLORS.primary }} />
                <span
                  className="text-gray-400 outline-none"
                  contentEditable={editMode}
                  suppressContentEditableWarning
                  onBlur={(e) => handleTextUpdate('CONTACT_INFO', 'address', (e.target as HTMLElement).innerText)}
                >
                  {CONTACT_INFO.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" style={{ color: COLORS.primary }} />
                <span
                  className="text-gray-400 outline-none"
                  contentEditable={editMode}
                  suppressContentEditableWarning
                  onBlur={(e) => handleTextUpdate('CONTACT_INFO', 'phone', (e.target as HTMLElement).innerText)}
                >
                  {CONTACT_INFO.phone}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" style={{ color: COLORS.primary }} />
                <span
                  className="text-gray-400 outline-none"
                  contentEditable={editMode}
                  suppressContentEditableWarning
                  onBlur={(e) => handleTextUpdate('CONTACT_INFO', 'email', (e.target as HTMLElement).innerText)}
                >
                  {CONTACT_INFO.email}
                </span>
              </li>
            </ul>

            {/* Emergency Badge */}
            <div
              className="mt-6 rounded-xl p-4 border"
              style={{ backgroundColor: `${COLORS.primary}20`, borderColor: `${COLORS.primary}30` }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-green-400 font-bold">Urgencias 24/7</span>
              </div>
              <p
                className="text-white font-semibold outline-none"
                contentEditable={editMode}
                suppressContentEditableWarning
                onBlur={(e) => handleTextUpdate('CONTACT_INFO', 'emergencyPhone', (e.target as HTMLElement).innerText)}
              >
                {CONTACT_INFO.emergencyPhone}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              {currentYear} Veterinaria {SITE_CONFIG.name}. Todos los derechos reservados.
            </p>
            <p
              className="text-gray-400 text-sm flex items-center gap-1 outline-none"
              contentEditable={editMode}
              suppressContentEditableWarning
              onBlur={(e) => handleTextUpdate('FOOTER_CONFIG', 'madeWithLove', (e.target as HTMLElement).innerText)}
            >
              {FOOTER_CONFIG.madeWithLove}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
