/* 
    Dentro do javascript, temos uma API chamada fetch(), sendo ela
    uma função que recebe como argumento a url que queremos fazer o fatch (buscar ou pegar).
    Assim o facth gera toda uma estrutura de Promise entro dele.
*/

// Podemos transformar as resposas em json com o .json()

// fetch("https://api.github.com/users/daviteixeira-btm").then((response) => {
//   response.json().then((data) => {
//     fetch(data.repos_url).then((res) => res.json().then((d) => console.log(d)));
//   });
// });

fetch("https://api.github.com/users/daviteixeira-btm")
    .then((response) => response.json())
    .then( data => fetch(data.repos_url))
    .then ( res => res.json())
    .then ( d = console.log(d))
    .catch( err => console.log(err))
    .finally(() => console.log('Busca finalizada!'))

// Ao fazermos dessa forma, utilizamos a estrategia de encadeamento de chamada de promessas.