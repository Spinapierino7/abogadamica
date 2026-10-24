# Landing de Micaela Spina — relevamiento y plan

## Plan de mejoras — revisión del 23/10/2026

Plan dividido en **18 tickets**: [índice, prioridades y dependencias](tickets/README.md). Cada ticket incluye alcance y criterios de aceptación; el índice concentra el estado de ejecución. El texto de este documento conserva contexto, evidencia y decisiones de diseño.

Estado: implementación local autorizada posteriormente por el usuario. **Sin commit, push ni deploy**. El [informe de ejecución](EJECUCION.md) y los estados de los tickets reflejan los cambios y pendientes actuales. El relevamiento que sigue se conserva como evidencia histórica. Decisión nueva: no publicar dirección ni horarios; ampliar Familia con fuentes oficiales argentinas.

### Alcance de la revisión

- Código actual: `src/pages/index.astro`, `src/styles/global.css`, configuración de Astro, robots y sitemap.
- Producción comprobada mediante HTTP: https://abogadamica.vercel.app/.
- Sin navegador conectado: no se verificaron capturas, composición renderizada, Safari real ni métricas de rendimiento. Los problemas visuales indicados se basan en el código y en lo que reportó el usuario.
- El usuario confirmó que ya existe Perfil de Empresa en Google/Maps; Search Console todavía no está configurado.
- Ficha de Google facilitada por el usuario: https://share.google/PHx7IvdO8BE6o8ESR. La redirección identifica «Abogada Spina Micaela», con identificador Google `/g/11xfclv3hp`. No se pudieron leer directamente los detalles de la ficha; dirección, horarios y URL web vinculada siguen pendientes de verificación.
- Conservar identidad original: azul `#0a2846`, hueso `#ebe6dc`, arena `#beaa96`; composiciones cálidas y movimiento intermedio. Mejorar claridad y jerarquía.

### Hallazgos y prioridades

| Prioridad | Hallazgo comprobado | Acción propuesta | Criterio de finalización |
| --- | --- | --- | --- |
| P0 | Producción devuelve `noindex, nofollow`; robots contiene `Disallow: /`; sitemap no contiene URL; no se emite canónica | Completar la configuración de producción y comprobar el resultado publicado | Producción permite rastreo/indexación, tiene canónica y sitemap; previews siguen excluidos |
| P1 | En móvil la navegación se muestra en una segunda fila mediante `header nav { display: flex; order: 3 }` | Cabecera de una fila con logo/nombre y botón Menú | Navegación cerrada al entrar, accesible por toque y teclado |
| P1 | Portada con cuatro líneas forzadas de título, párrafo de presentación, ciudades, nota, eslogan y pista de scroll | Reducir y jerarquizar el contenido inicial | Se entiende quién atiende, qué ofrece, dónde y cómo consultar sin buscar el botón |
| P1 | La foto móvil tiene 420 px de alto | Probar un encuadre de aproximadamente 220–280 px y ubicarlo después del botón | El CTA queda visible antes del primer scroll en móviles representativos, sin texto minúsculo |
| P1 | `.about p` impone 17 px al rótulo Conoceme, por mayor especificidad que `.eyebrow` | Corregir jerarquía de estilos durante la revisión de tipografía | Rótulos, títulos, cuerpo y matrículas tienen tamaños coherentes |
| P1 | El CSS acumula ocho bloques de media queries y varias redefiniciones de los mismos componentes | Consolidar estilos después de acordar la propuesta visual | Una regla base clara por componente y cambios de breakpoint ordenados |
| P2 | Las áreas secundarias solo tienen nombre y todas abren el mismo mensaje de WhatsApp | Incorporar explicación breve y mensajes con área elegida | Se entiende el alcance de cada área antes de contactar |
| P2 | Datos estructurados LegalService básicos, sin enlaces de redes ni ubicación detallada | Completar identidad y atención local con datos confirmados | Datos visibles y estructurados coinciden; validación sin errores críticos |
| P2 | No hay medición de búsquedas ni clics de contacto | Search Console y eventos mínimos de contacto | Se pueden comparar consultas de búsqueda, páginas y clics sin registrar información de los casos |

### P0 — Indexación y configuración de producción

Respuesta observada el 23/10/2026:

```text
GET /              200; meta robots = noindex, nofollow
GET /robots.txt    200; User-agent: * / Disallow: /
GET /sitemap.xml   200; urlset vacío
Canónica y og:image: no emitidas en la portada
```

Este resultado es consistente con `SITE_URL` ausente en el build. La lógica actual depende de esa variable; desplegar por sí solo no activa la indexación.

Pasos propuestos:

1. Definir `SITE_URL=https://abogadamica.vercel.app/` en el entorno Production de Vercel y reconstruir. Un dominio propio puede incorporarse más adelante; no hace falta esperar a comprarlo.
2. Verificar HTML y cabeceras HTTP publicados: noindex de producción, robots, canónica absoluta, sitemap y metadatos sociales. Conservar noindex en Preview.
3. Configurar una propiedad de prefijo de URL en Search Console para la dirección de Vercel y verificarla con un método disponible, como etiqueta HTML. No intentar verificar todo `vercel.app` como dominio propio.
4. Enviar el sitemap e inspeccionar la portada. Medir indexación y errores; solicitar rastreo no garantiza aparición inmediata.
5. Al comprar dominio: elegir un host principal, redireccionar el anterior y actualizar SITE_URL, canónicas, sitemap, ficha de Google y perfiles sociales.

Fuente: [Google: control de indexación](https://developers.google.com/search/docs/crawling-indexing/block-indexing).

### P1 — Cabecera y primera pantalla móvil

Propuesta de cabecera móvil: una fila de aproximadamente 60–68 px, con marca a la izquierda y botón de tres líneas acompañado por «Menú» a la derecha. Es un objetivo visual a validar, no una altura rígida si el usuario aumenta el texto.

El botón abriría un desplegable de ancho completo bajo la cabecera, con Áreas de práctica, Sobre mí, Contacto y WhatsApp. Para esta landing alcanza con un panel corto. La cabecera puede ser sticky si no tapa contenido o foco; no agregar inicialmente ocultamiento automático al hacer scroll.

Comportamiento previsto: botón real, `aria-expanded`, asociación al panel, cierre al elegir un destino y con Escape, foco coherente y enlaces ocultos fuera de la tabulación cuando está cerrado. Mantener navegación utilizable si JavaScript falla. Usar navegación semántica; no aplicar `role="menu"` a enlaces comunes. En escritorio continuar mostrando enlaces y acción de contacto.

Fuente de interacción: [W3C: navegación desplegable](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation/).

La portada tiene que contar una sola idea y ofrecer una acción. Borrador para discutir:

```text
[Abogada Spina]                          [Menú]

Asesoramiento legal,
con una mirada cercana.

Derecho de Familia y otras áreas.
Atención en Bahía Blanca y Choele Choel.

[ Consultar por WhatsApp ]

[ foto del estudio, más compacta ]
```

- No reducir todo el texto para hacerlo entrar: acortar la redacción y quitar repeticiones de ubicación y acompañamiento.
- Mantener un solo H1 descriptivo y un único mensaje principal, con saltos naturales según el ancho. Evitar los `<br>` usados para fijar la portada de escritorio en móvil.
- Trasladar «Soy Mica…» a Sobre mí y la información detallada de modalidad/turnos a Atención. El eslogan sobre la foto y la indicación «Conocé cómo…» se pueden omitir en móvil.
- Mantener cuerpo de aproximadamente 16–18 px y botones de 16 px, con rótulos secundarios menores pero legibles. Los tamaños deben tolerar zoom y preferencias del usuario.
- Foto debajo de la acción en móvil; evaluar en navegador cuánto mostrar para insinuar la sección siguiente. No forzar la portada a `100vh` ni una altura exacta en todos los teléfonos.
- Probar un acceso persistente a WhatsApp solo si los clics o pruebas de uso lo justifican. Evitar sumar al mismo tiempo cabecera, botón flotante y barra inferior fija.

### P1 — Escritorio, tablet y accesibilidad

- Introducir un ancho máximo de contenido de referencia de 1200–1280 px en pantallas grandes, con márgenes fluidos. Revisar laptop de 1366 px y escritorio ancho de 1920 px.
- Definir una escala única de títulos, rótulos, cuerpo y datos profesionales. Mantener matrículas en lista y sin `nowrap` que fuerce desbordes.
- Revisar orden de imagen/texto en Sobre mí y sus proporciones en tablet. Evitar que textos largos formen columnas demasiado angostas.
- Ajustar espacios por sección y el ritmo de fondos; mantener Contacto antes de Preguntas frecuentes como eligió el usuario.
- Comprobar contraste de texto pequeño y texto sobre fotografías, foco visible, navegación por teclado y tamaño de toque. Adoptar 44×44 px como objetivo cómodo de los controles principales, sin presentarlo como mínimo universal de WCAG.
- Mantener SVG en controles, cierre y menú para evitar símbolos con aspecto distinto en iPhone. Respetar `prefers-reduced-motion`.
- Revisar Safari iOS con las barras del navegador desplegadas y contraídas, orientación horizontal, zoom de texto y áreas seguras si se agrega un control fijo.
- Matriz inicial: anchos 320, 360, 375/390, 430, 768, 1024, 1366 y 1920 px; incluir un iPhone real y un Android. Criterios: sin scroll horizontal, sin recortes, orden de foco lógico y contacto alcanzable.

Fuente: [W3C: tamaño de objetivos de interacción](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html).

### P2 — SEO local y contenido de servicios

- Revisar la ficha existente de Google/Maps: URL web, teléfono principal, categoría, modalidad, fotos y horarios confirmados. Comprobar a qué ciudad corresponde y si existen ubicaciones reales adicionales que cumplan los requisitos antes de proponer otra ficha.
- Usar la ficha compartida como destino de «Ver en Google Maps»; incorporar «Cómo llegar» una vez confirmada su dirección. Revisar que la ficha enlace a la URL principal de la web. No asumir que esta única ficha representa también la atención en la otra ciudad.
- Confirmar dirección de atención por ciudad y qué dato desea publicar Micaela. Ofrecer «Cómo llegar» con enlace a Maps; un mapa embebido puede cargarse al pedirlo.
- Nombre, teléfonos y direcciones coherentes entre web, ficha y redes. Mantener distinción entre teléfono principal de WhatsApp y alternativo de Río Negro.
- Mejorar el H1 y títulos por página. Priorizar Familia y las dos ciudades con redacción natural, sin repetir ubicaciones en cada párrafo.
- Empezar por una página de Familia con servicios efectivamente ofrecidos, proceso de consulta y preguntas propias del área, revisados por Micaela. Después ampliar áreas con demanda real. La portada quedaría como resumen.
- Evaluar páginas de atención por ciudad cuando existan datos y contenido útil propio: domicilio, coordinación y modalidad de cada lugar. Evitar páginas idénticas que solo cambien el nombre de la ciudad.
- Enlaces internos desde las áreas a esas páginas. Mientras no existan, clarificar que la acción abre WhatsApp y pasar el área como contexto en el mensaje.
- Completar LegalService e identidad profesional con logo, imagen, URL y `sameAs` de redes. Incorporar dirección y horarios solo cuando se confirmen. Validar propiedades y no confundir schema válido con elegibilidad para un resultado enriquecido: el formato LocalBusiness de Google requiere ubicación física.
- Crear una imagen social de formato adecuado para compartir la web por WhatsApp, con marca, nombre y ciudades; revisar el recorte real en las aplicaciones.
- Actualizar pie de página y documentación del proyecto, que todavía describen parte del sitio como si no estuviera publicado.

Fuentes: [Google: posicionamiento local](https://support.google.com/business/answer/7091?hl=es) y [Google: datos de negocios locales](https://developers.google.com/search/docs/appearance/structured-data/local-business).

### P2 — GEO: presencia en respuestas generadas por IA

Aquí GEO se refiere a motores generativos; el posicionamiento geográfico está en el bloque de SEO local.

La propuesta es hacer fácil identificar a Micaela, sus credenciales, los servicios y las ciudades, y publicar respuestas breves útiles que ella pueda validar. Es una estrategia de contenido e identidad; no garantiza menciones.

- Añadir autoría y fecha de revisión a futuras guías jurídicas; citar fuentes oficiales relevantes cuando el contenido trate normas o procedimientos. Mantener claras jurisdicción y vigencia.
- Redactar respuestas directas a consultas frecuentes reales: qué esperar de la primera consulta, cómo coordinar, modalidades y documentación inicial según el tema. Revisar antes de publicar cualquier detalle jurídico.
- Mostrar credenciales y formación con su denominación exacta: «Diplomada en Género, Igualdad y Derecho». Confirmar institución/año si se desea ampliar el perfil.
- Mantener esas respuestas en HTML accesible y enlazarlas desde el resto del sitio. No crear bloques de palabras clave ocultos.
- Revisar consistencia de identidad en Google/Maps, redes y referencias profesionales públicas legítimas.
- Google no exige un archivo especial de IA ni un schema exclusivo para sus respuestas generativas; `llms.txt` no es una prioridad para esta página. Las FAQ se mantienen por utilidad, sin prometer resultados enriquecidos: Google retiró su visualización de FAQ en mayo de 2026.
- Como medición complementaria, evaluar Bing Webmaster Tools y su informe de citas en experiencias compatibles. Distinguir citas, visitas y consultas; no son la misma medida.

Fuentes: [Google: funciones de IA y sitios web](https://developers.google.com/search/docs/appearance/ai-features), [Google: actualizaciones sobre FAQ y llms.txt](https://developers.google.com/search/updates) y [Bing: informe AI Performance](https://www.bing.com/webmasters/help/ai-performance-9f8e7d6c).

### P2 — Rendimiento y medición

- Medir PageSpeed Insights y, cuando haya datos suficientes, Core Web Vitals de usuarios reales. Objetivos al percentil 75: LCP ≤2,5 s, INP ≤200 ms y CLS ≤0,1; no están medidos todavía en esta revisión.
- Conservar Astro estático, imágenes adaptables y SVG. Revisar `sizes`: Sobre mí declara 88vw en móvil aunque su foto se limita a 280 px; corregir para no descargar variantes mayores de lo necesario.
- Revisar el inicio de animaciones: la clase de entrada se agrega al entrar en pantalla y puede hacer que contenido ya visible vuelva a aparecer desde baja opacidad. Evitar parpadeos o desplazamientos que distraigan al leer.
- Medir clics en WhatsApp, teléfono, correo y redes, con origen del botón (portada, área, contacto). No enviar texto de consultas ni datos de casos a la analítica.
- Registrar impresiones/clics de Search Console y consultas efectivas por separado: abrir WhatsApp no demuestra que se haya enviado un mensaje o reservado un turno.
- Tomar una línea de base y revisar tendencias tras varias semanas; en una página con poco tráfico no atribuir cada cambio a pequeñas variaciones.

Fuente: [web.dev: Core Web Vitals](https://web.dev/articles/vitals).

### Orden sugerido para implementar después de esta planificación

1. **Indexación:** SITE_URL y verificación pública; propiedad de Search Console.
2. **Una propuesta visual móvil completa:** cabecera con Menú, portada condensada y jerarquía de texto. Revisarla antes de añadir más efectos.
3. **Ajustes de escritorio/tablet y limpieza del CSS:** validar la matriz de tamaños, foco, zoom y recortes; comprobar métricas de carga.
4. **Confianza y SEO local:** revisar ficha de Maps, direcciones, datos estructurados e imagen para compartir.
5. **Contenido y GEO:** página de Familia, preguntas reales y autoría, luego ampliar según demanda y medición.
6. **Medición y mejora continua:** clics, consultas y búsquedas; decidir después sobre blog, formulario, turnero o acceso fijo a WhatsApp.

### Información todavía necesaria

- Enlace de Maps recibido: https://share.google/PHx7IvdO8BE6o8ESR. Falta verificar directamente ciudad, dirección y horarios de esa ficha.
- Domicilios/horarios de atención que pueden publicarse por ciudad.
- Servicios concretos prioritarios de Familia, validados por Micaela.
- Elección de dominio propio, cuando corresponda.
- Confirmación posterior de la nueva portada y del comportamiento del menú. El esquema de arriba es una propuesta, no un cambio aprobado o implementado.

---

## Registro histórico del plan inicial

Las secciones siguientes conservan el relevamiento y las propuestas anteriores. Hay pendientes que ya se resolvieron —matrículas, redes, fotos, favicon y publicación—; para el estado actual usar el plan de mejoras de arriba.

Fuente: https://abogadaspinamicaela.my.canva.site/
Fecha del relevamiento: 22 de octubre de 2026.
Estado: primera implementación local en Astro; publicación pendiente.

## Decisiones confirmadas por el usuario

Estas decisiones reemplazan las propuestas preliminares que contradigan más abajo.

- Marca formal: Abogada Spina. Trato informal: Abogada Mica Spina.
- Atención en Bahía Blanca, Buenos Aires, y Choele Choel, Río Negro. Matrículas en ambas provincias; falta el dato exacto de Río Negro.
- Mantener las cinco áreas; destacar Familia.
- Contacto principal: WhatsApp Business 2915351031. Mantener 2984737131 como contacto alternativo familiar para público de Río Negro; su disponibilidad como WhatsApp no está confirmada.
- Mantener abogadaspina@gmail.com. Instagram, Facebook y TikTok pendientes de enlaces actuales.
- Estética cálida y elegante con detalles modernos: conservar logo y colores, incorporar hueso y fondos difuminados. Evitar una sucesión de tarjetas cuadradas.
- Movimiento intermedio, trato cercano y profesional.
- Perfil confirmado: amplia experiencia en familia, penal, sucesiones, amparos y jubilaciones; diplomatura en género.
- Mensajes por WhatsApp orientados a coordinar turnos, con flexibilidad. No anunciar disponibilidad inmediata o permanente.
- Reservar preguntas frecuentes; primera propuesta con coordinación de turno, modalidad virtual y ciudades de atención.
- Mapa posible cuando se confirmen domicilios exactos. No inventar ubicación.
- Primera versión con contacto directo. Edición futura en código junto al usuario.
- Vercel como destino previsto, sin dominio propio todavía. No publicar mediante Sites.
- SEO desde el inicio; dominio, URL canónica, sitemap y medición se completan al definir despliegue.

## Implementación inicial

Actualización de recursos aportados el 23/10/2026: retrato de Micaela de `misc/mas fotos/` incorporado en «Sobre mí». Se usan los logos vectoriales originales azul `#0a2846` para cabecera, pie y favicon; versiones PNG originales para Apple y Open Graph. Paleta original: azul `#0a2846`, hueso `#ebe6dc`, arena `#beaa96`. Matrículas tomadas de `misc/matriculas.txt`: 6549 Colegio de Abogados Gral. Roca; T XXIII F 17 Colegio de Abogados B. Blanca; Federal T 54 F 918. El resto de imágenes de `misc/` queda como material de referencia.

Actualización 23/10/2026: primera landing compilada correctamente. Portada con imágenes WebP adaptables, navegación móvil, estilos separados, metadatos Open Graph, datos estructurados LegalService y configuración estática para Vercel. SITE_URL habilita canónica, sitemap e indexación; los previews permanecen con noindex. Ver README.md. Verificados enlaces internos, archivos referenciados, UTF-8 y JSON-LD sobre la salida compilada. Revisión visual pendiente: no hay navegador conectado en la sesión. No se ha publicado.

Astro estático con CSS propio y animaciones progresivas, sin añadir bibliotecas que esta primera composición no necesita. React, Tailwind o GSAP se incorporarán si la evolución del diseño los justifica. El contenido sigue visible sin JavaScript y respeta reducción de movimiento.

Pendiente antes de publicación definitiva: matrícula de Río Negro, domicilios, enlaces sociales, revisión de textos y preguntas frecuentes por la profesional, imágenes optimizadas y revisión visual en navegador y móvil. Las condiciones o aranceles de consulta no están confirmados y no se publican.

## Contenido recuperado

- Marca: Abogada Spina. Nombre: Spina Micaela.
- Matrícula tal como aparece: TXXIII F17 C.A.B.B.
- Áreas: Derecho de Familia, Derecho Penal, Sucesiones, Amparos, Jubilaciones.
- WhatsApp principal: https://wa.me/5492915351031 (291 535 1031).
- Segundo número mostrado: 2984 7371 31. Pendiente confirmar uso y vigencia.
- Correo: abogadaspina@gmail.com.
- Atención con turno previo.
- Virtual: «Coordinamos un horario y hacemos videollamada por WhatsApp».
- Presencial: «Coordinamos un honorario y te espero en la oficina». Confirmar si «honorario» debe decir «horario».
- Horarios flexibles: se ofrece coordinar fuera del horario de oficina por necesidades laborales o personales.
- Redes sociales: aparece «Micaela Spina (Abogada Spina)», sin enlace de perfil recuperado.
- No se recuperó domicilio, ciudad explícita, biografía ni horarios concretos. No inferirlos del prefijo telefónico o la matrícula.

## Archivos recuperados

En canva-assets/ se conservan 34 recursos y un manifest.json con las URL de procedencia: 6 JPG, 2 PNG de marca, 1 GIF, 9 SVG auxiliares, 8 fuentes y 8 CSS. La descarga informó cero fallos. Son las versiones servidas por el sitio publicado, no los originales editables de Canva.

| Archivo | Contenido identificado / dimensiones |
| --- | --- |
| 2ec990c9a5113397.jpg | Foto de oficina usada en portada, 1800 × 2400 |
| 3e48f3c12a892354.png | Logo beige con nombre, 450 × 800 |
| 8c014dff84716700.png | Logo circular azul con nombre, 800 × 800 |
| 471807cb2732649c.jpg | Fotografía, 2400 × 1800 |
| 49c2ad7401d20c09.jpg | Fotografía, 2400 × 1800 |
| aa425ed4bec26ad8.jpg | Fotografía, 742 × 799 |
| 7efb93ba1f992c4e.jpg | Fotografía, 600 × 800 |
| 200eb9d68162fe8c.jpg | Fotografía, 800 × 533 |
| ee039bd43f6f6ec4.gif | Animación, 652 × 727 |

Los SVG incluyen recortes y marca de Canva; no son versiones vectoriales del logo profesional. CSS y fuentes se guardan como referencia, no como dependencias de la nueva página. Usar fuentes con licencia web adecuada al implementar.

## Dirección propuesta

Estética editorial cálida: azul profundo, marfil y arena, con terracota para acciones. Mantener la identidad de la balanza y priorizar fotos reales. Tipografía serif en títulos y sans serif legible en textos. Espacio generoso y composición asimétrica en escritorio, lectura directa en móvil.

## Tecnología propuesta, pendiente elección

Base recomendada: Astro + TypeScript + Tailwind CSS, con salida estática. GSAP/ScrollTrigger para animaciones coordinadas. CSS para estados y transiciones simples. Astro admite componentes React interactivos cuando sean necesarios.

Alternativa si se priorizan componentes visuales React listos: React + Vite + Tailwind + Motion. No hace falta un servidor ni Next.js para el alcance actual. No mezclar GSAP y Motion sobre un mismo elemento.

Fuentes técnicas:
- https://docs.astro.build/en/concepts/why-astro/
- https://docs.astro.build/en/guides/framework-components/
- https://gsap.com/docs/v3/Plugins/ScrollTrigger/
- https://motion.dev/docs/react
- https://ui.aceternity.com/
- https://magicui.design/
- https://ui.shadcn.com/docs

## Estructura propuesta

1. Cabecera con logo, navegación y acción «Coordinar una consulta».
2. Portada con nombre, propuesta de atención, matrícula y foto real.
3. Áreas de práctica con explicaciones breves que deberá validar la profesional.
4. Presentación personal: requiere biografía real; omitir si no está disponible.
5. Atención virtual/presencial y coordinación de horarios.
6. Cómo consultar: contacto, coordinación del turno y consulta; validar el proceso.
7. Contacto: WhatsApp, teléfono y correo como enlaces funcionales. Redes cuando se confirme URL.

## Animaciones

Entrada escalonada del título y foto; aparición sutil de secciones; microinteracciones en botones y áreas; desplazamiento visual leve en fotografías solo en escritorio. Respetar prefers-reduced-motion, conservar scroll nativo y mantener contenido disponible si falla JavaScript.

## Plan de ejecución

1. Resolver teléfono secundario, domicilio/ciudad, redes y texto presencial. Elegir stack final.
2. Seleccionar fotos y preparar logo, recortes e imágenes WebP/AVIF sin modificar los archivos archivados.
3. Preparar propuesta de portada y sistema visual, con textos claramente diferenciados entre fuente y propuesta.
4. Implementar secciones adaptables a móvil y escritorio y enlaces de contacto.
5. Añadir movimiento progresivamente, revisar teclado, contraste y reducción de movimiento.
6. Configurar título real, descripción, imagen social, sitemap y datos estructurados basados solo en datos confirmados. El sitio actual conserva un título de plantilla inmobiliaria.
7. Verificar build, navegación, contactos, imágenes y desempeño en móvil. Objetivos: LCP ≤ 2,5 s y CLS ≤ 0,1; medir, no asumir.
8. Elegir hosting y dominio, publicar y verificar HTTPS y enlaces. No está incluido en esta fase de planificación.

Primera versión con contacto directo por WhatsApp y correo; formulario, turnero y blog se evalúan si hacen falta. No inventar testimonios, resultados, años de experiencia ni especializaciones.
