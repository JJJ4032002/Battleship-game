import PlaceAtPosition from "../PlaceAtPosition";
function validPlacementShip({
  element,
  length,
  ArrToBeCopied,
  shipCoordinatesArr,
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
    let ArrToAvoidCurrent = PlaceAtPosition(row, column, length, axisDecider);
    ArrToBeCopied = [...ArrToBeCopied, ...ArrToAvoidCurrent];

    shipCoordinatesArr = [
      ...shipCoordinatesArr,
      { row: row, column: column, length: length, axisDecider: axisDecider },
    ];
    length++;
  }
  return { length, ArrToBeCopied, shipCoordinatesArr };
}

export default validPlacementShip;
