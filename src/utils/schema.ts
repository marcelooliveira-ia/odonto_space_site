import { SITE, HOURS } from '../config/site';

/**
 * Dados estruturados do consultório (schema.org/Dentist). Somente dados CONFIRMADOS:
 * não há avaliações, preços, coordenadas ou redes sociais inventados.
 */
export function dentistSchema(siteUrl: string) {
  const sameAs = [SITE.instagram, SITE.facebook].filter(Boolean);
  return {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    '@id': `${siteUrl}/#clinica`,
    name: SITE.name,
    url: `${siteUrl}/`,
    telephone: `+${SITE.whatsapp.e164}`,
    medicalSpecialty: 'Dentistry',
    image: `${siteUrl}${SITE.ogImagePath ?? '/og-odonto-space.png'}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.streetAddress,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    areaServed: [{ '@type': 'AdministrativeArea', name: 'Bangu, Rio de Janeiro - RJ' }],
    openingHoursSpecification: HOURS.filter((h) => h.opens).map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    ...(SITE.geo ? { geo: { '@type': 'GeoCoordinates', latitude: SITE.geo.lat, longitude: SITE.geo.lng } } : {}),
    ...(sameAs.length ? { sameAs } : {}),
  };
}

export function breadcrumbSchema(siteUrl: string, items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${siteUrl}${item.path === '/' ? '/' : item.path}`,
    })),
  };
}

/** Perguntas frequentes (somente as que aparecem na página). */
export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
}
