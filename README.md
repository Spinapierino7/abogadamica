# Abogada Spina

Landing estática en Astro. Producción: https://abogadamica.vercel.app/.

Backlog y evidencias: [research/tickets/README.md](research/tickets/README.md). Los cambios actuales están en revisión local: sin commit, push ni nuevo despliegue.

## Desarrollo

En Windows PowerShell:

```powershell
npm.cmd install
npm.cmd run dev
```

Build: `npm.cmd run build`. Salida estática: `dist/`.

Verificación del build: `node research/verify-build.mjs`. Para un build con `VERCEL_ENV=preview`, agregar `--preview`. Resultados y pendientes: [informe de ejecución](research/EJECUCION.md).

Hosting: Vercel, preset Astro. Salida estática; no requiere adaptador de servidor.

Portada: `src/pages/index.astro`. Página de Familia: `src/pages/familia/index.astro`.

Datos compartidos: `src/data/site.ts`. Cabecera, pie y metadatos: `src/components/` y `src/layouts/SiteLayout.astro`.

Estilos: `src/styles/global.css`. Fotos: `src/assets/portada-estudio.jpg` y `src/assets/micaela-estudio.jpg`; Astro genera variantes WebP adaptables. Recursos originales en `misc/`.

Imagen social: `public/images/social-card.png` (1200×630); fuente editable vectorial `social-card.svg`.

## Vercel y SEO

Importar el repositorio en Vercel con preset Astro. `vercel.json` establece build y carpeta de salida. No necesita adaptador de servidor.

La configuración usa `https://abogadamica.vercel.app/` como respaldo de `SITE_URL`. Un build de producción genera canónicas, sitemap e indexación incluso si la variable está vacía. Al conectar dominio propio, cambiar `SITE_URL` por su URL HTTPS y reconstruir. Preview y el servidor de desarrollo conservan `noindex`.

Search Console admite `GOOGLE_SITE_VERIFICATION`; ver [guía de activación](research/SEARCH-CONSOLE.md). La propiedad todavía debe verificarse desde la cuenta y contra el sitio publicado.

La medición de contacto está preparada con eventos locales y un adaptador opcional de GA4 (`PUBLIC_GA_MEASUREMENT_ID`). Sin ID no se carga ningún proveedor de analítica. Ver [research/MEDICION.md](research/MEDICION.md) antes de activarlo. Los botones abren WhatsApp sin enviar automáticamente mensajes.

No se publican direcciones ni horarios por decisión del usuario. Se muestran ciudades y coordinación por WhatsApp; la ficha de Maps permanece enlazada. No se inventa ubicación física en datos estructurados.

El contenido general de Familia se apoya en fuentes oficiales argentinas; ver [research/FAMILIA-FUENTES.md](research/FAMILIA-FUENTES.md).

Referencia oficial de despliegue: https://docs.astro.build/en/guides/deploy/vercel/
