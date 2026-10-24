# Tickets de mejora — Abogada Spina

Fecha: 23/10/2026. Origen: [plan de mejoras](../PLAN.md).

La implementación fue autorizada después de la planificación. Se trabajó en los 18 tickets hasta donde permitían los datos y accesos disponibles. Son cambios locales: **sin commit, push ni deploy**. Ver [informe de ejecución y pruebas](../EJECUCION.md). Los criterios externos pendientes no se consideran completados.

## Prioridades y estados

- **P0:** impedimento técnico de indexación que debe resolverse primero.
- **P1:** mejoras principales de móvil, legibilidad y navegación.
- **P2:** contenido, SEO local/GEO, rendimiento y medición.
- **P3:** mejoras condicionadas a datos, demanda o decisiones posteriores.
- **Implementado localmente:** código disponible para revisar; no equivale a publicado ni a validación profesional del contenido.
- **Preparado/parcial:** parte resuelta; el estado y la nota del ticket identifican cuenta, datos o prueba faltantes.
- **Evaluado:** decisión documentada, aunque la decisión sea aplazar una página nueva.
- **Condicional:** evaluar antes de implementar, sin considerarlo obligatorio para terminar la landing.

Las dependencias indican trabajo que debe estar resuelto antes de cerrar el ticket. Las prioridades no obligan a esperar cuando los trabajos son independientes.

## Backlog

| ID | Ticket | Prioridad | Estado | Depende de |
| --- | --- | --- | --- | --- |
| [T01](T01-indexacion-produccion.md) | Habilitar indexación y URL principal de producción | P0 | Implementado localmente; pendiente de publicación | — |
| [T02](T02-search-console.md) | Configurar Google Search Console | P1 | Preparado; pendiente de cuenta y publicación | T01 |
| [T03](T03-propuesta-visual-movil.md) | Definir portada y cabecera móvil compactas | P1 | Implementado localmente | — |
| [T04](T04-menu-movil.md) | Implementar navegación móvil desplegable | P1 | Implementado y probado localmente | T03 |
| [T05](T05-portada-movil.md) | Simplificar la primera pantalla móvil | P1 | Implementado localmente; zoom pendiente en T08 | T03 |
| [T06](T06-tipografia-css.md) | Ordenar tipografía y consolidar CSS | P1 | Implementado localmente; validación ampliada en T08 | T03 |
| [T07](T07-escritorio-tablet.md) | Ajustar composición en tablet y escritorio | P1 | Implementado localmente | T04, T05, T06 |
| [T08](T08-validacion-responsive-accesibilidad.md) | Validar experiencia responsive y accesibilidad | P1 | Parcial; pendiente de dispositivos y zoom reales | T04, T05, T06, T07 |
| [T09](T09-maps-atencion-local.md) | Verificar ficha de Maps y atención por ciudad | P2 | Sitio ajustado; pendiente de actualizar Google | — |
| [T10](T10-identidad-metadatos.md) | Completar identidad, datos estructurados e imagen social | P2 | Implementado localmente; vista compartida pendiente | T01; T09 para ubicación |
| [T11](T11-areas-consultas.md) | Explicar áreas y contextualizar consultas por WhatsApp | P2 | Implementado localmente; revisión profesional pendiente | — |
| [T12](T12-pagina-familia.md) | Crear página de Derecho de Familia | P2 | Implementado localmente; revisión profesional pendiente | T11 |
| [T13](T13-contenido-geo.md) | Preparar contenido verificable y respuestas para GEO | P2 | Implementado localmente; revisión profesional pendiente | — |
| [T14](T14-rendimiento.md) | Medir y mejorar imágenes, carga y animaciones | P2 | Optimización local; mediciones públicas pendientes | T05, T07 |
| [T15](T15-medicion-contacto.md) | Medir clics de contacto sin datos de los casos | P2 | Eventos preparados y probados; proveedor pendiente | T01 |
| [T16](T16-seguimiento-seo-geo.md) | Revisar resultados de SEO, consultas y citas de IA | P2 | Preparado; pendiente de publicación y datos | T02, T15 |
| [T17](T17-paginas-por-ciudad.md) | Evaluar páginas de atención por ciudad | P3 | Evaluado; páginas aplazadas | T09, T11 |
| [T18](T18-dominio-propio.md) | Incorporar dominio propio y migrar referencias | P3 | Condicional; pendiente de dominio elegido | T01 |

## Orden de trabajo recomendado

1. T01 y preparación visual T03. Configurar T02 cuando producción sea rastreable.
2. T04, T05 y T06, trabajando sobre la misma propuesta visual para evitar cambios aislados que se contradigan.
3. T07 y T08 antes de dar por terminada la nueva experiencia móvil; T14 antes del cierre de la revisión de rendimiento.
4. T09, T10, T11 y T15. Parte del trabajo puede avanzar mientras se confirman datos.
5. T12, T13 y T16. Publicar contenido progresivamente y observar resultados.
6. T17 y T18 solo cuando se cumplan sus condiciones.

## Criterios comunes

- Identidad: azul `#0a2846`, hueso `#ebe6dc`, arena `#beaa96`, logos originales y trato cercano profesional.
- Mantener las matrículas en lista, su denominación y la formación «Diplomada en Género, Igualdad y Derecho».
- Contacto antes de Preguntas frecuentes, como eligió el usuario. El número principal es WhatsApp Business 2915351031.
- No inventar direcciones, horarios, servicios específicos, testimonios ni resultados.
- Para cambios de código: compilación y comprobaciones adecuadas a su alcance; registrar qué se verificó y qué quedó pendiente.
- Para cambios visuales: comprobarlos en navegador y diferenciar simulación de prueba en dispositivo real. Una compilación exitosa no confirma la composición visual.
- Cuando un ticket requiera publicar o configurar una cuenta externa, comprobar el resultado real antes de marcarlo terminado. No marcar una tarea de SEO completada solo por hacer push.
- Actualizar el estado en este índice y en el archivo del ticket cuando se trabaje sobre él.
- Blog, formulario, turnero y controles flotantes quedan para evaluar con necesidades o medición; no se agregan automáticamente a esta etapa.

## Referencias de partida

- Web: https://abogadamica.vercel.app/.
- Ficha de Maps recibida: https://share.google/PHx7IvdO8BE6o8ESR.
- La revisión inicial encontró `noindex`, bloqueo en robots y sitemap vacío. Revalidar al iniciar T01, porque producción puede haber cambiado.
- Ficha de Maps verificada: todavía enlaza a Canva. El usuario pidió no publicar dirección ni horarios. Search Console sigue pendiente.
