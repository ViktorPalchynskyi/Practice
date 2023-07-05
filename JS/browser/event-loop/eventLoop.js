let num = 0;
const start = Date.now();

function count() {
    for (let j = 0; j < 1e9; j++) {
        num++;
    }
    console.log(`Done in ${Date.now() - start} ms`);
}

// count();

function count2() {
    if (num < 1e9 - 1e6) setTimeout(count2);
 
    do {
        num++;
    } while (num % 1e6 !== 0);
    if (num === 1e9) {
        console.log(`Done in ${Date.now() - start} ms`);
    }
}

count2();