import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Colecciones de contenido. Todo lo editable vive en `src/content/`:
 * añadir una foto, una simulación o una noticia es crear un archivo.
 * El README explica el proceso paso a paso para no técnicos.
 */

/** Un enlace externo con título y descripción opcional. */
const enlace = z.object({
  titulo: z.string(),
  url: z.string().url(),
  descripcion: z.string().optional(),
});

/** Eclipses: un archivo .md por eclipse (2026, 2027, 2028…). */
const eclipses = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/eclipses' }),
  schema: z.object({
    titulo: z.string(),
    subtitulo: z.string().optional(),
    fecha: z.coerce.date(),
    /** Instante local del inicio (ISO con zona horaria) para la cuenta atrás. */
    inicioISO: z.string(),
    tipo: z.enum(['total', 'anular', 'parcial']),
    /** Circunstancias locales en Úbeda. */
    local: z.object({
      tipo: z.string(),
      oscurecimiento: z.string(),
      inicio: z.string(),
      maximo: z.string(),
      ocaso: z.string().optional(),
      fin: z.string(),
      duracionVisible: z.string(),
      alturaSolMaximo: z.string().optional(),
      acimutMaximo: z.string().optional(),
      notas: z.string().optional(),
    }),
    puntosObservacion: z
      .array(z.object({ nombre: z.string(), notas: z.string().optional() }))
      .default([]),
    /** Ruta (relativa a la raíz pública) del PDF descargable, si existe. */
    pdf: z.object({ ruta: z.string(), titulo: z.string(), peso: z.string().optional() }).optional(),
    enlacesOficiales: z.array(enlace).default([]),
    tiendasFiltros: z.array(enlace).default([]),
    visualizadores: z.array(enlace).default([]),
    paraSaberMas: z.array(enlace).default([]),
    libros: z
      .array(z.object({ titulo: z.string(), autor: z.string().optional(), isbn: z.string().optional(), url: z.string().url().optional() }))
      .default([]),
  }),
});

/** Astrofotografía: un archivo .md por fotografía. */
const astrofotos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/astrofotos' }),
  schema: ({ image }) =>
    z.object({
      titulo: z.string(),
      autor: z.string(),
      imagen: image(),
      /** Año o fecha aproximada, texto libre («2011», «julio de 2010»…). */
      fecha: z.string().optional(),
      equipo: z.string().optional(),
      lugar: z.string().optional(),
      categoria: z
        .enum(['cielo-profundo', 'sistema-solar', 'cometas', 'sol', 'dibujos', 'paisajes'])
        .default('cielo-profundo'),
      destacada: z.boolean().default(false),
    }),
});

/** Simulaciones interactivas: un archivo .md por simulación. */
const simulaciones = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/simulaciones' }),
  schema: ({ image }) =>
    z.object({
      titulo: z.string(),
      descripcion: z.string(),
      miniatura: image(),
      /** Ruta interna (p. ej. /simulaciones/pluto-new-horizons/) o URL externa. */
      ruta: z.string(),
      autor: z.string().optional(),
      fecha: z.coerce.date().optional(),
    }),
});

/** Actividades y noticias: un archivo .md por entrada (blog). */
const actividades = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/actividades' }),
  schema: ({ image }) =>
    z.object({
      titulo: z.string(),
      fecha: z.coerce.date(),
      resumen: z.string(),
      imagen: image().optional(),
      creditoImagen: z.string().optional(),
      autor: z.string().optional(),
      historica: z.boolean().default(false),
    }),
});

/**
 * Blog histórico (2014–2026), recuperado del WordPress antiguo con
 * `_antigua-web`. Un archivo .md por entrada; el nombre del archivo es el
 * slug de la URL (/blog/<archivo>/).
 */
const blog = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      titulo: z.string(),
      fecha: z.coerce.date(),
      resumen: z.string(),
      categorias: z.array(z.string()).default([]),
      etiquetas: z.array(z.string()).default([]),
      imagen: image().optional(),
    }),
});

/** Páginas largas (asociación, fresnedilla, planetario): prosa en Markdown. */
const paginas = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/paginas' }),
  schema: z
    .object({
      titulo: z.string(),
      descripcion: z.string(),
    })
    .passthrough(),
});

export const collections = { eclipses, astrofotos, simulaciones, actividades, blog, paginas };
