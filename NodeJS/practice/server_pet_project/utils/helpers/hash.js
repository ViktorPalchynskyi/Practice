const crypto = require('node:crypto');
const config = require('../../config/config');

function generatePassword(salt, password) {
    const { iterations, length, digest } = config.crypto;

    return new Promise((resolve, reject) => {
        crypto.pbkdf2(password, salt, iterations, length, digest, (err, key) => {
            if (err) reject(err);
            resolve(key.toString('hex'));
        });
    });
}

function generateSalt() {
    const { length } = config.crypto;

    return new Promise((resolve, reject) => {
        crypto.randomBytes(length, (err, buffer) => {
            if (err) reject(err);
            resolve(buffer.toString('hex'));
        });
    });
}

module.exports = {
    generatePassword,
    generateSalt,
};
