const app = require('@app');
const { getTestingTools } = require('@utils/helpers');
const { expect, request } = getTestingTools();

describe('Testing app.js', () => {
    let server;

    before((done) => {
        server = app.listen(3000, done);
    });

    after(() => {
        server.close();
    });

    it('should return 200 OK', async () => {
        const res = await request({
            method: 'get',
        });

        expect(res.status).to.equal(200);
        expect(res.data).to.eql('testing server');
    });
});
