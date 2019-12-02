const fuelForMass = (input:number) => {
  let fuel = Math.floor(input/3) - 2;

  if (fuel < 0) {
    fuel = 0;
  }

  return fuel;
};

const fuelForMassAndFuel = (input: number) => {
  let fuel = fuelForMass(input);
  let total = fuel;

  while (fuel > 0) {
    fuel = fuelForMass(fuel);
    total += fuel;
  }

  return total;
};

module.exports = {
  fuelForMass,
  fuelForMassAndFuel,
};
