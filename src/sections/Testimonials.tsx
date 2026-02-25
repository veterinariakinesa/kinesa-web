import { Star, Quote, Plus, Trash2, Camera } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { useConfig } from '../context/ConfigContext';

const Testimonials = () => {
  const { config, updateConfig, editMode, selectAndUploadImage } = useConfig();
  const { TESTIMONIALS_CONFIG, COLORS } = config;

  const handleTextUpdate = (key: string, value: string) => {
    updateConfig({
      TESTIMONIALS_CONFIG: { ...TESTIMONIALS_CONFIG, [key]: value }
    });
  };

  const updateTestimonial = (id: number, field: string, value: any) => {
    const newTestimonials = TESTIMONIALS_CONFIG.testimonials.map(t =>
      t.id === id ? { ...t, [field]: value } : t
    );
    updateConfig({
      TESTIMONIALS_CONFIG: { ...TESTIMONIALS_CONFIG, testimonials: newTestimonials }
    });
  };

  const addTestimonial = () => {
    const newTestimonial = {
      id: Date.now(),
      name: 'Nuevo Cliente',
      pet: 'Nombre de Mascota',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'Escribe aquí el testimonio del cliente.',
    };
    updateConfig({
      TESTIMONIALS_CONFIG: {
        ...TESTIMONIALS_CONFIG,
        testimonials: [...TESTIMONIALS_CONFIG.testimonials, newTestimonial]
      }
    });
  };

  const deleteTestimonial = (id: number) => {
    if (confirm('¿Estás seguro de que quieres eliminar este testimonio?')) {
      const newTestimonials = TESTIMONIALS_CONFIG.testimonials.filter(t => t.id !== id);
      updateConfig({
        TESTIMONIALS_CONFIG: { ...TESTIMONIALS_CONFIG, testimonials: newTestimonials }
      });
    }
  };

  const updateTrustBadge = (field: string, value: string) => {
    updateConfig({
      TESTIMONIALS_CONFIG: {
        ...TESTIMONIALS_CONFIG,
        trustBadge: { ...TESTIMONIALS_CONFIG.trustBadge, [field]: value }
      }
    });
  };

  return (
    <section id="testimonios" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"
        style={{ backgroundColor: `${COLORS.primary}05` }}
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"
        style={{ backgroundColor: `${COLORS.accent}05` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            Testimonios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ color: COLORS.textPrimary }}>
            <span
              contentEditable={editMode}
              suppressContentEditableWarning
              onBlur={(e) => handleTextUpdate('title', (e.target as HTMLElement).innerText)}
            >
              {TESTIMONIALS_CONFIG.title}
            </span>{' '}
            <span
              className="bg-clip-text text-transparent outline-none"
              style={{ backgroundImage: `linear-gradient(to right, ${COLORS.primary}, ${COLORS.accent})` }}
              contentEditable={editMode}
              suppressContentEditableWarning
              onBlur={(e) => handleTextUpdate('highlightedTitle', (e.target as HTMLElement).innerText)}
            >
              {TESTIMONIALS_CONFIG.highlightedTitle}
            </span>
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto outline-none"
            style={{ color: COLORS.textSecondary }}
            contentEditable={editMode}
            suppressContentEditableWarning
            onBlur={(e) => handleTextUpdate('description', (e.target as HTMLElement).innerText)}
          >
            {TESTIMONIALS_CONFIG.description}
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS_CONFIG.testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {editMode && (
                <button
                  onClick={() => deleteTestimonial(testimonial.id)}
                  className="absolute -top-3 -right-3 z-20 bg-red-500 p-2 rounded-full shadow-lg hover:bg-red-600 text-white transition-all transform hover:scale-110"
                >
                  <Trash2 size={16} />
                </button>
              )}
              <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg group">
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <Quote className="w-10 h-10 mb-4" style={{ color: `${COLORS.primary}20` }} />

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 cursor-pointer transition-colors ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'}`}
                        onClick={() => editMode && updateTestimonial(testimonial.id, 'rating', i + 1)}
                      />
                    ))}
                  </div>

                  {/* Text */}
                  <p
                    className="mb-6 leading-relaxed outline-none min-h-[4.5rem]"
                    style={{ color: COLORS.textSecondary }}
                    contentEditable={editMode}
                    suppressContentEditableWarning
                    onBlur={(e) => updateTestimonial(testimonial.id, 'text', (e.target as HTMLElement).innerText)}
                  >
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                    <div className="relative group/avatar">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      {editMode && (
                        <div
                          className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover/avatar:opacity-100 cursor-pointer transition-opacity"
                          onClick={async () => {
                            const base64 = await selectAndUploadImage();
                            if (base64) updateTestimonial(testimonial.id, 'image', base64);
                          }}
                        >
                          <Camera size={16} className="text-white" />
                        </div>
                      )}
                    </div>
                    <div>
                      <div
                        className="font-semibold outline-none"
                        style={{ color: COLORS.textPrimary }}
                        contentEditable={editMode}
                        suppressContentEditableWarning
                        onBlur={(e) => updateTestimonial(testimonial.id, 'name', (e.target as HTMLElement).innerText)}
                      >
                        {testimonial.name}
                      </div>
                      <div
                        style={{ color: COLORS.primary }}
                        className="outline-none"
                        contentEditable={editMode}
                        suppressContentEditableWarning
                        onBlur={(e) => updateTestimonial(testimonial.id, 'pet', (e.target as HTMLElement).innerText)}
                      >
                        {testimonial.pet}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}

          {editMode && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center"
            >
              <button
                onClick={addTestimonial}
                className="flex flex-col items-center gap-4 text-gray-400 hover:text-blue-600 transition-colors group p-12 border-4 border-dashed border-gray-100 rounded-3xl hover:border-blue-100 h-full w-full"
              >
                <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                  <Plus size={32} />
                </div>
                <span className="font-bold">Añadir Testimonio</span>
              </button>
            </motion.div>
          )}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-8 rounded-2xl px-8 py-6" style={{ backgroundColor: '#f8fafc' }}>
            <div className="text-center">
              <div
                className="text-3xl font-bold outline-none"
                style={{ color: COLORS.primary }}
                contentEditable={editMode}
                suppressContentEditableWarning
                onBlur={(e) => updateTrustBadge('rating', (e.target as HTMLElement).innerText)}
              >
                {TESTIMONIALS_CONFIG.trustBadge.rating}
              </div>
              <div className="flex gap-1 justify-center mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <div className="text-sm mt-1" style={{ color: COLORS.textSecondary }}>Google Reviews</div>
            </div>
            <div className="w-px h-16 bg-gray-200" />
            <div className="text-center">
              <div
                className="text-3xl font-bold outline-none"
                style={{ color: COLORS.primary }}
                contentEditable={editMode}
                suppressContentEditableWarning
                onBlur={(e) => updateTrustBadge('reviewsCount', (e.target as HTMLElement).innerText)}
              >
                {TESTIMONIALS_CONFIG.trustBadge.reviewsCount}
              </div>
              <div className="text-sm mt-1" style={{ color: COLORS.textSecondary }}>Reseñas positivas</div>
            </div>
            <div className="w-px h-16 bg-gray-200" />
            <div className="text-center">
              <div
                className="text-3xl font-bold outline-none"
                style={{ color: COLORS.primary }}
                contentEditable={editMode}
                suppressContentEditableWarning
                onBlur={(e) => updateTrustBadge('satisfactionRate', e.target.innerText)}
              >
                {TESTIMONIALS_CONFIG.trustBadge.satisfactionRate}
              </div>
              <div className="text-sm mt-1" style={{ color: COLORS.textSecondary }}>Clientes satisfechos</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
