function fibonacciComun(n) {
  if (n <= 1) return n;

  const secuencia = [0, 1];

  for (let i = 2; i <= n; i++) {
    // i = 2; secuencia[2] = secuencia[1] + secuencia[0] = 1
    secuencia[i] = secuencia[i - 1] + secuencia[i - 2];
  }
  return secuencia[n];
}

console.log(`La secuencia de 6 es : ${fibonacciComun(6)}`); // 8

function fibonacciRecursivo(n) {
  if (n <= 1) return n;

  return fibonacciRecursivo(n - 1) + fibonacciRecursivo(n - 2);
}

console.log(`La secuencia recursiva de 6 es : ${fibonacciRecursivo(6)}`); // 8
