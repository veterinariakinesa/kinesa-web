import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { TESTIMONIALS_CONFIG, COLORS } from '@/config';

const Testimonials = () => {
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
            {TESTIMONIALS_CONFIG.title}{' '}
            <span 
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: `linear-gradient(to right, ${COLORS.primary}, ${COLORS.accent})` }}
            >
              {TESTIMONIALS_CONFIG.highlightedTitle}
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: COLORS.textSecondary }}>
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
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <Quote className="w-10 h-10 mb-4" style={{ color: `${COLORS.primary}20` }} />
                  
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  
                  {/* Text */}
                  <p className="mb-6 leading-relaxed" style={{ color: COLORS.textSecondary }}>
                    "{testimonial.text}"
                  </p>
                  
                  {/* Author */}
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold" style={{ color: COLORS.textPrimary }}>
                        {testimonial.name}
                      </div>
                      <div style={{ color: COLORS.primary }}>{testimonial.pet}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
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
              <div className="text-3xl font-bold" style={{ color: COLORS.primary }}>
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
              <div className="text-3xl font-bold" style={{ color: COLORS.primary }}>
                {TESTIMONIALS_CONFIG.trustBadge.reviewsCount}
              </div>
              <div className="text-sm mt-1" style={{ color: COLORS.textSecondary }}>Reseñas positivas</div>
            </div>
            <div className="w-px h-16 bg-gray-200" />
            <div className="text-center">
              <div className="text-3xl font-bold" style={{ color: COLORS.primary }}>
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
