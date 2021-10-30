function validPlacementShip({
  element,
  length,
  ArrToBeCopied,
  ArrToBeCopiedFrom,
  arrRed,
  shipCoordinatesArr,
  board,
  axisDecider,
}) {
  let row = document.getAttribute("data-row");
  let column = document.getAttribute("data-column");
  let ifShipCanBePlaced = board.checkValidShipPlacement(
    row,
    column,
    length,
    axisDecider
  );
  if (ifShipCanBePlaced) {
    board.placeShip(row, column, shipLength, axisDecider);
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
