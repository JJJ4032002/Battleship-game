import PlaceAtPosition from "./PlaceAtPosition";
function ValidShipPlacement({
  element,
  length,
  ElementsToAvoidArray,
  shipCoordinatesArr,
  board,
  axisDecider,
}) {
  let row = element.getAttribute("data-row");
  let column = element.getAttribute("data-column");
  let ShipCanBePlaced = board.checkValidShipPlacement(
    row,
    column,
    length,
    axisDecider
  );
  if (ShipCanBePlaced) {
    board.placeShip(row, column, length, axisDecider);
    let ArrToAvoidCurrent = PlaceAtPosition(row, column, length, axisDecider);
    ElementsToAvoidArray = [...ElementsToAvoidArray, ...ArrToAvoidCurrent];
    shipCoordinatesArr = [
      ...shipCoordinatesArr,
      { row: row, column: column, length: length, axisDecider: axisDecider },
    ];
    length++;
  }
  return { length, ElementsToAvoidArray, shipCoordinatesArr };
}

export default ValidShipPlacement;
