/**
 * Datos globales del sitio.
 *
 * OJO: aquí solo viven datos de configuración (nombre, contacto, redes,
 * navegación). Los textos de las páginas están en `src/content/`.
 */

export const SITE = {
  nombre: 'Asociación Astronómica Quarks',
  nombreCorto: 'AA Quarks',
  descripcion:
    'Asociación Astronómica Quarks de Úbeda (Jaén). Desde 1989 divulgamos la astronomía: Planetario de Úbeda, Centro de La Fresnedilla en la Sierra de las Villas, observaciones públicas y astrofotografía.',
  email: 'aaquarks@aaquarks.com',
  emailPlanetario: 'planetariodeubeda@aaquarks.com',
  localidad: 'Úbeda (Jaén), Andalucía',
  fundacion: 1989,
} as const;

export const REDES = [
  {
    nombre: 'Facebook',
    url: 'https://www.facebook.com/groups/AAQuarks/',
    usuario: 'Grupo AAQuarks',
  },
  {
    nombre: 'Instagram',
    url: 'https://www.instagram.com/aaquarks/',
    usuario: '@aaquarks',
  },
] as const;

/** Navegación principal (el orden importa). */
export const NAV = [
  { etiqueta: 'Inicio', ruta: '/' },
  { etiqueta: 'Eclipse 2026', ruta: '/eclipses/2026/' },
  { etiqueta: 'La Fresnedilla', ruta: '/la-fresnedilla/' },
  { etiqueta: 'Planetario', ruta: '/planetario/' },
  { etiqueta: 'Astrofotografía', ruta: '/astrofotografia/' },
  { etiqueta: 'Simulaciones', ruta: '/simulaciones/' },
  { etiqueta: 'La Asociación', ruta: '/asociacion/' },
  { etiqueta: 'Actividades', ruta: '/actividades/' },
] as const;

/**
 * Construye una URL interna respetando el `base` configurado
 * (en GitHub Pages el sitio cuelga de /aa-quarks/).
 */
export function href(ruta: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${ruta}`;
}
