# T05 — Simplificar la primera pantalla móvil

- Prioridad: P1.
- Estado: Implementado localmente; zoom pendiente en T08.
- Depende de: T03.
- Archivos orientativos: bloque hero y estilos de portada.

## Trabajo

- Aplicar la redacción acordada y quitar saltos de línea rígidos que dificulten el ajuste móvil.
- Mantener una sola acción principal, con ubicación y áreas resumidas.
- Trasladar presentación y detalles de turnos a sus secciones; omitir en móvil mensajes decorativos repetidos.
- Colocar la foto después del CTA y probar una altura aproximada de 220–280 px, preservando un recorte útil.

## Criterios de aceptación

- [x] Hay un único H1 y el CTA puede verse sin buscarlo con scroll en tamaños móviles de referencia.
- [x] Cuerpo y botones siguen siendo legibles, sin encogerlos para hacer entrar todo.
- [ ] No aparecen recortes ni saltos incómodos al ampliar texto.
- [x] Escritorio conserva una composición equilibrada y la foto elegida por el usuario.

## Ejecución — 23/10/2026

H1 sin br rígidos, resumen de ciudades/área, CTA antes de la foto y decoraciones omitidas en móvil. Foto elegida conservada. La prueba de ampliación real de texto no se dio por aprobada.

Cambios locales, sin commit, push ni deploy. Evidencia y pendientes: [informe de ejecución](../EJECUCION.md).
