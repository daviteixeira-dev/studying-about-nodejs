const express = require('express')

const app = express()

app.listen('3000')

app.route('/').get((request, response) => response.send("Olá!"))
app.route('/sobre').get((request, response) => response.send("Este é um sobre da página!"))