const isValidPassword = (input: string) => {
  let validPassword = true;
  let adjacentDigits = false;

  for (let i = 0; i < input.length; i++) {
    if (i !== 0 && input[i] === input[i - 1]) {
      adjacentDigits = true;
    }

    if (Number(input[i]) < Number(input[i - 1])) {
      validPassword = false;
    }
  }

  return validPassword && adjacentDigits;
};

// lazy because increasing i isn't the most efficient
const lazyNumberRange = (input: string, passwordFunction=isValidPassword) => {
  let count = 0;
  const numArray = input.split('-');
  const min = Number(numArray[0]);
  const max = Number(numArray[1]);

  if (min < max) {
    for (let i=min; i<max + 1; i++) {
      if (passwordFunction(String(i))) {
        count++;
      }
    }
  } else if (min === max && passwordFunction(String(min))) {
    count++;
  }

  return count;
};

const lazyNumberRangePlus = (input: string) => {
  return lazyNumberRange(input, isValidPasswordPlus);
};

const hasOneTrue = (boolArray: boolean[]) => {
  let hasTrue = false;

  for (let i = 0; i < boolArray.length; i++) {
    if (boolArray[i] && boolArray[i] != null) {
      hasTrue = true;
      break;
    }
  }

  return hasTrue;
};

const isValidPasswordPlus = (input: string) => {
  let validPassword = true;
  const adjacentDigits: boolean[] = [];

  for (let i = 1; i < input.length; i++) {
    const currentDigit = Number(input[i]);
    const previousDigit = Number(input[i - 1]);

    if (input[i] === input[i - 1]) {
      if (currentDigit in adjacentDigits) {
        adjacentDigits[currentDigit] = false;
      } else {
        adjacentDigits[currentDigit] = true;
      }
    }

    if (currentDigit < previousDigit) {
      validPassword = false;
    }
  }

  return validPassword && hasOneTrue(adjacentDigits);
};

module.exports = {
  isValidPassword,
  isValidPasswordPlus,
  lazyNumberRange,
  lazyNumberRangePlus,
};
