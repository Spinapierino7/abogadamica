# Medición — preparación de T15 y T16

## Estado

El sitio emite un evento local `contact-click`. No se transmiten eventos a un proveedor mientras `PUBLIC_GA_MEASUREMENT_ID` esté vacío. No existe aún una propiedad de analítica conectada ni historial para evaluar resultados.

## Datos de cada clic

- `channel`: whatsapp, phone, email, maps, tiktok, instagram o facebook.
- `placement`: ubicación del control, por ejemplo portada, cabecera, area-familia o contacto.
- `page`: inicio o familia.

No se envía texto del enlace, mensaje de WhatsApp, teléfono del visitante, correo del visitante, texto de formularios ni detalles del caso. El enlace sigue funcionando aunque la analítica falle. Abrir WhatsApp no prueba que se haya enviado un mensaje.

## Activación opcional de GA4

1. El usuario crea/elige una propiedad y flujo web en Google Analytics.
2. Revisar configuración de privacidad y desactivar medición mejorada no necesaria para este alcance. Preparar la información/controles de privacidad que correspondan antes de activarlo; por ahora no se carga el proveedor.
3. Introducir el ID `G-...` en `PUBLIC_GA_MEASUREMENT_ID` del entorno Production, reconstruir y publicar.
4. Comprobar una sola recepción por clic en tiempo real/DebugView. Preview no carga GA4; se respeta Do Not Track.
5. Conservar el evento local como punto de integración si se elige otro proveedor.

El código usa el evento `contact_click` y una visita explícita con URL sin query/hash. Fuentes técnicas: https://developers.google.com/tag-platform/gtagjs/configure y https://developers.google.com/tag-platform/gtagjs/reference/events.

## Primera revisión de resultados

Registrar durante varias semanas, con una muestra suficiente:

| Período | Impresiones/clics de Search Console | Clics de WhatsApp por origen | Consultas efectivas conocidas | Cambio realizado |
| --- | --- | --- | --- | --- |
| Pendiente de publicación y configuración | Sin acceso a datos | Sin proveedor activo | A completar por Micaela, de forma agregada | Nueva UX y contenido de Familia locales |

No se puede calcular conversión real con clics solamente. La ficha de Google debe actualizar su enlace desde Canva a la URL principal cuando se publique. Bing Webmaster Tools/AI Performance es una integración adicional pendiente de cuenta; no se confunden citas con visitas ni se extrapolan a todos los motores generativos.

Decisiones futuras: blog, turnero, formulario o acceso fijo a WhatsApp solo si los datos o la atención de Micaela lo justifican.
