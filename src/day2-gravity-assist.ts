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

const gravityAssist = (input: string, exitCode?: number) => {
  const intcode = input.split(',');
  let result: string | undefined;

  for (let i=0; i < intcode.length; i=i+4) {
    const opCode = intcode[i];
    let opAnswer;

    if (opCode === magic.opStop) {
      result = intcode.join(',');
      break;
      // return intcode.join(',');
    }

    const element1 = Number(intcode[Number(intcode[(i+1)])]);
    const element2 = Number(intcode[Number(intcode[(i+2)])]);
    const opTarget = Number(intcode[(i+3)]);

    if (opCode === magic.opAdd) {
      opAnswer = element1 + element2;
    } else if (opCode === magic.opMultiply) {
      opAnswer = element1 * element2;
    }

    if (exitCode !== undefined && opAnswer === exitCode) {
      result = String(exitCode);
      break;
      // return exitCode;
    }

    intcode[opTarget] = String(opAnswer);
  }

  return result;
};

module.exports = {
  updateProgramRef,
  gravityAssist,
};
