# T15 — Medir clics de contacto

- Prioridad: P2.
- Estado: Eventos preparados y probados; proveedor pendiente.
- Depende de: T01 para la puesta en producción de la medición.
- Requiere: elegir herramienta y disponer de la cuenta/identificador necesarios.

## Trabajo

- Definir eventos de WhatsApp, teléfono, correo y redes, con ubicación del botón como contexto.
- Configurar una medición mínima y comprobarla en el sitio publicado.
- Separar los clics medidos de mensajes enviados y turnos efectivamente coordinados.

## Criterios de aceptación

- [ ] Los eventos llegan una sola vez por acción y permiten distinguir origen/canal.
- [x] No se registra texto del mensaje, detalle del caso ni información personal de las consultas.
- [x] La medición no interrumpe el enlace de contacto ni degrada la carga.
- [x] Queda documentado qué mide y qué no puede inferirse de ella.

## Ejecución — 23/10/2026

Evento local contact-click, solo canal/posición/página permitidos. Un clic real en Maps produjo un único evento sin URL ni mensaje. GA4 opcional, desactivado sin ID y en Preview/desarrollo; no se cargó analítica externa en la prueba. Falta elegir/activar cuenta e inspeccionar recepción publicada. Guía: ../MEDICION.md.

Cambios locales, sin commit, push ni deploy. Evidencia y pendientes: [informe de ejecución](../EJECUCION.md).
