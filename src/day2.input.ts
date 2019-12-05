#!/usr/bin/env node

const day2Process = () => {
  const day2 = require('../src/day2-gravity-assist');
  const fs = require('fs');
  const inputFilePathPart1 = process.cwd() + '/input/day2.part1.txt';
  const inputFilePathPart2 = process.cwd() + '/input/day2.part2.txt';

  let intcode = fs.readFileSync(inputFilePathPart1).toString().split(',');
  const exitCode = Number(fs.readFileSync(inputFilePathPart2).toString().split('\n')[0]);

  const part1 = (path: string) => {
    intcode = day2.updateProgramRef(intcode, 1, 12);
    intcode = day2.updateProgramRef(intcode, 2, 2);

    return day2.gravityAssist(intcode.join(',')).split(',')[0];
  };

  const part2 = (intcode: string[], exitCode: number) => {
    for (let i = 0; i < 100; i++) {
      for (let j = 0; j < 100; j++) {
        intcode = day2.updateProgramRef(intcode, 1, i);
        intcode = day2.updateProgramRef(intcode, 2, j);

        if (day2.gravityAssist(intcode.join(','), exitCode) === exitCode) {
          return String(i) + String(j);
        }
      }
    }
  };

  console.log('day2.part1=' + part1(intcode));
  console.log('day2.part2=' + part2(intcode, exitCode));
};

day2Process();
