import { Check, Award, Users, Clock, Camera } from 'lucide-react';
import { motion } from 'framer-motion';
import { useConfig } from '../context/ConfigContext';

// Mapa de iconos
const iconMap: { [key: string]: React.ElementType } = {
  Award,
  Users,
  Clock,
};

const About = () => {
  const { config, updateConfig, editMode, selectAndUploadImage } = useConfig();
  const { ABOUT_CONFIG, SITE_CONFIG, COLORS } = config;

  const hasMainImage = ABOUT_CONFIG.mainImage && ABOUT_CONFIG.mainImage !== '';

  const handleTextUpdate = (key: string, value: string) => {
    updateConfig({
      ABOUT_CONFIG: { ...ABOUT_CONFIG, [key]: value }
    });
  };

  const updateFeature = (index: number, value: string) => {
    const newFeatures = [...ABOUT_CONFIG.features];
    newFeatures[index] = value;
    updateConfig({
      ABOUT_CONFIG: { ...ABOUT_CONFIG, features: newFeatures }
    });
  };

  const updateStatValue = (index: number, field: string, value: string) => {
    const newStats = [...ABOUT_CONFIG.stats];
    newStats[index] = { ...newStats[index], [field]: value };
    updateConfig({
      ABOUT_CONFIG: { ...ABOUT_CONFIG, stats: newStats }
    });
  };

  return (
    <section id="nosotros" className="py-24" style={{ background: 'linear-gradient(to bottom, #f8fafc, #ffffff)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative group/img">
              {/* Main Image */}
              <div className={`rounded-3xl overflow-hidden shadow-2xl transition-all ${editMode ? 'ring-4 ring-blue-500/30' : ''}`}>
                {hasMainImage ? (
                  <img
                    src={ABOUT_CONFIG.mainImage}
                    alt={`${SITE_CONFIG.name}`}
                    className="w-full h-auto"
                  />
                ) : (
                  <img
                    src={SITE_CONFIG.logo}
                    alt={`${SITE_CONFIG.name} Logo`}
                    className="w-full h-auto"
                  />
                )}

                {editMode && (
                  <div
                    className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity cursor-pointer"
                    onClick={async () => {
                      const base64 = await selectAndUploadImage();
                      if (base64) handleTextUpdate('mainImage', base64);
                    }}
                  >
                    <div className="text-white flex flex-col items-center gap-2">
                      <Camera size={48} />
                      <span className="font-bold">Cargar Foto</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-xl p-6 max-w-xs z-10"
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${COLORS.primary}10` }}
                  >
                    <Award className="w-7 h-7" style={{ color: COLORS.primary }} />
                  </div>
                  <div>
                    <div
                      className="text-2xl font-bold outline-none"
                      style={{ color: COLORS.textPrimary }}
                      contentEditable={editMode}
                      suppressContentEditableWarning
                      onBlur={(e) => updateStatValue(0, 'value', e.target.innerText)}
                    >
                      {ABOUT_CONFIG.stats[0]?.value}
                    </div>
                    <div
                      style={{ color: COLORS.textSecondary }}
                      className="outline-none"
                      contentEditable={editMode}
                      suppressContentEditableWarning
                      onBlur={(e) => updateStatValue(0, 'label', e.target.innerText)}
                    >
                      {ABOUT_CONFIG.stats[0]?.label}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <div
                className="absolute -top-6 -left-6 w-24 h-24 rounded-full -z-10"
                style={{ backgroundColor: `${COLORS.primary}10` }}
              />
              <div
                className="absolute -bottom-6 left-1/4 w-16 h-16 rounded-full -z-10"
                style={{ backgroundColor: `${COLORS.accent}10` }}
              />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span
              className="inline-block rounded-full px-4 py-2 text-sm font-medium mb-4"
              style={{ backgroundColor: `${COLORS.primary}10`, color: COLORS.primary }}
            >
              Sobre Nosotros
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ color: COLORS.textPrimary }}>
              <span
                contentEditable={editMode}
                suppressContentEditableWarning
                onBlur={(e) => handleTextUpdate('title', e.target.innerText)}
                className="outline-none"
              >
                {ABOUT_CONFIG.title}
              </span>{' '}
              <span
                className="bg-clip-text text-transparent outline-none"
                style={{ backgroundImage: `linear-gradient(to right, ${COLORS.primary}, ${COLORS.accent})` }}
                contentEditable={editMode}
                suppressContentEditableWarning
                onBlur={(e) => handleTextUpdate('highlightedTitle', e.target.innerText)}
              >
                {ABOUT_CONFIG.highlightedTitle}
              </span>
            </h2>

            <p
              className="text-lg mb-6 leading-relaxed outline-none"
              style={{ color: COLORS.textSecondary }}
              contentEditable={editMode}
              suppressContentEditableWarning
              onBlur={(e) => handleTextUpdate('paragraph1', e.target.innerText)}
            >
              {ABOUT_CONFIG.paragraph1}
            </p>

            <p
              className="text-lg mb-8 leading-relaxed outline-none"
              style={{ color: COLORS.textSecondary }}
              contentEditable={editMode}
              suppressContentEditableWarning
              onBlur={(e) => handleTextUpdate('paragraph2', e.target.innerText)}
            >
              {ABOUT_CONFIG.paragraph2}
            </p>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {ABOUT_CONFIG.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`flex items-start gap-3 p-1 rounded-lg ${editMode ? 'hover:bg-gray-50' : ''}`}
                >
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: COLORS.primary }}
                  >
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span
                    style={{ color: COLORS.textSecondary }}
                    className="outline-none w-full"
                    contentEditable={editMode}
                    suppressContentEditableWarning
                    onBlur={(e) => updateFeature(index, e.target.innerText)}
                  >
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              {ABOUT_CONFIG.stats.map((stat, index) => {
                const StatIcon = iconMap[stat.icon] || Award;
                return (
                  <motion.div
                    key={`${stat.label}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="text-center"
                  >
                    <StatIcon className="w-8 h-8 mx-auto mb-2" style={{ color: COLORS.primary }} />
                    <div
                      className="text-2xl sm:text-3xl font-bold outline-none"
                      style={{ color: COLORS.textPrimary }}
                      contentEditable={editMode}
                      suppressContentEditableWarning
                      onBlur={(e) => updateStatValue(index, 'value', e.target.innerText)}
                    >
                      {stat.value}
                    </div>
                    <div
                      className="text-sm outline-none"
                      style={{ color: COLORS.textSecondary }}
                      contentEditable={editMode}
                      suppressContentEditableWarning
                      onBlur={(e) => updateStatValue(index, 'label', e.target.innerText)}
                    >
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
