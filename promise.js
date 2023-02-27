let aceitar = true;

console.log('pedir uber');

const promessa = new Promise((resolve, reject) => {
    
    if(aceitar){
        return resolve('carro chegou!')
    }

    return reject('pedido negado!')
});

console.log('aguardando...')

// Promessa é rejeitada e usamos o catch() para capturar o erro
// Usamos o finally() para finalizar a promessa, seja dando certo ou errado.

promessa
    .then(result => console.log(result))
    .catch(erro => console.log(erro))
    .finally(() => console.log('finalizado'));
