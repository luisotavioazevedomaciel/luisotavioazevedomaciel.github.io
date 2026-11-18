import type { Locale } from '../data/siteContent';

type LocalizedRoute = Record<Locale, string>;

export const routeMap: LocalizedRoute[] = [
  { en: '/', pt: '/pt/' },
  { en: '/services/', pt: '/pt/servicos/' },
  { en: '/contact/', pt: '/pt/contato/' }
];

export function findLocalizedRoute(path: string, targetLocale: Locale): string | undefined {
  const normalize = (value: string) => {
    const segments = value.split('/').filter(Boolean);
    return segments.length ? `/${segments.join('/')}/` : '/';
  };
  const normalizedPath = normalize(path);
  const route = routeMap.find(
    (entry) => normalize(entry.en) === normalizedPath || normalize(entry.pt) === normalizedPath,
  );
  return route?.[targetLocale];
}
