import axios from 'axios';

axios.get('https://api.github.com/users/daviteixeira-btm')
    .then(res => {
        console.log(res.data)
    })