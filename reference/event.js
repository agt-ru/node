const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on("some_event", () => console.log("Event Fired"));

myEmitter.emit("some_event");
myEmitter.emit("some_event");
myEmitter.emit("some_event");
myEmitter.emit("some_event");
