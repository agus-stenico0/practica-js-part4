// Kata 21
class Usuario {
  constructor(nombre, email) {
    this.nombre = nombre;
    this.email = email;
    this.activo = true;
  }
}

// Kata 22
class Admin extends Usuario {
  constructor(nombre, email) {
    super(nombre, email);
    this.rol = 'admin'
  }

  banearUsuario(usuario) {
    usuario.activo = false;
  }
}

// Kata 23: Suscripcion 
class Suscripcion { 
  #plan; 
  #vencimiento; 
  constructor(plan, vencimiento) { 
    this.#plan = plan 
    this.#vencimiento = new Date(vencimiento) 
  } 
  renovar(diasExtra) { 
    const msPorDia = 1000 * 60 * 60 * 24;
    this.#vencimiento = new Date(
    this.#vencimiento.getTime() + diasExtra * msPorDia
  ); 
  } 
  get plan() { 
    return this.#plan 
  } 
  get vencimiento() { 
    return this.#vencimiento 
  } 
} 
const sub = new Suscripcion("Premium", new Date("2026-04-20")) 
sub.renovar(10) 

// Kata 24: Perfil 
class Perfil { 
  constructor(datos) { 
    this.datos = datos 
  } 
  actualizarDatos(nuevosDatos) {
    this.datos = {...this.datos, ...nuevosDatos} 
  } 
} 
const perfil = new Perfil({ nombre: "Juan", email: "juan@mail.com" }) 
perfil.actualizarDatos({ email: "nuevo@mail.com" })

// Kata 25
class Auth {
  #usuarios;

  constructor() {
    this.#usuarios = [];
  }

  registrar(nombre, email, password) {
    const existe = this.#usuarios.some(u => u.email === email);

    if (existe) {
      throw new Error("El usuario ya existe");
    }
    const nuevoUsuario = { nombre, email, password };
    this.#usuarios.push(nuevoUsuario);
  }

  login(email, password) {
    const usuario = this.#usuarios.find(u => u.email === email);

    if (!usuario || usuario.password !== password)  throw new Error("Credenciales inválidas.");
    

    return {
      nombre: usuario.nombre,
      email: usuario.email
    };
  }

  get usuarios() {
    return this.#usuarios;
  }
}

// Kata 26
class Personaje {
  constructor(nombre, hp, ataque) {
    this.nombre = nombre;
    this.hp = hp;
    this.hpMax = hp;
    this.ataque = ataque;
    this.inventario = new Inventario();
  }

  atacar(objetivo) {
    objetivo.hp -= this.ataque;
  }

  morir() {
    return this.hp = 0;;
  }
}

// Kata 27
class Enemigo extends Personaje {
  #loot;

  constructor(nombre, hp, ataque, loot) {
    super(nombre, hp, ataque);
    this.#loot = loot;
  }

  morir() {
    if(this.hp > 0) {
      return null
    } else {
      return 'Espada legendaria'
    }
    
    
  }
}

// Kata 29: Inventario 
class Inventario { 
  constructor() {
    this.items = [];
  }

  agarrarItem(item) {
    this.items.push(item);
  }

  usarItem(nombre, personaje) {
    const index = this.items.findIndex(item => item.nombre === nombre);

    if (index === -1) {
      throw new Error("Item inexistente");
    }

    const item = this.items[index];
    this.items.splice(index, 1);
  }
} 
const inventario = new Inventario() 


// Kata 30: Pocion 
class Pocion { 
  constructor(nombre, valor) {
    this.nombre = nombre;
    this.valor = valor;
  }

  usar(personaje) {
    personaje.hp = Math.min(
      personaje.hp + this.valor,
      personaje.hpMax
    );
  } 
}
const pocion1 = new Pocion('veneno', 3) 
  

// Kata 31
class Producto {
  constructor(id, nombre, precio, stock) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  }

  vender(cantidad) {
    if (cantidad <= this.stock) {
      this.stock -= cantidad;
      return
    } else {
      throw new Error(false);
      ;
    }
  }
}

// Kata 33-35
class Carrito {
  #productos;
  #descuento;

  constructor() {
    this.#productos = [];
    this.#descuento = 0;
  }

  agregar(producto, cantidad = 1) {
    const item = this.#productos.find(p => p.producto.nombre === producto.nombre);

    if (item) {
      item.cantidad += cantidad;
    } else {
      this.#productos.push({ producto, cantidad });
    }
  }

  calcularTotal() {
    let total = 0;

    for (const item of this.#productos) {
      total += item.producto.precio * item.cantidad;
    }

    return total - this.#descuento;
  }

  aplicarCupon(codigo) {
    const total = this.calcularTotal();
    const codigoNormalizado = codigo.toUpperCase();

    if (codigoNormalizado === "DESC10") {
      this.#descuento = total * 0.1;
    } else if (codigoNormalizado === "DESC20") {
      this.#descuento = total * 0.2;
    } else {
      throw new Error("Cupón inválido.");
    }
  }

  get productos() {
    return this.#productos;
  }
}

// Kata 36
class Mesa {
  constructor(numero, capacidad) {
    this.numero = numero;
    this.capacidad = capacidad;
    this.ocupada = false;
  }
}

// Kata 37-38
class Pedido {
  #platos;

  constructor(mesa) {
    this.mesa = mesa;
    this.#platos = [];
    this.mesa.ocupada = true;
  }

  agregarPlato(nombre, precio) {
    this.#platos.push({ nombre, precio });
  }

  cerrarMesa() {
    let total = 0

    for (const plato of this.#platos) {
      total += plato.precio;
    }

    const propina = total * 0.10;
    const totalFinal = total + propina;

    this.mesa.ocupada = false;
    return totalFinal;
  }

  get platos() {
    return this.#platos;
  }
}

// Kata 39-40
class Restaurante {
  constructor() {
    this.mesas = [];
    this.recaudacion = 0;
  }

  agregarMesa(mesa) {
    this.mesas.push(mesa);
  }

  buscarMesaLibre(comensales) {
    const mesa = this.mesas.find(
      m => !m.ocupada && m.capacidad >= comensales
    );
    return mesa || null
  }

  cerrarCuenta(total) {
    this.recaudacion += total;
  }

  recaudacionDelDia() {
    return this.recaudacion;
  }
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