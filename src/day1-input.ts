#!/usr/bin/env node

const fs = require('fs');
const day1 = require('../src/day1-fuel-required');

let fuelTotal = 0;
let massLines = fs.readFileSync(process.cwd() + '/input/day1.txt').toString().split('\n');

for (let i = 0; i< massLines.length; i++) {
  fuelTotal += day1.fuelRequired(massLines[i]);
}

console.log(fuelTotal);