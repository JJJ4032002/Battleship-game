function validPlacementShip(
  element,
  length,
  ArrToBeCopied,
  ArrToBeCopiedFrom,
  board,
  axisDecider
) {
  if (length <= 5) {
    if (!element.getAttribute("data-ship")) {
      board.placeShip(length, element.id, "DummyBoard", axisDecider);
      ArrToBeCopied = [...ArrToBeCopied, ...ArrToBeCopiedFrom];
      length++;
    } else {
      console.log("Ship not placed");
    }
  }
  return { length, ArrToBeCopied };
}

export default validPlacementShip;
