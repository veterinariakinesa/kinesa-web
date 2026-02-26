import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { CONTACT_CONFIG, CONTACT_INFO, COLORS } from '@/config';

const contactInfoItems = [
  {
    icon: MapPin,
    title: 'Dirección',
    content: CONTACT_INFO.address,
    subContent: CONTACT_INFO.city,
  },
  {
    icon: Phone,
    title: 'Teléfono',
    content: CONTACT_INFO.phone,
    subContent: `Urgencias: ${CONTACT_INFO.emergencyPhone}`,
  },
  {
    icon: Mail,
    title: 'Email',
    content: CONTACT_INFO.email,
    subContent: CONTACT_INFO.appointmentsEmail,
  },
  {
    icon: Clock,
    title: 'Horario',
    content: CONTACT_INFO.weekdayHours,
    subContent: CONTACT_INFO.weekendHours,
  },
];

const Contact = () => {
  const hasMapImage = CONTACT_CONFIG.mapImage && CONTACT_CONFIG.mapImage !== '';
  const hasMapCoordinates = CONTACT_CONFIG.mapCoordinates && CONTACT_CONFIG.mapCoordinates !== '';

  return (
    <section id="contacto" className="py-24" style={{ background: 'linear-gradient(to bottom, #ffffff, #f8fafc)' }}>
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
            Contacto
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ color: COLORS.textPrimary }}>
            {CONTACT_CONFIG.title}{' '}
            <span 
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: `linear-gradient(to right, ${COLORS.primary}, ${COLORS.accent})` }}
            >
              {CONTACT_CONFIG.highlightedTitle}
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: COLORS.textSecondary }}>
            {CONTACT_CONFIG.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="shadow-xl border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6" style={{ color: COLORS.textPrimary }}>
                  {CONTACT_CONFIG.form.title}
                </h3>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: COLORS.textSecondary }}>
                        {CONTACT_CONFIG.form.fields.firstName.label}
                      </label>
                      <Input
                        placeholder={CONTACT_CONFIG.form.fields.firstName.placeholder}
                        className="h-12"
                        style={{ borderColor: '#e5e7eb' }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: COLORS.textSecondary }}>
                        {CONTACT_CONFIG.form.fields.lastName.label}
                      </label>
                      <Input
                        placeholder={CONTACT_CONFIG.form.fields.lastName.placeholder}
                        className="h-12"
                        style={{ borderColor: '#e5e7eb' }}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: COLORS.textSecondary }}>
                      {CONTACT_CONFIG.form.fields.email.label}
                    </label>
                    <Input
                      type="email"
                      placeholder={CONTACT_CONFIG.form.fields.email.placeholder}
                      className="h-12"
                      style={{ borderColor: '#e5e7eb' }}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: COLORS.textSecondary }}>
                      {CONTACT_CONFIG.form.fields.phone.label}
                    </label>
                    <Input
                      type="tel"
                      placeholder={CONTACT_CONFIG.form.fields.phone.placeholder}
                      className="h-12"
                      style={{ borderColor: '#e5e7eb' }}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: COLORS.textSecondary }}>
                      {CONTACT_CONFIG.form.fields.message.label}
                    </label>
                    <Textarea
                      placeholder={CONTACT_CONFIG.form.fields.message.placeholder}
                      rows={4}
                      className="resize-none"
                      style={{ borderColor: '#e5e7eb' }}
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full h-12 font-semibold gap-2 text-white"
                    style={{ backgroundColor: COLORS.primary }}
                  >
                    <Send className="w-5 h-5" />
                    {CONTACT_CONFIG.form.submitButtonText}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {contactInfoItems.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ 
                        background: `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.primaryDark} 100%)` 
                      }}
                    >
                      <info.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1" style={{ color: COLORS.textPrimary }}>
                        {info.title}
                      </h4>
                      <p style={{ color: COLORS.textSecondary }}>{info.content}</p>
                      <p className="text-sm text-gray-500">{info.subContent}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="rounded-2xl overflow-hidden shadow-lg h-64"
            >
              {hasMapImage ? (
                <img 
                  src={CONTACT_CONFIG.mapImage} 
                  alt="Mapa de ubicación" 
                  className="w-full h-full object-cover"
                />
              ) : hasMapCoordinates ? (
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1!2d${CONTACT_CONFIG.mapCoordinates.split(',')[1]}!3d${CONTACT_CONFIG.mapCoordinates.split(',')[0]}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM!5e0!3m2!1ses!2smx!4v1`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación"
                />
              ) : (
                <div 
                  className="w-full h-full flex items-center justify-center"
                  style={{ background: `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.primaryDark} 100%)` }}
                >
                  <div className="text-center text-white">
                    <MapPin className="w-12 h-12 mx-auto mb-4" />
                    <p className="text-lg font-semibold">Ver en Google Maps</p>
                    <p className="text-white/80 text-sm">{CONTACT_INFO.address}</p>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
