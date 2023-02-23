// clearInterval irá cancelar um setInterval registrado

const timeOut = 3000;

const checking = () => console.log('checking!');

let interval = setInterval(checking, timeOut);

// clearInterval(interval); // cancela imediatamente

setTimeout(() => clearInterval(interval), 3000); // depois de três segundo o intervalo é encerrado.
