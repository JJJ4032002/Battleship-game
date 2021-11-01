import PlaceAtPosition from "../PlaceAtPosition";
function validPlacementShip({
  element,
  length,
  ArrToBeCopied,

  board,
  axisDecider,
}) {
  let row = element.getAttribute("data-row");
  let column = element.getAttribute("data-column");
  let ifShipCanBePlaced = board.checkValidShipPlacement(
    row,
    column,
    length,
    axisDecider
  );
  if (ifShipCanBePlaced) {
    board.placeShip(row, column, length, axisDecider);
    ArrToBeCopied = PlaceAtPosition(
      row,
      column,
      length,
      axisDecider,
      ArrToBeCopied
    );
    length++;
  }
  return { length, ArrToBeCopied };
}

export default validPlacementShip;
