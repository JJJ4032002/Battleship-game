function PlaceAllShips(Board, shipsArr, BoardId) {
  shipsArr.forEach(function (e) {
    Board.placeShip(e.length, e.position, BoardId);
  });
}

export default PlaceAllShips;
