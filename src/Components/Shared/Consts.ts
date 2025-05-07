import neurology from '@/assets/Images/Icons/Neurology.png';
import cardiology from '@/assets/Images/Icons/Cardiology.png';
import orthopedics from '@/assets/Images/Icons/Orthopoedics.png';
import surgery from '@/assets/Images/Icons/Surgery.png';
import dentistry from '@/assets/Images/Icons/Dentistry.png';
import seeMoreImage from '@/assets/Images/Icons/seeMoreImage.png';

import Banner2 from '@/assets/Images/Banner2.png';

import user1 from '@/assets/Images/users/user1.jpg';
import user2 from '@/assets/Images/users/user2.jpg';
import user3 from '@/assets/Images/users/user3.jpg';

import logo from '@/assets/Images/logo.png';

export const links = ['Inicio', 'Nosotros', 'Servicios', 'Reviews'];

export const descNums = [
  {
    text: 'Atención ambulatoria en psiquiatría',
  },
  {
    text: 'Hospitalización psiquiátrica',
  },
  {
    text: 'Servicio y atención',
    num: '24/7',
  },
  {
    text: 'Seguimiento clínico continuo',
  },
  {
    text: 'Suministro de medicamentos psiquiátricos',
  },
];

export const ServicesData = [
  {
    img: neurology,
    title: 'Programas',
    id: 'programas',
    heading: 'Programas de promoción y prevención',
    texts: [
      'Prevención uso y abuso de S.P.A.',
      'Prevención de la Conducta Suicida.',
      'Promoción de pautas de crianza adecuadas.',
      'Promoción de salud sexual y reproductiva.',
      'Promoción de pautas de auto cuidado.',
      'Desarrollo de Habilidades para la Vida.',
    ],
  },
  {
    img: cardiology,
    title: 'Apoyo',
    id: 'apoyo',
    heading: 'Grupos de Apoyo',
    texts: [
      'Grupo trastornos de adicciones.',
      'Grupo manejo del duelo.',
      'Grupo familiares pacientes con enfermedad mental.',
      'Grupo trastornos emocionales.',
      'Grupo trastornos afectivos.',
    ],
  },
  {
    img: seeMoreImage,
    title: 'Psicosociales',
    id: 'psicosociales',
    heading: 'Servicios Psicosociales',
    texts: [
      'Trabajo social.',
      'Intervención familiar.',
      'Acompañamiento familiar.',
      'Orientación sociofamiliar.',
      'Intervenciones psicosociales.',
    ],
  },
  {
    img: dentistry,
    title: 'Complementario',
    id: 'complementario',
    heading: 'Servicios de Apoyo Complementario.',
    texts: [
      'Nutrición.',
      'Terapia ocupacional.',
      'Orientación espiritual.',
    ],
  },
  {
    img: orthopedics,
    title: 'Abc',
    id: 'abc',
    heading: 'Orthopedics Department',
    texts: [
      'Orthopedic surgery and joint replacements',
      'Sports injury and trauma care',
      'Physical therapy and rehabilitation',
      'Spine and back pain solutions',
      'Arthritis and joint disorder treatment',
      'Orthopedic consultations',
      'Customized orthopedic care plans',
    ],
  },
  {
    img: surgery,
    title: 'Abc',
    id: 'abc',
    heading: 'Surgery Department',
    texts: [
      'Minimally invasive and laparoscopic surgery',
      'Gastrointestinal surgery and endoscopy',
      'Plastic and reconstructive surgery',
      'Cancer and tumor resection',
      'Post-operative care and recovery',
      'Surgical consultations',
      'Emergency surgical interventions',
    ],
  },

  
];



export const AboutUsData = {

  heading: '¿Quiénes somos?',
  desc: 'En IPS Sentido de Vida creemos en las segundas oportunidades, en el poder de la escucha y en la fuerza que cada ser humano tiene para reconstruirse. Somos un equipo comprometido con la rehabilitación integral de personas que enfrentan trastornos mentales o problemas asociados al consumo de sustancias psicoactivas.Más que una institución, somos un espacio seguro, donde el respeto, la empatía y la dignidad son la base de cada proceso terapéutico. Aquí, cada historia importa, cada avance se celebra y cada reto se enfrenta con acompañamiento profesional y humano. Nuestro propósito es brindar apoyo real, cercano y constante para que cada persona recupere su salud mental, su entorno y su propósito.',
  img: Banner2,

};

export const MissionBannerData = {
  heading: 'Misión',
  texts: [
    'Brindar atención integral, humanizada y especializada en salud mental y rehabilitación, promoviendo el bienestar emocional, físico y social de nuestros pacientes, mediante un enfoque interdisciplinario, ético y centrado en la dignidad humana.',
  ],
  heading2: 'Visión',
  texts2: [
    'Ser un referente regional en la prestación de servicios de salud mental y rehabilitación, reconocidos por nuestra calidad, compromiso social y excelencia profesional, contribuyendo activamente a la recuperación y reintegración plena de nuestros usuarios en la sociedad.',
  ],
};

export const FeedbackData = {
  heading: 'Patient Feedback',
  feedbacks: [
    {
      img: user1,
      name: 'Ralph Edwards',
      job: 'abc',
      desc: 'abc',
    },
    {
      img: user2,
      name: 'Josh Smith',
      job: 'abc',
      desc: 'abc',
    },
    {
      img: user3,
      name: 'Eleanor Pena',
      job: 'abc',
      desc: "abc",
    },
  ],
};

export const FooterData = {
  logo: logo,
  addresses: ['FINCA MACADAMIA, Quimbaya, Quindío, Colombia'],
  phone: '+57 320 6367888',

  links: links,
};
