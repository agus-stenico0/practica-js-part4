/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("lienzoExplicacion");
const ctx = canvas.getContext("2d");

// Elementos del panel UI
const panels = {
  c1: document.getElementById("condicion1"),
  c2: document.getElementById("condicion2"),
  c3: document.getElementById("condicion3"),
  c4: document.getElementById("condicion4"),
  bam: document.getElementById("resultado-bam"),
};

// OBJETOS DEL JUEGO
const rectA = { x: 50, y: 150, w: 100, h: 100, color: "#ff7b72" }; // Rojo (Móvil)
const rectB = { x: 350, y: 100, w: 150, h: 200, color: "#58a6ff" }; // Azul (Fijo)

// Control del mouse
let dragging = false;
let offsetX, offsetY;

// --- LÓGICA DE DIBUJO ---
function dibujar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Ayudas visuales (Líneas de límites)
  dibujarGuias(rectB);

  // Dibujar Rectángulo B (Azul, quieto)
  ctx.fillStyle = rectB.color + "55"; // Semi-transparente
  ctx.fillRect(rectB.x, rectB.y, rectB.w, rectB.h);
  ctx.strokeStyle = rectB.color;
  ctx.lineWidth = 2;
  ctx.strokeRect(rectB.x, rectB.y, rectB.w, rectB.h);

  // Dibujar Rectángulo A (Rojo, móvil)
  ctx.fillStyle = rectA.color;
  ctx.fillRect(rectA.x, rectA.y, rectA.w, rectA.h);
}

// Dibuja líneas punteadas mostrando "el área de influencia" de RectB
function dibujarGuias(rect) {
  ctx.setLineDash([5, 5]);
  ctx.lineWidth = 1;

  // X = Izquierda de B
  ctx.strokeStyle = rect.color + "99";
  ctx.beginPath();
  ctx.moveTo(rect.x, 0);
  ctx.lineTo(rect.x, canvas.height);
  ctx.stroke();
  ctx.closePath();

  // X + W = Derecha de B
  ctx.strokeStyle = rect.color + "99";
  ctx.beginPath();
  ctx.moveTo(rect.x + rect.w, 0);
  ctx.lineTo(rect.x + rect.w, canvas.height);
  ctx.stroke();
  ctx.closePath();

  // Y = Techo de B
  ctx.strokeStyle = rect.color + "99";
  ctx.beginPath();
  ctx.moveTo(0, rect.y);
  ctx.lineTo(canvas.width, rect.y);
  ctx.stroke();
  ctx.closePath();

  // Y + H = Piso de B
  ctx.strokeStyle = rect.color + "99";
  ctx.beginPath();
  ctx.moveTo(0, rect.y + rect.h);
  ctx.lineTo(canvas.width, rect.y + rect.h);
  ctx.stroke();
  ctx.closePath();

  ctx.setLineDash([]); // Resetear
}

// --- LÓGICA DE COLISIÓN (Desarmada) ---
function verificarYActualizarUI() {
  const c1 = rectA.x < rectB.x + rectB.w;
  const c2 = rectA.x + rectA.w > rectB.x;
  const c3 = rectA.y < rectB.y + rectB.h;
  const c4 = rectA.y + rectA.h > rectB.y;

  actualizarItemUI(panels.c1, c1);
  actualizarItemUI(panels.c2, c2);
  actualizarItemUI(panels.c3, c3);
  actualizarItemUI(panels.c4, c4);

  if (c1 && c2 && c3 && c4) {
    panels.bam.textContent = "¡BAM!";
    panels.bam.classList.add("bam");
    canvas.classList.add("colisionando");
  } else {
    panels.bam.textContent = "NO CHOCAN";
    panels.bam.classList.remove("bam");
    canvas.classList.remove("colisionando");
  }
}

// Función helper para cambiar color y estatus de los ítems de UI
function actualizarItemUI(element, estado) {
  const statusSpan = element.querySelector(".status");
  if (estado) {
    statusSpan.textContent = "✅";
    statusSpan.className = "status cumple";
  } else {
    statusSpan.textContent = "❌";
    statusSpan.className = "status no-cumple";
  }
}

// --- CONTROLES DE MOUSE (Draggable) ---
canvas.addEventListener("mousedown", (e) => {
  const m = getMousePos(e);
  if (
    m.x > rectA.x &&
    m.x < rectA.x + rectA.w &&
    m.y > rectA.y &&
    m.y < rectA.y + rectA.h
  ) {
    dragging = true;
    offsetX = m.x - rectA.x;
    offsetY = m.y - rectA.y;
    canvas.style.cursor = "grabbing";
  }
});

window.addEventListener("mouseup", () => {
  dragging = false;
  canvas.style.cursor = "grab";
});

canvas.addEventListener("mousemove", (e) => {
  if (dragging) {
    const m = getMousePos(e);
    rectA.x = m.x - offsetX;
    rectA.y = m.y - offsetY;
    dibujar();
    verificarYActualizarUI();
  }
});

function getMousePos(e) {
  const r = canvas.getBoundingClientRect();
  return { x: e.clientX - r.left, y: e.clientY - r.top };
}

// --- ARRANQUE ---
dibujar();
verificarYActualizarUI();
