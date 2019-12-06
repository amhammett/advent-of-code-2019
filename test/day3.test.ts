import * as assert from 'assert';

const day3 = require('../src/day3-cross-wires');

interface SampleData {
  wire1: string;
  wire2: string;
  distance: number;
}

describe('day 3 part 1 intersect', () => {
  // start o
  // lines -/|
  // end of ref +
  // intersection x 
  const sampleInput = {
    'R8': [['o', '-', '-', '-', '-', '-', '-', '-', '+']],
    'U5': [['+'], ['|'], ['|'], ['|'], ['|'],['o']],
    'L5': [['+', '-', '-', '-', '-', 'o']],
    'D3': [['o'], ['|'], ['|'], ['+']],
  };

  for (const [input, output] of Object.entries(sampleInput)) {
    it('input (' + input + ') should match expected output (' + output + ')', () => {
      return assert.deepEqual(day3.drawLine(input), output);
    });
  }
});

describe('day 3 part 1 intersect', () => {
  const sampleInput: SampleData[] = [
    {
      'wire1': 'R8,U5,L5,D3',
      'wire2': 'U7,R6,D4,L4',
      'distance': 6,
/*
    }, {
      'wire1': 'R75,D30,R83,U83,L12,D49,R71,U7,L72',
      'wire2': 'U62,R66,U55,R34,D71,R55,D58,R83',
      'distance': 159,
    }, {
      'wire1': 'R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51',
      'wire2': 'U98,R91,D20,R16,D67,R40,U7,R15,U6,R7',
      'distance':  135,
*/
    },
  ];

  for (let i = 0; i < sampleInput.length; i++) {
    const wire1 = sampleInput[i].wire1;
    const wire2 = sampleInput[i].wire2;
    const distance = sampleInput[i].distance;

    it('wire1 (' + wire1 + ') should intersect wire2 (' + wire2 + ') with distance (' + distance + ')', () => {
      return assert.strictEqual(day3.crossWiresDistance(wire1, wire2), distance);
    });
  }
});
