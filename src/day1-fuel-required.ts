
module.exports = {
  part1: (input: number) => {
    let fuel = Math.floor(input/3) - 2;

    if (fuel < 0){
      fuel = 0;
    }

    return fuel;
  },
  part2: (input: number) => {
    
  }
};