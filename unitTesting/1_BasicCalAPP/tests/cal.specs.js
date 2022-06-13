const cal = require('./../cal');

//Passed Test
if (cal.add(2, 3) == 5) {
    console.log('test passed')
}
else {
    throw new Error('Expected 2 + 3 to equal 5')
}
//Failed Test
if (cal.divide(18, 3) == 6) {
    console.log('test passed')
}
else {
    throw new Error('Expected 18 / 3 to equal 6')
}

//Using assert Module
const assert = require('assert');
assert.equal(cal.multiply(2,3), 6, '2 * 3 is not equal to 6');

assert.equal(cal.substract(2,3), -2, '2 - 3 is not equal to -1');

