// TRABAJOS REALIZADOS CON LOS ALUMNOS

// class Personaje {
//   constructor(nombre, color) {
//     this.nombre = nombre;
//     this.color = color;
//     this.vidas = 3;
//   }

//   saludar() {
//     console.log(`¡Hola! Soy ${this.nombre} y soy de color   ${this.color}`);
//   }

//   recibirDano() {
//     this.vidas = this.vidas - 1;
//     console.log(`A ${this.nombre} le quedan ${this.vidas} vidas.`);
//   }
// }

// const mario = new Personaje("Mario", "Rojo");
// const luigi = new Personaje("Luigi", "Verde");

// mario.saludar()
// luigi.recibirDano()

// mario

// class Enemigo {
//   // Declaramos la propiedad privada arriba de todo
//   #vidas;
//   constructor(tipo){
//     this.tipo = tipo;
//     this.#vidas = 100;
//   }

//   // GET: Leer el dato
//   get vidasActuales() {
//     return this.#vidas; // -> 100 vidas actuales
//   }

//   // SET: Modificar el dato pasando por un filtro de seguridad
//   set modificarVidas(nuevaCantidad) {
//     if (nuevaCantidad < 0) {
//       console.error("❌ Hack detectado: Las vidas no pueden ser negativas.");
//     } else if (nuevaCantidad > 100) {
//       console.error("❌ Error: El máximo de vidas es 100.");
//     } else {
//       this.#vidas = nuevaCantidad; // Si pasa las reglas, actualizamos el dato
//       console.log(`✅ Vidas actualizadas a: ${this.#vidas}`);
//     }
//   }
// }

// const jefeFinal = new Enemigo("Dragon");

// // jefeFinal.#vidas = 0;
// jefeFinal.vidasActuales

// // jefeFinal.modificarVidas = -500;
// // jefeFinal.modificarVidas = 500;
// jefeFinal.modificarVidas = 80;

// jefeFinal.vidasActuales

// class Cola {
//   // 1. PROPIEDAD PRIVADA
//   // Usamos '#' para que nadie pueda meterse en la fila desde afuera (hacer trampa).
//   #fila;

//   constructor() {
//     // Al instanciar la clase, la fila arranca vacía
//     this.#fila = [];
//   }

//   // 2. MÉTODO: ENCOLAR (Agregar al final)
//   encolar(elemento) {
//     this.#fila.push(elemento);
//     console.log(`✅ ${elemento} se unió a la fila.`);
//   }

//   // 3. MÉTODO: DESENCOLAR (Sacar al primero)
//   desencolar() {
//     // Si la fila está vacía, no podemos sacar a nadie
//     if (this.#fila.length === 0) {
//       console.log("⚠️ La fila ya está vacía.");
//       return null;
//     }

//     // .shift() saca el PRIMER elemento del array y lo retorna
//     const atendido = this.#fila.shift();
//     console.log(`🛎️ Atendiendo a: ${atendido}`);
//     return atendido;
//   }

//   // 4. MÉTODO: VER EL FRENTE (Quién es el siguiente sin sacarlo)
//   verFrente() {
//     if (this.#fila.length === 0) {
//       return "La fila está vacía.";
//     }
//     return `El próximo en ser atendido es: ${this.#fila[0]}`;
//   }

//   // 5. MÉTODO: TAMAÑO
//   verTamano() {
//     return `Hay ${this.#fila.length} personas esperando.`;
//   }
// }

// console.log("--- INICIANDO SISTEMA DE TURNOS ---");

// // Creamos una nueva instancia de nuestra estructura
// const filaSuper = new Cola();

// // Intentan hacer trampa (Descomentar para mostrar el error de privacidad)
// // filaSuper.#fila.push("Colado"); // ❌ ERROR: Private field

// // 1. Llegan los clientes
// filaSuper.encolar("Neri");
// filaSuper.encolar("Ana");
// filaSuper.encolar("Carlos");

// // 2. Ver estado de la fila
// console.log(filaSuper.verTamano()); // Hay 3 personas esperando.
// console.log(filaSuper.verFrente()); // El próximo es Neri.

// // 3. Empieza la atención
// filaSuper.desencolar(); // Atendiendo a Neri
// filaSuper.desencolar(); // Atendiendo a Ana

// console.log(filaSuper.verTamano());

// class CarritoDeCompras {
//   constructor(cliente) {
//     this.cliente = cliente;
//     this.productos = []; // Guardaremos objetos { nombre, precio }
//     this.descuento = 0; // Porcentaje de descuento (ej: 10 para 10%)
//   }

//   // 1. MÉTODO: AGREGAR PRODUCTO
//   agregarProducto(nombre, precio) {
//     // Creamos un objeto literal y lo pusheamos al array del carrito
//     const nuevoProducto = { nombre: nombre, precio: precio };
//     this.productos.push(nuevoProducto);
//     console.log(`🛒 Agregaste: ${nombre} ($${precio})`);
//   }

//   // 2. MÉTODO: APLICAR CUPÓN
//   aplicarCupon(porcentaje) {
//     if (porcentaje > 0 && porcentaje <= 100) {
//       this.descuento = porcentaje;
//       console.log(`🎟️ Cupón del ${porcentaje}% aplicado exitosamente.`);
//     } else {
//       console.log("❌ Cupón inválido.");
//     }
//   }

//   // 3. MÉTODO: CALCULAR TOTAL (¡Usando lo aprendido en la Semana 4!)
//   calcularTotal() {
//     // Si no hay productos, devolvemos 0
//     if (this.productos.length === 0) return 0;

//     // Sumamos los precios usando .reduce()
//     const subtotal = this.productos.reduce((acumulador, producto) => {
//       return acumulador + producto.precio;
//     }, 0);

//     // Calculamos el descuento si lo hay
//     const montoDescuento = (subtotal * this.descuento) / 100;
//     const totalFinal = subtotal - montoDescuento;

//     return totalFinal;
//   }

//   // 4. MÉTODO: IMPRIMIR TICKET
//   imprimirTicket() {
//     console.log(`\n--- TICKET DE COMPRA: ${this.cliente.toUpperCase()} ---`);
//     this.productos.forEach((prod, index) => {
//       console.log(`${index + 1}. ${prod.nombre} - $${prod.precio}`);
//     });

//     if (this.descuento > 0) {
//       console.log(`Descuento aplicado: ${this.descuento}%`);
//     }

//     console.log(`TOTAL A PAGAR: $${this.calcularTotal()}`);
//     console.log("----------------------------------\n");
//   }
// }

// // ==========================================================================
// // 🧪 PRUEBAS EN VIVO (Para ejecutar en la consola con los alumnos)
// // ==========================================================================

// // 1. Instanciamos el carrito
// const miCarrito = new CarritoDeCompras("Neri");

// // 2. Agregamos productos
// miCarrito.agregarProducto("Teclado Mecánico", 50000);
// miCarrito.agregarProducto("Mouse Gamer", 25000);
// miCarrito.agregarProducto("Monitor 24 pulgadas", 120000);

// // 3. Vemos el total sin descuento
// console.log(`Subtotal: $${miCarrito.calcularTotal()}`);

// // 4. Aplicamos un cupón de Black Friday (15%)
// miCarrito.aplicarCupon(15);

// // 5. Imprimimos el ticket final
// miCarrito.imprimirTicket();
