import * as assert from 'assert';

const day4 = require('../src/day4-secure-container');

describe('day 4 part 1 valid numbers', () => {
  const sampleInput = {
    '111111': true,
    '223450': false,
    '123789': false,
  };

  for (const [input, output] of Object.entries(sampleInput)) {
    it('input (' + input + ') should match expected output (' + output + ')', () => {
      return assert.strictEqual(day4.isValidPassword(input), output);
    });
  }
});

describe('day 4 part 1 lazy number range', () => {
  const sampleInput = {
    '110-111': 1,
    '111-112': 2,
    '111-111': 1,
    '111-110': 0,
    '10-30': 2,
    '100-300': 32,
  };

  for (const [input, output] of Object.entries(sampleInput)) {
    it('input (' + input + ') should match expected output (' + output + ')', () => {
      return assert.strictEqual(day4.lazyNumberRange(input), output);
    });
  }
});

describe('day 4 part 2 valid numbers plus', () => {
  const sampleInput = {
    '112233': true,
    '123444': false,
    '111122': true,
  };

  for (const [input, output] of Object.entries(sampleInput)) {
    it('input (' + input + ') should match expected output (' + output + ')', () => {
      return assert.strictEqual(day4.isValidPasswordPlus(input), output);
    });
  }
});

describe('day 4 part 2 lazy number range plus', () => {
  const sampleInput = {
    '110-111': 0,
    '111-112': 1,
    '111-111': 0,
    '111-110': 0,
    '10-30': 2,
    '100-300': 30,
  };

  for (const [input, output] of Object.entries(sampleInput)) {
    it('input (' + input + ') should match expected output (' + output + ')', () => {
      return assert.strictEqual(day4.lazyNumberRangePlus(input), output);
    });
  }
});
