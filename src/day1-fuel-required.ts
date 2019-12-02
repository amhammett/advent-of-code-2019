const part1 = (input:number) => {
  let fuel = Math.floor(input/3) - 2;

  if (fuel < 0) {
    fuel = 0;
  }

  return fuel;
};

const part2 = (input: number) => {
  let fuel = part1(input);
  let total = fuel;

  while (fuel > 0) {
    fuel = part1(fuel);
    total += fuel;
  }

  return total;
};

module.exports = {
  part1,
  part2,
};
