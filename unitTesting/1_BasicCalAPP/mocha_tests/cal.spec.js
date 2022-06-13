const cal = require('../cal');
const assert = require('assert');

describe("Unit Testing Cal functions", () => {
    it("Add function test", () => {
        assert.equal(cal.add(2, 3), 5, '2 + 3 is not equal to 5');
    })

    it("Subtract function test", () => {
        assert.equal(cal.substract(2, 3), -1);
    })

    it("Multiply function test", () => {
        assert.equal(cal.multiply(2, 3), 6);
    })

    it("Divide function test", () => {
        assert.equal(cal.divide(2, 2), 1);
    })
});