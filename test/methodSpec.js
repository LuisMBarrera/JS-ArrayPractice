const assert = require('chai').assert;
const flatten = require('../lib/Methods').flatten;

describe('Ex15', function() {
    it('method should return an array with no arrays inside', function() {
        let testedArray = [ 1, 2, 3, [ 4, {name: 'pablo', age: 16 }, [ 6, 7, 'gumshoo' ], 9, 10, 11, 'parsimon', 13, 14 ], 15, 16].flatten();

        assert.isArray(testedArray);
        for (let i = 0; i < testedArray.length; i += 1) {
            assert.isNotArray(testedArray[i]);
        }
    });
});