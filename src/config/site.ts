/**
 * Fonte única das informações institucionais da ODONTO SPACE.
 * Regra: só entra aqui o que foi CONFIRMADO pela clínica. Itens `null` ficam ocultos no site
 * e são tratados como pendência (ver docs/PENDENCIAS.md).
 */
export const SITE = {
  name: 'ODONTO SPACE',
  tagline: 'Odontologia com acolhimento e cuidado em Bangu',
  locale: 'pt_BR',

  address: {
    street: 'R. Francisco Real, 1910',
    complement: 'Salas 201 a 204',
    streetAddress: 'R. Francisco Real, 1910, Salas 201 a 204',
    neighborhood: 'Bangu',
    city: 'Rio de Janeiro',
    state: 'RJ',
    country: 'BR',
    postalCode: '21810-042',
  },

  whatsapp: {
    display: '(21) 99613-9234',
    e164: '5521996139234',
  },

  // PENDENTES — não preencher sem confirmação da clínica.
  instagram: null as string | null, // URL do perfil
  facebook: null as string | null,
  technicalResponsible: null as { name: string; cro: string } | null, // responsável técnico + CRO
  legalName: null as string | null, // razão social (política de privacidade)
  cnpj: null as string | null, // CNPJ (política de privacidade)
  geo: null as { lat: number; lng: number } | null,
  googleMapsUrl: null as string | null, // link do perfil no Google Maps, quando existir

  // Cirurgião-dentista clínico geral (nome confirmado; CRO pendente).
  generalDentist: {
    title: 'Cirurgião-dentista',
    role: 'Clínica geral',
    name: 'Dr. Marcelo Souza',
    cro: null as string | null,
    photoAlt: 'Dr. Marcelo Souza, cirurgião-dentista clínico geral, sorrindo diante de uma parede clara',
  },
  // Ortodontista (nome confirmado; CRO pendente).
  orthodontist: {
    title: 'Ortodontista',
    role: 'Ortodontia',
    name: 'Sayonara Dias',
    cro: null as string | null,
    photoAlt: 'Sayonara Dias, ortodontista da ODONTO SPACE, sorrindo diante de uma parede clara',
  },
  ogImagePath: '/og-odonto-space.png' as string | null, // em public/
  credit: { text: 'Site criado por', name: 'marcelooliveira.ia', url: 'https://marcelooliveiramarketing.com.br/' },
} as const;

/** Horários de atendimento (confirmados pela clínica). */
export const HOURS = [
  { label: 'Segunda a sexta', value: '09:00–18:00', days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '18:00' },
  { label: 'Sábado', value: '09:00–13:00', days: ['Saturday'], opens: '09:00', closes: '13:00' },
  { label: 'Domingo', value: 'Fechado', days: [], opens: null, closes: null },
] as const;

export const ADDRESS_FULL = `${SITE.address.street} – ${SITE.address.complement} – ${SITE.address.neighborhood}, ${SITE.address.city} – ${SITE.address.state}, CEP ${SITE.address.postalCode}`;

/** Link de busca no Google Maps pelo endereço completo (sem embed, para não carregar cookies de terceiros). */
export const MAPS_URL =
  SITE.googleMapsUrl ??
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${SITE.address.street} - ${SITE.address.complement} - ${SITE.address.neighborhood}, ${SITE.address.city} - ${SITE.address.state}, ${SITE.address.postalCode}`,
  )}`;

export const GENERAL_WHATSAPP_MESSAGE = 'Olá! Vim pelo site da ODONTO SPACE e gostaria de agendar uma avaliação.';
/** Mensagem do botão do rodapé: identifica que o contato veio do site. */
export const FOOTER_WHATSAPP_MESSAGE = 'Olá! Encontrei a ODONTO SPACE pelo site e gostaria de mais informações sobre os tratamentos.';

export interface Service {
  slug: string | null;
  title: string;
  /** Mensagem pré-preenchida do WhatsApp do serviço. */
  whatsappMessage: string;
}

export const SERVICES: Service[] = [
  { slug: 'implantes-dentarios', title: 'Implantes dentários', whatsappMessage: 'Olá! Gostaria de agendar uma avaliação para implante dentário na ODONTO SPACE.' },
  { slug: 'proteses-dentarias', title: 'Próteses dentárias', whatsappMessage: 'Olá! Gostaria de informações sobre próteses dentárias na ODONTO SPACE.' },
  { slug: 'ortodontia', title: 'Ortodontia', whatsappMessage: 'Olá! Gostaria de agendar uma avaliação de ortodontia na ODONTO SPACE.' },
  { slug: null, title: 'Estética do Sorriso', whatsappMessage: 'Olá! Gostaria de informações sobre estética do sorriso na ODONTO SPACE.' },
  { slug: null, title: 'Clínica geral', whatsappMessage: 'Olá! Gostaria de agendar uma consulta de clínica geral na ODONTO SPACE.' },
];

export const serviceMessage = (title: string) => SERVICES.find((s) => s.title === title)!.whatsappMessage;

export interface NavItem { label: string; href: string }

export const NAV: NavItem[] = [
  { label: 'Início', href: '/' },
  { label: 'Implantes', href: '/implantes-dentarios' },
  { label: 'Próteses', href: '/proteses-dentarias' },
  { label: 'Ortodontia', href: '/ortodontia' },
  { label: 'A clínica', href: '/a-clinica-e-equipe' },
  { label: 'Contato', href: '/contato-e-localizacao' },
];
