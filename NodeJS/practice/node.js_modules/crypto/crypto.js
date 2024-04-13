const crypto = require('node:crypto');
const hash = crypto.createHash('sha256');
const verify = crypto.createVerify('SHA256');
// const deffieHellman = crypto.createDiffieHellman(2048);
// const publicKey = deffieHellman.generateKeys('hex');

// hash.update('some data to hash');
// verify.update('some data to sign');
// console.log(publicKey);

// console.log(hash.digest('hex'));/
// console.log(verify.verify(hash, '', 'hex'));

crypto.randomBytes(256, (err, buffer) => {
    if (err) throw err;

    console.log('random', buffer.toString('hex'));
});
