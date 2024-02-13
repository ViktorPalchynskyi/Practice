const app = require('../app');
const chai = require('chai');
const axios = require('axios');
let expect = chai.expect;
const request = axios.create({
    baseURL: 'http://localhost:3000/api/v1',
    validateStatus: () => true,
});

describe('Testing app.js', () => {
    let server;

    before((done) => {
        server = app.listen(3000, done);
    });

    after(() => {
        server.close();
    });

    it('Should return 200 OK', async () => {
        const res = await request({
            method: 'get',
        });
        console.log(res.data);

        expect(res.status).to.equal(200);
        expect(res.data).to.eql('testing server');
    });
});
