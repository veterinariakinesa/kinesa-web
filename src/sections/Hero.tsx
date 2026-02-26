import { ArrowRight, Calendar, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { HERO_CONFIG, SITE_CONFIG, COLORS } from '@/config';

const Hero = () => {
  const hasBackgroundImage = HERO_CONFIG.backgroundImage && HERO_CONFIG.backgroundImage !== '';
  const hasSideImage = HERO_CONFIG.sideImage && HERO_CONFIG.sideImage !== '';

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      {hasBackgroundImage ? (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_CONFIG.backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ) : (
        <div 
          className="absolute inset-0"
          style={{ 
            background: `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.primaryDark} 100%)` 
          }}
        />
      )}
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div 
          className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full blur-3xl"
          style={{ backgroundColor: `${COLORS.accent}20` }}
        />
      </div>

      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="5" cy="5" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Heart className="w-4 h-4 text-white fill-white" />
              <span className="text-white text-sm font-medium">{SITE_CONFIG.tagline}</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {HERO_CONFIG.title}{' '}
              <span className="relative">
                {HERO_CONFIG.highlightedTitle}
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 10C50 2 150 2 198 10" stroke="white" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-xl">
              {HERO_CONFIG.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contacto">
                <Button 
                  size="lg" 
                  className="gap-2 font-semibold"
                  style={{ backgroundColor: '#ffffff', color: COLORS.primary }}
                >
                  <Calendar className="w-5 h-5" />
                  {HERO_CONFIG.primaryButtonText}
                </Button>
              </a>
              <a href="#servicios">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white/10 gap-2"
                >
                  {HERO_CONFIG.secondaryButtonText}
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20">
              {HERO_CONFIG.stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl sm:text-4xl font-bold text-white">{stat.value}</div>
                  <div className="text-white/80 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              <div 
                className="w-80 h-80 rounded-full flex items-center justify-center"
                style={{ backgroundColor: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(4px)' }}
              >
                {hasSideImage ? (
                  <img
                    src={HERO_CONFIG.sideImage}
                    alt="Hero"
                    className="w-72 h-72 rounded-full object-cover shadow-2xl"
                  />
                ) : (
                  <img
                    src={SITE_CONFIG.logo}
                    alt={`${SITE_CONFIG.name} Logo`}
                    className="w-72 h-72 rounded-full object-cover shadow-2xl"
                  />
                )}
              </div>
              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Heart className="w-5 h-5 text-green-500 fill-green-500" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-800">Cuidado</div>
                    <div className="text-xs text-gray-500">Especializado</div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${COLORS.primary}10` }}
                  >
                    <Calendar className="w-5 h-5" style={{ color: COLORS.primary }} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-800">Citas</div>
                    <div className="text-xs text-gray-500">Online 24/7</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
