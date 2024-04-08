const { Router } = require("express");

const productsRouter = require("./products.routes.js");

const routes = Router();

routes.use("/products", productsRouter);

module.exports = routes;