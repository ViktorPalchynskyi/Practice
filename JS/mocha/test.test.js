// describe - what functionality do I testing?
describe('Testing pow function', () => {
    // in first argument of it() I describe a particular way of using the function
    

    describe('unexpected input', () => {
        it('for fractional n returns NaN', () => {
            assert.isNaN(pow(2, 0,2));
        });
    
        it('for negative n should return NaN', () => {
            assert.isNaN(pow(2, -1));
        });
    })

    describe('x to a power of 3', () => {
        // triggerd before start of a testing
        before(() => console.log('testing started'));
        // triggerd after start of a testing
        after(() => console.log('testing ended'))
        // triggerd before start of a sungle test in it() block 
        beforeEach(() => console.log('test started'));
        // triggerd after start of a sungle test in it() block 
        afterEach(() => console.log('test ended'));

        function makeTest(x) {
            const expeted = x * x * x;
    
            it(`${x} power 3`, () => {
                // if this block is false will return an error
                assert.equal(pow(x,3), expeted);
            });
        }
    
        for (let i = 0; i < 5; i++) {
            makeTest(i);
        }
    })
});