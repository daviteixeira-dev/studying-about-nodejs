const { Router } = require("express");

const ProductsController = require("../controllers/ProductsController");

const productsRouter = Router();

const productsController = new ProductsController();

productsRouter.post("/", productsController.create);

module.exports = productsRouter;