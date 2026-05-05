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
  constructor() {
    this.valor = 0;
  }

  incrementar() {
    this.valor += 1;
    return this.valor;
  }

  decrementar() {
    this.valor -= 1;
    return this.valor;
  }

  reset() {
    this.valor = 0;
    return this.valor;
  }
}
const contar = new Contador()
contar.incrementar()

// Kata 2: Calculadora
class Calculadora {
  sumar(a, b) {
    return a + b
  }

  restar(a, b) {
    return a - b
  }

  multiplicar(a, b) {
    return a * b
  }

  dividir(a, b) {
    if(a === 0 || b === 0) {
      throw new Error("No se puede dividir por cero.");
    } else {
      return a / b

    }
  }
}
const calculo = new Calculadora()
calculo.sumar(6, 4)

// Kata 3: Validador
class Validador {
  esEmail(valor) {
    if(valor.includes('@') && valor.includes('.')) {
      return true
    } else {
      return false
    }
  }

  esPasswordFuerte(valor) {
    if(valor.length >= 8) {
      if(/\d/.test(valor) && /[A-Z]/.test(valor) && /[a-z]/.test(valor) && /[^A-Za-z0-9]/.test(valor)) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  }
}
const gmail = new Validador()
const validador = new Validador();

let pass = "Abc123!@";
console.log(pass);
console.log(validador.esPasswordFuerte(pass));

// Kata 4: Conversor
class Conversor {
  celsiusAFahrenheit(celsius) {
    //F=C×9/5​+32
    const fahrenheit = celsius * 9/5 + 32
    return Number(fahrenheit.toFixed(2))
  }

  kmAMillas(km) {
    return km * 0.621371
  }
}
const convierto = new Conversor()
convierto.celsiusAFahrenheit(25)

// Kata 5: Generador
class Generador {
  numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
const aleatorio = new Generador()
aleatorio.numeroAleatorio(0, 27)
// ─────────────────────────────────────────────
// ENCAPSULAMIENTO Y PRIVACIDAD (Katas 6-10)
// ─────────────────────────────────────────────

// Kata 6 y 7: CuentaBancaria
class CuentaBancaria {
  #saldo;

  constructor(saldoInicial = 0) {
    this.#saldo = saldoInicial;
  }

  depositar(cantidad) {
    if(cantidad < 0) {
      throw new Error("Cantidad inválida.");
    } {
      this.#saldo += cantidad;

    }
  }

  retirar(cantidad) {
    if(cantidad > this.#saldo) {
      throw new Error("Saldo insuficiente.");
    } else {
      this.#saldo -= cantidad;

    }
  }

  get saldo() {
    return this.#saldo;
  }
}
const transaccion = new CuentaBancaria(100)
transaccion.depositar(60)

// Kata 8: Termostato
class Termostato {
  #temperatura;

  constructor(temperaturaInicial = 20) {
    this.#temperatura = temperaturaInicial
  }

  get temperatura() {
    return this.#temperatura
  }

  set temperatura(valor) {
    if(valor > 0 && valor < 100) {
        if(valor > this.#temperatura) {
          console.log('Encender refrigeracion') 
          for(let i = valor; i >= this.#temperatura; i--) {
            console.log([i])
          }
        } else if(valor < this.#temperatura){
          console.log('Encender calefaccion')
          for(let i = valor; i <= this.#temperatura; i++) {
            console.log([i])
          }     
        } else {
          console.log('La temperatura es la ideal')
        }
      this.#temperatura = valor
    }
  }
    
}
const temp = new Termostato()
temp.temperatura = 10

// Kata 9: Reloj
class Reloj {
  #hora;
  #minuto;

  constructor(hora = 0, minuto = 0) {
    this.#hora = hora
    this.#minuto = minuto
  }

  avanzarMinuto() {
    this.#minuto++;

    if (this.#minuto === 60) {
      this.#minuto = 0;
      this.#hora++;

      if (this.#hora === 24) {
        this.#hora = 0;
      }
    }
  }

  get hora() {
    return this.#hora
  }

  get minuto() {
    return this.#minuto
  }
}
const reloj = new Reloj(23, 59);

reloj.avanzarMinuto();


// Kata 10: CajaFuerte
class CajaFuerte { //probar password incorrecta
  #password;
  #secreto;

  constructor(password, secreto) {
    this.#password = password
    this.#secreto = secreto
  }

  abrir(intento) {

    if (intento === this.#password) {
      return this.#secreto;
    } else {
      return 'Contraseña incorrecta.'
    }
  }
}
const intentar = new CajaFuerte('1234', 'El tesoro secreto')
intentar.abrir('1234')
// ─────────────────────────────────────────────
// ESTRUCTURAS DE DATOS: PILA / STACK - LIFO (Katas 11-15)
// ─────────────────────────────────────────────

// Katas 11-15: Pila
class Pila {
  #items;

  constructor() {
    this.#items = []
  }

  apilar(elemento) {
    return this.#items.push(elemento)
  }
  
  desapilar() {
    return this.#items.pop()
  }

  verTope() {
    return this.#items[this.#items.length - 1]
  }

  estaVacia() {
    return this.#items.length === 0;
  }
}

// ─────────────────────────────────────────────
// ESTRUCTURAS DE DATOS: COLA / QUEUE - FIFO (Katas 16-20)
// ─────────────────────────────────────────────

// Katas 16-20: Cola
class Cola {
  #elementos;

  constructor() {
    this.#elementos = []
  }

  encolar(elemento) {
    return this.#elementos.push(elemento)
  }
  
  desencolar() {
    return this.#elementos.shift()

  }

  frente() {
    return this.#elementos[0]
  }

  tamano() {
    return this.#elementos.length
  }
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
