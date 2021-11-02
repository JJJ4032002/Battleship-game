import ColorChange from "./ChangeColorBoard";
function PlayersAttackShip(boards, CoordinatesOneArr, CoordinatesTwoArr) {
  let [row1, column1] = CoordinatesOneArr;
  let [row2, column2] = CoordinatesTwoArr;

  let Board2AttackedObj = boards.PlayerOne.AttackBoard(row2, column2);
  let Board1AttackedObj = {};
  if (Board2AttackedObj.ShipHit !== "The ship has already been hit") {
    Board1AttackedObj = boards.PlayerTwo.AttackBoard(row1, column1);

    ColorChange(
      Board2AttackedObj.ShipHit,
      Board1AttackedObj.ShipHit,
      CoordinatesOneArr,
      CoordinatesTwoArr
    );
  } else {
    console.log("Stopped ai from making the move");
  }

  return {
    ifAllShipsB1: Board1AttackedObj.IfShipsSunk,
    ifAllShipsB2: Board2AttackedObj.IfShipsSunk,
  };
}

export default PlayersAttackShip;
