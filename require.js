// require é uma maniera de chamar modulos que já são
// nativos do Node ou modulos que podemos criar e até 
// mesmo instalar no Node.

// Na função require, sempre temos que passar um argumento
const path = require('path');

// path é um modulo que já existe dentro do Node

console.log(path.basename(__filename));

// A função basename() pede um argumento de algum arquivo,
// fornecendo o nome base do arquivo.