import PlaceAtPosition from "./PlaceAtPosition";

function PlaceAllShips(Board, shipsArr, BoardId) {
  shipsArr.forEach(function (element) {
    Board.placeShip(
      element.row,
      element.column,
      element.length,
      element.axisDecider
    );
    PlaceAtPosition(
      element.row,
      element.column,
      element.length,
      element.axisDecider,
      BoardId
    );
  });
}

export default PlaceAllShips;
