import axios from 'axios'

// Executar promessas em concorrência

/*
    Ao mesmo tempo que uma promessa está sendo 
    executada, uma outra também esteja sendo executada.

    Assim teremos o agrupamento das duas executando ao 
    mesmo tempo e capturando a resposta de volta.
*/

Promise.all([
    axios.get('https://api.github.com/users/daviteixeira-btm'),
    axios.get('https://api.github.com/users/daviteixeira-btm/repos')
]).then(responses => { // vai gerar uma array de respostas
    console.log(responses[0].data.login)
    console.log(responses[1].data.length)
}).catch(err => console.log(err.message))