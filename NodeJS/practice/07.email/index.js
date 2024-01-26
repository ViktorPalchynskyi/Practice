const pug = require('pug');

console.log(pug.renderFile('hello.pug', {
    user: { name: 'Vano', age: 15 },
    count: 10000,
    pretty: true,
}));