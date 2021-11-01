import PlaceAtPosition from "../PlaceAtPosition";

function PlaceAllShips(Board, shipsArr, BoardId) {
  shipsArr.forEach(function (e) {
    Board.placeShip(e.row, e.column, e.length, e.axisDecider);
    PlaceAtPosition(e.row, e.column, e.length, e.axisDecider, BoardId);
  });
}

export default PlaceAllShips;
