import * as assert from 'assert';

const day1 = require('../src/day1-fuel-required');

describe('day 1 part 1', () => {
  const sampleInput = {
    12: 2,
    14: 2,
    1969: 654,
    100756: 33583,
  };

  for (const [input, output] of Object.entries(sampleInput)) {
    it('input (' + input + ') should match expected output (' + output + ')', () => {
      return assert.strictEqual(day1.fuelForMass(input), output);
    });
  }
});

describe('day 1 part 2', () => {
  const sampleInput = {
    12: 2,
    14: 2,
    1969: 966,
    100756: 50346,
  };

  for (const [input, output] of Object.entries(sampleInput)) {
    it('input (' + input + ') should match expected output (' + output + ')', () => {
      return assert.strictEqual(day1.fuelForMassAndFuel(input), output);
    });
  }
});
