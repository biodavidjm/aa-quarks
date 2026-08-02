// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
//
// Despliegue actual: GitHub Pages del repositorio biodavidjm/aa-quarks
//   → https://biodavidjm.github.io/aa-quarks/
//
// TODO (dominio propio): cuando la asociación apunte aaquarks.com a GitHub Pages,
//   1. Cambiar `site` a 'https://www.aaquarks.com' y `base` a '/'.
//   2. Crear el archivo `public/CNAME` con una sola línea: www.aaquarks.com
//   3. Configurar los DNS del dominio (ver README.md, sección «Dominio propio»).
export default defineConfig({
  site: 'https://biodavidjm.github.io',
  base: '/aa-quarks',

  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});
