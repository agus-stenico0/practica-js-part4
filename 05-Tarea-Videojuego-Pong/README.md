# 🏓 Tarea: Videojuego Pong

Vas a construir el clásico Pong usando **Canvas 2D** y **Clases de JavaScript**. La estructura del juego ya está montada — tú tienes que implementar cada pieza.

---

## 🚀 Cómo abrir el juego

Abre `index.html` directamente en el navegador o usa la extensión **Live Server** de VS Code.

---

## 📁 Archivos

| Archivo      | Descripción                                  |
| ------------ | -------------------------------------------- |
| `index.html` | Estructura del juego y marcador              |
| `style.css`  | Estilos de la pantalla                       |
| `app.js`     | Toda la lógica del juego — **aquí trabajás** |

---

## 📝 Los Retos

Todos los retos están marcados con `// TU CÓDIGO AQUÍ 👇` dentro de `app.js`.

### Reto 1 — `class Paleta`

- Asignar las propiedades recibidas por el constructor: `x`, `y`, `ancho`, `alto`, `color`
- `dibujar()` — pintar la paleta con `ctx.fillRect`
- `mover(teclaArriba, teclaAbajo)` — mover la paleta sin que salga del canvas

### Reto 2 — `class Pelota`

- Asignar las propiedades del constructor: `x`, `y`, `radio`, `color`
- `mover()` — sumar velocidad a la posición y rebotar en techo/piso

### Reto 3 — Instanciar los objetos

- Crear `jugador1` (paleta izquierda), `jugador2` (paleta derecha) y `pelota` (centro) usando `new`

### Reto Final — El Game Loop

- Limpiar el lienzo en cada frame
- Llamar a los métodos `mover()` y `dibujar()` de cada objeto
- El sistema de colisiones y el marcador ya están listos 🎁

---

## 🕹️ Controles

| Jugador               | Subir | Bajar |
| --------------------- | ----- | ----- |
| Jugador 1 (izquierda) | `W`   | `S`   |
| Jugador 2 (derecha)   | `↑`   | `↓`   |

---

## 💡 Pistas

- El eje Y crece hacia **abajo**. Para subir, hay que **restar** velocidad.
- Para que la pelota rebote en las paredes, multiplica su velocidad por `-1`.
- Usa `requestAnimationFrame(gameLoop)` al final del loop para que se repita.
