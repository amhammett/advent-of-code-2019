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

console.log('day2 part1: ' + day2ProcessPart1('/input/day2.part1.txt'));
//console.log('day2 part2: ' + day2Process(day2.part2, '/input/day2.part2.txt'));
