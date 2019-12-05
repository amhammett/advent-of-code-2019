const addToGrid = (array: string[], xOrigin: number, yOrigin: number, x: number, y: number) => {
  // extend if not large enough

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
};
