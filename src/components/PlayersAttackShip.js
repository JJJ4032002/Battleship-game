import ColorChange from "./ChangeColorBoard";
function PlayersAttackShip(
  boards,
  position1,
  shipLength1,
  position2,
  shipLength2,
  element1,
  element2
) {
  let stat1;
  let ifAllShipsB1;

  let stat2 = boards.newBoard2.receiveAttack(position2, shipLength2);
  let ifAllShipsB2 = boards.newBoard2.AllShipsSunk();
  if (stat2 !== "The ship has already been hit") {
    stat1 = boards.newBoard1.receiveAttack(position1, shipLength1);
    ifAllShipsB1 = boards.newBoard1.AllShipsSunk();
    ColorChange(shipLength1, shipLength2, element1, element2);
  } else {
    console.log("Stopped ai from making the move");
  }

  return { ifAllShipsB1, ifAllShipsB2 };
}

export default PlayersAttackShip;
