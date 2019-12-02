import * as assert from 'assert';

const day2 = require('../src/day2-gravity-assist');

describe('day 2 part 1', () => {
  const sampleInput = {
    '1,0,0,0,99': '2,0,0,0,99',
    '2,3,0,3,99': '2,3,0,6,99',
    '2,4,4,5,99,0': '2,4,4,5,99,9801',
    '1,1,1,4,99,5,6,0,99': '30,1,1,4,2,5,6,0,99',
    '1,9,10,3,2,3,11,0,99,30,40,50': '3500,9,10,70,2,3,11,0,99,30,40,50',
  };

  for (const [input, output] of Object.entries(sampleInput)) {
    it('input (' + input + ') should match expected output (' + output + ')', () => {
      return assert.strictEqual(day2.gravityAssist(input), output);
    });
  }
});

describe('day 2 part 2', () => {
  const sampleInput = {
  };

  for (const [input, output] of Object.entries(sampleInput)) {
    it('input (' + input + ') should match expected output (' + output + ')', () => {
      return assert.strictEqual(day2.gravityAssistAndFuel(input), output);
    });
  }
});

