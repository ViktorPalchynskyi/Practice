const sum = (n) => n === 1 ? 1 : n + sum(n - 1);

// console.log(sum(100));

const factorial = (n) => n === 1 ? 1 : n * factorial(n - 1);

// console.log(factorial(5));

const fib = (n) => n <= 1 ? n : fib(n - 1) + fib(n - 2);

console.log(fib(7))