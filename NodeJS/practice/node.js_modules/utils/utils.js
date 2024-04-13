const fs = require('node:fs');
const util = require('node:util');
const readFile = util.promisify(fs.readFile);

console.log(util.format('%s:%s', 'foo', 'bar', 'baz'));
console.log(util.inspect({ foo: { bar: { baz: [1, 2, 3] } } }, { depth: null }));

readFile('test.txt', 'utf-8')
    .then((text) => {
        console.log(text);
    })
    .catch((err) => console.log(err));

(async () => {
    const text = await readFile('test.txt', 'utf-8');
    console.log(text);
})();

console.log(util.types.isPromise(Promise.resolve()));
// console.log(util.types.isPromise(readFile()));

async function fn() {
    return 'hello world';
}

const callbackFunciton = util.callbackify(fn);

callbackFunciton((err, ret) => {
    if (err) throw err;

    console.log(ret);
});

const obsoleteFunction = util.deprecate(() => {
    console.log('This function will soon be removed');
}, 'obsoleteFucntion() is deprecated');

obsoleteFunction();
