const methodsObj = {
  AttackBoard: function (row, column) {
    let ShipHit = this.gameBoard.receiveAttack(row, column);
    let IfShipsSunk = this.gameBoard.AllShipsSunk();
    return { ShipHit, IfShipsSunk };
  },
  getName: function () {
    return this.name;
  },
};

function Player(name, gameBoard) {
  let PlayerObj = Object.assign(Object.create(methodsObj), {
    name,
    gameBoard,
  });

  return PlayerObj;
}

export default Player;
