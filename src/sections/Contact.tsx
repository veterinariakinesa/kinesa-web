import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Pointer, Camera } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useConfig } from '../context/ConfigContext';

const Contact = () => {
  const { config, updateConfig, editMode, selectAndUploadImage } = useConfig();
  const { CONTACT_CONFIG, CONTACT_INFO, COLORS } = config;
  const [showMap, setShowMap] = useState(false);

  const hasMapImage = CONTACT_CONFIG.mapImage && CONTACT_CONFIG.mapImage !== '';
  const hasMapCoordinates = CONTACT_CONFIG.mapCoordinates && CONTACT_CONFIG.mapCoordinates !== '';

  const handleTextUpdate = (section: 'CONTACT_CONFIG' | 'CONTACT_INFO', key: string, value: string) => {
    updateConfig({
      [section]: { ...(config[section] as any), [key]: value }
    });
  };

  const contactInfoItems = [
    {
      icon: MapPin,
      title: 'Dirección',
      content: CONTACT_INFO.address,
      subContent: CONTACT_INFO.city,
      key: 'address',
      subKey: 'city'
    },
    {
      icon: Phone,
      title: 'Teléfono',
      content: CONTACT_INFO.phone,
      subContent: `Urgencias: ${CONTACT_INFO.emergencyPhone}`,
      key: 'phone',
      subKey: 'emergencyPhone'
    },
    {
      icon: Mail,
      title: 'Email',
      content: CONTACT_INFO.email,
      subContent: CONTACT_INFO.appointmentsEmail,
      key: 'email',
      subKey: 'appointmentsEmail'
    },
    {
      icon: Clock,
      title: 'Horario',
      content: CONTACT_INFO.weekdayHours,
      subContent: CONTACT_INFO.weekendHours,
      key: 'weekdayHours',
      subKey: 'weekendHours'
    },
  ];

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
            <span
              contentEditable={editMode}
              suppressContentEditableWarning
              onBlur={(e) => handleTextUpdate('CONTACT_CONFIG', 'title', (e.target as HTMLElement).innerText)}
              className="outline-none"
            >
              {CONTACT_CONFIG.title}
            </span>{' '}
            <span
              className="bg-clip-text text-transparent outline-none"
              style={{ backgroundImage: `linear-gradient(to right, ${COLORS.primary}, ${COLORS.accent})` }}
              contentEditable={editMode}
              suppressContentEditableWarning
              onBlur={(e) => handleTextUpdate('CONTACT_CONFIG', 'highlightedTitle', (e.target as HTMLElement).innerText)}
            >
              {CONTACT_CONFIG.highlightedTitle}
            </span>
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto outline-none"
            style={{ color: COLORS.textSecondary }}
            contentEditable={editMode}
            suppressContentEditableWarning
            onBlur={(e) => handleTextUpdate('CONTACT_CONFIG', 'description', (e.target as HTMLElement).innerText)}
          >
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
                <h3
                  className="text-2xl font-bold mb-6 outline-none"
                  style={{ color: COLORS.textPrimary }}
                  contentEditable={editMode}
                  suppressContentEditableWarning
                  onBlur={(e) => {
                    const newForm = { ...CONTACT_CONFIG.form, title: (e.target as HTMLElement).innerText };
                    updateConfig({ CONTACT_CONFIG: { ...CONTACT_CONFIG, form: newForm } });
                  }}
                >
                  {CONTACT_CONFIG.form.title}
                </h3>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        className="block text-sm font-medium mb-2 outline-none"
                        style={{ color: COLORS.textSecondary }}
                        contentEditable={editMode}
                        suppressContentEditableWarning
                        onBlur={(e) => {
                          const newForm = { ...CONTACT_CONFIG.form };
                          newForm.fields.firstName.label = (e.target as HTMLElement).innerText;
                          updateConfig({ CONTACT_CONFIG: { ...CONTACT_CONFIG, form: newForm } });
                        }}
                      >
                        {CONTACT_CONFIG.form.fields.firstName.label}
                      </label>
                      <Input
                        placeholder={CONTACT_CONFIG.form.fields.firstName.placeholder}
                        className="h-12"
                        style={{ borderColor: '#e5e7eb' }}
                        disabled={editMode}
                      />
                    </div>
                    <div>
                      <label
                        className="block text-sm font-medium mb-2 outline-none"
                        style={{ color: COLORS.textSecondary }}
                        contentEditable={editMode}
                        suppressContentEditableWarning
                        onBlur={(e) => {
                          const newForm = { ...CONTACT_CONFIG.form };
                          newForm.fields.lastName.label = (e.target as HTMLElement).innerText;
                          updateConfig({ CONTACT_CONFIG: { ...CONTACT_CONFIG, form: newForm } });
                        }}
                      >
                        {CONTACT_CONFIG.form.fields.lastName.label}
                      </label>
                      <Input
                        placeholder={CONTACT_CONFIG.form.fields.lastName.placeholder}
                        className="h-12"
                        style={{ borderColor: '#e5e7eb' }}
                        disabled={editMode}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      className="block text-sm font-medium mb-2 outline-none"
                      style={{ color: COLORS.textSecondary }}
                      contentEditable={editMode}
                      suppressContentEditableWarning
                      onBlur={(e) => {
                        const newForm = { ...CONTACT_CONFIG.form };
                        newForm.fields.email.label = (e.target as HTMLElement).innerText;
                        updateConfig({ CONTACT_CONFIG: { ...CONTACT_CONFIG, form: newForm } });
                      }}
                    >
                      {CONTACT_CONFIG.form.fields.email.label}
                    </label>
                    <Input
                      type="email"
                      placeholder={CONTACT_CONFIG.form.fields.email.placeholder}
                      className="h-12"
                      style={{ borderColor: '#e5e7eb' }}
                      disabled={editMode}
                    />
                  </div>

                  <div>
                    <label
                      className="block text-sm font-medium mb-2 outline-none"
                      style={{ color: COLORS.textSecondary }}
                      contentEditable={editMode}
                      suppressContentEditableWarning
                      onBlur={(e) => {
                        const newForm = { ...CONTACT_CONFIG.form };
                        newForm.fields.phone.label = (e.target as HTMLElement).innerText;
                        updateConfig({ CONTACT_CONFIG: { ...CONTACT_CONFIG, form: newForm } });
                      }}
                    >
                      {CONTACT_CONFIG.form.fields.phone.label}
                    </label>
                    <Input
                      type="tel"
                      placeholder={CONTACT_CONFIG.form.fields.phone.placeholder}
                      className="h-12"
                      style={{ borderColor: '#e5e7eb' }}
                      disabled={editMode}
                    />
                  </div>

                  <div>
                    <label
                      className="block text-sm font-medium mb-2 outline-none"
                      style={{ color: COLORS.textSecondary }}
                      contentEditable={editMode}
                      suppressContentEditableWarning
                      onBlur={(e) => {
                        const newForm = { ...CONTACT_CONFIG.form };
                        newForm.fields.message.label = (e.target as HTMLElement).innerText;
                        updateConfig({ CONTACT_CONFIG: { ...CONTACT_CONFIG, form: newForm } });
                      }}
                    >
                      {CONTACT_CONFIG.form.fields.message.label}
                    </label>
                    <Textarea
                      placeholder={CONTACT_CONFIG.form.fields.message.placeholder}
                      rows={4}
                      className="resize-none"
                      style={{ borderColor: '#e5e7eb' }}
                      disabled={editMode}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-14 text-lg font-bold gap-2 text-white shadow-lg"
                    style={{ backgroundColor: COLORS.primary }}
                  >
                    <Send className="w-5 h-5" />
                    <span
                      contentEditable={editMode}
                      suppressContentEditableWarning
                      onBlur={(e) => {
                        const newForm = { ...CONTACT_CONFIG.form, submitButtonText: (e.target as HTMLElement).innerText };
                        updateConfig({ CONTACT_CONFIG: { ...CONTACT_CONFIG, form: newForm } });
                      }}
                      className="outline-none"
                    >
                      {CONTACT_CONFIG.form.submitButtonText}
                    </span>
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
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold mb-1" style={{ color: COLORS.textPrimary }}>
                        {info.title}
                      </h4>
                      <p
                        style={{ color: COLORS.textSecondary }}
                        className="outline-none"
                        contentEditable={editMode}
                        suppressContentEditableWarning
                        onBlur={(e) => handleTextUpdate('CONTACT_INFO', info.key, (e.target as HTMLElement).innerText)}
                      >
                        {info.content}
                      </p>
                      <p
                        className="text-sm text-gray-500 outline-none"
                        contentEditable={editMode}
                        suppressContentEditableWarning
                        onBlur={(e) => {
                          let val = (e.target as HTMLElement).innerText;
                          if (info.key === 'phone') {
                            val = val.replace('Urgencias: ', '');
                          }
                          handleTextUpdate('CONTACT_INFO', info.subKey, val);
                        }}
                      >
                        {info.subContent}
                      </p>
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
              className={`rounded-2xl overflow-hidden shadow-lg h-64 relative group cursor-pointer ${editMode ? 'ring-4 ring-blue-500/30' : ''}`}
              onClick={() => !editMode && setShowMap(true)}
            >
              <AnimatePresence mode="wait">
                {showMap && hasMapCoordinates && !editMode ? (
                  <motion.div
                    key="map-iframe"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="w-full h-full"
                  >
                    <iframe
                      src={`https://maps.google.com/maps?q=${CONTACT_CONFIG.mapCoordinates}&z=16&output=embed`}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Ubicación"
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key="map-placeholder"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="w-full h-full"
                  >
                    {hasMapImage ? (
                      <img
                        src={CONTACT_CONFIG.mapImage}
                        alt="Mapa de ubicación"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div
                        className="w-full h-full flex items-center justify-center p-6 text-center"
                        style={{ background: `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.primaryDark} 100%)` }}
                      >
                        <div className="text-white">
                          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                            <MapPin className="w-8 h-8" />
                          </div>
                          <p className="text-xl font-bold mb-2">Ver ubicación en el mapa</p>
                          <p className="text-white/80 text-sm mb-4">{CONTACT_INFO.address}, {CONTACT_INFO.city}</p>
                          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary rounded-xl font-bold text-lg shadow-xl" style={{ color: COLORS.primary }}>
                            <Pointer className="w-5 h-5" />
                            {editMode ? 'Configurar Mapa' : 'Hacer clic para cargar mapa'}
                          </div>
                        </div>
                      </div>
                    )}

                    {editMode && (
                      <div
                        className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={async (e) => {
                          e.stopPropagation();
                          const choice = prompt('¿Qué quieres actualizar?\n1. Cargar Foto de Mapa\n2. Coordenadas (Lat,Lon)');
                          if (choice === '1') {
                            const base64 = await selectAndUploadImage();
                            if (base64) handleTextUpdate('CONTACT_CONFIG', 'mapImage', base64);
                          } else if (choice === '2') {
                            const coords = prompt('Coordenadas (ej: -34.6037,-58.3816):', CONTACT_CONFIG.mapCoordinates);
                            if (coords !== null) handleTextUpdate('CONTACT_CONFIG', 'mapCoordinates', coords);
                          }
                        }}
                      >
                        <Camera className="text-white mb-2" size={32} />
                        <span className="text-white font-bold">Editar Mapa / Imagen</span>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
