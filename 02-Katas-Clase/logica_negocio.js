/* ==========================================================================
   KATA DE CLASE 2: LÓGICA DE NEGOCIO (POO)
   Tema: E-commerce - Carrito de Compras
   Objetivo: Gestionar un array de objetos dentro de una Clase y calcular totales.
========================================================================== */

class CarritoDeCompras {
  constructor(cliente) {
    this.cliente = cliente;
    this.productos = []; // Guardaremos objetos { nombre, precio }
    this.descuento = 0; // Porcentaje de descuento (ej: 10 para 10%)
  }

  // 1. MÉTODO: AGREGAR PRODUCTO
  agregarProducto(nombre, precio) {
    // Creamos un objeto literal y lo pusheamos al array del carrito
    const nuevoProducto = { nombre: nombre, precio: precio };
    this.productos.push(nuevoProducto);
    console.log(`🛒 Agregaste: ${nombre} ($${precio})`);
  }

  // 2. MÉTODO: APLICAR CUPÓN
  aplicarCupon(porcentaje) {
    if (porcentaje > 0 && porcentaje <= 100) {
      this.descuento = porcentaje;
      console.log(`🎟️ Cupón del ${porcentaje}% aplicado exitosamente.`);
    } else {
      console.log("❌ Cupón inválido.");
    }
  }

  // 3. MÉTODO: CALCULAR TOTAL (¡Usando lo aprendido en la Semana 4!)
  calcularTotal() {
    // Si no hay productos, devolvemos 0
    if (this.productos.length === 0) return 0;

    // Sumamos los precios usando .reduce()
    const subtotal = this.productos.reduce((acumulador, producto) => {
      return acumulador + producto.precio;
    }, 0);

    // Calculamos el descuento si lo hay
    const montoDescuento = (subtotal * this.descuento) / 100;
    const totalFinal = subtotal - montoDescuento;

    return totalFinal;
  }

  // 4. MÉTODO: IMPRIMIR TICKET
  imprimirTicket() {
    console.log(`\n--- TICKET DE COMPRA: ${this.cliente.toUpperCase()} ---`);
    this.productos.forEach((prod, index) => {
      console.log(`${index + 1}. ${prod.nombre} - $${prod.precio}`);
    });

    if (this.descuento > 0) {
      console.log(`Descuento aplicado: ${this.descuento}%`);
    }

    console.log(`TOTAL A PAGAR: $${this.calcularTotal()}`);
    console.log("----------------------------------\n");
  }
}

// ==========================================================================
// 🧪 PRUEBAS EN VIVO (Para ejecutar en la consola con los alumnos)
// ==========================================================================

// 1. Instanciamos el carrito
const miCarrito = new CarritoDeCompras("Neri");

// 2. Agregamos productos
miCarrito.agregarProducto("Teclado Mecánico", 50000);
miCarrito.agregarProducto("Mouse Gamer", 25000);
miCarrito.agregarProducto("Monitor 24 pulgadas", 120000);

// 3. Vemos el total sin descuento
console.log(`Subtotal: $${miCarrito.calcularTotal()}`);

// 4. Aplicamos un cupón de Black Friday (15%)
miCarrito.aplicarCupon(15);

// 5. Imprimimos el ticket final
miCarrito.imprimirTicket();
