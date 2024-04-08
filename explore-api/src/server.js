const express = require("express");

const app = express();

app.use(express.json());

app.get("/message/:id/:user", (request, response) => {

    const { id, user } = request.params;

    response.send(`
    Messagem ID: ${id}. 
    For the User: ${user}.
    `);
});

app.get("/users", (request, response) => {

    const { page, limit } = request.query;

    // Query Params = https://address.com/recurso?page=2&limit=4

    response.send(`Página: ${page}. Limite: ${limit}.`);
});

app.post("/products", (request, response) => {

    const { name, email, password } = request.body;

    response.send(`Usuário: ${name} - Email: ${email} e a senha ${password}.`)
});

const PORT = 3333;

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));