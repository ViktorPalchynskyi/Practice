const fs = require('node:fs');
let i = 0;

const obj = {};

//macrotask queue: [req1, req2, req3, timer1, timer2, timer3]
function handler(req, res) {
    // res.write('Konnichiwa');
    // res.end(' Sekai!');
    // const now = Date.now();
    // while (Date.now() < now + 3000) {
        
    // }

    setTimeout(() => {
        res.end('hello ', i);
    }, 3000)

    const key = Date.now();
    obj[key] = '*'.repeat(100000).split('');
    i++;
    delete obj[key];

    // res.end(i.toString());
    // tick qeue[nextTick-1, nextTick-2, nextTick-3]
    // micro qeue[then-1, then-2,queueMicrotask-1]
    // macro qeue[fs.open]
    console.log('start'); //1

    new Promise((resolve, reject) => {
        console.log('new Promise');//2
        resolve();
    })
    .then(_ => {
        console.log('then-1');//6
        return new Promise(resolve => {
            process.nextTick(() => {
                console.log('nextTick-3');//8
            });
            resolve();
        });
    })
    .then(_ => console.log('then-2'))//7;

    fs.open(__filename, () => {
        console.log('fs.open');//9
        queueMicrotask(_ => {
            console.log('queueMicrotask-1');//10
        });
    });

    process.nextTick(() => {
        console.log('nextTick-1'); //4
        process.nextTick(() => {
            console.log('nextTick-2');//5
        })
    });

    console.log('end'); //3

}

module.exports = handler;