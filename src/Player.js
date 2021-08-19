const methodsObj = {
  attackShip: () => {
    this.gameBoard.receiveAttack();
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
