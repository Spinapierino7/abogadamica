# T18 — Incorporar dominio propio

- Prioridad: P3.
- Estado: Condicional; pendiente de dominio elegido.
- Depende de: T01.
- Condición: usuario elige y dispone del dominio y acceso a DNS/Vercel.

## Trabajo

- Definir host principal, conectar DNS y comprobar HTTPS.
- Actualizar SITE_URL, canónicas, sitemap y metadatos.
- Redireccionar los hosts anteriores hacia el principal y actualizar referencias de Google/Maps y redes.
- Ajustar la propiedad de Search Console y documentar la migración.

## Criterios de aceptación

- [ ] El dominio principal sirve la web con HTTPS.
- [ ] Hosts alternativos redireccionan de manera consistente y sin bucles.
- [ ] Producción sigue siendo indexable y todas las referencias técnicas apuntan al nuevo dominio.
- [ ] Ficha, perfiles y Search Console quedan actualizados o con su pendiente específico documentado.

Este ticket no autoriza comprar un dominio ni asumir un costo. La indexación en Vercel no necesita esperar a esta etapa.

## Ejecución — 23/10/2026

SITE_URL y guía de migración preparados. No se eligió ni compró dominio, ni se tocaron DNS o hosts. Mantener la URL de Vercel hasta que el usuario decida.

Cambios locales, sin commit, push ni deploy. Evidencia y pendientes: [informe de ejecución](../EJECUCION.md).
