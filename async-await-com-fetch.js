// fetch('https://api.github.com/users/daviteixeira-btm')
//     .then(response => response.json())
//     .then(data => fetch(data.repos_url))
//     .then(res => res.json())
//     .then(d => console.log(d))
//     .catch(err => console.log(err))

// Transformamos o codigo que antes era em cadeamento em uma ideia mais sincrona
async function start(){
    try {
        //começamos colocando a espera pelo fatch
        const response = await fetch('https://api.github.com/users/daviteixeira-btm')
        // espero a trasformação da resposta em um objeto json
        const user = await response.json()
        // pegamos a lista de repositorios
        const reposResponse = await fetch(user.repos_url)
        // transformamos em json
        const repos = await reposResponse.json()
        console.log(repos)
    } catch (error) {
        console.log(error)
    }
}

// a função assincrona devolve uma promessa

start();

// ou, podemos colocar o catch no executar da função
// start().catch(error => console.log(error))

// ou, deixando mais limpo

async function start2(){
    const url = "https://api.github.com/users/daviteixeira-btm"
    const user = await fetch(url).then(response => response.json())
    const userRepos = await fetch(user.repos_url).then(response => response.json());
    console.log(userRepos);
}

start2().catch(error => console.log(error));