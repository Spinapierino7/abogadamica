# T10 — Completar identidad, datos estructurados e imagen social

- Prioridad: P2.
- Estado: Implementado localmente; vista compartida pendiente.
- Depende de: T01; T09 para añadir ubicación física.

## Trabajo

- Completar LegalService/identidad con URL, logo, imagen y `sameAs` de los perfiles confirmados.
- Incorporar ubicación/horarios únicamente cuando se verifiquen; distinguir schema válido de elegibilidad de Google.
- Preparar una imagen social legible con marca, nombre y ciudades; configurar sus metadatos.
- Actualizar README y referencias públicas que todavía describen el sitio como no publicado.

## Criterios de aceptación

- [ ] Los datos estructurados coinciden con el contenido visible y no tienen errores críticos de validación.
- [x] No se agregan valoraciones, horarios o ubicaciones inventados.
- [ ] El enlace compartido muestra título, descripción e imagen con recorte útil en las aplicaciones revisadas.
- [x] La documentación identifica URL de producción y archivos actuales.

## Ejecución — 23/10/2026

Layout compartido, LegalService/Person/WebSite/WebPage, sameAs, credenciales y tarjeta social SVG/PNG 1200x630. JSON parseado y rutas de imágenes verificadas. Sin dirección/horarios por instrucción del usuario. No se ejecutó un validador externo de schema ni prueba real de WhatsApp/Facebook: no se promete elegibilidad de resultados enriquecidos.

Cambios locales, sin commit, push ni deploy. Evidencia y pendientes: [informe de ejecución](../EJECUCION.md).
