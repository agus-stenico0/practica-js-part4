// ============================================================
// 01-clases.js — 20 Katas de Estructuras y Lógica Pura
// Implementa cada clase para que los tests pasen.
// Ejecuta: npm test
// ============================================================

// ─────────────────────────────────────────────
// FUNDAMENTOS DE CLASE (Katas 1-5)
// ─────────────────────────────────────────────

// Kata 1: Contador
class Contador {
  constructor() {}

  incrementar() {}

  decrementar() {}

  reset() {}
}

// Kata 2: Calculadora
class Calculadora {
  sumar(a, b) {}

  restar(a, b) {}

  multiplicar(a, b) {}

  dividir(a, b) {}
}

// Kata 3: Validador
class Validador {
  esEmail(valor) {}

  esPasswordFuerte(valor) {}
}

// Kata 4: Conversor
class Conversor {
  celsiusAFahrenheit(celsius) {}

  kmAMillas(km) {}
}

// Kata 5: Generador
class Generador {
  numeroAleatorio(min, max) {}
}

// ─────────────────────────────────────────────
// ENCAPSULAMIENTO Y PRIVACIDAD (Katas 6-10)
// ─────────────────────────────────────────────

// Kata 6 y 7: CuentaBancaria
class CuentaBancaria {
  #saldo;

  constructor(saldoInicial = 0) {}

  depositar(cantidad) {}

  retirar(cantidad) {}

  get saldo() {}
}

// Kata 8: Termostato
class Termostato {
  #temperatura;

  constructor(temperaturaInicial = 20) {}

  get temperatura() {}

  set temperatura(valor) {}
}

// Kata 9: Reloj
class Reloj {
  #hora;
  #minuto;

  constructor(hora = 0, minuto = 0) {}

  avanzarMinuto() {}

  get hora() {}

  get minuto() {}
}

// Kata 10: CajaFuerte
class CajaFuerte {
  #password;
  #secreto;

  constructor(password, secreto) {}

  abrir(intento) {}
}

// ─────────────────────────────────────────────
// ESTRUCTURAS DE DATOS: PILA / STACK - LIFO (Katas 11-15)
// ─────────────────────────────────────────────

// Katas 11-15: Pila
class Pila {
  #items;

  constructor() {}

  apilar(elemento) {}

  desapilar() {}

  verTope() {}

  estaVacia() {}
}

// ─────────────────────────────────────────────
// ESTRUCTURAS DE DATOS: COLA / QUEUE - FIFO (Katas 16-20)
// ─────────────────────────────────────────────

// Katas 16-20: Cola
class Cola {
  #elementos;

  constructor() {}

  encolar(elemento) {}

  desencolar() {}

  frente() {}

  tamano() {}
}

module.exports = {
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
};
