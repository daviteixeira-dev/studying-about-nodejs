// O process com o argv tras uma lista de argumentos que estão sendo
// rodadas no Node, onde a partir de cada espaço ele 
// guarda em uma posição da array, ou seja o process é um objeto que 
// nos fala qual o processo que está sendo rodado no Node.

// lista de argumentos
console.log(process.argv);

const firstName = process.argv[2];
const lastName = process.argv[3];

console.log(`Seu nome é ${firstName} ${lastName}`);
// utilizando o comando node process Davi Teixeira