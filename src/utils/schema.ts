import { SITE } from '../config/site';

/**
 * Dados estruturados do consultório (schema.org/Dentist).
 * Apenas dados confirmados: campos pendentes (horários, geo, CEP, redes sociais,
 * avaliações) NÃO são emitidos.
 */
export function dentistSchema(siteUrl: string) {
  const sameAs = [SITE.instagram, SITE.facebook].filter(Boolean);
  return {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    '@id': `${siteUrl}/#clinica`,
    name: SITE.name,
    url: siteUrl,
    telephone: `+${SITE.whatsapp.e164}`,
    medicalSpecialty: 'Dentistry',
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.streetAddress,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      addressCountry: SITE.address.country,
      ...(SITE.address.postalCode ? { postalCode: SITE.address.postalCode } : {}),
    },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Bangu, Rio de Janeiro - RJ' },
    ],
    ...(SITE.geo
      ? { geo: { '@type': 'GeoCoordinates', latitude: SITE.geo.lat, longitude: SITE.geo.lng } }
      : {}),
    ...(SITE.logoPath ? { image: `${siteUrl}${SITE.logoPath}`, logo: `${siteUrl}${SITE.logoPath}` } : {}),
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
      item: `${siteUrl}${item.path === '/' ? '' : item.path}`,
    })),
  };
}
