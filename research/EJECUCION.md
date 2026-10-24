# Ejecución de tickets — 23/10/2026

Trabajo local autorizado por «hace todos los tickets que puedas, uno a uno». **Sin commit, push ni deploy.** El estado individual y los criterios que siguen abiertos están en [tickets](tickets/README.md).

## Resultado

- T01: configuración corregida y comprobada con builds Production/Preview. Falta publicar y verificar respuestas HTTP reales.
- T02: soporte de etiqueta y [guía de Search Console](SEARCH-CONSOLE.md), pendiente de la propiedad del usuario.
- T03–T07: cabecera móvil con Menú, portada breve, CTA temprano, foto de 240 px en móvil, tipografía y CSS consolidados, ancho máximo de 1240 px y ajustes de tablet/escritorio.
- T08: comprobación en navegador de escritorio con tamaños simulados y teclado; pendiente de dispositivos, ampliación y auditoría completa de accesibilidad.
- T09: ficha pública comprobada y enlace agregado. El usuario decidió **no publicar dirección ni horarios**, tampoco en schema. El enlace de Google todavía apunta a Canva; su actualización requiere la cuenta administradora.
- T10: layout, cabecera y pie compartidos; metadatos por página, identidad y credenciales estructuradas, tarjeta social 1200×630. Sin datos inventados ni garantía de resultados enriquecidos.
- T11: áreas explicadas brevemente y enlaces de WhatsApp contextualizados.
- T12–T13: página `/familia/`, seis temas generales argentinos, preguntas, coordinación y fuentes oficiales. [Fuentes y alcance](FAMILIA-FUENTES.md). La fecha indica consulta de fuentes; no se atribuye revisión jurídica a Micaela. Pendiente de su revisión editorial.
- T14: imágenes adaptables y `sizes` de Sobre mí corregidos; se eliminó la aparición por opacidad que podía ocultar contenido. PageSpeed API respondió 429 por cuota: no hay mediciones válidas antes/después ni certificación de Core Web Vitals.
- T15: eventos locales mínimos probados; proveedor opcional sin activar. [Guía de medición](MEDICION.md).
- T16: plantilla de seguimiento preparada; faltan publicación y datos reales.
- T17: evaluación terminada, páginas por ciudad aplazadas hasta contar con contenido propio diferente.
- T18: dominio pendiente de elección; configuración preparada, sin compra ni cambios DNS.

## Pruebas realizadas

`npm.cmd run build` y `node research/verify-build.mjs` pasan. También se compiló con `VERCEL_ENV=preview` y se comprobó con `node research/verify-build.mjs --preview`; al finalizar se restauró el build de Production.

La comprobación automatizada revisa: dos páginas, un H1 por página, canónicas correctas, robots según entorno, sitemap con ambas URL, JSON-LD parseable, imágenes referenciadas existentes y ausencia de dirección/horarios en el servicio. No reemplaza un validador completo de schema ni una comprobación HTTP tras publicar.

Navegador: Brave/Chromium de escritorio, viewport simulado. Todas las medidas siguientes son CSS px; el scrollbar ocupa 15 px en este entorno.

| Portada: viewport | Ancho útil / scrollWidth | Menú móvil | Borde inferior del CTA desde arriba |
| --- | --- | --- | --- |
| 320×740 | 305 / 305 | Sí | 412 |
| 360×800 | 345 / 345 | Sí | 375 |
| 375×812 | 360 / 360 | Sí | 349 |
| 390×844 | 375 / 375 | Sí | 352 |
| 430×932 | 415 / 415 | Sí | 315 |
| 768×1024 | 753 / 753 | No | 510 |
| 1024×768 | 1009 / 1009 | No | 549 |
| 1366×768 | 1351 / 1351 | No | 605 |
| 1920×1080 | 1905 / 1905 | No | 614 |

Familia: 320, 390, 768 y 1366 px, un H1 y sin desbordamiento horizontal. Revisados también los límites de navegación/tablet: 759, 760, 762, 959, 960 y 962 px observados, sin desbordamiento; Menú visible hasta 760.

Interacciones comprobadas:

- Menú abre/cierra con clic, Enter y Espacio; Escape cierra y devuelve el foco al botón.
- Seleccionar Sobre mí cierra el panel y lleva el foco a la sección; el panel oculto usa `hidden`.
- Preguntas de Familia despliegan con clic y Enter.
- La comprobación completa por Tab quedó interrumpida al desconectarse el navegador; sigue pendiente y no se presenta como aprobada.
- Clic en Maps abre la ficha correcta y emite un único evento local: `{"channel":"maps","placement":"contacto","page":"inicio"}`. No se envió ningún mensaje ni se modificó Google.
- Sin ID de GA4 no se carga su script externo. Consola sin avisos/errores en las revisiones efectuadas.

Capturas del resultado: [móvil](capturas/inicio-movil.jpg) y [escritorio](capturas/inicio-desktop.jpg). Son vistas simuladas, no capturas de iPhone.

## Pendientes para cerrar la etapa

1. Revisar el texto y diseño local, especialmente el contenido de Familia con Micaela.
2. Probar iPhone/Safari y Android reales, zoom de texto, lector de pantalla, movimiento reducido y contraste de todos los estados. No se da por aprobado lo que no se probó.
3. Cuando se autorice publicar, configurar las variables necesarias y comprobar HTML/cabeceras, robots, sitemap, canónicas y vista social públicos.
4. Verificar Search Console con la cuenta correcta y enviar el sitemap; actualizar la URL de Google/Maps.
5. Elegir/activar medición si se desea; revisar recepción real y privacidad antes de activar GA4. Registrar línea base de rendimiento y de búsquedas.
6. Revisar datos tras varias semanas; dominio propio y contenido por ciudad quedan condicionados a una decisión o información nueva.

Los originales de `misc/` se conservaron. No se incorporaron dependencias nuevas. Para revisar: `npm.cmd run dev`.
