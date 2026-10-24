# T01 — Habilitar indexación de producción

- Prioridad: P0.
- Estado: Implementado localmente; pendiente de publicación.
- Depende de: ninguna.
- Requiere: acceso a configuración de Vercel para completar y verificar el despliegue.

## Problema

En la revisión del 23/10/2026, producción tenía `noindex, nofollow`, `Disallow: /`, sitemap vacío y ninguna canónica. La lógica depende de `SITE_URL`.

## Trabajo

- Revalidar esas respuestas y establecer `SITE_URL=https://abogadamica.vercel.app/` en Production.
- Reconstruir y comprobar HTML, cabeceras, robots, sitemap, URL canónica y referencias sociales absolutas.
- Conservar la exclusión de indexación en Preview y documentar la configuración en README.

## Criterios de aceptación

- [ ] Producción responde correctamente, sin una directiva que prohíba indexarla o rastrearla.
- [ ] La canónica apunta a la URL principal y el sitemap contiene la portada publicada.
- [x] Las URL de metadatos son absolutas y correctas.
- [ ] Preview conserva `noindex` y se registra la verificación pública.

Habilitar indexación no implica que Google ya haya indexado la página. Referencias y evidencia: [plan](../PLAN.md).

## Ejecución — 23/10/2026

URL pública por defecto y SITE_URL configurable. Builds Production y Preview verificados: index/follow frente a noindex/nofollow, robots, canónicas y sitemap de dos páginas. Falta desplegar y revisar cabeceras/HTML públicos; no se afirma indexación efectiva.

Cambios locales, sin commit, push ni deploy. Evidencia y pendientes: [informe de ejecución](../EJECUCION.md).
