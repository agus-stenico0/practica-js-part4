# 🥋 Tarea: Katas de POO

Aquí vas a practicar Programación Orientada a Objetos implementando 40 clases desde cero. Tienes los tests escritos — tu misión es hacer que **todos pasen en verde**.

---

## 🚀 Cómo empezar

```bash
# 1. Instalar dependencias (solo la primera vez)
npm install

# 2. Correr los tests
npm test

# 3. Modo watch (re-corre al guardar)
npm run test:watch
```

---

## 📁 Archivos

| Archivo                     | Descripción                                     |
| --------------------------- | ----------------------------------------------- |
| `01-clases.js`              | Tus implementaciones de las Katas 1–20          |
| `02-logica_negocio.js`      | Tus implementaciones de las Katas 21–40         |
| `01-clases.test.js`         | Tests automáticos de las Katas 1–20 (no tocar)  |
| `02-logica_negocio.test.js` | Tests automáticos de las Katas 21–40 (no tocar) |

---

## 📝 Las Katas

### Archivo 1 — `01-clases.js`

#### Fundamentos (1–5)

1. `class Contador` — `incrementar()`, `decrementar()`, `reset()`
2. `class Calculadora` — `sumar()`, `restar()`, `multiplicar()`, `dividir()`
3. `class Validador` — `esEmail()`, `esPasswordFuerte()`
4. `class Conversor` — `celsiusAFahrenheit()`, `kmAMillas()`
5. `class Generador` — `numeroAleatorio(min, max)`

#### Encapsulamiento (6–10)

6. `class CuentaBancaria` — propiedad privada `#saldo`, método `depositar()`
7. `CuentaBancaria` extendido — `retirar()` que valide saldo suficiente
8. `class Termostato` — setter que rechace valores fuera de 0–100
9. `class Reloj` — `avanzarMinuto()` con reinicio circular
10. `class CajaFuerte` — `abrir(intento)` que devuelva el secreto solo con la clave correcta

#### Pila / Stack - LIFO (11–15)

11. `class Pila` — inicializar con `#items = []`
12. `apilar(elemento)` — agregar al final
13. `desapilar()` — sacar el último (`pop`)
14. `verTope()` — ver el último sin sacarlo
15. `estaVacia()` — `true` si no hay elementos

#### Cola / Queue - FIFO (16–20)

16. `class Cola` — inicializar con `#elementos = []`
17. `encolar(elemento)` — agregar al final
18. `desencolar()` — sacar el primero (`shift`)
19. `frente()` — ver el primero sin sacarlo
20. `tamano()` — cantidad de elementos

---

### Archivo 2 — `02-logica_negocio.js`

#### Gestión de Usuarios (21–25)

21. `class Usuario` — `nombre`, `email`, `activo`
22. `class Admin` — hereda de `Usuario`, agrega `banearUsuario()`
23. `class Suscripcion` — `renovar(diasExtra)`
24. `class Perfil` — `actualizarDatos()` fusionando objetos
25. `class Auth` — `registrar()` y `login()` con validación

#### RPG (26–30)

26. `class Personaje` — `nombre`, `hp`, `ataque`
27. `class Enemigo` — loot privado, `morir()` lo suelta
28. Combate — `atacar(objetivo)` reduce HP
29. `class Inventario` — `agarrarItem()`, `usarItem()`
30. `class Pocion` — `usar()` que respete el HP máximo

#### E-Commerce (31–35)

31. `class Producto` — `id`, `nombre`, `precio`, `stock`
32. `vender(cantidad)` — reduce stock o lanza error
33. `class Carrito` — `agregar(producto)`
34. `calcularTotal()` — usando `.reduce()`
35. `aplicarCupon(codigo)` — descuento del 20%

#### Restaurante (36–40)

36. `class Mesa` — `numero`, `capacidad`, `ocupada`
37. `class Pedido` — `agregarPlato(nombre, precio)`
38. `cerrarMesa()` — total + 10% propina
39. `class Restaurante` — `buscarMesaLibre(comensales)`
40. `recaudacionDelDia()` — suma de todas las cuentas

---

## ✅ Objetivo

```
Test Suites: 2 passed, 2 total
Tests:       75 passed, 75 total
```
