# T09 — Verificar Maps y atención por ciudad

- Prioridad: P2.
- Estado: Sitio ajustado; pendiente de actualizar Google.
- Depende de: ninguna.
- Datos necesarios: ciudad/dirección/horarios de la ficha, datos de atención publicables por ciudad y acceso para actualizar la ficha si corresponde.

## Trabajo

- Verificar la ficha aportada: https://share.google/PHx7IvdO8BE6o8ESR.
- Revisar URL web, categoría, nombre, teléfono y fotos; comparar con la landing.
- Distinguir Bahía Blanca y Choele Choel, sin asumir que una ficha representa ambas ubicaciones.
- Incorporar «Ver en Google Maps» y «Cómo llegar» cuando corresponda. Evaluar mapa bajo demanda.

## Criterios de aceptación

- [x] Se omiten dirección y horarios en la web y sus datos estructurados, por decisión expresa del usuario.
- [ ] El sitio y Google/Maps enlazan a los destinos correctos.
- [x] WhatsApp principal y teléfono alternativo quedan identificados sin confusión.
- [x] Una eventual segunda ficha se evalúa por ubicación real y requisitos de Google, sin duplicarla automáticamente.

## Ejecución — 23/10/2026

Ficha pública verificada en navegador: todavía enlaza a Canva. Por instrucción expresa del usuario, NO se publican dirección ni horarios en el sitio o schema; el criterio de dirección queda sustituido por esta decisión. Agregado enlace a la ficha, sin iframe ni Cómo llegar a una dirección fija. Falta cambiar la URL de la ficha desde la cuenta administradora correcta.

Cambios locales, sin commit, push ni deploy. Evidencia y pendientes: [informe de ejecución](../EJECUCION.md).
