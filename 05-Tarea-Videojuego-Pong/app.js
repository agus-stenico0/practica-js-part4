/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("lienzoPong");
const ctx = canvas.getContext("2d");

// Elementos del DOM para el marcador
const score1DOM = document.getElementById("score1");
const score2DOM = document.getElementById("score2");

// Variables globales de puntaje
let scoreP1 = 0;
let scoreP2 = 0;

// =====================================================================
// 🎮 AYUDA DEL TECH LEAD: Control de Teclas Fluido
// Te dejamos este objeto para que sepas qué tecla está presionada.
// =====================================================================
const teclas = {
  w: false,
  s: false,
  ArrowUp: false,
  ArrowDown: false,
};

window.addEventListener("keydown", (e) => {
  if (teclas.hasOwnProperty(e.key)) teclas[e.key] = true;
});

window.addEventListener("keyup", (e) => {
  if (teclas.hasOwnProperty(e.key)) teclas[e.key] = false;
});

// =====================================================================
// 📝 RETO 1: CREAR LA CLASE PALETA
// =====================================================================
class Paleta {
  constructor(x, y, ancho, alto, color) {
    // Asigna los parámetros a las propiedades 'this'
    // TU CÓDIGO AQUÍ 👇

    this.velocidad = 6; // Velocidad fija
  }

  dibujar() {
    // Usa ctx.fillStyle y ctx.fillRect para dibujar la paleta usando 'this'
    // TU CÓDIGO AQUÍ 👇
  }

  mover(teclaArriba, teclaAbajo) {
    // 1. Si la 'teclaArriba' es true y la paleta no se sale del techo (this.y > 0), resta velocidad a this.y
    // 2. Si la 'teclaAbajo' es true y no se sale del piso (this.y + this.alto < canvas.height), suma velocidad.
    // TU CÓDIGO AQUÍ 👇
  }
}

// =====================================================================
// 📝 RETO 2: CREAR LA CLASE PELOTA
// =====================================================================
class Pelota {
  constructor(x, y, radio, color) {
    // TU CÓDIGO AQUÍ 👇

    // La pelota se mueve en ambas direcciones (X e Y)
    this.velX = 4;
    this.velY = 4;
  }

  dibujar() {
    // Te regalamos el código del círculo (arc)
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radio, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }

  mover() {
    // 1. Sumale velX a this.x y velY a this.y
    // TU CÓDIGO AQUÍ 👇
    // 2. Rebote en Techo y Piso: Si this.y toca el 0 o toca canvas.height, INVIERTE la velY (multiplica por -1)
    // TU CÓDIGO AQUÍ 👇
  }
}

// =====================================================================
// 📝 RETO 3: INSTANCIAR LOS OBJETOS
// =====================================================================
// Crea a jugador1 (izquierda), jugador2 (derecha) y la pelota (centro) usando 'new'.
// Ej: const jugador1 = new Paleta(10, 150, 20, 100, "white");

// TU CÓDIGO AQUÍ 👇

// =====================================================================
// 📝 RETO FINAL: EL GAME LOOP Y LAS COLISIONES
// =====================================================================
function gameLoop() {
  // 1. Limpiar el lienzo (clearRect)
  // TU CÓDIGO AQUÍ 👇

  // 2. Mover los objetos
  // Llama a jugador1.mover() pasándole las teclas correctas: teclas.w, teclas.s
  // Llama a jugador2.mover() pasándole teclas.ArrowUp, teclas.ArrowDown
  // Llama a pelota.mover()
  // TU CÓDIGO AQUÍ 👇

  // 3. Colisiones Paleta vs Pelota (Lógica AABB simplificada)
  // AYUDA: Si la pelota cruza la posición X de la paleta, y su posición Y está entre la parte superior e inferior de la paleta, rebota (invierte velX).

  // Colisión Jugador 1
  if (
    pelota.x - pelota.radio < jugador1.x + jugador1.ancho &&
    pelota.y > jugador1.y &&
    pelota.y < jugador1.y + jugador1.alto
  ) {
    pelota.velX *= -1;
  }

  // Colisión Jugador 2
  if (
    pelota.x + pelota.radio > jugador2.x &&
    pelota.y > jugador2.y &&
    pelota.y < jugador2.y + jugador2.alto
  ) {
    pelota.velX *= -1;
  }

  // 4. Dibujar los objetos (Llamar al método .dibujar() de los 3)
  // TU CÓDIGO AQUÍ 👇

  // 5. Motor recursivo
  requestAnimationFrame(gameLoop);
}

// Arrancar juego
gameLoop();
