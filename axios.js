import axios from "axios";

// O axios devolve uma promessa pendente.

// bagunçado ...
// axios
//     .get("https://api.github.com/users/daviteixeira-btm")
//     .then(response => { 
//         const user = response.data;

//         axios.get(user.repos_url)
//             .then(repos => console.log(repos.data))
//             .catch(error => console.log(error))
//     })
//     .catch(error => console.log(error))

axios.get("https://api.github.com/users/daviteixeira-btm")
    .then(response => axios.get(response.data.repos_url))
    .then(repos => console.log(repos.data))
    .catch(error => console.log(error))

// Encadeamento de promessas com o axios