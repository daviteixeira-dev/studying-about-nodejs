
/*
Async/Await

- Maneira de escrever promises
- Syntactic Sugar (Maneira mais elegante de se escrever e implementar uma promessa)

*/

const promessa = new Promise(function (resolve, reject){
    return resolve('ok')
})

// Estrutura usando async/await

async function start(){
    try {
        const result = await promessa
        console.log(result)
    }catch(error){
        console.log(error)
    }finally{
        console.log('rodar sempre')
    }
}

start()


// promessa
//     .then(function(response){
//         console.log(response)
//     })
//     .catch(function(error){
//         console.log(error)
//     })
//     .finally(function(){
//         console.log('Sempre irei executar')
//     })