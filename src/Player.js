const methodsObj = {
  AttackBoard: function (row, column, shipLength) {
    this.gameBoard.receiveAttack(row, column, shipLength);
    return this.gameBoard.AllShipsSunk();
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
