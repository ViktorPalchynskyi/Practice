// unit test

const ReplacerStream = require('../raplacer/replacer');
const assert = require('node:assert');
const sinon = require('sinon');

describe('ReplacerStream tests', () => {
    it('should replace `aplle` with `avacado`', (done) => {
        const replacer = new ReplacerStream({
            from: 'apple',
            to: 'avacado'
        });

        const onData = sinon.spy();

        replacer.on('data', onData);
  
        replacer.on('end', () => {
            assert.strictEqual(onData.callCount, 2);
            assert.strictEqual(
                onData.getCall(0).args[0].toString(), 
                'avacado watermelon orange banana',
                'first string'
            );
            assert.strictEqual(
                onData.getCall(1).args[0].toString(), 
                'orange coconuts avacado melon',
                'second string'
            );

            done();
        })

        replacer.write('apple watermelon orange banana');
        replacer.write('orange coconuts apple melon');
        replacer.end();

        
    });
});