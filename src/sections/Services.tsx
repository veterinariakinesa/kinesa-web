import { Stethoscope, Syringe, Scissors, Pill, Microscope, Ambulance } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { SERVICES_CONFIG, COLORS } from '@/config';

// Mapa de iconos disponibles
const iconMap: { [key: string]: React.ElementType } = {
  Stethoscope,
  Syringe,
  Scissors,
  Pill,
  Microscope,
  Ambulance,
};

// Mapa de colores predefinidos
const colorMap: { [key: string]: string } = {
  '#00A0B0': 'from-[#00A0B0] to-[#00C4D4]',
  'green': 'from-green-400 to-green-500',
  'purple': 'from-purple-400 to-purple-500',
  'orange': 'from-orange-400 to-orange-500',
  'pink': 'from-pink-400 to-pink-500',
  'red': 'from-red-400 to-red-500',
  'blue': 'from-blue-400 to-blue-500',
  'yellow': 'from-yellow-400 to-yellow-500',
};

const Services = () => {
  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span 
            className="inline-block rounded-full px-4 py-2 text-sm font-medium mb-4"
            style={{ backgroundColor: `${COLORS.primary}10`, color: COLORS.primary }}
          >
            Nuestros Servicios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ color: COLORS.textPrimary }}>
            {SERVICES_CONFIG.title}{' '}
            <span 
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: `linear-gradient(to right, ${COLORS.primary}, ${COLORS.accent})` }}
            >
              {SERVICES_CONFIG.highlightedTitle}
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: COLORS.textSecondary }}>
            {SERVICES_CONFIG.description}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_CONFIG.services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Stethoscope;
            const gradientClass = colorMap[service.color] || colorMap['#00A0B0'];
            const hasImage = service.image && service.image !== '';

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group h-full hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                  <CardContent className="p-0">
                    {/* Imagen del servicio (si existe) */}
                    {hasImage && (
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      </div>
                    )}
                    
                    <div className="p-8">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradientClass} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 
                        className="text-xl font-bold mb-3 transition-colors"
                        style={{ color: COLORS.textPrimary }}
                      >
                        {service.title}
                      </h3>
                      <p style={{ color: COLORS.textSecondary }}>
                        {service.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div 
            className="inline-flex items-center gap-4 rounded-3xl p-8 text-white"
            style={{ background: `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.primaryDark} 100%)` }}
          >
            <div className="text-left">
              <div className="text-2xl font-bold mb-1">{SERVICES_CONFIG.ctaText}</div>
              <div className="text-white/80">{SERVICES_CONFIG.ctaSubtext}</div>
            </div>
            <a
              href="#contacto"
              className="bg-white px-6 py-3 rounded-xl font-semibold hover:bg-white/90 transition-colors whitespace-nowrap"
              style={{ color: COLORS.primary }}
            >
              {SERVICES_CONFIG.ctaButtonText}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
