const {EventEmitter} = require('events')

const firstEmitter = new EventEmitter()

firstEmitter.emit('algo')