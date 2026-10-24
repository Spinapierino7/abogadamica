# T04 — Implementar navegación móvil desplegable

- Prioridad: P1.
- Estado: Implementado y probado localmente.
- Depende de: T03.
- Archivos orientativos: cabecera en `src/pages/index.astro` y sus estilos/componentes.

## Trabajo

- Sustituir la segunda fila móvil por un botón de tres líneas y texto «Menú».
- Mostrar Áreas, Sobre mí, Contacto y WhatsApp en un panel corto.
- Implementar botón real, estado expandido, cierre por Escape y selección, y manejo coherente del foco.
- Conservar navegación utilizable sin JavaScript y enlaces visibles en escritorio. Evaluar sticky solo si no tapa contenido.

## Criterios de aceptación

- [x] La cabecera cerrada ocupa una fila y el panel no aparece abierto al cargar con JavaScript disponible.
- [ ] Botón y enlaces funcionan con toque, Enter, Espacio y navegación por Tab.
- [x] Los enlaces ocultos no reciben foco; Escape permite volver al botón.
- [x] Las anclas no quedan tapadas; controles usan SVG y objetivos de toque cómodos.
- [x] No se usa `role="menu"` para la navegación común.

## Ejecución — 23/10/2026

Nuevo Header compartido. Probados apertura, Enter, Espacio, Escape, devolución del foco y selección de ancla. Ocultamiento nativo hidden; navegación sin role menu y alternativa visible sin JS por diseño progresivo. La comprobación final completa por Tab quedó interrumpida al desconectarse el navegador; no se marca ese criterio aprobado. Las pruebas en dispositivos reales siguen en T08.

Cambios locales, sin commit, push ni deploy. Evidencia y pendientes: [informe de ejecución](../EJECUCION.md).
