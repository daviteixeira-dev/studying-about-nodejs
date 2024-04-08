const { Router } = require("express");

const ProductsController = require("../controllers/ProductsController");

const productsRouter = Router();

function myMiddleware(request, response, next){
    console.log("Você passou pelo Middleware!");

    if(!request.body.isAdmin){
        return response.json({ message: "user unauthorized!"});
    }

    next();
};

const productsController = new ProductsController();

// productsController.use(myMiddleware); -> Desta forma, ele é usado em todas as rotas

// Em uma rota expecifica.
productsRouter.post("/", myMiddleware, productsController.create);

module.exports = productsRouter;