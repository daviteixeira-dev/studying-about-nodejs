const { Router } = require("express");

const productsRouter = Router();

productsRouter.post("/", (request, response) => {

    const { name, email, password } = request.body;

    response.send(`Usuário: ${name} - Email: ${email} e a senha ${password}.`)
});

module.exports = productsRouter;