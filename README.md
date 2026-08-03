# Web de la Asociación Astronómica Quarks

Web oficial de la **Asociación Astronómica Quarks** de Úbeda (Jaén).

- **Web publicada:** <https://www.aaquarks.com>
- Hecha con [Astro](https://astro.build) y Tailwind CSS. Sitio 100 % estático: no hay
  servidores que mantener ni nada que pagar.
- El contenido de la antigua web (iWeb, 2009–2015) está recuperado: los textos en
  `_antigua-web/textos/` y más de 750 fotografías catalogadas en
  `_antigua-web/INVENTARIO.md`.

Esta guía está pensada para socios **sin conocimientos técnicos**. Para editar la web
solo hace falta una cuenta de GitHub con permiso en este repositorio: todo se puede
hacer desde el navegador.

---

## Cómo editar la web (sin instalar nada)

La regla de oro: **todo el contenido vive en la carpeta [`src/content/`](src/content/)**
como archivos de texto. Al guardar un cambio en la rama `main`, la web se reconstruye
y publica sola en 2–3 minutos (pestaña *Actions* para ver el progreso).

### Publicar una noticia o actividad

1. Entra en [`src/content/actividades/`](src/content/actividades/) y pulsa
   **Add file → Create new file**.
2. Nombra el archivo con algo descriptivo terminado en `.md`, por ejemplo
   `observacion-perseidas-2026.md`.
3. Pega esta plantilla y rellénala:

   ```markdown
   ---
   titulo: Observación de las Perseidas 2026
   fecha: 2026-08-10
   resumen: Quedada en el mirador para ver la lluvia de estrellas. Abierta a todo el mundo.
   ---

   Aquí va el texto de la noticia, en párrafos normales.
   ```

4. Pulsa **Commit changes**. Listo.

Para añadir una foto a la noticia: súbela antes a `src/assets/actividades/` (botón
**Add file → Upload files**) y añade en la cabecera:

```markdown
imagen: ../../assets/actividades/nombre-de-tu-foto.jpg
creditoImagen: Breve pie de foto, con el autor
```

### Añadir una astrofotografía a la galería

1. Sube la imagen (JPG) a [`src/assets/astrofotografia/`](src/assets/astrofotografia/).
2. Crea un archivo en [`src/content/astrofotos/`](src/content/astrofotos/), por
   ejemplo `maria-lopez-nebulosa-del-anillo.md`:

   ```markdown
   ---
   titulo: "Nebulosa del Anillo (M57)"
   autor: "María López"
   imagen: "../../assets/astrofotografia/maria-lopez-m57.jpg"
   categoria: "cielo-profundo"
   equipo: "Newton 200/1000 + cámara ZWO ASI533"
   fecha: "12/07/2026"
   ---
   ```

   Categorías admitidas: `cielo-profundo`, `sistema-solar`, `cometas`, `sol`,
   `dibujos`, `paisajes`. La web redimensiona y optimiza la imagen sola.

### Añadir una simulación

1. Sube la simulación (una carpeta con su `index.html`) a `public/simulaciones/`,
   p. ej. `public/simulaciones/fases-de-la-luna/index.html`.
2. Sube una captura de pantalla a `src/assets/simulaciones/`.
3. Crea su ficha en [`src/content/simulaciones/`](src/content/simulaciones/):

   ```markdown
   ---
   titulo: Fases de la Luna
   descripcion: Por qué vemos la Luna cambiar de forma a lo largo del mes.
   miniatura: ../../assets/simulaciones/fases-de-la-luna.png
   ruta: /simulaciones/fases-de-la-luna/
   fecha: 2026-09-01
   ---
   ```

### Actualizar los datos del eclipse (o añadir los de 2027 y 2028)

Los datos de cada eclipse viven en [`src/content/eclipses/`](src/content/eclipses/)
(uno por archivo: `2026.md`, y en el futuro `2027.md`, `2028.md`). Horarios, enlaces,
tiendas y libros se editan ahí; la página se monta sola con el mismo diseño. Cada
archivo nuevo aparece automáticamente en `…/eclipses/<nombre-del-archivo>/`.

### Textos de las páginas fijas

Los textos largos de **La Asociación**, **La Fresnedilla** y el **Planetario** están
en [`src/content/paginas/`](src/content/paginas/). Las listas (equipamiento, tarifas,
programas…) van en la cabecera del archivo; la prosa, debajo.

Otros datos generales (correo, redes sociales, menú) están en
[`src/consts.ts`](src/consts.ts).

---

## Activar GitHub Pages (solo la primera vez)

1. En GitHub: **Settings → Pages**.
2. En *Build and deployment* → *Source*, elige **GitHub Actions**.
3. Sube cualquier cambio a `main` (o lanza el flujo desde *Actions → Desplegar en
   GitHub Pages → Run workflow*). En unos minutos la web estará en
   <https://www.aaquarks.com>.

## Dominio propio (aaquarks.com) — ya configurado

El dominio quedó conectado en agosto de 2026. Por si hubiera que rehacerlo:

1. En [`astro.config.mjs`](astro.config.mjs): `site` es
   `'https://www.aaquarks.com'` y `base` es `'/'`.
2. En GitHub, **Settings → Pages → Custom domain**: `www.aaquarks.com`, con
   *Enforce HTTPS* activado.
3. En el panel DNS del proveedor (Plesk de ISP Gestión):
   - `www` → registro **CNAME** apuntando a `biodavidjm.github.io`
   - dominio raíz (`aaquarks.com`) → registros **A** a las IP oficiales de GitHub
     Pages: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`,
     `185.199.111.153`
   ([documentación oficial](https://docs.github.com/es/pages/configuring-a-custom-domain-for-your-github-pages-site)).
   El resto de registros (MX, `mail`, `webmail`, SPF, DMARC, NS…) **no se tocan**:
   el correo `@aaquarks.com` y el propio DNS siguen dependiendo del servidor del
   proveedor, así que ese contrato hay que mantenerlo.

## Para desarrolladores

```bash
npm install       # instalar dependencias (Node 22 o superior)
npm run dev       # servidor local en http://localhost:4321/
npm run build     # compilar la web en dist/
npm run preview   # previsualizar la compilación
```

- `src/pages/` — una página por ruta (Astro).
- `src/components/`, `src/layouts/` — piezas de diseño (no hay textos dentro).
- `src/styles/global.css` — tema (colores, tipografías, cielo estrellado CSS).
- `src/content.config.ts` — esquemas de las colecciones de contenido.
- `.github/workflows/deploy.yml` — despliegue automático a Pages.
- `_antigua-web/` — inventario y textos recuperados de la web antigua (el espejo
  crudo de 77 MB solo existe en local; ver `.gitignore`).

## Licencia y créditos

Los contenidos (textos y fotografías) son de la Asociación Astronómica Quarks y de
sus autores, bajo licencia
[CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/deed.es), igual
que la web original. Las astrofotografías conservan el crédito de su autor; por
favor, mantenlo siempre.
