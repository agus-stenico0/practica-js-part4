/* ==========================================================================
  KATA DE CLASE 1: ALGORITMOS Y ESTRUCTURAS DE DATOS (POO)
  Tema: La Cola (Queue) - Algoritmo FIFO (First In, First Out)
  Ejemplo real: La fila del supermercado o la cola de impresión.
========================================================================== */

class Cola {
  // 1. PROPIEDAD PRIVADA
  // Usamos '#' para que nadie pueda meterse en la fila desde afuera (hacer trampa).
  #fila;

  constructor() {
    // Al instanciar la clase, la fila arranca vacía
    this.#fila = [];
  }

  // 2. MÉTODO: ENCOLAR (Agregar al final)
  encolar(elemento) {
    this.#fila.push(elemento);
    console.log(`✅ ${elemento} se unió a la fila.`);
  }

  // 3. MÉTODO: DESENCOLAR (Sacar al primero)
  desencolar() {
    // Si la fila está vacía, no podemos sacar a nadie
    if (this.#fila.length === 0) {
      console.log("⚠️ La fila ya está vacía.");
      return null;
    }

    // .shift() saca el PRIMER elemento del array y lo retorna
    const atendido = this.#fila.shift();
    console.log(`🛎️ Atendiendo a: ${atendido}`);
    return atendido;
  }

  // 4. MÉTODO: VER EL FRENTE (Quién es el siguiente sin sacarlo)
  verFrente() {
    if (this.#fila.length === 0) {
      return "La fila está vacía.";
    }
    return `El próximo en ser atendido es: ${this.#fila[0]}`;
  }

  // 5. MÉTODO: TAMAÑO
  verTamano() {
    return `Hay ${this.#fila.length} personas esperando.`;
  }
}

// ==========================================================================
// 🧪 PRUEBAS EN VIVO (Para ejecutar en la consola con los alumnos)
// ==========================================================================

console.log("--- INICIANDO SISTEMA DE TURNOS ---");

// Creamos una nueva instancia de nuestra estructura
const filaSuper = new Cola();

// Intentan hacer trampa (Descomentar para mostrar el error de privacidad)
// filaSuper.#fila.push("Colado"); // ❌ ERROR: Private field

// 1. Llegan los clientes
filaSuper.encolar("Neri");
filaSuper.encolar("Ana");
filaSuper.encolar("Carlos");

// 2. Ver estado de la fila
console.log(filaSuper.verTamano()); // Hay 3 personas esperando.
console.log(filaSuper.verFrente()); // El próximo es Neri.

// 3. Empieza la atención
filaSuper.desencolar(); // Atendiendo a Neri
filaSuper.desencolar(); // Atendiendo a Ana

console.log(filaSuper.verTamano()); // Hay 1 persona esperando.
