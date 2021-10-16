function validPlacementShip(
  element,
  length,
  ArrToBeCopied,
  ArrToBeCopiedFrom,
  arrRed,
  shipCoordinatesArr,
  board,
  axisDecider
) {
  if (length <= 5) {
    let ClashedEleArr = validateTheArr(
      element,
      axisDecider,
      ArrToBeCopied,
      arrRed,
      length
    );
    if (
      ClashedEleArr.ValidatedArr.length === 0 &&
      ClashedEleArr.ValidatedArrRed.length === 0
    ) {
      board.placeShip(length, element.id, "DummyBoard", axisDecider);
      ArrToBeCopied = [...ArrToBeCopied, ...ArrToBeCopiedFrom];
      shipCoordinatesArr = [
        ...shipCoordinatesArr,
        { length: length, position: element.id, axisDecider: axisDecider },
      ];
      length++;
    } else {
      console.log("Ship not placed");
    }
  }
  return { length, ArrToBeCopied, shipCoordinatesArr };
}

function validateTheArr(element, axisDecider, ArrToBeCopied, arrRed, length) {
  let BlockCount = 0;
  let arrToValidate = [];
  let tempEle = element;
  let tempId = element.id;
  while (BlockCount < length) {
    arrToValidate.push(tempEle);
    if (axisDecider) {
      tempId++;
    } else {
      tempId = Number(tempId) + 10;
    }
    tempEle = document.querySelector(`[data-box = "DummyBoard${tempId}"]`);
    BlockCount++;
  }
  const ValidatedArr = arrToValidate.filter((e) => {
    return ArrToBeCopied.includes(e);
  });

  const ValidatedArrRed = arrToValidate.filter((e) => {
    return arrRed.includes(e);
  });

  return { ValidatedArr, ValidatedArrRed };
}

export default validPlacementShip;
