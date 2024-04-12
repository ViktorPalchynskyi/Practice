const { fork } = require('node:child_process');
const child = fork('childProcess.js');

child.on('message', (message) => {
    console.log('Recived message from main process: ', message);
});

child.send({ hello: 'world' });
