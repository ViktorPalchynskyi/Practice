const fs = require('node:fs');

const steram = fs.createWriteStream('hello.txt'); 

steram.write('Ohayou, Sekai!');
steram.on('error', error => console.error(error));
steram.end('Boku wa Bikutoru desu!');