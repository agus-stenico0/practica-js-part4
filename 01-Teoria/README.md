<!-- Guion de clase: Clases, constructores, 'this' y Prototipos -->

# 🚀 Semana 6: Programación Orientada a Objetos y Canvas

¡Bienvenidos a las grandes ligas de JavaScript! Hasta ahora, nuestro código consistía en funciones sueltas y variables que modificaban el HTML. Pero a medida que nuestras aplicaciones (y videojuegos) crecen, necesitamos una forma más inteligente de organizar la lógica.

Esta semana aprenderemos a crear nuestras propias "Fábricas de Datos" y pasaremos del DOM a dibujar gráficos en 2D puro.

---

## 🏗️ 1. Programación Orientada a Objetos (POO)

Imagina que estás programando un videojuego con 100 enemigos en pantalla. Sería imposible crear 100 variables distintas (`enemigo1_vida`, `enemigo2_vida`, etc.). Para solucionar esto, usamos la POO.

La POO nos permite crear un "Plano" o "Molde" (La Clase) y a partir de ese molde, fabricar múltiples copias idénticas (Los Objetos o Instancias).

### A. La Clase (`class`) y el Constructor

La `class` es el plano de construcción. El `constructor` es la máquina dentro de la fábrica que se ejecuta una única vez justo cuando creamos un nuevo objeto, para asignarle sus propiedades iniciales.

### B. El misterio de la palabra `this`

En JavaScript, `this` significa "este objeto en particular". Sirve para diferenciar las características de un objeto de las de otro, aunque hayan salido del mismo molde.

**Ejemplo Práctico:**

```javascript
// 1. EL MOLDE (La Clase)
class Personaje {
  // El Constructor recibe los datos al nacer
  constructor(nombre, color) {
    this.nombre = nombre; // "El nombre de ESTE personaje será..."
    this.color = color;
    this.vidas = 3; // Todos nacen con 3 vidas por defecto
  }

  // Los Métodos (Las acciones que puede hacer)
  saludar() {
    console.log(`¡Hola! Soy ${this.nombre} y soy de color ${this.color}`);
  }

  recibirDano() {
    this.vidas = this.vidas - 1;
    console.log(`A ${this.nombre} le quedan ${this.vidas} vidas.`);
  }
}

// 2. LA FÁBRICA (Instanciación usando 'new')
const mario = new Personaje("Mario", "Rojo");
const luigi = new Personaje("Luigi", "Verde");

// 3. USO DE LOS OBJETOS
mario.saludar(); // "¡Hola! Soy Mario..."
luigi.saludar(); // "¡Hola! Soy Luigi..."

mario.recibirDano(); // Solo Mario pierde una vida. Luigi sigue teniendo 3.
```

---

## 💊 2. La Matrix de JS: Los Prototipos

Un pequeño secreto de desarrollador Senior: Casi todo en JavaScript es un Objeto heredado de un Prototipo.

¿Te preguntaste alguna vez de dónde sale el método `.map()`, `.filter()` o `.push()` que usabas en tus Arrays? ¡Tú nunca los programaste!
Estos métodos viven en algo llamado `Array.prototype`. Es decir, JavaScript tiene una "Clase" madre oculta para los Arrays que ya viene con esas herramientas de fábrica.

Cuando escribes la palabra `class`, en realidad estás usando "azúcar sintáctico", una forma bonita y moderna de escribir Prototipos, que es el motor real bajo el capó de JavaScript.

---

## 🛡️ 3. Encapsulamiento (Campos Privados, Getters y Setters)

En nuestro juego, si un jugador abre la consola del navegador, podría hacer trampa fácilmente escribiendo: `mario.vidas = 999999`.
Para evitar que accedan y modifiquen propiedades críticas desde afuera, usamos **Propiedades Privadas** agregando un numeral (`#`).

Pero, ¿qué pasa si el juego necesita leer o cambiar esas vidas de forma legal (por ejemplo, al agarrar un hongo de vida extra)? Para eso usamos las puertas traseras controladas: los **Getters** (`get`) y **Setters** (`set`).

- **Getter (`get`):** Es una ventanilla de "solo lectura". Permite ver el dato privado desde afuera.
- **Setter (`set`):** Es un filtro o "aduana". Permite modificar el dato privado, pero solo si pasa nuestras validaciones (ej: que las vidas no sean negativas).

> ⚠️ **Regla de Oro:** Los getters y setters se escriben como métodos, pero se usan como si fueran variables (¡no llevan paréntesis!).

```javascript
class Enemigo {
  // Declaramos la propiedad privada arriba de todo
  #vidas;

  constructor(tipo) {
    this.tipo = tipo;
    this.#vidas = 100; // PRIVADA (nadie la puede tocar directamente desde afuera)
  }

  // GET: Leer el dato
  get vidasActuales() {
    return this.#vidas;
  }

  // SET: Modificar el dato pasando por un filtro de seguridad
  set modificarVidas(nuevaCantidad) {
    if (nuevaCantidad < 0) {
      console.error("❌ Hack detectado: Las vidas no pueden ser negativas.");
    } else if (nuevaCantidad > 100) {
      console.error("❌ Error: El máximo de vidas es 100.");
    } else {
      this.#vidas = nuevaCantidad; // Si pasa las reglas, actualizamos el dato
      console.log(`✅ Vidas actualizadas a: ${this.#vidas}`);
    }
  }
}

const jefeFinal = new Enemigo("Dragón");

// ❌ INTENTO DE HACKEO DIRECTO:
// jefeFinal.#vidas = 0; -> ERROR: Private field '#vidas' must be declared in an enclosing class.

// ✅ USO DEL GETTER (Se lee sin paréntesis)
console.log(jefeFinal.vidasActuales); // Imprime: 100

// ✅ USO DEL SETTER (Se asigna con el signo '=', no lleva paréntesis)
jefeFinal.modificarVidas = -500; // Imprime: ❌ Hack detectado: Las vidas no pueden ser negativas.
jefeFinal.modificarVidas = 80; // Imprime: ✅ Vidas actualizadas a: 80
```

---

## 🎨 4. La API de Canvas (Gráficos 2D)

Dejamos atrás los `<div>` y `<p>`. El `<canvas>` es una etiqueta de HTML5 que actúa como un pizarrón en blanco. Todo lo que pasa adentro se dibuja píxel por píxel usando JavaScript.

### La regla de oro del Canvas: El Eje Invertido

A diferencia de las matemáticas de la escuela, en la web el punto de origen (X:0, Y:0) está en la esquina superior izquierda.

- Si sumas a **X**, te mueves a la **derecha**.
- Si sumas a **Y**, te mueves hacia **ABAJO**.

### Pintando el Pizarrón (`ctx`)

Para dibujar, necesitamos pedirle al Canvas su "Caja de herramientas 2D", conocida como el Contexto o `ctx`.

```javascript
// 1. Atrapamos el Canvas de nuestro HTML
const canvas = document.querySelector("#miLienzo");

// 2. Pedimos el contexto 2D
const ctx = canvas.getContext("2d");

// 3. Dibujamos un cuadrado azul
ctx.fillStyle = "blue"; // Elegimos el color
ctx.fillRect(50, 50, 100, 100); // (PosiciónX, PosiciónY, Ancho, Alto)
```

---

## 🔄 4. El Game Loop y la Ilusión de Movimiento

El Canvas no tiene memoria. Si dibujas un personaje y quieres que camine hacia la derecha, no puedes simplemente decirle "muévete". Tienes que crear una ilusión óptica, exactamente igual a como funcionan las películas o los cuadernos animados (Flipbooks).

Esta ilusión se logra con el **Game Loop**, un ciclo que se repite unas 60 veces por segundo:

1. **Borrar:** Limpias todo el Canvas con `ctx.clearRect()`.
2. **Actualizar:** Modificas las variables (ej: `this.x = this.x + 5`).
3. **Dibujar:** Vuelves a pintar el personaje en la nueva posición.
4. **Repetir:** Usas `requestAnimationFrame` para pedirle al navegador que repita el proceso en el siguiente frame.

```javascript
let posX = 0;

function animar() {
  // 1. BORRAR EL PIZARRÓN (Vital para no dejar un rastro de pintura)
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // 2. ACTUALIZAR POSICIÓN
  posX = posX + 5;

  // 3. DIBUJAR DE NUEVO
  ctx.fillStyle = "red";
  ctx.fillRect(posX, 100, 50, 50);

  // 4. EL MOTOR DEL LOOP (Llamar a la función otra vez)
  requestAnimationFrame(animar);
}

// Arrancamos la animación
animar();
```

> 💡 **Consejo Pro:** `requestAnimationFrame` es una herramienta moderna que sincroniza la animación con los hercios (Hz) de tu monitor, logrando animaciones mucho más fluidas y eficientes que usar un simple `setInterval`.
