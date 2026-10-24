export const business = {
  name: 'Abogada Spina',
  person: 'Micaela Spina',
  email: 'abogadaspina@gmail.com',
  whatsappNumber: '5492915351031',
  maps: 'https://share.google/PHx7IvdO8BE6o8ESR',
  cities: ['Bahía Blanca', 'Choele Choel'],
};

export const socials = [
  {name: 'TikTok', slug: 'tiktok', url: 'https://www.tiktok.com/@abospina'},
  {name: 'Instagram', slug: 'instagram', url: 'https://www.instagram.com/abogadaspina/'},
  {name: 'Facebook', slug: 'facebook', url: 'https://www.facebook.com/micaela.spina.2025'},
];

export const whatsappFor = (area?: string) => {
  const text = area
    ? `Hola Mica, quisiera coordinar una consulta sobre ${area}.`
    : 'Hola Mica, quisiera coordinar una consulta.';
  return `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(text)}`;
};

export const practiceAreas = [
  {name: 'Derecho Penal', description: 'Asesoramiento jurídico para conversar sobre tu situación en materia penal.', slug: 'penal'},
  {name: 'Sucesiones', description: 'Asesoramiento para abordar una sucesión y evaluar cómo continuar.', slug: 'sucesiones'},
  {name: 'Amparos', description: 'Una consulta para evaluar tu situación y la pertinencia de una acción de amparo.', slug: 'amparos'},
  {name: 'Jubilaciones', description: 'Orientación jurídica en consultas relacionadas con jubilaciones.', slug: 'jubilaciones'},
];

export const contactQuestions = [
  {question: '¿Cómo coordino una consulta?', answer: 'Escribime por WhatsApp, contame brevemente el motivo de tu consulta y tu disponibilidad. Coordinamos el turno por ese medio.'},
  {question: '¿Puedo consultar de forma virtual?', answer: 'Sí. Podemos coordinar una videollamada por WhatsApp.'},
  {question: '¿Dónde es la atención presencial?', answer: 'En Bahía Blanca, provincia de Buenos Aires, y en Choele Choel, Río Negro. Al coordinar el turno te confirmo el lugar de atención.'},
  {question: '¿Puedo consultar por un horario diferente?', answer: 'Sí. Contame tu disponibilidad por WhatsApp para que podamos coordinar un momento acorde a tus actividades.'},
];
