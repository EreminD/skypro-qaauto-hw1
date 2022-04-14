const chai = require('chai')

describe("First tests", function (){
    before('before hook', () => {
        console.log("Before Hook");
    })

    beforeEach('before each hook', () => {
        console.log("Before Each Hook");
    })

    afterEach('after each hook', () => {
        console.log("After Each Hook");
    })

    after('After hook', () => {
        console.log("After hook");
    }) 

    it('Test 1', function (){
        chai.expect(1).to.be.equal(1)
    })

    it('Test 2', function (){
        chai.expect(10).eql(20)
    })

})