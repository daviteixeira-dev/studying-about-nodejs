// Funções aceitam qualquer tipo de dado como argumento

function imprimirDado(dado){
    console.log(dado())
}

/*
    Antes de entender o conceito de Callback no 
    JavaScript, primeiro precisamos entender 
    que funções aceitam qualquer tipo de dado 
    como argumento, então no JavaScript é 
    possível passar qualquer tipo de dado 
    em uma função.
*/

// imprimirDado(1)
// imprimirDado('texto')
// imprimirDado(true)
// imprimirDado({ nome: João })
// imprimirDado([1, 2, 3])

imprimirDado(function(){
    return 'Olá mundo'
});

/*
    Callback (chamar de volta) é uma função que 
    é passada como argumento de outra função e 
    depois de algum tempo ela é chamada de 
    volta.
*/