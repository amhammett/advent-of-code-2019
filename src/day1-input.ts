#!/usr/bin/env node

const day1 = require('../src/day1-fuel-required');

// tslint:disable-next-line:no-any
let day1Process = (processFunction: any, path: string) => {
  const fs = require('fs');
  const inputFilePath = process.cwd() + path;

  let fuelTotal = 0;
  const massLines = fs.readFileSync(inputFilePath).toString().split('\n');

  for (let i = 0; i< massLines.length; i++) {
    fuelTotal += processFunction(massLines[i]);
  }

  return fuelTotal;
};

console.log('day1 part1: ' + day1Process(day1.part1, '/input/day1.part1.txt'));
console.log('day1 part2: ' + day1Process(day1.part2, '/input/day1.part2.txt'));
