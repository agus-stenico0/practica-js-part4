// ============================================================
// 02-logica_negocio.js — 20 Katas del Mundo Real
// Implementa cada clase para que los tests pasen.
// Ejecuta: npm test
// ============================================================

// ─────────────────────────────────────────────
// GESTIÓN DE USUARIOS (Katas 21-25)
// ─────────────────────────────────────────────

// Kata 21: Usuario
class Usuario {
  constructor(nombre, email) {}
}

// Kata 22: Admin
class Admin extends Usuario {
  constructor(nombre, email) {}

  banearUsuario(usuario) {}
}

// Kata 23: Suscripcion
class Suscripcion {
  #plan;
  #vencimiento;

  constructor(plan, vencimiento) {}

  renovar(diasExtra) {}

  get plan() {}

  get vencimiento() {}
}

// Kata 24: Perfil
class Perfil {
  constructor(datos) {}

  actualizarDatos(nuevosDatos) {}
}

// Kata 25: Auth
class Auth {
  #usuarios;

  constructor() {}

  registrar(nombre, email, password) {}

  login(email, password) {}
}

// ─────────────────────────────────────────────
// EL VIDEOJUEGO RPG (Katas 26-30)
// ─────────────────────────────────────────────

// Kata 26 y 28: Personaje
class Personaje {
  constructor(nombre, hp, ataque) {}

  atacar(objetivo) {}
}

// Kata 27: Enemigo
class Enemigo {
  #loot;

  constructor(nombre, hp, ataque, loot) {}

  atacar(objetivo) {}

  morir() {}
}

// Kata 29: Inventario
class Inventario {
  constructor() {}

  agarrarItem(item) {}

  usarItem(nombre, personaje) {}
}

// Kata 30: Pocion
class Pocion {
  constructor(nombre, cantidad) {}

  usar(personaje) {}
}

// ─────────────────────────────────────────────
// EL E-COMMERCE (Katas 31-35)
// ─────────────────────────────────────────────

// Kata 31 y 32: Producto
class Producto {
  constructor(id, nombre, precio, stock) {}

  vender(cantidad) {}
}

// Katas 33-35: Carrito
class Carrito {
  #productos;
  #descuento;

  constructor() {}

  agregar(producto, cantidad = 1) {}

  calcularTotal() {}

  aplicarCupon(codigo) {}

  get productos() {}
}

// ─────────────────────────────────────────────
// EL RESTAURANTE (Katas 36-40)
// ─────────────────────────────────────────────

// Kata 36: Mesa
class Mesa {
  constructor(numero, capacidad) {}
}

// Katas 37 y 38: Pedido
class Pedido {
  #platos;

  constructor(mesa) {}

  agregarPlato(nombre, precio) {}

  cerrarMesa() {}

  get platos() {}
}

// Katas 39 y 40: Restaurante
class Restaurante {
  constructor() {}

  agregarMesa(mesa) {}

  buscarMesaLibre(comensales) {}

  cerrarCuenta(total) {}

  recaudacionDelDia() {}
}

module.exports = {
  Usuario,
  Admin,
  Suscripcion,
  Perfil,
  Auth,
  Personaje,
  Enemigo,
  Inventario,
  Pocion,
  Producto,
  Carrito,
  Mesa,
  Pedido,
  Restaurante,
};
