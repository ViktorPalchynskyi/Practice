module.exports = function getTestingTools(baseURL = 'http://localhost:3000/api/v1') {
    const axios = require('axios');
    const chai = require('chai');
    const expect = chai.expect;
    const request = axios.create({
        responseType: 'json',
        validateStatus: () => true,
        baseURL,
    });

    return {
        axios,
        chai,
        expect,
        request,
    };
};
