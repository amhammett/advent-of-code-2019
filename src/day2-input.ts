#!/usr/bin/env node

const day2 = require('../src/day2-gravity-assist');

let day2ProcessPart1 = (path: string) => {
  const fs = require('fs');
  const inputFilePath = process.cwd() + path;
  let intcode = fs.readFileSync(inputFilePath).toString().split(',');

  intcode = day2.updateProgramRef(intcode, 1, 12);
  intcode = day2.updateProgramRef(intcode, 2, 2);

  return day2.gravityAssist(intcode.join(','));
};

let day2ProcessPart2 = (path: string) => {
  const fs = require('fs');
  const inputFilePath = process.cwd() + path;
  let intcode;

  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
      intcode = fs.readFileSync(inputFilePath).toString().split(',');
      day2.updateProgramRef(intcode, 1, i);
      day2.updateProgramRef(intcode, 2, j);

      if (day2.gravityAssist(intcode.join(',')) === false) {
          console.log('utilizing: ' + i + j);
      }
    }
  }

};

//console.log('day2 part1: ' + day2ProcessPart1('/input/day2.part1.txt'));
day2ProcessPart2('/input/day2.part1.txt');
