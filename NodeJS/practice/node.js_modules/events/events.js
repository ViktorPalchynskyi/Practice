const EventEmmiter = require('node:events');

class MyEmitter extends EventEmmiter {}

const myEmitter = new MyEmitter();

const eventListener = () => {
    console.log('Event!');
};

myEmitter.on('event', eventListener);

myEmitter.on('event2', (some, tmp) => {
    console.log(`Event2! ${some.one} ${tmp.two}`);
});

myEmitter.once('one', () => console.log('ONE!'));

myEmitter.emit('event');
myEmitter.emit('event2', { one: 'jaja' }, { two: 'vvv' });
// myEmitter.removeAllListeners();
myEmitter.removeListener('event', eventListener);
myEmitter.emit('one');
myEmitter.emit('one');
myEmitter.emit('event');
