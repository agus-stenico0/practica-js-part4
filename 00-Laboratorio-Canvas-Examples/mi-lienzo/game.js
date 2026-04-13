/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("lienzo");
const ctx = canvas.getContext("2d");

let posX = 20;

function animar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  posX = posX + 3;

  if (posX >= canvas.width) {
    posX = -10;
  }

  ctx.fillStyle = "blue";
  ctx.fillRect(posX, 20, 10, 10);

  requestAnimationFrame(animar);
}

animar();
