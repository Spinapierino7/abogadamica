# T06 — Ordenar tipografía y consolidar CSS

- Prioridad: P1.
- Estado: Implementado localmente; validación ampliada en T08.
- Depende de: T03.
- Archivo principal: `src/styles/global.css`.

## Problema

Hay múltiples reglas repetidas y ocho bloques de media queries. `.about p` sobreescribe el tamaño previsto para el rótulo Conoceme.

## Trabajo

- Definir una escala de rótulos, títulos, cuerpo, controles y datos profesionales.
- Consolidar reglas por componente y ordenar los cambios de breakpoint.
- Corregir conflictos de especificidad, estilos obsoletos y medidas que generen cortes.

## Criterios de aceptación

- [x] Conoceme y otros rótulos tienen una jerarquía consistente.
- [x] Se conservan paleta, logos, matrículas en lista y redondeos acordados.
- [ ] Los textos toleran zoom y no provocan scroll horizontal.
- [ ] La revisión visual antes/después documenta que la limpieza no introdujo cambios involuntarios.

## Ejecución — 23/10/2026

CSS consolidado, escala tipográfica y especificidad de Conoceme corregidas. Matrículas en lista, colores y esquinas de Contacto preservados. Capturas del resultado en ../capturas/. No se dispone de capturas equivalentes previas para afirmar una comparación visual completa antes/después.

Cambios locales, sin commit, push ni deploy. Evidencia y pendientes: [informe de ejecución](../EJECUCION.md).
