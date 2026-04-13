// ============================================================
// 02-logica_negocio.test.js
// Tests Jest para 02-logica_negocio.js (Katas 21-40)
// ============================================================

const {
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
} = require("./02-logica_negocio");

// ─────────────────────────────────────────────
// Kata 21: Usuario
// ─────────────────────────────────────────────
describe("Kata 21 - Usuario", () => {
  test("crea usuario con nombre, email y activo=true", () => {
    const u = new Usuario("Ana", "ana@email.com");
    expect(u.nombre).toBe("Ana");
    expect(u.email).toBe("ana@email.com");
    expect(u.activo).toBe(true);
  });
});

// ─────────────────────────────────────────────
// Kata 22: Admin
// ─────────────────────────────────────────────
describe("Kata 22 - Admin", () => {
  test("hereda de Usuario", () => {
    const admin = new Admin("Root", "root@admin.com");
    expect(admin instanceof Usuario).toBe(true);
    expect(admin.rol).toBe("admin");
  });
  test("banearUsuario() pone activo=false", () => {
    const admin = new Admin("Root", "root@admin.com");
    const usuario = new Usuario("Trampa", "trampa@mail.com");
    admin.banearUsuario(usuario);
    expect(usuario.activo).toBe(false);
  });
});

// ─────────────────────────────────────────────
// Kata 23: Suscripcion
// ─────────────────────────────────────────────
describe("Kata 23 - Suscripcion", () => {
  test("renovar() extiende la fecha de vencimiento", () => {
    const fechaInicio = "2026-01-01";
    const sub = new Suscripcion("premium", fechaInicio);
    const fechaAntes = new Date(sub.vencimiento);
    sub.renovar(30);
    const diferencia = (sub.vencimiento - fechaAntes) / (1000 * 60 * 60 * 24);
    expect(diferencia).toBe(30);
  });
  test("getter plan devuelve el plan", () => {
    const sub = new Suscripcion("basic", "2026-01-01");
    expect(sub.plan).toBe("basic");
  });
});

// ─────────────────────────────────────────────
// Kata 24: Perfil
// ─────────────────────────────────────────────
describe("Kata 24 - Perfil", () => {
  test("actualizarDatos fusiona objetos", () => {
    const perfil = new Perfil({ nombre: "Luis", edad: 20 });
    perfil.actualizarDatos({ edad: 21, ciudad: "Madrid" });
    expect(perfil.datos).toEqual({
      nombre: "Luis",
      edad: 21,
      ciudad: "Madrid",
    });
  });
});

// ─────────────────────────────────────────────
// Kata 25: Auth
// ─────────────────────────────────────────────
describe("Kata 25 - Auth", () => {
  let auth;
  beforeEach(() => {
    auth = new Auth();
    auth.registrar("Carlos", "carlos@mail.com", "pass123");
  });

  test("login correcto devuelve nombre y email", () => {
    const resultado = auth.login("carlos@mail.com", "pass123");
    expect(resultado).toEqual({ nombre: "Carlos", email: "carlos@mail.com" });
  });
  test("login incorrecto lanza error", () => {
    expect(() => auth.login("carlos@mail.com", "wrongpass")).toThrow(
      "Credenciales inválidas.",
    );
  });
  test("registrar email duplicado lanza error", () => {
    expect(() => auth.registrar("Otro", "carlos@mail.com", "abc")).toThrow();
  });
});

// ─────────────────────────────────────────────
// Kata 26-28: Personaje y combate
// ─────────────────────────────────────────────
describe("Katas 26-28 - Personaje y combate", () => {
  test("crea personaje con nombre, hp y ataque", () => {
    const p = new Personaje("Mario", 100, 15);
    expect(p.nombre).toBe("Mario");
    expect(p.hp).toBe(100);
    expect(p.ataque).toBe(15);
  });
  test("atacar() reduce hp del objetivo", () => {
    const mario = new Personaje("Mario", 100, 15);
    const enemigo = new Enemigo("Goomba", 30, 5, "Moneda");
    mario.atacar(enemigo);
    expect(enemigo.hp).toBe(15);
  });
  test("hp del objetivo no baja de 0", () => {
    const mario = new Personaje("Mario", 100, 999);
    const enemigo = new Enemigo("Goomba", 10, 0, "Moneda");
    mario.atacar(enemigo);
    expect(enemigo.hp).toBe(0);
  });
});

// ─────────────────────────────────────────────
// Kata 27: Enemigo loot
// ─────────────────────────────────────────────
describe("Kata 27 - Enemigo loot", () => {
  test("morir() devuelve loot cuando hp <= 0", () => {
    const e = new Enemigo("Boss", 0, 10, "Espada legendaria");
    expect(e.morir()).toBe("Espada legendaria");
  });
  test("morir() devuelve null si aún tiene hp", () => {
    const e = new Enemigo("Boss", 50, 10, "Espada legendaria");
    expect(e.morir()).toBeNull();
  });
});

// ─────────────────────────────────────────────
// Katas 29-30: Inventario y Pocion
// ─────────────────────────────────────────────
describe("Katas 29-30 - Inventario y Poción", () => {
  test("agarrarItem agrega al inventario", () => {
    const inv = new Inventario();
    const pocion = new Pocion("Poción roja", 30);
    inv.agarrarItem(pocion);
    expect(inv.items.length).toBe(1);
  });
  test("usarItem aplica efecto y lo elimina", () => {
    const personaje = new Personaje("Link", 100, 10);
    personaje.hp = 50;
    const pocion = new Pocion("Poción roja", 30);
    personaje.inventario.agarrarItem(pocion);
    personaje.inventario.usarItem("Poción roja", personaje);
    expect(personaje.hp).toBe(80);
    expect(personaje.inventario.items.length).toBe(0);
  });
  test("poción no supera el hp máximo", () => {
    const personaje = new Personaje("Link", 100, 10);
    personaje.hp = 90;
    const pocion = new Pocion("Poción roja", 50);
    personaje.inventario.agarrarItem(pocion);
    personaje.inventario.usarItem("Poción roja", personaje);
    expect(personaje.hp).toBe(100);
  });
  test("usarItem con item inexistente lanza error", () => {
    const inv = new Inventario();
    const p = new Personaje("Link", 100, 10);
    expect(() => inv.usarItem("Elixir", p)).toThrow();
  });
});

// ─────────────────────────────────────────────
// Katas 31-35: E-Commerce
// ─────────────────────────────────────────────
describe("Katas 31-32 - Producto", () => {
  test("crea producto con id, nombre, precio y stock", () => {
    const p = new Producto(1, "Camiseta", 20, 10);
    expect(p.nombre).toBe("Camiseta");
    expect(p.stock).toBe(10);
  });
  test("vender() reduce el stock", () => {
    const p = new Producto(1, "Camiseta", 20, 10);
    p.vender(3);
    expect(p.stock).toBe(7);
  });
  test("vender() con stock insuficiente lanza error", () => {
    const p = new Producto(1, "Camiseta", 20, 2);
    expect(() => p.vender(5)).toThrow();
  });
});

describe("Katas 33-35 - Carrito", () => {
  let carrito;
  let camiseta;
  let pantalon;
  beforeEach(() => {
    carrito = new Carrito();
    camiseta = new Producto(1, "Camiseta", 20, 10);
    pantalon = new Producto(2, "Pantalón", 40, 5);
  });

  test("agregar() añade productos al carrito", () => {
    carrito.agregar(camiseta);
    expect(carrito.productos.length).toBe(1);
  });
  test("calcularTotal() suma los precios", () => {
    carrito.agregar(camiseta, 2);
    carrito.agregar(pantalon, 1);
    expect(carrito.calcularTotal()).toBe(80);
  });
  test("aplicarCupon() aplica 20% de descuento", () => {
    carrito.agregar(camiseta, 2); // 40
    carrito.aplicarCupon("DESCUENTO20");
    expect(carrito.calcularTotal()).toBe(32);
  });
  test("cupon inválido lanza error", () => {
    expect(() => carrito.aplicarCupon("FAKE")).toThrow("Cupón inválido.");
  });
});

// ─────────────────────────────────────────────
// Katas 36-40: Restaurante
// ─────────────────────────────────────────────
describe("Kata 36 - Mesa", () => {
  test("crea mesa con numero, capacidad y ocupada=false", () => {
    const mesa = new Mesa(1, 4);
    expect(mesa.numero).toBe(1);
    expect(mesa.capacidad).toBe(4);
    expect(mesa.ocupada).toBe(false);
  });
});

describe("Katas 37-38 - Pedido", () => {
  let mesa;
  let pedido;
  beforeEach(() => {
    mesa = new Mesa(1, 4);
    pedido = new Pedido(mesa);
  });

  test("crear Pedido marca la mesa como ocupada", () => {
    expect(mesa.ocupada).toBe(true);
  });
  test("agregarPlato() añade platos al pedido", () => {
    pedido.agregarPlato("Pizza", 12);
    expect(pedido.platos.length).toBe(1);
  });
  test("cerrarMesa() devuelve total + 10% propina", () => {
    pedido.agregarPlato("Pizza", 10);
    pedido.agregarPlato("Refresco", 2);
    const total = pedido.cerrarMesa();
    expect(total).toBeCloseTo(13.2);
  });
  test("cerrarMesa() libera la mesa", () => {
    pedido.cerrarMesa();
    expect(mesa.ocupada).toBe(false);
  });
});

describe("Katas 39-40 - Restaurante", () => {
  let restaurante;
  beforeEach(() => {
    restaurante = new Restaurante();
    restaurante.agregarMesa(new Mesa(1, 2));
    restaurante.agregarMesa(new Mesa(2, 4));
    restaurante.agregarMesa(new Mesa(3, 6));
  });

  test("buscarMesaLibre() encuentra mesa con suficiente capacidad", () => {
    const mesa = restaurante.buscarMesaLibre(4);
    expect(mesa.capacidad).toBeGreaterThanOrEqual(4);
  });
  test("buscarMesaLibre() devuelve null si no hay mesa disponible", () => {
    restaurante.mesas.forEach((m) => (m.ocupada = true));
    expect(restaurante.buscarMesaLibre(2)).toBeNull();
  });
  test("recaudacionDelDia() suma todas las cuentas cerradas", () => {
    restaurante.cerrarCuenta(110);
    restaurante.cerrarCuenta(55);
    restaurante.cerrarCuenta(77);
    expect(restaurante.recaudacionDelDia()).toBe(242);
  });
});
