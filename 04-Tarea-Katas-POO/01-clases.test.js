// ============================================================
// 01-clases.test.js
// Tests Jest para 01-clases.js (Katas 1-20)
// ============================================================

const {
  Contador,
  Calculadora,
  Validador,
  Conversor,
  Generador,
  CuentaBancaria,
  Termostato,
  Reloj,
  CajaFuerte,
  Pila,
  Cola,
} = require("./01-clases");

// ─────────────────────────────────────────────
// Kata 1: Contador
// ─────────────────────────────────────────────
describe("Kata 1 - Contador", () => {
  let contador;
  beforeEach(() => (contador = new Contador()));

  test("inicia en 0", () => {
    expect(contador.valor).toBe(0);
  });
  test("incrementar() suma 1", () => {
    contador.incrementar();
    expect(contador.valor).toBe(1);
  });
  test("decrementar() resta 1", () => {
    contador.incrementar();
    contador.decrementar();
    expect(contador.valor).toBe(0);
  });
  test("reset() vuelve a 0", () => {
    contador.incrementar();
    contador.incrementar();
    contador.reset();
    expect(contador.valor).toBe(0);
  });
});

// ─────────────────────────────────────────────
// Kata 2: Calculadora
// ─────────────────────────────────────────────
describe("Kata 2 - Calculadora", () => {
  const calc = new Calculadora();

  test("sumar(3, 2) = 5", () => expect(calc.sumar(3, 2)).toBe(5));
  test("restar(10, 4) = 6", () => expect(calc.restar(10, 4)).toBe(6));
  test("multiplicar(3, 4) = 12", () => expect(calc.multiplicar(3, 4)).toBe(12));
  test("dividir(10, 2) = 5", () => expect(calc.dividir(10, 2)).toBe(5));
  test("dividir por 0 lanza error", () => {
    expect(() => calc.dividir(10, 0)).toThrow("No se puede dividir por cero.");
  });
});

// ─────────────────────────────────────────────
// Kata 3: Validador
// ─────────────────────────────────────────────
describe("Kata 3 - Validador", () => {
  const val = new Validador();

  test("esEmail válido", () =>
    expect(val.esEmail("test@email.com")).toBe(true));
  test("esEmail inválido", () =>
    expect(val.esEmail("no-es-email")).toBe(false));
  test("esPasswordFuerte válida", () =>
    expect(val.esPasswordFuerte("Segura99")).toBe(true));
  test("esPasswordFuerte débil (sin mayúscula)", () =>
    expect(val.esPasswordFuerte("debil123")).toBe(false));
  test("esPasswordFuerte débil (muy corta)", () =>
    expect(val.esPasswordFuerte("Ab1")).toBe(false));
});

// ─────────────────────────────────────────────
// Kata 4: Conversor
// ─────────────────────────────────────────────
describe("Kata 4 - Conversor", () => {
  const conv = new Conversor();

  test("0°C = 32°F", () => expect(conv.celsiusAFahrenheit(0)).toBe(32));
  test("100°C = 212°F", () => expect(conv.celsiusAFahrenheit(100)).toBe(212));
  test("1 km ≈ 0.621371 millas", () => {
    expect(conv.kmAMillas(1)).toBeCloseTo(0.621371);
  });
});

// ─────────────────────────────────────────────
// Kata 5: Generador
// ─────────────────────────────────────────────
describe("Kata 5 - Generador", () => {
  const gen = new Generador();

  test("numeroAleatorio está dentro del rango", () => {
    for (let i = 0; i < 20; i++) {
      const n = gen.numeroAleatorio(1, 10);
      expect(n).toBeGreaterThanOrEqual(1);
      expect(n).toBeLessThanOrEqual(10);
    }
  });
});

// ─────────────────────────────────────────────
// Katas 6-7: CuentaBancaria
// ─────────────────────────────────────────────
describe("Katas 6-7 - CuentaBancaria", () => {
  let cuenta;
  beforeEach(() => (cuenta = new CuentaBancaria(100)));

  test("saldo inicial 100", () => expect(cuenta.saldo).toBe(100));
  test("depositar(50) → saldo 150", () => {
    cuenta.depositar(50);
    expect(cuenta.saldo).toBe(150);
  });
  test("depositar cantidad negativa lanza error", () => {
    expect(() => cuenta.depositar(-10)).toThrow();
  });
  test("retirar(40) → saldo 60", () => {
    cuenta.retirar(40);
    expect(cuenta.saldo).toBe(60);
  });
  test("retirar más de lo que hay lanza error", () => {
    expect(() => cuenta.retirar(200)).toThrow("Saldo insuficiente.");
  });
});

// ─────────────────────────────────────────────
// Kata 8: Termostato
// ─────────────────────────────────────────────
describe("Kata 8 - Termostato", () => {
  let t;
  beforeEach(() => (t = new Termostato(20)));

  test("temperatura inicial 20", () => expect(t.temperatura).toBe(20));
  test("setter actualiza temperatura válida", () => {
    t.temperatura = 30;
    expect(t.temperatura).toBe(30);
  });
  test("setter rechaza temperatura > 100", () => {
    t.temperatura = 150;
    expect(t.temperatura).toBe(20); // sigue en el valor inicial
  });
  test("setter rechaza temperatura < 0", () => {
    t.temperatura = -5;
    expect(t.temperatura).toBe(20);
  });
});

// ─────────────────────────────────────────────
// Kata 9: Reloj
// ─────────────────────────────────────────────
describe("Kata 9 - Reloj", () => {
  test("avanzarMinuto incrementa minuto", () => {
    const r = new Reloj(10, 30);
    r.avanzarMinuto();
    expect(r.minuto).toBe(31);
    expect(r.hora).toBe(10);
  });
  test("minuto 59 → reinicia a 0 y avanza hora", () => {
    const r = new Reloj(10, 59);
    r.avanzarMinuto();
    expect(r.minuto).toBe(0);
    expect(r.hora).toBe(11);
  });
  test("hora 23 minuto 59 → reinicia a 00:00", () => {
    const r = new Reloj(23, 59);
    r.avanzarMinuto();
    expect(r.hora).toBe(0);
    expect(r.minuto).toBe(0);
  });
});

// ─────────────────────────────────────────────
// Kata 10: CajaFuerte
// ─────────────────────────────────────────────
describe("Kata 10 - CajaFuerte", () => {
  const caja = new CajaFuerte("1234", "El tesoro secreto");

  test("password correcta devuelve el secreto", () => {
    expect(caja.abrir("1234")).toBe("El tesoro secreto");
  });
  test("password incorrecta devuelve mensaje de error", () => {
    expect(caja.abrir("0000")).toBe("Contraseña incorrecta.");
  });
});

// ─────────────────────────────────────────────
// Katas 11-15: Pila (Stack)
// ─────────────────────────────────────────────
describe("Katas 11-15 - Pila (Stack)", () => {
  let pila;
  beforeEach(() => (pila = new Pila()));

  test("inicia vacía", () => expect(pila.estaVacia()).toBe(true));
  test("apilar agrega elementos", () => {
    pila.apilar("A");
    expect(pila.estaVacia()).toBe(false);
  });
  test("verTope devuelve el último sin sacarlo", () => {
    pila.apilar("A");
    pila.apilar("B");
    expect(pila.verTope()).toBe("B");
    expect(pila.estaVacia()).toBe(false);
  });
  test("desapilar saca el último (LIFO)", () => {
    pila.apilar("X");
    pila.apilar("Y");
    expect(pila.desapilar()).toBe("Y");
    expect(pila.verTope()).toBe("X");
  });
  test("desapilar en pila vacía devuelve undefined", () => {
    expect(pila.desapilar()).toBeUndefined();
  });
});

// ─────────────────────────────────────────────
// Katas 16-20: Cola (Queue)
// ─────────────────────────────────────────────
describe("Katas 16-20 - Cola (Queue)", () => {
  let cola;
  beforeEach(() => (cola = new Cola()));

  test("inicia con tamaño 0", () => expect(cola.tamano()).toBe(0));
  test("encolar agrega elementos", () => {
    cola.encolar("A");
    expect(cola.tamano()).toBe(1);
  });
  test("frente muestra el primero sin sacarlo", () => {
    cola.encolar("A");
    cola.encolar("B");
    expect(cola.frente()).toBe("A");
    expect(cola.tamano()).toBe(2);
  });
  test("desencolar saca el primero (FIFO)", () => {
    cola.encolar("A");
    cola.encolar("B");
    expect(cola.desencolar()).toBe("A");
    expect(cola.tamano()).toBe(1);
  });
  test("desencolar en cola vacía devuelve undefined", () => {
    expect(cola.desencolar()).toBeUndefined();
  });
});
