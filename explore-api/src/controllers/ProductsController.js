class ProductsController {
    /** Padrão para um Controller
     * 
     * index - GET para listar varios registros.
     * show - GET para exibir um registro expecifico.
     * create - POST para criar um registro.
     * update - PUT para atualizar um registro.
     * delete - DELETE para remover um registro.
     */

    create(request, response){
        const { name, email, password } = request.body;
        response.send(`Usuário: ${name} - Email: ${email} e a senha ${password}.`);
    }
}

module.exports = ProductsController;