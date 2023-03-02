const express = require('express')

const app = express()

app.listen('3000')

//middleware
app.use(express.json())

// parametros na requisição são formas da gente passar para dentro do nosso código
// informações que não estavam la antes.

// As tres principais formas abaixo:

app.route('/').get((req,res)=> res.send(req.query.name))

app.route('/').put((req,res) => res.send(req.body.author))

app.route('/:parametro').get((req,res) => res.send(req.params.parametro))

