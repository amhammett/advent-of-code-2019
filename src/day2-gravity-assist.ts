const debug = true;
const magic = {
  opAdd: '1',
  opMultiply: '2',
  opStop: '99',
};

const updateProgramRef = (intcode: number[], index: number, value: number) => {
  intcode[index] = value;
  return intcode;
};

const gravityAssist = (input: string) => {
  const intcode = input.split(',');

  for (let i=0; i < intcode.length; i=i+4) {
    const opCode = intcode[i];
    let opAnswer;

    if (opCode === magic.opStop) {
      return intcode.join(',');
    }

    const element1 = Number(intcode[Number(intcode[(i+1)])]);
    const element2 = Number(intcode[Number(intcode[(i+2)])]);
    const opTarget = Number(intcode[(i+3)]);

    if (opCode === magic.opAdd) {
      opAnswer = element1 + element2;

    } else if (opCode === magic.opMultiply) {
      opAnswer = element1 * element2;
    }

    if (opAnswer === 19690720) { // hack of a solution
      console.log('--- element1=' + element1 + ' element2=' + element2);

      // super lazy
      return false;
    }

    intcode[opTarget] = String(opAnswer);
  }
};

const gravityAssistAndFuel = (input: string) => {
  return input;
};

module.exports = {
  updateProgramRef,
  gravityAssist,
  gravityAssistAndFuel,
};
