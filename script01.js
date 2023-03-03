//2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores 
//(exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, 
//ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

function fibonacci(max_value) {
  let fib_sequence = [0, 1]; // comeca com os dois primeiros valores 
  while (fib_sequence[fib_sequence.length -1] < max_value) {

    let next_fib = fib_sequence.slice(-2).reduce((a,b) => a + b);
    fib_sequence.push(next_fib);
  }
  return fib_sequence;
} 
// função para verificar se um número pertence à sequência de Fibonacci
function isFibonacci(num) {
  let fib_sequence = fibonacci(num); // calcula a sequência de Fibonacci até o número informado
  return fib_sequence.includes(num); // verifica se o número está presente na sequência
}
// exemplo de uso
let num = 34;
if (isFibonacci(num)) {
  console.log(num + " pertence à sequência de Fibonacci!");
} else {
  console.log(num + " não pertence à sequência de Fibonacci.");
}