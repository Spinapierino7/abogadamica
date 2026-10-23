# Landing de Micaela Spina — relevamiento y plan

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
