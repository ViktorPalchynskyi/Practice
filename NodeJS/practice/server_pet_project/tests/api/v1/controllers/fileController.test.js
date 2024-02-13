const app = require('@app');
const { connctDB } = require('@config');
const { addExtentionToFileName, getFilePath } = require('@utils/helpers');
const axios = require('axios');
const chai = require('chai');
const fs = require('node:fs');
const util = require('node:util');
const expect = chai.expect;
const request = axios.create({
    responseType: 'json',
    validateStatus: () => true,
    baseURL: 'http://localhost:3000/api/v1',
});

const writeFile = util.promisify(fs.writeFile);
const unlink = util.promisify(fs.unlink);

describe('Tesing fileController.js', () => {
    let server;
    const filePath = getFilePath(addExtentionToFileName('mockFile'));
    before((done) => {
        writeFile(filePath, 'test');
        server = app.listen(3000, done);
    });

    after(() => {
        server.close();
        unlink(filePath);
    });

    describe('Testing getFile function', () => {
        it('must return a file content', async () => {
            const res = await request({
                method: 'get',
                url: '/files',
                params: {
                    fileName: 'mockFile',
                },
            });

            expect(res.status, 'response status 200').to.equal(200);
            expect(res.data, 'response contains "test"').to.equal('test');
        });

        it('must return error if a file name isn`t provided', async () => {
            const res = await request({
                method: 'get',
                url: '/files',
                params: {
                    fileName: '',
                },
            });

            expect(res.status, 'response status 400').to.equal(400);
            expect(res.data).to.eql({ error: 'File name is required.' });
        });

        it('must return error if a file isn`t exist', async () => {
            const res = await request({
                method: 'get',
                url: '/files',
                params: {
                    fileName: 'test',
                },
            });

            expect(res.status, 'response status 409').to.equal(409);
            expect(res.data).to.eql({ error: 'File is not exist.' });
        });
    });

    describe('Testing createFile function', () => {
        it('must return 200 status', async () => {
            const res = await request({
                method: 'post',
                url: '/files/create',
                data: {
                    fileName: 'test',
                    text: 'test text',
                },
            });

            expect(res.status, 'response status 200').to.equal(200);
            expect(res.data).to.eql({ message: 'File was created.' });
        });

        it('must return error if a file already exist', async () => {
            const res = await request({
                method: 'post',
                url: '/files/create',
                data: {
                    fileName: 'mockFile',
                    text: 'test text',
                },
            });

            expect(res.status, 'response status 409').to.equal(409);
            expect(res.data).to.eql({ error: 'File already exist' });
        });

        it('must return error if a file name isn`t provided', async () => {
            const res = await request({
                method: 'post',
                url: '/files/create',
                data: {
                    fileName: '',
                },
            });

            expect(res.status, 'response status 400').to.equal(400);
            expect(res.data).to.eql({ error: 'File name is required.' });
        });
    });
});
