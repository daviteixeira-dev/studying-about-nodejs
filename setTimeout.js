// setTimeout vai rodar uma função depois de X milissegundos

const timeOut = 3000;

const finished = () => console.log('done!');

setTimeout(finished, timeOut); // função callback, essa aqui é chamada depois de 3 segundos.

console.log('Mostrar!'); // é mostrada antes da função setTimeout por meio do assíncronismo.

// setTimeout(function, delay)

setTimeout(function(){
    console.log('depois de 1s')
}, 1000);

/*
    A função de argumento do setTimeout é uma 
    callback, ela vai executar depois de um 
    certo tempo. No caso do exemplo acima, 
    a função vai ser executada depois de 1000ms 
    que é o mesmo que 1s.
*/