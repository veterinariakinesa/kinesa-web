import { Facebook, Instagram, Twitter, Youtube, Phone, Mail, MapPin } from 'lucide-react';
import { FOOTER_CONFIG, SITE_CONFIG, CONTACT_INFO, COLORS } from '@/config';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: CONTACT_INFO.social.facebook, label: 'Facebook' },
    { icon: Instagram, href: CONTACT_INFO.social.instagram, label: 'Instagram' },
    { icon: Twitter, href: CONTACT_INFO.social.twitter, label: 'Twitter' },
    { icon: Youtube, href: CONTACT_INFO.social.youtube, label: 'YouTube' },
  ].filter(link => link.href && link.href !== '');

  return (
    <footer style={{ backgroundColor: '#111827' }} className="text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img
                src={SITE_CONFIG.logo}
                alt={`${SITE_CONFIG.name} Logo`}
                className="h-14 w-14 rounded-full object-cover"
              />
              <span className="text-2xl font-bold">{SITE_CONFIG.name}</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {FOOTER_CONFIG.description}
            </p>
            {/* Social Links */}
            {socialLinks.length > 0 && (
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                    style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.backgroundColor = COLORS.primary;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgba(255,255,255,0.1)';
                    }}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {FOOTER_CONFIG.quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
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
              {FOOTER_CONFIG.servicesList.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-gray-400 hover:text-white transition-colors"
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
                <span className="text-gray-400">
                  {CONTACT_INFO.address}<br />
                  {CONTACT_INFO.city}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" style={{ color: COLORS.primary }} />
                <span className="text-gray-400">{CONTACT_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" style={{ color: COLORS.primary }} />
                <span className="text-gray-400">{CONTACT_INFO.email}</span>
              </li>
            </ul>

            {/* Emergency Badge */}
            <div 
              className="mt-6 rounded-xl p-4 border"
              style={{ backgroundColor: `${COLORS.primary}20`, borderColor: `${COLORS.primary}30` }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-green-400">Urgencias 24/7</span>
              </div>
              <p className="text-white font-semibold">{CONTACT_INFO.emergencyPhone}</p>
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
            <p className="text-gray-400 text-sm flex items-center gap-1">
              {FOOTER_CONFIG.madeWithLove}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
