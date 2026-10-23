# Abogada Spina

Primera landing local en Astro. Decisiones y pendientes en research/PLAN.md.

## Desarrollo

En Windows PowerShell:

```powershell
npm.cmd install
npm.cmd run dev
```

Build: `npm.cmd run build`. Salida estática: `dist/`.

Destino previsto: Vercel, preset Astro. No se realizó un despliegue.

Textos y enlaces: `src/pages/index.astro`. Imágenes: `public/images/`.

Estilos: `src/styles/global.css`. Foto de portada: `src/assets/estudio.jpg`; Astro genera variantes WebP según el ancho de pantalla.

## Vercel y SEO

Importar el repositorio en Vercel con preset Astro. `vercel.json` establece build y carpeta de salida. No necesita adaptador de servidor.

Configurar la variable `SITE_URL` con la URL HTTPS definitiva (puede ser el dominio de producción de Vercel) y volver a desplegar. Esa variable activa URL canónica, sitemap, enlaces sociales absolutos e indexación. Sin ella el sitio se genera con `noindex`; los despliegues Preview de Vercel también conservan `noindex`.

No hay formulario ni analítica: los botones abren WhatsApp sin enviar automáticamente mensajes. Los datos que faltan se documentan en el plan.

Referencia oficial de despliegue: https://docs.astro.build/en/guides/deploy/vercel/
