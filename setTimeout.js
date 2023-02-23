// setTimeout vai rodar uma função depois de X milissegundos

const timeOut = 3000;

const finished = () => console.log('done!');

setTimeout(finished, timeOut); // função callback, essa aqui é chamada depois de 3 segundos.

console.log('Mostrar!'); // é mostrada antes da função setTimeout por meio do assíncronismo.