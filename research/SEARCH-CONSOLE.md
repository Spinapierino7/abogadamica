# Activación de Search Console

Preparación local de T02; propiedad aún sin verificar.

1. En Search Console, iniciar sesión con la cuenta que administrará el sitio.
2. Añadir una propiedad de **prefijo de URL**: `https://abogadamica.vercel.app/`.
3. Elegir el método «Etiqueta HTML» y copiar únicamente el valor de `content`.
4. Guardarlo en `GOOGLE_SITE_VERIFICATION` en el entorno Production de Vercel. El proyecto ya admite esta variable. Para probarlo localmente, usar `.env`.
5. Publicar el build y comprobar que la etiqueta aparece en el HTML de producción. Esta sesión mantiene la indicación de no hacer commit/push.
6. Volver a Search Console y verificar; enviar `https://abogadamica.vercel.app/sitemap.xml`.
7. Inspeccionar la portada y registrar su estado; si está pendiente de indexación, no presentarlo como fallo del build.

Al añadir un dominio propio, crear/verificar la propiedad correspondiente y seguir T18. No se puede verificar todo `vercel.app` como dominio propio.
