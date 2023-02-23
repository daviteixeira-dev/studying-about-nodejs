const { EventEmitter } = require('events');

const ev = new EventEmitter();

ev.on('saySomething', (message) => {
    console.log('Eu ouvi você: ', message);
}) // ouvindo a emição de eventos

ev.emit('saySomething', "Davi") // emitir evento