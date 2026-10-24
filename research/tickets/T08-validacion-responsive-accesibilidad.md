# T08 — Validar responsive y accesibilidad

- Prioridad: P1.
- Estado: Parcial; pendiente de dispositivos y zoom reales.
- Depende de: T04, T05, T06 y T07.

## Trabajo

- Revisar anchos 320, 360, 375/390, 430, 768, 1024, 1366 y 1920 px.
- Probar Safari en iPhone y un Android, orientación horizontal, zoom de texto y barras del navegador.
- Comprobar menú, foco, teclado, contraste, toque, anclas, contactos y movimiento reducido.
- Registrar evidencia y corregir los defectos concretos encontrados.

## Criterios de aceptación

- [x] Sin scroll horizontal, textos cortados ni controles ocultos en los escenarios revisados.
- [x] Menú y FAQ utilizables con teclado; foco visible y sin trampas.
- [ ] Texto e imágenes mantienen contraste suficiente; controles principales tienen un objetivo cómodo de toque.
- [ ] Zoom y `prefers-reduced-motion` no impiden consultar.
- [x] Se distinguen pruebas simuladas de pruebas reales; si falta un dispositivo, queda registrado como pendiente y no como aprobado.

## Ejecución — 23/10/2026

Portada en nueve tamaños y Familia en cuatro, sin scroll horizontal. Menú probado con Enter/Espacio/Escape y FAQ con Enter. Capturas y matriz en ../EJECUCION.md. Sin iPhone/Safari, Android, lector de pantalla ni ampliación real de texto disponibles: no se certifica accesibilidad completa. Movimiento reducido configurado por CSS; emulación pendiente.

Cambios locales, sin commit, push ni deploy. Evidencia y pendientes: [informe de ejecución](../EJECUCION.md).
