# T14 — Medir y mejorar rendimiento

- Prioridad: P2.
- Estado: Optimización local; mediciones públicas pendientes.
- Depende de: T05 y T07 para evaluar el diseño final.

## Trabajo

- Tomar una línea de base en PageSpeed Insights y revisar datos de usuarios reales cuando existan.
- Ajustar `sizes` de imágenes, especialmente Sobre mí, cuya declaración móvil actual supera el ancho visual de la foto.
- Mantener variantes adaptables, carga prioritaria de portada y carga diferida donde corresponda.
- Revisar animaciones de entrada para evitar que contenido ya visible vuelva a aparecer desde baja opacidad.

## Criterios de aceptación

- [ ] Se registran mediciones antes/después y el contexto de la prueba.
- [x] Se evita descargar imágenes significativamente mayores a su tamaño visual necesario.
- [x] Sin parpadeos, desplazamientos distractores ni contenido inaccesible sin animaciones.
- [ ] Se evalúan LCP ≤2,5 s, INP ≤200 ms y CLS ≤0,1 al percentil 75 cuando haya datos suficientes; pruebas de laboratorio no se etiquetan como métricas reales de usuarios.

## Ejecución — 23/10/2026

Corregidos sizes y variantes de Sobre mí (280/340/440 px), WebP generados por Astro y eliminación de apariciones por opacidad. PageSpeed API devolvió 429 por cuota agotada; sin línea base válida ni datos de campo. No se afirma que LCP/INP/CLS hayan aprobado.

Cambios locales, sin commit, push ni deploy. Evidencia y pendientes: [informe de ejecución](../EJECUCION.md).
