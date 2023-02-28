const express = require('express')

const app = express()

app.listen('3000')

app.route('/').get((request, response) => response.send("Olá!"))
app.route('/sobre').get((request, response) => response.send("Este é um sobre da página!"))

// middleware - ponte entre as requisições
app.use(express.json()) // transforma tudo em json

// app.route('/').post((req, res) => console.log(req.body))
app.route('/').post((req, res) => res.send(req.body))