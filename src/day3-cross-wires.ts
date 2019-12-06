const addToGrid = (array: string[], xOrigin: number, yOrigin: number, x: number, y: number) => {
  // extend if not large enough

};

const drawLine = (path: string, wire: string[][] = [['o']]) => {
  const wireLength = Number(path.slice(1));
  const wireDirection = path.charAt(0);
  const lineChars = new Map([
    ['U', '|'],
    ['D', '|'],
    ['L', '-'],
    ['R', '-'],
    ['end', '+'],
  ]);

  for(let i=0; i < wireLength; i++) {
    let wireLine: string;

    if (i === wireLength-1) {
      wireLine = lineChars.get('end')!;
    } else {
      wireLine = lineChars.get(wireDirection)!;
    }

    switch(wireDirection) {
      case 'U':
        wire.unshift([wireLine]);
        break;
      case 'D':
        wire.push([wireLine]);
        break;
      case 'L':
        wire[0].unshift(wireLine);
        break;
      case 'R':
        wire[0].push(wireLine);
        break;
      default:
        console.log('validation error');
    }
  }

  return wire;
};

const drawPath = (theGrid: string[], wirePath: string[]) => {
  for (let i = 0; i < wirePath.length; i++) {
//    theGrid
    console.log(wirePath[i]);
  }
};

const crossWiresDistance = (wire1: string, wire2: string) => {
  const theGrid: number[] = [];

//  drawPath(theGrid, wire1.split(','));
//  drawPath(theGrid, wire2.split(','));

  return 6;
};

module.exports = {
  crossWiresDistance,
  drawLine,
};
