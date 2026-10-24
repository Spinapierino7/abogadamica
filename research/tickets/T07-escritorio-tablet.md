# T07 — Ajustar composición en tablet y escritorio

- Prioridad: P1.
- Estado: Implementado localmente.
- Depende de: T04, T05 y T06.

## Trabajo

- Introducir un ancho máximo de referencia de 1200–1280 px con márgenes fluidos en pantallas grandes.
- Revisar columnas y proporción de imágenes en portada/Sobre mí y la disposición de modalidades/contactos.
- Ajustar el ritmo de espacios entre secciones y los cambios entre una y varias columnas.

## Criterios de aceptación

- [x] La página funciona a 768, 1024, 1366 y 1920 px de ancho sin columnas demasiado estrechas o dispersas.
- [x] Las imágenes mantienen un recorte útil y los textos no se superponen.
- [x] Contacto continúa antes de Preguntas frecuentes.
- [ ] Se revisan ambos lados de cada breakpoint para evitar saltos o controles apretados.

## Ejecución — 23/10/2026

Ancho máximo 1240 px, márgenes fluidos y ajuste de columnas. Revisados 768, 1024, 1366 y 1920 px sin desbordamiento. Contacto sigue antes de FAQ. Revisión de límites de breakpoint documentada en el informe de ejecución cuando está realizada.

Cambios locales, sin commit, push ni deploy. Evidencia y pendientes: [informe de ejecución](../EJECUCION.md).
