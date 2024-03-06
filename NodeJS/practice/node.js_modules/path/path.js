const path = require('node:path');
const filePath = path.join(__dirname, 'dir', 'text.txt');
console.log(path.join('/foo/', 'bar', 'baz/asdf', 'quue'));
const p = '///test//../test//file/..///file.txt';
// console.log(path.join(__dirname, 'dir', 'text.txt'));
console.log(path.resolve('foo/bar', '/tmp/file/', '...', 'a/../subfile'));
console.log(path.parse(__dirname, 'dir', 'text.txt'));

console.log(path.basename(filePath));
console.log(path.dirname(filePath));
console.log(path.extname(filePath));
console.log(
    path.format({
        root: '/',
        dir: '/home/viktor/IT/Practice/NodeJS/practice/node.js_modules',
        base: 'path',
        ext: '',
        name: 'path',
    })
);

console.log(path.isAbsolute(filePath));
console.log(path.normalize(p));

const from = '/data/orandea/test/aaa';
const to = '/data/orandea/impl/bbb';

console.log(path.relative(from, to));

const pathWin = path.toNamespacedPath('C:\\Windows\\System32');

console.log(pathWin);

console.log(`Разделитель переменных PATH в этой ОС: '${path.delimiter}'`);