import { Stethoscope, Syringe, Scissors, Pill, Microscope, Ambulance, Plus, Trash2, Camera, MoveLeft, MoveRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { useConfig } from '../context/ConfigContext';

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
  const { config, updateConfig, editMode, selectAndUploadImage } = useConfig();
  const { SERVICES_CONFIG, COLORS } = config;

  const handleTextUpdate = (key: string, value: string) => {
    updateConfig({
      SERVICES_CONFIG: { ...SERVICES_CONFIG, [key]: value }
    });
  };

  const updateServiceField = (id: string, field: string, value: any) => {
    const newServices = SERVICES_CONFIG.services.map(s =>
      s.id === id ? { ...s, [field]: value } : s
    );
    updateConfig({
      SERVICES_CONFIG: { ...SERVICES_CONFIG, services: newServices }
    });
  };

  const addService = () => {
    const newService = {
      id: `service-${Date.now()}`,
      title: 'Nuevo Servicio',
      description: 'Describe aquí el nuevo servicio que ofrece la veterinaria.',
      icon: 'Stethoscope',
      image: '',
      color: '#00A0B0',
    };
    updateConfig({
      SERVICES_CONFIG: {
        ...SERVICES_CONFIG,
        services: [...SERVICES_CONFIG.services, newService]
      }
    });
  };

  const deleteService = (id: string) => {
    if (confirm('¿Estás seguro de que quieres eliminar este servicio?')) {
      const newServices = SERVICES_CONFIG.services.filter(s => s.id !== id);
      updateConfig({
        SERVICES_CONFIG: { ...SERVICES_CONFIG, services: newServices }
      });
    }
  };

  const moveService = (index: number, direction: 'left' | 'right') => {
    const newServices = [...SERVICES_CONFIG.services];
    const targetIndex = direction === 'left' ? index - 1 : index + 1;
    if (targetIndex >= 0 && targetIndex < newServices.length) {
      [newServices[index], newServices[targetIndex]] = [newServices[targetIndex], newServices[index]];
      updateConfig({
        SERVICES_CONFIG: { ...SERVICES_CONFIG, services: newServices }
      });
    }
  };

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
            className={`inline-block rounded-full px-4 py-2 text-sm font-medium mb-4 ${editMode ? 'ring-2 ring-blue-200' : ''}`}
            style={{ backgroundColor: `${COLORS.primary}10`, color: COLORS.primary }}
          >
            Nuestros Servicios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ color: COLORS.textPrimary }}>
            <span
              contentEditable={editMode}
              suppressContentEditableWarning
              onBlur={(e) => handleTextUpdate('title', (e.target as HTMLElement).innerText)}
              className="outline-none"
            >
              {SERVICES_CONFIG.title}
            </span>{' '}
            <span
              className="bg-clip-text text-transparent outline-none"
              style={{ backgroundImage: `linear-gradient(to right, ${COLORS.primary}, ${COLORS.accent})` }}
              contentEditable={editMode}
              suppressContentEditableWarning
              onBlur={(e) => handleTextUpdate('highlightedTitle', (e.target as HTMLElement).innerText)}
            >
              {SERVICES_CONFIG.highlightedTitle}
            </span>
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto outline-none"
            style={{ color: COLORS.textSecondary }}
            contentEditable={editMode}
            suppressContentEditableWarning
            onBlur={(e) => handleTextUpdate('description', (e.target as HTMLElement).innerText)}
          >
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
                className="relative"
              >
                {editMode && (
                  <div className="absolute -top-4 -right-2 z-20 flex gap-2">
                    <button
                      onClick={() => moveService(index, 'left')}
                      disabled={index === 0}
                      className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 disabled:opacity-50"
                    >
                      <MoveLeft size={16} className="text-gray-600" />
                    </button>
                    <button
                      onClick={() => moveService(index, 'right')}
                      disabled={index === SERVICES_CONFIG.services.length - 1}
                      className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 disabled:opacity-50"
                    >
                      <MoveRight size={16} className="text-gray-600" />
                    </button>
                    <button
                      onClick={() => deleteService(service.id)}
                      className="bg-red-500 p-2 rounded-full shadow-lg hover:bg-red-600 transition-colors"
                    >
                      <Trash2 size={16} className="text-white" />
                    </button>
                  </div>
                )}

                <Card className="group h-full hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                  <CardContent className="p-0">
                    {/* Imagen del servicio (si existe) */}
                    <div className="relative h-48 overflow-hidden bg-gray-100">
                      {hasImage ? (
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400 italic text-sm">
                          Sin imagen seleccionada
                        </div>
                      )}

                      {editMode && (
                        <div
                          className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                          onClick={async () => {
                            const base64 = await selectAndUploadImage();
                            if (base64) updateServiceField(service.id, 'image', base64);
                          }}
                        >
                          <Camera className="text-white" size={32} />
                          <span className="text-white text-xs font-bold ml-2">CARGAR</span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                    </div>

                    <div className="p-8">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradientClass} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 cursor-pointer`}
                        onClick={() => {
                          if (!editMode) return;
                          const colors = Object.keys(colorMap);
                          const nextColor = colors[(colors.indexOf(service.color) + 1) % colors.length];
                          updateServiceField(service.id, 'color', nextColor);
                        }}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3
                        className="text-xl font-bold mb-3 transition-colors outline-none"
                        style={{ color: COLORS.textPrimary }}
                        contentEditable={editMode}
                        suppressContentEditableWarning
                        onBlur={(e) => updateServiceField(service.id, 'title', (e.target as HTMLElement).innerText)}
                      >
                        {service.title}
                      </h3>
                      <p
                        style={{ color: COLORS.textSecondary }}
                        className="outline-none"
                        contentEditable={editMode}
                        suppressContentEditableWarning
                        onBlur={(e) => updateServiceField(service.id, 'description', (e.target as HTMLElement).innerText)}
                      >
                        {service.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}

          {editMode && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center"
            >
              <button
                onClick={addService}
                className="flex flex-col items-center gap-4 text-gray-400 hover:text-blue-600 transition-colors group p-12 border-4 border-dashed border-gray-100 rounded-3xl hover:border-blue-100"
              >
                <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                  <Plus size={32} />
                </div>
                <span className="font-bold">Añadir Nuevo Servicio</span>
              </button>
            </motion.div>
          )}
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
              <div
                className="text-2xl font-bold mb-1 outline-none"
                contentEditable={editMode}
                suppressContentEditableWarning
                onBlur={(e) => handleTextUpdate('ctaText', e.target.innerText)}
              >
                {SERVICES_CONFIG.ctaText}
              </div>
              <div
                className="text-white/80 outline-none"
                contentEditable={editMode}
                suppressContentEditableWarning
                onBlur={(e) => handleTextUpdate('ctaSubtext', e.target.innerText)}
              >
                {SERVICES_CONFIG.ctaSubtext}
              </div>
            </div>
            <a
              href="#contacto"
              className="bg-white px-6 py-3 rounded-xl font-semibold hover:bg-white/90 transition-colors whitespace-nowrap"
              style={{ color: COLORS.primary }}
            >
              <span
                contentEditable={editMode}
                suppressContentEditableWarning
                onBlur={(e) => handleTextUpdate('ctaButtonText', e.target.innerText)}
                className="outline-none"
              >
                {SERVICES_CONFIG.ctaButtonText}
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
