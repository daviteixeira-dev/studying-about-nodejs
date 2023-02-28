const express = require('express')

const app = express()

app.listen('3000')

app.route('/').get((request, response) => response.send("Olá!"))
app.route('/sobre').get((request, response) => response.send("Este é um sobre da página!"))

// middleware - ponte entre as requisições
app.use(express.json()) // transforma tudo em json

// app.route('/').post((req, res) => console.log(req.body))
app.route('/').post((req, res) => res.send(req.body))

// PUT - serve para editar

let author = "Davi"

app.route('/put').get((req, res) => res.send(author))

app.route('/put').put((req, res) => {
    author = req.body.author //dessa forma, guardamos apenas o nome do autor, em vez da estrutura json inteira.
    res.send(author)
})

app.route('/:identificador').delete((req, res) => {
    res.send(req.params.identificador) //params para se passar uma variavel, normalmente o id
})