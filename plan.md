# Plan de implementación — Hotel Tegucigalpa

## Dirección visual

- **Movimiento:** lujo colonial contemporáneo: arquitectura cálida, editorial y serena, con contraste entre crema mineral, negro profundo, turquesa de papel tapiz y detalles dorados.
- **Principios:** hospitalidad antes que ornamento; lectura clara en móvil; fotografía como protagonista; conversiones directas y visibles sin perder sofisticación.
- **Filosofía de color:** el crema deja respirar la experiencia, el negro ancla la confianza, el turquesa concentra las acciones de reserva y el dorado funciona como hilo de lujo en bordes, estrellas y acentos.
- **Paradigma de layout:** composición editorial asimétrica con bloques de imagen superpuestos, una columna de narrativa y módulos tipo bento para que la página se sienta como un recorrido por el hotel.
- **Elementos firma:** regla dorada de sección, monograma “HT” y tarjetas fotográficas con esquinas suaves y etiquetas en cápsula.
- **Interacción:** cada acción debe sentirse como una invitación: hover con zoom corto y glow dorado, tabs de habitaciones con desplazamiento horizontal y lightbox centrado con fondo desenfocado.
- **Animación:** reveal de 30px a 0 y opacidad 0 a 1 en 0.6s easeOut; hero cross-fade de 1.2s; navegación que transiciona de transparente a negro translúcido al hacer scroll.
- **Tipografía:** Cormorant Garamond para titulares expresivos y Plus Jakarta Sans para cuerpo, etiquetas, botones y navegación.
- **Esencia de marca:** “Una pausa de confort en el corazón de La Entrada, Copán, con atención cercana y reserva directa.” Personalidad: cálida, refinada, confiable.
- **Voz:** segura, hospitalaria y concreta. Ejemplos: “Quédate donde la atención se siente personal.” / “Tu próxima noche en Copán empieza aquí.”
- **Wordmark:** monograma HT dentro de un marco fino dorado junto a un wordmark serif con tracking amplio.
- **Color propio:** turquesa clásico #2B6B74 aplicado a las acciones que convierten.

## Implementación

- React + TypeScript + Vite en un sitio estático, sin backend ni base de datos.
- `src/App.tsx` contiene la experiencia de página y la interacción; `src/index.css` concentra tokens, responsive layout, animaciones y estados accesibles.
- `src/main.tsx` monta la app; `public/manus-routes.json` declara la ruta `/` para Preview y publicación.
- Todas las fotos pasan por `SmartImage`: intentan primero `/assets-hotel/...` y, si aún no existe la carpeta física, caen a una foto genérica de Unsplash para que la vista previa sea inmediata.
- El catálogo de habitaciones mantiene explícitamente dormitorio y baño privado para 1, 2, 3 y 4 camas, con enlaces prellenados a WhatsApp.
- El mapa usa un iframe público centrado en La Entrada y conserva el enlace oficial de Google Maps proporcionado por el hotel.
- Framer Motion gobierna scroll reveal, cross-fade del hero, tabs y lightbox; las interacciones también tienen fallback visual mediante CSS transitions.
- La interfaz es mobile-first, usa `loading="lazy"` en imágenes no críticas, navegación suave, controles con labels y cierre de modal con Escape.
