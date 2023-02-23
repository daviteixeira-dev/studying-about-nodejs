const { inherits } = require('util'); // puxar do módulo util a função inherits, onde ela herda as funcionalidades do EventEmitter 

const { EventEmitter } = require('events');

function Character(name){ // quando executar essa função, ela vai traser as opções do EventEmitter
    this.name = name
}

inherits(Character, EventEmitter);

const chapolin = new Character('Chapolin');

chapolin.on('help', () => console.log(`Eu o ${chapolin.name} colorado!`))

console.log('Oh! E agora, quem poderá me defender?');
chapolin.emit('help');