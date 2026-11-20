/**
 * Fonte única das informações institucionais da ODONTO SPACE.
 * Regra: só entra aqui o que foi CONFIRMADO. Itens `null` ficam ocultos no site
 * e são tratados como pendência (ver README).
 */
export const SITE = {
  name: 'ODONTO SPACE',
  tagline: 'Odontologia com acolhimento e cuidado em Bangu',
  locale: 'pt_BR',

  address: {
    street: 'Rua Francisco Real, 1910 – Sala 201',
    streetAddress: 'Rua Francisco Real, 1910, Sala 201',
    neighborhood: 'Bangu',
    city: 'Rio de Janeiro',
    state: 'RJ',
    country: 'BR',
    postalCode: null as string | null, // PENDENTE: CEP
  },

  whatsapp: {
    display: '(21) 99613-9234',
    e164: '5521996139234',
  },

  // PENDENTES — não preencher sem confirmação da clínica.
  hours: null as string | null, // horários de atendimento
  instagram: null as string | null, // URL do perfil
  facebook: null as string | null,
  technicalResponsible: null as { name: string; cro: string } | null, // responsável técnico + CRO
  geo: null as { lat: number; lng: number } | null,
  googleMapsUrl: null as string | null, // link do perfil no Google Maps, quando existir
  // Cirurgião-dentista clínico geral (dados CONFIRMADOS pela clínica; NÃO é implantodontista).
  generalDentist: {
    title: 'Cirurgião-dentista',
    role: 'Clínica geral',
    name: 'Dr. Marcelo Souza' as string | null, // nome confirmado
    cro: null as string | null, // PENDENTE: CRO
    photoAlt: 'Dr. Marcelo Souza, cirurgião-dentista clínico geral, sorrindo diante de uma parede clara',
  },
  // Ortodontista (nome e CRO ainda não confirmados — o nome bordado no jaleco não é legível na foto).
  orthodontist: {
    title: 'Ortodontista',
    role: 'Ortodontia',
    name: null as string | null, // PENDENTE
    cro: null as string | null, // PENDENTE
    photoAlt: 'Ortodontista da ODONTO SPACE, sorrindo diante de uma parede clara',
  },
  logoPath: null as string | null, // a logo é importada de src/assets/brand
  ogImagePath: '/og-odonto-space.png' as string | null, // em public/
} as const;

export const ADDRESS_ONE_LINE = `${SITE.address.street}, ${SITE.address.neighborhood}, ${SITE.address.city}/${SITE.address.state}`;

/** Link de rota/busca no Google Maps (sem embed, para não carregar cookies de terceiros). */
export const MAPS_URL =
  SITE.googleMapsUrl ??
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${SITE.name}, ${SITE.address.streetAddress}, ${SITE.address.neighborhood}, ${SITE.address.city} - ${SITE.address.state}`,
  )}`;

export interface Service {
  slug: string | null; // null = ainda sem página própria
  title: string;
  short: string;
  /** Mensagem pré-preenchida do WhatsApp para o serviço. */
  whatsappMessage: string;
}

export const SERVICES: Service[] = [
  {
    slug: 'implantes-dentarios',
    title: 'Implantes dentários',
    short: 'Reposição de dentes ausentes com planejamento individual e avaliação criteriosa.',
    whatsappMessage: 'Olá! Gostaria de agendar uma avaliação para implante dentário na ODONTO SPACE.',
  },
  {
    slug: 'proteses-dentarias',
    title: 'Próteses dentárias',
    short: 'Soluções para recuperar função mastigatória e estética do sorriso.',
    whatsappMessage: 'Olá! Gostaria de informações sobre próteses dentárias na ODONTO SPACE.',
  },
  {
    slug: 'ortodontia-invisalign',
    title: 'Ortodontia e Invisalign',
    short: 'Alinhamento dos dentes com aparelhos ortodônticos ou alinhadores Invisalign, conforme a indicação.',
    whatsappMessage: 'Olá! Gostaria de agendar uma avaliação de ortodontia/Invisalign na ODONTO SPACE.',
  },
  {
    slug: null,
    title: 'Estética do Sorriso',
    short: 'Orientação sobre cuidados estéticos, como o clareamento dental, conforme a indicação do dentista após a avaliação.',
    whatsappMessage: 'Olá! Gostaria de informações sobre estética do sorriso na ODONTO SPACE.',
  },
  {
    slug: null,
    title: 'Clínica geral',
    short: 'Avaliação, prevenção e cuidados com a saúde bucal para o dia a dia.',
    whatsappMessage: 'Olá! Gostaria de agendar uma consulta de clínica geral na ODONTO SPACE.',
  },
];

export const GENERAL_WHATSAPP_MESSAGE =
  'Olá! Vim pelo site da ODONTO SPACE e gostaria de agendar uma avaliação.';

export interface NavItem {
  label: string;
  href: string;
}

export const NAV: NavItem[] = [
  { label: 'Início', href: '/' },
  { label: 'Implantes', href: '/implantes-dentarios' },
  { label: 'Próteses', href: '/proteses-dentarias' },
  { label: 'Ortodontia e Invisalign', href: '/ortodontia-invisalign' },
  { label: 'A clínica', href: '/a-clinica-e-equipe' },
  { label: 'Contato', href: '/contato-e-localizacao' },
];
