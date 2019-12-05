#!/usr/bin/env node

const day4 = require('../src/day4-secure-container');
const fs = require('fs');
const inputFilePath = process.cwd() + '/input/day4.part1.txt';
const passwordRange = fs.readFileSync(inputFilePath).toString();

console.log('day4.part1: ' + day4.lazyNumberRange(passwordRange));
console.log('day4.part2: ' + day4.lazyNumberRangePlus(passwordRange));
