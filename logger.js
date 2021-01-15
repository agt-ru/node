const EventEmitter = require('events');
const uuid = require('uuid');

class Logger extends EventEmitter {
  log(msg) {
    // call event
    // this.emit(event_name, event_object);
    this.emit('message', {id: uuid.v4(), msg});
  };
};

// module.exports = Logger;

const logger = new Logger();

// add event listener
// logger.on(event_name, callback(event_object));
logger.on('message', data => console.log('Called Listener', data));

logger.log('Hello World');
logger.log('Hi');
logger.log('Hello');
