function checkWhoWon(boards, position1, shipLength1, position2, shipLength2) {
  console.log(boards, position1, shipLength1, position2, shipLength2);
  let stat1 = boards.newBoard1.receiveAttack(position1, shipLength1);
  let ifAllShipsB1 = boards.newBoard1.AllShipsSunk();

  let stat2 = boards.newBoard2.receiveAttack(position2, shipLength2);
  let ifAllShipsB2 = boards.newBoard2.AllShipsSunk();

  if (ifAllShipsB1 === "All the ships are sunk") {
    return "Board1 is the winner";
  } else if (
    ifAllShipsB2 === "All the ships are sunk" &&
    ifAllShipsB1 === "All the ships are sunk"
  ) {
    return "The game has tied";
  } else if (ifAllShipsB2 === "All the ships are sunk") {
    return "Board 2 is the winner";
  } else {
    return "No board has one the game yet";
  }
}

export default checkWhoWon;
