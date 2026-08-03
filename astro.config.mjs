// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
//
// Despliegue: GitHub Pages del repositorio biodavidjm/aa-quarks, servido en el
// dominio propio https://www.aaquarks.com (configurado en Settings → Pages del
// repo; los DNS los gestiona la asociación en el panel Plesk de su proveedor).
// La URL antigua https://biodavidjm.github.io/aa-quarks/ redirige sola.
export default defineConfig({
  site: 'https://www.aaquarks.com',
  base: '/',

  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});
