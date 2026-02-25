// ============================================
// CONFIGURACIÓN DE VETERINARIA KINESA
// ============================================
// Modifica los valores aquí para personalizar tu página

// ============================================
// INFORMACIÓN GENERAL
// ============================================
export const SITE_CONFIG = {
  // Nombre de la veterinaria
  name: 'Kinesa Clinica Veterinaria',

  // Eslogan o frase principal
  tagline: 'Calidad que se nota, amor que se siente',

  // Descripción general (para SEO)
  description: 'Atención veterinaria de excelencia para tus mejores amigos. Servicios completos con amor, profesionalismo y tecnología de vanguardia.',

  // Logo principal (ruta desde la carpeta public)
  logo: '/logo-kinesa.jpg',

  // Favicon
  favicon: '/logo-kinesa.jpg',
};

// ============================================
// COLORES PERSONALIZABLES
// ============================================
export const COLORS = {
  // Color principal (turquesa del logo)
  primary: '#00A0B0',

  // Color principal oscuro (hover)
  primaryDark: '#008899',

  // Color secundario/accent
  accent: '#00C4D4',

  // Color de texto principal
  textPrimary: '#1a1a1a',

  // Color de texto secundario
  textSecondary: '#666666',

  // Color de fondo
  background: '#ffffff',

  // Color de fondo alternativo
  backgroundAlt: '#f8fafc',
};

// ============================================
// CONTACTO Y REDES SOCIALES
// ============================================
export const CONTACT_INFO = {
  // Dirección
  address: 'Pcia de jujuy 165',
  city: 'San Miguel de Tucuman, Argentina',

  // Teléfonos
  phone: '(54) 3816272590',
  emergencyPhone: '(54) 3812579266',

  // Emails
  email: 'veterinariakinesa@gmail.com',
  appointmentsEmail: 'veterinariakinesa@gmail.com',

  // Horario
  weekdayHours: 'Lunes a Viernes: 9:00 - 22:00 hs',
  weekendHours: 'Sábados: 9:00 - 13:00 hs | Domingos: Cerrado',

  // Redes sociales (dejar en '' si no tienes)
  social: {
    facebook: 'https://facebook.com/veterinariakinesa',
    instagram: 'https://instagram.com/veterinariakinesa',
    twitter: '',
    youtube: '',
  },
};

// ============================================
// SECCIÓN HERO (INICIO)
// ============================================
export const HERO_CONFIG = {
  // Título principal
  title: 'Veterinaria',

  // Subtítulo o nombre destacado
  highlightedTitle: 'Kinesa',

  // Descripción
  description: 'Atención veterinaria de excelencia para tus mejores amigos. Servicios completos con amor, profesionalismo y tecnología de vanguardia.',

  // Imagen de fondo (opcional - dejar en '' para usar gradiente)
  // Ejemplo: '/images/hero-bg.jpg'
  backgroundImage: '',

  // Imagen del lado derecho (dejar en '' para usar logo)
  // Ejemplo: '/images/hero-mascotas.png'
  sideImage: '/images/hero-mascotas.jpg',

  // Texto del botón principal
  primaryButtonText: 'Agendar Cita',

  // Texto del botón secundario
  secondaryButtonText: 'Nuestros Servicios',

  // Estadísticas
  stats: [
    { value: '15+', label: 'Años de experiencia' },
    { value: '1K+', label: 'Mascotas atendidas' },
    { value: '24/7', label: 'Emergencias' },
  ],
};

// ============================================
// SECCIÓN SERVICIOS
// ============================================
export const SERVICES_CONFIG = {
  // Título de la sección
  title: 'Cuidamos de tu mascota en',
  highlightedTitle: 'todos los aspectos',

  // Descripción
  description: 'Ofrecemos una amplia gama de servicios veterinarios para mantener a tu compañero peludo sano y feliz en cada etapa de su vida.',

  // Lista de servicios
  services: [
    {
      id: 'consulta',
      title: 'Consulta General',
      description: 'Evaluación completa de la salud de tu mascota con nuestros veterinarios expertos.',
      icon: 'Stethoscope', // No modificar - nombre del icono de Lucide
      // Imagen del servicio (opcional)
      image: '/images/servicio-consulta.jpg',
      // Color del icono (puedes usar: '#00A0B0', 'green', 'purple', 'orange', 'pink', 'red')
      color: '#00A0B0',
    },
    {
      id: 'vacunacion',
      title: 'Vacunación',
      description: 'Programa completo de vacunación para perros, gatos y otras mascotas.',
      icon: 'Syringe',
      image: '/images/servicio-vacunacion.jpg',
      color: 'green',
    },
    {
      id: 'Spa canino',
      title: 'Estética Canina',
      description: 'Baño, corte de pelo, uñas y cuidado completo de la higiene de tu mascota.',
      icon: 'Scissors',
      image: '/images/servicio-estetica.jpg',
      color: 'purple',
    },
    {
      id: 'farmacia',
      title: 'Farmacia Veterinaria Kinesa',
      description: 'Medicamentos, suplementos y productos de cuidado para tu mascota.',
      icon: 'Pill',
      image: '/images/servicio-farmacia.jpg',
      color: 'orange',
    },
    {
      id: 'laboratorio',
      title: 'Laboratorio Clínico',
      description: 'Análisis de sangre, orina y estudios diagnósticos de última generación.',
      icon: 'Microscope',
      image: '/images/servicio-laboratorio.jpg',
      color: 'pink',
    },
    {
      id: 'urgencias',
      title: 'Urgencias 24/7',
      description: 'Atención de emergencias las 24 horas del día, los 7 días de la semana.',
      icon: 'Ambulance',
      image: '/images/servicio-urgencias.jpg',
      color: 'red',
    },
  ],

  // CTA al final de servicios
  ctaText: '¿Necesitas ayuda?',
  ctaSubtext: 'Contáctanos para más información sobre nuestros servicios',
  ctaButtonText: 'Contactar',
};

// ============================================
// SECCIÓN NOSOTROS (ABOUT)
// ============================================
export const ABOUT_CONFIG = {
  // Título
  title: 'Tu mascota en las',
  highlightedTitle: 'mejores manos',

  // Párrafos de descripción
  paragraph1: 'En Clinica Veterinaria Kinesa, entendemos que tus mascotas son parte de tu familia. Por eso, nos dedicamos a brindar atención veterinaria de la más alta calidad con amor, dedicación y profesionalismo.',

  paragraph2: 'Nuestro equipo de veterinarios altamente capacitados utiliza tecnología de vanguardia para diagnosticar y tratar a tus compañeros peludos, asegurando que reciban el mejor cuidado posible en cada visita.',

  // Imagen principal (dejar en '' para usar logo)
  // Ejemplo: '/images/clinica.jpg'
  mainImage: '/images/equipo-veterinarios.jpg',

  // Características/lista
  features: [
    'Veterinarios certificados y en constante capacitación',
    'Instalaciones modernas y equipamiento de última generación',
    'Atención personalizada para cada mascota',
    'Enfoque en medicina preventiva',
    'Ambiente cálido y amigable',
    'Precios accesibles sin comprometer la calidad',
  ],

  // Estadísticas
  stats: [
    { value: '15+', label: 'Años de experiencia', icon: 'Award' },
    { value: '10K+', label: 'Clientes satisfechos', icon: 'Users' },
    { value: '24/7', label: 'Servicio de emergencias', icon: 'Clock' },
  ],
};

// ============================================
// SECCIÓN TESTIMONIOS
// ============================================
export const TESTIMONIALS_CONFIG = {
  // Título
  title: 'Lo que dicen nuestros',
  highlightedTitle: 'clientes felices',

  // Descripción
  description: 'Miles de familias confían en nosotros el cuidado de sus mascotas. Esto es lo que opinan de nuestra atención.',

  // Lista de testimonios
  testimonials: [
    {
      id: 1,
      name: 'María González',
      pet: 'Luna (Golden Retriever)',
      // Foto del cliente (URL o ruta local)
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'El equipo de Kinesa ha sido increíble con Luna. Desde su primera vacuna hasta su esterilización, siempre han mostrado profesionalismo y mucho cariño. ¡Totalmente recomendados!',
    },
    {
      id: 2,
      name: 'Carlos Rodríguez',
      pet: 'Michi (Gato Persa)',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'Michi es muy nervioso con los veterinarios, pero en Kinesa lo tratan con tanta paciencia que ahora incluso ronronea durante las consultas. Excelente servicio.',
    },
    {
      id: 3,
      name: 'Ana Martínez',
      pet: 'Rocky (Bulldog Francés)',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'Tuve una emergencia a las 2 de la mañana y el servicio de urgencias fue excepcional. Salvaron la vida de Rocky y no puedo estar más agradecida.',
    },
    {
      id: 4,
      name: 'Luis Hernández',
      pet: 'Coco (Caniche)',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'Llevo a Coco al servicio de estética desde hace 2 años y siempre queda hermoso. El personal es muy amable y el lugar está impecable.',
    },
    {
      id: 5,
      name: 'Patricia López',
      pet: 'Simba (Gato Siamés)',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'Los precios son muy justos y la calidad del servicio es excelente. Simba recibe sus chequeos anuales aquí y siempre todo perfecto.',
    },
    {
      id: 6,
      name: 'Roberto Silva',
      pet: 'Max (Labrador)',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'Kinesa es la mejor veterinaria de la zona. El Dr. García explica todo con detalle y siempre está disponible para resolver dudas.',
    },
  ],

  // Badge de confianza
  trustBadge: {
    rating: '4.9',
    reviewsCount: '500+',
    satisfactionRate: '98%',
  },
};

// ============================================
// SECCIÓN CONTACTO
// ============================================
export const CONTACT_CONFIG = {
  // Título
  title: 'Estamos aquí para',
  highlightedTitle: 'ayudarte',

  // Descripción
  description: '¿Tienes alguna pregunta o necesitas agendar una cita? Contáctanos y te responderemos lo antes posible.',

  // Imagen del mapa (dejar en '' para usar placeholder)
  mapImage: '',

  // Coordenadas para Google Maps (opcional)
  // Ejemplo: '26.8318106,-65.2115594,54' ,
  mapCoordinates: '-26.831339,-65.211475',

  // Formulario
  form: {
    title: 'Envíanos un mensaje',
    fields: {
      firstName: { label: 'Nombre', placeholder: 'Tu nombre' },
      lastName: { label: 'Apellido', placeholder: 'Tu apellido' },
      email: { label: 'Email', placeholder: 'tu@email.com' },
      phone: { label: 'Teléfono', placeholder: '(54) 1234-5678' },
      message: { label: 'Mensaje', placeholder: '¿En qué podemos ayudarte?' },
    },
    submitButtonText: 'Enviar Mensaje',
  },
};

// ============================================
// FOOTER
// ============================================
export const FOOTER_CONFIG = {
  // Descripción corta
  description: 'Cuidamos de tus mascotas como si fueran nuestra propia familia. Más de 15 años de experiencia en atención veterinaria de excelencia.',

  // Enlaces rápidos
  quickLinks: [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Testimonios', href: '#testimonios' },
    { name: 'Contacto', href: '#contacto' },
  ],

  // Servicios listados en footer
  servicesList: [
    { name: 'Consulta General', href: '#servicios' },
    { name: 'Vacunación', href: '#servicios' },
    { name: 'Estética Canina', href: '#servicios' },
    { name: 'Farmacia', href: '#servicios' },
    { name: 'Laboratorio', href: '#servicios' },
    { name: 'Urgencias 24/7', href: '#servicios' },
  ],

  // Texto final
  madeWithLove: 'Hecho con ❤️ para tus mascotas',
};

// ============================================
// NAVEGACIÓN
// ============================================
export const NAVIGATION_CONFIG = {
  // Links del menú
  links: [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Testimonios', href: '#testimonios' },
    { name: 'Contacto', href: '#contacto' },
  ],

  // Texto del botón CTA
  ctaButtonText: 'Llamar Ahora',
};
