const assert = require('chai').assert;
const flatten = require('../lib/Methods').flatten;
const each = require('../lib/Methods').each;

describe('Ex1', function() {
    it('method should return a line for each object in the array showing name and age of each person', function() {
        let testingResult = '\n1.- pedro is 19 years old\n2.- juan is 15 years old\n3.- pablo is 16 years old\n4.- pancho is 20 years old\n5.- topo is 18 years old\n';
        let funcResult = '';
        let people = [ 
            {name: 'pedro', age: 19 },
            {name: 'juan', age: 15 },
            {name: 'pablo', age: 16 },
            {name: 'pancho', age: 20 },
            {name: 'topo', age: 18 }
            ],
            iterateThem = function (x, i) {
                funcResult += (i + 1) + '.- ' + x.name +' is ' + x.age + ' years old\n';
            };
            
        people.each(iterateThem);
        assert.strictEqual(funcResult.trim(), testingResult.trim());
    })
})

describe('Ex15', function() {
    it('method should return an array with no arrays inside', function() {
      let testedArray = [ 1, 2, 3, [ 4, {name: 'pablo', age: 16 }, [ 6, 7, 'gumshoo' ], 9, 10, 11, 'parsimon', 13, 14 ], 15, 16].flatten();

      assert.isArray(testedArray);
      for (let i = 0; i < testedArray.length; i += 1) {
          assert.isNotArray(testedArray[i]);
      }
    });
  });