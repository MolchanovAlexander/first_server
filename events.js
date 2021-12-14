const Emitter = require('events')

const emitter = new Emitter()

emitter.on('message', (data, second, third) => {
    console.log('you send a message' + data);
    console.log('second argument' + second);
})

const MESSAGE = process.env.message || '';
if (MESSAGE) {
    emitter.emit('message', MESSAGE, 123)
} else {
    emitter.emit('message', ' nothing send')
}