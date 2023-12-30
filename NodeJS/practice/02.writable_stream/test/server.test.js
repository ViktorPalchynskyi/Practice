// functional test

/**
 * 1. launch server
 * 2. make request
 * 3. check body
 * 4. terminate server
 */
const server = require('../raplacer/server');
const assert = require('node:assert');


describe('Server tests', () => {
    // hook starts before actual test. Its async, callback done() must be passed 
    before('lanch server', async () => {
        console.log('lanch server');
        server.listen(3030);
    });
    // hook ends as a test ends.Async
    after('close server', async () => {
        server.close();
    });
    
    it('replace `apple` with `avacado`', async () => {
        const response = await fetch('http://localhost:3030?from=apple&to=avacado', {
            method: 'POST',
            body: 'apple watermelon orange banana apple',
        }).then(res => res.text());

        assert.strictEqual(response, 'avacado watermelon orange banana avacado')
    });

    it('should return error if parameters are missing', async () => {
        const response = await fetch('http://localhost:3030', {
            method: 'POST',
            body: 'apple watermelon orange banana apple',
        }).then(res => res.text());

        assert.strictEqual(response, 'bad request: `from` and `to` are mandatory')
    });
});